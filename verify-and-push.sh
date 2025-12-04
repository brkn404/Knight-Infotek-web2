#!/bin/bash
# Verify and push all changes to GitHub

cd /Volumes/evo4TB/kit/KGE/Knight_InfoTek

echo "📋 Current Git Status:"
git status --short

echo ""
echo "📝 Recent Commits:"
git log --oneline -5

echo ""
echo "🔄 Checking if local is ahead of remote:"
git log origin/main..HEAD --oneline

echo ""
echo "📦 Staging all changes:"
git add -A
git status --short

echo ""
echo "💾 Committing changes:"
git commit -m "Update product pages with overview sections and deployment files" || echo "Nothing to commit"

echo ""
echo "🚀 Pushing to GitHub:"
git push origin main

echo ""
echo "✅ Done! Check GitHub to verify:"
echo "https://github.com/brkn404/Knight-Infotek-web2"

