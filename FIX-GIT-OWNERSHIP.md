# Fix Git Ownership Issue

If you get "dubious ownership" error, run:

```bash
# Add the directory as safe
git config --global --add safe.directory /var/www/knightinfotek.com

# Then pull again
git pull origin main
```

Or if you want to check the port without git, create the script manually:

```bash
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
./check-port.sh
```

