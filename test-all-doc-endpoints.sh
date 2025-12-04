#!/bin/bash

# Comprehensive test script for all documentation endpoints
BASE_URL="${1:-http://localhost:5001}"

echo "🧪 Testing All Documentation Endpoints"
echo "Base URL: $BASE_URL"
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

test_url() {
    local url=$1
    local expected=${2:-200}
    local status=$(curl -s -o /dev/null -w "%{http_code}" "$url" 2>/dev/null)
    
    if [ "$status" = "$expected" ]; then
        echo -e "  ${GREEN}✅${NC} $url"
        return 0
    else
        echo -e "  ${RED}❌${NC} $url → HTTP $status (expected $expected)"
        return 1
    fi
}

# Test results
PASSED=0
FAILED=0

echo "=" | head -c 80 && echo ""
echo "Testing BlockchainDNA Documentation"
echo "=" | head -c 80 && echo ""

# BlockchainDNA endpoints
test_url "$BASE_URL/docs/blockchain-dna/README" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/blockchain-dna/api/README" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/blockchain-dna/integrations/README" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/blockchain-dna/troubleshooting/README" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/blockchain-dna/features/README" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/blockchain-dna/resources/README" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/blockchain-dna/documentation/README" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/blockchain-dna/getting-started/README" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/blockchain-dna/faq/README" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/blockchain-dna/architecture" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/blockchain-dna/data-flow" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/blockchain-dna/features/genomex" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/blockchain-dna/features/patterntags" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/blockchain-dna/features/drifscanner" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/blockchain-dna/features/genid" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/blockchain-dna/integrations/chainlink" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/blockchain-dna/integrations/multi-chain" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/blockchain-dna/resources/whitepapers" && ((PASSED++)) || ((FAILED++))

echo ""
echo "=" | head -c 80 && echo ""
echo "Testing Cha-Ching Analytics Documentation"
echo "=" | head -c 80 && echo ""

# Cha-Ching Analytics endpoints
test_url "$BASE_URL/docs/cha-ching-analytics/README" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/cha-ching-analytics/documentation" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/cha-ching-analytics/resources" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/cha-ching-analytics/faqs" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/cha-ching-analytics/knowledge-base" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/cha-ching-analytics/product-spec-sheet" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/cha-ching-analytics/architecture-overview" && ((PASSED++)) || ((FAILED++))

echo ""
echo "=" | head -c 80 && echo ""
echo "Testing ZeroKnight30 Documentation"
echo "=" | head -c 80 && echo ""

# ZeroKnight30 endpoints
test_url "$BASE_URL/docs/zero-knight-30/README" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/zero-knight-30/faq" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/zero-knight-30/product-spec-sheet" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/zero-knight-30/architecture-diagram" && ((PASSED++)) || ((FAILED++))

echo ""
echo "=" | head -c 80 && echo ""
echo "Testing ChainGuardian Documentation"
echo "=" | head -c 80 && echo ""

# ChainGuardian endpoints
test_url "$BASE_URL/docs/chain-guardian/README" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/chain-guardian/documentation/README" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/chain-guardian/resources/README" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/chain-guardian/faqs/GENERAL_FAQS" && ((PASSED++)) || ((FAILED++))
test_url "$BASE_URL/docs/chain-guardian/faqs/TECHNICAL_FAQS" && ((PASSED++)) || ((FAILED++))

echo ""
echo "=" | head -c 80 && echo ""
echo "Testing Incorrect Endpoints (should show NotFound page)"
echo "=" | head -c 80 && echo ""
echo "Note: In a SPA, all routes return HTTP 200 (index.html is served)."
echo "The client-side router handles 404s. These should show the NotFound page."
echo ""

# Test incorrect endpoints (missing /docs/ prefix)
# In a SPA, these will return 200 (index.html), but should render NotFound component
# We'll check if the response contains "404" or "Not Found" text
test_notfound() {
    local url=$1
    local response=$(curl -s "$url" 2>/dev/null)
    local status=$(curl -s -o /dev/null -w "%{http_code}" "$url" 2>/dev/null)
    
    # Check if response contains NotFound indicators
    if echo "$response" | grep -qi "404\|not found\|page not found" > /dev/null 2>&1; then
        echo -e "  ${GREEN}✅${NC} $url (shows NotFound page)"
        ((PASSED++))
        return 0
    elif [ "$status" = "200" ]; then
        # HTTP 200 is expected for SPA, but should show NotFound content
        echo -e "  ${YELLOW}⚠️${NC}  $url → HTTP $status (SPA returns 200, but should show NotFound)"
        ((FAILED++))
        return 1
    else
        echo -e "  ${GREEN}✅${NC} $url → HTTP $status (unexpected but OK)"
        ((PASSED++))
        return 0
    fi
}

test_notfound "$BASE_URL/api/"
test_notfound "$BASE_URL/troubleshooting/"
test_notfound "$BASE_URL/integrations/chainlink.md"
test_notfound "$BASE_URL/README.md"
test_notfound "$BASE_URL/resources.md"
test_notfound "$BASE_URL/documentation/MINER_INTEGRATION_GUIDE.md"

echo ""
echo "=" | head -c 80 && echo ""
echo "📊 TEST SUMMARY"
echo "=" | head -c 80 && echo ""
echo -e "${GREEN}✅ Passed: $PASSED${NC}"
echo -e "${RED}❌ Failed: $FAILED${NC}"
echo ""

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 All tests passed!${NC}"
    exit 0
else
    echo -e "${RED}⚠️  Some tests failed. Please check the endpoints above.${NC}"
    exit 1
fi

