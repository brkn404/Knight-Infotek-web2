#!/bin/bash

# Test script to verify FAQ page endpoints
BASE_URL="${1:-http://localhost:5001}"

echo "🧪 Testing FAQ Page Endpoints"
echo "Base URL: $BASE_URL"
echo ""

# Test endpoints that should work (with /docs/ prefix)
echo "✅ Testing correct endpoints (should return 200):"
echo ""

test_endpoint() {
    local url=$1
    local expected=$2
    local status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    
    if [ "$status" = "$expected" ]; then
        echo "  ✅ $url → $status"
    else
        echo "  ❌ $url → $status (expected $expected)"
    fi
}

# Test correct endpoints
test_endpoint "$BASE_URL/docs/chain-guardian/documentation/README" "200"
test_endpoint "$BASE_URL/docs/blockchain-dna/integrations/README" "200"
test_endpoint "$BASE_URL/docs/blockchain-dna/README" "200"
test_endpoint "$BASE_URL/docs/blockchain-dna/api/README" "200"
test_endpoint "$BASE_URL/docs/blockchain-dna/resources/README" "200"

echo ""
echo "❌ Testing incorrect endpoints (should return 404):"
echo ""

# Test incorrect endpoints (missing /docs/ prefix)
test_endpoint "$BASE_URL/documentation/MINER_INTEGRATION_GUIDE.md" "404"
test_endpoint "$BASE_URL/integrations/chainlink.md" "404"
test_endpoint "$BASE_URL/README.md" "404"
test_endpoint "$BASE_URL/api/" "404"
test_endpoint "$BASE_URL/resources.md" "404"

echo ""
echo "✅ Test complete!"

