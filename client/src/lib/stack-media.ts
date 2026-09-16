/**
 * Shared imagery for solution stacks and product cards (paths match products.tsx).
 */
import ccaImg from "@assets/generated_images/abstract_financial_analytics_visualization.png";
import dnaImg from "@assets/generated_images/digital_dna_strand_made_of_blockchain_blocks.png";
import agentgxImg from "@assets/generated_images/futuristic_zero_trust_security_concept.png";
import gxraImg from "@assets/generated_images/hash-only_verification_concept.png";

export type StackImageKey = "cca" | "dna" | "agentgx" | "gxra";

export const productCardImages: Record<StackImageKey, string> = {
  cca: ccaImg,
  dna: dnaImg,
  agentgx: agentgxImg,
  gxra: gxraImg,
};

export const stackHeroImages: Record<string, string> = {
  fintech: ccaImg,
  "enterprise-assurance": gxraImg,
  "artificial-intelligence": agentgxImg,
};
