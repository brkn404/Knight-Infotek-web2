#!/usr/bin/env python3
"""
Verify all documentation links point to existing files.

This script:
1. Scans all markdown files in content/docs/
2. Extracts all links (markdown and HTML)
3. Resolves relative paths to absolute file paths
4. Checks if target files exist
5. Reports broken links
"""

import os
import re
from pathlib import Path
from urllib.parse import urlparse, unquote
from typing import List, Tuple, Dict

# Project root
PROJECT_ROOT = Path(__file__).parent
CONTENT_DOCS = PROJECT_ROOT / "content" / "docs"
PUBLIC_DOCS = PROJECT_ROOT / "client" / "public" / "content" / "docs"

# Track all files and links
all_files: Dict[str, Path] = {}
broken_links: List[Tuple[str, str, str, str]] = []  # (source_file, link_text, link_url, reason)
working_links: List[Tuple[str, str, str]] = []  # (source_file, link_text, link_url)


def find_all_markdown_files(directory: Path) -> Dict[str, Path]:
    """Find all markdown files and index them by their relative path."""
    files = {}
    if not directory.exists():
        return files
    
    for md_file in directory.rglob("*.md"):
        # Get relative path from docs directory
        rel_path = md_file.relative_to(directory)
        # Normalize path (forward slashes, no extension for matching)
        key = str(rel_path).replace("\\", "/")
        files[key] = md_file
        # Also index without .md extension
        if key.endswith(".md"):
            files[key[:-3]] = md_file
    return files


def resolve_link(link_url: str, source_file: Path, docs_root: Path) -> Path:
    """
    Resolve a link URL to an actual file path.
    
    Handles:
    - Absolute /docs/ URLs: /docs/blockchain-dna/README -> content/docs/blockchain-dna/README.md
    - Relative paths: ../README.md, ./file.md, file.md
    - Directory links (ending with /) -> README.md in that directory
    - Already absolute file paths
    """
    # Remove query strings and fragments
    link_url = link_url.split("?")[0].split("#")[0]
    
    # Handle directory links (ending with /)
    if link_url.endswith("/"):
        link_url = link_url.rstrip("/") + "/README.md"
    
    # Handle absolute /docs/ URLs
    if link_url.startswith("/docs/"):
        # Remove /docs/ prefix
        path_part = link_url[6:]  # Remove "/docs/"
        # Try to find the file
        target_path = docs_root / path_part
        if target_path.exists() and target_path.is_file():
            return target_path
        # Try with .md extension
        target_path = docs_root / f"{path_part}.md"
        if target_path.exists():
            return target_path
        # Try without extension if it had one
        if path_part.endswith(".md"):
            target_path = docs_root / path_part[:-3]
            if target_path.exists() and target_path.is_file():
                return target_path
        return None
    
    # Handle relative paths
    if link_url.startswith("../") or link_url.startswith("./") or not link_url.startswith("/"):
        # Get source file's directory
        source_dir = source_file.parent
        
        # Normalize the relative path
        if link_url.startswith("./"):
            link_url = link_url[2:]
        
        # Resolve relative path
        try:
            resolved = (source_dir / link_url).resolve()
            # Make sure it's within the docs directory
            if resolved.exists() and resolved.is_file():
                return resolved
            # If it's a directory, try README.md inside it
            if resolved.exists() and resolved.is_dir():
                readme_path = resolved / "README.md"
                if readme_path.exists():
                    return readme_path
            # Try with .md extension if it doesn't have one
            if not link_url.endswith(".md"):
                resolved = (source_dir / f"{link_url}.md").resolve()
                if resolved.exists():
                    return resolved
        except (ValueError, OSError):
            pass
    
    # Handle absolute file paths (unlikely but possible)
    if os.path.isabs(link_url):
        target_path = Path(link_url)
        if target_path.exists():
            return target_path
    
    return None


def extract_links_from_markdown(content: str) -> List[Tuple[str, str]]:
    """Extract all links from markdown content. Returns list of (link_text, link_url)."""
    links = []
    
    # Markdown links: [text](url)
    markdown_pattern = r'\[([^\]]+)\]\(([^)]+)\)'
    for match in re.finditer(markdown_pattern, content):
        link_text = match.group(1)
        link_url = match.group(2)
        links.append((link_text, link_url))
    
    # HTML links: <a href="url">text</a>
    html_pattern = r'<a\s+[^>]*href=["\']([^"\']+)["\'][^>]*>([^<]+)</a>'
    for match in re.finditer(html_pattern, content, re.IGNORECASE):
        link_url = match.group(1)
        link_text = match.group(2)
        links.append((link_text, link_url))
    
    return links


