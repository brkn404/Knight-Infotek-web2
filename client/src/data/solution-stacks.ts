import {
  Bot,
  Shield,
  Landmark,
  Factory,
  Activity,
  Dna,
  Lock,
  Fingerprint,
  type LucideIcon,
} from "lucide-react";
import type { StackImageKey } from "@/lib/stack-media";

export interface StackProduct {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  icon: LucideIcon;
  imageKey: StackImageKey;
  features: string[];
}

export interface SolutionStack {
  slug: string;
  title: string;
  headline: string;
  headlineAccent: string;
  badge: string;
  badgeIcon: LucideIcon;
  intro: string;
  whyTitle: string;
  whyBullets: string[];
  products: StackProduct[];
}

export const solutionStacks: SolutionStack[] = [
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    headline: "AGENT",
    headlineAccent: "GOVERNANCE",
    badge: "AgentGX family · GenomeX · proof-of-behavior",
    badgeIcon: Bot,
    intro:
      "Runtime governance for autonomous AI agents — identity, permissions, behavioral policy, and cryptographic proof before execution. Built for finance, government, healthcare, enterprise automation, and industrial autonomy.",
    whyTitle: "Why this stack matters",
    whyBullets: [
      "Autonomous AI is entering regulated, high-liability domains.",
      "Most tools do not govern agent behavior at runtime.",
      "Regulators and insurers expect verifiable proof — not slide decks.",
      "AgentGX makes autonomous AI governable, provable, and scalable.",
    ],
    products: [
      {
        id: "agentgx",
        title: "AgentGX",
        subtitle: "Trusted AI agent operations",
        description:
          "AgentGX-CORE governance runtime, AgentGX-ARE for live policy, GenomeX behavioral analytics, and Proof-of-Behavior for auditors and boards.",
        link: "/agent-gx",
        icon: Bot,
        imageKey: "agentgx",
        features: ["AgentGX-CORE", "AgentGX-ARE", "GenomeX", "Proof-of-Behavior"],
      },
    ],
  },
  {
    slug: "cybersecurity-identity",
    title: "Cybersecurity & Identity",
    headline: "BEHAVIORAL",
    headlineAccent: "DEFENSE",
    badge: "Endpoint · identity continuity · recovery",
    badgeIcon: Shield,
    intro:
      "A behavior-driven layer that detects, contains, and recovers based on how systems and identities behave — not signatures alone. Aligned with ZeroKnight30-style endpoint resilience and GenID-style behavior-derived identity.",
    whyTitle: "Why it's key",
    whyBullets: [
      "AI-driven attacks bypass signature-only security.",
      "Identity compromise is often behavioral, not just credential theft.",
      "Recovery speed matters as much as detection.",
      "Knight InfoTek Global unifies these themes with the same behavioral DNA as AgentGX.",
    ],
    products: [
      {
        id: "genid",
        title: "GenID",
        subtitle: "Behavior-derived universal identity",
        description:
          "Registry for nine entity classes — humans, wallets, contracts, AI agents, DAOs, issuers, and more. Cross-chain resolution, attestation, and behavioral verification — part of BlockchainDNA.",
        link: "/gen-id",
        icon: Fingerprint,
        imageKey: "genid",
        features: ["9 entity types", "Cross-chain", "Behavior-first", "ERC-8004 aligned"],
      },
      {
        id: "cyber-endpoint-line",
        title: "Behavioral endpoint & recovery",
        subtitle: "ZeroKnight30-class resilience",
        description:
          "Behavioral snapshots, rapid rollback, and continuity for endpoints under attack — portfolio capabilities unified with AgentGX and GenomeX for runtime governance.",
        link: "/agent-gx",
        icon: Shield,
        imageKey: "cyber",
        features: ["Behavioral EDR", "Recovery IP", "Ransomware & APT focus"],
      },
    ],
  },
  {
    slug: "fintech",
    title: "FinTech",
    headline: "BEHAVIORAL",
    headlineAccent: "COMPLIANCE",
    badge: "Chains · stablecoins · tokenized assets · L1 policy",
    badgeIcon: Landmark,
    intro:
      "A behavioral compliance layer for blockchains, stablecoins, and tokenized assets — before, during, and after transactions. Finance is shifting from post-hoc audits to continuous compliance.",
    whyTitle: "Why it's key",
    whyBullets: [
      "Stablecoins, RWAs, and L1s face increasing regulatory pressure.",
      "Existing tools often analyze transactions — not behavior over time.",
      "Continuous compliance needs lineage, provenance, and preventative controls.",
    ],
    products: [
      {
        id: "blockchain-dna",
        title: "BlockchainDNA",
        subtitle: "Universal identity & provenance",
        description:
          "Behavioral analysis of wallets, contracts, and flows — raw chain data becomes behavioral risk, lineage, and provenance for compliance scoring.",
        link: "/blockchain-dna",
        icon: Dna,
        imageKey: "dna",
        features: ["Identity layer", "Lineage", "Risk foundation"],
      },
      {
        id: "cha-ching",
        title: "Cha-Ching Analytics",
        subtitle: "Autonomous compliance infrastructure",
        description:
          "Real-time, preventative compliance for stablecoins and RWAs — issuer behavior, minting, reserves, and drift for regulators, issuers, and exchanges.",
        link: "/cha-ching-analytics",
        icon: Activity,
        imageKey: "cca",
        features: ["Real-time scoring", "Reserve integrity", "Regulator-ready"],
      },
      {
        id: "chain-guardian",
        title: "ChainGuardian",
        subtitle: "Pre-block content safety",
        description:
          "Mining-layer policy for Bitcoin and L1s — hash-only / privacy-preserving inspection before block inclusion.",
        link: "/chain-guardian",
        icon: Lock,
        imageKey: "cg",
        features: ["Mempool firewall", "Hash-only", "Liability shield"],
      },
    ],
  },
  {
    slug: "industrial-autonomous",
    title: "Industrial & autonomous",
    headline: "AUTONOMOUS",
    headlineAccent: "SYSTEMS",
    badge: "Manufacturing · Factory 4.0 · robots · AVs · drones",
    badgeIcon: Factory,
    intro:
      "Behavioral governance for cyber-physical and fully autonomous systems — safety envelopes, drift detection, and tamper-evident records for actions in the real world. Extends the AgentGX model via AutonomousGX.",
    whyTitle: "Why it's key",
    whyBullets: [
      "Autonomous systems create physical-world risk, not only software errors.",
      "Failures become safety, regulatory, and liability events.",
      "Provable, compliant autonomy requires runtime governance and evidence.",
    ],
    products: [
      {
        id: "autonomousgx-line",
        title: "Industrial & AutonomousGX",
        subtitle: "Factory 4.0 · fleets · critical infrastructure",
        description:
          "Policy-driven control of physical actions, behavioral DNA for robots and vehicles, and cryptographic proof of safety compliance — one path from AgentGX into OT-adjacent workloads.",
        link: "/agent-gx",
        icon: Factory,
        imageKey: "industrial",
        features: ["Safety envelopes", "Drift & anomaly", "Audit evidence"],
      },
    ],
  },
];

const stackBySlug = new Map(solutionStacks.map((s) => [s.slug, s]));

export function getSolutionStack(slug: string | undefined): SolutionStack | undefined {
  if (!slug) return undefined;
  return stackBySlug.get(slug);
}

export function getAllStackSlugs(): string[] {
  return solutionStacks.map((s) => s.slug);
}
