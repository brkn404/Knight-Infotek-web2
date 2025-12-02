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

# Start with PM2
pm2 start ecosystem.config.js
pm2 save
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
pm2 restart knightinfotek
```

## Important Notes

- **Port**: The app runs on port 3000 (change in ecosystem.config.js if needed)
- **PM2 Name**: Process is named "knightinfotek"
- **Nginx**: Make sure your existing knightinfotek.com config proxies to localhost:3000
- **Other Sites**: This won't affect your other sites in /var/www/
- **Git Remote**: The `origin` remote tells git where to pull from (stored in `.git/config`)

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
