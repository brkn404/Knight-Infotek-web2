#!/bin/bash
# Sync all blog markdown files to client/public/content/blog

SOURCE="content/blog"
DEST="client/public/content/blog"

echo "Syncing blog files..."
mkdir -p "$DEST"

count=0
for file in "$SOURCE"/*.md; do
    filename=$(basename "$file")
    if [ "$filename" != "README.md" ] && [ "$filename" != "example-post.md" ]; then
        cp "$file" "$DEST/"
        echo "✓ Copied $filename"
        count=$((count + 1))
    fi
done

# Copy JSON
cp "$SOURCE/blog-posts.json" "$DEST/" 2>/dev/null && echo "✓ Copied blog-posts.json"

echo ""
echo "✅ Synced $count markdown files"
echo "   Files are in: $DEST"
echo ""
echo "⚠️  IMPORTANT: Restart your dev server to see the changes!"

