# VPS Deployment Guide for Knight InfoTek Website

Complete guide for deploying the Knight InfoTek website to your VPS.

## Prerequisites

- VPS with Ubuntu/Debian (or similar Linux distribution)
- Node.js 18+ installed
- Git installed
- Domain name pointing to your VPS IP (optional but recommended)
- SSH access to your VPS

## Quick Deployment Steps

### 1. Initial Server Setup

```bash
# SSH into your VPS
ssh user@your-vps-ip

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 (process manager)
sudo npm install -g pm2

# Install Nginx (reverse proxy)
sudo apt install -y nginx
```

### 2. Clone Repository to /var/www/

```bash
# Navigate to your web directory
cd /var/www

# Clone your repository (or update if it exists)
if [ -d "knightinfotek.com" ]; then
    cd knightinfotek.com
    git pull
else
    git clone https://github.com/brkn404/Knight-Infotek-web2.git knightinfotek.com
    cd knightinfotek.com
fi

# Install dependencies
npm install
```

### 3. Build the Application

```bash
# Build for production
npm run build

# Verify build output
ls -la dist/
# Should see: index.cjs and public/ directory
```

### 4. Configure Environment Variables

```bash
# Create .env file
nano .env
```

Add:
```env
NODE_ENV=production
PORT=3000
# Add any other environment variables you need
```

### 5. Set Up PM2 Process Manager

```bash
# Create PM2 ecosystem file
nano ecosystem.config.js
```

See `ecosystem.config.js` file in repository.

```bash
# Start the application with PM2
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Set up PM2 to start on boot
pm2 startup
# Follow the instructions it provides
```

### 6. Configure Nginx Reverse Proxy

```bash
# Create or update Nginx configuration
sudo nano /etc/nginx/sites-available/knightinfotek.com
```

Copy the contents from `nginx.conf` file in the repository.

```bash
# Enable the site (if not already enabled)
sudo ln -sf /etc/nginx/sites-available/knightinfotek.com /etc/nginx/sites-enabled/knightinfotek.com

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

**Note:** If you already have a knightinfotek.com config, just update it with the new proxy settings.

### 7. Set Up SSL (Optional but Recommended)

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d www.knightinfotek.com -d knightinfotek.com

# Certbot will automatically configure Nginx
# Certificates auto-renew via cron
```

## Deployment Workflow

### Initial Deployment

```bash
cd /var/www/knightinfotek.com
git pull
npm install
npm run build
pm2 start ecosystem.config.js
pm2 save
```

### Update Deployment Script

Use the provided `deploy.sh` script:

```bash
cd /var/www/knightinfotek.com
./deploy.sh
```

Or manually:
```bash
cd /var/www/knightinfotek.com
git pull
npm install
npm run build
pm2 restart knightinfotek
```

## File Structure on VPS

```
/var/www/knightinfotek.com/
├── dist/
│   ├── index.cjs          # Server bundle
│   └── public/            # Client build
├── content/                # Blog content
├── ecosystem.config.js     # PM2 config
├── .env                    # Environment variables
└── ... (other files)
```

## Useful Commands

### PM2 Commands
```bash
pm2 status                  # Check app status
pm2 logs knightinfotek      # View logs
pm2 restart knightinfotek   # Restart app
pm2 stop knightinfotek      # Stop app
pm2 monit                   # Monitor resources
```

### Nginx Commands
```bash
sudo systemctl status nginx  # Check status
sudo systemctl restart nginx # Restart
sudo nginx -t               # Test config
```

### Git Commands
```bash
git pull                    # Update code
git log --oneline -5        # View recent commits
```

## Troubleshooting

### Application won't start
```bash
# Check PM2 logs
pm2 logs knightinfotek --lines 50

# Check if port is in use
sudo lsof -i :3000

# Verify build
ls -la dist/
```

### Nginx 502 Bad Gateway
```bash
# Check if app is running
pm2 status

# Check Nginx error logs
sudo tail -f /var/log/nginx/error.log

# Verify port in ecosystem.config.js matches PORT in .env
```

### Build fails
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node.js version
node --version  # Should be 18+

# Try building again
npm run build
```

## Security Checklist

- [ ] Firewall configured (UFW)
- [ ] SSH key authentication only
- [ ] SSL certificate installed
- [ ] Environment variables secured
- [ ] PM2 running as non-root user
- [ ] Regular system updates

## Firewall Setup

```bash
# Install UFW
sudo apt install -y ufw

# Allow SSH
sudo ufw allow 22/tcp

# Allow HTTP/HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Enable firewall
sudo ufw enable

# Check status
sudo ufw status
```

## Monitoring

### PM2 Monitoring
```bash
pm2 monit
```

### System Resources
```bash
htop
df -h
free -m
```

## Backup Strategy

```bash
# Backup script (create ~/backup.sh)
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
tar -czf ~/backups/knightinfotek_$DATE.tar.gz ~/apps/knightinfotek
```

## Next Steps

1. Set up automated backups
2. Configure monitoring (e.g., UptimeRobot)
3. Set up log rotation
4. Configure CDN if needed
5. Set up staging environment

