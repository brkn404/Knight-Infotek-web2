#!/bin/bash
# Script to verify all documentation links using curl

BASE_URL="http://localhost:5001"
TEMP_FILE=$(mktemp)
BROKEN_LINKS=()
WORKING_LINKS=()

echo "🔍 Verifying documentation links..."
echo "Base URL: $BASE_URL"
echo ""

# Extract all /docs/ links from TypeScript/TSX files
echo "📋 Extracting links from source files..."
grep -r 'href=["'\'']/docs/[^"'\'']*["'\'']' client/src --include="*.tsx" --include="*.ts" | \
  sed -E 's/.*href=["'\''](\/docs\/[^"'\'']+)["'\''].*/\1/' | \
  sort -u > "$TEMP_FILE"

# Extract links from markdown files
grep -r '(/docs/[^)]+)' client/public/content/docs --include="*.md" | \
  sed -E 's/.*\((\/docs\/[^)]+)\).*/\1/' | \
  sort -u >> "$TEMP_FILE"

# Extract links from docs-index.tsx product definitions
grep -A 10 'docs: \[' client/src/pages/docs-index.tsx | \
  grep -E "path: '[^']+'" | \
  sed -E "s/.*path: '([^']+)'.*/\/docs\/blockchain-dna\/\1\n\/docs\/cha-ching-analytics\/\1\n\/docs\/zero-knight-30\/\1\n\/docs\/chain-guardian\/\1/" | \
  sort -u >> "$TEMP_FILE"

# Remove duplicates and sort
sort -u "$TEMP_FILE" > "${TEMP_FILE}.sorted"
mv "${TEMP_FILE}.sorted" "$TEMP_FILE"

TOTAL_LINKS=$(wc -l < "$TEMP_FILE" | tr -d ' ')
echo "Found $TOTAL_LINKS unique documentation links"
echo ""

# Test each link
echo "🧪 Testing links..."
COUNTER=0

while IFS= read -r link; do
  COUNTER=$((COUNTER + 1))
  URL="${BASE_URL}${link}"
  
  # Use curl to test the link (with timeout)
  HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" --max-time 5 "$URL" 2>/dev/null)
  
  if [ "$HTTP_CODE" = "200" ]; then
    WORKING_LINKS+=("$link")
    echo "✅ [$COUNTER/$TOTAL_LINKS] $link (HTTP $HTTP_CODE)"
  elif [ "$HTTP_CODE" = "000" ]; then
    echo "⚠️  [$COUNTER/$TOTAL_LINKS] $link (Connection failed - is server running?)"
    BROKEN_LINKS+=("$link")
  else
    BROKEN_LINKS+=("$link")
    echo "❌ [$COUNTER/$TOTAL_LINKS] $link (HTTP $HTTP_CODE)"
  fi
done < "$TEMP_FILE"

# Cleanup
rm "$TEMP_FILE"

# Summary
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 SUMMARY"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Total links tested: $TOTAL_LINKS"
echo "✅ Working: ${#WORKING_LINKS[@]}"
echo "❌ Broken: ${#BROKEN_LINKS[@]}"
echo ""

if [ ${#BROKEN_LINKS[@]} -gt 0 ]; then
  echo "❌ BROKEN LINKS:"
  for link in "${BROKEN_LINKS[@]}"; do
    echo "   - $link"
  done
  echo ""
  echo "💡 Tip: Check if the documentation files exist in client/public/content/docs/"
fi

if [ ${#WORKING_LINKS[@]} -eq $TOTAL_LINKS ]; then
  echo "🎉 All links are working!"
  exit 0
else
  exit 1
fi

