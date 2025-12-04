import { useEffect } from "react";
import { useLocation, Redirect } from "wouter";

/**
 * Redirect handler for common incorrect URLs
 * Redirects /troubleshooting/, /api/, etc. to /docs/blockchain-dna/{path}/README
 */
export function RedirectHandler() {
  const [location, setLocation] = useLocation();
  
  useEffect(() => {
    // Common incorrect paths that should redirect to BlockchainDNA docs
    const redirects: Record<string, string> = {
      '/troubleshooting': '/docs/blockchain-dna/troubleshooting/README',
      '/troubleshooting/': '/docs/blockchain-dna/troubleshooting/README',
      '/api': '/docs/blockchain-dna/api/README',
      '/api/': '/docs/blockchain-dna/api/README',
      '/integrations': '/docs/blockchain-dna/integrations/README',
      '/integrations/': '/docs/blockchain-dna/integrations/README',
      '/documentation': '/docs/blockchain-dna/documentation/README',
      '/documentation/': '/docs/blockchain-dna/documentation/README',
      '/features': '/docs/blockchain-dna/features/README',
      '/features/': '/docs/blockchain-dna/features/README',
      '/resources': '/docs/blockchain-dna/resources/README',
      '/resources/': '/docs/blockchain-dna/resources/README',
      '/getting-started': '/docs/blockchain-dna/getting-started/README',
      '/getting-started/': '/docs/blockchain-dna/getting-started/README',
    };
    
    // Check if current location needs redirect
    const normalizedLocation = location.endsWith('/') ? location.slice(0, -1) : location;
    const redirect = redirects[location] || redirects[normalizedLocation];
    
    if (redirect) {
      console.log(`[Redirect] ${location} → ${redirect}`);
      setLocation(redirect);
    }
  }, [location, setLocation]);
  
  return null;
}

