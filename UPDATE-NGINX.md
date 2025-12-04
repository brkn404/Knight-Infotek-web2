# Update Nginx Configuration

To update the Nginx configuration on your VPS:

```bash
cd /var/www/knightinfotek.com

# Pull the latest config
git pull origin main

# Backup current config
sudo cp /etc/nginx/sites-available/knightinfotek.com.conf /etc/nginx/sites-available/knightinfotek.com.conf.backup

# Copy the new config from repo
sudo cp /var/www/knightinfotek.com/nginx-knightinfotek.conf /etc/nginx/sites-available/knightinfotek.com.conf

# Test Nginx config
sudo nginx -t

# If test passes, reload Nginx
sudo systemctl reload nginx
```

The config file `nginx-knightinfotek.conf` in the repo matches what should be in `/etc/nginx/sites-available/knightinfotek.com.conf` on your VPS.
