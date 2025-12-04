#!/usr/bin/env python3
"""
Comprehensive documentation link verifier using curl/requests
Extracts all /docs/ links and verifies they return 200 OK
"""

import re
import subprocess
import sys
from pathlib import Path
from collections import defaultdict
from urllib.parse import urljoin

BASE_URL = "http://localhost:5001"
TIMEOUT = 5

def extract_links_from_file(file_path, pattern):
    """Extract links matching pattern from a file"""
    try:
        content = file_path.read_text(encoding='utf-8')
        matches = re.findall(pattern, content)
        return matches
    except Exception as e:
        print(f"⚠️  Error reading {file_path}: {e}")
        return []

def test_url(url):
    """Test a URL using curl and return HTTP status code"""
    try:
        result = subprocess.run(
            ['curl', '-s', '-o', '/dev/null', '-w', '%{http_code}', '--max-time', str(TIMEOUT), url],
            capture_output=True,
            timeout=TIMEOUT + 2,
            text=True
        )
        status = result.stdout.strip()
        if not status or status == "":
            return "000"  # Connection failed
        return status
    except subprocess.TimeoutExpired:
        return "TIMEOUT"
    except FileNotFoundError:
        # curl not found, try using requests if available
        try:
            import requests
            response = requests.get(url, timeout=TIMEOUT)
            return str(response.status_code)
        except ImportError:
            return "ERROR: curl not found and requests not available"
    except Exception as e:
        return f"ERROR: {e}"

def main():
    print("🔍 Verifying documentation links...")
    print(f"Base URL: {BASE_URL}\n")
    
    project_root = Path(__file__).parent
    src_dir = project_root / "client" / "src"
    docs_dir = project_root / "client" / "public" / "content" / "docs"
    
    all_links = set()
    
    # Pattern 1: href="/docs/..." or href='/docs/...'
    href_pattern = r'href=["\'](/docs/[^"\']+)["\']'
    
    # Pattern 2: Markdown links [text](/docs/...)
    md_pattern = r'\[([^\]]+)\]\((/docs/[^)]+)\)'
    
    # Extract from TypeScript/TSX files
    print("📋 Extracting links from source files...")
    for file_path in src_dir.rglob("*.tsx"):
        if 'node_modules' in str(file_path):
            continue
        links = extract_links_from_file(file_path, href_pattern)
        all_links.update(links)
    
    for file_path in src_dir.rglob("*.ts"):
        if 'node_modules' in str(file_path):
            continue
        links = extract_links_from_file(file_path, href_pattern)
        all_links.update(links)
    
    # Extract from markdown files
    print("📋 Extracting links from markdown files...")
    for file_path in docs_dir.rglob("*.md"):
        # Extract markdown links
        md_links = extract_links_from_file(file_path, md_pattern)
        for name, url in md_links:
            if url.startswith('/docs/'):
                all_links.add(url)
        
        # Also extract href links from markdown (in case of HTML)
        href_links = extract_links_from_file(file_path, href_pattern)
        all_links.update(href_links)
    
    # Extract from docs-index.tsx product definitions
    print("📋 Extracting links from docs-index.tsx...")
    docs_index = src_dir / "pages" / "docs-index.tsx"
    if docs_index.exists():
        content = docs_index.read_text(encoding='utf-8')
        # Find product IDs and doc paths
        product_ids = ['blockchain-dna', 'cha-ching-analytics', 'zero-knight-30', 'chain-guardian']
        path_matches = re.findall(r"path:\s*['\"]([^'\"]+)['\"]", content)
        for path in path_matches:
            for product_id in product_ids:
                all_links.add(f"/docs/{product_id}/{path}")
    
    # Sort links
    sorted_links = sorted(all_links)
    total = len(sorted_links)
    
    print(f"Found {total} unique documentation links\n")
    print("🧪 Testing links...\n")
    
    working = []
    broken = []
    errors = []
    
    for i, link in enumerate(sorted_links, 1):
        url = urljoin(BASE_URL, link)
        status = test_url(url)
        
        if status == "200":
            working.append(link)
            print(f"✅ [{i}/{total}] {link} (HTTP {status})")
        elif status.startswith("ERROR") or status == "TIMEOUT":
            errors.append((link, status))
            print(f"⚠️  [{i}/{total}] {link} ({status})")
        else:
            broken.append((link, status))
            print(f"❌ [{i}/{total}] {link} (HTTP {status})")
    
    # Summary
    print("\n" + "="*60)
    print("📊 SUMMARY")
    print("="*60)
    print(f"Total links tested: {total}")
    print(f"✅ Working: {len(working)}")
    print(f"❌ Broken: {len(broken)}")
    if errors:
        print(f"⚠️  Errors: {len(errors)}")
    print()
    
    if broken:
        print("❌ BROKEN LINKS:")
        for link, status in broken:
            print(f"   - {link} (HTTP {status})")
        print()
    
    if errors:
        print("⚠️  ERRORS:")
        for link, error in errors:
            print(f"   - {link}: {error}")
        print()
    
    if len(working) == total and not errors:
        print("🎉 All links are working!")
        return 0
    else:
        print("💡 Tip: Check if the documentation files exist in client/public/content/docs/")
        print("💡 Tip: Make sure the dev server is running on port 5001")
        return 1

if __name__ == "__main__":
    sys.exit(main())

