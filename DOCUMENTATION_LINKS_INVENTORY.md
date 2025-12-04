# Documentation Links Inventory

**Generated**: Comprehensive inventory of all documentation links  
**Purpose**: Identify, document, and test all documentation endpoints

---

## 📋 Link Categories

### 1. Absolute `/docs/` Links (✅ Should Work)

These links use the full `/docs/{product}/{path}` format and should work correctly.

#### BlockchainDNA
- `/docs/blockchain-dna/README` - Main documentation index
- `/docs/blockchain-dna/api/README` - API documentation
- `/docs/blockchain-dna/integrations/README` - Integration guides
- `/docs/blockchain-dna/troubleshooting/README` - Troubleshooting guide
- `/docs/blockchain-dna/features/README` - Features overview
- `/docs/blockchain-dna/resources/README` - Resources index
- `/docs/blockchain-dna/documentation/README` - Technical documentation
- `/docs/blockchain-dna/getting-started/README` - Getting started guide
- `/docs/blockchain-dna/faq/README` - Frequently asked questions
- `/docs/blockchain-dna/architecture` - System architecture
- `/docs/blockchain-dna/data-flow` - Data flow documentation
- `/docs/blockchain-dna/features/genomex` - GenomeX feature docs
- `/docs/blockchain-dna/features/patterntags` - PatternTags feature docs
- `/docs/blockchain-dna/features/drifscanner` - DriftScanner feature docs
- `/docs/blockchain-dna/features/genid` - GenID feature docs
- `/docs/blockchain-dna/integrations/chainlink` - Chainlink integration
- `/docs/blockchain-dna/integrations/multi-chain` - Multi-chain setup
- `/docs/blockchain-dna/resources/whitepapers` - Whitepapers

#### Cha-Ching Analytics
- `/docs/cha-ching-analytics/README` - Main documentation
- `/docs/cha-ching-analytics/documentation` - Technical documentation
- `/docs/cha-ching-analytics/resources` - Resources
- `/docs/cha-ching-analytics/faqs` - FAQs
- `/docs/cha-ching-analytics/knowledge-base` - Knowledge base
- `/docs/cha-ching-analytics/product-spec-sheet` - Product spec sheet
- `/docs/cha-ching-analytics/architecture-overview` - Architecture overview

#### ZeroKnight30
- `/docs/zero-knight-30/README` - Main documentation
- `/docs/zero-knight-30/faq` - FAQs
- `/docs/zero-knight-30/product-spec-sheet` - Product spec sheet
- `/docs/zero-knight-30/architecture-diagram` - Architecture diagram

#### ChainGuardian
- `/docs/chain-guardian/README` - Main documentation
- `/docs/chain-guardian/documentation/README` - Technical documentation
- `/docs/chain-guardian/resources/README` - Resources
- `/docs/chain-guardian/faqs/GENERAL_FAQS` - General FAQs
- `/docs/chain-guardian/faqs/TECHNICAL_FAQS` - Technical FAQs

---

### 2. Relative Links (⚠️ Need Normalization)

These links use relative paths and are normalized by the markdown renderer.

#### Common Patterns:
- `../api/` → `/docs/{product}/api/README`
- `../troubleshooting/` → `/docs/{product}/troubleshooting/README`
- `../integrations/` → `/docs/{product}/integrations/README`
- `../documentation/` → `/docs/{product}/documentation/README`
- `../features/` → `/docs/{product}/features/README`
- `../resources/` → `/docs/{product}/resources/README`
- `../README.md` → `/docs/{product}/README`
- `./api/` → `/docs/{product}/api/README` (same directory)
- `./troubleshooting/` → `/docs/{product}/troubleshooting/README` (same directory)

---

### 3. External Links (✅ Should Work)

Links to external websites (http/https) are passed through unchanged.

---

## 🧪 Testing

### Quick Test
```bash
./test-all-doc-endpoints.sh http://localhost:5001
```

### Test Specific Endpoints
```bash
curl -I http://localhost:5001/docs/blockchain-dna/api/README
curl -I http://localhost:5001/docs/blockchain-dna/integrations/README
curl -I http://localhost:5001/docs/blockchain-dna/troubleshooting/README
```

---

## 🔧 Markdown Renderer Normalization

The markdown renderer (`client/src/lib/markdown.tsx`) automatically converts:

1. **Directory Links**: `../api/` → `/docs/{product}/api/README`
2. **Relative File Links**: `../README.md` → `/docs/{product}/README`
3. **Same-Directory Links**: `./api/` → `/docs/{product}/api/README`

The renderer extracts the product name from the current path context.

---

## 📝 Files That Need Manual Review

Some files may still contain relative links that need to be updated:

1. Check all files in `content/docs/` for relative links
2. Run `npm run verify:doc-links` to find broken links
3. Update source files to use absolute `/docs/` routes where possible

---

## ✅ Verification Checklist

- [x] Enhanced markdown renderer to handle directory links
- [x] Fixed FAQ page to pass product context
- [x] Updated BlockchainDNA FAQ links
- [x] Updated ChainGuardian FAQ links
- [x] Created test script for all endpoints
- [ ] Run full link verification
- [ ] Test all endpoints in browser
- [ ] Fix any remaining 404s

---

**Last Updated**: After fixing directory link normalization

