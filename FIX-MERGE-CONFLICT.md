# Fix Merge Conflict on VPS

The git pull failed because of untracked files. Fix it:

```bash
cd /var/www/knightinfotek.com

# Remove the conflicting files (they'll be pulled from git)
rm -f check-port.sh deploy-static.sh

# Now pull again
git pull origin main

# Clean build
rm -rf dist
npm run build

# Deploy
rm -rf /var/www/knightinfotek.com/html/*
cp -r dist/public/* /var/www/knightinfotek.com/html/
chown -R www-data:www-data /var/www/knightinfotek.com/html
```

