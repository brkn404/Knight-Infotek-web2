# Hash Verification Process

**Knowledge Base Article**

---

## Overview

ChainGuardian uses hash-only verification to analyze content without ever viewing it. This article explains how hash verification works and why it's privacy-preserving.

---

## How Hash Verification Works

### Step 1: Content Extraction

Content is extracted from Bitcoin transactions:
- OP_RETURN data
- Witness data
- Ordinals inscriptions

### Step 2: Hash Generation

SHA-256 hash is generated from content:

```typescript
const content = "extracted content bytes";
const hash = sha256(content);
// Example: "a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456"
```

### Step 3: Threat Intelligence Matching

Hash is compared against threat intelligence databases:
- Known illegal content hashes
- Signature databases
- External threat feeds

### Step 4: Decision Making

Decision is made based on hash matches:
- **Match Found**: Content is flagged
- **No Match**: Content is analyzed further
- **Partial Match**: Additional analysis performed

---

## Privacy Guarantees

### What ChainGuardian Never Does

- ❌ Views actual content
- ❌ Stores content
- ❌ Decrypts content
- ❌ Displays content

### What ChainGuardian Does

- ✅ Generates SHA-256 hashes
- ✅ Compares hashes against databases
- ✅ Makes decisions based on hash matches
- ✅ Stores only hashes and metadata

---

## Threat Intelligence Databases

### Database Types

1. **Known Illegal Content**
   - Illegal content hash databases
   - Threat intelligence feeds
   - Law enforcement databases

2. **Signature Databases**
   - File signature databases
   - Pattern signature databases
   - Behavioral signature databases

3. **External Feeds**
   - Law enforcement feeds
   - Security vendor feeds
   - Community-maintained lists

**Note**: Specific database sources, structures, and integration methods are proprietary.

### Database Updates

- **Automatic Updates**: Regular updates from feeds
- **Manual Updates**: Custom signature additions
- **Version Tracking**: All updates tracked
- **Source Attribution**: Database sources tracked

---

## Hash Matching Methods

### Exact Match

Exact SHA-256 hash match:
- **Accuracy**: 100%
- **False Positives**: 0%
- **Use Case**: Known illegal content

### Partial Match

Partial hash matching for content variants:
- **High Accuracy**: Detects content variants effectively
- **Low False Positives**: Optimized to minimize false positives
- **Use Case**: Content variants and modified content

**Note**: Specific partial matching algorithms and threshold values are proprietary.

### Fuzzy Matching

Similar content detection for obfuscated content:
- **High Accuracy**: Detects similar content effectively
- **Optimized False Positive Rate**: Balanced for accuracy
- **Use Case**: Obfuscated content and content modifications

**Note**: Specific fuzzy matching algorithms and implementation details are proprietary.

---

## Performance

### Hash Generation

- **Speed**: <10ms per content item
- **Throughput**: 10,000+ hashes/second
- **Algorithm**: SHA-256

### Database Queries

- **Local Database**: <1ms
- **External Queries**: <50ms
- **Caching**: Frequently used hashes cached

---

## Security

### Cryptographic Security

- **Algorithm**: SHA-256 (NIST approved)
- **Collision Resistance**: 2^128 operations
- **Preimage Resistance**: 2^256 operations

### Database Security

- **Encryption**: Encrypted threat databases
- **Access Control**: Role-based access
- **Audit Logging**: All queries logged

---

## Related Articles

- [Content Detection](./CONTENT_DETECTION.md)
- [Risk Scoring](./RISK_SCORING.md)
- [Threat Intelligence](./THREAT_INTELLIGENCE.md)

---

**Last Updated**: January 2025  
**Version**: 1.0

