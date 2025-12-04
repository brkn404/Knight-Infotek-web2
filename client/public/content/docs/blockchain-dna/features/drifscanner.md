# DriftScanner Anomaly Detection

DriftScanner is an advanced anomaly detection system that identifies behavioral drift and anomalies in blockchain wallet behavior using sophisticated detection algorithms.

---

## Overview

DriftScanner uses advanced anomaly detection algorithms to identify behavioral drift. It analyzes behavioral genome vectors and detects deviations from normal patterns. Anomalies are flagged with risk classifications and explanations.

---

## Key Features

### Anomaly Detection

- **Multi-Factor Analysis**: Detects violations across multiple behavioral dimensions
- **Advanced Algorithms**: Efficient detection using optimized algorithms
- **Calibrated Scoring**: Reliability-weighted scoring system
- **Statistical Analysis**: Statistical p-value computation for risk assessment

### Risk Classification

- **Critical**: Immediate attention required
- **High**: Significant risk detected
- **Medium**: Moderate risk
- **Low**: Normal behavior

### Deterministic Explanations

Every anomaly detection includes deterministic explanations:
- Which behavioral patterns were violated
- Why the anomaly was detected
- What behavioral changes triggered it

---

## How It Works

### 1. Behavioral Analysis

Genome vectors are analyzed using advanced algorithms to identify behavioral patterns and deviations.

### 2. Anomaly Detection

The system detects anomalies by comparing current behavior against established patterns and statistical models.

### 3. Risk Scoring

Risk scores are calculated based on:
- Behavioral deviation magnitude
- Statistical significance (p-value)
- Calibrated risk assessment

### 4. Risk Classification

Risk level determined by:
- Deviation magnitude
- Statistical significance
- Calibrated risk score

---

## API Usage

### Analyze Wallet

```typescript
const result = await sdk.driftScanner.analyzeWallet(
  walletAddress,
  genomeVector // Genome vector from GenomeX
);

console.log(result.riskLevel);        // 'low' | 'medium' | 'high' | 'critical'
console.log(result.deviationScore);   // Deviation score
console.log(result.pValue);           // P-value (0-1)
console.log(result.calibratedScore);  // Calibrated score (0-1)
console.log(result.explanations);     // Explanations for detected anomalies
```

### Batch Analysis

```typescript
const analyses = [
  { wallet: '0x...', genomeVector: vector1 },
  { wallet: '0x...', genomeVector: vector2 }
];

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

console.log(anomaly.anomalyIndicators); // Indicators of detected anomalies
console.log(anomaly.explanations);         // Detailed explanations
```

---

## Risk Classification

Risk levels are determined by analyzing multiple factors:

- **Critical**: Significant behavioral deviation with high statistical significance
- **High**: Notable behavioral deviation with moderate statistical significance
- **Medium**: Moderate behavioral deviation
- **Low**: Normal behavior with minimal deviation

Thresholds are configurable and optimized based on historical data and use case requirements.

---

## Performance

### Latency

- **Single Analysis**: <1ms (sub-millisecond)
- **Batch Processing**: 20-40x faster than sequential
- **Throughput**: 1000+ analyses/second

### Optimization

DriftScanner uses:
- Optimized algorithms for efficient processing
- Parallel batch processing
- Caching for repeated analyses

---

## Use Cases

### 1. Real-Time Anomaly Detection

```typescript
// Monitor wallet for anomalies
const result = await sdk.driftScanner.analyzeWallet(
  walletAddress,
  genomeVector
);

if (result.riskLevel === 'critical' || result.riskLevel === 'high') {
  // Trigger alert
  await triggerAlert(walletAddress, result);
}
```

### 2. Batch Risk Assessment

```typescript
// Assess risk for multiple wallets
const results = await sdk.driftScanner.batchAnalyzeWallets(analyses);

const criticalWallets = results.filter(r => r.riskLevel === 'critical');
const highRiskWallets = results.filter(r => r.riskLevel === 'high');

console.log(`Critical: ${criticalWallets.length}`);
console.log(`High Risk: ${highRiskWallets.length}`);
```

### 3. Behavioral Drift Monitoring

```typescript
// Track behavioral changes over time
const history = await sdk.driftScanner.getBehavioralHistory(
  walletAddress,
  { days: 30 }
);

// Detect significant drift
const driftEvents = history.filter(h => h.deviationScore > 0.5);
```

---

## Explanations

### Deterministic Explanations

Every anomaly includes explanations:

```typescript
const result = await sdk.driftScanner.analyzeWallet(walletAddress, genomeVector);

result.explanations.forEach(explanation => {
  console.log(`${explanation.category}: ${explanation.reason}`);
});
```

### Example Explanations

- "Transaction Pattern: Unusual transaction frequency detected"
- "Financial Pattern: Significant value distribution change"
- "Network Pattern: New counterparty pattern identified"

---

## Best Practices

### 1. Use with GenomeX

DriftScanner works best with GenomeX genome vectors:

```typescript
// Get genome vector from GenomeX
const genomeResult = await sdk.genomex.analyzeWallet(walletAddress);

// Analyze with DriftScanner
const driftResult = await sdk.driftScanner.analyzeWallet(
  walletAddress,
  genomeResult.genomeVector
);
```

### 2. Monitor Trends

Track risk levels over time:

```typescript
const history = await sdk.driftScanner.getBehavioralHistory(walletAddress);
const trend = analyzeTrend(history);
```

### 3. Configure Thresholds

Customize risk thresholds:

```typescript
await sdk.driftScanner.configureThresholds({
  critical: { deviationScore: 0.8, pValue: 0.99 },
  high: { deviationScore: 0.6, pValue: 0.95 }
});
```

### 4. Use Batch Processing

Process multiple wallets efficiently:

```typescript
const results = await sdk.driftScanner.batchAnalyzeWallets(
  analyses,
  { maxConcurrent: 20 }
);
```

---

## Error Handling

```typescript
try {
  const result = await sdk.driftScanner.analyzeWallet(walletAddress, genomeVector);
} catch (error) {
  if (error.code === 'INVALID_GENOME_VECTOR') {
    console.error('Invalid genome vector dimension');
  } else if (error.code === 'INSUFFICIENT_DATA') {
    console.error('Not enough data for analysis');
  } else {
    console.error('DriftScanner analysis failed:', error.message);
  }
}
```

---

## Advanced Features

### Custom Detection Rules

Configure custom detection rules:

```typescript
const customRules = await sdk.driftScanner.configureDetectionRules({
  thresholds: { ... },
  scoring: { ... }
});
```

### Statistical Analysis

Access statistical analysis details:

```typescript
const analysis = await sdk.driftScanner.getStatisticalAnalysis(
  walletAddress,
  genomeVector
);

console.log(analysis.pValue);
console.log(analysis.confidenceInterval);
```

---

## Related Documentation

- [GenomeX Guide](./genomex.md)
- [PatternTags Guide](./patterntags.md)
- [API Reference](../api/driftscanner.md)
- [Threshold Configuration](../api/driftscanner-config.md)

---

**Last Updated**: December 2025

