#!/bin/bash

# Find where incorrect URLs might be coming from
# Searches for patterns that could generate incorrect URLs

PROJECT_ROOT="$(cd "$(dirname "$0")" && pwd)"
CONTENT_DOCS="$PROJECT_ROOT/content/docs"
SRC_DIR="$PROJECT_ROOT/client/src"

echo "🔍 Finding potential sources of incorrect URLs..."
echo ""

echo "=================================================================================="
echo "1. Searching for absolute paths without /docs/ prefix in markdown:"
echo "=================================================================================="

find "$CONTENT_DOCS" -name "*.md" -type f | while read file; do
    rel_file="${file#$CONTENT_DOCS/}"
    # Find links starting with / but not /docs/
    grep -nE '\]\(/(api|troubleshooting|integrations|documentation|features|resources|getting-started|faq)' "$file" 2>/dev/null | while IFS=: read -r line_num line; do
        echo "  ⚠️  $rel_file:$line_num"
        echo "     $line"
        echo ""
    done
done

echo "=================================================================================="
echo "2. Searching for href attributes without /docs/ in TypeScript/TSX:"
echo "=================================================================================="

find "$SRC_DIR" -name "*.tsx" -o -name "*.ts" | grep -v node_modules | while read file; do
    rel_file="${file#$PROJECT_ROOT/}"
    # Find href without /docs/ - but exclude valid routes like /faq, /blog, /support
    grep -nE 'href=["'\'']/(api|troubleshooting|integrations|documentation|features|resources|getting-started)(/|")' "$file" 2>/dev/null | while IFS=: read -r line_num line; do
        # Skip if it's a valid route (faq, blog, support are valid routes)
        if ! echo "$line" | grep -qE 'href=["'\'']/(faq|blog|support)' > /dev/null 2>&1; then
            echo "  ⚠️  $rel_file:$line_num"
            echo "     $line"
            echo ""
        fi
    done
done

echo "=================================================================================="
echo "3. Checking router configuration for catch-all routes:"
echo "=================================================================================="

if [ -f "$SRC_DIR/App.tsx" ]; then
    echo "Router configuration:"
    grep -A 20 "function Router\|Switch\|Route" "$SRC_DIR/App.tsx" | head -30
    echo ""
fi

echo "=================================================================================="
echo "Summary"
echo "=================================================================================="
echo ""
echo "💡 If incorrect URLs are being used:"
echo "   1. Check browser console for link normalization logs"
echo "   2. Check if users are typing URLs directly"
echo "   3. Check if there are hardcoded links in components"
echo "   4. The markdown renderer should handle relative links automatically"
echo ""

