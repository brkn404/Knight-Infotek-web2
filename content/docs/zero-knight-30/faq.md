# ZK30-Gladiator: Frequently Asked Questions (FAQ)

**Version**: 1.0  
**Date**: January 2025  
**Last Updated**: January 2025

---

## General Questions

### What is ZK30-Gladiator?

ZK30-Gladiator is an autonomous AI defense platform that provides proactive threat detection, instant file recovery, and immutable integrity verification. It features Blockchain-Anchored Behavioral Snapshot Recovery (BSR), the industry's first behavior-first recovery system with blockchain attestation.

### How is ZK30-Gladiator different from traditional security solutions?

Unlike traditional EDR/XDR solutions that rely on signature-based detection, ZK30-Gladiator uses:
- **Behavioral Analysis**: Understands *how* and *why* files change, not just *what* changed
- **AI-Powered Reasoning**: Local LLM analyzes threats in real-time
- **Blockchain Integrity**: Immutable proof of clean file states
- **Instant Selective Recovery**: Restore only corrupted files in seconds
- **Air-Gap Compatible**: Full offline operation for classified environments

### What operating systems does ZK30-Gladiator support?

- **Linux**: Ubuntu 20.04+, Debian 11+, RHEL 8+, CentOS 8+
- **macOS**: 11.0 (Big Sur) and later
- **Windows**: 10, 11 (Server 2019+)

---

## BSR (Blockchain-Anchored Behavioral Snapshot Recovery)

### What is BSR?

BSR is ZK30-Gladiator's signature innovation: a behavior-first recovery system that combines behavioral context, blockchain attestation, and AI-powered scoring to enable instant, selective file restoration with cryptographic proof of integrity.

### How does BSR work?

1. **Protection**: Files are monitored and BehaviorPrints are generated for each change
2. **Detection**: Behavioral anomalies trigger threat assessment
3. **Recovery**: System locates last clean state via Behavioral Snapshot Graph (BSG) and restores only corrupted files from delta snapshots
4. **Validation**: Recovery is verified against blockchain-anchored Clean State Anchors (CSA)

### How fast is BSR recovery?

BSR can restore corrupted files in **less than 10 seconds per file**, compared to hours or days for traditional full system restores.

### What files does BSR protect?

BSR protects critical files including:
- Configuration files
- AI models
- Databases (partial)
- Scripts and executables
- Credential stores
- Identity files

### Does BSR require internet connectivity?

No. BSR operates fully offline with a local blockchain node or light client. It requires zero external threat feeds and is designed for air-gapped environments.

### How does blockchain attestation work in BSR?

Clean State Anchors (CSAs) are cryptographically signed and stored in the BDNA ChainLedger, providing immutable proof of file integrity. This prevents tampering and enables cryptographic verification of recovery operations.

---

## AI & ORACLE Engine

### What is ORACLE?

ORACLE is ZK30-Gladiator's local LLM reasoning engine. It provides AI-powered threat analysis, behavioral scoring, and decision support without requiring cloud connectivity.

### What LLM models does ORACLE support?

ORACLE supports multiple local LLM backends:
- **Ollama**: Mistral, LLaMA, CodeGemma
- **LM Studio**: GUI-based model management
- **Local Transformers**: Hugging Face integration
- **vLLM**: Advanced async inference

### Does ORACLE send data to the cloud?

No. ORACLE runs entirely locally. All processing happens on your infrastructure with zero data exfiltration.

### How does GenomeX behavioral scoring work?

GenomeX uses ORACLE to analyze file mutations and generate risk scores (0-100) based on:
- Process lineage patterns
- Change patterns and drift scores
- Behavioral context
- Comparison with known attack patterns

---

## Deployment & Operations

### How is ZK30-Gladiator deployed?

ZK30-Gladiator supports multiple deployment models:
- **Standalone**: Single endpoint installation
- **Distributed**: Centralized MCP servers with distributed agents
- **Containerized**: Docker, Kubernetes
- **Virtualized**: VMware, Hyper-V, KVM

### What are the system requirements?

**Minimum:**
- 4 CPU cores, 2.0 GHz
- 8 GB RAM (16 GB recommended)
- 20 GB free storage
- Linux, macOS, or Windows

**Recommended:**
- 8+ CPU cores, 3.0 GHz+
- 16 GB+ RAM
- 50 GB+ storage
- Optional GPU for LLM acceleration

