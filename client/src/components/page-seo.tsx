import { Helmet } from "react-helmet-async";

export function trimMetaDescription(text: string, maxLen = 160): string {
  const one = text.replace(/\s+/g, " ").trim();
  if (one.length <= maxLen) return one;
  return `${one.slice(0, maxLen - 1).trimEnd()}…`;
}

const SITE_URL = "https://www.knightinfotek.com";
const DEFAULT_DESCRIPTION =
  "Knight InfoTek delivers behavioral trust infrastructure: Cha-Ching Analytics, BlockchainDNA, GenomeX Assurance, AgentGX, and related solutions for enterprise and regulated environments.";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

type PageSeoProps = {
  title: string;
  description?: string;
  /** Path only, e.g. `/blog` or `/agent-gx` */
  path?: string;
  noindex?: boolean;
};

export function PageSeo({ title, description = DEFAULT_DESCRIPTION, path = "", noindex }: PageSeoProps) {
  const canonicalPath = path === "" || path === "/" ? "/" : path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}${canonicalPath === "/" ? "" : canonicalPath}`;
  const fullTitle = title.toLowerCase().includes("knight infotek") ? title : `${title} | Knight InfoTek`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:site_name" content="Knight InfoTek" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      {noindex ? <meta name="robots" content="noindex, nofollow" /> : null}
    </Helmet>
  );
}
