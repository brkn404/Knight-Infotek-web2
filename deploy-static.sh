#!/bin/bash
# Deploy static files to Nginx html directory
# This replaces the old site with the new build

set -e

echo "🚀 Deploying new site to Nginx..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Are you in /var/www/knightinfotek.com?"
    exit 1
fi

# Build the site
echo "🔨 Building site..."
npm run build

# Copy to html directory
HTML_DIR="/var/www/knightinfotek.com/html"

if [ ! -d "$HTML_DIR" ]; then
    echo "❌ Error: $HTML_DIR not found"
    exit 1
fi

echo "📦 Copying files to $HTML_DIR..."

# Backup old files (optional)
if [ -f "$HTML_DIR/index.html" ]; then
    echo "💾 Backing up old site..."
    BACKUP_DIR="/var/www/knightinfotek.com/html.backup.$(date +%Y%m%d_%H%M%S)"
    cp -r "$HTML_DIR" "$BACKUP_DIR"
    echo "✓ Backup created: $BACKUP_DIR"
fi

# Remove old files
echo "🗑️  Removing old files..."
rm -rf "$HTML_DIR"/*

# Copy new files
echo "📋 Copying new files..."
cp -r dist/public/* "$HTML_DIR/"

# Set proper permissions
chown -R www-data:www-data "$HTML_DIR" 2>/dev/null || true

echo ""
echo "✅ Deployment complete!"
echo "💡 Your new site is now live at knightinfotek.com"
echo "💡 Nginx will serve the new static files"

