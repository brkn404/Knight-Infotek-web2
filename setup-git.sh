#!/bin/bash
# Setup Git Remote for knightinfotek.com
# Run this if git remote is not configured

set -e

REPO_URL="https://github.com/brkn404/Knight-Infotek-web2.git"

echo "🔧 Setting up Git remote for knightinfotek.com..."

# Check if we're in the right directory
if [ ! -d "/var/www/knightinfotek.com" ]; then
    echo "❌ Error: /var/www/knightinfotek.com not found"
    echo "💡 Run this script from /var/www/knightinfotek.com"
    exit 1
fi

cd /var/www/knightinfotek.com

# Check if .git exists
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
fi

# Check current remote
CURRENT_REMOTE=$(git remote get-url origin 2>/dev/null || echo "")

if [ -z "$CURRENT_REMOTE" ]; then
    echo "➕ Adding remote origin..."
    git remote add origin "$REPO_URL"
elif [ "$CURRENT_REMOTE" != "$REPO_URL" ]; then
    echo "🔄 Updating remote origin..."
    git remote set-url origin "$REPO_URL"
else
    echo "✅ Remote already configured correctly"
fi

# Verify
echo ""
echo "📋 Current git remote configuration:"
git remote -v

echo ""
echo "✅ Git remote setup complete!"
echo "💡 Now you can run: git pull origin main"

