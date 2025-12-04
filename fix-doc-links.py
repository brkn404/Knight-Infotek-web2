#!/usr/bin/env python3
"""
Automatically fix common documentation link issues.

This script:
1. Fixes directory links (./dir/) to point to ./dir/README.md
2. Creates missing README.md files in directories that are linked to
3. Reports what was fixed
"""

import os
import re
from pathlib import Path
from typing import List, Tuple

# Project root
PROJECT_ROOT = Path(__file__).parent
CONTENT_DOCS = PROJECT_ROOT / "content" / "docs"

# Track fixes
fixes_made: List[Tuple[str, str, str]] = []  # (file, old_link, new_link)
files_created: List[str] = []


def extract_links_from_markdown(content: str) -> List[Tuple[int, str, str]]:
    """Extract all links from markdown content. Returns list of (line_number, link_text, link_url)."""
    links = []
    lines = content.split('\n')
    
    # Markdown links: [text](url)
    markdown_pattern = r'\[([^\]]+)\]\(([^)]+)\)'
    
    for line_num, line in enumerate(lines, 1):
        for match in re.finditer(markdown_pattern, line):
            link_text = match.group(1)
            link_url = match.group(2)
            links.append((line_num, link_text, link_url))
    
    return links


def fix_directory_links(file_path: Path) -> bool:
    """Fix directory links in a markdown file. Returns True if any changes were made."""
    try:
        content = file_path.read_text(encoding='utf-8')
        original_content = content
        lines = content.split('\n')
        modified = False
        
        # Pattern for markdown links
        markdown_pattern = r'(\[([^\]]+)\]\(([^)]+)\))'
        
        for line_num, line in enumerate(lines):
            # Find all markdown links in this line
            matches = list(re.finditer(markdown_pattern, line))
            if not matches:
                continue
            
            # Process matches in reverse order to preserve indices
            for match in reversed(matches):
                full_match = match.group(1)
                link_text = match.group(2)
                link_url = match.group(3)
                
                # Skip external links
                if link_url.startswith("http://") or link_url.startswith("https://") or link_url.startswith("mailto:"):
                    continue
                
                # Skip anchor links
                if link_url.startswith("#"):
                    continue
                
                # Skip absolute /docs/ links (these are handled by the router)
                if link_url.startswith("/docs/"):
                    continue
                
                # Fix directory links (ending with /)
                if link_url.endswith("/") and not link_url.endswith(".md"):
                    new_url = link_url.rstrip("/") + "/README.md"
                    new_link = f"[{link_text}]({new_url})"
                    line = line[:match.start()] + new_link + line[match.end():]
                    fixes_made.append((str(file_path.relative_to(CONTENT_DOCS)), link_url, new_url))
                    modified = True
        
        if modified:
            # Reconstruct content with fixed lines
            content = '\n'.join(lines)
            file_path.write_text(content, encoding='utf-8')
            return True
        
        return False
    
    except Exception as e:
        print(f"⚠️  Error processing {file_path}: {e}")
        return False


def create_missing_readme(directory: Path) -> bool:
    """Create a README.md file in a directory if it doesn't exist."""
    readme_path = directory / "README.md"
    
    if readme_path.exists():
        return False
    
    # Get directory name for title
    dir_name = directory.name.replace("-", " ").replace("_", " ").title()
    
    # Create basic README content
    content = f"""# {dir_name}

Documentation for {dir_name}.

## Contents

This directory contains documentation and resources related to {dir_name}.

---

**Last Updated**: {Path(__file__).stat().st_mtime}
"""
    
    try:
        readme_path.write_text(content, encoding='utf-8')
        files_created.append(str(readme_path.relative_to(CONTENT_DOCS)))
        return True
    except Exception as e:
        print(f"⚠️  Error creating README in {directory}: {e}")
        return False


def find_directories_needing_readme():
    """Find directories that are linked to but don't have README.md files."""
    directories_needing_readme = set()
    
    # Scan all markdown files for directory links
    for md_file in CONTENT_DOCS.rglob("*.md"):
        try:
            content = md_file.read_text(encoding='utf-8')
            links = extract_links_from_markdown(content)
            
            for line_num, link_text, link_url in links:
                # Skip external links
                if link_url.startswith("http://") or link_url.startswith("https://"):
                    continue
                
                # Skip absolute /docs/ links
                if link_url.startswith("/docs/"):
                    continue
                
                # Check if this is a directory link
                if link_url.endswith("/") or (not link_url.endswith(".md") and "/" in link_url):
                    # Resolve the directory path
                    source_dir = md_file.parent
                    
                    # Normalize relative path
                    if link_url.startswith("./"):
                        link_url = link_url[2:]
                    elif link_url.startswith("../"):
                        # Handle parent directory navigation
                        parts = link_url.split("/")
                        target_dir = source_dir
                        for part in parts:
                            if part == "..":
                                target_dir = target_dir.parent
                            elif part and part != ".":
                                target_dir = target_dir / part
                        
                        if target_dir.is_dir() and target_dir.exists():
                            directories_needing_readme.add(target_dir)
                    else:
                        # Relative path from source directory
                        target_path = source_dir / link_url.rstrip("/")
                        if target_path.is_dir() and target_path.exists():
                            directories_needing_readme.add(target_path)
        
        except Exception as e:
            print(f"⚠️  Error scanning {md_file}: {e}")
    
    return directories_needing_readme


def main():
    """Main function to fix documentation links."""
    import sys
    sys.stdout.flush()
    print("🔧 Fixing documentation links...\n", flush=True)
    
    if not CONTENT_DOCS.exists():
        print(f"❌ Content docs directory not found: {CONTENT_DOCS}", flush=True)
        return 1
    
    # Step 1: Fix directory links in all markdown files
    print("📝 Step 1: Fixing directory links (./dir/ -> ./dir/README.md)...")
    files_fixed = 0
    
    for md_file in CONTENT_DOCS.rglob("*.md"):
        if fix_directory_links(md_file):
            files_fixed += 1
    
    print(f"   ✅ Fixed links in {files_fixed} files")
    print(f"   📊 Total link fixes: {len(fixes_made)}\n")
    
    # Step 2: Find directories that need README.md files
    print("📁 Step 2: Finding directories that need README.md files...")
    directories_needing_readme = find_directories_needing_readme()
    print(f"   Found {len(directories_needing_readme)} directories that need README.md\n")
    
    # Step 3: Create missing README.md files
    if directories_needing_readme:
        print("📄 Step 3: Creating missing README.md files...")
        for directory in sorted(directories_needing_readme):
            if create_missing_readme(directory):
                print(f"   ✅ Created {directory.relative_to(CONTENT_DOCS)}/README.md")
        print(f"   📊 Total README files created: {len(files_created)}\n")
    
    # Print summary
    print("=" * 80)
    print("📊 SUMMARY")
    print("=" * 80)
    print(f"Files modified: {files_fixed}")
    print(f"Links fixed: {len(fixes_made)}")
    print(f"README files created: {len(files_created)}")
    
    if fixes_made:
        print("\n🔗 Fixed Links:")
        for file, old_link, new_link in fixes_made[:20]:  # Show first 20
            print(f"   {file}: {old_link} -> {new_link}")
        if len(fixes_made) > 20:
            print(f"   ... and {len(fixes_made) - 20} more")
    
    if files_created:
        print("\n📄 Created README files:")
        for file in files_created:
            print(f"   {file}")
    
    print("\n✅ Done! Run 'npm run verify:doc-links' to check remaining issues.")
    return 0


if __name__ == "__main__":
    import sys
    sys.exit(main())

