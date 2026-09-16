import { motion } from "framer-motion";
import {
  Scale,
  Shield,
  Bot,
  Eye,
  Fingerprint,
  Zap,
  ShieldCheck,
  FileKey,
  Users,
  Building2,
  Gavel,
  HeartPulse,
  Factory,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageSeo } from "@/components/page-seo";

import defenseImg from "@assets/generated_images/active_defense_system_visualization.png";
import vaultImg from "@assets/generated_images/air-gapped_server_vault_visualization.png";
import mapImg from "@assets/generated_images/global_threat_monitoring_map.png";
import heroBg from "@assets/generated_images/futuristic_zero_trust_security_concept.png";

export default function AgentGX() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PageSeo
        title="AgentGX"
        description="Governed AI agent operations for regulated industries: behavioral oversight, licensed responsible party workflows, and auditable autonomous actions."
        path="/agent-gx"
      />
      <Navbar />

      <section className="relative min-h-[85vh] flex items-center pt-20 md:pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="AgentGX background"
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Scale className="w-4 h-4" />
                Licensed, regulated & industrial AI governance
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-display">
                AGENT<span className="text-primary">G</span>
                <span className="text-destructive">X</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 font-display font-medium tracking-wide mb-8">
                Trusted AI agent operations in regulated and industrial environments
              </p>

              <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                The universal behavioral intelligence platform for{" "}
                <strong className="text-white">licensed professionals</strong>,{" "}
                <strong className="text-white">regulated enterprises</strong>, and{" "}
                <strong className="text-white">high-stakes operations</strong> that
                must scale with AI without sacrificing accountability. The same
                governance layer extends to{" "}
                <strong className="text-white">Factory&nbsp;4.0</strong> and smart
                manufacturing—where AI agents orchestrate OT/IT, SCADA/ICS, IIoT,
                and cyber-physical systems—and to regulated verticals such as{" "}
                <strong className="text-white">
                  pharmaceuticals, energy, aerospace, and critical infrastructure
                </strong>
                . GenomeX oversight, AgentGX-ARE runtime policy enforcement, and
                immutable Proof-of-Behavior attestations let you delegate with
                confidence and produce evidence suitable for audit review under
                supervision, safety, and oversight requirements.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button asChild className="font-display">
                  <a href="#contact">Talk to Knight InfoTek</a>
                </Button>
                <Button asChild variant="outline" className="font-display border-white/20">
                  <Link href="/enterprise-assurance">Enterprise Assurance</Link>
                </Button>
                <Button asChild variant="outline" className="font-display border-white/20">
                  <a href="/genomex-assurance-platform">GenomeX Assurance Platform</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                WHAT IS <span className="text-primary">AGENTGX</span>?
              </h2>
            </div>

            <div className="prose prose-invert max-w-none mb-16">
              <div className="bg-card/50 rounded-xl p-8 md:p-12 border border-white/10 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Product overview
                </h3>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed text-center">
                  <strong className="text-white">AgentGX</strong> is the
                  operational governance layer for AI agents in{" "}
                  <strong className="text-white">regulated environments</strong>
                  —from licensed professional services to{" "}
                  <strong className="text-white">industrial and Factory&nbsp;4.0</strong>{" "}
                  settings. It unifies identity, behavioral DNA (GenomeX),
                  authority chains, compliance pre-checks, and blockchain-backed
                  attestations so every action is authenticated, explainable, and
                  auditable.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-background/50 rounded-lg p-6 border border-white/5">
                    <h4 className="text-lg font-bold text-white mb-3">
                      What it does
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {[
                        "Delegates work to AI agents under clear chains of accountability—licensed roles, control-room operators, and accountable owners",
                        "Monitors agent behavior with GenomeX—drift, anomalies, and risk scoring across office and OT environments",
                        "Enforces policy in real time via AgentGX-ARE: professional duty, safety envelopes, and operational guardrails",
                        "Produces privacy-preserving Proof-of-Behavior records for regulators, counsel, quality, and safety teams",
                        "Supports secure delegation workflows, guardrails, and coordinated kill-switches across the agent lifecycle",
                      ].map((t) => (
                        <li key={t} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-background/50 rounded-lg p-6 border border-white/5">
                    <h4 className="text-lg font-bold text-white mb-3">
                      Problems it solves
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {[
                        {
                          strong: "Accountability stays with people",
                          rest: "— Emerging AI rules and professional regimes (e.g. Utah AI Policy Act, ABA, FSMB, FINRA) still place duty on licensed and accountable parties; in industry, operational and safety liability works the same way.",
                        },
                        {
                          strong: "No visibility at scale",
                          rest: "— GenomeX delivers supervisory-style oversight across many concurrent agents—in the enterprise and on the plant floor.",
                        },
                        {
                          strong: "Agents exceed delegated scope",
                          rest: "— ARE encodes scope, mandatory escalation, competence limits, and safe operating envelopes in enforceable policies.",
                        },
                        {
                          strong: "“Who supervised this agent?”",
                          rest: "— Proof-of-Behavior and audit trails back diligence for regulators, boards, insurers, and post-incident review—not slide decks.",
                        },
                        {
                          strong: "Perimeter security is not enough",
                          rest: "— IAM and firewalls do not govern what an authorized agent does next. AgentGX governs behavior—professional, safety, and compliance-aligned.",
                        },
                      ].map(({ strong, rest }) => (
                        <li key={strong} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                          <span>
                            <strong className="text-white">{strong}</strong>
                            {rest}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-12 leading-relaxed text-center">
                Competitors optimize for generic AI safety. AgentGX is built for
                the <strong className="text-white">Licensed Responsible Party</strong>{" "}
                and <strong className="text-white">accountable operations</strong>{" "}
                model—whether the duty is professional, regulatory, or
                industrial: authority, behavioral monitoring, policy
                enforcement, and immutable compliance in one stack.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="bg-card/50 border-white/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Fingerprint className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-white">
                    GenomeX behavioral intelligence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Multi-dimensional behavioral DNA for agents—embeddings,
                    drift detection, anomaly signals, and trust scoring so
                    supervisors, operators, and compliance owners see change
                    before it becomes a clinical, financial, or plant-floor
                    incident.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-white">AgentGX-ARE runtime</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Patent-pending signal-to-policy-to-enforcement pipeline:
                    YAML policies, real-time evaluation, explainable blocks and
                    escalations—Zero Trust for AI behavior in the office and on
                    OT-adjacent paths, not just identity.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <FileKey className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-white">
                    Proof-of-Behavior & audit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Cryptographic attestations tie authorized oversight to agent
                    actions—supporting HIPAA, privilege, fiduciary, and
                    malpractice workflows alongside GxP-style traceability,
                    safety case evidence, and board- or insurer-ready reporting.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-white">AgentGX-CORE kernel</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Unified governance core: KYA identity, AuthorityChain
                    delegation, compliance pre-checks, encrypted memory, and
                    coordinated kill-switches—from back-office agents to
                    OT-adjacent and Factory&nbsp;4.0 workloads.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-8 text-center">
              THE <span className="text-destructive">TRUST GAP</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-center">
              Licensed professionals, regulated enterprises, and industrial
              operators need AI scale without surrendering duty of care,
              safety, judgment, or supervisory responsibility
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Undelegatable judgment & duty",
                  desc: "Bar, medical board, FINRA, and similar regimes still require human authority; in manufacturing, safety culture and process integrity demand the same. AgentGX encodes those boundaries in runtime policy—not slide decks.",
                  icon: Gavel,
                },
                {
                  title: "Opaque agent behavior",
                  desc: "LLMs and tool-using agents drift. GenomeX baselines behavior and surfaces early warning before customers, patients, production, or critical services are exposed.",
                  icon: Eye,
                },
                {
                  title: "No proof of oversight",
                  desc: "When counsel, regulators, insurers, or internal safety teams ask what happened, you need artifacts. Proof-of-Behavior and audit trails demonstrate diligence—not guesswork.",
                  icon: FileKey,
                },
                {
                  title: "Regulatory & OT convergence",
                  desc: "AI liability rules and IT/OT convergence are tightening together. AgentGX maps controls to professional duty, emerging AI law, and high-stakes operational expectations.",
                  icon: Scale,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-xl bg-background/50 border border-white/10"
                >
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

      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 skew-y-3 transform origin-top-left" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              CORE <span className="text-primary">CAPABILITIES</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Behavioral policy engine, trust zones, and enforcement designed
              for production agent fleets in regulated offices and on the path
              to autonomous Factory&nbsp;4.0 operations—not demos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="space-y-8">
                {[
                  {
                    title: "Behavioral policy engine",
                    desc: "Human-readable rules, signal-based detection decoupled from enforcement, lifecycle states, and GenomeX-enriched evaluation—for chat, APIs, tools, and industrial agent workflows.",
                    icon: Shield,
                  },
                  {
                    title: "Trust zones & competence",
                    desc: "Dynamic trust bands based on behavioral competence—tighten or expand what an agent may do as risk, environment, and history evolve (office or OT context).",
                    icon: Users,
                  },
                  {
                    title: "Runtime protection that learns",
                    desc: "AgentGX-ARE watches prompts, tools, data access, and outcomes; blocks jailbreaks, scope violations, and unsafe sequences with explainable references to the rule that fired.",
                    icon: Zap,
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-6 rounded-xl bg-card/50 border border-white/10"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded bg-primary/10 text-primary">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
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
                  alt="Agent governance visualization"
                  className="rounded-xl border border-white/10 shadow-2xl relative z-10"
                />
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" /> Delegation with proof
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  AuthorityChain-style delegation means every agent action is
                  tied to an authorized scope—with revocation, attestation, and
                  forensic replay when disputes arise.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Scoped permissions and mandatory escalation paths",
                    "Encrypted memory and secure workflow handoffs",
                    "Tamper-evident logs aligned to regulatory, safety, and professional standards",
                    "On-prem, hybrid, air-gapped, and high-assurance topologies",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Fingerprint className="w-5 h-5" /> Behavioral assurance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Snapshot-style behavioral hashing, cohort comparison, and
                  temporal windows give supervisors and operators the same
                  instinct they use with human teams—quantified for regulated
                  and industrial settings.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Drift velocity and acceleration tracking",
                    "Offline-capable analysis where required",
                    "Risk scores mapped to policy and trust zones",
                    "Early warning before reputational, clinical, or operational harm",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                IMMUTABLE <span className="text-primary">COMPLIANCE</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Privacy-preserving attestations create irrefutable evidence of
                oversight—so when regulators, counsel, quality, or safety teams
                ask whether an accountable party supervised an agent, the answer
                is documented, not improvised.
              </p>
              <div className="space-y-4">
                {[
                  "Blockchain-backed Proof-of-Behavior where policy requires it",
                  "Local-first options for sovereign, classified-style, and air-gapped programs",
                  "Maps to HIPAA, privilege, FINRA, GxP-style traceability, and emerging AI duty rules",
                  "Malpractice defense, quality, safety, audit, and board-ready reporting",
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
                alt="Secure compliance vault"
                className="rounded-xl border border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 skew-y-3 transform origin-bottom-right" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-8 text-center">
              RUNTIME <span className="text-primary">ENFORCEMENT</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              When signals violate policy, AgentGX-ARE can act immediately—with
              explanations tied to the rule that fired—whether the agent
              touches PHI, client records, or OT-adjacent workflows
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Block unsafe tool, API, or data access",
                "Quarantine suspicious agent sessions",
                "Force human-in-the-loop or control-room escalation",
                "Throttle or downgrade trust zones",
                "Halt outputs or sequences that breach scope or safety envelope",
                "Kill-switch coordinated shutdown across agent fleets",
                "Immutable event log for forensics and compliance review",
              ].map((action) => (
                <div
                  key={action}
                  className="p-4 rounded-lg bg-card/50 border border-white/10 flex items-center gap-3"
                >
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

      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-12 text-center">
            KEY <span className="text-primary">INDUSTRIES</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Healthcare",
                desc: "Licensed care organizations scaling triage, documentation, and clinical pathways while professional and FSMB-aligned oversight stays intact.",
                icon: HeartPulse,
              },
              {
                title: "Legal",
                desc: "Law firms and legal departments deploying research and drafting agents with Model Rule 5.3–style supervision encoded in policy.",
                icon: Gavel,
              },
              {
                title: "Financial services",
                desc: "Advisors and compliance officers governing client-facing agents under FINRA and fiduciary frameworks.",
                icon: Building2,
              },
              {
                title: "Smart manufacturing & Factory 4.0",
                desc: "Behavioral governance for autonomous agents on the plant floor—OT/IT, SCADA/ICS, IIoT, and cyber-physical systems—with bounded autonomy, explainable decisions, and audit trails aligned to safety and quality regimes.",
                icon: Factory,
              },
              {
                title: "Enterprise operations",
                desc: "Procurement, risk, HR, and back-office agents with jurisdictional controls, data-residency limits, and spend guardrails across regions.",
                icon: Building2,
              },
              {
                title: "Government & defense-adjacent",
                desc: "High-assurance and critical-infrastructure contexts needing classified-style discipline, separation of duties, and safe automation.",
                icon: Shield,
              },
              {
                title: "Professional services",
                desc: "CPAs, consultants, engineers, and regulated advisors proving diligence as AI becomes baseline client and stakeholder expectation.",
                icon: Users,
              },
            ].map((useCase) => (
              <Card
                key={useCase.title}
                className="bg-background/50 border-white/10 hover:border-primary/30 transition-colors"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded bg-primary/10 text-primary">
                      <useCase.icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg font-display">
                      {useCase.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {useCase.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background border-y border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-12 text-center">
            WHY <span className="text-primary">AGENTGX</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Built for Licensed Responsible Party and accountable operations—not generic chatbot filters",
              "GenomeX + ARE + Proof-of-Behavior in one integrated architecture",
              "Explainable enforcement: every block references policy, not a black box",
              "Trust zones align autonomy with professional and operational risk appetite",
              "Encrypted memory, delegation workflows, and kill-switches across enterprise and industrial deployments",
              "Vertical depth: healthcare, legal, finance, Factory 4.0 / smart manufacturing, and public sector",
              "Patent-pending runtime pipeline with multi-year replication moat",
              "Knight InfoTek implements and supports AgentGX for U.S. enterprises and critical operations",
            ].map((item) => (
              <div
                key={item}
                className="p-4 rounded-lg bg-card/50 border border-white/10"
              >
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-card/30 border-t border-white/5">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
            License AgentGX for your organization, platform, or plant
          </h2>
          <p className="text-muted-foreground mb-8">
            Knight InfoTek is the U.S. implementation partner for Knight InfoTek Global
            IP—including AgentGX rollout for regulated services,
            enterprise programs, and industrial / Factory&nbsp;4.0 initiatives,
            plus integration and ongoing support.
          </p>
          <Button asChild size="lg" className="font-display">
            <Link href="/">Return home</Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-6">
            Or use the contact form on the homepage to reach our team directly.
          </p>
        </div>
      </section>

      <div className="relative h-64 overflow-hidden border-t border-white/5">
        <img
          src={mapImg}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <Footer />
    </div>
  );
}
