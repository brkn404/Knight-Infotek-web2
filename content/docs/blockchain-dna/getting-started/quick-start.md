# Quick Start Guide

Get up and running with BlockchainDNA in minutes.

---

## Prerequisites

- Node.js 18+ or Python 3.9+
- API key from BlockchainDNA dashboard
- Basic understanding of blockchain concepts

---

## Step 1: Create Account & Get API Key

1. **Sign Up**: Visit [blockchaindna.io/signup](https://blockchaindna.io/signup)
2. **Verify Email**: Check your inbox and verify your email address
3. **Generate API Key**:
   - Navigate to **Dashboard** → **Settings** → **API Keys**
   - Click **Create New API Key**
   - Name your key (e.g., "Production API Key")
   - Copy and securely store your API key
   - ⚠️ **Important**: API keys are only shown once

---

## Step 2: Install SDK

### Node.js/TypeScript

```bash
npm install @blockchaindna/sdk
# or
yarn add @blockchaindna/sdk
```

### Python

```bash
pip install blockchaindna-sdk
```

---

## Step 3: Initialize SDK

### TypeScript/JavaScript

```typescript
import { BlockchainDNA } from '@blockchaindna/sdk';

const sdk = new BlockchainDNA({
  apiKey: process.env.BLOCKCHAINDNA_API_KEY,
  baseURL: 'https://api.blockchaindna.io',
  timeout: 30000 // 30 seconds
});
```

### Python

```python
from blockchaindna import BlockchainDNA

sdk = BlockchainDNA(
    api_key=os.getenv('BLOCKCHAINDNA_API_KEY'),
    base_url='https://api.blockchaindna.io',
    timeout=30
)
```

---

## Step 4: Your First Analysis

### Analyze a Wallet

```typescript
// TypeScript example
async function analyzeWallet() {
  try {
    const result = await sdk.blockchain.analyzeWallet(
      '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb', // Wallet address
      '1' // Ethereum mainnet chain ID
    );
    
    console.log('Behavioral Type:', result.genomeX.behavioralType);
    console.log('Risk Level:', result.driftScanner.riskLevel);
    console.log('Threat Level:', result.genomeX.threatLevel);
  } catch (error) {
    console.error('Analysis failed:', error);
  }
}

analyzeWallet();
```

### Python Example

```python
# Python example
def analyze_wallet():
    try:
        result = sdk.blockchain.analyze_wallet(
            wallet='0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
            chain_id='1'  # Ethereum mainnet
        )
        
        print(f"Behavioral Type: {result['genomeX']['behavioralType']}")
        print(f"Risk Level: {result['driftScanner']['riskLevel']}")
        print(f"Threat Level: {result['genomeX']['threatLevel']}")
    except Exception as e:
        print(f"Analysis failed: {e}")

analyze_wallet()
```

---

## Step 5: Check Health Status

```typescript
// Verify your connection
const health = await sdk.health();
console.log('Service Status:', health.status);
```

---

## Next Steps

- **Explore Features**: [GenomeX Guide](../features/genomex.md)
- **API Reference**: [Complete API Docs](../api/README.md)
- **Examples**: [Code Examples](../api/examples.md)
- **Troubleshooting**: [Common Issues](../troubleshooting/)

---

## Environment Variables

Create a `.env` file:

```bash
BLOCKCHAINDNA_API_KEY=your_api_key_here
BLOCKCHAINDNA_BASE_URL=https://api.blockchaindna.io
```

---

## Support

- **Documentation**: [Full Docs](../../README.md)
- **Email**: support@blockchaindna.io
- **Status**: [status.blockchaindna.io](https://status.blockchaindna.io)

---

**Last Updated**: December 2025

