#!/usr/bin/env python3
"""
Extract ALL documentation links from markdown files and generate a test report.

This script:
1. Scans all markdown files in content/docs/
2. Extracts all links (markdown and HTML)
3. Categorizes them by type (absolute /docs/, relative, external)
4. Generates a comprehensive report with test URLs
"""

import os
import re
from pathlib import Path
from typing import List, Tuple, Dict, Set
from collections import defaultdict

# Project root
PROJECT_ROOT = Path(__file__).parent
CONTENT_DOCS = PROJECT_ROOT / "content" / "docs"
PUBLIC_DOCS = PROJECT_ROOT / "client" / "public" / "content" / "docs"

# Track all links
all_links: Dict[str, List[Tuple[str, str, str]]] = defaultdict(list)  # category -> [(source_file, link_text, link_url)]
absolute_docs_links: Set[str] = set()
relative_links: Set[str] = set()
external_links: Set[str] = set()
directory_links: Set[str] = set()


def extract_links_from_markdown(file_path: Path) -> List[Tuple[str, str]]:
    """Extract all links from a markdown file."""
    try:
        content = file_path.read_text(encoding='utf-8')
        links = []

        # Markdown links: [text](url)
        md_pattern = r'\[([^\]]+)\]\(([^)]+)\)'
        for match in re.finditer(md_pattern, content):
            link_text = match.group(1)
            link_url = match.group(2)
            links.append((link_text, link_url))

        # HTML links: <a href="url">text</a>
        html_pattern = r'<a\s+(?:[^>]*?\s+)?href=["\']([^"\']+)["\'](?:[^>]*?)>(.*?)</a>'
        for match in re.finditer(html_pattern, content):
            link_url = match.group(1)
            link_text = match.group(2)
            links.append((link_text, link_url))

        return links
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return []


def categorize_link(url: str) -> str:
    """Categorize a link URL."""
    if url.startswith('http://') or url.startswith('https://') or url.startswith('mailto:'):
        return 'external'
    elif url.startswith('/docs/'):
        return 'absolute_docs'
    elif url.startswith('../') or url.startswith('./'):
        if url.endswith('/'):
            return 'directory_relative'
        return 'relative'
    elif url.startswith('#'):
        return 'anchor'
    else:
        return 'unknown'


def resolve_relative_link(url: str, source_file: Path) -> str:
    """Resolve a relative link to an absolute /docs/ route."""
    # Get source file's relative path from content/docs
    rel_source = source_file.relative_to(CONTENT_DOCS)
    source_parts = list(rel_source.parts)
    
    # Remove filename
    if source_parts[-1].endswith('.md'):
        source_parts = source_parts[:-1]
    
    # Parse relative URL
    if url.startswith('../'):
        # Go up directories
        parts = url.split('/')
        up_count = sum(1 for p in parts if p == '..')
        target_parts = parts[up_count:]
        
        # Remove .. from source_parts
        source_parts = source_parts[:-up_count] if up_count <= len(source_parts) else []
        
        # Build target path
        if target_parts:
            target_file = target_parts[-1]
            if target_file.endswith('.md'):
                target_file = target_file[:-3]
            if target_file.lower() == 'readme':
                target_file = 'README'
            
            # Build /docs/ route
            product = source_parts[0] if source_parts else 'blockchain-dna'
            path_parts = source_parts[1:] + target_parts[:-1] if len(target_parts) > 1 else source_parts[1:]
            
            if path_parts:
                return f"/docs/{product}/{'/'.join(path_parts)}/{target_file}"
            else:
                return f"/docs/{product}/{target_file}"
        else:
            # Directory link
            product = source_parts[0] if source_parts else 'blockchain-dna'
            dir_name = source_parts[-1] if len(source_parts) > 1 else ''
            if dir_name:
                return f"/docs/{product}/{dir_name}/README"
            else:
                return f"/docs/{product}/README"
    
    elif url.startswith('./'):
        # Same directory
        target = url[2:]
        if target.endswith('.md'):
            target = target[:-3]
        if target.lower() == 'readme':
            target = 'README'
        
        product = source_parts[0] if source_parts else 'blockchain-dna'
        path_parts = source_parts[1:] if len(source_parts) > 1 else []
        
        if path_parts:
            return f"/docs/{product}/{'/'.join(path_parts)}/{target}"
        else:
            return f"/docs/{product}/{target}"
    
    return url


