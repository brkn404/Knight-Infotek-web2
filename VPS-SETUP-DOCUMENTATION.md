# VPS Setup & Deployment Documentation

Complete documentation for the multi-site VPS setup and deployment process for knightinfotek.com.

## VPS Overview

**Server**: Multi-site VPS running multiple websites
**Site**: knightinfotek.com
**Port**: 5001 (fixed - do not change)
**Process Manager**: PM2
**Web Server**: Nginx (reverse proxy)

## VPS Directory Structure

```
/var/www/
├── knightinfotek.com/          # Knight InfoTek site
│   ├── dist/                   # Build output
│   │   ├── index.cjs          # Server bundle
│   │   └── public/             # Client files (served by Node.js)
│   ├── content/                # Source content (blog posts, docs)
│   ├── client/                 # React source code
│   ├── server/                 # Express server source
│   ├── ecosystem.config.cjs    # PM2 configuration
│   ├── package.json            # Dependencies
│   └── logs/                   # PM2 logs
├── [other-site-1]/            # Other sites on the VPS
└── [other-site-2]/            # Other sites on the VPS
```

## Port Configuration

**IMPORTANT: Your VPS runs multiple sites. Ports are pre-configured and must NOT be changed.**

- **knightinfotek.com**: Port 5001
- **Other sites**: Various ports (check with `netstat -tlnp` or `lsof -i`)

The port is configured in:
1. `ecosystem.config.cjs` - PM2 process configuration (PORT: 5001)
2. `/etc/nginx/sites-available/knightinfotek.com.conf` - Nginx proxy_pass

**DO NOT** change ports in ecosystem.config.cjs without checking other sites first.

## Nginx Configuration

**Location**: `/etc/nginx/sites-available/knightinfotek.com.conf`

The Nginx config proxies HTTPS traffic to the Node.js application on port 5001:

```nginx
server {
    listen 443 ssl http2;
    server_name knightinfotek.com www.knightinfotek.com;
    
    location / {
        proxy_pass http://localhost:5001;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

**To update Nginx config from repo:**
```bash
cd /var/www/knightinfotek.com
git pull origin main
sudo cp nginx-knightinfotek.conf /etc/nginx/sites-available/knightinfotek.com.conf
sudo nginx -t
sudo systemctl reload nginx
```

## PM2 Process Management

**Process Name**: `knightinfotek`
**Config File**: `ecosystem.config.cjs` (must be .cjs because package.json has "type": "module")
**Port**: 5001

### PM2 Commands

```bash
# Check status
pm2 status
pm2 show knightinfotek

# View logs
pm2 logs knightinfotek
pm2 logs knightinfotek --lines 50

# Restart
pm2 restart knightinfotek

# Stop
pm2 stop knightinfotek

# Delete (to restart fresh)
pm2 delete knightinfotek
pm2 start ecosystem.config.cjs --name knightinfotek

# Save configuration
pm2 save
```

## Standard Deployment Workflow

### Step 1: Local Development & Push

```bash
cd /Volumes/evo4TB/kit/KGE/KnightGlobal

# Make your changes
# Edit files in client/src/, content/blog/, etc.

# Test locally (optional)
PORT=5003 npm run dev

# Commit and push
git add -A
git commit -m "Description of changes"
git push origin main
```

### Step 2: VPS Deployment

```bash
# SSH into VPS
ssh user@your-vps

# Navigate to site directory
cd /var/www/knightinfotek.com

# Pull latest changes
git pull origin main

# Install any new dependencies
npm install

# Build the application
npm run build

# Restart PM2 process (port stays the same)
pm2 restart knightinfotek

# Verify it's running
pm2 logs knightinfotek --lines 10
# Should see: "serving on port 5001"
```

### Quick Deploy Script

You can create a deploy script on the VPS:

```bash
cat > /var/www/knightinfotek.com/deploy.sh << 'EOF'
#!/bin/bash
set -e
cd /var/www/knightinfotek.com
echo "📥 Pulling latest changes..."
git pull origin main
echo "📦 Installing dependencies..."
npm install
echo "🔨 Building application..."
npm run build
echo "🔄 Restarting PM2 process..."
pm2 restart knightinfotek
echo "✅ Deployment complete!"
pm2 logs knightinfotek --lines 5
EOF

