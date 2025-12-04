#!/bin/bash

# Script to copy product documentation to website content directory

SOURCE_BASE="/Volumes/evo4TB/kit/KGE/docs/products"
DEST_BASE="/Volumes/evo4TB/kit/KGE/KnightGlobal/content/docs"

# Create destination directories
mkdir -p "$DEST_BASE/blockchain-dna"
mkdir -p "$DEST_BASE/cha-ching-analytics"
mkdir -p "$DEST_BASE/zero-knight-30"
mkdir -p "$DEST_BASE/chain-guardian"

# Copy BlockchainDNA documentation
if [ -d "$SOURCE_BASE/BDNA/knowledge-base" ]; then
  echo "Copying BlockchainDNA documentation..."
  cp -r "$SOURCE_BASE/BDNA/knowledge-base/"* "$DEST_BASE/blockchain-dna/" 2>/dev/null
  echo "✓ BlockchainDNA docs copied"
fi

# Copy Cha-Ching Analytics documentation
if [ -d "$SOURCE_BASE/CCA/knowledge-base" ]; then
  echo "Copying Cha-Ching Analytics documentation..."
  cp -r "$SOURCE_BASE/CCA/knowledge-base/"* "$DEST_BASE/cha-ching-analytics/" 2>/dev/null
  echo "✓ Cha-Ching Analytics docs copied"
fi

# Copy ZeroKnight30 documentation
if [ -d "$SOURCE_BASE/zk30/knowledge-base" ]; then
  echo "Copying ZeroKnight30 documentation..."
  cp -r "$SOURCE_BASE/zk30/knowledge-base/"* "$DEST_BASE/zero-knight-30/" 2>/dev/null
  echo "✓ ZeroKnight30 docs copied"
fi

# Copy ChainGuardian documentation
if [ -d "$SOURCE_BASE/ChainGuard/knowledge-base" ]; then
  echo "Copying ChainGuardian documentation..."
  cp -r "$SOURCE_BASE/ChainGuard/knowledge-base/"* "$DEST_BASE/chain-guardian/" 2>/dev/null
  echo "✓ ChainGuardian docs copied"
fi

echo ""
echo "Documentation copy complete!"
echo "Files are in: $DEST_BASE"

