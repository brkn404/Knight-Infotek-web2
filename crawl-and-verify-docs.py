#!/usr/bin/env python3
"""
Comprehensive documentation crawler and verifier.

This script:
1. Extracts all links from markdown files
2. Extracts all links from TypeScript/TSX files
3. Tests each link against the running server
4. Checks if files exist in the file system
5. Reports all broken links and missing files
"""

import re
import sys
import requests
from pathlib import Path
from typing import List, Tuple, Dict, Set
from collections import defaultdict
from urllib.parse import urlparse, urljoin

PROJECT_ROOT = Path(__file__).parent
CONTENT_DOCS = PROJECT_ROOT / "content" / "docs"
PUBLIC_DOCS = PROJECT_ROOT / "client" / "public" / "content" / "docs"
SRC_DIR = PROJECT_ROOT / "client" / "src"

BASE_URL = "http://localhost:5001"
TIMEOUT = 5

# Track results
all_links: Set[str] = set()
broken_links: List[Tuple[str, str, str, str]] = []  # (source, link_text, url, reason)
working_links: List[Tuple[str, str, str]] = []
missing_files: List[Tuple[str, str]] = []  # (url, file_path)


def extract_markdown_links(file_path: Path) -> List[Tuple[str, str]]:
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
    except Exception as e:
        print(f"Error reading {file_path}: {e}", file=sys.stderr)
        return []


def extract_tsx_links(file_path: Path) -> List[Tuple[str, str]]:
    """Extract all /docs/ links from TypeScript/TSX files."""
    try:
        content = file_path.read_text(encoding='utf-8')
        links = []
        
        # href="/docs/..."
        for match in re.finditer(r'href=["\'](/docs/[^"\']+)["\']', content):
            links.append(('', match.group(1)))
        
        # Link href="/docs/..."
        for match in re.finditer(r'Link\s+[^>]*href=["\'](/docs/[^"\']+)["\']', content):
            links.append(('', match.group(1)))
        
        # Route definitions
        for match in re.finditer(r'path=["\'](/docs/[^"\']+)["\']', content):
            links.append(('', match.group(1)))
        
        return links
    except Exception as e:
        print(f"Error reading {file_path}: {e}", file=sys.stderr)
        return []


def resolve_relative_link(url: str, source_file: Path) -> str:
    """Resolve a relative link to an absolute /docs/ route."""
    # Already absolute
    if url.startswith('/docs/'):
        return url
    
    # External
    if url.startswith('http'):
        return url
    
    # Get product from source file
    try:
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
            
            if up_count <= len(parts):
                parts = parts[:-up_count]
            
            if not target or (len(target) == 1 and target[0] == ''):
                # Directory link
                if parts:
                    dir_name = parts[-1] if len(parts) > 1 else ''
                    return f"/docs/{product}/{dir_name}/README"
                return f"/docs/{product}/README"
            
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
    except:
        pass
    
    return url


def url_to_file_path(url: str) -> Path:
    """Convert a /docs/ URL to a file path."""
    if not url.startswith('/docs/'):
        return None
    
    path_part = url[6:]  # Remove '/docs/'
    parts = path_part.split('/')
    
    # Handle README
    if parts[-1] == 'README' or parts[-1] == '':
        if len(parts) > 1 and parts[-1] == '':
            parts = parts[:-1]
        return PUBLIC_DOCS / '/'.join(parts) / 'README.md'
    
    # Try with .md extension
    file_path = PUBLIC_DOCS / '/'.join(parts)
    if not file_path.suffix:
        file_path = file_path.with_suffix('.md')
    
    return file_path


def test_url(url: str) -> Tuple[int, str]:
    """Test a URL and return (status_code, error_message)."""
    if not url.startswith('/docs/'):
        return (None, "Not a /docs/ URL")
    
    full_url = urljoin(BASE_URL, url)
    
    try:
        response = requests.get(full_url, timeout=TIMEOUT, allow_redirects=False)
        return (response.status_code, None)
    except requests.exceptions.Timeout:
        return (None, "Timeout")
    except requests.exceptions.ConnectionError:
        return (None, "Connection error - is the server running?")
    except Exception as e:
        return (None, str(e))


