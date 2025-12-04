#!/bin/bash

# Simple script to test incorrect URLs and show correct ones

BASE_URL="${1:-http://localhost:5001}"

echo "🔍 Testing incorrect URLs (should return 404 or show NotFound page)"
echo "Base URL: $BASE_URL"
echo ""

echo "=================================================================================="
echo "Incorrect URLs (what NOT to use):"
echo "=================================================================================="

test_url() {
    local url=$1
    local status=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL$url" 2>/dev/null)
    
    printf "  %-40s " "$url"
    
    if [ "$status" = "404" ]; then
        echo "→ 404 ✅"
    elif [ "$status" = "200" ]; then
        content=$(curl -s "$BASE_URL$url" 2>/dev/null | head -1)
        if [[ "$content" =~ ^\<\!DOCTYPE ]] || [[ "$content" =~ ^\<html ]]; then
            echo "→ 200 (HTML - SPA fallback) ⚠️"
        else
            echo "→ 200 (unexpected) ❌"
        fi
    else
        echo "→ HTTP $status"
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
echo "=================================================================================="
echo "Correct URLs (what TO use):"
echo "=================================================================================="

test_correct() {
    local url=$1
    local status=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL$url" 2>/dev/null)
    
    printf "  %-60s " "$url"
    
    if [ "$status" = "200" ]; then
        echo "→ 200 ✅"
    else
        echo "→ HTTP $status ❌"
    fi
}

test_correct "/docs/blockchain-dna/troubleshooting/README"
test_correct "/docs/blockchain-dna/api/README"
test_correct "/docs/blockchain-dna/integrations/README"
test_correct "/docs/blockchain-dna/documentation/README"
test_correct "/docs/blockchain-dna/features/README"
test_correct "/docs/blockchain-dna/resources/README"
test_correct "/docs/blockchain-dna/getting-started/README"
test_correct "/docs/blockchain-dna/faq/README"

echo ""
echo "=================================================================================="
echo "Summary"
echo "=================================================================================="
echo ""
echo "❌ Incorrect: /troubleshooting/"
echo "✅ Correct:   /docs/blockchain-dna/troubleshooting/README"
echo ""
echo "💡 The markdown renderer automatically converts relative links like:"
echo "   ../troubleshooting/ → /docs/blockchain-dna/troubleshooting/README"
echo ""
echo "💡 But absolute incorrect URLs typed directly in browser will show NotFound page."

