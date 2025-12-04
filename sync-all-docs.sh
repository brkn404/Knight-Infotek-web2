#!/bin/bash
# Comprehensive script to sync all documentation

cd "$(dirname "$0")"

echo "🔄 Syncing all documentation files..."
echo ""

# Step 1: Sync from products directory to content/docs
echo "Step 1: Syncing from products directory to content/docs/"

python3 << 'PYEOF'
import shutil
from pathlib import Path
import sys

mappings = {
    'BDNA': 'blockchain-dna',
    'CCA': 'cha-ching-analytics',
    'zk30': 'zero-knight-30',
    'ChainGuard': 'chain-guardian',
}

source_base = Path('/Volumes/evo4TB/kit/KGE/docs/products')
dest_base = Path('/Volumes/evo4TB/kit/KGE/Knight_InfoTek/content/docs')

if not source_base.exists():
    print(f'❌ Source directory not found: {source_base}')
    sys.exit(1)

for source_dir, dest_dir in mappings.items():
    source_path = source_base / source_dir / 'knowledge-base'
    dest_path = dest_base / dest_dir
    
    if not source_path.exists():
        print(f'⚠️  Source not found: {source_path}')
        continue
    
    if dest_path.exists():
        shutil.rmtree(dest_path)
    
    shutil.copytree(source_path, dest_path)
    md_files = list(dest_path.rglob('*.md'))
    print(f'✅ {source_dir} → {dest_dir} ({len(md_files)} files)')

print('\n✅ Step 1 complete')
PYEOF

echo ""
echo "Step 2: Syncing from content/docs to client/public/content/docs/"

python3 << 'PYEOF'
import shutil
from pathlib import Path

source = Path('content/docs')
dest = Path('client/public/content/docs')

if not source.exists():
    print(f'❌ Source not found: {source}')
    exit(1)

if dest.exists():
    shutil.rmtree(dest)

shutil.copytree(source, dest)
md_files = list(dest.rglob('*.md'))
print(f'✅ Copied {len(md_files)} markdown files to public directory')

# Verify key files
test_files = [
    'cha-ching-analytics/knowledge-base.md',
    'zero-knight-30/faq.md',
    'blockchain-dna/README.md',
    'chain-guardian/README.md',
]

print('\nVerification:')
for test_file in test_files:
    test_path = dest / test_file
    if test_path.exists():
        size = test_path.stat().st_size
        print(f'✅ {test_file} ({size:,} bytes)')
    else:
        print(f'❌ {test_file} MISSING')

print('\n✅ Step 2 complete')
PYEOF

echo ""
echo "✅ All documentation synced successfully!"
echo ""
echo "Files are now in:"
echo "  - content/docs/ (source)"
echo "  - client/public/content/docs/ (public, served by Vite)"
echo ""
echo "Restart your dev server to see the changes."

