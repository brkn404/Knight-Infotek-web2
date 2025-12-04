#!/usr/bin/env python3
"""
Extract ALL documentation links and generate comprehensive test report.

This script:
1. Scans all markdown files
2. Extracts all links
3. Resolves relative links to absolute /docs/ routes
4. Generates test script
5. Creates detailed inventory
"""

import re
from pathlib import Path
from collections import defaultdict
from typing import List, Tuple, Dict, Set

PROJECT_ROOT = Path(__file__).parent
CONTENT_DOCS = PROJECT_ROOT / "content" / "docs"
PUBLIC_DOCS = PROJECT_ROOT / "client" / "public" / "content" / "docs"

all_links: Dict[str, List[Tuple[str, str, str]]] = defaultdict(list)  # category -> [(file, text, url)]
resolved_urls: Set[str] = set()


def extract_links(file_path: Path) -> List[Tuple[str, str]]:
    """Extract all links from a markdown file."""
    try:
        content = file_path.read_text(encoding='utf-8')
        links = []
        
        # Markdown links: [text](url)
        for match in re.finditer(r'\[([^\]]+)\]\(([^)]+)\)', content):
            links.append((match.group(1), match.group(2)))
        
        # HTML links
        for match in re.finditer(r'<a\s+[^>]*href=["\']([^"\']+)["\']', content):
            links.append(('', match.group(1)))
        
        return links
    except:
        return []


def resolve_to_docs_url(url: str, source_file: Path) -> str:
    """Resolve a relative URL to an absolute /docs/ route."""
    # Already absolute
    if url.startswith('/docs/'):
        return url
    
    # External
    if url.startswith('http'):
        return url
    
    # Get product from source file path
    rel_path = source_file.relative_to(CONTENT_DOCS)
    parts = list(rel_path.parts)
    product = parts[0] if parts else 'blockchain-dna'
    
    # Remove filename
    if parts and parts[-1].endswith('.md'):
        parts = parts[:-1]
    
    # Handle relative paths
    if url.startswith('../'):
        url_parts = url.split('/')
        up_count = sum(1 for p in url_parts if p == '..')
        target = url_parts[up_count:]
        
        # Go up directories
        if up_count <= len(parts):
            parts = parts[:-up_count]
        
        # Build path
        if not target or (len(target) == 1 and target[0] == ''):
            # Directory link
            if parts:
                dir_name = parts[-1] if len(parts) > 1 else ''
                return f"/docs/{product}/{dir_name}/README"
            return f"/docs/{product}/README"
        
        # File link
        filename = target[-1]
        if filename.endswith('.md'):
            filename = filename[:-3]
        if filename.lower() == 'readme':
            filename = 'README'
        
        dir_parts = parts[1:] + target[:-1] if len(target) > 1 else parts[1:]
        if dir_parts:
            return f"/docs/{product}/{'/'.join(dir_parts)}/{filename}"
        return f"/docs/{product}/{filename}"
    
    elif url.startswith('./'):
        target = url[2:]
        if target.endswith('.md'):
            target = target[:-3]
        if target.lower() == 'readme':
            target = 'README'
        if target.endswith('/'):
            target = target[:-1] + '/README'
        
        dir_parts = parts[1:] if len(parts) > 1 else []
        if dir_parts:
            return f"/docs/{product}/{'/'.join(dir_parts)}/{target}"
        return f"/docs/{product}/{target}"
    
    # Bare filename or directory
    if url.endswith('/'):
        dir_name = url[:-1]
        return f"/docs/{product}/{dir_name}/README"
    
    if url.endswith('.md'):
        url = url[:-3]
    if url.lower() == 'readme':
        url = 'README'
    
    dir_parts = parts[1:] if len(parts) > 1 else []
    if dir_parts:
        return f"/docs/{product}/{'/'.join(dir_parts)}/{url}"
    return f"/docs/{product}/{url}"