### How much system overhead does ZK30-Gladiator add?

ZK30-Gladiator is designed for minimal impact:
- **CPU Usage**: < 5%
- **Memory Usage**: < 10%
- **Storage Overhead**: < 20% for BSR delta snapshots

### Can ZK30-Gladiator run in air-gapped environments?

Yes. ZK30-Gladiator is designed for full offline operation:
- No internet connectivity required
- Local LLM reasoning (ORACLE)
- Local blockchain node (BDNA)
- Zero external dependencies

---

## Security & Compliance

### What security standards does ZK30-Gladiator meet?

ZK30-Gladiator is designed to meet:
- **HIPAA**: Healthcare data protection
- **SOX**: Financial data integrity
- **NERC**: Critical infrastructure
- **FISMA**: Federal information security

### How does ZK30-Gladiator protect data?

- **At Rest**: AES-256-GCM encryption
- **In Transit**: TLS/mTLS encryption
- **Access Control**: Role-based access control (RBAC)
- **Audit Trail**: Immutable blockchain records

### Can endpoints self-approve clean states?

No. Only the GenomeX trust oracle can create Clean State Anchors (CSAs). Endpoints cannot self-approve, ensuring trust boundaries are maintained.

### How does ZK30-Gladiator handle false positives?

ZK30-Gladiator uses AI-powered behavioral analysis to reduce false positives:
- Context-aware detection (not just signatures)
- Behavioral pattern learning
- Adaptive thresholds
- Target false positive rate: < 5%

---

## Recovery & Restoration

### How does selective recovery work?

BSR uses Behavioral Snapshot Graphs (BSG) to track file version lineage. When corruption is detected, the system:
1. Traverses the BSG to find the last clean state
2. Identifies only corrupted files (not the entire system)
3. Restores only those files from delta snapshots
4. Validates against blockchain-anchored CSAs

### What happens if a recovery fails?

If a recovery operation fails:
1. The self-healing subsystem is triggered
2. ORACLE analyzes the failure
3. Alternative recovery paths are attempted
4. Human operators are notified if needed
5. All actions are logged for audit

### Can I recover files from days or weeks ago?

Yes, as long as:
- The file was protected by BSR
- A Clean State Anchor exists for that version
- Delta snapshots are available
- The BSG maintains the lineage

### How much storage does BSR require?

BSR uses delta snapshots (binary diffs) instead of full file copies, resulting in < 20% storage overhead compared to traditional full snapshots.

---

## Integration & Compatibility

### Can ZK30-Gladiator integrate with existing SIEM systems?

Yes. ZK30-Gladiator provides:
- REST API for integration
- Webhook support for alerts
- Structured logging (Syslog, JSON)
- Prometheus metrics

### Does ZK30-Gladiator work with other security tools?

Yes. ZK30-Gladiator is designed to complement existing security infrastructure:
- EDR/XDR solutions
- Firewalls and network security
- Identity and access management
- Security information and event management (SIEM)

### Can I use ZK30-Gladiator with cloud services?

Yes, but ZK30-Gladiator is designed to work fully offline. Cloud integration is optional and can be configured based on your security requirements.

---

## Licensing & Support

### What licensing options are available?

- **Enterprise License**: Per-endpoint annual subscription
- **Premium License**: Enhanced features and priority support
- **Government/Defense**: Specialized pricing and configurations

### What support options are available?

- **Standard Support**: Business hours, email support
- **Premium Support**: 24/7, phone support, dedicated engineer
- **Professional Services**: Custom integration, training
- **Managed Services**: MSSP partnerships

### Is ZeroKnight30 a certified vendor?

Yes. ZeroKnight30 LLC is a **Service-Disabled Veteran-Owned Small Business (SDVOSB)**, enabling government and defense contracting.

---

## Technical Questions

### How does behavioral hashing differ from traditional hashing?

Traditional hashing (SHA-256) only captures file content. Behavioral hashing includes:
- Cryptographic hash
- File metadata
- Process ancestry chain
- Change patterns
- Drift scores
- Behavioral context

This enables detection of mutations that static hashing misses.

### What is a Behavioral Snapshot Graph (BSG)?

A BSG is a directed graph that tracks the complete version history of a file, showing how it evolved over time. Each node represents a file version with its BehaviorPrint, status, and relationship to parent/child versions.

