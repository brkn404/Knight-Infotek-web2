# Data Flow Architecture

## Overview

This document describes how data flows through the BlockchainDNA platform from ingestion to analysis and response.

---

## High-Level Data Flow

```
┌─────────────────┐
│  Blockchain     │
│  Transactions   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Data Ingestion │
│  & Collection   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Data Cleaning  │
│  & Validation   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Feature        │
│  Extraction     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Behavioral     │
│  Analysis       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Results        │
│  Storage        │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  API Response   │
│  / Webhook      │
└─────────────────┘
```

---

## Detailed Data Flow

### 1. Data Ingestion

**Input**: Blockchain transactions from nodes/RPC endpoints

**Process**:
- Connect to blockchain nodes
- Monitor new blocks and transactions
- Extract transaction metadata
- Filter relevant transactions

**Output**: Raw transaction data

**Storage**: Temporary buffer → PostgreSQL database

---

### 2. Data Cleaning & Validation

**Input**: Raw transaction data

**Process**:
- Validate transaction format
- Clean and normalize addresses
- Remove duplicates
- Validate timestamps and values
- Filter invalid transactions

**Output**: Cleaned transaction data

**Storage**: PostgreSQL database

---

### 3. Feature Extraction

**Input**: Cleaned transaction data

**Process**:
- Extract behavioral features
- Calculate statistics (volume, frequency, patterns)
- Generate feature vectors
- Cache feature vectors

**Output**: Feature vectors (multi-dimensional)

**Storage**: 
- PostgreSQL database
- Redis cache (configurable TTL)

---

### 4. Behavioral Analysis Pipeline

#### 4.1 GenomeX Analysis

**Input**: Feature vectors

**Process**:
- Generate behavioral genome vector (multi-dimensional)
- Classify behavioral type
- Calculate similarity scores
- Generate behavioral insights

**Output**: Genome vector + behavioral classification

**Storage**: 
- PostgreSQL database
- Redis cache (configurable TTL)

#### 4.2 PatternTags Analysis

**Input**: Behavioral profile + genome vector

**Process**:
- Generate behavioral tags (actor, artifact, action, context)
- Enforce policies
- Detect attack patterns
- Calculate bypass costs

**Output**: Tagged analysis + policy decision

**Storage**: 
- PostgreSQL database
- Redis cache (configurable TTL)

#### 4.3 DriftScanner Analysis

**Input**: Genome vector

**Process**:
- Analyze behavioral patterns
- Detect deviations from normal behavior
- Calculate risk scores
- Classify risk level

**Output**: Anomaly detection result + risk classification

**Storage**: 
- PostgreSQL database
- Redis cache (configurable TTL)

---

### 5. Results Aggregation

**Input**: All analysis results

**Process**:
- Combine results from all modules
- Calculate combined risk score
- Generate recommendations
- Format response

**Output**: Complete analytics result

**Storage**: 
- PostgreSQL database
- Redis cache (configurable TTL)

---

### 6. Response Delivery

**Output Formats**:
- REST API response (JSON)
- WebSocket message
- Webhook notification
- Batch export file

---

## Real-Time vs Batch Processing

### Real-Time Flow

```
Transaction → Immediate Analysis → API Response
(Sub-second latency)
```

### Batch Flow

```
Multiple Transactions → Batch Processing → Bulk Results
(Optimized for throughput)
```

---

## Caching Strategy

### Cache Layers

1. **Redis Cache** (L1)
   - Frequently accessed data
   - Analysis results
   - Feature vectors
   - TTL: 15-30 minutes

2. **Database Cache** (L2)
   - Persistent storage
   - Historical data
   - Long-term cache

3. **Application Cache** (L3)
   - In-memory cache
   - Session data
   - Temporary results

---

## Data Storage

### PostgreSQL Database

- Transaction data storage
- Feature vector storage
- Behavioral analysis results
- Complete analytics cache
- Behavioral tags metadata
- Anomaly detection results

### Redis Cache

- Feature vectors (keyed by wallet and time window)
- Genome vectors (keyed by wallet and time window)
- Complete analytics results (keyed by wallet)
- Behavioral tags (keyed by type and identifier)

---

## Performance Characteristics

### Latency

- **Feature Extraction**: 10-50ms
- **GenomeX Analysis**: 50-200ms
- **PatternTags Analysis**: 5-20ms
- **DriftScanner Analysis**: <1ms
- **Total Pipeline**: 100-300ms (cached), 500-2000ms (uncached)

### Throughput

- **Single Analysis**: 1-10 requests/second
- **Batch Processing**: 100-1000 wallets/second
- **Real-Time**: 1000+ transactions/second

---

## Error Handling

### Error Flow

```
Error Detected → Log Error → Retry Logic → Fallback → Error Response
```

### Retry Strategy

- **Transient Errors**: Exponential backoff (3 retries)
- **Permanent Errors**: Immediate failure
- **Timeout Errors**: Configurable timeout (default: 30s)

---

## Data Privacy & Security

### Data Minimization

- Only store necessary metadata
- No private keys stored
- No full transaction data (only hashes)

### Encryption

- **At Rest**: AES-256 encryption
- **In Transit**: TLS 1.3
- **In Cache**: Encrypted sensitive data

### Access Control

- API key authentication
- Role-based access control
- Audit logging

---

**Last Updated**: December 2025  
**Version**: 2.0

