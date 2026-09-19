import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  Bot,
  Fingerprint,
  Factory,
  Building2,
  Cloud,
  Cpu,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageSeo } from "@/components/page-seo";

import heroBg from "@assets/generated_images/futuristic_zero_trust_security_concept.png";
import defenseImg from "@assets/generated_images/active_defense_system_visualization.png";

function SectionHeader({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  id?: string;
}) {
  return (
    <div id={id} className="text-center mb-10 md:mb-12 max-w-3xl mx-auto scroll-mt-28">
      {eyebrow && (
        <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">{title}</h2>
      {description && (
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}

const DECISIONS = [
  { label: "ALLOW", desc: "Within qualified bounds; evidence sufficient.", className: "border-green-500/30 bg-green-500/10 text-green-400" },
  { label: "CONFIRM", desc: "Human approval required before execution.", className: "border-amber-500/30 bg-amber-500/10 text-amber-400" },
  { label: "DENY", desc: "Outside qualified authority.", className: "border-red-500/30 bg-red-500/10 text-red-400" },
  { label: "UNKNOWN", desc: "Insufficient evidence — authority withheld.", className: "border-white/20 bg-white/5 text-muted-foreground" },
];

const PRODUCT_LOOP = [
  { phase: "Observe", detail: "Agent telemetry, tool calls, environmental context, session evidence." },
  { phase: "Characterize", detail: "GenomeX behavioral state, drift, trajectory — one wire across environments." },
  { phase: "Qualify", detail: "Qualification campaign → versioned GX Behavioral Passport (GXBP)." },
  { phase: "Govern", detail: "Every proposed action vs. Passport and policy before actuation." },
  { phase: "Prove", detail: "Evidence receipt: gates, bounds, passport fingerprint, operator override." },
];

export default function AgentGX() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PageSeo
        title="AgentGX — Behavioral Authority for Autonomous Systems"
        description="AgentGX is an independent behavioral authority layer for AI agents and autonomous systems. Qualify deployments with evidence-backed Behavioral Passports; govern every action with ALLOW, CONFIRM, DENY, or UNKNOWN. Validated first in OT and critical infrastructure."
        path="/agent-gx"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center pt-20 md:pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/55 to-background" />
          <div className="absolute inset-0 cyber-grid opacity-15" />
        </div>
        <div className="container mx-auto px-4 relative z-10 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Bot className="w-4 h-4" />
              AgentGX · v1.1 · September 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-display">
              Behavioral authority for{" "}
              <span className="text-primary">autonomous systems</span>
            </h1>
            <blockquote className="border-l-2 border-primary pl-4 text-lg md:text-xl text-white/90 mb-6 italic max-w-2xl">
              Given what this agent is doing, what it has been qualified to do, and the
              evidence available right now — should it be allowed to act?
            </blockquote>
            <p className="text-muted-foreground mb-4 max-w-2xl leading-relaxed">
              AgentGX observes behavior through <strong className="text-white">GenomeX</strong>,
              establishes <strong className="text-white">Behavioral Passports</strong> from
              qualified evidence, and governs every proposed action:
            </p>
            <p className="text-lg font-display font-semibold text-primary mb-6 tracking-wide">
              ALLOW · CONFIRM · DENY · UNKNOWN
            </p>
            <p className="text-sm text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Judgment stays outside the agent. Evidence stays inside the receipt. Knight
              InfoTek is proving AgentGX first in <strong className="text-white">OT, ICS, and
              critical infrastructure</strong> — where ungoverned agent action carries the
              highest consequence. The same authority model applies to enterprise, cloud, and
              robotics agents.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="font-display">
                <a href="mailto:contact@knightinfotek.com?subject=AgentGX%20pilot%20inquiry">
                  Talk to us about a pilot
                </a>
              </Button>
              <Button asChild variant="outline" className="font-display border-white/20">
                <a href="#how-it-works">See how it works</a>
              </Button>
              <Button asChild variant="outline" className="font-display border-white/20">
                <a href="/genomex-assurance-platform">GenomeX Assurance Platform</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 md:py-20 bg-card/20 border-y border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeader
            eyebrow="The problem"
            title="Agents read, reason, and act — most tools govern users and networks"
            description="In OT and critical infrastructure, a wrong ALLOW can mean physical harm or outage. That is why validation starts there. The authority problem is universal."
          />
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-background/50">
                  <th className="text-left p-4 text-white font-semibold">Gap</th>
                  <th className="text-left p-4 text-white font-semibold">What goes wrong</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["No qualification boundary", "An agent that worked in demo has no formal envelope for production."],
                  ["Behavior without authority", "Telemetry shows what happened — not whether the next action should be permitted."],
                  ["Opaque decisions", "ALLOW/DENY with no receipt means no audit, replay, or operator trust."],
                  ["Confused roles", "Process fault, attack, and unauthorized agent action treated as the same alarm."],
                ].map(([gap, wrong]) => (
                  <tr key={gap} className="border-b border-white/5">
                    <td className="p-4 text-white font-medium align-top">{gap}</td>
                    <td className="p-4 align-top">{wrong}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6 max-w-2xl mx-auto">
            AgentGX does not replace SCADA, safety PLCs, or SIEM. It sits at the authority seam
            — between what an agent <em>proposes</em> and what the environment <em>allows</em>.
          </p>
        </div>
      </section>

      {/* Domain scope */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeader
            eyebrow="Domain scope"
            title={<>AgentGX is not an OT-only product. <span className="text-primary">OT is where we earn trust first.</span></>}
          />
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-card/40 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg font-display text-white">Product scope</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>Any autonomous or AI-assisted system that proposes actions via tools — IT, cloud, enterprise, robotics, OT.</p>
              </CardContent>
            </Card>
            <Card className="bg-card/40 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg font-display text-primary">First beachhead</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>OT, ICS, and critical infrastructure — extreme risk justifies rigorous proof first. FactoryXChange partner PoC next.</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Factory, label: "Critical infrastructure", detail: "Historians, setpoints, SCADA-adjacent APIs" },
              { icon: Building2, label: "Enterprise agents", detail: "CRM, ERP, ticketing, MCP tools" },
              { icon: Cloud, label: "Cloud automation", detail: "Infra agents, deployment bots" },
              { icon: Cpu, label: "Robotics & field", detail: "Bounded actuation with CONFIRM paths" },
            ].map(({ icon: Icon, label, detail }) => (
              <div key={label} className="rounded-xl border border-white/10 bg-background/40 p-4">
                <Icon className="w-5 h-5 text-primary mb-2" />
                <p className="text-sm font-semibold text-white mb-1">{label}</p>
                <p className="text-xs text-muted-foreground">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it is / is not */}
      <section className="py-16 md:py-20 bg-card/20 border-y border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeader
            eyebrow="What AgentGX is"
            title="Independent behavioral authority layer"
            description="GenomeX is the behavioral instrument. AgentGX is the decision surface."
          />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-primary/25 bg-primary/5 p-6">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" /> What it is
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                AgentGX uses GenomeX behavioral evidence to qualify autonomous systems and
                govern whether they may act — supervising agents and their interaction with
                tools, machines, networks, and operational processes.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-background/40 p-6">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-destructive" /> What it is not
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                {[
                  "Not a replacement SCADA or safety controller",
                  "Not a generic SOC dashboard or packet analyzer",
                  "Not a single trust score or black-box AI filter",
                  "Not tied to one LLM, cloud, or agent framework",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 md:py-20 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeader
            eyebrow="How it works"
            title="Observe → Characterize → Qualify → Govern → Prove"
            description="For every request: may this agent perform this action, with this tool, on this target, under the conditions that exist now?"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {PRODUCT_LOOP.map((step, i) => (
              <div key={step.phase} className="rounded-xl border border-white/10 bg-card/30 p-4 text-center">
                <div className="text-primary font-display font-bold text-lg mb-1">{i + 1}</div>
                <p className="text-sm font-semibold text-white mb-2">{step.phase}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-bold font-display text-white mb-4">Decision surface</h3>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {DECISIONS.map((d) => (
                  <div key={d.label} className={`rounded-lg border p-3 ${d.className}`}>
                    <strong className="block text-sm mb-1">{d.label}</strong>
                    <span className="text-xs opacity-90">{d.desc}</span>
                  </div>
                ))}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Two gates, one decision</h3>
              <div className="space-y-3 text-sm">
                <div className="rounded-lg border border-white/10 bg-background/50 p-4">
                  <span className="text-primary font-mono font-semibold">G_E</span>
                  <span className="text-white font-medium ml-2">Evidence sufficiency</span>
                  <p className="text-muted-foreground mt-1">Is there enough qualified evidence to decide at all?</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-background/50 p-4">
                  <span className="text-primary font-mono font-semibold">G_A</span>
                  <span className="text-white font-medium ml-2">Action qualification</span>
                  <p className="text-muted-foreground mt-1">Is this specific proposed change within the Passport envelope?</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={defenseImg} alt="Agent authority layer" className="rounded-xl border border-white/10 shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Behavioral Passports */}
      <section className="py-16 md:py-20 bg-card/20 border-y border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeader
            eyebrow="Behavioral Passports"
            title="GXBP — operational contracts, not safety certificates"
            description="Passports bind an agent deployment to evidence-backed authority with lifecycle state, modes, per-tag bounds, and authority policy (GX-A1 advise through GX-A3 bounded autonomous execution)."
          />
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 font-mono text-sm text-center mb-6">
            GXBP:FXC:TEP-AGENT-01:003
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Identity & fingerprint",
              "Lifecycle: draft, frozen, revoked, requalification",
              "Modes & per-tag actuation bounds",
              "Authority policy GX-A1 → GX-A3",
              "Evidence receipt on every decision",
              "Portable across qualification campaigns",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground p-3 rounded-lg bg-background/40 border border-white/5">
                <Fingerprint className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operator console */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeader
            eyebrow="Operator experience"
            title="Built for operators and engineers"
            description="Five questions on every shift: which agent, which Passport, what authority, what changed, why was the last action allowed or denied?"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Command", purpose: "Live agent, passport, decision, approve/deny" },
              { name: "Agents", purpose: "Fleet of governed deployments" },
              { name: "Agent Detail", purpose: "GenomeX state, qualification, timeline" },
              { name: "Passports", purpose: "Modes, bounds, lifecycle, fingerprint" },
              { name: "Observation Lens", purpose: "Governed evidence graph — not raw PCAP" },
              { name: "Decisions", purpose: "Receipt log with G_E, G_A, audit trail" },
            ].map((view) => (
              <Card key={view.name} className="bg-card/40 border-white/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-display text-white">{view.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">{view.purpose}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-16 md:py-20 bg-card/20 border-y border-white/5">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeader eyebrow="Architecture" title="Where AgentGX sits" />
          <pre className="text-xs md:text-sm text-muted-foreground bg-background/60 border border-white/10 rounded-xl p-6 overflow-x-auto leading-relaxed font-mono text-center">
{`        ┌─────────────────┐
        │  AI / LLM Agent │
        └────────┬────────┘
                 │ proposes action
                 ▼
        ┌─────────────────┐
        │    AgentGX      │  ← ALLOW / CONFIRM / DENY / UNKNOWN
        │ Authority Layer │
        └────────┬────────┘
                 │ only if permitted
                 ▼
        ┌─────────────────┐
        │ Tools · APIs · OT│
        └─────────────────┘`}
          </pre>
          <p className="text-center text-sm text-muted-foreground mt-6">
            MCP tool surfaces, agent runtimes, enterprise APIs, and industrial adapters — without
            owning the underlying system or model.
          </p>
        </div>
      </section>

      {/* Lab validation */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeader
            eyebrow="Validated in the laboratory"
            title="Proven first in ICS — domain-neutral authority contract"
            description="Public ICS environments (SWaT, HAI, TEP, BATADAL, WaDi) and live LLM agent loops. We report failures as clearly as successes."
          />
          <div className="overflow-x-auto rounded-xl border border-white/10 mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-background/50">
                  <th className="text-left p-3 text-white">Experiment</th>
                  <th className="text-left p-3 text-white">What it proved</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["SWaT Lab 1.0", "0% false-positive on normal sequences; sub-60 ms gate latency"],
                  ["TEP multi-mode", "Separates process fault from agent authority violation"],
                  ["LOOP-002 (TEP)", "Same historian context, different proposed Δ → ALLOW vs DENY"],
                  ["LOOP-003", "G_E and G_A compose independently; UNKNOWN ≠ DENY"],
                ].map(([exp, result]) => (
                  <tr key={exp} className="border-b border-white/5">
                    <td className="p-3 text-white font-medium align-top">{exp}</td>
                    <td className="p-3 align-top">{result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border border-white/10 bg-card/30 p-6">
            <h3 className="text-lg font-bold font-display text-white mb-3">FactoryXChange design partner</h3>
            <p className="text-sm text-muted-foreground mb-4">
              First industrial beachhead: connect telemetry → characterize via GenomeX → qualify
              → issue frozen GXBP → govern every proposed action → prove with auditor-ready receipts.
            </p>
            <p className="text-xs text-muted-foreground">
              FXC ingestion scaffold built and tested on SWaT-lab shadow data. Partner dialect and
              live promotion to FROZEN passport are the active track.
            </p>
          </div>
        </div>
      </section>

      {/* GenomeX family */}
      <section className="py-16 md:py-20 bg-card/20 border-y border-white/5">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <SectionHeader
            eyebrow="GenomeX family"
            title="One behavioral science. Multiple decision surfaces."
          />
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <a href="https://blockchain-dna.com" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/10 bg-background/40 p-4 hover:border-primary/40 transition-colors">
              <p className="font-semibold text-white mb-1">BlockchainDNA</p>
              <p className="text-muted-foreground text-xs">What changed?</p>
            </a>
            <a href="/genomex-assurance-platform" className="rounded-xl border border-primary/30 bg-primary/5 p-4 hover:border-primary/50 transition-colors">
              <p className="font-semibold text-primary mb-1">GenomeX Assurance</p>
              <p className="text-muted-foreground text-xs">Trust before use?</p>
            </a>
            <div className="rounded-xl border border-white/10 bg-background/40 p-4">
              <p className="font-semibold text-white mb-1">AgentGX</p>
              <p className="text-muted-foreground text-xs">May it act?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeader eyebrow="Who it's for" title="Roles and deployment surfaces" />
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { role: "Operators (OT / IT)", value: "Clear ALLOW/CONFIRM/DENY with receipts — not another alarm flood" },
              { role: "CISO / GRC", value: "Evidence-backed qualification and audit trail for AI in production" },
              { role: "Automation & AI engineers", value: "Authority boundary that works with any agent framework or LLM" },
              { role: "Integrators & OEMs", value: "Behavioral Passport as a deliverable qualification artifact" },
            ].map(({ role, value }) => (
              <div key={role} className="p-4 rounded-xl border border-white/10 bg-card/30">
                <p className="text-sm font-semibold text-white mb-1">{role}</p>
                <p className="text-xs text-muted-foreground">{value}</p>
              </div>
            ))}
          </div>
          <h3 className="text-lg font-bold font-display text-white mb-4 text-center">Deployment shape</h3>
          <ol className="max-w-2xl mx-auto space-y-2 text-sm text-muted-foreground list-decimal list-inside">
            {[
              "Install AgentGX (edge or site-local; air-gapped supported)",
              "Connect agent runtime and telemetry adapters",
              "Observe representative operation",
              "Run qualification campaign → issue GXBP",
              "Enforce authority on every proposed action",
              "Inspect receipts; requalify when the system or agent changes",
            ].map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-card/20 border-y border-white/5">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeader eyebrow="FAQ" title="Common questions" />
          <div className="space-y-4">
            {[
              {
                q: "Does AgentGX require a specific LLM?",
                a: "No. Any agent that exposes tool calls or actuation requests can sit behind the boundary.",
              },
              {
                q: "Does it replace our safety PLC?",
                a: "No. AgentGX governs agent authority — what an AI is permitted to request — not primary process safety interlocks.",
              },
              {
                q: "How is this different from anomaly detection?",
                a: "Anomaly detection asks if something is unusual. AgentGX asks if this specific proposed action is authorized under this Passport and this evidence.",
              },
              {
                q: "Is AgentGX only for factories and plants?",
                a: "No. OT is where we earn trust first because the bar for proof is highest. The same Passport, gates, and receipts apply to enterprise and cloud agents.",
              },
              {
                q: "Is this production-ready?",
                a: "Core authority composition and operator console v0.1 are implemented and lab-validated. FactoryXChange industrial PoC is the first commercialization beachhead — contact us for pilot timing.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-xl border border-white/10 bg-background/40 p-5">
                <p className="text-sm font-semibold text-white mb-2 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {q}
                </p>
                <p className="text-sm text-muted-foreground pl-6">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-gradient-to-b from-background to-card/30 border-t border-white/5">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold font-display mb-4 text-white">
            Ready to qualify an agent before it touches production?
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Knight InfoTek is engaging FactoryXChange design partners and early AgentGX pilots
            across OT, enterprise, and cloud agent surfaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-display">
              <a href="mailto:contact@knightinfotek.com?subject=AgentGX%20pilot%20inquiry">
                Request a pilot
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-display border-white/20">
              <Link href="/#contact">Contact form</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
