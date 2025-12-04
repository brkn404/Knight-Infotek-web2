# Quick Reference: Finding and Fixing 404s

## How to Run Scripts

All scripts must be run with `./` prefix:

```bash
./script-name.sh
```

Not:
```bash
script-name.sh  # ❌ This won't work
```

## Available Scripts

### 1. Test Incorrect vs Correct URLs
```bash
./test-404-urls.sh http://localhost:5001
```
Shows which URLs work and which don't.

### 2. Detect 404s by Content (Not HTTP Status)
```bash
./detect-404-content.sh http://localhost:5001
```
Checks actual page content to see if it's NotFound or real content.

### 3. Find Source of Incorrect URLs
```bash
./find-source-of-404s.sh
```
Finds where incorrect URLs are defined in your code.

### 4. Comprehensive Link Crawler
```bash
./crawl-docs.sh http://localhost:5001
```
Tests all documentation links and reports broken ones.

### 5. Fix Missing Files
```bash
./fix-all-missing-docs.sh
```
Copies missing documentation files.

## Common Commands

### Sync Documentation
```bash
npm run sync:content
```

### Test a Specific URL
```bash
curl -I http://localhost:5001/docs/blockchain-dna/troubleshooting/README
```

### Check if File Exists
```bash
ls -la client/public/content/docs/blockchain-dna/troubleshooting/README.md
```

## Understanding Results

### HTTP 200 in SPA
- **All routes return 200** (server serves index.html)
- **Check the content**, not just HTTP status
- NotFound pages contain "404" or "not found" text

### Correct vs Incorrect URLs

| Incorrect | Correct |
|-----------|---------|
| `/troubleshooting/` | `/docs/blockchain-dna/troubleshooting/README` |
| `/api/` | `/docs/blockchain-dna/api/README` |
| `/integrations/` | `/docs/blockchain-dna/integrations/README` |

## Workflow

1. **Discover**: `./detect-404-content.sh`
2. **Find Source**: `./find-source-of-404s.sh`
3. **Fix**: Update source files
4. **Sync**: `npm run sync:content`
5. **Verify**: `./test-404-urls.sh`

