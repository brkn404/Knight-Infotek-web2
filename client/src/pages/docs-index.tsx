import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "wouter";
import { Book, FileText, Code, HelpCircle, Layers, Shield, Activity } from "lucide-react";

export default function DocsIndex() {
  const products = [
    {
      id: 'blockchain-dna',
      name: 'BlockchainDNA',
      description: 'Universal Identity & Provenance Chain',
      icon: Layers,
      color: 'text-primary',
      docs: [
        { name: 'Overview', path: 'README' },
        { name: 'Architecture', path: 'architecture' },
        { name: 'Getting Started', path: 'getting-started/README' },
        { name: 'API Documentation', path: 'api/README' },
        { name: 'Features', path: 'features/README' },
        { name: 'Integrations', path: 'integrations/README' },
        { name: 'Troubleshooting', path: 'troubleshooting/README' },
        { name: 'FAQs', path: 'faq/README' },
        { name: 'Resources', path: 'resources/README' },
      ]
    },
    {
      id: 'cha-ching-analytics',
      name: 'Cha-Ching Analytics',
      description: 'Real-Time Compliance & Security Platform',
      icon: Activity,
      color: 'text-primary',
      docs: [
        { name: 'Overview', path: 'README' },
        { name: 'Product Spec Sheet', path: 'product-spec-sheet' },
        { name: 'Architecture', path: 'architecture-overview' },
        { name: 'FAQs', path: 'faqs' },
        { name: 'Knowledge Base', path: 'knowledge-base' },
        { name: 'Resources', path: 'resources' },
      ]
    },
    {
      id: 'zero-knight-30',
      name: 'ZeroKnight30',
      description: 'Air-Gapped Security & Integrity Monitoring',
      icon: Shield,
      color: 'text-destructive',
      docs: [
        { name: 'Overview', path: 'README' },
        { name: 'Product Spec Sheet', path: 'product-spec-sheet' },
        { name: 'Architecture', path: 'architecture-diagram' },
        { name: 'FAQs', path: 'faq' },
      ]
    },
    {
      id: 'chain-guardian',
      name: 'ChainGuardian',
      description: 'Mempool Monitoring & Hash Verification',
      icon: Shield,
      color: 'text-orange-500',
      docs: [
        { name: 'Overview', path: 'README' },
        { name: 'Product Spec Sheet', path: 'PRODUCT_SPEC_SHEET' },
        { name: 'Architecture', path: 'ARCHITECTURE_DIAGRAM' },
        { name: 'FAQs', path: 'faqs/GENERAL_FAQS' },
        { name: 'Documentation Index', path: 'documentation/INDEX' },
        { name: 'Resources', path: 'resources/INDEX' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-white">
              PRODUCT <span className="text-primary">DOCUMENTATION</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technical documentation, API references, and integration guides for all Knight InfoTek products.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <Card key={product.id} className="bg-card/50 border-white/10 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center ${product.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-display text-white">{product.name}</CardTitle>
                        <CardDescription className="text-muted-foreground mt-1">
                          {product.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {product.docs.map((doc) => (
                        <Link 
                          key={doc.path}
                          href={`/docs/${product.id}/${doc.path}`}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                        >
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4" />
                            {doc.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

