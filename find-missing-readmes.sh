#!/bin/bash

# Find all directories that should have README.md files but don't

PROJECT_ROOT="$(cd "$(dirname "$0")" && pwd)"
CONTENT_DOCS="$PROJECT_ROOT/content/docs"
PUBLIC_DOCS="$PROJECT_ROOT/client/public/content/docs"

echo "🔍 Finding directories that need README.md files..."
echo ""

MISSING_COUNT=0

# Find all directories in content/docs that have .md files but no README.md
find "$CONTENT_DOCS" -type d | while read dir; do
    # Skip root directory
    if [ "$dir" = "$CONTENT_DOCS" ]; then
        continue
    fi
    
    # Check if directory has .md files
    has_md=$(find "$dir" -maxdepth 1 -name "*.md" -type f | grep -v README.md | head -1)
    
    if [ -n "$has_md" ]; then
        # Directory has markdown files
        readme_path="$dir/README.md"
        if [ ! -f "$readme_path" ]; then
            rel_path="${dir#$CONTENT_DOCS/}"
            echo "❌ Missing README.md in: $rel_path"
            echo "   Directory has: $(basename "$has_md")"
            echo ""
            MISSING_COUNT=$((MISSING_COUNT + 1))
        fi
    fi
done

if [ $MISSING_COUNT -eq 0 ]; then
    echo "✅ All directories with markdown files have README.md"
else
    echo "💡 Create README.md files for the directories listed above"
fi

