import { motion } from "framer-motion";
import { ShieldAlert, Globe, Lock, Eye, Server, FileWarning, Zap, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      <section className="relative min-h-[85vh] flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="ChainGuardian Background" 
            className="w-full h-full object-cover opacity-20 hue-rotate-180" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
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
                The world’s first pre-block content safety engine. Detect and block harmful, illegal, or high-liability content before it is permanently written to the blockchain.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 text-white hover:bg-orange-700 font-display text-lg h-12 px-8">
                  Deploy Protection
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-display text-lg h-12 px-8">
                  View Integration Docs
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Value Prop */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                BLOCKCHAINS ARE <br />
                <span className="text-orange-500">PERMANENT</span>
              </h2>
              <h3 className="text-xl text-white font-bold mb-6">Liability is not optional.</h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Once illegal content (CSAM, extremist propaganda, malware) is mined into a block, everyone who touches it—miners, pools, exchanges, nodes—is exposed to criminal and civil liability.
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

      {/* Architecture / Hash-Only */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              HASH-ONLY <span className="text-orange-500">VERIFICATION</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Protecting infrastructure without compromising privacy. ChainGuardian never ingests raw content.
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

      {/* Target Market */}
      <section className="py-24 bg-secondary/5 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                PROTECTING <span className="text-white">INFRASTRUCTURE</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                ChainGuardian is the "content safety firewall" for the blockchain ecosystem.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Bitcoin Mining Pools",
                  "Solo Miners",
                  "Crypto Exchanges",
                  "Institutional Node Operators",
                  "Regulated Mining Ops",
                  "Custodians"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded bg-background/50 border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
               <img 
                src={commandImg} 
                alt="Mining Pool Command" 
                className="rounded-xl border border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}