import { motion } from "framer-motion";
import { Activity, ShieldCheck, Zap, Lock, Globe, Server, FileWarning, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
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
      <section className="relative min-h-[85vh] flex items-center pt-20 md:pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="CCA Background" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/60 to-background/50" />
          <div className="absolute inset-0 cyber-grid opacity-15" />
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                WHAT IS <span className="text-primary">CHA-CHING ANALYTICS</span>?
              </h2>
            </div>
            
            <div className="prose prose-invert max-w-none mb-16">
              <div className="bg-card/50 rounded-xl p-8 md:p-12 border border-white/10 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Product Overview</h3>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed text-center">
                  <strong className="text-white">Cha-Ching Analytics (CCA)</strong> is a real-time compliance and security platform for tokenized assets, stablecoins, and decentralized finance. It provides autonomous fraud prevention, regulatory compliance, and risk management for institutions operating in the tokenized economy.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-background/50 rounded-lg p-6 border border-white/5">
                    <h4 className="text-lg font-bold text-white mb-3">What It Does</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>Prevents fraud before transactions complete</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>Ensures real-time regulatory compliance across multiple jurisdictions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>Validates stablecoin reserves and tokenized asset integrity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>Monitors cross-chain transactions for suspicious activity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>Generates regulator-grade compliance reports and evidence</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-background/50 rounded-lg p-6 border border-white/5">
                    <h4 className="text-lg font-bold text-white mb-3">Problems It Solves</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                        <span><strong>Fraud happens faster than manual systems can react</strong> - CCA stops fraud before it settles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                        <span><strong>Multiple jurisdictions with different regulations</strong> - Unified compliance framework</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                        <span><strong>Irreversible transactions mean errors cannot be undone</strong> - Prevents bad transactions before they occur</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                        <span><strong>Stablecoin reserve integrity concerns</strong> - Real-time validation and monitoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                        <span><strong>Cross-chain fraud and laundering</strong> - Unified detection across all chains</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed text-center">
                <strong className="text-white">Core Value Proposition:</strong> While competitors catch bad actors after the crime, Cha-Ching Analytics stops fraud before it happens through AI-powered behavioral analysis, real-time anomaly detection, and autonomous compliance decision-making.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="bg-card/50 border-white/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Activity className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-white">Real-Time Fraud Prevention</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    AI-powered behavioral analysis detects suspicious patterns before transactions complete. Autonomous compliance decision-making in under 4 seconds.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-white">Multi-Jurisdiction Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Automated regulatory reporting across US, EU, UK, BRICS, and APAC frameworks. 82+ modules covering AML, KYC, sanctions, travel rule, and more.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-white">Proof-of-Reserves Validation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Real-time verification of stablecoin backing and reserve integrity. Transaction-by-transaction monitoring with complete audit trails.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Network className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-white">Cross-Chain Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Multi-blockchain fraud detection and asset tracking. Forensic investigation with complete audit trails and evidence packages for regulators.
                  </p>
                </CardContent>
              </Card>
            </div>
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
                  <Network className="text-primary" /> GenomeX Enhanced Modules
                </h3>
                <p className="text-muted-foreground mb-4">
                  Powered by the GenomeX behavioral intelligence platform, leveraging advanced modules for precision compliance:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> <strong>PatternTags:</strong> High-speed compliance & anomaly classification</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> <strong>DriftScanner:</strong> Behavioral drift scoring for wallets & assets</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> <strong>BehaviorPrint:</strong> Mutation-aware hash fingerprints</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> <strong>CostShield:</strong> Adversarial economic risk scoring</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> <strong>ExplainCore:</strong> Human-readable regulator-grade reasoning</li>
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

      {/* Core Capabilities Detail */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-12 text-center">
            CORE <span className="text-primary">CAPABILITIES</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Real-Time Behavioral Compliance",
                desc: "Powered by GenomeX with PatternTags classification, DriftScanner behavioral drift detection, BehaviorPrint mutation analysis, CostShield adversarial economics, and ExplainCore human-readable reasoning. Detects suspicious activity within seconds, not hours.",
                icon: Zap
              },
              {
                title: "Stablecoin Integrity & Reserve Validation",
                desc: "Proof-of-reserves checks, reserve change alerts, asset mismatch detection, redemption risk scoring, and liquidity monitoring. Issued tokens remain compliant from mint to redemption.",
                icon: ShieldCheck
              },
              {
                title: "RWA & Tokenized Asset Governance",
                desc: "Tracks custodial behavior, issuer behavior, cross-chain asset flows, off-chain/on-chain mismatch, and market manipulation attempts. CCA becomes the 'behavioral auditor' for tokenized finance.",
                icon: FileWarning
              },
              {
                title: "Cross-Chain AML & Sanctions",
                desc: "Unified behavioral detection across Ethereum, Arbitrum, Base, Polygon, BSC, Optimism, and additional L2s & L3s. Identifies cross-chain laundering patterns invisible to single-network tools.",
                icon: Globe
              },
              {
                title: "Market Integrity & Conduct Monitoring",
                desc: "Detects pump-and-dump signals, insider trading patterns, market manipulation, wash trading, and cross-venue abuse. Governance and compliance are enforced continuously.",
                icon: Activity
              },
              {
                title: "Forensics & Regulator-Grade Attestations",
                desc: "Automatically generates SAR-ready reports, case files, evidence bundles, behavioral narratives, chain-of-care proofs, and regulator-specific templates. ExplainCore ensures all decisions are auditable & explainable.",
                icon: Lock
              }
            ].map((capability) => (
              <Card key={capability.title} className="bg-background/50 border-white/10 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded bg-primary/10 text-primary">
                      <capability.icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg font-display">{capability.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{capability.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-16 text-center">
            DEPLOYMENT <span className="text-primary">SCENARIOS</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                {
                  title: "Stablecoin Issuers",
                  desc: "Continuous reserve integrity + AML + cross-chain flow monitoring for USDT, USDC, PYUSD, and other major stablecoins. Automated proof-of-reserve validation, Treasury Direct integration, and reserve ratio monitoring.",
                  icon: Activity
                },
                {
                  title: "Tokenized Asset Platforms (RWAs)",
                  desc: "Custody monitoring, asset-to-token mapping, and drift detection for real estate, commodities, and other tokenized assets. Real estate title validation, commodity backing verification, and cross-border asset compliance.",
                  icon: Lock
                },
                {
                  title: "Exchanges",
                  desc: "Cross-venue abuse detection, sanctions screening, and AML compliance. Bridge security, fraud detection, and automated fund quarantine for suspicious activity.",
                  icon: Network
                },
                {
                  title: "Banks & Financial Institutions",
                  desc: "High-assurance compliance for on/off-chain flows. OFAC sanctions screening, KYB verification, and automated SAR generation for traditional financial institutions entering the digital asset space.",
                  icon: ShieldCheck
                },
                {
                  title: "Regulators",
                  desc: "Automated report generation, conduct monitoring, and provenance tracking. Provides regulator-grade evidence and explainable compliance decisions for enforcement actions.",
                  icon: FileWarning
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

      {/* Market Positioning */}
      <section className="py-24 bg-card/30 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-8 text-center">
              MARKET <span className="text-primary">POSITIONING</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-center">
              CCA is the first compliance platform engineered for the tokenized economy
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "$500B → $3T",
                "$16T",
                "Multi-Chain",
                "Institutional"
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-xl bg-background/50 border border-white/10 text-center">
                  <div className="text-2xl font-display font-bold text-primary mb-2">{stat}</div>
                  <div className="text-sm text-muted-foreground">
                    {i === 0 && "Stablecoin Market"}
                    {i === 1 && "Tokenized Asset Market"}
                    {i === 2 && "AI-Agent Ecosystems"}
                    {i === 3 && "Blockchain Adoption"}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-background/50 p-8 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Competitive Advantage</h3>
              <p className="text-muted-foreground mb-4">
                CCA competes with Chainalysis, TRM Labs, and Elliptic, but offers unique capabilities:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Behavior-first, real-time architecture competitors cannot match</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>82+ production-ready modules—the richest compliance stack in the industry</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Preventive enforcement that stops fraud before it settles</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>ExplainCore generates human-readable reasoning for regulators</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}