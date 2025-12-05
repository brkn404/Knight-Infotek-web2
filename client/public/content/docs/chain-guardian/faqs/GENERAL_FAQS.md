# ChainGuardian General FAQs

**Frequently Asked Questions**

---

## Product Overview

### What is ChainGuardian?

ChainGuardian is an AI-powered content compliance system that detects and filters illegal or problematic content embedded in Bitcoin transactions **before blocks are mined**. It protects miners, mining pools, and node operators from legal liability while ensuring regulatory compliance.

### What problem does ChainGuardian solve?

Bitcoin miners face legal liability when mining blocks containing illegal content. ChainGuardian solves this by filtering content **before** blocks are assembled and mined, protecting miners from criminal and civil liability.

### How is ChainGuardian different from blockchain analytics tools?

ChainGuardian is the **only product** focused on **pre-mining content filtering**. Unlike blockchain analytics tools (Chainalysis, Elliptic) that analyze transactions after they're mined, ChainGuardian filters content before blocks are assembled.

### Who should use ChainGuardian?

- **Bitcoin Miners**: Individual mining operations
- **Mining Pools**: Pool operators protecting all members
- **Exchanges**: Regulatory compliance for transaction screening
- **Node Operators**: Legally compliant node operations

---

## Technical Questions

### How does ChainGuardian detect content?

ChainGuardian extracts embedded content from:
- **OP_RETURN outputs**: Up to 80 bytes per transaction
- **Witness data**: SegWit and Taproot witness scripts
- **Ordinals**: Ordinals protocol inscriptions

### What file types can ChainGuardian detect?

ChainGuardian detects 20+ file types including:
- **Images**: JPEG, PNG, GIF, WebP, BMP
- **Documents**: PDF, DOC, DOCX
- **Archives**: ZIP, RAR, 7Z
- **Executables**: PE, ELF, Mach-O
- **Encrypted content**: Detected but not decrypted

### How fast is ChainGuardian?

ChainGuardian processes transactions in **<100ms**:
- OP_RETURN extraction: <5ms
- Content analysis: <20ms
- Hash generation: <10ms
- Risk scoring: <15ms
- Total: <100ms per transaction

### What is hash-only verification?

ChainGuardian **never views actual content**. Instead, it:
1. Generates SHA-256 hash of content
2. Compares hash against threat intelligence databases
3. Makes decisions based on hash matches only

This ensures privacy while maintaining security.

### How does risk scoring work?

ChainGuardian uses a **multi-factor risk scoring system**:
- **Content Type**: File type risk assessment
- **Patterns**: Encryption, obfuscation, spam detection
- **Signatures**: Threat intelligence matches
- **Size**: Unusual file sizes
- **Context**: Multiple embeddings, coordination

**Note**: Specific weights and scoring algorithms are proprietary and optimized for accuracy.

Risk levels: LOW (0-25), MEDIUM (25-50), HIGH (50-75), CRITICAL (75-100)

---

## GenomeX Integration

### What is GenomeX?

GenomeX is Knight Global Enterprises' behavioral intelligence platform that provides:
- **Behavioral Engine**: Core behavioral genome hashing
- **BTE**: Proactive behavioral integrity
- **QSBA**: Explainable AI anomaly detection

### How does ChainGuardian integrate with GenomeX?

ChainGuardian integrates with GenomeX through:
- **BTE (Phase 2)**: Content integrity tagging and policy enforcement
- **Behavioral Engine (Phase 3)**: Uploader behavior analysis
- **QSBA (Phase 3)**: Explainable AI reason codes

### What is BTE?

BTE (Behavior-Tagging Extension) is inspired by Apple's Memory Integrity Engine. It provides:
- Content integrity tagging (SAFE/WARNING/BLOCKED/VERIFIED)
- Synchronous policy enforcement
- Temporal safety (auto-expiring tags)
- Cost-to-exploit analysis

### What is behavioral analysis?

Behavioral analysis examines wallet transaction patterns to identify:
- Uploader profiles (Normal, Mixer User, High Frequency, etc.)
- Risk indicators (mixer proximity, sanctioned adjacency)
- Unusual patterns
- Proactive threat detection

---

## Compliance & Legal

### Which jurisdictions does ChainGuardian support?

ChainGuardian supports:
- **United States**: FBI IC3 reporting, 7-year retention
- **European Union**: Europol reporting, 3-year retention (GDPR)
- **United Kingdom**: Action Fraud reporting, 5-year retention

Additional jurisdictions can be added.

### Does ChainGuardian automatically report to authorities?

Yes. ChainGuardian automatically reports to authorities when:
- Content is classified as CRITICAL or HIGH risk
- Jurisdiction-specific rules require reporting
- Mandatory compliance workflows are triggered

### What data is reported to authorities?

ChainGuardian reports:
- Content hash (SHA-256)
- Transaction metadata
- Risk assessment
- Compliance status

**No actual content is reported** - only hashes and metadata.

### Is ChainGuardian GDPR compliant?

