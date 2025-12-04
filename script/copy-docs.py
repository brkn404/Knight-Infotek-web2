#!/usr/bin/env python3
"""Copy product documentation to website content directory."""

import shutil
import os
from pathlib import Path

source_base = Path("/Volumes/evo4TB/kit/KGE/docs/products")
dest_base = Path("/Volumes/evo4TB/kit/KGE/KnightGlobal/content/docs")

products = [
    {"source": "BDNA/knowledge-base", "dest": "blockchain-dna"},
    {"source": "CCA/knowledge-base", "dest": "cha-ching-analytics"},
    {"source": "zk30/knowledge-base", "dest": "zero-knight-30"},
    {"source": "ChainGuard/knowledge-base", "dest": "chain-guardian"},
]

def copy_directory(src, dst):
    """Copy directory recursively."""
    if not src.exists():
        print(f"⚠️  Source not found: {src}")
        return False
    
    try:
        # Create destination directory
        dst.mkdir(parents=True, exist_ok=True)
        
        # Copy all files and subdirectories
        if src.is_dir():
            shutil.copytree(src, dst, dirs_exist_ok=True)
        else:
            shutil.copy2(src, dst)
        
        return True
    except Exception as e:
        print(f"✗ Error copying {src} to {dst}: {e}")
        return False

def main():
    print("📚 Organizing product documentation...\n")
    
    copied_count = 0
    for product in products:
        source_path = source_base / product["source"]
        dest_path = dest_base / product["dest"]
        
        print(f"Copying {product['dest']}...")
        if copy_directory(source_path, dest_path):
            # Count files copied
            file_count = len(list(dest_path.rglob("*.md")))
            print(f"✓ Copied {product['dest']} ({file_count} markdown files)")
            copied_count += 1
        print()
    
    print(f"✅ Documentation organization complete!")
    print(f"   Copied {copied_count}/{len(products)} products")
    print(f"   Files are in: {dest_base}")

if __name__ == "__main__":
    main()

