export type ResourceId =
  | "category-paper"
  | "architecture-paper"
  | "product-whitepaper"
  | "platform-brochure";

export interface AssuranceResource {
  id: ResourceId;
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  pdfHref: string;
  dateLabel: string;
  kind: "Category paper" | "Architecture paper" | "Product whitepaper" | "Product brochure";
}

export const assuranceResources: AssuranceResource[] = [
  {
    id: "category-paper",
    title: "When Data Becomes Infrastructure",
    subtitle:
      "Why AI turns digital assets into operational infrastructure, and why trust must become measurable before use.",
    cta: "Read the paper",
    href: "/enterprise-assurance/when-data-becomes-infrastructure",
    pdfHref: "/resources/Knight-InfoTek_When-Data-Becomes-Infrastructure_2026.pdf",
    dateLabel: "September 2026",
    kind: "Category paper",
  },
  {
    id: "architecture-paper",
    title: "GenomeX Assurance Platform",
    subtitle:
      "How GenomeX implements Enterprise Assurance through one Behavioral Genome, five shared engines, and five assurance domains.",
    cta: "Explore the architecture",
    href: "/enterprise-assurance/genomex-assurance-platform",
    pdfHref: "/resources/Knight-InfoTek_GenomeX-Assurance-Platform_Architecture_2026.pdf",
    dateLabel: "September 2026",
    kind: "Architecture paper",
  },
  {
    id: "product-whitepaper",
    title: "GenomeX Assurance Platform Whitepaper",
    subtitle:
      "Buyer-facing product view of domain gates, evidence, and deployment, inheriting the platform architecture.",
    cta: "Download the whitepaper",
    href: "/resources/Knight-InfoTek_GenomeX-Assurance-Platform_Whitepaper_2026.pdf",
    pdfHref: "/resources/Knight-InfoTek_GenomeX-Assurance-Platform_Whitepaper_2026.pdf",
    dateLabel: "September 2026 · Version 2",
    kind: "Product whitepaper",
  },
  {
    id: "platform-brochure",
    title: "GenomeX Assurance Platform Brochure",
    subtitle:
      "Short sales overview: measure trust before use across five domains, with GX-GRA for the recovery chain.",
    cta: "Download the brochure",
    href: "/resources/Knight-InfoTek_GX-RA_Product-Brochure_2026.pdf",
    pdfHref: "/resources/Knight-InfoTek_GX-RA_Product-Brochure_2026.pdf",
    dateLabel: "September 2026",
    kind: "Product brochure",
  },
];

export function getAssuranceResource(id: ResourceId): AssuranceResource {
  const found = assuranceResources.find((r) => r.id === id);
  if (!found) throw new Error(`Unknown resource: ${id}`);
  return found;
}

export const ENGINE_SPINE =
  "GX-DAB → GX-SEQ → GX-SIG → GX-BE → GX-AL → domain policy";

export const ASSURANCE_DOMAINS = [
  { abbr: "GX-GRA", name: "Recovery", question: "Can this recovery chain be trusted?" },
  { abbr: "GX-GKA", name: "Knowledge", question: "Can this knowledge be trusted?" },
  { abbr: "GX-GMA", name: "Machine learning", question: "Can this ML asset be trusted?" },
  { abbr: "GX-GAA", name: "Agents", question: "Can this agent be trusted?" },
  { abbr: "GX-GSA", name: "Software", question: "Can this software release be trusted?" },
] as const;