def main():
    print("🔍 Crawling documentation and extracting all links...\n")
    
    # Extract links from markdown files
    print("📄 Scanning markdown files...")
    md_files = list(CONTENT_DOCS.rglob("*.md"))
    for md_file in md_files:
        links = extract_markdown_links(md_file)
        for link_text, link_url in links:
            if link_url.startswith('/docs/') or not link_url.startswith('http'):
                resolved = resolve_relative_link(link_url, md_file)
                if resolved.startswith('/docs/'):
                    all_links.add(resolved)
    
    # Extract links from TSX/TS files
    print("💻 Scanning TypeScript/TSX files...")
    for pattern in ['*.tsx', '*.ts']:
        for ts_file in SRC_DIR.rglob(pattern):
            if 'node_modules' in str(ts_file):
                continue
            links = extract_tsx_links(ts_file)
            for link_text, link_url in links:
                if link_url.startswith('/docs/'):
                    all_links.add(link_url)
    
    print(f"Found {len(all_links)} unique /docs/ links\n")
    
    # Test each link
    print("🧪 Testing links...")
    print("=" * 80)
    
    for i, url in enumerate(sorted(all_links), 1):
        print(f"[{i}/{len(all_links)}] Testing: {url}", end=" ... ")
        
        # Check if file exists
        file_path = url_to_file_path(url)
        file_exists = file_path and file_path.exists() if file_path else False
        
        # Test URL
        status, error = test_url(url)
        
        if status == 200:
            print("✅ OK")
            working_links.append(('', '', url))
        elif status == 404:
            reason = "HTTP 404"
            if not file_exists and file_path:
                reason += f" (file missing: {file_path.relative_to(PROJECT_ROOT)})"
                missing_files.append((url, str(file_path)))
            print(f"❌ {reason}")
            broken_links.append(('', '', url, reason))
        elif error:
            print(f"❌ {error}")
            broken_links.append(('', '', url, error))
        else:
            print(f"❌ HTTP {status}")
            broken_links.append(('', '', url, f"HTTP {status}"))
    
    # Check for missing files that should exist
    print("\n" + "=" * 80)
    print("📁 Checking for missing files...")
    print("=" * 80)
    
    # Find all README.md files in source
    source_readmes = set()
    for readme in CONTENT_DOCS.rglob("README.md"):
        rel_path = readme.relative_to(CONTENT_DOCS)
        source_readmes.add(rel_path)
    
    # Check if they exist in public
    for readme_path in source_readmes:
        public_path = PUBLIC_DOCS / readme_path
        if not public_path.exists():
            parts = list(readme_path.parts)
            if len(parts) > 1:
                product = parts[0]
                doc_path = '/'.join(parts[1:-1])  # Remove product and README.md
                url = f"/docs/{product}/{doc_path}/README" if doc_path else f"/docs/{product}/README"
                print(f"❌ Missing: {url} (file: {public_path.relative_to(PROJECT_ROOT)})")
                missing_files.append((url, str(public_path)))
    
    # Summary
    print("\n" + "=" * 80)
    print("📊 SUMMARY")
    print("=" * 80)
    print(f"Total links found: {len(all_links)}")
    print(f"✅ Working: {len(working_links)}")
    print(f"❌ Broken: {len(broken_links)}")
    print(f"📁 Missing files: {len(missing_files)}")
    
    if broken_links:
        print("\n❌ BROKEN LINKS:")
        for source, text, url, reason in broken_links[:20]:
            print(f"   {url} - {reason}")
        if len(broken_links) > 20:
            print(f"   ... and {len(broken_links) - 20} more")
    
    if missing_files:
        print("\n📁 MISSING FILES:")
        for url, file_path in missing_files[:20]:
            print(f"   {url}")
            print(f"      → {file_path}")
        if len(missing_files) > 20:
            print(f"   ... and {len(missing_files) - 20} more")
    
    # Generate fix script
    if missing_files:
        fix_script = PROJECT_ROOT / "fix-missing-docs.sh"
        with open(fix_script, 'w') as f:
            f.write("#!/bin/bash\n")
            f.write("# Auto-generated script to copy missing documentation files\n\n")
            for url, file_path in missing_files:
                # Convert public path back to source path
                rel_path = Path(file_path).relative_to(PUBLIC_DOCS)
                source_path = CONTENT_DOCS / rel_path
                if source_path.exists():
                    f.write(f"cp -v '{source_path}' '{file_path}'\n")
        
        fix_script.chmod(0o755)
        print(f"\n✅ Generated fix script: {fix_script}")
        print(f"   Run: ./fix-missing-docs.sh")
    
    return 0 if not broken_links and not missing_files else 1


if __name__ == "__main__":
    try:
        sys.exit(main())
    except KeyboardInterrupt:
        print("\n\n⚠️  Interrupted by user")
        sys.exit(1)
    except Exception as e:
        print(f"\n❌ Error: {e}", file=sys.stderr)
        import traceback
        traceback.print_exc()
        sys.exit(1)

