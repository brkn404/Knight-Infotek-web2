#!/usr/bin/env python3
"""Check documentation links and files"""

import subprocess
import sys
import re
from pathlib import Path

def test_url(url):
    """Test URL and return status code"""
    try:
        result = subprocess.run(
            ['curl', '-s', '-o', '/dev/null', '-w', '%{http_code}', '--max-time', '3', url],
            capture_output=True,
            text=True,
            timeout=5
        )
        return result.stdout.strip() or "000"
    except:
        return "ERROR"

def check_file_exists(file_path):
    """Check if file exists"""
    return Path(file_path).exists()

def extract_all_links():
    """Extract all /docs/ links from the codebase"""
    links = set()
    project_root = Path(__file__).parent
    src_dir = project_root / "client" / "src"
    docs_dir = project_root / "client" / "public" / "content" / "docs"
    
    # Pattern for href links
    href_pattern = r'href=["\'](/docs/[^"\']+)["\']'
    # Pattern for markdown links
    md_pattern = r'\[([^\]]+)\]\((/docs/[^)]+)\)'
    
    # From source files
    for file_path in src_dir.rglob("*.tsx"):
        if 'node_modules' in str(file_path):
            continue
        try:
            content = file_path.read_text(encoding='utf-8')
            matches = re.findall(href_pattern, content)
            links.update(matches)
        except:
            pass
    
    for file_path in src_dir.rglob("*.ts"):
        if 'node_modules' in str(file_path):
            continue
        try:
            content = file_path.read_text(encoding='utf-8')
            matches = re.findall(href_pattern, content)
            links.update(matches)
        except:
            pass
    
    # From markdown files
    for file_path in docs_dir.rglob("*.md"):
        try:
            content = file_path.read_text(encoding='utf-8')
            # Markdown links
            md_matches = re.findall(md_pattern, content)
            for name, url in md_matches:
                links.add(url)
            # HTML href links
            href_matches = re.findall(href_pattern, content)
            links.update(href_matches)
        except:
            pass
    
    # From docs-index.tsx product definitions
    docs_index = src_dir / "pages" / "docs-index.tsx"
    if docs_index.exists():
        try:
            content = docs_index.read_text(encoding='utf-8')
            product_ids = ['blockchain-dna', 'cha-ching-analytics', 'zero-knight-30', 'chain-guardian']
            path_matches = re.findall(r"path:\s*['\"]([^'\"]+)['\"]", content)
            for path in path_matches:
                for product_id in product_ids:
                    links.add(f"/docs/{product_id}/{path}")
        except:
            pass
    
    # Also add known resource files that should be accessible
    known_resources = [
        "/docs/blockchain-dna/resources/whitepapers",
        "/docs/blockchain-dna/resources/case-studies",
        "/docs/blockchain-dna/resources/learning",
    ]
    links.update(known_resources)
    
    return sorted(links)

# Test URLs
BASE_URLS = ["http://localhost:5001", "http://localhost:5000"]
BASE_URL = None

print("🔍 Checking for running server...")
for url in BASE_URLS:
    status = test_url(f"{url}/")
    if status == "200":
        BASE_URL = url
        print(f"✅ Server found at {url}\n")
        break

if not BASE_URL:
    print("⚠️  No server detected. Testing against http://localhost:5001 anyway...\n")
    BASE_URL = "http://localhost:5001"

# Extract all links from codebase
print("📋 Extracting all documentation links from codebase...")
try:
    LINKS = extract_all_links()
    print(f"✅ Found {len(LINKS)} unique links\n")