Yes. ChainGuardian is GDPR compliant:
- Privacy-by-design (hash-only verification)
- Data retention policies (3 years for EU)
- Right to deletion
- Secure data handling

---

## Deployment & Integration

### How do I deploy ChainGuardian?

ChainGuardian offers three deployment options:
1. **Standalone Package**: npm package, integrated into mining software
2. **SaaS API**: Cloud-based service, RESTful API
3. **On-Premise**: Self-hosted deployment for enterprises

### How do I integrate ChainGuardian with my mining pool?

ChainGuardian integrates with mining pools through:
- **API Integration**: RESTful API for transaction analysis
- **WebSocket**: Real-time transaction monitoring
- **Mining Software Integration**: Direct integration with mining software

Contact support for detailed miner integration instructions.

### What are the system requirements?

**Minimum**:
- CPU: 2 cores
- RAM: 4GB
- Storage: 10GB
- Network: 100Mbps

**Recommended**:
- CPU: 4+ cores
- RAM: 8GB+
- Storage: 50GB+
- Network: 1Gbps+

### Does ChainGuardian require Bitcoin Core?

Yes. ChainGuardian uses Bitcoin Core RPC to:
- Monitor mempool
- Access transaction data
- Interface with Bitcoin network

---

## Pricing & Support

### How much does ChainGuardian cost?

ChainGuardian offers three tiers:
- **Open Source**: Free (basic filtering)
- **Pro**: $500-2,000/month (SaaS)
- **Enterprise**: $5,000-50,000/year (custom pricing)

### What support is available?

- **Community Support**: GitHub issues, forums
- **Pro Support**: Email support, priority response
- **Enterprise Support**: Dedicated support, SLA guarantees

### Is there a free trial?

Yes. The open source version is free and includes basic content filtering. Pro and Enterprise tiers offer free trials.

---

## Security & Privacy

### Is my data secure?

Yes. ChainGuardian implements:
- Hash-only verification (never views content)
- Encrypted threat intelligence databases
- Secure API endpoints (HTTPS/TLS)
- Role-based access control (RBAC)
- Complete audit trails

### Does ChainGuardian store content?

No. ChainGuardian **never stores actual content**. Only:
- Content hashes (SHA-256)
- Transaction metadata
- Risk assessments
- Compliance reports

### How does ChainGuardian protect privacy?

ChainGuardian protects privacy through:
- **Hash-only verification**: Content is never viewed
- **No content storage**: Only hashes are stored
- **Privacy-by-design**: Built-in privacy protection
- **GDPR compliance**: Meets EU privacy requirements

---

## Performance & Scalability

### How many transactions can ChainGuardian process?

- **Single Instance**: 1,000+ transactions/second
- **Distributed**: 10,000+ transactions/second
- **Mining Pool Scale**: Handles full mempool monitoring

### Can ChainGuardian scale with my operation?

Yes. ChainGuardian supports:
- Horizontal scaling (multiple instances)
- Load balancing
- Distributed threat intelligence
- Shared signature databases

### What is the latency?

ChainGuardian processes transactions in **<100ms**:
- Real-time analysis
- Sub-second decision making
- Suitable for mining operations

---

## Troubleshooting

### What if ChainGuardian blocks a legitimate transaction?

ChainGuardian uses multi-factor risk scoring to minimize false positives. If a transaction is incorrectly blocked:
1. Review risk factors in the analysis
2. Adjust risk thresholds if needed
3. Contact support for assistance
4. Transaction can be manually allowed

### How do I update threat intelligence?

Threat intelligence is updated:
- **Automatically**: Regular updates from threat intelligence feeds
- **Manually**: Custom signature additions
- **Version Tracking**: All updates are tracked

### What if I need custom jurisdiction rules?

Enterprise customers can:
- Add custom jurisdiction rules
- Configure custom reporting endpoints
- Set custom retention periods
- Define custom compliance workflows

---

## Future Features

### What features are coming?

**Phase 2 (Q2 2025)**:
- ZK30 infrastructure protection
- BlockchainDNA threat intelligence integration

**Phase 3 (Q3 2025)**:
- QSBA explainable AI reason codes
- Advanced behavioral analysis
- GenID integration

**Phase 4 (Q4 2025)**:
- Multi-chain support
- Advanced analytics
- Machine learning enhancements

### When will QSBA be available?

QSBA (Quantum Syndrome Behavioral Analysis) is planned for **Phase 3 (Q3 2025)**. It will provide:
- Explainable AI reason codes
- Anomaly detection
- Defensible metrics for auditors

---

## Contact & Support

### How do I get support?

- **GitHub**: [Issues](https://github.com/chainguardian)
- **Email**: support@chain-guardian.com
- **Enterprise**: enterprise@chain-guardian.com

### Where can I find documentation?

Contact support to access technical documentation, API references, and integration guides.

### How do I report a bug?

Report bugs through:
- GitHub Issues
- Email support
- Enterprise support portal

---

**Last Updated**: January 2025  
**Version**: 1.0

