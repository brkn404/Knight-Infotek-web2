#!/bin/bash

# Find all links that are missing /docs/ prefix or have incorrect paths
# This helps discover 404s like /troubleshooting/ instead of /docs/blockchain-dna/troubleshooting/README

PROJECT_ROOT="$(cd "$(dirname "$0")" && pwd)"
CONTENT_DOCS="$PROJECT_ROOT/content/docs"
SRC_DIR="$PROJECT_ROOT/client/src"
BASE_URL="${1:-http://localhost:5001}"

echo "🔍 Finding broken links (missing /docs/ prefix or incorrect paths)..."
echo "Base URL: $BASE_URL"
echo ""

# Colors
RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m'

BROKEN_COUNT=0
FIXED_COUNT=0

# Find all markdown files
echo "📄 Scanning markdown files for broken links..."
find "$CONTENT_DOCS" -name "*.md" -type f | while read file; do
    # Extract links that look like they should be /docs/ but aren't
    # Pattern: links like [text](../troubleshooting/) or [text](./api/) or [text](/troubleshooting/)
    grep -nE '\[([^\]]+)\]\((\.\.?/)?(api|troubleshooting|integrations|documentation|features|resources|getting-started|faq)(/|\.md|\))' "$file" 2>/dev/null | while IFS=: read -r line_num line; do
        # Extract the URL
        url=$(echo "$line" | grep -oE '\]\((\.\.?/)?([^)]+)\)' | sed 's/\]\(//;s/\)$//')
        
        # Check if it's a relative link that should be /docs/
        if [[ "$url" =~ ^\.\./ ]] || [[ "$url" =~ ^\./ ]] || [[ "$url" =~ ^/(api|troubleshooting|integrations|documentation|features|resources|getting-started|faq) ]]; then
            rel_file="${file#$CONTENT_DOCS/}"
            echo -e "${YELLOW}⚠️  ${rel_file}:${line_num}${NC}"
            echo "   Link: $line"
            echo "   URL: $url"
            
            # Try to determine correct URL
            if [[ "$url" =~ ^/(api|troubleshooting|integrations|documentation|features|resources|getting-started|faq) ]]; then
                # Absolute path without /docs/ - this is definitely wrong
                dir_name=$(echo "$url" | sed 's|^/||;s|/$||;s|\.md$||')
                # Try to guess product from file path
                product=$(echo "$rel_file" | cut -d'/' -f1)
                if [ -n "$product" ]; then
                    correct_url="/docs/$product/$dir_name/README"
                    echo -e "   ${RED}❌ Should be: $correct_url${NC}"
                    BROKEN_COUNT=$((BROKEN_COUNT + 1))
                fi
            elif [[ "$url" =~ ^\.\./(api|troubleshooting|integrations|documentation|features|resources|getting-started|faq) ]]; then
                # Relative path - extract product from file location
                product=$(echo "$rel_file" | cut -d'/' -f1)
                dir_name=$(echo "$url" | sed 's|^\.\./||;s|/$||;s|\.md$||')
                if [ -n "$product" ] && [ -n "$dir_name" ]; then
                    correct_url="/docs/$product/$dir_name/README"
                    echo -e "   ${GREEN}💡 Should be: $correct_url${NC}"
                    BROKEN_COUNT=$((BROKEN_COUNT + 1))
                fi
            fi
            echo ""
        fi
    done
done

# Find links in TSX/TS files
echo "💻 Scanning TypeScript/TSX files for broken links..."
find "$SRC_DIR" -name "*.tsx" -o -name "*.ts" | grep -v node_modules | while read file; do
    # Find links that are missing /docs/ prefix - check for common patterns
    grep -n 'href="/api/' "$file" 2>/dev/null | while IFS=: read -r line_num line; do
        url=$(echo "$line" | grep -o 'href="[^"]*' | sed 's/href="//')
        rel_file="${file#$PROJECT_ROOT/}"
        echo -e "${YELLOW}⚠️  ${rel_file}:${line_num}${NC}"
        echo "   Link: $line"
        echo "   URL: $url"
        echo -e "   ${RED}❌ Missing /docs/ prefix${NC}"
        echo ""
        BROKEN_COUNT=$((BROKEN_COUNT + 1))
    done
    grep -n 'href="/troubleshooting/' "$file" 2>/dev/null | while IFS=: read -r line_num line; do
        url=$(echo "$line" | grep -o 'href="[^"]*' | sed 's/href="//')
        rel_file="${file#$PROJECT_ROOT/}"
        echo -e "${YELLOW}⚠️  ${rel_file}:${line_num}${NC}"
        echo "   Link: $line"
        echo "   URL: $url"
        echo -e "   ${RED}❌ Missing /docs/ prefix${NC}"
        echo ""
        BROKEN_COUNT=$((BROKEN_COUNT + 1))
    done
    grep -n 'href="/integrations/' "$file" 2>/dev/null | while IFS=: read -r line_num line; do
        url=$(echo "$line" | grep -o 'href="[^"]*' | sed 's/href="//')
        rel_file="${file#$PROJECT_ROOT/}"
        echo -e "${YELLOW}⚠️  ${rel_file}:${line_num}${NC}"
        echo "   Link: $line"
        echo "   URL: $url"
        echo -e "   ${RED}❌ Missing /docs/ prefix${NC}"
        echo ""
        BROKEN_COUNT=$((BROKEN_COUNT + 1))
    done
done

# Test common incorrect URLs
echo "🧪 Testing common incorrect URLs..."
echo ""

test_url() {
    local url=$1
    local status=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL$url" 2>/dev/null)
    
    if [ "$status" = "404" ]; then
        echo -e "${GREEN}✅ $url → 404 (correctly returns 404)${NC}"
    elif [ "$status" = "200" ]; then
        # Check if it's HTML (SPA index.html) or actual content
        content=$(curl -s "$BASE_URL$url" 2>/dev/null | head -1)
        if [[ "$content" =~ ^\<\!DOCTYPE ]] || [[ "$content" =~ ^\<html ]]; then
            echo -e "${YELLOW}⚠️  $url → 200 (returns HTML, likely SPA fallback)${NC}"
        else
            echo -e "${RED}❌ $url → 200 (unexpected - should be 404)${NC}"
        fi
    else
        echo -e "${RED}❌ $url → HTTP $status${NC}"
    fi
}

# Common incorrect URLs
test_url "/troubleshooting/"
test_url "/api/"
test_url "/integrations/"
test_url "/documentation/"
test_url "/features/"
test_url "/resources/"
test_url "/getting-started/"
test_url "/faq/"

echo ""
echo "=================================================================================="
echo "📊 SUMMARY"
echo "=================================================================================="
echo "Broken links found: $BROKEN_COUNT"
echo ""
echo "💡 To fix:"
echo "   1. Update links to use /docs/{product}/{path} format"
echo "   2. Use the markdown renderer's normalizeLink function (already handles ../ paths)"
echo "   3. For absolute paths, ensure they start with /docs/"
echo ""

