# GenID Universal Identity

GenID is a comprehensive identity management system for blockchain entities, providing universal identity resolution, verification, and attestation across multiple blockchain networks.

---

## Overview

GenID enables identity management for 9 different entity types, from individual wallets to complex organizations. It provides identity verification, attestation, and cross-chain identity resolution.

---

## Entity Types

GenID supports 9 entity types:

1. **Individual Wallet**: Personal wallet addresses
2. **Organization**: Companies, DAOs, institutions
3. **Bot/Automated**: Automated systems and bots
4. **Exchange**: Centralized and decentralized exchanges
5. **Mining Pool**: Mining pools and validators
6. **DeFi Protocol**: DeFi protocols and smart contracts
7. **NFT Collection**: NFT collections and projects
8. **Token**: ERC-20, ERC-721, ERC-1155 tokens
9. **Smart Contract**: General smart contracts

---

## Key Features

### Identity Verification

- **Multi-Factor Verification**: Multiple verification methods
- **Attestation System**: Cryptographic attestations
- **Cross-Chain Resolution**: Identity across multiple chains
- **ERC8004 Compliance**: ERC-8004 standard support

### Identity Passport

Each identity has a digital passport containing:

- **Identity Metadata**: Name, description, type
- **Verification Status**: Verification level and methods
- **Attestations**: Cryptographic attestations
- **Cross-Chain Addresses**: Addresses on different chains
- **Behavioral Profile**: Linked behavioral analysis

---

## API Usage

### Create Identity

```typescript
const identity = await sdk.genid.createIdentity({
  entityType: 'individual_wallet',
  primaryAddress: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
  metadata: {
    name: 'John Doe',
    description: 'Personal wallet'
  }
});

console.log(identity.identityId);
console.log(identity.passport);
```

### Verify Identity

```typescript
const verification = await sdk.genid.verifyIdentity(
  identityId,
  {
    method: 'attestation',
    attestationData: { ... }
  }
);

console.log(verification.status);      // 'verified' | 'pending' | 'rejected'
console.log(verification.confidence);  // 0-1 confidence score
```

### Get Identity

```typescript
const identity = await sdk.genid.getIdentity(identityId);

console.log(identity.passport);
console.log(identity.verificationStatus);
console.log(identity.crossChainAddresses);
```

### Resolve Cross-Chain

```typescript
const addresses = await sdk.genid.resolveCrossChain(
  identityId,
  targetChainId
);

console.log(addresses); // Array of addresses on target chain
```

---

## Verification Methods

### 1. Attestation-Based

```typescript
const verification = await sdk.genid.verifyWithAttestation(
  identityId,
  {
    attestor: '0x...',
    attestation: '0x...',
    signature: '0x...'
  }
);
```

### 2. Behavioral-Based

```typescript
const verification = await sdk.genid.verifyWithBehavior(
  identityId,
  {
    behavioralProfile: behavioralResult,
    confidenceThreshold: 0.8
  }
);
```

### 3. Multi-Factor

```typescript
const verification = await sdk.genid.verifyMultiFactor(
  identityId,
  {
    methods: ['attestation', 'behavioral', 'reputation'],
    requireAll: false
  }
);
```

---

## Identity Passport

### Passport Structure

```typescript
interface IdentityPassport {
  identityId: string;
  entityType: EntityType;
  primaryAddress: string;
  metadata: {
    name?: string;
    description?: string;
    website?: string;
    social?: { [platform: string]: string };
  };
  verification: {
    status: 'verified' | 'pending' | 'unverified';
    methods: string[];
    confidence: number;
    attestations: Attestation[];
  };
  crossChain: {
    [chainId: string]: string[]; // Addresses on each chain
  };
  behavioral: {
    profile: BehavioralProfile;
    riskScore: number;
  };
  createdAt: Date;
  updatedAt: Date;
}
```

### Access Passport

```typescript
const passport = await sdk.genid.getPassport(identityId);
console.log(JSON.stringify(passport, null, 2));
```

---

## Cross-Chain Identity

### Link Addresses

```typescript
await sdk.genid.linkAddress(
  identityId,
  {
    chainId: '137', // Polygon
    address: '0x...'
  }
);
```

