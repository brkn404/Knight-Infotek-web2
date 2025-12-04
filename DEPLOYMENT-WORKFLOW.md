# Knight InfoTek Website - Deployment Workflow

Complete guide for deploying and updating the Knight InfoTek website.

## Overview

The website is deployed as **static files** served by Nginx. The workflow is:
1. Make changes locally
2. Build the site
3. Push to GitHub
4. Pull and build on VPS
5. Copy files to Nginx html directory

## Initial VPS Setup (One-Time)

### 1. Clone Repository

```bash
cd /var/www/knightinfotek.com
git clone https://github.com/brkn404/Knight-Infotek-web2.git .
# Or if directory exists:
git pull origin main
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Git (if needed)

```bash
git config --global --add safe.directory /var/www/knightinfotek.com
git remote set-url origin https://github.com/brkn404/Knight-Infotek-web2.git
```

## Standard Deployment Workflow

### On Your Local Machine

```bash
cd /Volumes/evo4TB/kit/KGE/KnightGlobal

# 1. Make your changes (edit files, add content, etc.)

# 2. Test locally (optional)
npm run dev:client

# 3. Commit changes
git add -A
git commit -m "Description of changes"

# 4. Push to GitHub
git push origin main
```

### On Your VPS

```bash
cd /var/www/knightinfotek.com

# 1. Pull latest changes
git pull origin main

# 2. Install any new dependencies
npm install

# 3. Build the site
npm run build

