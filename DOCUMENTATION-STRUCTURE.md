# Product Documentation Structure

This document describes the organized structure for product documentation in the website.

## Directory Structure

```
content/docs/
├── README.md                          # Main documentation index
│
├── blockchain-dna/                    # BlockchainDNA documentation
│   ├── README.md                      # Product overview and quick links
│   ├── INDEX.md                       # Complete knowledge base index
│   ├── architecture.md                # System architecture
│   ├── data-flow.md                   # Data flow documentation
│   ├── getting-started/               # Getting started guides
│   │   ├── quick-start.md
│   │   ├── installation.md
│   │   ├── configuration.md
│   │   └── README.md
│   ├── features/                     # Feature documentation
│   │   ├── genomex.md
│   │   ├── patterntags.md
│   │   ├── drifscanner.md
│   │   └── genid.md
│   ├── api/                          # API documentation
│   │   ├── README.md
│   │   ├── authentication.md
│   │   ├── sdk.md
│   │   ├── webhooks.md
│   │   ├── error-handling.md
│   │   └── examples.md
│   ├── integrations/                 # Integration guides
│   │   ├── chainlink.md
│   │   └── multi-chain.md
│   ├── troubleshooting/              # Troubleshooting guides
│   │   └── README.md
│   ├── faq/                          # Frequently asked questions
│   │   └── README.md
│   ├── documentation/                # Technical documentation
│   │   └── README.md
│   └── resources/                    # Resources
│       ├── whitepapers.md
│       ├── case-studies.md
│       └── learning.md
│
├── cha-ching-analytics/              # Cha-Ching Analytics documentation
│   ├── README.md                      # Product overview
│   ├── product-spec-sheet.md         # Product specification sheet
│   ├── architecture-overview.md      # System architecture
│   ├── faqs.md                       # Frequently asked questions
│   ├── documentation.md             # Technical documentation
│   ├── resources.md                  # Resources
│   └── knowledge-base.md            # Knowledge base
│
├── zero-knight-30/                   # ZeroKnight30 documentation
│   ├── README.md                      # Product overview
│   ├── product-spec-sheet.md         # Product specification sheet
│   ├── architecture-diagram.md       # Architecture diagram
│   ├── faq.md                        # Frequently asked questions
│   ├── web-content-home.md           # Home page content
│   ├── web-content-product.md        # Product page content
│   ├── web-content-resources.md      # Resources page content
│   └── web-content-documentation.md  # Documentation page content
│
└── chain-guardian/                   # ChainGuardian documentation
    ├── README.md                      # Product overview
    ├── INDEX.md                       # Knowledge base index
    ├── PRODUCT_SPEC_SHEET.md         # Product specification sheet
    ├── ARCHITECTURE_DIAGRAM.md        # Architecture diagram
    ├── WEB_PAGE_CONTENT.md            # Website content
    ├── KNOWLEDGE_BASE_SUMMARY.md      # Knowledge base summary
    ├── faqs/                          # FAQs
    │   ├── GENERAL_FAQS.md
    │   └── TECHNICAL_FAQS.md
    ├── documentation/                 # Documentation
    │   └── INDEX.md
    ├── resources/                     # Resources
    │   └── INDEX.md
    └── articles/                      # Knowledge base articles
        ├── CONTENT_DETECTION.md
        ├── RISK_SCORING.md
        ├── HASH_VERIFICATION.md
        └── BEHAVIORAL_ANALYSIS.md
```

## Naming Conventions

### File Names
- Use lowercase with hyphens: `product-spec-sheet.md`
- Use uppercase for important files: `PRODUCT_SPEC_SHEET.md` (ChainGuardian convention)
- Keep original names when they're descriptive

### Directory Names
- Use lowercase with hyphens: `blockchain-dna`, `cha-ching-analytics`
- Match product page URLs where possible

## Adding New Documentation

1. **Add files to the appropriate product directory** in `content/docs/[product-name]/`
2. **Update the product's README.md** to include links to new documentation
3. **Update the main README.md** in `content/docs/` if adding a new section
4. **Rebuild the site**: `npm run build`

## Accessing Documentation

Documentation is copied to `dist/public/content/docs/` during build and is accessible at:
- `/content/docs/[product-name]/[file-name]`

## Maintenance

- All documentation is in Markdown format
- Follow existing structure and naming conventions
- Update README files when adding new sections
- Keep documentation up to date with product changes

---

**Last Updated**: January 2025

