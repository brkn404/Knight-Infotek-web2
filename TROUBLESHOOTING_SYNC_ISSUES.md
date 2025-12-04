# Troubleshooting Documentation Sync Issues

## Problem: Missing `integrations/README.md`

### Root Cause

The `sync-product-docs.mjs` script:
1. Removes the entire `content/docs/blockchain-dna/` directory
2. Copies from `/Volumes/evo4TB/kit/KGE/docs/products/BDNA/knowledge-base/`
3. If a file doesn't exist in the source, it gets deleted

### Solution

**The file must exist in the source directory:**
- Source: `/Volumes/evo4TB/kit/KGE/docs/products/BDNA/knowledge-base/integrations/README.md`
- This file has been created ✅

### Verification Steps

1. **Check source file exists:**
   ```bash
   ls -la /Volumes/evo4TB/kit/KGE/docs/products/BDNA/knowledge-base/integrations/README.md
   ```

2. **Run sync:**
   ```bash
   npm run sync:content
   ```

3. **Verify file in content/docs:**
   ```bash
   ls -la content/docs/blockchain-dna/integrations/README.md
   ```

4. **Verify file in public:**
   ```bash
   ls -la client/public/content/docs/blockchain-dna/integrations/README.md
   ```

5. **Test URL:**
   ```bash
   curl -I http://localhost:5001/docs/blockchain-dna/integrations/README
   ```

### Expected Output

After sync, you should see:
```
✓ Verified 7/7 key files exist
```

Instead of:
```
⚠️  Could not verify: blockchain-dna/integrations/README.md
✓ Verified 6/7 key files exist
```

## Sync Process Flow

1. **`npm run sync:docs`** (sync-product-docs.mjs)
   - Copies from `/Volumes/evo4TB/kit/KGE/docs/products/*/knowledge-base/`
   - To `content/docs/*/`
   - **Removes and replaces entire directories**

2. **`npm run sync:content`** (sync-content.mjs)
   - Copies from `content/docs/`
   - To `client/public/content/docs/`
   - **Removes and replaces entire directory**

## Important Notes

- **Files must exist in the source directory** (`/Volumes/evo4TB/kit/KGE/docs/products/`)
- Files created only in `content/docs/` will be **deleted** on next sync
- Always add files to the source directory first, then sync

## Files That Should Exist

Based on sync script verification:
- ✅ `blockchain-dna/README.md`
- ✅ `blockchain-dna/integrations/README.md` (now fixed)
- ✅ `blockchain-dna/api/README.md`
- ✅ `blockchain-dna/troubleshooting/README.md`
- ✅ `cha-ching-analytics/knowledge-base.md`
- ✅ `zero-knight-30/faq.md`
- ✅ `chain-guardian/README.md`

## Quick Fix Script

If a file is missing, add it to the source directory:

```bash
# Example: Add integrations/README.md
cp content/docs/blockchain-dna/integrations/README.md \
   /Volumes/evo4TB/kit/KGE/docs/products/BDNA/knowledge-base/integrations/README.md

# Then sync
npm run sync:content
```

