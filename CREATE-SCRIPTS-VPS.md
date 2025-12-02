# Create Scripts Manually on VPS

Since the files aren't showing up after git pull, create them manually:

## On Your VPS - Create the Scripts

```bash
cd /var/www/knightinfotek.com

# Create check-port.sh
cat > check-port.sh << 'EOF'
#!/bin/bash
# Check what port the existing knightinfotek.com site is using

echo "🔍 Checking existing port configuration for knightinfotek.com..."
echo ""

# Check Nginx config
echo "📋 Nginx Configuration:"
if [ -f "/etc/nginx/sites-available/knightinfotek.com" ]; then
    echo "Found: /etc/nginx/sites-available/knightinfotek.com"
    PORT=$(grep -oP 'proxy_pass\s+http://localhost:\K[0-9]+' /etc/nginx/sites-available/knightinfotek.com | head -1)
    if [ ! -z "$PORT" ]; then
        echo "✅ Port found in Nginx config: $PORT"
    else
        echo "⚠️  No port found in proxy_pass directive"
    fi
    echo ""
    echo "Current proxy_pass line:"
    grep "proxy_pass" /etc/nginx/sites-available/knightinfotek.com | head -1
else
    echo "❌ Nginx config not found at /etc/nginx/sites-available/knightinfotek.com"
fi

echo ""
echo "📋 PM2 Processes:"
pm2 list | grep -i knight || echo "No knightinfotek process found in PM2"

echo ""
echo "📋 Running Node Processes:"
ps aux | grep -E "node.*knight|node.*3000|node.*5000" | grep -v grep || echo "No matching Node processes found"

echo ""
echo "📋 Listening Ports:"
echo "Port 3000:"
lsof -i :3000 2>/dev/null || echo "  Not in use"
echo "Port 5000:"
lsof -i :5000 2>/dev/null || echo "  Not in use"

echo ""
echo "💡 To update ecosystem.config.js with the correct port, edit it and change:"
echo "   PORT: 5000  ->  PORT: [port number from above]"
EOF

chmod +x check-port.sh

# Create ecosystem.config.js if it doesn't exist
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [
    {
      name: 'knightinfotek',
      script: './dist/index.cjs',
      cwd: process.cwd(),
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 5000,
      },
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      log_file: './logs/pm2-combined.log',
      time: true,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 10000,
    },
  ],
};
EOF

# Create logs directory
mkdir -p logs

# Now run the port checker
./check-port.sh
```

## Quick Port Check (Alternative)

Or just check directly:

```bash
# Check Nginx config
grep "proxy_pass" /etc/nginx/sites-available/knightinfotek.com

# Check what's listening
netstat -tlnp | grep -E ":3000|:5000"
```

