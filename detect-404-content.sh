#!/bin/bash

# Detect 404s by checking page content, not just HTTP status
# In SPAs, all routes return 200, but the content shows if it's a 404 page

BASE_URL="${1:-http://localhost:5001}"

echo "🔍 Detecting 404s by checking page content..."
echo "Base URL: $BASE_URL"
echo ""

check_url() {
    local url=$1
    local expected_type=$2  # "notfound" or "content"
    
    # For /docs/ URLs, also check the actual markdown file path
    local content_url="$url"
    if [[ "$url" =~ ^/docs/ ]]; then
        # Convert /docs/blockchain-dna/troubleshooting/README to /content/docs/blockchain-dna/troubleshooting/README.md
        local file_path="${url#/docs/}"
        content_url="/content/docs/${file_path}.md"
    fi
    
    local content=$(curl -s "$BASE_URL$content_url" 2>/dev/null)
    local status=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL$content_url" 2>/dev/null)
    
    printf "  %-50s " "$url"
    
    # Check if we got markdown content
    if [ "$status" = "200" ] && [ -n "$content" ]; then
        # Check if it's markdown (starts with # or contains markdown syntax)
        if echo "$content" | head -1 | grep -qE "^#|^---" > /dev/null 2>&1; then
            if [ "$expected_type" = "content" ]; then
                echo "→ 200 ✅ (markdown content: ${#content} chars)"
                return 0
            else
                echo "→ 200 ⚠️  (has content but shouldn't)"
                return 1
            fi
        fi
    fi
    
    # Check the React route (for NotFound detection)
    local route_content=$(curl -s "$BASE_URL$url" 2>/dev/null)
    if echo "$route_content" | grep -qi "404\|not found\|page not found" > /dev/null 2>&1; then
        if [ "$expected_type" = "notfound" ]; then
            echo "→ Shows NotFound page ✅ (correct)"
            return 0
        else
            echo "→ Shows NotFound page ❌ (should show content)"
            return 1
        fi
    fi
    
    # Default: check status
    if [ "$status" = "200" ]; then
        if [ "$expected_type" = "content" ]; then
            echo "→ 200 ⚠️  (check manually - may be SPA shell)"
        else
            echo "→ 200 ⚠️  (SPA shell, may be NotFound)"
        fi
        return 1
    else
        echo "→ HTTP $status"
        return 1
    fi
}

echo "=================================================================================="
echo "Testing Incorrect URLs (should show NotFound page):"
echo "=================================================================================="

BROKEN=0
check_url "/troubleshooting/" "notfound" || BROKEN=$((BROKEN + 1))
check_url "/api/" "notfound" || BROKEN=$((BROKEN + 1))
check_url "/integrations/" "notfound" || BROKEN=$((BROKEN + 1))
check_url "/documentation/" "notfound" || BROKEN=$((BROKEN + 1))
check_url "/features/" "notfound" || BROKEN=$((BROKEN + 1))
check_url "/resources/" "notfound" || BROKEN=$((BROKEN + 1))
check_url "/getting-started/" "notfound" || BROKEN=$((BROKEN + 1))
check_url "/faq/" "notfound" || BROKEN=$((BROKEN + 1))

echo ""
echo "=================================================================================="
echo "Testing Correct URLs (should show content):"
echo "=================================================================================="

WORKING=0
check_url "/docs/blockchain-dna/troubleshooting/README" "content" && WORKING=$((WORKING + 1))
check_url "/docs/blockchain-dna/api/README" "content" && WORKING=$((WORKING + 1))
check_url "/docs/blockchain-dna/integrations/README" "content" && WORKING=$((WORKING + 1))
check_url "/docs/blockchain-dna/documentation/README" "content" && WORKING=$((WORKING + 1))
check_url "/docs/blockchain-dna/features/README" "content" && WORKING=$((WORKING + 1))
check_url "/docs/blockchain-dna/resources/README" "content" && WORKING=$((WORKING + 1))
check_url "/docs/blockchain-dna/getting-started/README" "content" && WORKING=$((WORKING + 1))
check_url "/docs/blockchain-dna/faq/README" "content" && WORKING=$((WORKING + 1))

echo ""
echo "=================================================================================="
echo "📊 SUMMARY"
echo "=================================================================================="
echo "✅ Working URLs: $WORKING/8"
echo "❌ Broken URLs showing NotFound: $BROKEN/8"
echo ""
echo "💡 In a SPA, HTTP status is always 200, so we check the content instead."
echo "   - NotFound pages contain '404' or 'not found' text"
echo "   - Content pages have actual documentation content"
echo ""

