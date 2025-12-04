#!/bin/bash
# Copy all blog posts to content/blog directory

SOURCE="/Volumes/evo4TB/kit/KGE/docs/products/blogs/blog"
DEST="/Volumes/evo4TB/kit/KGE/KnightGlobal/content/blog"

echo "Copying blog posts..."
for file in "$SOURCE"/*.md; do
    if [ "$(basename "$file")" != "README.md" ]; then
        cp "$file" "$DEST/"
        echo "✓ Copied $(basename "$file")"
    fi
done

echo ""
echo "✅ Done! Copied blog posts to $DEST"
echo "   Blog index (blog-posts.json) is already created with 20 entries"

