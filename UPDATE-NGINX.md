# Update Nginx Configuration for knightinfotek.com

Your new site is running on port 5000. Now update Nginx to point to it.

## Step 1: Check Current Nginx Config

```bash
# View the current configuration
cat /etc/nginx/sites-available/knightinfotek.com

# Or just see the proxy_pass line
grep -A 5 "location /" /etc/nginx/sites-available/knightinfotek.com
```

## Step 2: Update Nginx Configuration

```bash
# Edit the Nginx config
sudo nano /etc/nginx/sites-available/knightinfotek.com
```

Replace or update the `location /` block to:

```nginx
location / {
    proxy_pass http://localhost:5000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
    
    # Timeouts
    proxy_connect_timeout 60s;
    proxy_send_timeout 60s;
    proxy_read_timeout 60s;
}
```

**Important:** Keep any SSL/HTTPS configuration you have. Only change the `location /` block.

## Step 3: Test and Restart Nginx

```bash
# Test the configuration
sudo nginx -t

# If test passes, restart Nginx
sudo systemctl restart nginx

# Check status
sudo systemctl status nginx
```

## Step 4: Verify It's Working

```bash
# Test locally
curl -H "Host: knightinfotek.com" http://localhost

# Or visit in browser
# http://knightinfotek.com (or https:// if SSL is configured)
```

## Full Example Config (HTTP)

If you need a complete example:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name www.knightinfotek.com knightinfotek.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## If You Have SSL/HTTPS

Keep your SSL configuration and just update the proxy_pass:

```nginx
server {
    listen 443 ssl http2;
    server_name www.knightinfotek.com knightinfotek.com;
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    location / {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Troubleshooting

**If Nginx won't restart:**
```bash
# Check for syntax errors
sudo nginx -t

# Check error logs
sudo tail -f /var/log/nginx/error.log
```

**If site still shows old content:**
```bash
# Clear browser cache
# Or test with curl
curl -H "Host: knightinfotek.com" http://localhost

# Check if PM2 is running
pm2 status

# Check app logs
pm2 logs knightinfotek
```

