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
      <section className="relative min-h-[80vh] flex items-center pt-16 overflow-hidden">
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

      {/* Core Architecture */}
      <section className="py-24 bg-secondary/5 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              PLATFORM <span className="text-primary">ARCHITECTURE</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A next-generation governance chain anchoring identity, behavior, and compliance across all entities.
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
                  { title: "GenID", desc: "Identity Registry for humans, agents, and devices", icon: Shield },
                  { title: "ChainLedger", desc: "Forensic-grade audit & history registry", icon: FileCheck },
                  { title: "RuleEngine", desc: "Behavior & policy enforcement registry", icon: Activity },
                  { title: "RiskMonitor", desc: "Threat detection & drift registry", icon: Shield },
                  { title: "ProofHub", desc: "Attestation & ZK-proof registry", icon: Lock },
                  { title: "AuthorityChain", desc: "Delegation & responsibility roll-up", icon: Network },
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

      {/* Target Industries */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-12 text-center">
            TARGET <span className="text-primary">INDUSTRIES</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Healthcare", "Legal", "Finance / Banking", "Military / Gov",
              "Education", "AI Ecosystems", "Supply Chain", "Cybersecurity"
            ].map((industry) => (
              <div key={industry} className="p-6 rounded-xl bg-card border border-white/5 text-center hover:border-primary/50 hover:bg-primary/5 transition-all group">
                <span className="font-display font-bold text-lg text-muted-foreground group-hover:text-white transition-colors">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}