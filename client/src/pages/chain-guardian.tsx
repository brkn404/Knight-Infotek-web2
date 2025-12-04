import { motion } from "framer-motion";
import { ShieldAlert, Globe, Lock, Eye, Server, FileWarning, Zap, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import firewallImg from "@assets/generated_images/mempool_monitoring_firewall_visualization.png";
import hashImg from "@assets/generated_images/hash-only_verification_concept.png";
import commandImg from "@assets/generated_images/mining_pool_command_center.png";
import heroBg from "@assets/generated_images/cross-chain_security_shield.png"; // Re-using a relevant BG

export default function ChainGuardian() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-20 md:pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="ChainGuardian Background" 
            className="w-full h-full object-cover opacity-45 hue-rotate-180" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80" />
          <div className="absolute inset-0 cyber-grid opacity-15" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-medium mb-6">
                <ShieldAlert className="w-4 h-4" />
                Pre-Block Content Safety
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-display">
                CHAIN<span className="text-orange-500">GUARDIAN</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 font-display font-medium tracking-wide mb-8">
                Liability Protection for Miners, Pools & Nodes
              </p>
              
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                The world's first pre-block content safety engine. Detect and block harmful, illegal, or high-liability content before it is permanently written to the blockchain.
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
                WHAT IS <span className="text-orange-500">CHAINGUARDIAN</span>?
              </h2>
            </div>
            
            <div className="prose prose-invert max-w-none mb-16">
              <div className="bg-card/50 rounded-xl p-8 md:p-12 border border-white/10 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Product Overview</h3>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed text-center">
                  <strong className="text-white">ChainGuardian</strong> is a real-time content filtering and compliance system that detects illegal or problematic content embedded in Bitcoin transactions <strong className="text-orange-500">before blocks are mined</strong>. It protects miners, mining pools, node operators, and exchanges from legal liability.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-background/50 rounded-lg p-6 border border-white/5">
                    <h4 className="text-lg font-bold text-white mb-3">What It Does</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                        <span>Monitors Bitcoin mempool for illegal or problematic content before blocks are mined</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                        <span>Detects content using hash-only verification (never views actual content)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                        <span>Blocks or flags problematic transactions before they become permanent</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                        <span>Ensures compliance with US, EU, UK, and other jurisdictional requirements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                        <span>Generates regulator-ready evidence and compliance reports</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-background/50 rounded-lg p-6 border border-white/5">
                    <h4 className="text-lg font-bold text-white mb-3">Problems It Solves</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                        <span><strong>Illegal content embedded in blockchain creates criminal liability</strong> - Prevents illegal content from being permanently written</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                        <span><strong>Miners and pools face regulatory exposure</strong> - Ensures compliance with jurisdictional requirements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                        <span><strong>Once content is committed, exposure is permanent</strong> - Blocks harmful content before block finalization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                        <span><strong>Future regulations may mandate filtering</strong> - Proactive compliance solution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                        <span><strong>No existing pre-mining content filter</strong> - First and only solution for pre-block content safety</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed text-center">
                <strong className="text-white">Key Differentiator:</strong> First and only product focused on pre-mining content filtering with hash-only verification (never views actual content). Powered by Knight Global Enterprises' GenomeX behavioral intelligence platform.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="bg-card/50 border-white/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-orange-500" />
                  </div>
                  <CardTitle className="text-white">Real-Time Content Detection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Mempool monitoring with multi-format content extraction (OP_RETURN, witness data, Ordinals). File type and pattern analysis with signature matching.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                    <Lock className="w-6 h-6 text-orange-500" />
                  </div>
                  <CardTitle className="text-white">Hash-Only Verification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Never views actual content (privacy-preserving). SHA-256 hash-based analysis with threat intelligence integration. Signature database matching.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-orange-500" />
                  </div>
                  <CardTitle className="text-white">Jurisdiction Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    US: FBI IC3 reporting, 7-year retention. EU: GDPR compliance, Europol reporting, 3-year retention. UK: Action Fraud reporting, 5-year retention. Automated reporting workflows.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                    <ShieldAlert className="w-6 h-6 text-orange-500" />
                  </div>
                  <CardTitle className="text-white">Liability Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Protect miners, pools, and nodes from criminal and civil liability. Pre-mining filtering prevents illegal content from being permanently written to the blockchain.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-8 text-center">
              THE <span className="text-destructive">PROBLEM</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-center">
              Modern blockchains (especially Bitcoin) are increasingly used to embed illegal content
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: "CSAM & Extremist Content",
                  desc: "Illegal material embedded in OP_RETURN payloads and inscriptions creates severe criminal liability for miners and pools.",
                  icon: FileWarning
                },
                {
                  title: "Pirated Content & Malware",
                  desc: "Attackers systematically test how much illegal content they can embed, creating permanent exposure risks.",
                  icon: ShieldAlert
                },
                {
                  title: "Regulatory Exposure",
                  desc: "Under EU, US, and international law, knowingly storing illegal content can be prosecutable. Future regulations may mandate filtering.",
                  icon: Globe
                },
                {
                  title: "Permanent Liability",
                  desc: "Once harmful content is committed, industry-wide exposure is permanent. The blockchain cannot be 'edited'.",
                  icon: Lock
                }
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-xl bg-background/50 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded bg-destructive/10 text-destructive">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Prop */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 skew-y-3 transform origin-top-left" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                BLOCKCHAINS ARE <br />
                <span className="text-orange-500">PERMANENT</span>
              </h2>
              <h3 className="text-xl text-white font-bold mb-6">Liability is not optional.</h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Once illegal content (CSAM, extremist propaganda, malware) is mined into a block, everyone who touches it—miners, pools, exchanges, nodes—is exposed to criminal and civil liability. ChainGuardian prevents this by intercepting harmful content before it becomes permanent.
              </p>
              
              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-background/50 border border-white/5 flex gap-4">
                  <div className="p-2 rounded bg-orange-500/10 text-orange-500 h-fit">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Mempool-Level Firewall</h4>
                    <p className="text-sm text-muted-foreground">Detects and blocks problematic content before block finalization.</p>
                  </div>
                </div>
                
                <div className="p-4 rounded-lg bg-background/50 border border-white/5 flex gap-4">
                  <div className="p-2 rounded bg-orange-500/10 text-orange-500 h-fit">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Privacy-First</h4>
                    <p className="text-sm text-muted-foreground">Hash-only verification. No content scanning. No raw data storage.</p>
                  </div>
                </div>
                
                <div className="p-4 rounded-lg bg-background/50 border border-white/5 flex gap-4">
                  <div className="p-2 rounded bg-orange-500/10 text-orange-500 h-fit">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Jurisdiction-Aware</h4>
                    <p className="text-sm text-muted-foreground">Rules adapt per region (US, EU, APAC) to meet specific legal mandates.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500/10 blur-[100px] rounded-full opacity-20" />
              <img 
                src={firewallImg} 
                alt="Mempool Firewall" 
                className="rounded-xl border border-white/10 shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-12 text-center">
            CORE <span className="text-orange-500">CAPABILITIES</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Mempool-Level Content Detection",
                desc: "Real-time monitoring of OP_RETURN payloads, inscription flows, Ordinal-like structures, high-entropy embedded content, suspicious UTXO patterns, anomalous transaction construction, and behavioral signatures of known malicious uploaders. Uses behavioral fingerprints rather than signatures, remaining effective against new embedding techniques.",
                icon: Eye
              },
              {
                title: "Hash-Only Content Verification",
                desc: "Hash-matching against illegal-content hash registries, court-ordered databases, regulator-provided hash lists, and cross-pool threat intelligence networks. ChainGuardian never ingests raw content, enabling safe and legal operation.",
                icon: Database
              },
              {
                title: "Behavioral Risk Scoring (GenomeX)",
                desc: "Using GenomeX modules: PatternTags for policy-violating patterns, DriftScanner for off-pattern uploader behavior, CostShield to raise attacker effort, BehaviorPrint for mutation-aware patterns, and ExplainCore for regulator-readable narratives. Identifies malicious behavior even from new addresses.",
                icon: Zap
              },
              {
                title: "Jurisdiction-Aware Policy Enforcement",
                desc: "Different regions have different liability triggers. ChainGuardian supports US federal filtering policies, EU Digital Services Act mandates, UK Online Safety frameworks, local compliance variations, and miner/pool-specific policies. Can block, flag, or escalate depending on configuration.",
                icon: Globe
              },
              {
                title: "Safe Block Template Generation",
                desc: "Integrates with mining pool block template builders, node validation paths, mempool sorting logic, and custom filtering rules. Miners receive a clean, compliant template, ensuring downstream actors (exchanges, nodes, custodians) remain protected.",
                icon: Lock
              },
              {
                title: "Evidence & Reporting",
                desc: "Produces regulator-ready reason codes, case summaries, tamper-evident logs, timestamped event trails, and audit artifacts—all without exposing content. Perfect for compliance and legal defense.",
                icon: FileWarning
              }
            ].map((capability) => (
              <Card key={capability.title} className="bg-background/50 border-white/10 hover:border-orange-500/30 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded bg-orange-500/10 text-orange-500">
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

      {/* Architecture / Hash-Only */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 skew-y-3 transform origin-bottom-right" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              HASH-ONLY <span className="text-orange-500">VERIFICATION</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Protecting infrastructure without compromising privacy. ChainGuardian never ingests raw content—only hashes, behavior patterns, metadata, and risk signals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src={hashImg} 
                alt="Hash Verification" 
                className="rounded-2xl border border-orange-500/20 shadow-[0_0_50px_-12px_rgba(249,115,22,0.25)]"
              />
            </motion.div>
            
            <div className="grid gap-6">
              <Card className="bg-card/50 border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <Database className="text-orange-500 w-5 h-5" /> Regulatory Hash Registries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Matches against court-ordered databases, regulator-provided lists, and cross-pool threat intelligence networks.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <Eye className="text-orange-500 w-5 h-5" /> Behavioral Detection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Uses GenomeX to score uploader behavior, detecting suspicious UTXO patterns and anomalous transaction construction.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <FileWarning className="text-orange-500 w-5 h-5" /> Safe Block Templates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Miners receive a clean, compliant template, ensuring downstream actors (exchanges, custodians) remain protected.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-12 text-center">
            KEY <span className="text-orange-500">USE CASES</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Bitcoin Mining Pools",
                desc: "Protect block templates from illegal content before mining. Ensure compliance with jurisdictional requirements for safe block production.",
                icon: Server
              },
              {
                title: "Solo Miners",
                desc: "Local compliance shielding without central services. Operate independently while maintaining legal protection.",
                icon: Lock
              },
              {
                title: "Exchanges",
                desc: "Filter inbound mempool activity and avoid liability-tainted transactions. Protect downstream infrastructure and customers.",
                icon: Globe
              },
              {
                title: "Institutions Running Nodes",
                desc: "Ensure nodes don't propagate or index potentially illegal payloads. Maintain regulatory compliance and legal protection.",
                icon: ShieldAlert
              },
              {
                title: "Regulated Mining Operations",
                desc: "Meet jurisdictional requirements for safe block production. Automated compliance with US, EU, UK, and APAC regulations.",
                icon: FileWarning
              },
              {
                title: "Custodians & Infrastructure",
                desc: "Protect against exposure to illegal content in blockchain data. Maintain compliance and avoid legal liability.",
                icon: Eye
              }
            ].map((useCase) => (
              <Card key={useCase.title} className="bg-background/50 border-white/10 hover:border-orange-500/30 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded bg-orange-500/10 text-orange-500">
                      <useCase.icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg font-display">{useCase.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{useCase.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-12 text-center">
            KEY <span className="text-orange-500">DIFFERENTIATORS</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Privacy-First: Never touches raw content—only hashes and behavior",
              "Real-Time Protection: Prevents harm before irreversible block inclusion",
              "Behavioral Intelligence: More resilient than signature-only solutions",
              "Jurisdiction-Aware Rules: Future-proof as global regulations evolve",
              "Infrastructure-Compatible: No protocol changes needed; drop-in deployment",
              "Regulator-Ready Explainability: Every decision is human-interpretable"
            ].map((item) => (
              <div key={item} className="p-4 rounded-lg bg-background/50 border border-white/10">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Positioning */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-8 text-center">
              MARKET <span className="text-orange-500">POSITIONING</span>
            </h2>
            <div className="bg-card/50 p-8 rounded-xl border border-white/10">
              <p className="text-muted-foreground mb-6 text-lg">
                ChainGuardian is the first commercially viable solution enabling compliant Bitcoin mining, legally protected node operations, safe exchange infrastructure, and risk-managed mempool propagation.
              </p>
              <p className="text-muted-foreground mb-4">
                It is positioned as the "content safety firewall" for the blockchain ecosystem—analogous to:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span><strong>Proof-of-reserves</strong> → for balances</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span><strong>MEV protection</strong> → for economic fairness</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span><strong>ChainGuardian</strong> → for safety & legal integrity</span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-6 italic">
                A new essential layer for responsible mining and node operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}