except Exception as e:
    print(f"⚠️  Error extracting links: {e}")
    print("Using fallback list...\n")
    # Fallback to comprehensive manual list
    LINKS = [
        "/docs",
        "/docs/blockchain-dna/README",
        "/docs/blockchain-dna/architecture",
        "/docs/blockchain-dna/data-flow",
        "/docs/blockchain-dna/api/README",
        "/docs/blockchain-dna/faq/README",
        "/docs/blockchain-dna/resources/README",
        "/docs/blockchain-dna/resources/whitepapers",
        "/docs/blockchain-dna/resources/case-studies",
        "/docs/blockchain-dna/resources/learning",
        "/docs/blockchain-dna/getting-started/README",
        "/docs/blockchain-dna/troubleshooting/README",
        "/docs/blockchain-dna/documentation/README",
        "/docs/blockchain-dna/features/README",
        "/docs/blockchain-dna/integrations/README",
        "/docs/cha-ching-analytics/README",
        "/docs/cha-ching-analytics/product-spec-sheet",
        "/docs/cha-ching-analytics/architecture-overview",
        "/docs/cha-ching-analytics/architecture-diagram",
        "/docs/cha-ching-analytics/faqs",
        "/docs/cha-ching-analytics/knowledge-base",
        "/docs/cha-ching-analytics/resources",
        "/docs/zero-knight-30/README",
        "/docs/zero-knight-30/product-spec-sheet",
        "/docs/zero-knight-30/architecture-diagram",
        "/docs/zero-knight-30/faq",
        "/docs/chain-guardian/README",
        "/docs/chain-guardian/PRODUCT_SPEC_SHEET",
        "/docs/chain-guardian/ARCHITECTURE_DIAGRAM",
        "/docs/chain-guardian/faqs/GENERAL_FAQS",
        "/docs/chain-guardian/resources/INDEX",
    ]

print(f"🧪 Testing {len(LINKS)} documentation links...\n")
print(f"Base URL: {BASE_URL}\n")

working = []
broken = []

for i, link in enumerate(LINKS, 1):
    url = f"{BASE_URL}{link}"
    status = test_url(url)
    
    # Also check if file exists
    file_path = f"client/public/content/docs/{link.replace('/docs/', '')}"
    if link == "/docs":
        file_exists = True  # Index page
    elif link.endswith("/README"):
        file_path = f"{file_path}.md"
        file_exists = check_file_exists(file_path)
    elif "/" in link.replace("/docs/", ""):
        # Nested path like "resources/whitepapers"
        parts = link.replace("/docs/", "").split("/")
        if len(parts) >= 2:
            # Try as direct file first
            file_path = f"client/public/content/docs/{'/'.join(parts)}.md"
            file_exists = check_file_exists(file_path)
            # If not found, try with README
            if not file_exists and len(parts) == 2:
                file_path = f"client/public/content/docs/{parts[0]}/{parts[1]}/README.md"
                file_exists = check_file_exists(file_path)
        else:
            file_path = f"{file_path}.md"
            file_exists = check_file_exists(file_path)
    else:
        file_path = f"{file_path}.md"
        file_exists = check_file_exists(file_path)
    
    if status == "200":
        working.append(link)
        print(f"✅ [{i:2d}/{len(LINKS)}] {link}")
    elif status == "000":
        broken.append((link, status, file_exists))
        if file_exists:
            print(f"⚠️  [{i:2d}/{len(LINKS)}] {link} (Server not responding, but file exists)")
        else:
            print(f"❌ [{i:2d}/{len(LINKS)}] {link} (Server not responding, file missing)")
    else:
        broken.append((link, status, file_exists))
        if file_exists:
            print(f"❌ [{i:2d}/{len(LINKS)}] {link} (HTTP {status}, but file exists at {file_path})")
        else:
            print(f"❌ [{i:2d}/{len(LINKS)}] {link} (HTTP {status}, file missing)")

print("\n" + "="*60)
print("📊 SUMMARY")
print("="*60)
print(f"Total links: {len(LINKS)}")
print(f"✅ Working: {len(working)}")
print(f"❌ Broken: {len(broken)}")
print()

if broken:
    print("❌ BROKEN LINKS:")
    for link, status, file_exists in broken:
        if file_exists:
            print(f"   - {link} (HTTP {status}) - File exists but route may be wrong")
        else:
            print(f"   - {link} (HTTP {status}) - File missing")
    print()

if len(working) == len(LINKS):
    print("🎉 All links are working!")
    sys.exit(0)
else:
    print("💡 Fix broken links by:")
    print("   1. Ensuring files exist in client/public/content/docs/")
    print("   2. Running: npm run sync:content")
    print("   3. Checking route definitions in App.tsx")
    sys.exit(1)
