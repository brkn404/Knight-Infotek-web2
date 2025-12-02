# Clear Cache and Verify Deployment

If the "What is" sections aren't showing, try these steps:

## On VPS - Rebuild and Deploy

```bash
cd /var/www/knightinfotek.com

# Pull latest
git pull origin main

# Clean build (remove old dist)
rm -rf dist

# Rebuild
npm run build

# Clear html directory completely
rm -rf /var/www/knightinfotek.com/html/*

# Copy new files
cp -r dist/public/* /var/www/knightinfotek.com/html/

# Set permissions
chown -R www-data:www-data /var/www/knightinfotek.com/html

# Verify the JS file has the sections
grep -i "WHAT IS" /var/www/knightinfotek.com/html/assets/*.js
```

## Browser Cache

1. **Hard Refresh:**
   - Chrome/Edge: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Firefox: Ctrl+F5 or Cmd+Shift+R
   - Safari: Cmd+Option+R

2. **Clear Cache:**
   - Chrome: Settings > Privacy > Clear browsing data > Cached images and files
   - Firefox: Settings > Privacy > Clear Data > Cached Web Content

3. **Test in Incognito/Private Window**

## Verify Files

```bash
# Check if index.html references the new JS
cat /var/www/knightinfotek.com/html/index.html | grep assets

# Check file sizes (new build should be larger)
ls -lh /var/www/knightinfotek.com/html/assets/*.js

# Check modification time
ls -lt /var/www/knightinfotek.com/html/assets/ | head -5
```

## Nginx Cache (if configured)

```bash
# Restart Nginx to clear any proxy cache
sudo systemctl restart nginx
```

