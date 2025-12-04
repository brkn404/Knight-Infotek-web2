# Getting Started with BlockchainDNA

Welcome to BlockchainDNA! This guide will help you get started quickly.

---

## Quick Start

### 1. Create an Account

1. Visit [blockchaindna.io](https://blockchaindna.io)
2. Sign up for a free account
3. Verify your email address
4. Access your dashboard

### 2. Generate an API Key

1. Navigate to **Settings** → **API Keys**
2. Click **Create New API Key**
3. Copy and securely store your API key
4. Set appropriate permissions and rate limits

### 3. Install the SDK

```bash
npm install @blockchaindna/sdk
```

### 4. Make Your First Request

```typescript
import { BlockchainDNA } from '@blockchaindna/sdk';

const sdk = new BlockchainDNA({
  apiKey: 'your-api-key',
  baseURL: 'https://api.blockchaindna.io'
});

// Analyze a wallet
const result = await sdk.blockchain.analyzeWallet(
  '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
  '1' // Ethereum mainnet
);

console.log(result);
```

---

## Platform Overview

### Core Components

**GenomeX**: Behavioral intelligence engine
- Generates unique behavioral "DNA" for wallets
- Enables similarity matching and clustering
- Provides behavioral classification

**PatternTags**: Behavioral integrity system
- Real-time behavioral tagging
- Policy enforcement
- Attack pattern detection

**DriftScanner**: Anomaly detection
- Advanced anomaly detection algorithms
- Behavioral drift analysis
- Risk scoring

**GenID**: Universal identity management
- Multi-entity identity system
- Identity verification
- Cross-chain identity resolution

---

## Common Use Cases

### 1. Wallet Analysis

Analyze a single wallet's behavior:

```typescript
const analysis = await sdk.blockchain.analyzeWallet(
  walletAddress,
  chainId
);
```

### 2. Batch Analysis

Analyze multiple wallets:

```typescript
const results = await sdk.blockchain.batchAnalyzeWallets(
  walletAddresses,
  chainId
);
```

### 3. Anomaly Detection

Detect anomalies in wallet behavior:

```typescript
const anomalies = await sdk.driftScanner.detectAnomalies(
  walletAddress,
  genomeVector
);
```

### 4. Identity Verification

Verify wallet identity:

```typescript
const identity = await sdk.genid.verifyIdentity(
  walletAddress,
  identityData
);
```

---

## Next Steps

1. **Explore Features**: Check out [Features Documentation](../features/)
2. **API Reference**: Review [API Documentation](../api/)
3. **Integration Guides**: See [Integration Guides](../integrations/)
4. **Examples**: Browse code examples in our GitHub repository

---

## Support

- **Documentation**: [Full Documentation](../../README.md)
- **FAQs**: [Frequently Asked Questions](../faq/)
- **Support**: support@blockchaindna.io

---

**Last Updated**: December 2025  
**Version**: 2.0

