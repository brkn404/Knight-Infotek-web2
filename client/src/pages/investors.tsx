import { motion } from "framer-motion";
import { TrendingUp, ArrowRight, CheckCircle2, DollarSign, Rocket, Users, Briefcase, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useLocation } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useEffect } from "react";
import heroBg from "@assets/generated_images/abstract_financial_analytics_visualization.png";

export default function Investors() {
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
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 md:pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Investment Opportunities Background" 
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
                <TrendingUp className="w-4 h-4" />
                Investment Opportunities
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-display">
                FOR <span className="text-primary">INVESTORS & INCUBATORS</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Acquire entire product lines, build startups on proven IP, and operate with built-in technical leadership and transition support.
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
                Build on <span className="text-primary">Proven IP</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-center leading-relaxed">
                Knight Global Enterprises has developed patent-backed technologies in behavioral intelligence, AI cybersecurity, and blockchain infrastructure. As an investor or incubator, you can acquire complete product lines, license core IP, or build new companies on top of proven technology—with full transition support from the original architects.
              </p>
            </div>

            {/* Investment Models */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-background/50 border-white/10">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-display text-white">Full Acquisition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Complete IP ownership transfer. Receive all patents, trademarks, codebase, and rights in a one-time purchase.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>100% IP ownership</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>All patents and trademarks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Complete codebase</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>No ongoing royalties</span>
                    </li>
                  </ul>
                  <p className="text-xs text-primary font-medium italic">
                    "It's gone" — Product fully transferred
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/50 border-white/10 border-primary/30">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/20 text-primary w-fit mb-4">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-display text-white">Acquisition + Support</CardTitle>
                  <div className="text-xs text-primary font-medium mb-2">Most Common Model</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Own the product with 12-36 months of transitional support: migration, training, stabilization, and feature development.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Full IP ownership</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>12-36 month support contract</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Team training & knowledge transfer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Custom feature development</span>
                    </li>
                  </ul>
                  <p className="text-xs text-primary font-medium italic">
                    Paid support during transition
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/50 border-white/10">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-display text-white">Licensing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Best long-term model. Get full usage rights, rebranding, and product building capabilities. Knight Global Enterprises retains IP ownership.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Full usage and rebranding rights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Build your own products</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Lower upfront cost</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Ongoing licensing fees</span>
                    </li>
                  </ul>
                  <p className="text-xs text-primary font-medium italic">
                    Recurring revenue — IP ownership retained
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Why Invest */}
            <div className="mb-16 bg-card/50 rounded-xl p-8 md:p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-center">
                Why Invest in <span className="text-primary">Knight Global Enterprises Technologies</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-primary" />
                    Proven Technology
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Patent-backed IP with defensible moats</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Production-ready codebases</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>30+ years of technical development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Battle-tested in enterprise environments</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Built-in Leadership
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Transition support from original architects</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Team training and knowledge transfer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Ongoing technical consulting available</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Custom feature development support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Available Products */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-center">
                Available for <span className="text-primary">Acquisition or Licensing</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-background/50 border-white/10 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl font-display text-white">BlockchainDNA (BDNA)</CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">Behavioral Intelligence Platform</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Complete behavioral intelligence platform for blockchain transaction analysis, fraud detection, and compliance. Production-ready with 80+ modules.
                    </p>
                    <div className="flex gap-2">
                      <Link href="/blockchain-dna">
                        <Button variant="outline" size="sm">
                          Learn More <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 border-white/10 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl font-display text-white">Cha-Ching Analytics (CCA)</CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">Real-Time Compliance Platform</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Comprehensive compliance and fraud prevention for tokenized assets, stablecoins, and DeFi. Multi-jurisdiction regulatory support.
                    </p>
                    <div className="flex gap-2">
                      <Link href="/cha-ching-analytics">
                        <Button variant="outline" size="sm">
                          Learn More <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 border-white/10 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl font-display text-white">ZeroKnight30 (ZK30)</CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">Autonomous Defense Platform</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      AI-first threat detection and self-healing integrity platform. Air-gapped operation, perfect for classified environments.
                    </p>
                    <div className="flex gap-2">
                      <Link href="/zero-knight-30">
                        <Button variant="outline" size="sm">
                          Learn More <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 border-white/10 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl font-display text-white">ChainGuardian</CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">Content Compliance System</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Pre-mining content filter for Bitcoin. Protects miners, pools, and exchanges from legal liability. Real-time mempool scanning.
                    </p>
                    <div className="flex gap-2">
                      <Link href="/chain-guardian">
                        <Button variant="outline" size="sm">
                          Learn More <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Incubator Benefits */}
            <div className="mb-16 bg-card/50 rounded-xl p-8 md:p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-center">
                For <span className="text-primary">Incubators & Accelerators</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Portfolio Company Benefits</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Startups can license or acquire Knight Global Enterprises IP to build products faster</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Reduced time-to-market from years to months</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Built-in technical leadership and support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Proven technology reduces technical risk</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Partnership Opportunities</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Bulk licensing agreements for portfolio companies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Preferred pricing for incubator partners</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Co-marketing and partnership opportunities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Technical workshops and training for portfolio</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Investment Process */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-center">
                Investment <span className="text-primary">Process</span>
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="p-4 rounded-lg bg-primary/10 text-primary w-fit mx-auto mb-4">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Initial Inquiry</h3>
                  <p className="text-sm text-muted-foreground">
                    Contact us to discuss your investment goals and product interests.
                  </p>
                </div>
                <div className="text-center">
                  <div className="p-4 rounded-lg bg-primary/10 text-primary w-fit mx-auto mb-4">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Due Diligence</h3>
                  <p className="text-sm text-muted-foreground">
                    Review IP portfolio, codebase, documentation, and technical architecture.
                  </p>
                </div>
                <div className="text-center">
                  <div className="p-4 rounded-lg bg-primary/10 text-primary w-fit mx-auto mb-4">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Term Negotiation</h3>
                  <p className="text-sm text-muted-foreground">
                    Structure acquisition, licensing, or partnership agreement.
                  </p>
                </div>
                <div className="text-center">
                  <div className="p-4 rounded-lg bg-primary/10 text-primary w-fit mx-auto mb-4">
                    <span className="text-2xl font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Transition & Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Product transfer, team training, and ongoing support as needed.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-xl p-8 md:p-12 border border-primary/30">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-white">
                Build Your Next <span className="text-primary">Company on Proven IP</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact our team to discuss acquisition, licensing, or partnership opportunities. We work with investors and incubators to structure deals that work for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-display"
                  onClick={() => navigateToSection('contact')}
                >
                  Schedule Investment Call <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10 font-display"
                  onClick={() => navigateToSection('products')}
                >
                  View IP Portfolio
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

