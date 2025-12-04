# Chainlink Integration Guide

Complete guide to integrating BlockchainDNA with Chainlink services.

---

## Overview

BlockchainDNA integrates with multiple Chainlink services for enhanced functionality:

- **Chainlink CCIP**: Cross-chain interoperability
- **Chainlink Functions**: Decentralized compute
- **Chainlink Automation**: Automated operations
- **Chainlink Data Feeds**: Price and data feeds

---

## Chainlink CCIP Integration

### Overview

Chainlink CCIP (Cross-Chain Interoperability Protocol) enables cross-chain analysis and identity resolution.

### Setup

1. **Get Chainlink CCIP Credentials**:
   - Sign up for Chainlink CCIP
   - Obtain API credentials
   - Configure in BlockchainDNA dashboard

2. **Configure in SDK**:

```typescript
const sdk = new BlockchainDNA({
  apiKey: 'your-api-key',
  chainlink: {
    ccip: {
      enabled: true,
      apiKey: process.env.CHAINLINK_CCIP_API_KEY
    }
  }
});
```

### Usage

#### Cross-Chain Analysis

```typescript
const result = await sdk.blockchain.analyzeCrossChain(
  walletAddress,
  {
    sourceChain: '1',    // Ethereum
    targetChains: ['137', '42161'] // Polygon, Arbitrum
  }
);
```

#### Cross-Chain Identity Resolution

```typescript
const identity = await sdk.genid.resolveCrossChain(
  identityId,
  {
    sourceChain: '1',
    targetChain: '137'
  }
);
```

---

## Chainlink Functions Integration

### Overview

Chainlink Functions enables decentralized compute for advanced analytics.

### Setup

1. **Subscribe to Chainlink Functions**:
   - Create subscription
   - Fund subscription
   - Configure in dashboard

2. **Enable Functions**:

```typescript
const sdk = new BlockchainDNA({
  apiKey: 'your-api-key',
  chainlink: {
    functions: {
      enabled: true,
      subscriptionId: process.env.CHAINLINK_FUNCTIONS_SUBSCRIPTION_ID
    }
  }
});
```

### Usage

#### Advanced Analytics

```typescript
const result = await sdk.genomex.analyzeWithFunctions(
  walletAddress,
  {
    function: 'advanced_clustering',
    parameters: { k: 5, method: 'kmeans' }
  }
);
```

---

## Chainlink Automation Integration

### Overview

Chainlink Automation enables automated monitoring and alerts.

### Setup

1. **Create Automation Job**:
   - Define automation rules
   - Configure triggers
   - Set up in dashboard

2. **Enable Automation**:

```typescript
const sdk = new BlockchainDNA({
  apiKey: 'your-api-key',
  chainlink: {
    automation: {
      enabled: true,
      jobId: process.env.CHAINLINK_AUTOMATION_JOB_ID
    }
  }
});
```

### Usage

#### Automated Monitoring

```typescript
// Set up automated monitoring
await sdk.driftScanner.setupAutomatedMonitoring(
  walletAddress,
  {
    trigger: 'risk_level_changes',
    threshold: 'high',
    action: 'send_alert'
  }
);
```

---

## Chainlink Data Feeds Integration

### Overview

Chainlink Data Feeds provide price and data feeds for analysis.

### Setup

1. **Configure Data Feeds**:
   - Select required feeds
   - Configure in dashboard

2. **Enable Data Feeds**:

```typescript
const sdk = new BlockchainDNA({
  apiKey: 'your-api-key',
  chainlink: {
    dataFeeds: {
      enabled: true,
      feeds: ['ETH/USD', 'BTC/USD']
    }
  }
});
```

### Usage

#### Price Analysis

```typescript
const analysis = await sdk.blockchain.analyzeWithPriceData(
  walletAddress,
  {
    includePriceData: true,
    feeds: ['ETH/USD', 'BTC/USD']
  }
);
```

---

## Multi-Chain Support

### Supported Chains

- **Ethereum**: Mainnet, Goerli, Sepolia
- **Polygon**: Mainnet, Mumbai
- **Arbitrum**: One, Nova
- **Optimism**: Mainnet
- **Base**: Mainnet
- **Avalanche**: C-Chain
- **BNB Chain**: Mainnet

### Configuration

```typescript
const sdk = new BlockchainDNA({
  apiKey: 'your-api-key',
  chains: {
    enabled: ['1', '137', '42161'], // Ethereum, Polygon, Arbitrum
    default: '1' // Ethereum
  }
});
```

---

## Webhook Configuration

### Setup Webhooks

1. **Create Webhook Endpoint**:
   - Set up webhook receiver
   - Configure endpoint URL
   - Set webhook secret

2. **Configure in Dashboard**:
   - Navigate to **Settings** → **Webhooks**
   - Add webhook URL
   - Select events to subscribe to

### Webhook Events

- `analysis.completed`
- `anomaly.detected`
- `identity.verified`
- `cross_chain.resolved`

### Webhook Payload

```json
{
  "event": "analysis.completed",
  "timestamp": "2025-12-01T12:00:00Z",
  "data": {
    "wallet": "0x...",
    "chainId": "1",
    "analysis": { ... }
  },
  "signature": "0x..." // HMAC signature
}
```

### Verify Webhook

```typescript
import crypto from 'crypto';

function verifyWebhook(payload: string, signature: string, secret: string): boolean {
  const hmac = crypto.createHmac('sha256', secret);
  const calculated = hmac.update(payload).digest('hex');
  return calculated === signature;
}
```

---

## Best Practices

### 1. Error Handling

```typescript
try {
  const result = await sdk.blockchain.analyzeCrossChain(walletAddress);
} catch (error) {
  if (error.code === 'CHAINLINK_ERROR') {
    // Handle Chainlink-specific error
  }
}
```

### 2. Rate Limiting

Monitor Chainlink rate limits:

```typescript
const result = await sdk.blockchain.analyzeCrossChain(walletAddress, {
  rateLimit: {
    maxRequests: 100,
    windowSeconds: 60
  }
});
```

### 3. Fallback Strategies

Implement fallbacks for Chainlink services:

```typescript
async function analyzeWithFallback(walletAddress: string) {
  try {
    return await sdk.blockchain.analyzeCrossChain(walletAddress);
  } catch (error) {
    // Fallback to single-chain analysis
    return await sdk.blockchain.analyzeWallet(walletAddress, '1');
  }
}
```

---

## Troubleshooting

### Issue: Chainlink Service Unavailable

**Solutions**:
1. Check Chainlink service status
2. Verify API credentials
3. Check subscription status
4. Review error logs

### Issue: Cross-Chain Resolution Fails

**Solutions**:
1. Verify both chains are supported
2. Check wallet has activity on both chains
3. Verify Chainlink CCIP is configured
4. Review network connectivity

---

## Related Documentation

- [Multi-Chain Setup](./multi-chain.md)
- [Webhook Configuration](../api/webhooks.md)
- [API Reference](../api/README.md)

---

**Last Updated**: December 2025

