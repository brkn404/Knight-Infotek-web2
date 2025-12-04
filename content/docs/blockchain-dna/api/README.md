# API Reference

Complete API reference for BlockchainDNA platform.

---

## Base URL

```
Production: https://api.blockchaindna.io
Staging: https://staging-api.blockchaindna.io
```

---

## Authentication

All API requests require authentication via API key:

```http
Authorization: Bearer YOUR_API_KEY
```

### Getting an API Key

1. Sign up at [blockchaindna.io](https://blockchaindna.io)
2. Navigate to **Settings** → **API Keys**
3. Create a new API key
4. Copy and securely store your key

---

## Rate Limits

- **Free Tier**: 100 requests/minute
- **Professional**: 1,000 requests/minute
- **Enterprise**: Custom limits

Rate limit headers:
```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
```

---

## Response Format

### Success Response

```json
{
  "success": true,
  "data": { ... },
  "timestamp": "2025-12-01T12:00:00Z"
}
```

### Error Response

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": { ... }
  },
  "timestamp": "2025-12-01T12:00:00Z"
}
```

---

## Endpoints

### Health & Status

#### GET /health

Check API health status.

**Response**:
```json
{
  "success": true,
  "data": {
    "status": "healthy",
    "version": "2.0.0",
    "timestamp": "2025-12-01T12:00:00Z"
  }
}
```

---

### Blockchain Analysis

#### GET /api/v1/blockchain/wallet/:wallet/summary/:chainId

Get wallet summary.

**Parameters**:
- `wallet` (path): Wallet address
- `chainId` (path): Chain ID (1 = Ethereum, 137 = Polygon, etc.)

**Response**:
```json
{
  "success": true,
  "data": {
    "wallet": "0x...",
    "chainId": "1",
    "totalTransactions": 1234,
    "totalValue": "1000000000000000000",
    "firstSeen": "2024-01-01T00:00:00Z",
    "lastSeen": "2025-12-01T12:00:00Z"
  }
}
```

#### POST /api/v1/blockchain/wallet/:wallet/analyze/:chainId

Analyze wallet behavior.

**Parameters**:
- `wallet` (path): Wallet address
- `chainId` (path): Chain ID

**Request Body**:
```json
{
  "windowType": "30d",
  "includePatternTags": true,
  "includeDriftScanner": true,
  "includeGenID": false
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "wallet": "0x...",
    "genomeX": {
      "behavioralType": "trader",
      "threatLevel": "low",
      "genomeVector": [0.1, 0.2, ...],
      "confidence": 0.95
    },
    "patterntags": {
      "policyDecision": {
        "allowed": true,
        "decision": "allow"
      }
    },
    "driftScanner": {
      "riskLevel": "low",
      "weight": 5,
      "pValue": 0.3
    }
  }
}
```

---

### GenomeX API

#### GET /api/v1/genomex/:wallet/:windowType

Get genome vector for wallet.

**Parameters**:
- `wallet` (path): Wallet address
- `windowType` (path): `7d` | `30d` | `90d`

**Response**:
```json
{
  "success": true,
  "data": {
    "wallet": "0x...",
    "windowType": "30d",
    "genomeVector": [0.1, 0.2, ...],
    "behavioralType": "trader",
    "threatLevel": "low",
    "confidence": 0.95
  }
}
```

#### POST /api/v1/genomex/similarity

Calculate similarity between wallets.

**Request Body**:
```json
{
  "wallet1": "0x...",
  "wallet2": "0x...",
  "windowType": "30d"
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "similarity": 0.85,
    "confidence": 0.9,
    "sharedPatterns": ["high_volume", "defi_interaction"]
  }
}
```

---

### PatternTags API

#### POST /api/v1/patterntags/analyze

Analyze with PatternTags.

**Request Body**:
```json
{
  "walletAddress": "0x...",
  "behavioralResult": { ... }
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "behavioralTags": {
      "actor": { ... },
      "artifact": { ... },
      "action": { ... },
      "context": { ... }
    },
    "policyDecision": {
      "allowed": true,
      "decision": "allow",
      "cost": 0
    },
    "attackType": null
  }
}
```

---

### DriftScanner API

#### POST /api/v1/driftscanner/analyze

Analyze wallet for anomalies.

**Request Body**:
```json
{
  "wallet": "0x...",
  "genomeVector": [0.1, 0.2, ...]
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "wallet": "0x...",
    "riskLevel": "low",
    "deviationScore": 0.2,
    "pValue": 0.3,
    "calibratedScore": 0.2,
    "anomalyIndicators": [],
    "explanations": []
  }
}
```

---

### GenID API

#### GET /api/v1/genid/:identityId

Get identity information.

**Parameters**:
- `identityId` (path): Identity ID

**Response**:
```json
{
  "success": true,
  "data": {
    "identityId": "id-...",
    "entityType": "individual_wallet",
    "primaryAddress": "0x...",
    "verification": {
      "status": "verified",
      "confidence": 0.95
    },
    "crossChainAddresses": {
      "1": ["0x..."],
      "137": ["0x..."]
    }
  }
}
```

#### POST /api/v1/genid/create

Create new identity.

**Request Body**:
```json
{
  "entityType": "individual_wallet",
  "primaryAddress": "0x...",
  "metadata": {
    "name": "John Doe"
  }
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "identityId": "id-...",
    "passport": { ... }
  }
}
```

---

## Error Codes

| Code | Description |
|------|-------------|
| `INVALID_API_KEY` | API key is invalid or expired |
| `RATE_LIMIT_EXCEEDED` | Rate limit exceeded |
| `INVALID_WALLET` | Invalid wallet address format |
| `INSUFFICIENT_DATA` | Not enough transaction data |
| `ANALYSIS_FAILED` | Analysis processing failed |
| `SERVICE_UNAVAILABLE` | Service temporarily unavailable |
| `DATABASE_ERROR` | Database operation failed |
| `VALIDATION_ERROR` | Request validation failed |

---

## Pagination

List endpoints support pagination:

**Query Parameters**:
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 20, max: 100)

**Response**:
```json
{
  "success": true,
  "data": {
    "items": [ ... ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 100,
      "totalPages": 5
    }
  }
}
```

---

## Webhooks

Configure webhooks for real-time notifications:

**Webhook Events**:
- `analysis.completed`
- `anomaly.detected`
- `identity.verified`
- `policy.violated`

**Webhook Payload**:
```json
{
  "event": "analysis.completed",
  "timestamp": "2025-12-01T12:00:00Z",
  "data": { ... }
}
```

---

## SDK Usage

### TypeScript/JavaScript

```typescript
import { BlockchainDNA } from '@blockchaindna/sdk';

const sdk = new BlockchainDNA({
  apiKey: 'your-api-key',
  baseURL: 'https://api.blockchaindna.io'
});

const result = await sdk.blockchain.analyzeWallet(
  '0x...',
  '1'
);
```

### Python

```python
from blockchaindna import BlockchainDNA

sdk = BlockchainDNA(
    api_key='your-api-key',
    base_url='https://api.blockchaindna.io'
)

result = sdk.blockchain.analyze_wallet(
    wallet='0x...',
    chain_id='1'
)
```

---

## Related Documentation

- [Authentication Guide](./authentication.md)
- [SDK Documentation](./sdk.md)
- [Webhooks Guide](./webhooks.md)
- [Error Handling](./error-handling.md)

---

**Last Updated**: December 2025  
**Version**: 2.0

