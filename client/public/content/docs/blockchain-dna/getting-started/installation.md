# Installation Guide

Complete installation guide for BlockchainDNA SDK and services.

---

## SDK Installation

### Node.js/TypeScript

#### Using npm

```bash
npm install @blockchaindna/sdk
```

#### Using yarn

```bash
yarn add @blockchaindna/sdk
```

#### Using pnpm

```bash
pnpm add @blockchaindna/sdk
```

### Python

#### Using pip

```bash
pip install blockchaindna-sdk
```

#### Using pipenv

```bash
pipenv install blockchaindna-sdk
```

#### Using poetry

```bash
poetry add blockchaindna-sdk
```

---

## TypeScript Configuration

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

---

## Python Requirements

### requirements.txt

```
blockchaindna-sdk>=1.0.0
requests>=2.28.0
python-dotenv>=0.19.0
```

---

## Environment Setup

### Node.js

Create `.env` file:

```bash
BLOCKCHAINDNA_API_KEY=your_api_key_here
BLOCKCHAINDNA_BASE_URL=https://api.blockchaindna.io
BLOCKCHAINDNA_TIMEOUT=30000
```

Load with dotenv:

```typescript
import dotenv from 'dotenv';
dotenv.config();
```

### Python

Create `.env` file:

```bash
BLOCKCHAINDNA_API_KEY=your_api_key_here
BLOCKCHAINDNA_BASE_URL=https://api.blockchaindna.io
BLOCKCHAINDNA_TIMEOUT=30
```

Load with python-dotenv:

```python
from dotenv import load_dotenv
import os

load_dotenv()
api_key = os.getenv('BLOCKCHAINDNA_API_KEY')
```

---

## Verification

### Test Installation

```typescript
// TypeScript
import { BlockchainDNA } from '@blockchaindna/sdk';

const sdk = new BlockchainDNA({
  apiKey: process.env.BLOCKCHAINDNA_API_KEY!
});

// Test connection
sdk.health().then(health => {
  console.log('✅ SDK installed correctly');
  console.log('Status:', health.status);
}).catch(error => {
  console.error('❌ Installation issue:', error);
});
```

```python
# Python
from blockchaindna import BlockchainDNA

sdk = BlockchainDNA(api_key=os.getenv('BLOCKCHAINDNA_API_KEY'))

# Test connection
try:
    health = sdk.health()
    print('✅ SDK installed correctly')
    print(f'Status: {health["status"]}')
except Exception as e:
    print(f'❌ Installation issue: {e}')
```

---

## Self-Hosted Installation

### Docker

```bash
docker pull blockchaindna/api:latest
docker run -d \
  -p 8080:8080 \
  -e DATABASE_URL=postgresql://user:pass@host:5432/db \
  -e REDIS_URL=redis://host:6379 \
  blockchaindna/api:latest
```

### Kubernetes

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: blockchaindna-api
spec:
  replicas: 3
  selector:
    matchLabels:
      app: blockchaindna-api
  template:
    metadata:
      labels:
        app: blockchaindna-api
    spec:
      containers:
      - name: api
        image: blockchaindna/api:latest
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: blockchaindna-secrets
              key: database-url
        ports:
        - containerPort: 8080
```

---

## System Requirements

### Minimum Requirements

- **CPU**: 2 cores
- **RAM**: 4GB
- **Storage**: 20GB
- **Network**: 10 Mbps

### Recommended Requirements

- **CPU**: 4+ cores
- **RAM**: 8GB+
- **Storage**: 100GB+ SSD
- **Network**: 100 Mbps+

---

## Troubleshooting Installation

### Common Issues

**Issue**: `Module not found` error

**Solution**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue**: TypeScript type errors

**Solution**:
```bash
# Install type definitions
npm install --save-dev @types/node
```

**Issue**: Python import errors

**Solution**:
```bash
# Verify virtual environment
python -m venv venv
source venv/bin/activate  # Linux/Mac
# or
venv\Scripts\activate  # Windows
pip install blockchaindna-sdk
```

---

## Next Steps

- [Quick Start Guide](./quick-start.md)
- [Configuration Guide](./configuration.md)
- [API Documentation](../api/README.md)

---

**Last Updated**: December 2025

