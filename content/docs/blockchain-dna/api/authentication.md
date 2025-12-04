# Authentication Guide

Complete guide to authenticating with BlockchainDNA API.

---

## API Key Authentication

All API requests require an API key in the `Authorization` header.

### Header Format

```http
Authorization: Bearer YOUR_API_KEY
```

### Example Request

```bash
curl -X GET "https://api.blockchaindna.io/api/v1/health" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

---

## Getting an API Key

### Step 1: Create Account

1. Visit [blockchaindna.io/signup](https://blockchaindna.io/signup)
2. Complete registration
3. Verify your email address

### Step 2: Generate API Key

1. Log in to dashboard
2. Navigate to **Settings** → **API Keys**
3. Click **Create New API Key**
4. Name your key (e.g., "Production API Key")
5. Copy your API key immediately
   - ⚠️ **Important**: API keys are only shown once
   - Store securely (password manager recommended)

### Step 3: Set Permissions

Configure API key permissions:
- **Read**: Read-only access
- **Write**: Create and update operations
- **Admin**: Full access (use with caution)

---

## Using API Keys

### TypeScript/JavaScript

```typescript
import { BlockchainDNA } from '@blockchaindna/sdk';

const sdk = new BlockchainDNA({
  apiKey: process.env.BLOCKCHAINDNA_API_KEY,
  baseURL: 'https://api.blockchaindna.io'
});
```

### Python

```python
from blockchaindna import BlockchainDNA
import os

sdk = BlockchainDNA(
    api_key=os.getenv('BLOCKCHAINDNA_API_KEY'),
    base_url='https://api.blockchaindna.io'
)
```

### cURL

```bash
curl -X GET "https://api.blockchaindna.io/api/v1/health" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### HTTP Client (Postman, Insomnia)

1. Set request type to `GET`
2. Add header:
   - Key: `Authorization`
   - Value: `Bearer YOUR_API_KEY`

---

## API Key Security

### Best Practices

1. **Never Commit Keys**: Never commit API keys to version control
2. **Use Environment Variables**: Store keys in environment variables
3. **Rotate Regularly**: Rotate API keys periodically
4. **Limit Permissions**: Use minimum required permissions
5. **Monitor Usage**: Regularly review API key usage

### Environment Variables

**Node.js**:
```bash
# .env file
BLOCKCHAINDNA_API_KEY=your_api_key_here
```

```typescript
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.BLOCKCHAINDNA_API_KEY;
```

**Python**:
```bash
# .env file
BLOCKCHAINDNA_API_KEY=your_api_key_here
```

```python
from dotenv import load_dotenv
import os

load_dotenv()
api_key = os.getenv('BLOCKCHAINDNA_API_KEY')
```

---

## Key Management

### Viewing Keys

1. Navigate to **Settings** → **API Keys**
2. View all active keys
3. See last used timestamp
4. View usage statistics

### Revoking Keys

1. Navigate to **Settings** → **API Keys**
2. Find the key to revoke
3. Click **Revoke**
4. Confirm revocation

⚠️ **Warning**: Revoking a key immediately invalidates it. Update all applications using that key.

### Rotating Keys

1. Generate a new API key
2. Update all applications to use new key
3. Test new key works correctly
4. Revoke old key

---

## Error Responses

### Invalid API Key

```json
{
  "success": false,
  "error": {
    "code": "INVALID_API_KEY",
    "message": "API key is invalid or expired"
  }
}
```

**HTTP Status**: `401 Unauthorized`

### Missing API Key

```json
{
  "success": false,
  "error": {
    "code": "MISSING_API_KEY",
    "message": "API key is required"
  }
}
```

**HTTP Status**: `401 Unauthorized`

### Insufficient Permissions

```json
{
  "success": false,
  "error": {
    "code": "INSUFFICIENT_PERMISSIONS",
    "message": "API key does not have required permissions"
  }
}
```

**HTTP Status**: `403 Forbidden`

---

## Testing Authentication

### Health Check

Test your API key with health endpoint:

```bash
curl -X GET "https://api.blockchaindna.io/api/v1/health" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Expected Response**:
```json
{
  "success": true,
  "data": {
    "status": "healthy"
  }
}
```

---

## Multi-Factor Authentication (MFA)

Enterprise plans support MFA for additional security:

1. Enable MFA in dashboard settings
2. Use authenticator app to scan QR code
3. Enter MFA code when authenticating
4. API requests require MFA token in header

**MFA Header**:
```http
X-MFA-Token: 123456
```

---

## IP Whitelisting

Enterprise plans support IP whitelisting:

1. Configure allowed IP addresses in dashboard
2. API requests from non-whitelisted IPs are rejected
3. Useful for additional security layer

---

## Rate Limits

Rate limits are applied per API key:

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

## Troubleshooting

### Issue: "Invalid API Key"

**Solutions**:
1. Verify API key is correct (no extra spaces)
2. Check API key hasn't expired
3. Verify API key hasn't been revoked
4. Ensure `Bearer` prefix is included

### Issue: "Missing API Key"

**Solutions**:
1. Verify `Authorization` header is included
2. Check header format: `Bearer YOUR_API_KEY`
3. Ensure no typos in header name

### Issue: "Insufficient Permissions"

**Solutions**:
1. Check API key permissions in dashboard
2. Verify required permissions for endpoint
3. Contact support to upgrade permissions

---

## Support

- **Email**: support@blockchaindna.io
- **Documentation**: [Full API Docs](./README.md)
- **Status**: [status.blockchaindna.io](https://status.blockchaindna.io)

---

**Last Updated**: December 2025

