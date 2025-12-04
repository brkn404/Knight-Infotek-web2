# Organizing Product Documentation

This guide explains how to organize product documentation from `/Volumes/evo4TB/kit/KGE/docs/products/` into the website structure.

## Structure Created

The following directory structure has been created in `content/docs/`:

```
content/docs/
├── README.md                    # Main documentation index
├── blockchain-dna/               # BlockchainDNA docs
│   └── README.md
├── cha-ching-analytics/          # Cha-Ching Analytics docs
│   └── README.md
├── zero-knight-30/               # ZeroKnight30 docs
│   └── README.md
└── chain-guardian/               # ChainGuardian docs
    └── README.md
```

## Copying Documentation Files

To copy all documentation files from the source to the website, run:

```bash
cd /Volumes/evo4TB/kit/KGE/Knight_InfoTek
node script/copy-documentation.mjs
```

Or use the shell script:

```bash
chmod +x script/copy-docs.sh
./script/copy-docs.sh
```

Or manually copy each product:

```bash
# BlockchainDNA
cp -r /Volumes/evo4TB/kit/KGE/docs/products/BDNA/knowledge-base/* content/docs/blockchain-dna/

# Cha-Ching Analytics
cp -r /Volumes/evo4TB/kit/KGE/docs/products/CCA/knowledge-base/* content/docs/cha-ching-analytics/

# ZeroKnight30
cp -r /Volumes/evo4TB/kit/KGE/docs/products/zk30/knowledge-base/* content/docs/zero-knight-30/

# ChainGuardian
cp -r /Volumes/evo4TB/kit/KGE/docs/products/ChainGuard/knowledge-base/* content/docs/chain-guardian/
```

## Verification

After copying, verify files were copied:

```bash
find content/docs -name "*.md" -type f | wc -l
```

You should see many markdown files (50+).

## Build Integration

The build script (`script/build.ts`) already copies the `content/` directory to `dist/public/content/` during build, so documentation will be automatically included.

## Next Steps

1. Run the copy script to copy all documentation files
2. Verify files were copied successfully
3. Update product pages to link to documentation
4. Rebuild the site: `npm run build`

## File Organization

Files maintain their original structure and naming from the source directories. Each product has:

- **README.md** - Product overview and quick links (created)
- **INDEX.md** or similar - Complete documentation index
- **Product spec sheets** - Technical specifications
- **Architecture docs** - System architecture (non-proprietary)
- **API docs** - API references and guides
- **FAQs** - Frequently asked questions
- **Resources** - Whitepapers, case studies, etc.

---

**Last Updated**: January 2025

