#!/bin/bash
# Deployment script for Knight InfoTek website
# Usage: ./deploy.sh
# Run from: /var/www/knightinfotek.com

set -e  # Exit on error

echo "🚀 Starting deployment for knightinfotek.com..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: package.json not found.${NC}"
    echo -e "${YELLOW}💡 Make sure you're in /var/www/knightinfotek.com${NC}"
    exit 1
fi

# Pull latest changes
echo -e "${YELLOW}📥 Pulling latest changes from git...${NC}"
git pull

# Install/update dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm install

# Build the application
echo -e "${YELLOW}🔨 Building application...${NC}"
npm run build

# Check if build was successful
if [ ! -f "dist/index.cjs" ]; then
    echo -e "${RED}❌ Build failed: dist/index.cjs not found${NC}"
    exit 1
fi

if [ ! -d "dist/public" ]; then
    echo -e "${RED}❌ Build failed: dist/public not found${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build successful!${NC}"

# Restart PM2 process if it exists
if command -v pm2 &> /dev/null; then
    echo -e "${YELLOW}🔄 Restarting PM2 process...${NC}"
    if pm2 list | grep -q "knightinfotek"; then
        pm2 restart knightinfotek
        echo -e "${GREEN}✅ Application restarted${NC}"
    else
        echo -e "${YELLOW}⚠️  PM2 process 'knightinfotek' not found. Starting it...${NC}"
        if [ -f "ecosystem.config.js" ]; then
            pm2 start ecosystem.config.js
            pm2 save
        else
            echo -e "${RED}❌ ecosystem.config.js not found${NC}"
        fi
    fi
else
    echo -e "${YELLOW}⚠️  PM2 not found. Please restart the application manually.${NC}"
fi

# Show status
echo -e "\n${GREEN}📊 Deployment Status:${NC}"
if command -v pm2 &> /dev/null; then
    pm2 status
fi

echo -e "\n${GREEN}✅ Deployment complete!${NC}"
echo -e "${YELLOW}💡 Check your website to verify the deployment${NC}"