### What is a Clean State Anchor (CSA)?

A CSA is a blockchain-anchored, cryptographically signed record of a trusted file state. It provides immutable proof that a file version was verified as clean by the GenomeX trust oracle.

### How does GenomeX determine if a file is clean or malicious?

GenomeX uses ORACLE (local LLM) to analyze:
- Process lineage (who/what modified the file)
- Change patterns (how the file changed)
- Drift scores (deviation from baseline)
- Behavioral context (surrounding system activity)

Based on this analysis, it generates a risk score (0-100) and classification.

### What is BDNA ChainLedger?

BDNA (BlockchainDNA) ChainLedger is the blockchain layer that provides immutable attestation for Clean State Anchors. It ensures recovery points cannot be tampered with or deleted.

---

## Use Cases

### Is ZK30-Gladiator suitable for ransomware protection?

Yes. ZK30-Gladiator BSR is specifically designed for ransomware recovery:
- Detects ransomware behavioral patterns
- Instantly restores encrypted files
- Validates recovery with blockchain proof
- Minimal downtime (seconds vs. hours/days)

### Can ZK30-Gladiator detect zero-day attacks?

Yes. Through behavioral pattern analysis, ZK30-Gladiator can detect novel attacks that signature-based systems miss:
- Behavioral drift detection
- Anomaly pattern recognition
- AI-powered threat assessment
- Proactive identification

### Is ZK30-Gladiator suitable for insider threat detection?

Yes. ZK30-Gladiator tracks process lineage, enabling identification of:
- Who modified files (user/process)
- When modifications occurred
- How files were changed
- Suspicious behavioral patterns

### Can ZK30-Gladiator protect critical infrastructure?

Yes. ZK30-Gladiator is designed for critical infrastructure:
- Air-gap compatible
- Sub-second recovery
- Immutable audit trails
- Regulatory compliance ready

---

## Troubleshooting

### What should I do if ORACLE (LLM) is not responding?

1. Check that Ollama/LM Studio is running
2. Verify the model is loaded
3. Check network connectivity (if using remote LLM)
4. Review ORACLE logs for errors
5. Try switching to a fallback model

### How do I check if BSR is working correctly?

1. Verify BSR is enabled in configuration
2. Check that protected files are being monitored
3. Review BSG graph for file versions
4. Verify CSAs are being created
5. Test recovery with a non-critical file

### What if I see high false positive rates?

1. Review behavioral thresholds in configuration
2. Adjust GenomeX scoring parameters
3. Update system baselines
4. Review ORACLE prompt templates
5. Contact support for tuning assistance

### How do I view recovery history?

Recovery history is available through:
- Web UI dashboard
- API endpoints (`/api/v1/recovery/history`)
- Blockchain audit trail (BDNA)
- Log files

---

## Getting Started

### How do I get started with ZK30-Gladiator?

1. Review system requirements
2. Install dependencies (Python, Ollama, etc.)
3. Run installation script
4. Configure protected paths
5. Start monitoring

See the [Installation Guide](../03-deployment/installation.md) for detailed steps.

### Where can I find documentation?

- **Technical Documentation**: [Architecture Docs](../01-architecture/)
- **Implementation Guides**: [Implementation Docs](../02-implementation/)
- **Deployment Guides**: [Deployment Docs](../03-deployment/)
- **API Reference**: [API Docs](../02-implementation/api-reference.md)

### How do I contact support?

- **Email**: support@zeroknight30.com
- **Website**: https://zeroknight30.com
- **Documentation**: [Knowledge Base](./README.md)

---

## Additional Resources

- [Product Specification Sheet](./product-spec-sheet.md)
- [Architecture Diagram](./architecture-diagram.md)
- [Technical Whitepaper](../01-architecture/technical-whitepaper.md)
- [Installation Guide](../03-deployment/installation.md)
- [API Reference](../02-implementation/api-reference.md)

---

**Have a question not answered here?**  
Contact us at support@zeroknight30.com or visit https://zeroknight30.com

---

---

## Disclaimer

This FAQ provides answers to common questions about ZK30-Gladiator. Responses are designed for public consumption and do not reveal proprietary implementation details, trade secrets, or specific technical methodologies. For detailed technical information, please contact our technical team.

---

**Document Version**: 1.0  
**Last Updated**: January 2025  
**Classification**: Public Documentation

