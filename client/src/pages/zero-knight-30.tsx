import { motion } from "framer-motion";
import { ShieldAlert, Lock, Server, Eye, Crosshair, Fingerprint, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
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
      <section className="relative min-h-[85vh] flex items-center pt-20 md:pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="ZK30 Background" 
            className="w-full h-full object-cover opacity-50"
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
                AI-first integrity, threat detection, and autonomous self-healing platform for enterprise, critical infrastructure, government, and high-assurance environments. Unlike traditional EDR tools, ZK30 uses behavioral intelligence to detect any deviation—no signatures, no cloud, no external dependencies.
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
                WHAT IS <span className="text-primary">ZEROKNIGHT30</span>?
              </h2>
            </div>
            
            <div className="prose prose-invert max-w-none mb-16">
              <div className="bg-card/50 rounded-xl p-8 md:p-12 border border-white/10 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Product Overview</h3>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed text-center">
                  <strong className="text-white">ZeroKnight30 (ZK30)</strong> is an autonomous AI defense platform that provides behavioral integrity monitoring, threat detection, and instant selective recovery for enterprise systems, critical infrastructure, and air-gapped environments.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-background/50 rounded-lg p-6 border border-white/5">
                    <h4 className="text-lg font-bold text-white mb-3">What It Does</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>Monitors file and process behavior to detect unauthorized changes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>Detects zero-day attacks and novel threats through behavioral analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>Instantly recovers only compromised files in seconds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>Operates fully offline with no external dependencies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>Provides explainable security decisions for audit and compliance</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-background/50 rounded-lg p-6 border border-white/5">
                    <h4 className="text-lg font-bold text-white mb-3">Problems It Solves</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                        <span><strong>Zero-day attacks bypass signature-based tools</strong> - Detects any behaviorally abnormal mutation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                        <span><strong>Supply-chain compromises in signed binaries</strong> - Behavioral integrity monitoring catches unauthorized changes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                        <span><strong>Ransomware encrypts files faster than cloud detection can respond</strong> - Instant recovery in milliseconds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                        <span><strong>Critical infrastructure requires disconnected systems</strong> - Full offline operation with no external dependencies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                        <span><strong>System downtime from full restores</strong> - Selective recovery of only compromised files</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed text-center">
                Unlike traditional security solutions that rely on static signatures and reactive responses, ZeroKnight30 combines AI-powered behavioral analysis, integrity monitoring, instant selective recovery, and full air-gap compatibility for high-security environments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="bg-card/50 border-white/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <ShieldAlert className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-white">Behavior-First Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Goes beyond static hashing to understand how and why files change. Detects novel attacks through behavioral patterns, not signatures. Zero-day resilience through behavioral anomaly detection.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-white">Advanced Recovery System</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Maintains secure integrity records to enable rapid recovery of compromised components while preventing tampering and minimizing system disruption.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-white">AI-Powered Decision Making</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Advanced AI analysis provides real-time threat assessment and response recommendations. Understands context and behavioral patterns to make intelligent security decisions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Server className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-white">Air-Gap Compatible</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Full offline operation for classified and high-security environments. No external dependencies. Perfect for federal government, defense, and critical infrastructure.
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
              Modern systems face threats that bypass traditional defenses
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Zero-Day Attacks",
                  desc: "Unknown vulnerabilities slip past signature-based tools. ZK30 detects any behaviorally abnormal mutation, regardless of technique.",
                  icon: ShieldAlert
                },
                {
                  title: "Supply-Chain Compromises",
                  desc: "Signed binaries can still be maliciously modified. Behavioral integrity monitoring catches unauthorized mutations instantly.",
                  icon: Lock
                },
                {
                  title: "Ransomware",
                  desc: "Encrypts files faster than cloud-based detection can respond. ZK30 provides rapid recovery capabilities to minimize impact.",
                  icon: Zap
                },
                {
                  title: "Air-Gapped Environments",
                  desc: "Critical infrastructure requires disconnected systems. ZK30 operates fully offline with no external dependencies.",
                  icon: Server
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

      {/* Core Capabilities */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 skew-y-3 transform origin-top-left" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              CORE <span className="text-primary">CAPABILITIES</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              ZK30 uses GenomeX behavioral intelligence to understand normal behavior and detect any deviation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="space-y-8">
                {[
                  {
                    title: "Behavioral Integrity Monitoring",
                    desc: "Continuously monitors system behavior to establish baselines and detect any deviations from normal patterns. Identifies anomalies and suspicious activity without requiring signatures or prior threat knowledge.",
                    icon: Eye
                  },
                  {
                    title: "Advanced Integrity Verification",
                    desc: "Uses sophisticated techniques to distinguish between legitimate file changes and malicious tampering, enabling precise detection of unauthorized modifications.",
                    icon: Fingerprint
                  },
                  {
                    title: "Rapid Recovery System",
                    desc: "Maintains comprehensive behavioral history to enable fast recovery of compromised components while preserving system integrity.",
                    icon: Crosshair
                  }
                ].map((item) => (
                  <div key={item.title} className="p-6 rounded-xl bg-card/50 border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded bg-primary/10 text-primary">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
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
                  src={defenseImg} 
                  alt="Active Defense" 
                  className="rounded-xl border border-white/10 shadow-2xl relative z-10"
                />
              </div>
            </motion.div>
          </div>

          {/* Recovery & Integrity Highlight */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Crosshair className="w-5 h-5" /> Selective Recovery
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  ZK30's advanced recovery system can restore only affected components, minimizing downtime and system disruption.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Precise identification of compromised components</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Rapid restoration to known good states</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Minimal system downtime</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Prevents cascading failures</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Fingerprint className="w-5 h-5" /> Integrity Verification
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Maintains secure, tamper-evident integrity records that enable verification and recovery without external dependencies.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Local-only storage for maximum security</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Tamper-evident integrity records</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Version tracking and verification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Fully offline operation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Air-Gapped Operation */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                AIR-GAPPED <span className="text-primary">OPERATION</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                ZK30 requires no external servers, no cloud, no internet, no blockchain, and no update feeds. Perfect for defense environments, critical infrastructure, sovereign systems, industrial networks, SCADA systems, and regulated on-prem operations.
              </p>
              
              <div className="space-y-4">
                {[
                  "No external servers or cloud dependencies",
                  "No internet connectivity required",
                  "No blockchain or distributed ledger",
                  "No threat intelligence update feeds",
                  "Fully autonomous local operation"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={vaultImg} 
                alt="Air-Gapped Vault" 
                className="rounded-xl border border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Autonomous Response */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 skew-y-3 transform origin-bottom-right" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-8 text-center">
              AUTONOMOUS <span className="text-primary">RESPONSE</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              Upon anomaly detection, ZK30 can automatically respond without human intervention
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Block processes",
                "Quarantine files",
                "Reassign permissions",
                "Kill unauthorized executables",
                "Revert compromised files",
                "Prevent reinfection",
                "Log events with ExplainCore"
              ].map((action) => (
                <div key={action} className="p-4 rounded-lg bg-card/50 border border-white/10 flex items-center gap-3">
                  <div className="p-2 rounded bg-primary/10 text-primary">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-foreground font-medium">{action}</span>
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
                title: "Critical Infrastructure",
                desc: "Power, water, utilities, SCADA, and ICS systems requiring autonomous protection with minimal downtime tolerance.",
                icon: Server
              },
              {
                title: "Defense & National Security",
                desc: "Air-gapped military networks and sovereign systems requiring offline operation with no external dependencies.",
                icon: ShieldAlert
              },
              {
                title: "Enterprise Servers",
                desc: "High-assurance workloads and compliance-bound environments where system integrity must be provable and instantaneous.",
                icon: Lock
              },
              {
                title: "Healthcare",
                desc: "PHI-sensitive systems requiring autonomous protection and instant recovery without compromising patient care.",
                icon: ShieldCheck
              },
              {
                title: "Manufacturing",
                desc: "OT/IT hybrid networks with minimal downtime tolerance, requiring instant selective recovery capabilities.",
                icon: Zap
              },
              {
                title: "Financial Institutions",
                desc: "Where system integrity must be provable and instantaneous, with zero-day detection and behavioral recovery.",
                icon: Eye
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

      {/* Differentiators */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-12 text-center">
            KEY <span className="text-primary">DIFFERENTIATORS</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "AI-first detection: No signatures, no training sets, no cloud",
              "Local-first security: Operates fully offline",
              "Behavior-based recovery: Restores only compromised files instantly",
              "Zero-day immunity: Detects any behaviorally abnormal mutation",
              "Air-gapped compatible: Purpose-built for defense-grade environments",
              "No vendor lock-in: Does not call home or require remote servers",
              "Explainable: Every action is justified via ExplainCore",
              "Competitive with CrowdStrike, SentinelOne, Microsoft Defender ATP"
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