def check_file_links():
    """Main function to check all links in documentation files."""
    print("🔍 Scanning documentation files...\n")
    print(f"Project root: {PROJECT_ROOT}")
    print(f"Content docs: {CONTENT_DOCS} (exists: {CONTENT_DOCS.exists()})")
    print(f"Public docs: {PUBLIC_DOCS} (exists: {PUBLIC_DOCS.exists()})\n")
    
    # Find all markdown files
    print(f"📁 Scanning {CONTENT_DOCS}...")
    if not CONTENT_DOCS.exists():
        print(f"   ⚠️  Directory does not exist!")
        return 1
    content_files = find_all_markdown_files(CONTENT_DOCS)
    print(f"   Found {len(content_files)} markdown files in content/docs/\n")
    
    print(f"📁 Scanning {PUBLIC_DOCS}...")
    if PUBLIC_DOCS.exists():
        public_files = find_all_markdown_files(PUBLIC_DOCS)
        print(f"   Found {len(public_files)} markdown files in client/public/content/docs/\n")
    else:
        print(f"   ⚠️  Directory does not exist (this is OK if not synced yet)\n")
        public_files = {}
    
    # Combine both (prefer content over public for source)
    all_files = {**public_files, **content_files}
    
    # Check each file
    files_checked = 0
    links_checked = 0
    
    for file_path in CONTENT_DOCS.rglob("*.md"):
        files_checked += 1
        rel_path = file_path.relative_to(CONTENT_DOCS)
        
        try:
            content = file_path.read_text(encoding='utf-8')
            links = extract_links_from_markdown(content)
            
            for link_text, link_url in links:
                links_checked += 1
                
                # Skip external links
                if link_url.startswith("http://") or link_url.startswith("https://") or link_url.startswith("mailto:"):
                    continue
                
                # Skip anchor links (same page)
                if link_url.startswith("#"):
                    continue
                
                # Resolve the link
                target_file = resolve_link(link_url, file_path, CONTENT_DOCS)
                
                if target_file and target_file.exists():
                    working_links.append((str(rel_path), link_text, link_url))
                else:
                    # Try in public directory too
                    target_file = resolve_link(link_url, file_path, PUBLIC_DOCS)
                    if target_file and target_file.exists():
                        working_links.append((str(rel_path), link_text, link_url))
                    else:
                        broken_links.append((str(rel_path), link_text, link_url, "File not found"))
        
        except Exception as e:
            print(f"⚠️  Error reading {rel_path}: {e}")
    
    # Print results
    print("=" * 80)
    print("📊 LINK VERIFICATION RESULTS")
    print("=" * 80)
    print(f"\nFiles checked: {files_checked}")
    print(f"Links checked: {links_checked}")
    print(f"✅ Working links: {len(working_links)}")
    print(f"❌ Broken links: {len(broken_links)}")
    
    if broken_links:
        print("\n" + "=" * 80)
        print("❌ BROKEN LINKS")
        print("=" * 80)
        
        # Group by source file
        by_file: Dict[str, List[Tuple[str, str, str]]] = {}
        for source, text, url, reason in broken_links:
            if source not in by_file:
                by_file[source] = []
            by_file[source].append((text, url, reason))
        
        for source_file in sorted(by_file.keys()):
            print(f"\n📄 {source_file}")
            for text, url, reason in by_file[source_file]:
                print(f"   - [{text}]({url})")
                print(f"     Reason: {reason}")
        
        print("\n" + "=" * 80)
        print("💡 SUGGESTIONS")
        print("=" * 80)
        print("1. Check if files exist in the expected location")
        print("2. Verify relative path calculations are correct")
        print("3. Ensure files are synced to client/public/content/docs/")
        print("4. Check for typos in filenames or paths")
        return 1
    else:
        print("\n🎉 All links are working!")
        return 0


if __name__ == "__main__":
    import sys
    sys.exit(check_file_links())