chmod +x /var/www/knightinfotek.com/deploy.sh
```

Then just run: `./deploy.sh`

## Build Process

The build script (`script/build.ts`) does the following:

1. **Builds client** (React app) → `dist/public/`
2. **Copies content** (`content/` → `dist/public/content/`)
   - Blog posts from `content/blog/` → `dist/public/content/blog/`
   - Documentation from `content/docs/` → `dist/public/content/docs/`
3. **Builds server** (Express) → `dist/index.cjs`

The Node.js server serves the built client files from `dist/public/`.

## Blog Posts Update Process

### Adding New Blog Posts

1. **Create markdown file** in `content/blog/`:
   ```bash
   cd /Volumes/evo4TB/kit/KGE/KnightGlobal
   nano content/blog/2025-12-26-your-new-post.md
   ```

2. **Add entry to** `content/blog/blog-posts.json`:
   ```json
   {
     "id": 23,
     "title": "Your New Post Title",
     "excerpt": "Brief description...",
     "date": "December 26, 2025",
     "category": "Category",
     "readTime": "5 min read",
     "slug": "your-new-post",
     "published": true
   }
   ```

3. **Commit and push**:
   ```bash
   git add content/blog/
   git commit -m "Add new blog post: Your Title"
   git push origin main
   ```

4. **Deploy on VPS**:
   ```bash
   cd /var/www/knightinfotek.com
   ./deploy.sh
   # OR manually:
   git pull && npm install && npm run build && pm2 restart knightinfotek
   ```

## Checking VPS Configuration

Use the provided script to check your VPS setup:

```bash
cd /var/www/knightinfotek.com
./check-vps-config.sh
```

This shows:
- All PM2 processes and their ports
- Nginx configurations
- Active ports in use
- Process details

## Troubleshooting

### Site Not Updating

1. **Check if build completed**:
   ```bash
   ls -la dist/public/content/blog/ | head -5
   ```

2. **Check PM2 is running**:
   ```bash
   pm2 status knightinfotek
   ```

3. **Check logs for errors**:
   ```bash
   pm2 logs knightinfotek --lines 50
   ```

4. **Verify port is correct**:
   ```bash
   pm2 show knightinfotek | grep PORT
   lsof -i :5001
   ```

5. **Check Nginx is proxying correctly**:
   ```bash
   grep proxy_pass /etc/nginx/sites-available/knightinfotek.com.conf
   sudo nginx -t
   ```

### Port Conflicts

If you see port conflicts:
```bash
# Check what's using a port
lsof -i :5001
netstat -tlnp | grep 5001

# Check all PM2 processes
pm2 list
pm2 show <process-name>
```

### Build Fails

```bash
# Clean and rebuild
cd /var/www/knightinfotek.com
rm -rf dist node_modules/.vite
npm install
npm run build
```

### Nginx Not Serving Updates

```bash
# Test Nginx config
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx

# Check Nginx logs
sudo tail -f /var/log/nginx/knightinfotek.com-error.log
```

## Important Notes

1. **Multi-Site VPS**: Your VPS runs multiple sites. Always check port usage before changing anything.

2. **Port Configuration**: Port 5001 is fixed for knightinfotek.com. Do not change it in ecosystem.config.cjs without checking other sites.

3. **Build Required**: After pulling changes, you must run `npm run build` to rebuild the application.

4. **PM2 Restart**: After building, restart PM2 to load the new build: `pm2 restart knightinfotek`

5. **Content Files**: Blog posts and docs must be in `content/` directory (not just `client/public/content/`) so they get copied during build.

6. **Git Workflow**: Always pull before making changes on VPS to avoid conflicts.

## File Locations Reference

### Source Files (in repo)
- **Blog Posts**: `content/blog/*.md` and `content/blog/blog-posts.json`
- **Documentation**: `content/docs/`
- **React Components**: `client/src/`
- **Server Code**: `server/`

### Built Files (on VPS after build)
- **Client Build**: `dist/public/`
- **Server Build**: `dist/index.cjs`
- **Content**: `dist/public/content/` (copied from `content/`)

### Configuration Files
- **PM2 Config**: `ecosystem.config.cjs`
- **Nginx Config**: `/etc/nginx/sites-available/knightinfotek.com.conf`
- **Package Config**: `package.json`

## Quick Reference Commands

### Local
```bash
cd /Volumes/evo4TB/kit/KGE/KnightGlobal
git add -A && git commit -m "Changes" && git push origin main
```

### VPS
```bash
cd /var/www/knightinfotek.com
git pull origin main && npm install && npm run build && pm2 restart knightinfotek
```

### Check Status
```bash
pm2 status knightinfotek
pm2 logs knightinfotek --lines 20
lsof -i :5001
curl -I https://knightinfotek.com
```

