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
      <section className="relative min-h-[85vh] flex items-center pt-20 md:pt-24 overflow-hidden">
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
                AI-first integrity, threat detection, and autonomous self-healing platform for enterprise, critical infrastructure, government, and high-assurance environments. Unlike traditional EDR tools, ZK30 uses behavioral intelligence to detect any deviation—no signatures, no cloud, no external dependencies.
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

      {/* Overview Section */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                WHAT IS <span className="text-primary">ZEROKNIGHT30</span>?
              </h2>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed text-center">
                <strong className="text-white">ZK30-Gladiator</strong> is the world's first autonomous AI defense platform featuring <strong className="text-primary">Blockchain-Anchored Behavioral Snapshot Recovery (BSR)</strong>—a revolutionary self-healing system that detects, validates, and instantly restores file integrity using behavioral context and immutable blockchain attestation.
              </p>
              
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed text-center">
                Unlike traditional security solutions that rely on static signatures and reactive responses, ZK30-Gladiator combines AI-powered behavioral analysis, blockchain-anchored integrity, instant selective recovery, and full air-gap compatibility for high-security environments.
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
                  <CardTitle className="text-white">Blockchain-Anchored Recovery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Immutable proof of clean states prevents tampering. Behavioral Snapshot Graph tracks complete file version lineage. Selective recovery of only corrupted files in seconds.
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
                    Local LLM (ORACLE) reasons about threats in real-time. Understands context, not just content. Predicts attacker next steps and recommends optimal countermeasures.
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
                  desc: "Encrypts files faster than cloud-based detection can respond. ZK30's instant BSR recovery restores files in milliseconds.",
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
                    desc: "Baselines normal file/process behavior, detects unauthorized mutations, identifies drift and behavioral anomalies, classifies suspicious patterns, detects privilege escalation attempts, and observes inter-process relationships—all without signatures or prior knowledge of threats.",
                    icon: Eye
                  },
                  {
                    title: "BehaviorPrint: Contextual Integrity Hashing",
                    desc: "Traditional hashes break when files legitimately change. BehaviorPrint adapts by incorporating metadata, behavioral context, mutation lineage, expected change profiles, and semantic content patterns. This allows ZK30 to distinguish legitimate change vs malicious tampering with surgical precision.",
                    icon: Fingerprint
                  },
                  {
                    title: "Behavioral Snapshot Graph (BSG)",
                    desc: "Every critical file/process has a behavioral lineage graph with versions, mutations, behavioral fingerprints, and ancestry relationships. This enables both forensic visibility and rapid recovery.",
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

          {/* BSR & CSA Highlight */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Crosshair className="w-5 h-5" /> Behavioral Snapshot Recovery (BSR)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  ZK30's flagship capability: Instantly recover only corrupted files, not the whole system.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Identify which files are compromised</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Determine the closest clean behavioral ancestor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Restore in milliseconds (~0.1–3 seconds)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Avoid downtime and prevent cascading corruption</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground italic">
                  No backups. No snapshots. Recovery is behavioral, not filesystem-based.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Fingerprint className="w-5 h-5" /> Clean State Anchors (CSAs)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  CSAs are integrity anchors stored locally inside ZK30. They are immutable, tamper-evident, version-linked, behavior-indexed, and offline-verifiable.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Local-only storage (no blockchain)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Immutable and tamper-evident</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Version-linked and behavior-indexed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Fully offline-verifiable</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground italic">
                  CSAs do NOT write to BDNA or any blockchain. They remain internal for security and compliance reasons.
                </p>
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

      {/* Technical Specifications */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-12 text-center">
              TECHNICAL <span className="text-primary">SPECIFICATIONS</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  metric: "~0.1–3 seconds",
                  label: "Recovery Time",
                  desc: "Depending on file size"
                },
                {
                  metric: "Continuous",
                  label: "Integrity Checks",
                  desc: "Adaptive, contextual monitoring"
                },
                {
                  metric: "Local-Only",
                  label: "CSA Storage",
                  desc: "Tamper-evident, offline-verifiable"
                },
                {
                  metric: "Low Overhead",
                  label: "Resource Usage",
                  desc: "Optimized watchers and monitors"
                },
                {
                  metric: "Linux (Primary)",
                  label: "Supported OS",
                  desc: "Windows support in development"
                },
                {
                  metric: "On-Prem / Air-Gapped",
                  label: "Deployment",
                  desc: "Offline endpoint operation"
                }
              ].map((item) => (
                <div key={item.label} className="p-6 rounded-xl bg-card/50 border border-white/10 text-center">
                  <div className="text-2xl font-display font-bold text-primary mb-2">{item.metric}</div>
                  <div className="text-lg font-bold text-white mb-2">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
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