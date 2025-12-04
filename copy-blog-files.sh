#!/bin/bash
# Copy all blog markdown files to client/public/content/blog

SOURCE="/Volumes/evo4TB/kit/KGE/Knight_InfoTek/content/blog"
DEST="/Volumes/evo4TB/kit/KGE/Knight_InfoTek/client/public/content/blog"

echo "Copying blog markdown files..."
mkdir -p "$DEST"

for file in "$SOURCE"/*.md; do
    filename=$(basename "$file")
    if [ "$filename" != "README.md" ] && [ "$filename" != "example-post.md" ]; then
        cp "$file" "$DEST/"
        echo "✓ Copied $filename"
    fi
done

echo ""
echo "✅ Done! Copied blog files to $DEST"
echo "   Now restart your dev server to see the blog posts"

