# ChainGuardian Technical FAQs

**Technical Questions & Answers**

---

## Architecture & Design

### What is the system architecture?

ChainGuardian uses a modular architecture:
- **Transaction Parser**: Extracts content from transactions
- **Content Analyzer**: Analyzes file types and patterns
- **Hash Verification**: Generates and matches hashes
- **Risk Scoring**: Calculates multi-factor risk scores
- **GenomeX Integration**: Behavioral intelligence enhancement
- **Compliance Engine**: Jurisdiction-specific compliance

See [Architecture Diagram](../ARCHITECTURE_DIAGRAM.md) for details.

### How does the transaction parsing work?

ChainGuardian parses Bitcoin transactions to extract:
1. **OP_RETURN outputs**: Up to 80 bytes per output
2. **Witness data**: SegWit and Taproot witness scripts
3. **Ordinals**: Ordinals protocol inscriptions

Parsing is performed in <5ms per transaction.

### What algorithms does ChainGuardian use?

- **Hash Algorithm**: SHA-256 for content hashing
- **Risk Scoring**: Weighted multi-factor algorithm
- **Behavioral Analysis**: Behavioral genome hashing
- **Pattern Matching**: Signature-based pattern detection

---

## Content Detection

### How does file type detection work?

ChainGuardian uses **magic number detection**:
- Reads file signatures (first bytes)
- Matches against known file type signatures
- Provides confidence scores (0-1)
- Supports 20+ file types

### What patterns can ChainGuardian detect?

ChainGuardian detects:
- **Encryption patterns**: Encrypted content detection
- **Obfuscation**: Code obfuscation patterns
- **Spam patterns**: Spam content patterns
- **Suspicious encoding**: Unusual encoding methods
- **Coordinated attacks**: Multiple coordinated embeddings

### How does hash matching work?

1. Generate SHA-256 hash of content
2. Query threat intelligence databases
3. Match against known problematic content hashes
4. Return match results with confidence scores

**No actual content is viewed** - only hash comparison.

---

## Risk Scoring

### How is risk score calculated?

Risk score uses a weighted multi-factor algorithm considering:
- Content Type
- Patterns (encryption, obfuscation, spam)
- Signatures (threat intelligence matches)
- Size (unusual file sizes)
- Context (multiple embeddings, coordination)

Final score: 0-100, mapped to risk levels.

**Note**: Specific weights and calculation formulas are proprietary and optimized for accuracy.

### What are the risk level thresholds?

- **LOW**: 0-25 (Allow transaction)
- **MEDIUM**: 25-50 (Flag for review)
- **HIGH**: 50-75 (Block transaction)
- **CRITICAL**: 75-100 (Block and report)

Thresholds are configurable.

### How accurate is risk scoring?

Risk scoring accuracy:
- **False Positive Rate**: <5% (configurable)
- **False Negative Rate**: <1% (for critical content)
- **Confidence Scores**: Provided with each assessment

---

## GenomeX Integration

### How does BTE tagging work?

BTE creates content integrity tags:
1. Analyze content risk level
2. Create artifact tag (SAFE/WARNING/BLOCKED/VERIFIED)
3. Apply temporal expiration
4. Enforce policies synchronously

Tagging occurs in <1ms.

### What is behavioral genome hashing?

Behavioral genome hashing:
1. Extract 15 behavioral features from transactions
2. Generate 32D feature vector
3. Create SHA-256 genome hash
4. Link to previous genome (chain-based)

Provides persistent behavioral fingerprinting.

### How does QSBA anomaly detection work?

QSBA uses quantum-inspired anomaly detection:
- **64-bit Syndrome**: LDPC matrix with 64 stabilizers
- **32D Feature Vector**: Checks 32 behavioral dimensions
- **Anomaly Detection**: Detects behavioral deviations
- **Explainable Reasons**: Dictionary-based explanations

---

## API & Integration

### What API endpoints are available?

**Analysis**:
- `POST /api/v1/analyze` - Analyze transaction
- `GET /api/v1/analysis/:id` - Get analysis result
- `POST /api/v1/batch-analyze` - Batch analysis

