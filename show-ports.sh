#!/bin/bash
# Show what sites are running on what ports
# Run from anywhere on the VPS

echo "🌐 VPS Site and Port Configuration"
echo "=================================="
echo ""

# Check Nginx configurations
echo "📋 NGINX CONFIGURATIONS:"
echo "------------------------"
for site in /etc/nginx/sites-available/*; do
    if [ -f "$site" ]; then
        SITE_NAME=$(basename "$site")
        PORT=$(grep -oP 'proxy_pass\s+http://localhost:\K[0-9]+' "$site" 2>/dev/null | head -1)
        SERVER_NAME=$(grep -oP 'server_name\s+\K[^;]+' "$site" 2>/dev/null | head -1 | xargs)
        
        if [ ! -z "$PORT" ] || [ ! -z "$SERVER_NAME" ]; then
            echo "Site: $SITE_NAME"
            [ ! -z "$SERVER_NAME" ] && echo "  Domain: $SERVER_NAME"
            [ ! -z "$PORT" ] && echo "  Port: $PORT"
            
            # Check if enabled
            if [ -L "/etc/nginx/sites-enabled/$SITE_NAME" ]; then
                echo "  Status: ✅ Enabled"
            else
                echo "  Status: ⚠️  Not enabled"
            fi
            echo ""
        fi
    fi
done

# Check PM2 processes
echo "📋 PM2 PROCESSES:"
echo "----------------"
if command -v pm2 &> /dev/null; then
    pm2 list
    echo ""
    echo "PM2 Process Details:"
    pm2 jlist | jq -r '.[] | "\(.name): Port \(.pm2_env.PORT // "N/A") - Status: \(.pm2_env.status)"' 2>/dev/null || pm2 list
else
    echo "PM2 not installed"
fi
echo ""

# Check listening ports
echo "📋 LISTENING PORTS:"
echo "-------------------"
echo "Ports 80, 443 (HTTP/HTTPS):"
sudo lsof -i :80 -i :443 2>/dev/null | grep LISTEN || echo "  Not found"
echo ""
echo "Common Node.js ports (3000-5000):"
for port in 3000 3001 4000 5000; do
    PROCESS=$(sudo lsof -i :$port 2>/dev/null | grep LISTEN | awk '{print $1, $2}' | head -1)
    if [ ! -z "$PROCESS" ]; then
        echo "  Port $port: $PROCESS"
    fi
done
echo ""

# Check all Node processes
echo "📋 RUNNING NODE PROCESSES:"
echo "---------------------------"
ps aux | grep -E "node|pm2" | grep -v grep | awk '{print $2, $11, $12, $13, $14}' | head -10
echo ""

# Check Nginx status
echo "📋 NGINX STATUS:"
echo "----------------"
sudo systemctl status nginx --no-pager -l | head -10
echo ""

# Summary
echo "💡 QUICK CHECK COMMANDS:"
echo "------------------------"
echo "  Check specific port:     sudo lsof -i :5000"
echo "  Check all listening:     sudo netstat -tlnp | grep LISTEN"
echo "  Check Nginx configs:     ls -la /etc/nginx/sites-available/"
echo "  Check enabled sites:     ls -la /etc/nginx/sites-enabled/"
echo "  View Nginx access logs:  sudo tail -f /var/log/nginx/access.log"
echo "  View Nginx error logs:   sudo tail -f /var/log/nginx/error.log"