# 4. Deploy to Nginx html directory
rm -rf /var/www/knightinfotek.com/html/*
cp -r dist/public/* /var/www/knightinfotek.com/html/
chown -R www-data:www-data /var/www/knightinfotek.com/html
```

### Quick Deploy Script

Create this on your VPS for faster deployments:

```bash
cat > /var/www/knightinfotek.com/deploy.sh << 'EOF'
#!/bin/bash
set -e
cd /var/www/knightinfotek.com
git pull origin main
npm install
npm run build
pm2 restart knightinfotek || pm2 start ecosystem.config.cjs --name knightinfotek
pm2 save
echo "✅ Deployment complete!"
EOF

chmod +x /var/www/knightinfotek.com/deploy.sh
```

Then just run: `./deploy.sh`

**Note:** The config file is `ecosystem.config.cjs` (not `.js`) because package.json has `"type": "module"`.

## Updating Blog Posts

### Method 1: Edit JSON File (Easiest)

```bash
# On your local machine
cd /Volumes/evo4TB/kit/KGE/KnightGlobal

# Edit the blog posts list
nano content/blog/blog-posts.json
# Or use your editor to edit: content/blog/blog-posts.json
```

**Add a new post:**
```json
{
  "id": 4,
  "title": "Your New Blog Post Title",
  "excerpt": "A compelling description...",
  "date": "January 25, 2025",
  "category": "Blockchain",
  "readTime": "5 min read",
  "slug": "your-new-post-slug",
  "published": true
}
```

**Then commit and push:**
```bash
git add content/blog/blog-posts.json
git commit -m "Add new blog post: Your Title"
git push origin main
```

**On VPS:**
```bash
cd /var/www/knightinfotek.com
./deploy.sh
```

### Method 2: Add Full Markdown Content (Optional)

```bash
# Create markdown file
nano content/blog/your-new-post-slug.md
```

Add content with frontmatter:
```markdown
---
title: "Your New Blog Post Title"
excerpt: "A compelling description..."
date: "2025-01-25"
category: "Blockchain"
readTime: "5 min read"
slug: "your-new-post-slug"
---

# Your Blog Post Title

Your full content here in Markdown...
```

Then commit, push, and deploy as above.

### Blog Update Workflow Summary

1. **Local:** Edit `content/blog/blog-posts.json` (and optionally create `.md` files)
2. **Local:** `git add content/blog/ && git commit -m "Update blog" && git push origin main`
3. **VPS:** `cd /var/www/knightinfotek.com && ./deploy.sh`

## Updating Other Content

### Update Product Pages

```bash
# Edit product page files
nano client/src/pages/blockchain-dna.tsx
nano client/src/pages/cha-ching-analytics.tsx
# etc.

# Commit and push
git add client/src/pages/
git commit -m "Update product page content"
git push origin main

# Deploy on VPS
./deploy.sh
```

### Update Homepage Content

```bash
# Edit homepage components
nano client/src/components/hero.tsx
nano client/src/components/about.tsx
nano client/src/components/products.tsx

# Commit and push
git add client/src/components/
git commit -m "Update homepage content"
git push origin main

# Deploy on VPS
./deploy.sh
```

### Update Contact Information

```bash
# Edit contact component
nano client/src/components/contact.tsx

# Commit and push
git add client/src/components/contact.tsx
git commit -m "Update contact information"
git push origin main

# Deploy on VPS
./deploy.sh
```

## File Locations Reference

### Content Files
- **Blog Posts:** `content/blog/blog-posts.json`
- **Blog Content:** `content/blog/*.md` (optional)

### Source Files
- **Homepage:** `client/src/pages/home.tsx`
- **Product Pages:** `client/src/pages/*.tsx`
- **Components:** `client/src/components/*.tsx`
- **Blog Page:** `client/src/pages/blog.tsx`
- **Support Page:** `client/src/pages/support.tsx`

### Build Output
- **Built Files:** `dist/public/`
- **Deployed Location:** `/var/www/knightinfotek.com/html/`

## Troubleshooting

### Git Pull Fails with Merge Conflict

```bash
# Remove conflicting files
rm -f check-port.sh deploy-static.sh
# Or any other conflicting files

# Pull again
git pull origin main
```

### Site Shows Old Content After Deploy

1. **Clear browser cache:** Hard refresh (Ctrl+Shift+R / Cmd+Shift+R)
2. **Verify files updated:**
   ```bash
   ls -lt /var/www/knightinfotek.com/html/assets/ | head -3
   ```
3. **Check file contents:**
   ```bash
   grep -i "WHAT IS" /var/www/knightinfotek.com/html/assets/*.js
   ```

### Build Fails

```bash
# Clean and rebuild
rm -rf dist node_modules/.vite
npm install
npm run build
```

### Nginx Not Serving New Files

```bash
# Restart Nginx
sudo systemctl restart nginx

# Check Nginx logs
sudo tail -f /var/log/nginx/knightinfotek.com-error.log
```

## Multi-Site VPS Configuration

⚠️ **IMPORTANT: Your VPS runs multiple sites. Ports are pre-configured and should NOT be changed.**

### Port Configuration

The port for knightinfotek.com is already configured in your multi-site setup. To check the current port:

```bash
# Check PM2 process port
pm2 show knightinfotek | grep PORT

# Check Nginx proxy configuration
grep -r "proxy_pass" /etc/nginx/sites-available/knightinfotek.com

# Check what ports are in use
netstat -tlnp | grep -E ":(5000|5001|3000)"
```

### DO NOT Change Ports

- **ecosystem.config.js**: The PORT value is a default only. The actual port is managed by your VPS configuration.
- **PM2**: If you need to change the port (rare), use PM2 environment variables, but check with other sites first.
- **Nginx**: Your Nginx config already points to the correct port for this site.

### Restarting After Deployment

When restarting the application, the port stays the same:

```bash
# Standard restart (port unchanged)
pm2 restart knightinfotek

# If you need to check/update port (only if necessary):
pm2 show knightinfotek
# Then restart with same configuration
pm2 restart knightinfotek
```

## Quick Reference Commands

### Local Development
```bash
npm run dev:client    # Start dev server
npm run build         # Build for production
npm run check         # Type check
```

### VPS Deployment
```bash
./deploy.sh           # Full deployment (if script exists)
# OR manually:
git pull && npm install && npm run build && rm -rf html/* && cp -r dist/public/* html/
```

### Git Commands
```bash
git status            # Check what's changed
git add -A            # Stage all changes
git commit -m "msg"    # Commit changes
git push origin main   # Push to GitHub
git pull origin main   # Pull from GitHub
```

## Best Practices

1. **Always test locally** before pushing to production
2. **Commit frequently** with descriptive messages
3. **Pull before making changes** on VPS to avoid conflicts
4. **Clear browser cache** after deployments
5. **Verify deployment** by checking file timestamps
6. **Keep backups** of important content files

## Support

- **GitHub Repo:** https://github.com/brkn404/Knight-Infotek-web2
- **Documentation:** See other `.md` files in the repository
- **Blog Guide:** See `BLOG-UPDATE-GUIDE.md`
- **Deployment Guide:** See `DEPLOYMENT-GUIDE.md`

