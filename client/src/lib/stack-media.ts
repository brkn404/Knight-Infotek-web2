/**
 * Shared imagery for solution stacks and product cards (paths match products.tsx).
 */
import ccaImg from "@assets/generated_images/abstract_financial_analytics_visualization.png";
import dnaImg from "@assets/generated_images/digital_dna_strand_made_of_blockchain_blocks.png";
import agentgxImg from "@assets/generated_images/futuristic_zero_trust_security_concept.png";
import cgImg from "@assets/generated_images/mempool_monitoring_firewall_visualization.png";
import cyberHeroImg from "@assets/generated_images/active_defense_system_visualization.png";
import zeroknightImg from "@assets/generated_images/futuristic_zero_trust_security_concept.png";
import gxraImg from "@assets/generated_images/hash-only_verification_concept.png";
import industrialImg from "@assets/generated_images/genomex_behavioral_intelligence_visualization.png";

export type StackImageKey =
  | "cca"
  | "dna"
  | "agentgx"
  | "cg"
  | "cyber"
  | "zeroknight"
  | "gxra"
  | "industrial"
  | "genid";

export const productCardImages: Record<StackImageKey, string> = {
  cca: ccaImg,
  dna: dnaImg,
  agentgx: agentgxImg,
  cg: cgImg,
  cyber: cyberHeroImg,
  zeroknight: zeroknightImg,
  gxra: gxraImg,
  industrial: industrialImg,
  genid: dnaImg,
};

export const stackHeroImages: Record<string, string> = {
  "artificial-intelligence": agentgxImg,
  "cybersecurity-identity": cyberHeroImg,
  fintech: ccaImg,
  "industrial-autonomous": industrialImg,
};
