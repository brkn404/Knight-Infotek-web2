/** Live product sites (launched separately from knightinfotek.com). */
export const PRODUCT_SITES = {
  blockchainDna: "https://blockchain-dna.com",
  chaChingAnalytics: "https://cha-chinganalytics.com",
} as const;

/** Static HTML landings served outside the SPA (full page navigation required). */
export const STATIC_PRODUCT_LANDINGS = ["/genomex-assurance-platform"] as const;

export function isExternalProductLink(link: string): boolean {
  return link.startsWith("http://") || link.startsWith("https://");
}

export function isStaticLandingLink(link: string): boolean {
  return STATIC_PRODUCT_LANDINGS.some((p) => link === p || link.startsWith(`${p}/`));
}

export function needsFullPageLink(link: string): boolean {
  return isExternalProductLink(link) || isStaticLandingLink(link);
}
