#!/bin/bash

# Simple verification script to check all documentation files

BASE_URL="${1:-http://localhost:5001}"
PROJECT_ROOT="$(cd "$(dirname "$0")" && pwd)"
PUBLIC_DOCS="$PROJECT_ROOT/client/public/content/docs"

echo "🔍 Verifying all documentation files..."
echo "Base URL: $BASE_URL"
echo ""

# Find all markdown files in public docs
find "$PUBLIC_DOCS" -name "*.md" -type f | while read file; do
    rel_path="${file#$PUBLIC_DOCS/}"
    
    # Convert file path to URL
    # Remove .md extension
    url_path="${rel_path%.md}"
    
    # Convert to /docs/ URL
    if [[ "$url_path" == */README ]]; then
        # README file
        url="/docs/$url_path"
    else
        url="/docs/$url_path"
    fi
    
    # Test URL
    status=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL$url" 2>/dev/null)
    
    if [ "$status" = "200" ]; then
        echo "✅ $url"
    else
        echo "❌ $url → HTTP $status (file: $rel_path)"
    fi
done | head -50

echo ""
echo "💡 Note: /troubleshooting/ should be /docs/blockchain-dna/troubleshooting/README"
echo "💡 Run 'npm run sync:content' to sync all files"

