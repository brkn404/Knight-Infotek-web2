#!/bin/bash
# Build static files and copy to /var/www/knightinfotek.com/html
# This allows Nginx to serve static files without Node.js server

set -e

echo "🔨 Building static site..."

# Build and copy to html directory
BUILD_TO_HTML=true npm run build

echo ""
echo "✅ Build complete!"
echo "💡 Files are in /var/www/knightinfotek.com/html"
echo "💡 Nginx will serve them - no PM2 needed!"

