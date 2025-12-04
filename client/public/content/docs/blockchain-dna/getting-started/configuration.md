# Configuration Guide

Complete configuration guide for BlockchainDNA SDK and services.

---

## SDK Configuration

### TypeScript/JavaScript

```typescript
import { BlockchainDNA } from '@blockchaindna/sdk';

const sdk = new BlockchainDNA({
  // Required
  apiKey: process.env.BLOCKCHAINDNA_API_KEY,
  
  // Optional
  baseURL: 'https://api.blockchaindna.io',
  timeout: 30000, // 30 seconds
  retries: 3,
  cache: true,
  cacheTTL: 3600, // 1 hour
  chainlink: {
    ccip: { enabled: true },
    functions: { enabled: false },
    automation: { enabled: false }
  }
});
```

### Python

```python
from blockchaindna import BlockchainDNA

sdk = BlockchainDNA(
    api_key=os.getenv('BLOCKCHAINDNA_API_KEY'),
    base_url='https://api.blockchaindna.io',
    timeout=30,
    retries=3,
    cache=True,
    cache_ttl=3600
)
```

---

## Environment Variables

### Required

```bash
BLOCKCHAINDNA_API_KEY=your_api_key_here
```

### Optional

```bash
BLOCKCHAINDNA_BASE_URL=https://api.blockchaindna.io
BLOCKCHAINDNA_TIMEOUT=30000
BLOCKCHAINDNA_RETRIES=3
BLOCKCHAINDNA_CACHE=true
BLOCKCHAINDNA_CACHE_TTL=3600
```

---

## Analysis Configuration

### Window Types

```typescript
const options = {
  windowType: '30d' // '7d' | '30d' | '90d'
};
```

### Module Selection

```typescript
const options = {
  includePatternTags: true,
  includeDriftScanner: true,
  includeGenID: false,
  includeGenomeX: true
};
```

### Advanced Options

```typescript
const options = {
  useLLM: true,
  cacheResults: true,
  cacheTTL: 3600,
  priority: 'normal' // 'low' | 'normal' | 'high'
};
```

---

## Chain Configuration

### Supported Chains

```typescript
const chains = {
  enabled: ['1', '137', '42161'], // Ethereum, Polygon, Arbitrum
  default: '1' // Default chain
};
```

### Chain-Specific Settings

```typescript
const chainConfig = {
  '1': { // Ethereum
    rpcUrl: 'https://eth-mainnet.g.alchemy.com/v2/...',
    explorerUrl: 'https://etherscan.io'
  },
  '137': { // Polygon
    rpcUrl: 'https://polygon-rpc.com',
    explorerUrl: 'https://polygonscan.com'
  }
};
```

---

## Caching Configuration

### Enable Caching

```typescript
const sdk = new BlockchainDNA({
  apiKey: 'your-key',
  cache: true,
  cacheTTL: 3600 // 1 hour
});
```

### Cache Settings

```typescript
const cacheConfig = {
  enabled: true,
  ttl: 3600, // Time to live in seconds
  maxSize: 1000, // Maximum cache entries
  strategy: 'lru' // 'lru' | 'fifo' | 'lfu'
};
```

---

## Retry Configuration

### Retry Settings

```typescript
const retryConfig = {
  retries: 3,
  retryDelay: 1000, // 1 second
  retryStrategy: 'exponential' // 'linear' | 'exponential'
};
```

### Custom Retry Strategy

```typescript
const retryStrategy = (error, attempt) => {
  if (error.statusCode === 429) {
    // Rate limit - exponential backoff
    return Math.min(1000 * Math.pow(2, attempt), 30000);
  }
  return null; // Don't retry
};
```

---

## Logging Configuration

### Enable Logging

```typescript
import { logger } from '@blockchaindna/sdk';

logger.level = 'info'; // 'debug' | 'info' | 'warn' | 'error'
logger.enableFileLogging = true;
logger.logFile = './blockchaindna.log';
```

---

## Related Documentation

- [Quick Start Guide](./quick-start.md)
- [Installation Guide](./installation.md)
- [API Reference](../api/README.md)

---

**Last Updated**: December 2025

