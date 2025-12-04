# Complete Guide: Discovering and Fixing 404 Errors

## Understanding the Problem

When you see `http://localhost:5001/troubleshooting/` returning 404, it's because:
1. **Missing `/docs/` prefix** - All documentation must be under `/docs/`
2. **Missing product name** - Need to specify which product (e.g., `blockchain-dna`)
3. **Incorrect path** - Should point to the actual file (e.g., `README`)

**Correct URL**: `http://localhost:5001/docs/blockchain-dna/troubleshooting/README`

## Why HTTP 200 Doesn't Mean Success

In a **Single Page Application (SPA)**:
- All routes return **HTTP 200** (the server serves `index.html`)
- The client-side router then handles routing
- If no route matches, the `NotFound` component is rendered
- **We must check the content, not just HTTP status**

## Discovery Methods

### Method 1: Content-Based Detection

Use `detect-404-content.sh` to check actual page content:

```bash
./detect-404-content.sh http://localhost:5001
```

This script:
- Checks if content contains "404" or "not found" text
- Distinguishes between NotFound pages and actual content
- Reports which URLs show NotFound vs content

### Method 2: Test Incorrect vs Correct URLs

Use `test-404-urls.sh` to compare:

```bash
./test-404-urls.sh http://localhost:5001
```

Shows:
- Incorrect URLs (what NOT to use)
- Correct URLs (what TO use)
- HTTP status for each

### Method 3: Find Source of Incorrect URLs

Use `find-source-of-404s.sh` to find where incorrect URLs come from:

```bash
./find-source-of-404s.sh
```

Searches for:
- Absolute paths without `/docs/` in markdown files
- Incorrect `href` attributes in TypeScript/TSX files
- Router configuration issues

### Method 4: Browser DevTools

1. Open DevTools (F12)
2. Go to **Network** tab
3. Navigate through the site
4. Look for requests that return HTML with "404" or "not found"
5. Check **Console** tab for link normalization logs:
   ```
   [Markdown] Link: "../troubleshooting/" → "/docs/blockchain-dna/troubleshooting/README"
   ```

### Method 5: Comprehensive Crawler

Use `crawl-docs.sh` to test all links:

```bash
./crawl-docs.sh http://localhost:5001
```

Tests all `/docs/` links and reports broken ones.

## How to Fix 404s

### Step 1: Identify the Source

Find where the incorrect URL is coming from:

```bash
# Search for the incorrect pattern
grep -r "troubleshooting/" content/docs/ client/src/
grep -r 'href="/troubleshooting' client/src/
```

### Step 2: Update the Link

**In Markdown files:**
- ✅ Use relative paths: `../troubleshooting/` (auto-normalized)
- ✅ Or absolute paths: `/docs/blockchain-dna/troubleshooting/README`

**In TypeScript/TSX files:**
- ✅ Always use absolute paths: `/docs/blockchain-dna/troubleshooting/README`

### Step 3: Verify the File Exists

```bash
# Check source
ls -la content/docs/blockchain-dna/troubleshooting/README.md

# Check public (after sync)
ls -la client/public/content/docs/blockchain-dna/troubleshooting/README.md
```

### Step 4: Sync and Test

```bash
# Sync files
npm run sync:content

# Test the URL
curl -s http://localhost:5001/docs/blockchain-dna/troubleshooting/README | head -10
```

## Automatic Link Normalization

The markdown renderer (`client/src/lib/markdown.tsx`) automatically converts:

| Relative Link | Normalized To |
|--------------|---------------|
| `../troubleshooting/` | `/docs/{product}/troubleshooting/README` |
| `../api/` | `/docs/{product}/api/README` |
| `../integrations/` | `/docs/{product}/integrations/README` |
| `../README.md` | `/docs/{product}/README` |
| `./api/` | `/docs/{product}/api/README` |

**Product detection**: Extracted from current path context

## Common Issues and Solutions

### Issue 1: User Types Incorrect URL Directly

**Problem**: User types `/troubleshooting/` in browser  
**Solution**: This is expected - show NotFound page. Consider adding a redirect or better error message.

### Issue 2: Hardcoded Link in Component

**Problem**: Component has `href="/troubleshooting/"`  
**Solution**: Update to `/docs/blockchain-dna/troubleshooting/README`

### Issue 3: Relative Link Not Normalized

**Problem**: Markdown has `../troubleshooting/` but it's not being normalized  
**Solution**: Check that markdown renderer is receiving the correct `currentPath` parameter

### Issue 4: File Missing After Sync

**Problem**: File exists in source but not in public after sync  
**Solution**: 
1. Check if file exists in source: `/Volumes/evo4TB/kit/KGE/docs/products/BDNA/knowledge-base/`
2. Run sync: `npm run sync:content`
3. Check verification output

## Quick Reference

### Incorrect URLs (Will Show NotFound)
- ❌ `/troubleshooting/`
- ❌ `/api/`
- ❌ `/integrations/`
- ❌ `/documentation/`

### Correct URLs (Will Show Content)
- ✅ `/docs/blockchain-dna/troubleshooting/README`
- ✅ `/docs/blockchain-dna/api/README`
- ✅ `/docs/blockchain-dna/integrations/README`
- ✅ `/docs/blockchain-dna/documentation/README`

## Tools Summary

| Script | Purpose |
|--------|---------|
| `test-404-urls.sh` | Compare incorrect vs correct URLs |
| `detect-404-content.sh` | Check actual page content (not just HTTP status) |
| `find-source-of-404s.sh` | Find where incorrect URLs come from |
| `crawl-docs.sh` | Comprehensive link testing |
| `find-broken-links.sh` | Find links missing `/docs/` prefix |

## Testing Workflow

1. **Run content detection**: `./detect-404-content.sh`
2. **Find source**: `./find-source-of-404s.sh`
3. **Fix links**: Update source files
4. **Sync**: `npm run sync:content`
5. **Verify**: `./test-404-urls.sh`

---

**Remember**: In SPAs, HTTP 200 doesn't mean success - always check the content!

