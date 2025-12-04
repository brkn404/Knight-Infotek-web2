#!/bin/bash
# Script to check VPS configuration for all sites
# Run this on your VPS to see how sites are configured

echo "=== PM2 Processes ==="
pm2 list
echo ""

echo "=== PM2 Process Details ==="
pm2 list | grep -v "^┌" | grep -v "^│ id" | grep -v "^└" | grep -v "^$" | while read line; do
  name=$(echo "$line" | awk '{print $3}')
  if [ ! -z "$name" ] && [ "$name" != "name" ]; then
    echo "--- Process: $name ---"
    pm2 show "$name" | grep -E "(name|script|port|PORT|status)" || true
    echo ""
  fi
done

echo "=== Nginx Sites Available ==="
ls -la /etc/nginx/sites-available/ 2>/dev/null || echo "Cannot access /etc/nginx/sites-available/"

echo ""
echo "=== Nginx Sites Enabled ==="
ls -la /etc/nginx/sites-enabled/ 2>/dev/null || echo "Cannot access /etc/nginx/sites-enabled/"

echo ""
echo "=== Checking Nginx Configs for Port Mappings ==="
for site in /etc/nginx/sites-available/*; do
  if [ -f "$site" ]; then
    echo "--- $(basename $site) ---"
    grep -E "(server_name|proxy_pass|listen)" "$site" | grep -v "^#" || true
    echo ""
  fi
done

echo "=== Active Ports Listening ==="
netstat -tlnp | grep -E ":(5000|5001|3000|8080|80|443)" | sort

echo ""
echo "=== PM2 Environment Variables ==="
pm2 env 2>/dev/null || echo "Cannot get PM2 env"