def main():
    print("🔍 Extracting all documentation links...\n")
    
    # Find all markdown files
    md_files = list(CONTENT_DOCS.rglob("*.md"))
    print(f"Found {len(md_files)} markdown files\n")
    
    # Extract and categorize links
    for md_file in md_files:
        rel_path = md_file.relative_to(CONTENT_DOCS)
        links = extract_links(md_file)
        
        for link_text, link_url in links:
            if link_url.startswith('http') or link_url.startswith('mailto:') or link_url.startswith('#'):
                all_links['external'].append((str(rel_path), link_text, link_url))
            elif link_url.startswith('/docs/'):
                all_links['absolute'].append((str(rel_path), link_text, link_url))
                resolved_urls.add(link_url)
            else:
                resolved = resolve_to_docs_url(link_url, md_file)
                all_links['relative'].append((str(rel_path), link_text, link_url))
                if resolved.startswith('/docs/'):
                    resolved_urls.add(resolved)
    
    # Generate test script
    test_script = PROJECT_ROOT / "test-all-doc-links.sh"
    with open(test_script, 'w') as f:
        f.write("#!/bin/bash\n")
        f.write("# Comprehensive test script for all documentation links\n")
        f.write("BASE_URL=\"${1:-http://localhost:5001}\"\n\n")
        f.write("PASSED=0\n")
        f.write("FAILED=0\n\n")
        f.write("test_url() {\n")
        f.write("    local url=$1\n")
        f.write("    local status=$(curl -s -o /dev/null -w \"%{http_code}\" \"$url\" 2>/dev/null)\n")
        f.write("    if [ \"$status\" = \"200\" ]; then\n")
        f.write("        echo \"  ✅ $url\"\n")
        f.write("        ((PASSED++))\n")
        f.write("    else\n")
        f.write("        echo \"  ❌ $url → HTTP $status\"\n")
        f.write("        ((FAILED++))\n")
        f.write("    fi\n")
        f.write("}\n\n")
        f.write("echo \"🧪 Testing all documentation endpoints...\"\n")
        f.write("echo \"Base URL: $BASE_URL\"\n")
        f.write("echo \"\"\n\n")
        
        # Test all resolved URLs
        for url in sorted(resolved_urls):
            f.write(f'test_url "$BASE_URL{url}"\n')
        
        f.write("\necho \"\"\n")
        f.write("echo \"📊 Results: ✅ $PASSED passed, ❌ $FAILED failed\"\n")
        f.write("exit $FAILED\n")
    
    test_script.chmod(0o755)
    
    # Generate inventory
    inventory = PROJECT_ROOT / "ALL_DOC_LINKS_INVENTORY.md"
    with open(inventory, 'w') as f:
        f.write("# All Documentation Links Inventory\n\n")
        f.write(f"**Total Files**: {len(md_files)}\n")
        f.write(f"**Total Links**: {sum(len(links) for links in all_links.values())}\n")
        f.write(f"**Unique /docs/ URLs**: {len(resolved_urls)}\n\n")
        
        f.write("## Absolute /docs/ Links\n\n")
        for file, text, url in sorted(set(all_links['absolute'])):
            f.write(f"- `{file}`: [{text}]({url})\n")
        
        f.write("\n## Resolved Relative Links\n\n")
        relative_resolved = {}
        for file, text, orig_url in all_links['relative']:
            # Resolve it
            source_file = CONTENT_DOCS / file
            resolved = resolve_to_docs_url(orig_url, source_file)
            if resolved.startswith('/docs/'):
                key = f"{file}:{orig_url}"
                if key not in relative_resolved:
                    relative_resolved[key] = (text, orig_url, resolved)
        
        for file_url, (text, orig, resolved) in sorted(relative_resolved.items()):
            file = file_url.split(':')[0]
            f.write(f"- `{file}`: [{text}]({orig}) → {resolved}\n")
        
        f.write("\n## All Test URLs\n\n")
        for url in sorted(resolved_urls):
            f.write(f"- {url}\n")
    
    print("=" * 80)
    print("📊 EXTRACTION RESULTS")
    print("=" * 80)
    print(f"Files scanned: {len(md_files)}")
    print(f"Absolute /docs/ links: {len(all_links['absolute'])}")
    print(f"Relative links: {len(all_links['relative'])}")
    print(f"External links: {len(all_links['external'])}")
    print(f"Unique /docs/ URLs to test: {len(resolved_urls)}")
    print(f"\n✅ Generated test script: {test_script}")
    print(f"✅ Generated inventory: {inventory}")
    print("\nTo test all links, run:")
    print(f"  ./test-all-doc-links.sh http://localhost:5001")


if __name__ == "__main__":
    main()

