#!/bin/bash
# Sync all blog files to client/public for development

SOURCE="/Volumes/evo4TB/kit/KGE/Knight_InfoTek/content/blog"
DEST="/Volumes/evo4TB/kit/KGE/Knight_InfoTek/client/public/content/blog"

echo "Syncing all blog files..."
mkdir -p "$DEST"

# Copy JSON file
cp "$SOURCE/blog-posts.json" "$DEST/"

# Copy all markdown files except README and example
count=0
for file in "$SOURCE"/*.md; do
    filename=$(basename "$file")
    if [ "$filename" != "README.md" ] && [ "$filename" != "example-post.md" ]; then
        cp "$file" "$DEST/"
        count=$((count + 1))
    fi
done

echo "✅ Synced $count blog markdown files + blog-posts.json"
echo "   Files are in: $DEST"
echo ""
echo "⚠️  IMPORTANT: Restart your dev server to see the changes!"
echo "   The blog page should now show all 20 blog posts."

