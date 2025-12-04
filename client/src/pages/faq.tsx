import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { renderMarkdown } from "@/lib/markdown";
import { Shield, Activity, Zap, Book } from "lucide-react";

interface FAQContent {
  product: string;
  productName: string;
  icon: React.ReactNode;
  content: string | null;
  loading: boolean;
  error: string | null;
}

export default function FAQPage() {
  const [faqs, setFaqs] = useState<FAQContent[]>([
    {
      product: 'blockchain-dna',
      productName: 'BlockchainDNA',
      icon: <Book className="w-5 h-5" />,
      content: null,
      loading: true,
      error: null,
    },
    {
      product: 'cha-ching-analytics',
      productName: 'Cha-Ching Analytics',
      icon: <Activity className="w-5 h-5" />,
      content: null,
      loading: true,
      error: null,
    },
    {
      product: 'zero-knight-30',
      productName: 'ZeroKnight30',
      icon: <Shield className="w-5 h-5" />,
      content: null,
      loading: true,
      error: null,
    },
    {
      product: 'chain-guardian',
      productName: 'ChainGuardian',
      icon: <Zap className="w-5 h-5" />,
      content: null,
      loading: true,
      error: null,
    },
  ]);

  useEffect(() => {
    // Load FAQs for all products
    const products = ['blockchain-dna', 'cha-ching-analytics', 'zero-knight-30', 'chain-guardian'];
    products.forEach((product, index) => {
      loadFAQ(product, index);
    });
  }, []);

  const loadFAQ = async (product: string, index: number) => {
    // Try different FAQ file locations for each product
    const possiblePaths: string[] = [];
    
    if (product === 'blockchain-dna') {
      possiblePaths.push('/content/docs/blockchain-dna/faq/README.md');
    } else if (product === 'cha-ching-analytics') {
      possiblePaths.push('/content/docs/cha-ching-analytics/faqs.md');
    } else if (product === 'zero-knight-30') {
      possiblePaths.push('/content/docs/zero-knight-30/faq.md');
    } else if (product === 'chain-guardian') {
      // ChainGuardian has multiple FAQ files, combine them
      possiblePaths.push(
        '/content/docs/chain-guardian/faqs/GENERAL_FAQS.md',
        '/content/docs/chain-guardian/faqs/TECHNICAL_FAQS.md'
      );
    }

    let combinedContent = '';
    let foundAny = false;

    for (const path of possiblePaths) {
      try {
        const response = await fetch(path);
        if (response.ok) {
          const text = await response.text();
          const trimmed = text.trim();
          
          // Check if content looks like HTML (404 page)
          if (trimmed.startsWith('<!DOCTYPE') || trimmed.startsWith('<html')) {
            continue;
          }
          
          // For ChainGuardian, combine multiple FAQ files
          if (product === 'chain-guardian') {
            if (combinedContent) {
              combinedContent += '\n\n---\n\n';
            }
            combinedContent += text;
          } else {
            combinedContent = text;
          }
          foundAny = true;
        }
      } catch (e) {
        // Continue to next path
      }
    }
    
    // Update state
    setFaqs(prev => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        content: foundAny ? combinedContent : null,
        loading: false,
        error: foundAny ? null : 'FAQ not found',
      };
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-white">
              FREQUENTLY ASKED <span className="text-primary">QUESTIONS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about all Knight InfoTek products and services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="blockchain-dna" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {faqs.map((faq) => (
                <TabsTrigger 
                  key={faq.product} 
                  value={faq.product}
                  className="flex items-center gap-2"
                >
                  {faq.icon}
                  <span className="hidden sm:inline">{faq.productName}</span>
                  <span className="sm:hidden">{faq.productName.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {faqs.map((faq) => (
              <TabsContent key={faq.product} value={faq.product}>
                <Card className="bg-card/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-2xl font-display flex items-center gap-3">
                      {faq.icon}
                      {faq.productName} FAQs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {faq.loading && (
                      <div className="text-center py-8">
                        <p className="text-muted-foreground">Loading FAQs...</p>
                      </div>
                    )}
                    {faq.error && (
                      <div className="text-center py-8">
                        <p className="text-muted-foreground">FAQ content not available.</p>
                      </div>
                    )}
                    {faq.content && (
                      <div className="prose prose-invert prose-lg max-w-none">
                        {renderMarkdown(faq.content, `/content/docs/${faq.product}/faq/README.md`)}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}

