# SDK Documentation

Complete SDK documentation for BlockchainDNA platform.

---

## Installation

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

## TypeScript/JavaScript SDK

### Initialization

```typescript
import { BlockchainDNA } from '@blockchaindna/sdk';

const sdk = new BlockchainDNA({
  apiKey: process.env.BLOCKCHAINDNA_API_KEY,
  baseURL: 'https://api.blockchaindna.io',
  timeout: 30000, // 30 seconds
  retries: 3,     // Retry failed requests
  cache: true     // Enable in-memory caching
});
```

### Configuration Options

```typescript
interface SDKConfig {
  apiKey: string;
  baseURL?: string;
  timeout?: number;
  retries?: number;
  cache?: boolean;
  cacheTTL?: number;
}
```

---

## Core Client

### Health Check

```typescript
const health = await sdk.health();
console.log(health.status); // 'healthy' | 'degraded' | 'unhealthy'
```

### Configuration

```typescript
const config = await sdk.config();
console.log(config.version);
console.log(config.features);
```

---

## Blockchain Module

### Analyze Wallet

```typescript
const result = await sdk.blockchain.analyzeWallet(
  walletAddress,
  chainId,
  {
    windowType: '30d',
    includePatternTags: true,
    includeDriftScanner: true
  }
);
```

### Get Wallet Summary

```typescript
const summary = await sdk.blockchain.getWalletSummary(
  walletAddress,
  chainId
);
```

### Get Transactions

```typescript
const transactions = await sdk.blockchain.getTransactions(
  walletAddress,
  chainId,
  {
    limit: 100,
    offset: 0
  }
);
```

### Batch Analyze

```typescript
const results = await sdk.blockchain.batchAnalyzeWallets(
  walletAddresses,
  chainId
);
```

---

## GenomeX Module

### Analyze Wallet

```typescript
const result = await sdk.genomex.analyzeWallet(
  walletAddress,
  '30d' // windowType
);
```

### Get Genome Vector

```typescript
const genomeVector = await sdk.genomex.getGenomeVector(
  walletAddress,
  '30d'
);
```

### Calculate Similarity

```typescript
const similarity = await sdk.genomex.calculateSimilarity(
  wallet1,
  wallet2,
  '30d'
);
```

### Cluster Wallets

```typescript
const clusters = await sdk.genomex.clusterWallets(
  walletAddresses,
  {
    method: 'kmeans',
    k: 5
  }
);
```

---

## PatternTags Module

### Analyze with BTE

```typescript
const result = await sdk.patterntags.analyzeWithBTE(
  walletAddress,
  behavioralResult
);
```

### Batch Analyze

```typescript
const results = await sdk.patterntags.batchAnalyzeWithBTE(
  analyses,
  { maxConcurrent: 10 }
);
```

### Enforce Policy

```typescript
const policyResult = await sdk.patterntags.enforcePolicy({
  actor: actorTag,
  artifact: artifactTag,
  action: actionTag,
  context: contextTag
});
```

---

## DriftScanner Module

### Analyze Wallet

```typescript
const result = await sdk.driftScanner.analyzeWallet(
  walletAddress,
  genomeVector
);
```

### Batch Analyze

```typescript
const results = await sdk.driftScanner.batchAnalyzeWallets(
  analyses,
  { maxConcurrent: 20 }
);
```

### Get Anomaly Details

```typescript
const anomaly = await sdk.driftScanner.getAnomalyDetails(
  walletAddress
);
```

---

## GenID Module

### Create Identity

```typescript
const identity = await sdk.genid.createIdentity({
  entityType: 'individual_wallet',
  primaryAddress: walletAddress,
  metadata: {
    name: 'John Doe'
  }
});
```

### Get Identity

```typescript
const identity = await sdk.genid.getIdentity(identityId);
```

### Verify Identity

```typescript
const verification = await sdk.genid.verifyIdentity(
  identityId,
  {
    method: 'attestation',
    attestationData: { ... }
  }
);
```

### Resolve Cross-Chain

