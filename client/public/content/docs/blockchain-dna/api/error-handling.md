# Error Handling Guide

Complete guide to handling errors in BlockchainDNA API.

---

## Error Response Format

All errors follow a consistent format:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": {
      "field": "additional context"
    }
  },
  "timestamp": "2025-12-01T12:00:00Z"
}
```

---

## HTTP Status Codes

| Code | Meaning | Description |
|------|---------|-------------|
| 200 | OK | Request successful |
| 201 | Created | Resource created |
| 400 | Bad Request | Invalid request format |
| 401 | Unauthorized | Authentication failed |
| 403 | Forbidden | Insufficient permissions |
| 404 | Not Found | Resource not found |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Server error |
| 502 | Bad Gateway | Gateway error |
| 503 | Service Unavailable | Service temporarily unavailable |
| 504 | Gateway Timeout | Request timeout |

---

## Error Codes

### Authentication Errors

| Code | Description | Solution |
|------|-------------|----------|
| `INVALID_API_KEY` | API key is invalid or expired | Verify API key, check expiration |
| `MISSING_API_KEY` | API key not provided | Include Authorization header |
| `INSUFFICIENT_PERMISSIONS` | API key lacks required permissions | Check permissions, upgrade plan |

### Validation Errors

| Code | Description | Solution |
|------|-------------|----------|
| `INVALID_WALLET` | Invalid wallet address format | Verify address format (0x... for EVM) |
| `INVALID_CHAIN_ID` | Invalid chain ID | Use supported chain ID |
| `VALIDATION_ERROR` | Request validation failed | Check request format, required fields |

### Data Errors

| Code | Description | Solution |
|------|-------------|----------|
| `INSUFFICIENT_DATA` | Not enough transaction data | Ensure wallet has sufficient history |
| `DATA_NOT_FOUND` | Requested data not found | Verify wallet/identity exists |
| `ANALYSIS_FAILED` | Analysis processing failed | Retry request, check data quality |

### Service Errors

| Code | Description | Solution |
|------|-------------|----------|
| `SERVICE_UNAVAILABLE` | Service temporarily unavailable | Retry with exponential backoff |
| `DATABASE_ERROR` | Database operation failed | Retry request, contact support |
| `RATE_LIMIT_EXCEEDED` | Rate limit exceeded | Wait for reset, upgrade plan |

---

## Error Handling Patterns

### TypeScript/JavaScript

```typescript
import { APIError, NetworkError, ValidationError } from '@blockchaindna/sdk';

try {
  const result = await sdk.blockchain.analyzeWallet(walletAddress);
} catch (error) {
  if (error instanceof APIError) {
    switch (error.code) {
      case 'INVALID_API_KEY':
        console.error('API key is invalid');
        // Handle invalid API key
        break;
      case 'RATE_LIMIT_EXCEEDED':
        console.error('Rate limit exceeded');
        // Implement exponential backoff
        await waitForRateLimit(error.retryAfter);
        break;
      case 'INSUFFICIENT_DATA':
        console.error('Not enough data');
        // Handle insufficient data
        break;
      default:
        console.error('API Error:', error.message);
    }
  } else if (error instanceof NetworkError) {
    console.error('Network error:', error.message);
    // Handle network issues
  } else if (error instanceof ValidationError) {
    console.error('Validation error:', error.message);
    // Handle validation errors
  } else {
    console.error('Unknown error:', error);
  }
}
```

### Python

```python
from blockchaindna import APIError, NetworkError, ValidationError

try:
    result = sdk.blockchain.analyze_wallet(wallet_address)
except APIError as e:
    if e.code == 'INVALID_API_KEY':
        print('API key is invalid')
    elif e.code == 'RATE_LIMIT_EXCEEDED':
        print('Rate limit exceeded')
        time.sleep(e.retry_after)
    else:
        print(f'API Error: {e.message}')
except NetworkError as e:
    print(f'Network error: {e.message}')
except ValidationError as e:
    print(f'Validation error: {e.message}')
except Exception as e:
    print(f'Unknown error: {e}')
```

---

## Retry Strategies

### Exponential Backoff

```typescript
async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3
): Promise<T> {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (error.code === 'RATE_LIMIT_EXCEEDED' || error.code === 'SERVICE_UNAVAILABLE') {
        const delay = Math.min(1000 * Math.pow(2, i), 30000);
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      throw error;
    }
  }
  throw new Error('Max retries exceeded');
}
```

### Circuit Breaker

```typescript
class CircuitBreaker {
  private failures = 0;
  private state: 'closed' | 'open' | 'half-open' = 'closed';
  
  async execute<T>(fn: () => Promise<T>): Promise<T> {
    if (this.state === 'open') {
      throw new Error('Circuit breaker is open');
    }
    
    try {
      const result = await fn();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }
  
  private onSuccess() {
    this.failures = 0;
    this.state = 'closed';
  }
  
  private onFailure() {
    this.failures++;
    if (this.failures >= 5) {
      this.state = 'open';
      setTimeout(() => {
        this.state = 'half-open';
      }, 60000);
    }
  }
}
```

---

## Common Error Scenarios

### Rate Limit Exceeded

```typescript
try {
  const result = await sdk.blockchain.analyzeWallet(walletAddress);
} catch (error) {
  if (error.code === 'RATE_LIMIT_EXCEEDED') {
    const retryAfter = error.retryAfter || 60; // seconds
    console.log(`Rate limit exceeded. Retry after ${retryAfter} seconds`);
    await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
    // Retry request
  }
}
```

### Insufficient Data

```typescript
try {
  const result = await sdk.blockchain.analyzeWallet(walletAddress);
} catch (error) {
  if (error.code === 'INSUFFICIENT_DATA') {
    console.log('Wallet has insufficient transaction history');
    // Handle gracefully - maybe use default values or skip analysis
  }
}
```

### Service Unavailable

```typescript
try {
  const result = await sdk.blockchain.analyzeWallet(walletAddress);
} catch (error) {
  if (error.code === 'SERVICE_UNAVAILABLE') {
    // Implement retry with exponential backoff
    await retryWithBackoff(() => 
      sdk.blockchain.analyzeWallet(walletAddress)
    );
  }
}
```

---

## Error Logging

### Structured Logging

```typescript
import { logger } from '@blockchaindna/sdk';

try {
  const result = await sdk.blockchain.analyzeWallet(walletAddress);
} catch (error) {
  logger.error('Analysis failed', {
    wallet: walletAddress,
    error: error.code,
    message: error.message,
    stack: error.stack
  });
}
```

---

## Best Practices

1. **Always Handle Errors**: Never ignore errors
2. **Use Specific Error Types**: Check error codes for specific handling
3. **Implement Retries**: Use exponential backoff for transient errors
4. **Log Errors**: Log errors for debugging and monitoring
5. **User-Friendly Messages**: Provide clear error messages to users
6. **Graceful Degradation**: Handle errors without breaking user experience

---

## Related Documentation

- [API Reference](./README.md)
- [SDK Documentation](./sdk.md)
- [Troubleshooting Guide](../troubleshooting/)

---

**Last Updated**: December 2025

