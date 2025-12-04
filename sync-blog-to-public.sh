#!/bin/bash
# Sync blog content to client/public for development

SOURCE="/Volumes/evo4TB/kit/KGE/KnightGlobal/content/blog"
DEST="/Volumes/evo4TB/kit/KGE/KnightGlobal/client/public/content/blog"

echo "Syncing blog content to client/public for development..."
mkdir -p "$DEST"
cp -r "$SOURCE"/* "$DEST/"
echo "✅ Blog content synced to client/public/content/blog"
echo "   Restart your dev server to see the changes"

