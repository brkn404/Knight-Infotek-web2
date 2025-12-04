# How to Find and Fix 404 Errors

## Understanding the Problem

The URL `http://localhost:5001/troubleshooting/` returns 404 because:
1. **Missing `/docs/` prefix** - All documentation URLs must start with `/docs/`
2. **Missing product name** - Need to specify which product: `blockchain-dna`
3. **Missing file path** - Should point to the README: `/docs/blockchain-dna/troubleshooting/README`

**Correct URL**: `http://localhost:5001/docs/blockchain-dna/troubleshooting/README`

## Discovery Methods

### 1. Use the Broken Links Finder Script

```bash
./find-broken-links.sh http://localhost:5001
```

This script:
- Scans all markdown files for links missing `/docs/` prefix
- Scans TypeScript/TSX files for incorrect href attributes
- Tests common incorrect URLs
- Suggests correct URLs

### 2. Use the Comprehensive Crawler

```bash
./crawl-docs.sh http://localhost:5001
```

This script:
- Extracts all `/docs/` links from the codebase
- Tests each link against the server
- Reports broken links and missing files
- Checks if files exist in the file system

### 3. Manual Testing

Test URLs directly:
```bash
# Test incorrect URL (should return 404 or show NotFound page)
curl -I http://localhost:5001/troubleshooting/

# Test correct URL (should return 200)
curl -I http://localhost:5001/docs/blockchain-dna/troubleshooting/README
```

### 4. Browser DevTools

1. Open browser DevTools (F12)
2. Go to Network tab
3. Navigate through the site
4. Look for red 404 errors
5. Check the Request URL to see what's being requested

### 5. Check Browser Console

The markdown renderer logs link normalization:
```
[Markdown] Link: "../troubleshooting/" → "/docs/blockchain-dna/troubleshooting/README"
```

If you see links that aren't being normalized, check the source file.

## Common 404 Patterns

### Pattern 1: Missing `/docs/` Prefix
- ❌ `/troubleshooting/`
- ✅ `/docs/blockchain-dna/troubleshooting/README`

### Pattern 2: Missing Product Name
- ❌ `/docs/troubleshooting/`
- ✅ `/docs/blockchain-dna/troubleshooting/README`

### Pattern 3: Missing File Path
- ❌ `/docs/blockchain-dna/troubleshooting`
- ✅ `/docs/blockchain-dna/troubleshooting/README`

### Pattern 4: Relative Links Not Normalized
- ❌ `../troubleshooting/` (in markdown)
- ✅ Should be normalized to `/docs/blockchain-dna/troubleshooting/README`

## How Links Are Normalized

The markdown renderer (`client/src/lib/markdown.tsx`) automatically converts:

1. **Relative directory links**: `../troubleshooting/` → `/docs/{product}/troubleshooting/README`
2. **Relative file links**: `../README.md` → `/docs/{product}/README`
3. **Same-directory links**: `./api/` → `/docs/{product}/api/README`

**Product detection**: Extracted from the current path context (e.g., `/content/docs/blockchain-dna/faq/README.md` → product = `blockchain-dna`)

## Fixing 404s

### Step 1: Identify the Source

Find where the broken link is:
```bash
# Search for the incorrect URL pattern
grep -r "troubleshooting/" content/docs/ client/src/
```

### Step 2: Update the Link

**In Markdown files:**
- Use relative paths: `../troubleshooting/` (will be auto-normalized)
- Or use absolute paths: `/docs/blockchain-dna/troubleshooting/README`

**In TypeScript/TSX files:**
- Always use absolute paths: `/docs/blockchain-dna/troubleshooting/README`

### Step 3: Verify the File Exists

```bash
# Check if file exists in source
ls -la content/docs/blockchain-dna/troubleshooting/README.md

# Check if file exists in public (after sync)
ls -la client/public/content/docs/blockchain-dna/troubleshooting/README.md
```

### Step 4: Sync and Test

```bash
# Sync files
npm run sync:content

# Test the URL
curl -I http://localhost:5001/docs/blockchain-dna/troubleshooting/README
```

## Prevention

### 1. Use Relative Links in Markdown

The markdown renderer handles these automatically:
```markdown
- [Troubleshooting](../troubleshooting/)
- [API Reference](../api/)
- [Integrations](../integrations/)
```

### 2. Use Absolute Links in Code

In TypeScript/TSX files, always use full paths:
```tsx
<Link href="/docs/blockchain-dna/troubleshooting/README">
  Troubleshooting
</Link>
```

### 3. Run Verification Scripts

Before committing:
```bash
# Find broken links
./find-broken-links.sh

# Test all endpoints
./test-all-doc-endpoints.sh http://localhost:5001
```

## Quick Reference

| Incorrect URL | Correct URL |
|--------------|-------------|
| `/troubleshooting/` | `/docs/blockchain-dna/troubleshooting/README` |
| `/api/` | `/docs/blockchain-dna/api/README` |
| `/integrations/` | `/docs/blockchain-dna/integrations/README` |
| `/documentation/` | `/docs/blockchain-dna/documentation/README` |
| `/features/` | `/docs/blockchain-dna/features/README` |
| `/resources/` | `/docs/blockchain-dna/resources/README` |

## Tools Available

1. **`find-broken-links.sh`** - Finds links missing `/docs/` prefix
2. **`crawl-docs.sh`** - Comprehensive link crawler and tester
3. **`test-all-doc-endpoints.sh`** - Tests all documentation endpoints
4. **`verify-all-docs.sh`** - Verifies all documentation files exist
5. **`fix-all-missing-docs.sh`** - Copies missing files

## Example: Fixing `/troubleshooting/` 404

1. **Discover**: User reports 404 for `/troubleshooting/`
2. **Identify**: This is an incorrect URL (missing `/docs/` and product)
3. **Search**: Check if any source files link to this incorrect URL
4. **Fix**: Update links to use `/docs/blockchain-dna/troubleshooting/README` or `../troubleshooting/`
5. **Verify**: Test the correct URL works
6. **Document**: The correct URL is `/docs/blockchain-dna/troubleshooting/README`

---

**Note**: In a SPA, all routes return HTTP 200 (index.html is served). The client-side router handles 404s by showing the NotFound component. The markdown renderer normalizes relative links automatically, but absolute incorrect URLs typed directly in the browser will show the NotFound page.

