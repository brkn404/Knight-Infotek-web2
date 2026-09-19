import {
  Bot,
  ShieldCheck,
  Landmark,
  Activity,
  Dna,
  type LucideIcon,
} from "lucide-react";
import type { StackImageKey } from "@/lib/stack-media";
import { PRODUCT_SITES } from "@/lib/product-sites";

export interface StackProduct {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  /** Internal path or absolute product-site URL. */
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
    slug: "fintech",
    title: "FinTech & on-chain intelligence",
    headline: "LIVE",
    headlineAccent: "PRODUCTS",
    badge: "blockchain-dna.com · cha-chinganalytics.com",
    badgeIcon: Landmark,
    intro:
      "Launched product sites for the behavioral evidence store and the institutional desk that reads it, GenomeX on chain, Life Arc depth, named watch for counterparty risk.",
    whyTitle: "Why these products lead",
    whyBullets: [
      "BlockchainDNA fingerprints chains; Cha-Ching Analytics reads the store for named addresses.",
      "Desks need observation and Life Arc evidence, not another chain-scale scanner.",
      "Knight InfoTek licensing and API tiers sit alongside the live product sites.",
    ],
    products: [
      {
        id: "blockchain-dna",
        title: "BlockchainDNA",
        subtitle: "Behavioral overlay & evidence store",
        description:
          "GenomeX behavioral intelligence on live chains, observation, freshness, coverage, and Life Arc evidence other products read.",
        link: PRODUCT_SITES.blockchainDna,
        icon: Dna,
        imageKey: "dna",
        features: ["Multi-chain store", "Life Arc", "GenomeX"],
      },
      {
        id: "cha-ching",
        title: "Cha-Ching Analytics",
        subtitle: "Institutional named watch",
        description:
          "Your named counterparty list on the BlockchainDNA store, Attention, Facts, Convergence, and Transact now for desks.",
        link: PRODUCT_SITES.chaChingAnalytics,
        icon: Activity,
        imageKey: "cca",
        features: ["Named watch", "Reads store", "Desk workflow"],
      },
    ],
  },
  {
    slug: "enterprise-assurance",
    title: "Enterprise Assurance",
    headline: "TRUST",
    headlineAccent: "BEFORE USE",
    badge: "GenomeX platform · five domains · recovery to agents",
    badgeIcon: ShieldCheck,
    intro:
      "Measure trust before restore, index, train, deploy, or act, ALLOW / DENY / CONFIRM with retainable evidence across recovery, knowledge, ML, agents, and software.",
    whyTitle: "Why assurance matters now",
    whyBullets: [
      "Data and digital assets behave like operational infrastructure in AI-native enterprises.",
      "Backup, EDR, and model firewalls answer narrower questions than pre-use trust.",
      "GenomeX is the vendor-agnostic overlay; GX-GRA is the recovery domain, not the whole platform.",
    ],
    products: [
      {
        id: "genomex-assurance",
        title: "GenomeX Assurance Platform",
        subtitle: "Enterprise Assurance control plane",
        description:
          "One control plane, five domain gates, and ALLOW / DENY / CONFIRM with portable receipts, interactive product overview and papers.",
        link: "/genomex-assurance-platform",
        icon: ShieldCheck,
        imageKey: "gxra",
        features: ["Five domains", "ALLOW / DENY / CONFIRM", "platform_genome_128"],
      },
    ],
  },
  {
    slug: "artificial-intelligence",
    title: "AI & autonomous systems",
    headline: "AGENT",
    headlineAccent: "GOVERNANCE",
    badge: "AgentGX · behavioral authority · OT beachhead",
    badgeIcon: Bot,
    intro:
      "Independent authority layer for autonomous systems, Behavioral Passports, dual gates, and ALLOW / CONFIRM / DENY / UNKNOWN with evidence receipts. Validated first in OT and critical infrastructure.",
    whyTitle: "Why this stack matters",
    whyBullets: [
      "Agents propose actions; most security tools govern users and networks, not authority at the actuation seam.",
      "Qualification campaigns issue versioned GXBP artifacts, operational contracts, not trust scores.",
      "Lab-validated on public ICS datasets and live LLM loops; FactoryXChange industrial PoC next.",
    ],
    products: [
      {
        id: "agentgx",
        title: "AgentGX",
        subtitle: "Behavioral authority for autonomous systems",
        description:
          "Observe → characterize → qualify → govern → prove. GenomeX evidence, Behavioral Passports, and auditable decisions before every tool call.",
        link: "/agent-gx",
        icon: Bot,
        imageKey: "agentgx",
        features: ["GXBP Passports", "G_E + G_A gates", "GenomeX", "Evidence receipts"],
      },
    ],
  },
];

const stackBySlug = new Map(solutionStacks.map((s) => [s.slug, s]));

/** Legacy stack URLs from earlier site versions. */
export const legacyStackRedirects: Record<string, string> = {
  "cybersecurity-identity": "enterprise-assurance",
  "industrial-autonomous": "artificial-intelligence",
};

export function getSolutionStack(slug: string | undefined): SolutionStack | undefined {
  if (!slug) return undefined;
  const resolved = legacyStackRedirects[slug] ?? slug;
  return stackBySlug.get(resolved);
}

export function getAllStackSlugs(): string[] {
  return solutionStacks.map((s) => s.slug);
}
