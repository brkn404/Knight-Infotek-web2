import { motion } from "framer-motion";
import { ShieldAlert, Lock, Server, Eye, Crosshair, Fingerprint, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import defenseImg from "@assets/generated_images/active_defense_system_visualization.png";
import vaultImg from "@assets/generated_images/air-gapped_server_vault_visualization.png";
import mapImg from "@assets/generated_images/global_threat_monitoring_map.png";
import heroBg from "@assets/generated_images/futuristic_zero_trust_security_concept.png";

export default function ZeroKnight30() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="ZK30 Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium mb-6">
                <ShieldAlert className="w-4 h-4" />
                Advanced Threat Prevention
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-display">
                ZERO<span className="text-primary">KNIGHT</span><span className="text-destructive">30</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 font-display font-medium tracking-wide mb-8">
                Defending the Autonomous Future
              </p>
              
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                Next-generation Zero Trust architecture for autonomous systems. 
                We provide the active defense layer that secures AI agents, smart contracts, and tokenized assets against advanced threats.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-destructive text-destructive-foreground hover:bg-destructive/90 font-display text-lg h-12 px-8">
                  Initialize Defense
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-display text-lg h-12 px-8">
                  System Architecture
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full opacity-20" />
              <img 
                src={defenseImg} 
                alt="Active Defense" 
                className="rounded-xl border border-white/10 shadow-2xl relative z-10"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                ZERO TRUST <br />
                <span className="text-primary">AUTONOMY</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                In a world of autonomous agents and instant settlement, passive security is obsolete. ZeroKnight30 employs a proactive "Never Trust, Always Verify" model specifically designed for blockchain speed.
              </p>
              
              <div className="grid gap-6">
                {[
                  { title: "Active Interception", desc: "Neutralizes threats in <4 seconds, before settlement finality.", icon: Crosshair },
                  { title: "Behavioral DNA Lock", desc: "Biometric-grade behavioral binding for every transaction.", icon: Fingerprint },
                  { title: "Air-Gapped Sovereignty", desc: "Full local operation for critical infrastructure defense.", icon: Server }
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="p-3 rounded bg-primary/10 text-primary border border-primary/20">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Grid */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              DEFENSE <span className="text-destructive">CAPABILITIES</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Military-grade security infrastructure for the decentralized economy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 border-white/10 hover:border-destructive/50 transition-all group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Eye className="text-destructive w-6 h-6" /> Threat Overwatch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Continuous 24/7 monitoring of cross-chain bridges, liquidity pools, and smart contract interactions for anomalous patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-white/10 hover:border-destructive/50 transition-all group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Lock className="text-destructive w-6 h-6" /> Quantum Vault
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Secure enclave technology ensuring that private keys and signing authorities never touch a networked environment.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-white/10 hover:border-destructive/50 transition-all group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Zap className="text-destructive w-6 h-6" /> Flash Response
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Automated circuit breakers that can freeze compromised assets or pause contracts within a single block time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sovereign Infrastructure */}
      <section className="py-24 bg-secondary/5 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                SOVEREIGN <span className="text-primary">INFRASTRUCTURE</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Designed for Governments, Central Banks, and Defense. ZeroKnight30 can operate in a completely disconnected, air-gapped environment while still securing networked assets.
              </p>
              
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-background/50 border border-white/5">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <ShieldCheck className="text-primary" /> GovTech Ready
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Compliant with federal security standards for critical infrastructure protection.
                  </p>
                </div>
                
                <div className="p-6 rounded-xl bg-background/50 border border-white/5">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <Server className="text-primary" /> On-Premises Deployment
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Keep your data, your rules, and your keys physically under your control. No cloud dependencies.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={vaultImg} 
                alt="Sovereign Vault" 
                className="rounded-xl border border-white/10 shadow-2xl"
              />
              <img 
                src={mapImg} 
                alt="Threat Map" 
                className="absolute -bottom-8 -left-8 w-1/2 rounded-lg border border-white/20 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}