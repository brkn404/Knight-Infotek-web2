# Understanding ChainGuardian Risk Scoring

**Knowledge Base Article**

---

## Overview

ChainGuardian uses a multi-factor risk scoring system to assess the risk level of content embedded in Bitcoin transactions. This article explains how risk scoring works, what factors are considered, and how risk levels are determined.

---

## Risk Scoring System

### Multi-Factor Approach

ChainGuardian calculates risk scores using multiple weighted factors:

| Factor | Description |
|--------|-------------|
| **Content Type** | File type risk assessment |
| **Patterns** | Encryption, obfuscation, spam detection |
| **Signatures** | Threat intelligence matches |
| **Size** | Unusual file sizes |
| **Context** | Multiple embeddings, coordination |

**Note**: Specific weights and formulas are proprietary and optimized for accuracy. The system uses a weighted multi-factor algorithm that produces a score from 0-100, mapped to risk levels.

---

## Risk Factors

### 1. Content Type

Different file types have different risk levels:

**High Risk**:
- Executables (PE, ELF, Mach-O)
- Encrypted content
- Archives (ZIP, RAR)

**Medium Risk**:
- Documents (PDF, DOC)
- Images (JPEG, PNG)

**Low Risk**:
- Text files
- Unknown types

### 2. Patterns

Pattern detection identifies:
- Encryption patterns
- Code and data obfuscation
- Spam patterns
- Suspicious encoding methods
- Coordinated attack patterns

**Note**: Specific pattern detection algorithms and scoring methods are proprietary.

### 3. Signatures

Threat intelligence matching:
- Exact hash matches against known illegal content
- Partial matches for content variants
- Database matches across multiple threat intelligence sources

**Note**: Specific matching algorithms and scoring weights are proprietary.

### 4. Size

Unusual file sizes are analyzed:
- Very large files
- Unusually small files
- Empty or minimal content

**Note**: Specific size thresholds and scoring methods are proprietary.

### 5. Context

Transaction context analysis:
- Multiple content embeddings
- Coordinated patterns
- Rapid transaction sequences
- Attack coordination indicators

**Note**: Context analysis algorithms are proprietary.

---

## Risk Levels

### LOW (0-25 points)

**Characteristics**:
- Safe content types
- No suspicious patterns
- No threat intelligence matches
- Normal file sizes

**Action**: Allow transaction

**Examples**:
- Plain text files
- Standard images (JPEG, PNG)
- Normal documents

### MEDIUM (25-50 points)

**Characteristics**:
- Moderate risk content
- Some suspicious patterns
- Possible threat matches
- Unusual but not critical

**Action**: Flag for review

**Examples**:
- Encrypted archives
- Documents with patterns
- Large image files

### HIGH (50-75 points)

**Characteristics**:
- High-risk content types
- Strong suspicious patterns
- Threat intelligence matches
- Critical indicators

**Action**: Block transaction

**Examples**:
- Executable files
- Strongly encrypted content
- Known threat signatures

### CRITICAL (75-100 points)

**Characteristics**:
- Critical risk content
- Multiple threat indicators
- Exact threat matches
- Coordinated attacks

**Action**: Block and report to authorities

**Examples**:
- Known illegal content (exact hash match)
- Executables with encryption
- Coordinated attack patterns

---

## Risk Score Examples

### Example 1: Low Risk

```
Content Type: JPEG image
Patterns: None detected
Signatures: No matches
Size: Normal
Context: Single embedding

Risk Level: LOW
Action: ALLOW
```

### Example 2: Medium Risk

```
Content Type: PDF document
Patterns: Encryption detected
Signatures: No matches
Size: Large file
Context: Single embedding

Risk Level: MEDIUM
Action: FLAG FOR REVIEW
```

### Example 3: High Risk

```
Content Type: Executable
Patterns: Obfuscation detected
Signatures: Partial match found
Size: Normal
Context: Multiple embeddings

Risk Level: HIGH
Action: BLOCK
```

### Example 4: Critical Risk

```
Content Type: Executable
Patterns: Encryption + Obfuscation
Signatures: Exact match (known illegal content)
Size: Large
Context: Coordinated attack pattern

Risk Level: CRITICAL
Action: BLOCK AND REPORT
```

**Note**: Specific scoring calculations and point values are proprietary. Examples show general risk assessment logic.

---

## Confidence Scores

Each risk assessment includes a confidence score (0-1):

**High Confidence (0.8-1.0)**:
- Clear file type detection
- Strong pattern matches
- Exact threat intelligence matches

**Medium Confidence (0.5-0.8)**:
- Probable file type
- Moderate pattern matches
- Partial threat matches

**Low Confidence (0-0.5)**:
- Uncertain file type
- Weak pattern matches
- No threat matches

---

## Customization

### Customization

Risk scoring can be customized for your use case:

- **Factor Weights**: Adjust relative importance of different risk factors
- **Thresholds**: Configure risk level boundaries
- **Pattern Rules**: Customize pattern detection rules
- **Signature Sources**: Configure threat intelligence sources

**Note**: Specific default values and algorithms are proprietary. Contact support for customization options.

---

## GenomeX Enhancement

### Behavioral Context

With GenomeX integration, risk scores can be adjusted based on uploader behavior:

- **Mixer Proximity**: Higher risk for wallets with mixer interactions
- **Sanctioned Adjacency**: Higher risk for wallets interacting with sanctioned addresses
- **Unusual Patterns**: Higher risk for anomalous behavioral patterns
- **Transaction Frequency**: Higher risk for unusually high transaction rates

**Note**: Specific adjustment algorithms and threshold values are proprietary.

### Uploader Risk Levels

Uploader risk is calculated separately and categorized:
- **Normal User**: Low risk indicators
- **Unusual Patterns**: Moderate risk indicators
- **High Frequency**: Elevated risk indicators
- **Mixer User**: High risk indicators
- **Sanctioned Adjacent**: Critical risk indicators

**Note**: Specific risk calculation methods and thresholds are proprietary.

---

## Best Practices

1. **Regular Review**: Review risk scores and thresholds regularly
2. **Threshold Tuning**: Adjust thresholds for your use case
3. **False Positive Management**: Monitor and adjust for false positives
4. **Threat Intelligence Updates**: Keep threat intelligence updated
5. **Behavioral Context**: Use behavioral analysis for enhanced accuracy

---

## Troubleshooting

### High False Positive Rate

**Solutions**:
- Increase risk thresholds
- Adjust content type weights
- Review pattern matching rules
- Update threat intelligence

### High False Negative Rate

**Solutions**:
- Decrease risk thresholds
- Increase signature weight
- Add custom threat signatures
- Enhance pattern detection

---

## Related Articles

- [Content Detection](./CONTENT_DETECTION.md)
- [Hash Verification](./HASH_VERIFICATION.md)
- [Threat Intelligence](./THREAT_INTELLIGENCE.md)
- [Behavioral Analysis](./BEHAVIORAL_ANALYSIS.md)

---

**Last Updated**: January 2025  
**Version**: 1.0

