# Fix PM2 Config Error

The error occurs because `package.json` has `"type": "module"`, so PM2 can't load `.js` files as CommonJS.

## Solution: Rename to .cjs

On your VPS, run:

```bash
cd /var/www/knightinfotek.com

# Rename the file
mv ecosystem.config.js ecosystem.config.cjs

# Or create it with the correct name
cat > ecosystem.config.cjs << 'EOF'
module.exports = {
  apps: [{
    name: 'knightinfotek',
    script: './dist/index.cjs',
    env: {
      NODE_ENV: 'production',
      PORT: 5000,
    },
    error_file: './logs/pm2-error.log',
    out_file: './logs/pm2-out.log',
    time: true,
    autorestart: true,
    max_memory_restart: '1G',
  }],
};
EOF

# Create logs directory
mkdir -p logs

# Now start PM2 with .cjs extension
pm2 start ecosystem.config.cjs
pm2 save
pm2 status
```

The `.cjs` extension tells Node.js to treat it as CommonJS even when `package.json` has `"type": "module"`.

