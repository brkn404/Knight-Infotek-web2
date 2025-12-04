# Documentation Link Verification

This directory contains scripts to verify that all documentation links are working correctly.

## Quick Start

1. **Start the development server:**
   ```bash
   npm run dev:client
   ```

2. **In another terminal, run the verification:**
   ```bash
   # Simple test (tests key links)
   npm run test:links
   
   # Comprehensive test (extracts all links from codebase)
   npm run verify:links
   ```

## Scripts

### `test-docs-links.sh`
Simple bash script that tests a predefined list of key documentation links.

**Usage:**
```bash
./test-docs-links.sh [BASE_URL]
```

**Example:**
```bash
./test-docs-links.sh http://localhost:5001
```

### `verify-docs-links-python.py`
Comprehensive Python script that:
- Extracts all `/docs/` links from TypeScript/TSX files
- Extracts links from markdown documentation files
- Extracts links from `docs-index.tsx` product definitions
- Tests each link using curl
- Reports working and broken links

**Usage:**
```bash
python3 verify-docs-links-python.py
```

**Requirements:**
- Python 3
- curl (or requests library as fallback)

### `verify-docs-links.sh`
Full-featured bash script (alternative to Python version).

## What Gets Tested

The scripts test:
- All `/docs/` routes from product pages
- All documentation links in markdown files
- All links defined in `docs-index.tsx`
- Nested paths like `/docs/blockchain-dna/api/README`

## Common Issues

### "Server not responding"
- Make sure the dev server is running: `npm run dev:client`
- Check the port (default is 5001, or 5000)

### "404 Page Not Found"
- The documentation file may not exist in `client/public/content/docs/`
- Run `npm run sync:content` to sync documentation files
- Check the file path matches the route

### "Connection refused"
- The server isn't running or is on a different port
- Check `lsof -i :5001` to see what's using the port

## Output

The scripts will show:
- ✅ Working links (HTTP 200)
- ❌ Broken links (HTTP 404, etc.)
- ⚠️  Errors (connection issues, timeouts)

At the end, you'll get a summary with:
- Total links tested
- Number of working links
- Number of broken links
- List of broken links (if any)

