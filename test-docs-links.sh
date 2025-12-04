#!/bin/bash
# Simple script to test documentation links

# Try to detect the port
PORT=""
if curl -s -o /dev/null -w "%{http_code}" --max-time 1 http://localhost:5001/ > /dev/null 2>&1; then
  PORT="5001"
elif curl -s -o /dev/null -w "%{http_code}" --max-time 1 http://localhost:5000/ > /dev/null 2>&1; then
  PORT="5000"
fi

if [ -z "$PORT" ]; then
  echo "⚠️  Warning: Dev server not detected on port 5000 or 5001"
  echo "   Please start the server with: npm run dev:client"
  echo "   Will test against http://localhost:5001 anyway..."
  PORT="5001"
fi

BASE_URL="${1:-http://localhost:$PORT}"

echo "🔍 Testing documentation links..."
echo "Base URL: $BASE_URL"
echo ""

# Test key documentation links
LINKS=(
  "/docs"
  "/docs/blockchain-dna/README"
  "/docs/blockchain-dna/architecture"
  "/docs/blockchain-dna/api/README"
  "/docs/blockchain-dna/faq/README"
  "/docs/blockchain-dna/resources/README"
  "/docs/blockchain-dna/getting-started/README"
  "/docs/blockchain-dna/troubleshooting/README"
  "/docs/cha-ching-analytics/README"
  "/docs/cha-ching-analytics/product-spec-sheet"
  "/docs/cha-ching-analytics/architecture-overview"
  "/docs/cha-ching-analytics/faqs"
  "/docs/cha-ching-analytics/knowledge-base"
  "/docs/zero-knight-30/README"
  "/docs/zero-knight-30/product-spec-sheet"
  "/docs/zero-knight-30/architecture-diagram"
  "/docs/zero-knight-30/faq"
  "/docs/chain-guardian/README"
  "/docs/chain-guardian/PRODUCT_SPEC_SHEET"
  "/docs/chain-guardian/ARCHITECTURE_DIAGRAM"
  "/docs/chain-guardian/faqs/GENERAL_FAQS"
  "/docs/chain-guardian/resources/INDEX"
)

WORKING=0
BROKEN=0

for link in "${LINKS[@]}"; do
  URL="${BASE_URL}${link}"
  HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" --max-time 3 "$URL" 2>/dev/null)
  
  if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ $link (HTTP $HTTP_CODE)"
    WORKING=$((WORKING + 1))
  elif [ "$HTTP_CODE" = "000" ]; then
    echo "⚠️  $link (Server not responding - is it running?)"
    BROKEN=$((BROKEN + 1))
  else
    echo "❌ $link (HTTP $HTTP_CODE)"
    BROKEN=$((BROKEN + 1))
  fi
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 SUMMARY"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Total: ${#LINKS[@]}"
echo "✅ Working: $WORKING"
echo "❌ Broken: $BROKEN"
echo ""

if [ $BROKEN -eq 0 ]; then
  echo "🎉 All links are working!"
  exit 0
else
  exit 1
fi

