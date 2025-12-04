# Webhooks Guide

Complete guide to configuring and using webhooks with BlockchainDNA.

---

## Overview

Webhooks allow you to receive real-time notifications when events occur in BlockchainDNA. This enables reactive applications and automated workflows.

---

## Supported Events

### Analysis Events

- `analysis.completed`: Analysis completed for a wallet
- `analysis.failed`: Analysis failed
- `batch.analysis.completed`: Batch analysis completed

### Anomaly Events

- `anomaly.detected`: Anomaly detected by DriftScanner
- `risk.level.changed`: Risk level changed
- `critical.anomaly.detected`: Critical anomaly detected

### Identity Events

- `identity.created`: New identity created
- `identity.verified`: Identity verified
- `identity.updated`: Identity updated

### Policy Events

- `policy.violated`: PatternTags policy violated
- `policy.decision.changed`: Policy decision changed

---

## Configuration

### Step 1: Create Webhook Endpoint

Set up a webhook receiver endpoint:

```typescript
// Express.js example
app.post('/webhooks/blockchaindna', (req, res) => {
  const signature = req.headers['x-blockchaindna-signature'];
  const payload = JSON.stringify(req.body);
  
  // Verify signature
  if (verifyWebhook(payload, signature, webhookSecret)) {
    // Process webhook
    handleWebhook(req.body);
    res.status(200).send('OK');
  } else {
    res.status(401).send('Invalid signature');
  }
});
```

### Step 2: Configure in Dashboard

1. Navigate to **Settings** → **Webhooks**
2. Click **Add Webhook**
3. Enter webhook URL
4. Select events to subscribe to
5. Set webhook secret
6. Save configuration

### Step 3: Test Webhook

```typescript
// Test webhook delivery
await sdk.webhooks.test(webhookId);
```

---

## Webhook Payload

### Analysis Completed

```json
{
  "event": "analysis.completed",
  "timestamp": "2025-12-01T12:00:00Z",
  "data": {
    "wallet": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    "chainId": "1",
    "analysis": {
      "genomeX": { ... },
      "patterntags": { ... },
      "driftScanner": { ... }
    }
  },
  "signature": "0x..."
}
```

### Anomaly Detected

```json
{
  "event": "anomaly.detected",
  "timestamp": "2025-12-01T12:00:00Z",
  "data": {
    "wallet": "0x...",
    "riskLevel": "high",
    "weight": 15,
    "pValue": 0.95,
    "explanations": [ ... ]
  },
  "signature": "0x..."
}
```

### Policy Violated

```json
{
  "event": "policy.violated",
  "timestamp": "2025-12-01T12:00:00Z",
  "data": {
    "wallet": "0x...",
    "policyDecision": {
      "allowed": false,
      "decision": "block",
      "reason": "High risk actor"
    },
    "attackType": "wallet-drain"
  },
  "signature": "0x..."
}
```

---

## Signature Verification

### HMAC-SHA256

Webhooks are signed using HMAC-SHA256:

```typescript
import crypto from 'crypto';

function verifyWebhook(
  payload: string,
  signature: string,
  secret: string
): boolean {
  const hmac = crypto.createHmac('sha256', secret);
  const calculated = hmac.update(payload).digest('hex');
  return calculated === signature;
}
```

### Python Example

```python
import hmac
import hashlib

def verify_webhook(payload: str, signature: str, secret: str) -> bool:
    calculated = hmac.new(
        secret.encode(),
        payload.encode(),
        hashlib.sha256
    ).hexdigest()
    return calculated == signature
```

---

## Retry Logic

Webhooks are retried on failure:

- **Retry Schedule**: 1s, 5s, 30s, 5m, 30m
- **Max Retries**: 5 attempts
- **Timeout**: 30 seconds per attempt

### Handling Retries

Your endpoint should:
1. Return 200 status for successful processing
2. Return 4xx/5xx for retry
3. Idempotent processing (handle duplicates)

---

## Best Practices

### 1. Verify Signatures

Always verify webhook signatures:

```typescript
app.post('/webhooks', (req, res) => {
  const signature = req.headers['x-blockchaindna-signature'];
  if (!verifyWebhook(JSON.stringify(req.body), signature, secret)) {
    return res.status(401).send('Invalid signature');
  }
  // Process webhook
});
```

### 2. Idempotent Processing

Handle duplicate webhooks:

```typescript
const processedEvents = new Set();

function handleWebhook(event: WebhookEvent) {
  if (processedEvents.has(event.id)) {
    return; // Already processed
  }
  processedEvents.add(event.id);
  // Process event
}
```

### 3. Async Processing

Process webhooks asynchronously:

```typescript
app.post('/webhooks', async (req, res) => {
  // Verify signature
  res.status(200).send('OK'); // Respond immediately
  
  // Process asynchronously
  processWebhookAsync(req.body);
});
```

### 4. Error Handling

Handle errors gracefully:

```typescript
function handleWebhook(event: WebhookEvent) {
  try {
    processEvent(event);
  } catch (error) {
    logError(error);
    // Don't throw - webhook will retry
  }
}
```

---

## Testing

### Test Webhook Locally

Use ngrok or similar:

```bash
# Start local server
npm start

# Expose via ngrok
ngrok http 3000

# Use ngrok URL in dashboard
```

### Webhook Testing Tool

```typescript
// Test webhook delivery
const result = await sdk.webhooks.test(webhookId);
console.log(result.status); // 'delivered' | 'failed'
```

---

## Monitoring

### Webhook Delivery Status

Check webhook delivery in dashboard:
- **Delivered**: Successfully delivered
- **Failed**: Delivery failed
- **Pending**: Retry pending

### Delivery Logs

View delivery logs:
- Timestamp
- Status code
- Response time
- Error messages

---

## Troubleshooting

### Issue: Webhooks Not Received

**Solutions**:
1. Verify webhook URL is publicly accessible
2. Check SSL certificate is valid
3. Verify webhook is active in dashboard
4. Check firewall/proxy settings
5. Review delivery logs

### Issue: Invalid Signature

**Solutions**:
1. Verify webhook secret matches
2. Check signature header name
3. Ensure payload is stringified correctly
4. Verify HMAC algorithm (SHA256)

---

## Related Documentation

- [API Reference](./README.md)
- [Authentication Guide](./authentication.md)
- [Error Handling](./error-handling.md)

---

**Last Updated**: December 2025

