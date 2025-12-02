import { motion } from "framer-motion";
import { ArrowRight, Network, Shield, Brain, Globe, Lock, FileCheck, Activity, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import architectureImg from "@assets/generated_images/blockchaindna_architecture_diagram_visualization.png";
import genomexImg from "@assets/generated_images/genomex_behavioral_intelligence_visualization.png";
import bridgeImg from "@assets/generated_images/external_bridge_layer_integration_concept.png";
import heroBg from "@assets/generated_images/digital_dna_strand_made_of_blockchain_blocks.png";

export default function BlockchainDNA() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 md:pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="BlockchainDNA Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
          <div className="absolute inset-0 cyber-grid opacity-20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Platform Specification v1.0
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-display">
                BLOCKCHAIN<span className="text-primary">DNA</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-primary font-display font-medium tracking-wide mb-8">
                The Global Ledger of Truth
              </p>
              
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                The Universal Identity, Provenance, Behavior, and Compliance Chain for Human + AI + Asset Governance.
                The trust substrate for the autonomous future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-display text-lg h-12 px-8">
                  Download Spec Sheet
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-display text-lg h-12 px-8">
                  View Architecture
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                WHAT IS <span className="text-primary">BLOCKCHAINDNA</span>?
              </h2>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed text-center">
                BlockchainDNA is the <strong className="text-white">Universal Identity & Provenance Chain</strong> — a foundational infrastructure layer that provides critical value to current blockchain ecosystems today while positioning as the essential infrastructure for Blockchain 4.0 when AI agents meet blockchain technology.
              </p>
              
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed text-center">
                <strong className="text-white">In simple terms:</strong> BlockchainDNA is the trust layer that enables identity, provenance, and accountability for everything on blockchain — from wallets and assets today, to AI agents tomorrow.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="bg-card/50 border-white/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Network className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-white">Universal Identity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Identity for 9 entity types: Human, AI Agent, Wallet, Stablecoin, RWA, DAO, Device, Institution, and Autonomous System. Behavioral verification ensures identity through behavior, not just credentials.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Layers className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-white">Provenance Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Immutable lineage for all entities. Complete audit trails with cryptographic verification. Selective disclosure with zero-knowledge proofs for privacy-preserving compliance.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-white">AI Agent Economy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Essential infrastructure for Blockchain 4.0. ERC8004 compliant identity for AI agents. Professional AI governance with human authority roll-up. Cross-chain AI coordination.
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
              Blockchains were built for transparency—but not trust.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Identity Gaps",
                  desc: "Addresses don't represent entities, intents, or authority. As chains evolve into settlement rails for AI agents, identity becomes critical.",
                  icon: Shield
                },
                {
                  title: "Provenance Gaps",
                  desc: "Most chains provide history—but not behavioral lineage or accountability. Regulators require verifiable identity and provenance.",
                  icon: FileCheck
                },
                {
                  title: "Compliance Gaps",
                  desc: "Regulators require verifiable identity, risk scoring, sanctions checks, provenance, and explainability—all in real-time.",
                  icon: Activity
                },
                {
                  title: "AI Risks",
                  desc: "AI agents cannot rely on public-key ownership alone; they require behavioral governance and delegation models.",
                  icon: Brain
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

      {/* Core Architecture */}
      <section className="py-24 bg-secondary/5 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              PLATFORM <span className="text-primary">ARCHITECTURE</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              BDNA is a cross-chain identity, provenance, and behavioral governance system. It is not a coin, L1, or blockchain replacement—it is trust infrastructure compatible with any blockchain.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={architectureImg} 
                alt="Architecture Diagram" 
                className="rounded-2xl border border-primary/20 shadow-2xl shadow-primary/10"
              />
            </motion.div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Layers className="text-primary" /> Core Chain Registries
                </h3>
                <p className="text-muted-foreground">The foundational layer providing immutable registries for all network participants.</p>
              </div>

              <div className="grid gap-4">
                {[
                  { 
                    title: "GenID", 
                    desc: "Universal Behavioral Identity Registry for 9 entity classes: Human, Wallet, Smart Contract, AI Agent, DAO, Stablecoin Issuer, RWA Issuer, Financial Institution, and Autonomous System. Behavior-first, not credential-first identity.", 
                    icon: Shield 
                  },
                  { 
                    title: "ChainLedger", 
                    desc: "Behavioral Provenance Registry providing tamper-evident records of transaction patterns, historical behavior, authority lineage, device/agent usage, sanctions exposure, compliance flags, and drift/anomaly events. Complete behavioral lineage, not just transaction history.", 
                    icon: FileCheck 
                  },
                  { 
                    title: "AuthorityChain", 
                    desc: "Delegation & Accountability Registry introducing professional roll-up, delegated authority chains, scope-of-practice enforcement, and human-in-the-loop supervision for AI agents. Enables autonomous action within provable constraints.", 
                    icon: Network 
                  },
                  { 
                    title: "ProofHub", 
                    desc: "Compliance & Attestation Registry enabling real-time compliance proofs, chain-of-care evidence, immutable attestations, and explainable decisioning via ExplainCore. Perfect for auditors, regulators, and legal environments.", 
                    icon: Lock 
                  },
                  { 
                    title: "RiskMonitor", 
                    desc: "Behavioral Threat & Drift Detection Registry using GenomeX modules (DriftScanner, PatternTags, BehaviorPrint, CostShield) to detect anomalous wallet flows, off-pattern behavior, sanction evasion, agent takeovers, and smart contract behavioral drift.", 
                    icon: Shield 
                  },
                  { 
                    title: "RuleEngine", 
                    desc: "Governance & Policy Registry enforcing jurisdiction-level controls, AML/SAR rules, scope-of-authority restrictions, DAO governance policies, and institutional compliance frameworks.", 
                    icon: Activity 
                  },
                  { 
                    title: "AccessGate", 
                    desc: "Privacy & Selective Disclosure Registry offering zk-based selective proofs, pseudonymous but verifiable identity, regulator-only disclosure functionality, and GDPR-compliant data-minimization models.", 
                    icon: Lock 
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-white/5 hover:border-primary/30 transition-colors">
                    <div className="p-2 rounded bg-primary/10 text-primary mt-1">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GenomeX Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 skew-y-3 transform origin-top-left" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                GENOME<span className="text-primary">X</span>
              </h2>
              <h3 className="text-xl text-primary font-medium mb-6">Behavioral Intelligence Layer</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                The AI behavioral brain that defines, fingerprints, monitors, and safeguards actions across all agents. It ensures that autonomous systems remain within safe, human-defined bounds.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "GenomeMap: Behavioral blueprints",
                  "PatternTags: High-speed behavior tagging",
                  "DriftScanner: Anomaly detection",
                  "ExplainCore: Decision explainability",
                  "SafetyLease: Time-based permissions",
                  "CostShield: Risk-based pricing"
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm font-medium text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-30" />
                <img 
                  src={genomexImg} 
                  alt="GenomeX Visualization" 
                  className="rounded-2xl border border-white/10 shadow-2xl relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bridge Layer Tabs */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              GLOBAL <span className="text-primary">INTEGRATION</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The Bridge Layer connects BlockchainDNA to the real world—identities, assets, enterprises, and infrastructure.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-background/50 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Globe className="w-5 h-5" /> External Bridges
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-bold text-white">AssetBridge (ERC-8004)</h4>
                  <p className="text-sm text-muted-foreground">Connects RWA tokens, property ledgers, and treasuries.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-white">SessionBridge (X402)</h4>
                  <p className="text-sm text-muted-foreground">Secure, identity-verified wallet sessions.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-white">DataBridge (Chainlink)</h4>
                  <p className="text-sm text-muted-foreground">Real-world data, proofs, and reserve attestations.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" /> Compliance & Identity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-bold text-white">IdentityBridge</h4>
                  <p className="text-sm text-muted-foreground">DID, VC, SSO, and KYC integration.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-white">ComplianceBridge</h4>
                  <p className="text-sm text-muted-foreground">AML, Sanctions, and Travel Rule enforcement.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-white">LicenseBridge</h4>
                  <p className="text-sm text-muted-foreground">Medical, Legal, and Education board verification.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" /> Enterprise & AI
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-bold text-white">AgentBridge</h4>
                  <p className="text-sm text-muted-foreground">OpenAI, Anthropic, and LangChain model connectivity.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-white">EnterpriseBridge</h4>
                  <p className="text-sm text-muted-foreground">Active Directory, Okta, and SIEM integration.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-white">WorkforceBridge</h4>
                  <p className="text-sm text-muted-foreground">HRIS and organizational authority mapping.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 skew-y-3 transform origin-bottom-right" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-8 text-center">
              HOW <span className="text-primary">IT WORKS</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Entity Performs Action",
                  desc: "Wallet transfer, smart contract interaction, agent decision, or API call triggers the BDNA system."
                },
                {
                  step: "2",
                  title: "GenomeX Generates Behavioral DNA",
                  desc: "Dynamic embeddings, drift vectors, and behavioral class are created in real-time using the GenomeX platform."
                },
                {
                  step: "3",
                  title: "BDNA Registries Record Identity & Provenance",
                  desc: "GenID validates entity, ChainLedger logs complete lineage, and AuthorityChain confirms role and delegation."
                },
                {
                  step: "4",
                  title: "RiskMonitor Evaluates Behavioral Trust Score",
                  desc: "Drift, sanctions, threat models, and off-pattern actions are analyzed to generate a trust score."
                },
                {
                  step: "5",
                  title: "RuleEngine Enforces Governance & Compliance",
                  desc: "Jurisdiction, institutional policies, and authority rules are applied automatically."
                },
                {
                  step: "6",
                  title: "ProofHub Produces Attestations",
                  desc: "Real-time compliance proofs, proof-of-integrity, and explainable outputs are generated for auditors and regulators."
                },
                {
                  step: "7",
                  title: "AccessGate Allows Selective Disclosure",
                  desc: "Regulators can see what they need while users maintain privacy through zk-based selective proofs."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-6 p-6 rounded-xl bg-card/50 border border-white/10 hover:border-primary/30 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="text-primary font-display font-bold text-xl">{item.step}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-12 text-center">
            KEY <span className="text-primary">USE CASES</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Agent Identity & Governance",
                desc: "ERC-8004-compatible identity, delegation, oversight, and scope control for autonomous agents operating in blockchain ecosystems.",
                icon: Brain
              },
              {
                title: "Stablecoin Issuer Compliance",
                desc: "Identity, provenance, governance, attestation, and reserve validation layering for stablecoin ecosystems requiring regulatory compliance.",
                icon: Activity
              },
              {
                title: "RWA & Tokenized Finance",
                desc: "Behavioral identity and provenance for tokenized assets, custodians, and asset issuers in the growing tokenized economy.",
                icon: FileCheck
              },
              {
                title: "Cross-Chain Sanctions & AML",
                desc: "Unified behavioral risk signals across Ethereum, Arbitrum, Base, BSC, Polygon, and other major chains for comprehensive compliance.",
                icon: Globe
              },
              {
                title: "DeFi & Exchange Safety",
                desc: "Fraud prevention, pattern detection, and behavioral drift scoring in real-time for decentralized finance platforms and exchanges.",
                icon: Shield
              },
              {
                title: "Institutional Blockchain Adoption",
                desc: "Regulator-grade provenance & identity infrastructure enabling enterprise and government chain usage with full compliance assurance.",
                icon: Network
              }
            ].map((useCase) => (
              <Card key={useCase.title} className="bg-background/50 border-white/10 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded bg-primary/10 text-primary">
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

      {/* Integration Model */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-8 text-center">
              INTEGRATION <span className="text-primary">MODEL</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-center text-lg">
              BDNA integrates seamlessly with existing infrastructure via multiple interfaces
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "REST & GraphQL APIs",
                  desc: "Standard API interfaces for real-time identity, provenance, and compliance queries."
                },
                {
                  title: "SDKs",
                  desc: "TypeScript, Python, and Go SDKs for rapid integration into existing applications."
                },
                {
                  title: "Webhooks & Event Streams",
                  desc: "Real-time event notifications for behavioral changes, risk alerts, and compliance events."
                },
                {
                  title: "Chainlink CCIP",
                  desc: "Cross-chain coordination and data synchronization across multiple blockchain networks."
                },
                {
                  title: "Compliance Modules (CCA)",
                  desc: "Direct integration with Cha-Ching Analytics for enhanced compliance capabilities."
                },
                {
                  title: "Identity Modules (GenID)",
                  desc: "Standalone identity verification and behavioral authentication services."
                }
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-xl bg-card/50 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-12 text-center">
            KEY <span className="text-primary">DIFFERENTIATORS</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Behavior-First Identity: Not biometric, not credentials—behavioral DNA",
              "AI-Native Governance: Built for human + agent ecosystems from the start",
              "Real-Time Provenance: Audit trails that generate themselves",
              "Cross-Chain, Cross-Entity Scope: Universal identity across all major chains",
              "Explainable & Regulator-Ready: ExplainCore enables human-readable reasoning",
              "Privacy-Conscious: zk-selective proofs and jurisdictional controls"
            ].map((item) => (
              <div key={item} className="p-4 rounded-lg bg-background/50 border border-white/10">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}