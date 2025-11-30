import { motion } from "framer-motion";
import { Activity, ShieldCheck, Zap, Lock, Globe, Server, FileWarning, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import genomeImg from "@assets/generated_images/behavioral_genome_hashing_visualization.png";
import dashboardImg from "@assets/generated_images/real-time_compliance_dashboard_interface.png";
import shieldImg from "@assets/generated_images/cross-chain_security_shield.png";
import heroBg from "@assets/generated_images/abstract_financial_analytics_visualization.png";

export default function ChaChingAnalytics() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="CCA Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 cyber-grid opacity-20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Activity className="w-4 h-4" />
                Autonomous Compliance Infrastructure
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-display">
                COMPLIANCE AT <br />
                <span className="text-primary text-glow">BLOCKCHAIN SPEED</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                The world's first autonomous AI-powered behavioral genome hashing system. 
                Prevent fraud, ensure compliance, and maintain financial stability in the tokenized economy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-display text-lg h-12 px-8">
                  Request Demo
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-display text-lg h-12 px-8">
                  View Technical Spec
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Compliance Crisis */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                THE COMPLIANCE <span className="text-destructive">CRISIS</span>
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Traditional compliance fails in the tokenized era. Legacy systems take days to settle, while blockchain transactions settle in seconds. This gap creates a critical vulnerability.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="p-2 rounded bg-destructive/10 text-destructive mt-1">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Instant Settlement Risk</h4>
                    <p className="text-sm text-muted-foreground">Fraud happens faster than manual systems can react.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-2 rounded bg-destructive/10 text-destructive mt-1">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Global Fragmentation</h4>
                    <p className="text-sm text-muted-foreground">Multiple jurisdictions with different regulatory regimes.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-2 rounded bg-destructive/10 text-destructive mt-1">
                    <FileWarning className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">No Second Chances</h4>
                    <p className="text-sm text-muted-foreground">Irreversible transactions mean errors cannot be undone.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-destructive/20 blur-[100px] rounded-full opacity-20" />
              <img 
                src={dashboardImg} 
                alt="Compliance Crisis" 
                className="rounded-xl border border-white/10 shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Solution: Behavioral Genome Hashing */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">Core Innovation</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              BEHAVIORAL <span className="text-primary">GENOME HASHING</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We create unique behavioral fingerprints for every wallet and transaction pattern, detecting anomalies before they become threats.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src={genomeImg} 
                alt="Behavioral Genome Hashing" 
                className="rounded-2xl border border-primary/20 shadow-[0_0_50px_-12px_rgba(6,182,212,0.25)]"
              />
            </motion.div>
            
            <div className="space-y-8">
              <div className="bg-card/50 p-6 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Network className="text-primary" /> Digital Genome Concept
                </h3>
                <p className="text-muted-foreground mb-4">
                  Transactions are "genes." Patterns are "traits." Anomalies are "mutations." We anchor this behavioral DNA on-chain.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Pattern Persistence across wallets</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Evolution-Resistant Embeddings</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Mutation Resistance Scoring</li>
                </ul>
              </div>

              <div className="bg-card/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <ShieldCheck className="text-primary" /> Trait Card System
                </h3>
                <p className="text-muted-foreground">
                  Human-readable behavioral reports with risk assessments, regulatory mapping (FATF, MiCA, SEC), and confidence scoring.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-secondary/20 border-white/10 hover:border-primary/50 transition-colors group">
              <CardHeader>
                <CardTitle className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-display text-xl">Real-Time Processing</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  &lt;4 seconds from transaction detection to compliance action. We stop fraud before it happens, not after.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary/20 border-white/10 hover:border-primary/50 transition-colors group">
              <CardHeader>
                <CardTitle className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Server className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-display text-xl">Local AI Processing</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  No external dependencies. Ensures privacy, sovereignty, and air-gapped operation capabilities for critical infrastructure.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary/20 border-white/10 hover:border-primary/50 transition-colors group">
              <CardHeader>
                <CardTitle className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-display text-xl">Global Compliance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Unified framework for US, EU, China, and BRICS regimes. Automated SAR generation and regulatory reporting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-card/30 border-t border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-16 text-center">
            DEPLOYMENT <span className="text-primary">SCENARIOS</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                {
                  title: "Stablecoin Issuers",
                  desc: "Automated proof-of-reserve validation, Treasury Direct integration, and reserve ratio monitoring.",
                  icon: Activity
                },
                {
                  title: "RWA Tokenization",
                  desc: "Real estate title validation, commodity backing verification, and cross-border asset compliance.",
                  icon: Lock
                },
                {
                  title: "Cross-Chain DeFi",
                  desc: "Bridge security, fraud detection, and automated fund quarantine for suspicious activity.",
                  icon: Network
                },
                {
                  title: "Institutional Compliance",
                  desc: "OFAC sanctions screening, KYB verification, and automated SAR generation.",
                  icon: ShieldCheck
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-display">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative h-full min-h-[400px]">
              <img 
                src={shieldImg} 
                alt="Cross Chain Security" 
                className="w-full h-full object-cover rounded-2xl border border-white/10 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-background/80 backdrop-blur p-6 rounded-xl border border-white/10">
                  <h4 className="font-bold text-white mb-2">ZK30-TokenValidator</h4>
                  <p className="text-sm text-muted-foreground">
                    The missing global trust layer preventing double-pledging and cross-chain laundering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}