**Compliance**:
- `GET /api/v1/compliance/status` - Compliance status
- `POST /api/v1/compliance/report` - Generate report

**Threat Intelligence**:
- `POST /api/v1/threat-intelligence/query` - Query database

### What is the API response format?

```json
{
  "analysisId": "string",
  "decision": {
    "allowed": boolean,
    "riskLevel": "LOW|MEDIUM|HIGH|CRITICAL",
    "contentTag": "SAFE|WARNING|BLOCKED|VERIFIED"
  },
  "contentAnalysis": {...},
  "complianceStatus": {...}
}
```

### How do I integrate ChainGuardian with my application?

Integration options:
1. **RESTful API**: HTTP/HTTPS requests
2. **WebSocket**: Real-time transaction monitoring
3. **SDK**: TypeScript/JavaScript SDK (coming soon)
4. **Direct Integration**: npm package installation

---

## Performance

### What is the processing latency?

- **Total Processing**: <100ms per transaction
- **OP_RETURN Extraction**: <5ms
- **Content Analysis**: <20ms
- **Hash Generation**: <10ms
- **Risk Scoring**: <15ms
- **BTE Tagging**: <1ms

### How many transactions can be processed?

- **Single Instance**: 1,000+ transactions/second
- **Distributed**: 10,000+ transactions/second
- **Mining Pool Scale**: Full mempool monitoring

### What are the resource requirements?

**Minimum**:
- CPU: 2 cores
- RAM: 4GB
- Storage: 10GB

**Recommended**:
- CPU: 4+ cores
- RAM: 8GB+
- Storage: 50GB+

---

## Security

### How is data secured?

- **Encryption**: Encrypted threat intelligence databases
- **Access Control**: Role-based access control (RBAC)
- **API Security**: HTTPS/TLS for all endpoints
- **Key Management**: Secure key management
- **Audit Trails**: Complete transaction logging

### Does ChainGuardian view actual content?

**No**. ChainGuardian uses hash-only verification:
- Generates SHA-256 hash
- Compares hash against databases
- Never views or stores actual content

### How are threat intelligence databases secured?

- Encrypted storage
- Access control
- Version tracking
- Secure updates
- Audit logging

---

## Compliance

### How does jurisdiction compliance work?

ChainGuardian enforces jurisdiction-specific rules:
1. Determine transaction jurisdiction
2. Apply jurisdiction rules
3. Check reporting requirements
4. Generate compliance reports
5. Submit to appropriate authorities

### What data is reported to authorities?

Reported data includes:
- Content hash (SHA-256)
- Transaction metadata
- Risk assessment
- Compliance status

**No actual content is reported**.

### How long is data retained?

Retention periods:
- **US**: 7 years
- **EU**: 3 years (GDPR)
- **UK**: 5 years

Configurable per jurisdiction.

---

## Troubleshooting

### Why is a transaction taking longer than 100ms?

Possible causes:
- Large content size
- Complex pattern matching
- External threat intelligence query delays
- High system load

Solutions:
- Optimize content size
- Cache threat intelligence
- Scale horizontally
- Monitor system resources

### How do I debug a filtering decision?

Debug information includes:
- Risk score breakdown
- Risk factors
- Content analysis details
- Behavioral context (if available)
- Compliance status

Available in API response and logs.

### What if threat intelligence is unavailable?

ChainGuardian continues to operate:
- Uses local signature database
- Falls back to pattern-based detection
- Logs unavailable intelligence
- Retries automatically

---

## Development

### What programming language is ChainGuardian written in?

ChainGuardian is written in **TypeScript/Node.js**:
- TypeScript for type safety
- Node.js 20+ runtime
- ES2022 standard

### Is ChainGuardian open source?

Yes. ChainGuardian has an open source version:
- Basic content filtering
- Community support
- GitHub repository

Commercial features available in Pro/Enterprise tiers.

### How do I contribute?

Contributions welcome:
- GitHub: Submit pull requests
- Issues: Report bugs and feature requests
- Documentation: Improve documentation
- Testing: Test and provide feedback

---

**Last Updated**: January 2025  
**Version**: 1.0

