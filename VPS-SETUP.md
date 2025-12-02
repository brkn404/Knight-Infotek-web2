# VPS Setup Instructions

Since you cloned into a subdirectory, here's how to fix it:

## Option 1: Move Contents Up (Recommended)

```bash
cd /var/www/knightinfotek.com

# Move all files from Knight-Infotek-web2 to current directory
mv Knight-Infotek-web2/* Knight-Infotek-web2/.* . 2>/dev/null || true

# Remove the now-empty directory
rmdir Knight-Infotek-web2

# Verify files are there
ls -la
# Should see: package.json, deploy.sh, ecosystem.config.js, etc.
```

## Option 2: Use the Subdirectory

If you prefer to keep it in the subdirectory:

```bash
cd /var/www/knightinfotek.com/Knight-Infotek-web2

# Then run all commands from here
npm install
npm run build
pm2 start ecosystem.config.js
```

**But you'll need to update your Nginx config to point to the correct path.**

## After Moving Files - Continue Setup

```bash
cd /var/www/knightinfotek.com

# Make scripts executable
chmod +x deploy.sh update-blog.sh setup-git.sh

# Install dependencies
npm install

# Build the application
npm run build

# Start with PM2
pm2 start ecosystem.config.js
pm2 save

# Check status
pm2 status
```

## Configure Nginx

```bash
sudo nano /etc/nginx/sites-available/knightinfotek.com
```

Add or update the location block:
```nginx
location / {
    proxy_pass http://localhost:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

Then:
```bash
sudo nginx -t
sudo systemctl restart nginx
```

