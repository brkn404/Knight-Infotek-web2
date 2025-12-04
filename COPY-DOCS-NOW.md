# Copy Documentation Files - Quick Guide

The documentation structure has been created, but the files need to be copied from the source directory.

## Quick Copy Commands

Run these commands to copy all documentation files:

```bash
cd /Volumes/evo4TB/kit/KGE/KnightGlobal

# Copy BlockchainDNA documentation
cp -r /Volumes/evo4TB/kit/KGE/docs/products/BDNA/knowledge-base/* content/docs/blockchain-dna/

# Copy Cha-Ching Analytics documentation  
cp -r /Volumes/evo4TB/kit/KGE/docs/products/CCA/knowledge-base/* content/docs/cha-ching-analytics/

# Copy ZeroKnight30 documentation
cp -r /Volumes/evo4TB/kit/KGE/docs/products/zk30/knowledge-base/* content/docs/zero-knight-30/

# Copy ChainGuardian documentation
cp -r /Volumes/evo4TB/kit/KGE/docs/products/ChainGuard/knowledge-base/* content/docs/chain-guardian/
```

## Or Use the Python Script

```bash
cd /Volumes/evo4TB/kit/KGE/KnightGlobal
python3 script/copy-docs.py
```

## Verify Files Were Copied

```bash
# Count markdown files
find content/docs -name "*.md" -type f | wc -l

# Should show 50+ files
```

## What's Already Done

✅ Directory structure created  
✅ README files created for each product  
✅ Build script configured to copy content/  
✅ Documentation structure documented  

## What's Needed

⏳ Copy actual documentation files (run commands above)

---

After copying, the documentation will be available at:
- `/content/docs/blockchain-dna/`
- `/content/docs/cha-ching-analytics/`
- `/content/docs/zero-knight-30/`
- `/content/docs/chain-guardian/`

