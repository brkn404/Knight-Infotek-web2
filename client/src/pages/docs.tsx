import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowLeft } from "lucide-react";
import { Link, useParams, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { renderMarkdown } from "@/lib/markdown";

export default function DocsPage() {
  const [location] = useLocation();
  const params = useParams();
  const product = params?.product as string | undefined;
  // For route /docs/:product/*, the wildcard is captured in params['*']
  // For route /docs/:filename, the filename is in params.filename
  const doc = (params?.['*'] || params?.doc || params?.filename) as string | undefined;
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Extract doc path from URL if params don't have it
  // URL format: /docs/blockchain-dna/api/README or /docs/blockchain-dna/resources/whitepapers
  // Or: /docs/GENOMEX_STACK_OVERVIEW.md (root-level file)
  let docPathFromUrl = '';
  if (location.startsWith('/docs/')) {
    const afterDocs = location.replace(/^\/docs\//, '');
    const parts = afterDocs.split('/');
    
    // If there's only one part, it's a root-level file
    if (parts.length === 1) {
      docPathFromUrl = parts[0];
    } else if (parts.length > 1) {
      // Remove the first part (product) and join the rest
      docPathFromUrl = parts.slice(1).join('/');
    }
  }
  if (!docPathFromUrl && doc) {
    docPathFromUrl = doc;
  }

  useEffect(() => {
    console.log('[Docs] Route params:', params);
    console.log('[Docs] All params keys:', Object.keys(params || {}));
    console.log('[Docs] Product:', product);
    console.log('[Docs] Doc:', doc);
    console.log('[Docs] Doc from URL:', docPathFromUrl);
    console.log('[Docs] Location:', location);
    console.log('[Docs] Current URL:', window.location.href);
    console.log('[Docs] Pathname:', window.location.pathname);
    
    // Use docPathFromUrl if doc param is missing or incomplete
    const effectiveDoc = doc || docPathFromUrl;
    
    // Handle both product-based routes and root-level file routes
    if (product && effectiveDoc) {
      // Product-based route: /docs/:product/*
      loadDoc(effectiveDoc);
    } else if (!product && effectiveDoc) {
      // Root-level file route: /docs/:filename
      loadDoc(effectiveDoc);
    } else {
      setLoading(false);
      setError(`Missing product or document parameter. Product: ${product || 'undefined'}, Doc: ${effectiveDoc || 'undefined'}`);
    }
  }, [product, doc, docPathFromUrl, location, params]);

  const loadDoc = async (docParam?: string) => {
    const effectiveDoc = docParam || doc || docPathFromUrl;
    
    if (!effectiveDoc) {
      setError('Missing document parameter');
      setLoading(false);
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      
      // Handle nested paths (e.g., "api/README", "faq/README" or "resources/README")
      // The doc param might be "api/README", "faq-README", or just "README"
      const docPath = effectiveDoc;
      
      console.log(`[Docs] Loading: product=${product || 'none'}, doc=${doc}, docPath=${docPath}`);
      
      // Handle different path formats
      // If doc contains a dash, it might be "faq-README" format
      // If doc contains a slash, it's "faq/README" format
      // Otherwise, it's a direct filename
      
      const possiblePaths: string[] = [];
      
      // If no product, this is a root-level file (e.g., /docs/GENOMEX_STACK_OVERVIEW.md)
      if (!product) {
        // If docPath already ends with .md, don't add it again
        if (docPath.endsWith('.md')) {
          possiblePaths.push(
            `/content/docs/${docPath}`,
            `/content/docs/${docPath.toUpperCase()}`,
            `/content/docs/${docPath.toLowerCase()}`,
          );
        } else {
          possiblePaths.push(
            `/content/docs/${docPath}`,
            `/content/docs/${docPath}.md`,
            `/content/docs/${docPath.toUpperCase()}.md`,
            `/content/docs/${docPath.toLowerCase()}.md`,
          );
        }
      } else if (docPath.includes('-')) {
        // Handle "faq-README" or "getting-started-README" format - convert to "faq/README.md"
        const parts = docPath.split('-');
        // Try splitting on last dash (e.g., "getting-started-README" -> ["getting-started", "README"])
        if (parts.length >= 2) {
          const file = parts[parts.length - 1]; // Last part is the filename
          const dir = parts.slice(0, -1).join('-'); // Everything before last part is the directory
          possiblePaths.push(
            `/content/docs/${product}/${dir}/${file}.md`,
            `/content/docs/${product}/${dir}/${file}`,
          );
        }
        // Also try as direct filename with dash
        possiblePaths.push(
          `/content/docs/${product}/${docPath}.md`,
          `/content/docs/${product}/${docPath}`,
        );
      } else if (docPath.includes('/')) {
        // Handle nested paths like "resources/whitepapers" or "faq/README"
        const parts = docPath.split('/');
        
        // For nested paths like "resources/whitepapers", try the file directly first
        if (parts.length === 2) {
          possiblePaths.push(
            `/content/docs/${product}/${parts[0]}/${parts[1]}.md`,
          );
        }
        
        // Then try the full nested path
        possiblePaths.push(
          `/content/docs/${product}/${docPath}.md`,
          `/content/docs/${product}/${docPath}`,
        );
        
        // Also try with README if it's a directory
        if (parts.length === 2) {
          possiblePaths.push(
            `/content/docs/${product}/${parts[0]}/${parts[1]}/README.md`,
          );
        }
      } else {
        // Direct filename - handle both with and without .md extension
        if (docPath.endsWith('.md')) {
          possiblePaths.push(
            `/content/docs/${product}/${docPath}`,
            `/content/docs/${product}/${docPath.toUpperCase()}`,
            `/content/docs/${product}/${docPath.toLowerCase()}`,
          );
        } else {
          possiblePaths.push(
            `/content/docs/${product}/${docPath}.md`,
            `/content/docs/${product}/${docPath}`,
            `/content/docs/${product}/${docPath.toUpperCase()}.md`, // For uppercase filenames like PRODUCT_SPEC_SHEET.md
            `/content/docs/${product}/${docPath.toLowerCase()}.md`,
          );
        }
        
        // Also try common nested locations
        possiblePaths.push(
          `/content/docs/${product}/${docPath}/README.md`,
          `/content/docs/${product}/${docPath}/README`,
        );
      }
      
      console.log(`[Docs] Trying ${possiblePaths.length} paths for ${product}/${doc}...`);
      
      for (let i = 0; i < possiblePaths.length; i++) {
        const path = possiblePaths[i];
        try {
          console.log(`[Docs] [${i + 1}/${possiblePaths.length}] Trying: ${path}`);
          
          // Add timeout to prevent hanging
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
          
          const response = await fetch(path, {
            method: 'GET',
            headers: {
              'Accept': 'text/markdown, text/plain, */*',
            },
            signal: controller.signal,
          });
          
          clearTimeout(timeoutId);
          
          console.log(`[Docs] Response: status=${response.status}, contentType=${response.headers.get('content-type')}`);
          
          if (response.ok) {
            const text = await response.text();
            const trimmed = text.trim();
            
            // Check if content looks like HTML (404 page or index.html)
            if (trimmed.startsWith('<!DOCTYPE') || trimmed.startsWith('<html') || trimmed.startsWith('<!doctype')) {
              console.warn(`[Docs] Path ${path} returned HTML (likely 404 page). First 200 chars: ${trimmed.substring(0, 200)}`);
              continue; // Try next path
            }
            
            // Success!
            setContent(text);
            setLoading(false);
            console.log(`[Docs] ✅ Successfully loaded from ${path} (${text.length} chars)`);
            return;
          } else {
            console.warn(`[Docs] Path ${path} returned status ${response.status}`);
          }
        } catch (e: any) {
          if (e.name === 'AbortError') {
            console.warn(`[Docs] Request to ${path} timed out`);
          } else {
            console.error(`[Docs] Failed to load ${path}:`, e.message || e);
          }
          // Continue to next path
        }
      }
      
      // If still not found, try a few more common patterns
      const fallbackPaths = [
        `/content/docs/${product}/${docPath.toLowerCase()}.md`,
        `/content/docs/${product}/${docPath.toLowerCase()}`,
      ];
      
      for (const path of fallbackPaths) {
        if (possiblePaths.includes(path)) continue; // Already tried
        try {
          console.log(`Trying fallback: ${path}`);
          const response = await fetch(path);
          if (response.ok) {
            const text = await response.text();
            const trimmed = text.trim();
            if (!trimmed.startsWith('<!DOCTYPE') && !trimmed.startsWith('<html')) {
              setContent(text);
              setLoading(false);
              console.log(`✓ Loaded documentation from ${path}`);
              return;
            }
          }
        } catch (e) {
          // Continue
        }
      }
      
      console.error(`Could not find documentation for ${product}/${doc}. Tried paths:`, [...possiblePaths, ...fallbackPaths]);
      setError(`Documentation not found: ${product}/${doc}. Please ensure the docs are synced to client/public/content/docs/`);
      setLoading(false);
    } catch (err) {
      console.error('Error loading documentation:', err);
      setError('Failed to load documentation');
      setLoading(false);
    }
  };

  const productNames: Record<string, string> = {
    'blockchain-dna': 'BlockchainDNA',
    'cha-ching-analytics': 'Cha-Ching Analytics',
    'zero-knight-30': 'ZeroKnight30',
    'chain-guardian': 'ChainGuardian',
  };

  const productName = productNames[product || ''] || product || 'Product';

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <div className="pt-20 md:pt-24 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground">Loading documentation...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <div className="pt-20 md:pt-24 min-h-screen flex items-center justify-center">
          <div className="text-center max-w-2xl mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">Documentation Not Found</h1>
            <p className="text-muted-foreground mb-8">{error || 'The documentation you are looking for does not exist.'}</p>
            <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <section className="relative pt-20 md:pt-24 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link 
                href={product === 'blockchain-dna' ? '/blockchain-dna' : 
                      product === 'cha-ching-analytics' ? '/cha-ching-analytics' :
                      product === 'zero-knight-30' ? '/zero-knight-30' :
                      product === 'chain-guardian' ? '/chain-guardian' : '/'}
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to {productName}
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 text-white">
              {productName} Documentation
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">
                  {renderMarkdown(content, location)}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

