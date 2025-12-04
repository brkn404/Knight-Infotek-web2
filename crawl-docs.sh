#!/bin/bash

# Comprehensive documentation crawler and verifier
# Extracts all links and tests them

BASE_URL="${1:-http://localhost:5001}"
PROJECT_ROOT="$(cd "$(dirname "$0")" && pwd)"
CONTENT_DOCS="$PROJECT_ROOT/content/docs"
PUBLIC_DOCS="$PROJECT_ROOT/client/public/content/docs"

echo "🔍 Crawling documentation and extracting all links..."
echo "Base URL: $BASE_URL"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Track results
WORKING=0
BROKEN=0
MISSING=0

# Extract all /docs/ links from markdown files
echo "📄 Scanning markdown files..."
LINKS=$(find "$CONTENT_DOCS" -name "*.md" -type f | while read file; do
    # Extract markdown links [text](url)
    grep -oE '\[([^\]]+)\]\((/docs/[^)]+)\)' "$file" 2>/dev/null | sed 's/.*(\(.*\))/\1/'
    # Extract HTML links
    grep -oE 'href=["'\''](/docs/[^"'\'']+)["'\'']' "$file" 2>/dev/null | sed 's/.*["'\'']\(.*\)["'\'']/\1/'
done | sort -u)

# Extract from TSX/TS files
echo "💻 Scanning TypeScript/TSX files..."
TSX_LINKS=$(find "$PROJECT_ROOT/client/src" -name "*.tsx" -o -name "*.ts" | grep -v node_modules | while read file; do
    grep -oE 'href=["'\''](/docs/[^"'\'']+)["'\'']' "$file" 2>/dev/null | sed 's/.*["'\'']\(.*\)["'\'']/\1/'
    grep -oE 'path=["'\''](/docs/[^"'\'']+)["'\'']' "$file" 2>/dev/null | sed 's/.*["'\'']\(.*\)["'\'']/\1/'
done | sort -u)

ALL_LINKS=$(echo -e "$LINKS\n$TSX_LINKS" | sort -u)
TOTAL=$(echo "$ALL_LINKS" | grep -c .)

echo "Found $TOTAL unique /docs/ links"
echo ""

# Test each link
echo "🧪 Testing links..."
echo "=================================================================================="

i=0
for url in $ALL_LINKS; do
    i=$((i + 1))
    printf "[%3d/%3d] %-60s " "$i" "$TOTAL" "$url"
    
    # Convert URL to file path
    path_part="${url#/docs/}"
    parts=($(echo "$path_part" | tr '/' ' '))
    
    # Build file path
    if [ "${parts[-1]}" = "README" ] || [ -z "${parts[-1]}" ]; then
        # README file
        if [ ${#parts[@]} -gt 1 ]; then
            file_path="$PUBLIC_DOCS/${parts[*]%/}/README.md"
        else
            file_path="$PUBLIC_DOCS/${parts[0]}/README.md"
        fi
    else
        # Regular file
        file_path="$PUBLIC_DOCS/$path_part.md"
    fi
    
    # Check if file exists
    file_exists=false
    if [ -f "$file_path" ]; then
        file_exists=true
    fi
    
    # Test URL
    status=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL$url" 2>/dev/null)
    
    if [ "$status" = "200" ]; then
        echo -e "${GREEN}✅ OK${NC}"
        WORKING=$((WORKING + 1))
    elif [ "$status" = "404" ]; then
        if [ "$file_exists" = false ]; then
            echo -e "${RED}❌ 404 (file missing: ${file_path#$PROJECT_ROOT/})${NC}"
            MISSING=$((MISSING + 1))
        else
            echo -e "${YELLOW}⚠️  404 (file exists but not accessible)${NC}"
            BROKEN=$((BROKEN + 1))
        fi
    elif [ -z "$status" ] || [ "$status" = "000" ]; then
        echo -e "${RED}❌ Connection error (is server running?)${NC}"
        BROKEN=$((BROKEN + 1))
    else
        echo -e "${RED}❌ HTTP $status${NC}"
        BROKEN=$((BROKEN + 1))
    fi
done

# Check for missing README files
echo ""
echo "=================================================================================="
echo "📁 Checking for missing README files..."
echo "=================================================================================="

find "$CONTENT_DOCS" -name "README.md" -type f | while read source_file; do
    rel_path="${source_file#$CONTENT_DOCS/}"
    public_file="$PUBLIC_DOCS/$rel_path"
    
    if [ ! -f "$public_file" ]; then
        # Build URL
        parts=($(echo "$rel_path" | tr '/' ' '))
        product="${parts[0]}"
        if [ ${#parts[@]} -gt 2 ]; then
            # Has subdirectory
            dir_path=$(IFS='/'; echo "${parts[@]:1:-1}")
            url="/docs/$product/$dir_path/README"
        else
            url="/docs/$product/README"
        fi
        
        echo -e "${RED}❌ Missing: $url${NC}"
        echo "   Source: $source_file"
        echo "   Should be: $public_file"
        MISSING=$((MISSING + 1))
    fi
done

# Summary
echo ""
echo "=================================================================================="
echo "📊 SUMMARY"
echo "=================================================================================="
echo -e "${GREEN}✅ Working: $WORKING${NC}"
echo -e "${RED}❌ Broken: $BROKEN${NC}"
echo -e "${RED}📁 Missing files: $MISSING${NC}"
echo ""

if [ $MISSING -gt 0 ] || [ $BROKEN -gt 0 ]; then
    echo "💡 Run 'npm run sync:content' to sync missing files"
    exit 1
else
    echo "🎉 All documentation links are working!"
    exit 0
fi

