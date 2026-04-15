# Frequently Asked Questions (FAQs)

Find answers to common questions about BlockchainDNA products and services.

---

## Product Questions

### What is BlockchainDNA?

BlockchainDNA is a comprehensive behavioral intelligence and compliance platform for blockchain ecosystems. It provides real-time analysis, anomaly detection, and identity management for blockchain transactions and wallets.

### What are the core products?

- **GenomeX**: Behavioral intelligence engine that generates unique "DNA" profiles for wallets
- **PatternTags**: Behavioral integrity system that tags and enforces policies on blockchain actors
- **DriftScanner**: Anomaly detection system using quantum-inspired syndrome detection
- **GenID**: Universal identity management system for blockchain entities

### What blockchain networks are supported?

BlockchainDNA supports:
- Ethereum and all EVM-compatible chains
- Bitcoin network
- Multi-chain support via Chainlink CCIP
- Additional chains can be added via configuration

### Is BlockchainDNA open source?

Core components are proprietary, but we provide comprehensive APIs, SDKs, and integration tools for developers.

---

## Technical Questions

### How does GenomeX work?

GenomeX extracts behavioral features from transaction data and generates a multi-dimensional "genome vector" that uniquely identifies wallet behavior patterns. This enables similarity matching, clustering, and behavioral classification.

### What is PatternTags?

PatternTags is a behavioral integrity system inspired by Apple's Memory Integrity Engine. It tags actors, artifacts, actions, and contexts with behavioral metadata and enforces policies in real-time to prevent unauthorized actions.

### How does DriftScanner detect anomalies?

DriftScanner uses advanced anomaly detection algorithms. It analyzes behavioral genome vectors and compares them against established patterns. Deviations from normal behavior are flagged as anomalies with risk classifications.

### What is the performance of the system?

- **GenomeX**: Processes wallets in milliseconds
- **PatternTags**: Real-time tagging with <5ms latency
- **DriftScanner**: Sub-millisecond anomaly detection
- **Batch Processing**: 1000+ wallets per second

### Do you support real-time analysis?

Yes, BlockchainDNA supports both real-time and batch analysis. Real-time analysis is available via WebSocket connections and REST API endpoints.

---

## API & Integration Questions

### How do I get started with the API?

1. Sign up for an account
2. Generate an API key from the dashboard
3. Use our SDK or make direct API calls
4. Review our API documentation for details

### What SDKs are available?

We provide a unified TypeScript/JavaScript SDK that supports all BlockchainDNA modules. Additional language support is available on request.

### How do I authenticate API requests?

Use API key authentication. Include your API key in the `Authorization` header:
```
Authorization: Bearer YOUR_API_KEY
```

### What rate limits apply?

Rate limits vary by plan:
- **Free Tier**: 100 requests/minute
- **Professional**: 1,000 requests/minute
- **Enterprise**: Custom limits

### Can I use webhooks?

Yes, webhooks are supported for real-time notifications. Configure webhook endpoints in your dashboard settings.

---

## Data & Privacy Questions

### What data do you store?

We store:
- Transaction metadata (hashes, timestamps, values)
- Behavioral analysis results
- Identity attestations
- Configuration and settings

We do NOT store:
- Private keys
- Full transaction data (only metadata)
- Personal identifying information (unless provided for identity verification)

### How is data secured?

- Encryption at rest (AES-256)
- Encryption in transit (TLS 1.3)
- Secure key management
- Regular security audits
- Compliance with data protection regulations

### Can I self-host BlockchainDNA?

Enterprise plans support self-hosted deployments. Contact sales for details.

### Do you comply with GDPR?

Yes, BlockchainDNA is GDPR compliant. We provide data export and deletion capabilities.

---

## Billing & Support Questions

### What pricing plans are available?

- **Free Tier**: Limited features, perfect for testing
- **Professional**: Full features, usage-based pricing
- **Enterprise**: Custom pricing, dedicated support, SLA guarantees

### How is usage billed?

Usage is billed based on:
- Number of wallets analyzed
- API requests
- Storage used
- Advanced features enabled

### What support options are available?

- **Free Tier**: Community support, documentation
- **Professional**: Email support, business hours
- **Enterprise**: 24/7 support, dedicated account manager, SLA

### How do I contact support?

- **Email**: support@blockchaindna.io
- **Support**: Contact our support team for assistance

---

## Troubleshooting Questions

### Why is my API request failing?

Common causes:
- Invalid API key
- Rate limit exceeded
- Invalid request format
- Service temporarily unavailable

Check the error response for specific details. Contact support if you need additional assistance.

### Why is analysis slow?

Possible causes:
- Large batch size
- Network latency
- Database load
- Cache misses

Try:
- Reducing batch size
- Using caching
- Checking service status
- Contacting support if issues persist

### How do I debug integration issues?

1. Check API response codes and error messages
2. Verify API key is valid
3. Review request/response logs
4. Test with our SDK examples
5. Contact support for detailed troubleshooting assistance

---

## Feature-Specific Questions

### How do I enable PatternTags?

PatternTags is enabled by default in API requests. Include `includePatternTagsProtection: true` in your request options.

### Can I customize risk thresholds?

Yes, risk thresholds can be customized via API configuration or dashboard settings (Enterprise plans).

### How do I integrate with Chainlink?

Chainlink integration is supported. Contact support for detailed integration instructions.

### Can I analyze historical data?

Yes, you can analyze historical transaction data. Use the batch processing API or import historical data via our data ingestion endpoints.

---

## Still Have Questions?

- **Support**: Contact support@blockchaindna.io for assistance
- **Documentation**: Contact support to access our documentation

---

**Last Updated**: December 2025  
**Version**: 2.0

