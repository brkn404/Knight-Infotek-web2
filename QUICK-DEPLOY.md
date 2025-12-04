# Quick Deploy Guide for knightinfotek.com

Since you already have the directory at `/var/www/knightinfotek.com`, here's the quick setup:

## First Time Setup

### 1. Check Git Remote Configuration

```bash
cd /var/www/knightinfotek.com

# Check if git is initialized and what remote is configured
git remote -v
```

**If you see the GitHub URL**, you're good to go!

**If you see nothing or a different URL**, set it up:

```bash
# If git is not initialized
git init
git remote add origin https://github.com/brkn404/Knight-Infotek-web2.git

# If git exists but remote is wrong
git remote set-url origin https://github.com/brkn404/Knight-Infotek-web2.git

# Verify it's set correctly
git remote -v
# Should show:
# origin  https://github.com/brkn404/Knight-Infotek-web2.git (fetch)
# origin  https://github.com/brkn404/Knight-Infotek-web2.git (push)
```

### 2. Pull and Deploy

```bash
# Pull the latest code
git pull origin main

# If you get "fatal: refusing to merge unrelated histories"
# Use: git pull origin main --allow-unrelated-histories

# Install dependencies
npm install

# Build the application
npm run build

# Start with PM2 (port is already configured, don't change it)
pm2 start ecosystem.config.js
pm2 save

# Verify it started correctly
pm2 status knightinfotek
pm2 logs knightinfotek --lines 20
```

### 3. Configure Nginx (if not already done)

```bash
sudo nano /etc/nginx/sites-available/knightinfotek.com
# Copy contents from nginx.conf in the repo

# Test and restart Nginx
sudo nginx -t
sudo systemctl restart nginx
```

## Regular Updates

```bash
cd /var/www/knightinfotek.com
./deploy.sh
```

Or manually:
```bash
cd /var/www/knightinfotek.com
git pull origin main
npm install
npm run build
pm2 restart knightinfotek  # Port stays the same, no changes needed
```

## Important Notes - Multi-Site VPS Setup

⚠️ **CRITICAL: Your VPS runs multiple sites. DO NOT change port numbers in ecosystem.config.js.**

- **Port Configuration**: The port is already configured for your multi-site setup. The site runs on the port already set in your PM2/Nginx configuration.
- **PM2 Name**: Process is named "knightinfotek"
- **Nginx**: Your existing knightinfotek.com config already proxies to the correct port
- **Other Sites**: This deployment only affects knightinfotek.com - other sites remain unchanged
- **Port Changes**: If you need to change the port, check with other sites first, then update via PM2 environment variables, NOT in ecosystem.config.js
- **Git Remote**: The `origin` remote tells git where to pull from (stored in `.git/config`)

### Checking Current Port Configuration

```bash
# Check what port PM2 is using
pm2 show knightinfotek | grep PORT

# Check Nginx proxy configuration
grep -r "proxy_pass" /etc/nginx/sites-available/knightinfotek.com

# Check what ports are in use
netstat -tlnp | grep -E ":(5000|5001|3000)"
```

## Check Status

```bash
# Check git remote
git remote -v

# Check if app is running
pm2 status knightinfotek

# View logs
pm2 logs knightinfotek

# Check Nginx
sudo systemctl status nginx
```
