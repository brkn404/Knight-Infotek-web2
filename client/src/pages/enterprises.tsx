import { motion } from "framer-motion";
import { Building2, ArrowRight, CheckCircle2, Code, Zap, Shield, Brain, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useLocation } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageSeo } from "@/components/page-seo";
import { PRODUCT_SITES } from "@/lib/product-sites";
import { useEffect } from "react";
import heroBg from "@assets/generated_images/abstract_high-tech_enterprise_blockchain_background.png";

export default function Enterprises() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigateToSection = (sectionId: string) => {
    setLocation('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 200);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PageSeo
        title="Enterprises"
        description="Knight InfoTek for enterprises: behavioral trust, compliance, AI governance, and solution stacks tailored to regulated and high-assurance environments."
        path="/enterprises"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 md:pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Enterprise Solutions Background" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80" />
          <div className="absolute inset-0 cyber-grid opacity-15" />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                Enterprise Solutions
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-display">
                FOR <span className="text-primary">ENTERPRISES</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Accelerate your product roadmap with patent-backed behavioral intelligence, cybersecurity, and blockchain technologies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-center">
                Why Enterprises Choose <span className="text-primary">Knight InfoTek</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-center leading-relaxed">
                Knight InfoTek Global has developed foundational IP in behavioral intelligence, AI-driven cybersecurity, and blockchain infrastructure. As the exclusive U.S. partner, Knight InfoTek helps enterprises license, acquire, and integrate these technologies into their existing platforms—reducing development time from years to months.
              </p>
            </div>

            {/* Engagement Options */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="bg-background/50 border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Code className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl font-display text-white">IP Licensing</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    License Knight InfoTek Global's core technologies to build your own products while Knight InfoTek Global retains IP ownership. Ideal for long-term partnerships and recurring revenue models.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Full usage rights and rebranding capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Access to behavioral intelligence engines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Ongoing support and updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Flexible licensing terms</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-background/50 border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Zap className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl font-display text-white">Product Acquisition</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Acquire complete product lines with full IP ownership. Includes patents, codebase, documentation, and optional transition support.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Complete IP ownership transfer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>12-36 month transition support available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Product takeover and migration assistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Custom feature development included</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Key Benefits */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-center">
                What You Get
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-background/50 border-white/10">
                  <CardHeader>
                    <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                      <Brain className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-display text-white">Behavioral Intelligence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Integrate GenomeX behavioral engines into your platforms for advanced threat detection, anomaly analysis, and behavioral profiling.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 border-white/10">
                  <CardHeader>
                    <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                      <Shield className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-display text-white">Cybersecurity Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Deploy autonomous defense systems, zero-trust architectures, and AI-powered threat detection across your infrastructure.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 border-white/10">
                  <CardHeader>
                    <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                      <Globe className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-display text-white">Blockchain Infrastructure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Leverage blockchain intelligence, compliance frameworks, and decentralized systems for next-generation applications.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Implementation Services */}
            <div className="mb-16 bg-card/50 rounded-xl p-8 md:p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-center">
                Implementation & <span className="text-primary">Integration Services</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">What We Provide</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Full-stack technical integration (Unix/Linux, multi-agent AI, blockchain)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Cybersecurity hardening and compliance setup</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Team training and knowledge transfer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Custom feature development and customization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>12-36 month transition support contracts</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Timeline & Process</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <p className="font-semibold text-white mb-1">Phase 1: Assessment (2-4 weeks)</p>
                      <p className="text-sm">Technical evaluation, architecture review, integration planning</p>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Phase 2: Integration (2-6 months)</p>
                      <p className="text-sm">Implementation, testing, security hardening, team training</p>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Phase 3: Transition (12-36 months)</p>
                      <p className="text-sm">Ongoing support, optimization, feature development, knowledge transfer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Available */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-center">
                Available <span className="text-primary">Technologies</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-background/50 border-white/10 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl font-display text-white">BlockchainDNA (BDNA)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Behavioral intelligence platform for blockchain transaction analysis, fraud detection, and compliance.
                    </p>
                    <a href={PRODUCT_SITES.blockchainDna} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-full">
                        Visit site <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 border-white/10 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl font-display text-white">Cha-Ching Analytics (CCA)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Real-time compliance and fraud prevention for tokenized assets, stablecoins, and DeFi.
                    </p>
                    <a href={PRODUCT_SITES.chaChingAnalytics} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-full">
                        Visit site <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 border-white/10 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl font-display text-white">AgentGX</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Trusted AI agent operations with licensed oversight, behavioral monitoring, and immutable attestations for regulated industries.
                    </p>
                    <Link href="/agent-gx">
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 border-white/10 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl font-display text-white">GenomeX Assurance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Enterprise Assurance control plane — measure trust before restore, index, train, deploy, or act.
                    </p>
                    <a href="/genomex-assurance-platform">
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-xl p-8 md:p-12 border border-primary/30">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-white">
                Ready to <span className="text-primary">Get Started?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact our team to discuss licensing, acquisition, or implementation options tailored to your enterprise needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-display"
                  onClick={() => navigateToSection('contact')}
                >
                  Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10 font-display"
                  onClick={() => navigateToSection('products')}
                >
                  View All Products
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

