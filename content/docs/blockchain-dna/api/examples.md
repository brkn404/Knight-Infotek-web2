# API Examples

Code examples and common patterns for BlockchainDNA API.

---

## Basic Examples

### Analyze Single Wallet

```typescript
import { BlockchainDNA } from '@blockchaindna/sdk';

const sdk = new BlockchainDNA({
  apiKey: process.env.BLOCKCHAINDNA_API_KEY
});

// Analyze wallet
const result = await sdk.blockchain.analyzeWallet(
  '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
  '1' // Ethereum mainnet
);

console.log('Behavioral Type:', result.genomeX.behavioralType);
console.log('Risk Level:', result.driftScanner.riskLevel);
```

### Batch Analysis

```typescript
const wallets = [
  '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
  '0x8ba1f109551bD432803012645Hac136c22C929',
  // ... more wallets
];

const results = await sdk.blockchain.batchAnalyzeWallets(
  wallets,
  '1'
);

results.forEach(result => {
  console.log(`${result.wallet}: ${result.driftScanner.riskLevel}`);
});
```

---

## Advanced Examples

### Complete Analysis Pipeline

```typescript
async function completeAnalysis(walletAddress: string) {
  // 1. Get wallet summary
  const summary = await sdk.blockchain.getWalletSummary(
    walletAddress,
    '1'
  );
  
  // 2. Analyze with all modules
  const analysis = await sdk.blockchain.analyzeWallet(
    walletAddress,
    '1',
    {
      windowType: '30d',
      includePatternTags: true,
      includeDriftScanner: true,
      includeGenID: true
    }
  );
  
  // 3. Get genome vector
  const genomeVector = await sdk.genomex.getGenomeVector(
    walletAddress,
    '30d'
  );
  
  // 4. Find similar wallets
  const similar = await sdk.genomex.findSimilarWallets(
    walletAddress,
    { threshold: 0.8, limit: 10 }
  );
  
  return {
    summary,
    analysis,
    genomeVector,
    similar
  };
}
```

### Real-Time Monitoring

```typescript
// Monitor wallet for anomalies
async function monitorWallet(walletAddress: string) {
  const previousAnalysis = await sdk.blockchain.analyzeWallet(
    walletAddress,
    '1'
  );
  
  // Poll for changes
  setInterval(async () => {
    const currentAnalysis = await sdk.blockchain.analyzeWallet(
      walletAddress,
      '1'
    );
    
    // Check for risk level changes
    if (currentAnalysis.driftScanner.riskLevel !== 
        previousAnalysis.driftScanner.riskLevel) {
      console.log('Risk level changed:', {
        from: previousAnalysis.driftScanner.riskLevel,
        to: currentAnalysis.driftScanner.riskLevel
      });
      
      // Trigger alert
      await sendAlert(walletAddress, currentAnalysis);
    }
    
    previousAnalysis = currentAnalysis;
  }, 60000); // Check every minute
}
```

### Webhook Handler

```typescript
import express from 'express';
import crypto from 'crypto';

const app = express();
app.use(express.json());

app.post('/webhooks/blockchaindna', (req, res) => {
  const signature = req.headers['x-blockchaindna-signature'];
  const payload = JSON.stringify(req.body);
  
  // Verify signature
  if (!verifyWebhook(payload, signature, process.env.WEBHOOK_SECRET)) {
    return res.status(401).send('Invalid signature');
  }
  
  // Handle event
  const event = req.body;
  switch (event.event) {
    case 'anomaly.detected':
      handleAnomaly(event.data);
      break;
    case 'policy.violated':
      handlePolicyViolation(event.data);
      break;
  }
  
  res.status(200).send('OK');
});

function verifyWebhook(payload: string, signature: string, secret: string): boolean {
  const hmac = crypto.createHmac('sha256', secret);
  const calculated = hmac.update(payload).digest('hex');
  return calculated === signature;
}
```

---

## Integration Examples

### Express.js Middleware

```typescript
import express from 'express';
import { BlockchainDNA } from '@blockchaindna/sdk';

const app = express();
const sdk = new BlockchainDNA({
  apiKey: process.env.BLOCKCHAINDNA_API_KEY
});

// Middleware to analyze wallet
app.use('/api/wallet/:address', async (req, res, next) => {
  try {
    const analysis = await sdk.blockchain.analyzeWallet(
      req.params.address,
      req.query.chainId || '1'
    );
    req.walletAnalysis = analysis;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route using analysis
app.get('/api/wallet/:address', (req, res) => {
  res.json(req.walletAnalysis);
});
```

### React Hook

```typescript
import { useState, useEffect } from 'react';
import { BlockchainDNA } from '@blockchaindna/sdk';

function useWalletAnalysis(walletAddress: string, chainId: string) {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const sdk = new BlockchainDNA({
      apiKey: process.env.REACT_APP_BLOCKCHAINDNA_API_KEY
    });
    
    sdk.blockchain.analyzeWallet(walletAddress, chainId)
      .then(setAnalysis)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [walletAddress, chainId]);
  
  return { analysis, loading, error };
}
```

---

## Python Examples

### Basic Analysis

```python
from blockchaindna import BlockchainDNA

sdk = BlockchainDNA(api_key=os.getenv('BLOCKCHAINDNA_API_KEY'))

# Analyze wallet
result = sdk.blockchain.analyze_wallet(
    wallet='0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    chain_id='1'
)

print(f"Behavioral Type: {result['genomeX']['behavioralType']}")
print(f"Risk Level: {result['driftScanner']['riskLevel']}")
```

### Batch Processing

```python
wallets = [
    '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    '0x8ba1f109551bD432803012645Hac136c22C929',
]

results = sdk.blockchain.batch_analyze_wallets(
    wallets=wallets,
    chain_id='1'
)

for result in results:
    print(f"{result['wallet']}: {result['driftScanner']['riskLevel']}")
```

---

## Best Practices

1. **Error Handling**: Always implement error handling
2. **Caching**: Cache results when appropriate
3. **Rate Limiting**: Respect rate limits
4. **Async Processing**: Use async/await for better performance
5. **Type Safety**: Use TypeScript for type safety

---

## Related Documentation

- [API Reference](./README.md)
- [SDK Documentation](./sdk.md)
- [Error Handling](./error-handling.md)

---

**Last Updated**: December 2025

