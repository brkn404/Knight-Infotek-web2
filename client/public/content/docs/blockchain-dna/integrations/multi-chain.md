# Multi-Chain Integration Guide

Complete guide to multi-chain support in BlockchainDNA.

---

## Overview

BlockchainDNA supports analysis across multiple blockchain networks, enabling unified behavioral analysis regardless of the chain.

---

## Supported Chains

### EVM-Compatible Chains

| Chain | Chain ID | Network Name | Status |
|-------|----------|--------------|--------|
| Ethereum | 1 | Mainnet | ✅ Production |
| Ethereum | 5 | Goerli | ✅ Testnet |
| Ethereum | 11155111 | Sepolia | ✅ Testnet |
| Polygon | 137 | Mainnet | ✅ Production |
| Polygon | 80001 | Mumbai | ✅ Testnet |
| Arbitrum | 42161 | One | ✅ Production |
| Arbitrum | 421613 | Goerli | ✅ Testnet |
| Optimism | 10 | Mainnet | ✅ Production |
| Optimism | 420 | Goerli | ✅ Testnet |
| Base | 8453 | Mainnet | ✅ Production |
| Base | 84531 | Goerli | ✅ Testnet |
| Avalanche | 43114 | C-Chain | ✅ Production |
| BNB Chain | 56 | Mainnet | ✅ Production |
| BNB Chain | 97 | Testnet | ✅ Testnet |

### Non-EVM Chains

| Chain | Network | Status |
|-------|---------|--------|
| Bitcoin | Mainnet | ✅ Production |
| Bitcoin | Testnet | ✅ Testnet |

---

## Configuration

### Enable Multiple Chains

```typescript
const sdk = new BlockchainDNA({
  apiKey: 'your-api-key',
  chains: {
    enabled: ['1', '137', '42161'], // Ethereum, Polygon, Arbitrum
    default: '1' // Default chain
  }
});
```

### Chain-Specific Configuration

```typescript
const sdk = new BlockchainDNA({
  apiKey: 'your-api-key',
  chains: {
    '1': { // Ethereum
      rpcUrl: 'https://eth-mainnet.g.alchemy.com/v2/...',
      explorerUrl: 'https://etherscan.io'
    },
    '137': { // Polygon
      rpcUrl: 'https://polygon-rpc.com',
      explorerUrl: 'https://polygonscan.com'
    }
  }
});
```

---

## Cross-Chain Analysis

### Analyze Across Chains

```typescript
const result = await sdk.blockchain.analyzeCrossChain(
  walletAddress,
  {
    chains: ['1', '137', '42161'], // Analyze on multiple chains
    aggregate: true // Aggregate results
  }
);
```

### Get Chain-Specific Results

```typescript
const result = await sdk.blockchain.analyzeCrossChain(
  walletAddress,
  {
    chains: ['1', '137'],
    aggregate: false // Return per-chain results
  }
);

// Access per-chain results
console.log(result.chains['1']); // Ethereum results
console.log(result.chains['137']); // Polygon results
```

---

## Cross-Chain Identity

### Resolve Identity Across Chains

```typescript
const identity = await sdk.genid.resolveCrossChain(
  identityId,
  {
    sourceChain: '1',
    targetChains: ['137', '42161']
  }
);

// Get addresses on each chain
console.log(identity.addresses['1']); // Ethereum addresses
console.log(identity.addresses['137']); // Polygon addresses
console.log(identity.addresses['42161']); // Arbitrum addresses
```

### Link Addresses Across Chains

```typescript
await sdk.genid.linkAddress(
  identityId,
  {
    chainId: '137',
    address: '0x...' // Polygon address
  }
);
```

---

## Chain-Specific Features

### Ethereum-Specific

```typescript
const result = await sdk.blockchain.analyzeWallet(
  walletAddress,
  '1', // Ethereum
  {
    includeERC20: true,
    includeERC721: true,
    includeERC1155: true
  }
);
```

### Polygon-Specific

```typescript
const result = await sdk.blockchain.analyzeWallet(
  walletAddress,
  '137', // Polygon
  {
    includePolygonSpecific: true
  }
);
```

---

## Best Practices

### 1. Choose Appropriate Chains

Select chains based on your use case:

```typescript
// For DeFi analysis
const chains = ['1', '137', '42161']; // Ethereum, Polygon, Arbitrum

// For NFT analysis
const chains = ['1', '137']; // Ethereum, Polygon
```

### 2. Handle Chain-Specific Errors

```typescript
try {
  const result = await sdk.blockchain.analyzeCrossChain(walletAddress);
} catch (error) {
  if (error.code === 'CHAIN_NOT_SUPPORTED') {
    console.error('Chain not supported:', error.chainId);
  } else if (error.code === 'CHAIN_UNAVAILABLE') {
    console.error('Chain temporarily unavailable:', error.chainId);
  }
}
```

### 3. Optimize for Performance

```typescript
// Analyze on most active chains first
const chains = await sdk.blockchain.getMostActiveChains(walletAddress);
const result = await sdk.blockchain.analyzeCrossChain(walletAddress, { chains });
```

---

## Chainlink CCIP Integration

### Cross-Chain via CCIP

```typescript
const result = await sdk.blockchain.analyzeCrossChain(
  walletAddress,
  {
    chains: ['1', '137'],
    useCCIP: true // Use Chainlink CCIP
  }
);
```

See [Chainlink Integration Guide](./chainlink.md) for details.

---

## Troubleshooting

### Issue: Chain Not Supported

**Solutions**:
1. Verify chain ID is correct
2. Check supported chains list
3. Contact support for new chain requests

### Issue: Cross-Chain Analysis Slow

**Solutions**:
1. Reduce number of chains analyzed
2. Use batch processing
3. Enable caching
4. Analyze chains in parallel

---

## Related Documentation

- [Chainlink Integration](./chainlink.md)
- [API Reference](../api/README.md)
- [GenID Guide](../features/genid.md)

---

**Last Updated**: December 2025

