#!/bin/bash
# Simple script to update blog on VPS
# Usage: ./update-blog.sh

echo "🔄 Updating blog content..."

# Pull latest changes
echo "📥 Pulling latest changes from git..."
git pull

# Rebuild
echo "🔨 Building application..."
npm run build

echo "✅ Blog update complete!"
echo "💡 Restart your server if needed (e.g., pm2 restart knightinfotek)"

