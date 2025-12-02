# Verify Deployment

Your app is now running! Let's verify everything:

## 1. Check if App is Responding

```bash
# Test locally on the server
curl http://localhost:5000

# Or check the logs
pm2 logs knightinfotek --lines 20
```

## 2. Check Nginx Configuration

```bash
# View your Nginx config
cat /etc/nginx/sites-available/knightinfotek.com

# Make sure it proxies to port 5000
grep "proxy_pass" /etc/nginx/sites-available/knightinfotek.com
```

It should show:
```nginx
proxy_pass http://localhost:5000;
```

If it shows a different port, either:
- Update Nginx to use port 5000, OR
- Update ecosystem.config.cjs to use the port Nginx expects

## 3. Update Nginx Config (if needed)

```bash
sudo nano /etc/nginx/sites-available/knightinfotek.com
```

Make sure the location block has:
```nginx
location / {
    proxy_pass http://localhost:5000;
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

## 4. Test the Website

Visit: http://knightinfotek.com (or https:// if SSL is configured)

## 5. Useful Commands

```bash
# View logs
pm2 logs knightinfotek

# Restart app
pm2 restart knightinfotek

# Stop app
pm2 stop knightinfotek

# Check status
pm2 status

# Monitor resources
pm2 monit
```

## Troubleshooting

**If site doesn't load:**
1. Check PM2: `pm2 status`
2. Check logs: `pm2 logs knightinfotek`
3. Check Nginx: `sudo systemctl status nginx`
4. Check port: `lsof -i :5000`
5. Test locally: `curl http://localhost:5000`

