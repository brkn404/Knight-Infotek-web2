# Security Cleanup Guide

## 🚨 Security Concerns Identified

### 1. Sensitive Files in Root Directory
- Multiple markdown files with potentially proprietary information
- Scripts with hardcoded local Mac paths (`/Volumes/evo4TB/kit/KGE/docs/products`)
- Documentation files that might expose internal structure

### 2. Directories That Should Be Protected
- `attached_assets/` - Contains pasted text files with potentially sensitive content
- `gpt/` - Product briefs that might contain proprietary information
- `zk30/` - Internal documentation
- `CCA/` - Internal documentation
- Root-level markdown files with internal notes

### 3. Missing Security Protections
- No robots.txt file
- No security headers (Helmet.js)
- No directory listing protection
- No rate limiting visible
- No protection against directory busting

## ✅ Security Improvements Needed

### Immediate Actions

1. **Update .gitignore** to exclude sensitive files
2. **Add security middleware** to server
3. **Create robots.txt** to control crawlers
4. **Add directory listing protection**
5. **Move sensitive files** out of public directories
6. **Add security headers** (Helmet.js)

## 📋 Files to Protect

### Should NOT be in git or public:
- `attached_assets/` - Move to private location
- `gpt/` - Internal only, not for public
- `.env` - Already ignored, but verify
- Scripts with hardcoded paths
- Internal documentation files in root

### Can be public (already in dist/public/):
- `content/docs/` - Public documentation
- `content/blog/` - Public blog posts
- `client/src/` - Source code (ok if public)