### Resolve Identity

```typescript
// Resolve identity from any address
const identity = await sdk.genid.resolveFromAddress(
  '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
  '1' // Ethereum mainnet
);

console.log(identity.identityId);
console.log(identity.crossChainAddresses);
```

---

## ERC8004 Compliance

### ERC8004 Identity

GenID implements ERC8004 standard:

```typescript
// Get ERC8004 identity
const erc8004Identity = await sdk.genid.getERC8004Identity(identityId);

// ERC8004 methods
const name = await sdk.genid.erc8004.getName(identityId);
const metadata = await sdk.genid.erc8004.getMetadata(identityId);
const attestations = await sdk.genid.erc8004.getAttestations(identityId);
```

---

## Use Cases

### 1. Identity Verification

```typescript
// Verify wallet identity
const identity = await sdk.genid.createIdentity({
  entityType: 'individual_wallet',
  primaryAddress: walletAddress
});

const verification = await sdk.genid.verifyIdentity(identity.identityId);
if (verification.status === 'verified') {
  // Identity verified
}
```

### 2. Cross-Chain Identity Resolution

```typescript
// Find all addresses for an identity
const identity = await sdk.genid.resolveFromAddress(
  ethereumAddress,
  '1'
);

// Get addresses on other chains
const polygonAddresses = identity.crossChainAddresses['137'];
const arbitrumAddresses = identity.crossChainAddresses['42161'];
```

### 3. Organization Identity

```typescript
// Create organization identity
const org = await sdk.genid.createIdentity({
  entityType: 'organization',
  primaryAddress: organizationWallet,
  metadata: {
    name: 'My Organization',
    website: 'https://example.com'
  }
});
```

### 4. DeFi Protocol Identity

```typescript
// Register DeFi protocol
const protocol = await sdk.genid.createIdentity({
  entityType: 'defi_protocol',
  primaryAddress: protocolAddress,
  metadata: {
    name: 'My DeFi Protocol',
    description: 'Decentralized lending protocol'
  }
});
```

---

## Best Practices

### 1. Verify Before Trust

Always verify identity before trusting:

```typescript
const identity = await sdk.genid.getIdentity(identityId);
if (identity.verification.status !== 'verified') {
  // Require additional verification
}
```

### 2. Use Cross-Chain Resolution

Leverage cross-chain identity resolution:

```typescript
// Resolve identity from any chain
const identity = await sdk.genid.resolveFromAddress(address, chainId);
```

### 3. Maintain Identity Metadata

Keep identity metadata up to date:

```typescript
await sdk.genid.updateIdentity(identityId, {
  metadata: {
    name: 'Updated Name',
    website: 'https://newwebsite.com'
  }
});
```

### 4. Monitor Identity Changes

Track identity changes:

```typescript
sdk.genid.onIdentityChange((change) => {
  console.log('Identity changed:', change);
});
```

---

## Error Handling

```typescript
try {
  const identity = await sdk.genid.createIdentity({...});
} catch (error) {
  if (error.code === 'IDENTITY_EXISTS') {
    console.error('Identity already exists');
  } else if (error.code === 'INVALID_ENTITY_TYPE') {
    console.error('Invalid entity type');
  } else {
    console.error('GenID operation failed:', error.message);
  }
}
```

---

## Advanced Features

### Identity Attestations

```typescript
// Create attestation
const attestation = await sdk.genid.createAttestation({
  identityId: identityId,
  attestor: '0x...',
  claim: { ... },
  signature: '0x...'
});

// Verify attestation
const isValid = await sdk.genid.verifyAttestation(attestation);
```

### Identity Reputation

```typescript
const reputation = await sdk.genid.getReputation(identityId);
console.log(reputation.score);      // 0-100 reputation score
console.log(reputation.factors);    // Reputation factors
```

---

## Related Documentation

- [GenomeX Guide](./genomex.md)
- [PatternTags Guide](./patterntags.md)
- [API Reference](../api/genid.md)
- [ERC8004 Guide](../api/erc8004.md)

---

**Last Updated**: December 2025