```typescript
const addresses = await sdk.genid.resolveCrossChain(
  identityId,
  targetChainId
);
```

---

## Error Handling

### Try-Catch

```typescript
try {
  const result = await sdk.blockchain.analyzeWallet(walletAddress);
} catch (error) {
  if (error instanceof APIError) {
    console.error('API Error:', error.code, error.message);
  } else if (error instanceof NetworkError) {
    console.error('Network Error:', error.message);
  } else {
    console.error('Unknown Error:', error);
  }
}
```

### Error Types

```typescript
import { APIError, NetworkError, ValidationError } from '@blockchaindna/sdk';

// APIError: API returned error response
// NetworkError: Network/connection error
// ValidationError: Request validation failed
```

---

## Caching

### Enable Caching

```typescript
const sdk = new BlockchainDNA({
  apiKey: 'your-key',
  cache: true,
  cacheTTL: 3600 // 1 hour
});
```

### Clear Cache

```typescript
sdk.clearCache();
```

### Cache Statistics

```typescript
const stats = sdk.getCacheStats();
console.log(stats.hits);
console.log(stats.misses);
console.log(stats.size);
```

---

## Retry Logic

### Automatic Retries

```typescript
const sdk = new BlockchainDNA({
  apiKey: 'your-key',
  retries: 3, // Retry up to 3 times
  retryDelay: 1000 // 1 second between retries
});
```

### Custom Retry Strategy

```typescript
const sdk = new BlockchainDNA({
  apiKey: 'your-key',
  retryStrategy: (error, attempt) => {
    if (error.statusCode === 429) {
      // Rate limit - exponential backoff
      return Math.min(1000 * Math.pow(2, attempt), 30000);
    }
    return null; // Don't retry
  }
});
```

---

## TypeScript Types

### Type Definitions

```typescript
import type {
  WalletAnalysis,
  GenomeVector,
  PatternTagsResult,
  DriftScannerResult,
  Identity
} from '@blockchaindna/sdk';

const analysis: WalletAnalysis = await sdk.blockchain.analyzeWallet(...);
```

---

## Python SDK

### Initialization

```python
from blockchaindna import BlockchainDNA

sdk = BlockchainDNA(
    api_key=os.getenv('BLOCKCHAINDNA_API_KEY'),
    base_url='https://api.blockchaindna.io',
    timeout=30,
    retries=3
)
```

### Usage

```python
# Analyze wallet
result = sdk.blockchain.analyze_wallet(
    wallet='0x...',
    chain_id='1',
    window_type='30d'
)

# Get genome vector
genome = sdk.genomex.get_genome_vector(
    wallet='0x...',
    window_type='30d'
)
```

---

## Examples

### Complete Analysis

```typescript
async function completeAnalysis(walletAddress: string) {
  // Get wallet summary
  const summary = await sdk.blockchain.getWalletSummary(walletAddress, '1');
  
  // Analyze with all modules
  const analysis = await sdk.blockchain.analyzeWallet(walletAddress, '1', {
    includePatternTags: true,
    includeDriftScanner: true,
    includeGenID: true
  });
  
  return {
    summary,
    analysis
  };
}
```

### Batch Processing

```typescript
async function batchAnalysis(walletAddresses: string[]) {
  const results = await sdk.blockchain.batchAnalyzeWallets(
    walletAddresses,
    '1'
  );
  
  // Filter high-risk wallets
  const highRisk = results.filter(r => 
    r.driftScanner.riskLevel === 'high' || 
    r.driftScanner.riskLevel === 'critical'
  );
  
  return highRisk;
}
```

---

## Best Practices

1. **Use Environment Variables**: Never hardcode API keys
2. **Enable Caching**: Reduce API calls and improve performance
3. **Handle Errors**: Always implement error handling
4. **Use Batch Endpoints**: Process multiple items efficiently
5. **Monitor Rate Limits**: Track usage to avoid rate limit errors

---

## Related Documentation

- [API Reference](./README.md)
- [Authentication Guide](./authentication.md)
- [Error Handling](./error-handling.md)

---

**Last Updated**: December 2025

