/** Live product sites (launched separately from knightinfotek.com). */
export const PRODUCT_SITES = {
  blockchainDna: "https://blockchain-dna.com",
  chaChingAnalytics: "https://cha-chinganalytics.com",
} as const;

export function isExternalProductLink(link: string): boolean {
  return link.startsWith("http://") || link.startsWith("https://");
}
