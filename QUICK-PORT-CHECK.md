# Quick Commands to Check Sites and Ports on VPS

## Check All Sites and Ports

```bash
# Run the comprehensive script
./show-ports.sh
```

## Individual Commands

### 1. Check Nginx Configurations

```bash
# List all Nginx site configs
ls -la /etc/nginx/sites-available/

# See what port each site uses
for site in /etc/nginx/sites-available/*; do
    echo "=== $(basename $site) ==="
    grep "proxy_pass\|server_name" "$site" | head -5
    echo ""
done
```

### 2. Check What's Listening on Ports

```bash
# Check specific ports
sudo lsof -i :80      # HTTP
sudo lsof -i :443     # HTTPS
sudo lsof -i :5000    # Your new app
sudo lsof -i :3000    # Common Node port

# Check all listening ports
sudo netstat -tlnp | grep LISTEN
# OR
sudo ss -tlnp | grep LISTEN
```

### 3. Check PM2 Processes

```bash
# List all PM2 processes
pm2 list

# Show detailed info
pm2 show <process-name>

# Show all with ports
pm2 jlist | jq -r '.[] | "\(.name): \(.pm2_env.PORT // "N/A")"'
```

### 4. Check Running Node Processes

```bash
# See all Node processes
ps aux | grep node | grep -v grep

# See what ports they're using
sudo lsof -i -P | grep node
```

### 5. Check Nginx Status

```bash
# Check if Nginx is running
sudo systemctl status nginx

# Check enabled sites
ls -la /etc/nginx/sites-enabled/

# Test Nginx config
sudo nginx -t
```

### 6. Quick Port Summary

```bash
# One-liner to see all proxy ports
grep -r "proxy_pass" /etc/nginx/sites-available/ | grep -oP 'localhost:\K[0-9]+' | sort -u

# See all domains and their ports
for site in /etc/nginx/sites-available/*; do
    DOMAIN=$(grep "server_name" "$site" | head -1 | awk '{print $2}' | tr -d ';')
    PORT=$(grep "proxy_pass" "$site" | grep -oP 'localhost:\K[0-9]+' | head -1)
    [ ! -z "$DOMAIN" ] && [ ! -z "$PORT" ] && echo "$DOMAIN -> Port $PORT"
done
```

### 7. Check Specific Site

```bash
# Check knightinfotek.com specifically
grep -A 10 "server_name.*knightinfotek" /etc/nginx/sites-available/knightinfotek.com

# Or view the whole config
cat /etc/nginx/sites-available/knightinfotek.com
```

## Most Useful One-Liner

```bash
# Show all sites, domains, and ports in one view
echo "Site Config | Domain | Port"
echo "---------------------------"
for site in /etc/nginx/sites-available/*; do
    SITE=$(basename "$site")
    DOMAIN=$(grep "server_name" "$site" 2>/dev/null | head -1 | awk '{print $2}' | tr -d ';')
    PORT=$(grep "proxy_pass" "$site" 2>/dev/null | grep -oP 'localhost:\K[0-9]+' | head -1)
    [ ! -z "$DOMAIN" ] && echo "$SITE | $DOMAIN | $PORT"
done
```

