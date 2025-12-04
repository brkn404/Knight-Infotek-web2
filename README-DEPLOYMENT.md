# Knight InfoTek Website - Deployment Documentation

## Quick Start

### First Time Setup (VPS)

```bash
cd /var/www/knightinfotek.com
git clone https://github.com/brkn404/Knight-Infotek-web2.git .
npm install
npm run build
rm -rf html/*
cp -r dist/public/* html/
chown -R www-data:www-data html
```

### Standard Update Workflow

**Local:**
```bash
# Make changes
git add -A
git commit -m "Description"
git push origin main
```

**VPS:**
```bash
cd /var/www/knightinfotek.com
git pull origin main
npm run build
rm -rf html/*
cp -r dist/public/* html/
```

## Documentation Files

- **DEPLOYMENT-WORKFLOW.md** - Complete deployment guide
- **BLOG-UPDATE-WORKFLOW.md** - How to update blog posts
- **QUICK-DEPLOY.md** - Quick reference
- **UPDATE-NGINX.md** - Nginx configuration
- **CLEAR-CACHE.md** - Troubleshooting cache issues

## Key Directories

- `content/blog/` - Blog posts (JSON + Markdown)
- `client/src/pages/` - Page components
- `client/src/components/` - Reusable components
- `dist/public/` - Build output
- `/var/www/knightinfotek.com/html/` - Production files (VPS)

## Common Tasks

### Update Blog
See: `BLOG-UPDATE-WORKFLOW.md`

### Update Content
Edit files in `client/src/`, commit, push, deploy

### Deploy Changes
See: `DEPLOYMENT-WORKFLOW.md`

## Support

- GitHub: https://github.com/brkn404/Knight-Infotek-web2
- Site: https://knightinfotek.com