def main():
    """Main function to extract and categorize all links."""
    print("🔍 Extracting all documentation links...\n")
    
    # Find all markdown files
    md_files = list(CONTENT_DOCS.rglob("*.md"))
    print(f"Found {len(md_files)} markdown files\n")
    
    # Extract links from each file
    for md_file in md_files:
        rel_path = md_file.relative_to(CONTENT_DOCS)
        links = extract_links_from_markdown(md_file)
        
        for link_text, link_url in links:
            category = categorize_link(link_url)
            all_links[category].append((str(rel_path), link_text, link_url))
            
            if category == 'absolute_docs':
                absolute_docs_links.add(link_url)
            elif category in ('relative', 'directory_relative'):
                relative_links.add(link_url)
            elif category == 'external':
                external_links.add(link_url)
            elif category == 'directory_relative':
                directory_links.add(link_url)
    
    # Generate report
    print("=" * 80)
    print("📊 DOCUMENTATION LINKS REPORT")
    print("=" * 80)
    print(f"\nTotal files scanned: {len(md_files)}")
    print(f"Total links found: {sum(len(links) for links in all_links.values())}")
    print(f"\nLink Categories:")
    for category, links in sorted(all_links.items()):
        print(f"  {category}: {len(links)}")
    
    # Generate test URLs
    print("\n" + "=" * 80)
    print("🧪 TEST URLs (Absolute /docs/ Links)")
    print("=" * 80)
    
    test_urls = sorted(absolute_docs_links)
    for url in test_urls:
        print(f"  {url}")
    
    print("\n" + "=" * 80)
    print("🔗 RELATIVE LINKS (Need Normalization)")
    print("=" * 80)
    
    # Group relative links by pattern
    relative_patterns = defaultdict(list)
    for source_file, link_text, link_url in all_links.get('relative', []) + all_links.get('directory_relative', []):
        pattern = link_url.split('/')[-1] if '/' in link_url else link_url
        relative_patterns[pattern].append((source_file, link_text, link_url))
    
    for pattern, links in sorted(relative_patterns.items()):
        print(f"\n  Pattern: {pattern} ({len(links)} occurrences)")
        for source_file, link_text, link_url in links[:5]:  # Show first 5
            resolved = resolve_relative_link(link_url, CONTENT_DOCS / source_file)
            print(f"    {source_file}: [{link_text}]({link_url}) → {resolved}")
        if len(links) > 5:
            print(f"    ... and {len(links) - 5} more")
    
    # Write test script
    test_script = PROJECT_ROOT / "test-all-doc-links.sh"
    with open(test_script, 'w') as f:
        f.write("#!/bin/bash\n")
        f.write("# Auto-generated test script for all documentation links\n")
        f.write(f"# Generated from {len(md_files)} markdown files\n\n")
        f.write("BASE_URL=\"${1:-http://localhost:5001}\"\n\n")
        f.write("echo \"🧪 Testing all documentation links...\"\n")
        f.write("echo \"Base URL: $BASE_URL\"\n")
        f.write("echo \"\"\n\n")
        
        f.write("test_url() {\n")
        f.write("    local url=$1\n")
        f.write("    local status=$(curl -s -o /dev/null -w \"%{http_code}\" \"$url\")\n")
        f.write("    if [ \"$status\" = \"200\" ]; then\n")
        f.write("        echo \"  ✅ $url\"\n")
        f.write("    else\n")
        f.write("        echo \"  ❌ $url → $status\"\n")
        f.write("    fi\n")
        f.write("}\n\n")
        
        f.write("echo \"Testing absolute /docs/ links:\"\n")
        for url in sorted(absolute_docs_links):
            f.write(f'test_url "$BASE_URL{url}"\n')
        
        f.write("\necho \"\"\n")
        f.write("echo \"Testing resolved relative links:\"\n")
        # Add resolved relative links
        for source_file, link_text, link_url in all_links.get('relative', [])[:50]:  # Limit to 50
            resolved = resolve_relative_link(link_url, CONTENT_DOCS / source_file)
            if resolved.startswith('/docs/'):
                f.write(f'test_url "$BASE_URL{resolved}"\n')
    
    test_script.chmod(0o755)
    print(f"\n✅ Generated test script: {test_script}")
    
    # Write detailed report
    report_file = PROJECT_ROOT / "ALL_DOC_LINKS_REPORT.md"
    with open(report_file, 'w') as f:
        f.write("# All Documentation Links Report\n\n")
        f.write(f"**Generated**: {Path(__file__).stat().st_mtime}\n")
        f.write(f"**Files Scanned**: {len(md_files)}\n")
        f.write(f"**Total Links**: {sum(len(links) for links in all_links.values())}\n\n")
        
        f.write("## Link Categories\n\n")
        for category, links in sorted(all_links.items()):
            f.write(f"### {category.upper().replace('_', ' ')} ({len(links)} links)\n\n")
            for source_file, link_text, link_url in links[:20]:  # Show first 20
                f.write(f"- `{source_file}`: [{link_text}]({link_url})\n")
            if len(links) > 20:
                f.write(f"\n*... and {len(links) - 20} more*\n")
            f.write("\n")
    
    print(f"✅ Generated detailed report: {report_file}")
    print("\n" + "=" * 80)
    print("✅ Extraction complete!")
    print("=" * 80)


if __name__ == "__main__":
    main()
