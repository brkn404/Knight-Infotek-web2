#!/bin/bash
# Copy docs to public directory

cd "$(dirname "$0")"

SOURCE="content/docs"
DEST="client/public/content/docs"

echo "Copying docs from $SOURCE to $DEST..."

# Remove existing docs directory
rm -rf "$DEST"

# Create destination directory
mkdir -p "$DEST"

# Copy all docs
cp -r "$SOURCE"/* "$DEST/"

echo "✅ Docs copied successfully"
echo "   Files in: $DEST"
ls -la "$DEST" | head -10

