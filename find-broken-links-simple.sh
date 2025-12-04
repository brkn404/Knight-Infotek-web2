#!/bin/bash

# Simplified script to find broken links

PROJECT_ROOT="$(cd "$(dirname "$0")" && pwd)"
CONTENT_DOCS="$PROJECT_ROOT/content/docs"
SRC_DIR="$PROJECT_ROOT/client/src"
BASE_URL="${1:-http://localhost:5001}"

echo "🔍 Finding broken links (missing /docs/ prefix)..."
echo "Base URL: $BASE_URL"
echo ""

# Test common incorrect URLs
echo "🧪 Testing common incorrect URLs:"
echo ""

test_url() {
    local url=$1
    local status=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL$url" 2>/dev/null)
    
    if [ "$status" = "404" ]; then
        echo "  ✅ $url → 404 (correctly returns 404)"
    elif [ "$status" = "200" ]; then
        # Check if it's HTML (SPA index.html) or actual content
        content=$(curl -s "$BASE_URL$url" 2>/dev/null | head -1)
        if [[ "$content" =~ ^\<\!DOCTYPE ]] || [[ "$content" =~ ^\<html ]]; then
            echo "  ⚠️  $url → 200 (returns HTML, likely SPA fallback)"
            echo "     Correct URL should be: /docs/blockchain-dna${url%/}/README"
        else
            echo "  ❌ $url → 200 (unexpected - should be 404)"
        fi
    else
        echo "  ❌ $url → HTTP $status"
    fi
}

test_url "/troubleshooting/"
test_url "/api/"
test_url "/integrations/"
test_url "/documentation/"
test_url "/features/"
test_url "/resources/"
test_url "/getting-started/"
test_url "/faq/"

echo ""
echo "📄 Searching markdown files for relative links that need normalization..."
echo ""

# Count relative links
count=0
find "$CONTENT_DOCS" -name "*.md" -type f | while read file; do
    rel_file="${file#$CONTENT_DOCS/}"
    # Find relative links to common directories
    grep -nE '\]\((\.\./)?(api|troubleshooting|integrations|documentation|features|resources|getting-started|faq)(/|\.md|\))' "$file" 2>/dev/null | while IFS=: read -r line_num line; do
        url=$(echo "$line" | grep -oE '\]\([^)]+\)' | sed 's/\]\(//;s/\)$//')
        product=$(echo "$rel_file" | cut -d'/' -f1)
        dir_name=$(echo "$url" | sed 's|^\.\./||;s|^\./||;s|/$||;s|\.md$||')
        
        if [ -n "$product" ] && [ -n "$dir_name" ]; then
            correct_url="/docs/$product/$dir_name/README"
            echo "  📝 $rel_file:$line_num"
            echo "     Link: $url"
            echo "     Should be: $correct_url"
            echo ""
            count=$((count + 1))
        fi
    done
done

echo ""
echo "💻 Searching TypeScript/TSX files for incorrect href attributes..."
echo ""

find "$SRC_DIR" -name "*.tsx" -o -name "*.ts" | grep -v node_modules | while read file; do
    rel_file="${file#$PROJECT_ROOT/}"
    # Check for href without /docs/
    grep -n 'href="/api/' "$file" 2>/dev/null && echo "  ⚠️  $rel_file: Missing /docs/ prefix" && echo ""
    grep -n 'href="/troubleshooting/' "$file" 2>/dev/null && echo "  ⚠️  $rel_file: Missing /docs/ prefix" && echo ""
    grep -n 'href="/integrations/' "$file" 2>/dev/null && echo "  ⚠️  $rel_file: Missing /docs/ prefix" && echo ""
done

echo ""
echo "✅ Scan complete!"
echo ""
echo "💡 Note: Relative links in markdown (like ../troubleshooting/) are automatically"
echo "   normalized by the markdown renderer. Absolute incorrect URLs must be fixed manually."

