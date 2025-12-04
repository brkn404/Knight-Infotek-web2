#!/bin/bash

# Script to find and copy all missing documentation files

PROJECT_ROOT="$(cd "$(dirname "$0")" && pwd)"
CONTENT_DOCS="$PROJECT_ROOT/content/docs"
PUBLIC_DOCS="$PROJECT_ROOT/client/public/content/docs"

echo "🔍 Finding missing documentation files..."
echo ""

MISSING_COUNT=0
FIXED_COUNT=0

# Find all markdown files in content/docs
find "$CONTENT_DOCS" -name "*.md" -type f | while read source_file; do
    # Get relative path from content/docs
    rel_path="${source_file#$CONTENT_DOCS/}"
    public_file="$PUBLIC_DOCS/$rel_path"
    
    # Check if file exists in public
    if [ ! -f "$public_file" ]; then
        echo "❌ Missing: $rel_path"
        echo "   Source: $source_file"
        echo "   Target: $public_file"
        
        # Create directory if needed
        mkdir -p "$(dirname "$public_file")"
        
        # Copy file
        if cp "$source_file" "$public_file" 2>/dev/null; then
            echo "   ✅ Copied"
            FIXED_COUNT=$((FIXED_COUNT + 1))
        else
            echo "   ❌ Failed to copy"
        fi
        echo ""
        MISSING_COUNT=$((MISSING_COUNT + 1))
    fi
done

echo "=================================================================================="
echo "📊 SUMMARY"
echo "=================================================================================="
echo "Missing files found: $MISSING_COUNT"
echo "Files fixed: $FIXED_COUNT"
echo ""

if [ $MISSING_COUNT -eq 0 ]; then
    echo "✅ All files are synced!"
else
    echo "💡 Run 'npm run sync:content' to ensure all files are synced"
fi

