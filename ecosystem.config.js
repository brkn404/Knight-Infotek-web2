// PM2 Ecosystem Configuration
// Usage: pm2 start ecosystem.config.cjs
// Run from: /var/www/knightinfotek.com
// Note: Must be .cjs extension because package.json has "type": "module"

module.exports = {
  apps: [
    {
      name: 'knightinfotek',
      script: './dist/index.cjs',
      cwd: process.cwd(), // Use current working directory
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 5000, // Default port - change to match your existing Nginx config
      },
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      log_file: './logs/pm2-combined.log',
      time: true,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      // Graceful shutdown
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 10000,
    },
  ],
};

