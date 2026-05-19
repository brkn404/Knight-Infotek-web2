import { motion } from "framer-motion";
import {
  ShieldCheck,
  ArrowRight,
  FileCheck,
  History,
  Layers,
  Building2,
  Link2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageSeo } from "@/components/page-seo";

import heroBg from "@assets/generated_images/hash-only_verification_concept.png";
import assuranceImg from "@assets/generated_images/air-gapped_server_vault_visualization.png";

const valueCards = [
  {
    icon: FileCheck,
    title: "Confidence before restore",
    body: "Move from hoping a backup is safe to having defensible evidence that a recovery point reflects a trustworthy system state.",
  },
  {
    icon: History,
    title: "Behavior over checksums",
    body: "Understand how systems behaved over time — not just whether files were copied — so recovery decisions reflect real risk.",
  },
  {
    icon: Layers,
    title: "Fits your existing stack",
    body: "Designed as an assurance layer alongside the backup and recovery tools you already run — not a rip-and-replace platform.",
  },
  {
    icon: Building2,
    title: "Built for scrutiny",
    body: "Retainable artifacts for board, regulator, and insurer conversations — with honest limits on what capture-time behavior can and cannot prove.",
  },
];

export default function GxRa() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PageSeo
        title="GX-RA — GenomeX Recovery Assurance"
        description="Recovery assurance for enterprise resilience — behavioral proof that backup and restore decisions are trustworthy. Part of the Knight InfoTek Global security portfolio."
        path="/gx-ra"
      />
      <Navbar />

      <section className="relative min-h-[85vh] flex items-center pt-20 md:pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80" />
          <div className="absolute inset-0 cyber-grid opacity-15" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium mb-6">
                <ShieldCheck className="w-4 h-4" />
                Recovery assurance
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-display">
                RECOVERY <span className="text-rose-400">ASSURANCE</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 font-display font-medium tracking-wide mb-8">
                GenomeX Recovery Assurance (GX-RA)
              </p>

              <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                GX-RA is the assurance layer between your backup vault and your restore button —
                behavioral context at capture, optional post-backup scan enrichment from tools you
                already use, and an allow / deny / confirm decision with artifacts you can retain.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button asChild className="font-display bg-gradient-to-r from-rose-500 to-indigo-600 hover:from-rose-600 hover:to-indigo-700">
                  <a href="/#contact">
                    Discuss licensing or pilots
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="font-display border-white/20">
                  <Link href="/#products">View all products</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              WHAT IS <span className="text-rose-400">GX-RA</span>?
            </h2>
          </div>

          <div className="bg-card/50 rounded-xl p-8 md:p-12 border border-white/10 mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed text-center mb-8">
              <strong className="text-white">GX-RA</strong> closes the industry{" "}
              <strong className="text-white">assurance gap</strong>: backups answer whether you
              have a copy; GX-RA helps answer whether you should restore it — with behavioral
              context at capture time, not only after a clean-room exercise.
            </p>
            <p className="text-sm text-muted-foreground text-center mb-6">
              GX-RA extends the behavioral-security lineage of the ZeroKnight30 family. It works
              alongside familiar backup platforms, SOC scanners, and endpoint tools — vendor-neutral
              binding, not a replacement vault.
            </p>
            <p className="text-sm text-rose-300/90 text-center font-medium">
              Associate → attest → authorize
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-card/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">What it does</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Binds recovery points to behavioral context at backup time",
                    "Gates restore with allow / deny / confirm before execution",
                    "Accepts post-backup scan signals from your existing SOC stack",
                    "Produces retainable artifacts for risk, compliance, and executives",
                    "Pilot-ready overlay for enterprises, MSSPs, and backup partners",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Problems it addresses</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Backups exist, but confidence in clean recovery does not",
                    "Restore-and-scan is slow, costly, and still leaves doubt",
                    "Ransomware and dormant threats raise the cost of a wrong restore",
                    "Boards and regulators expect proof, not post-incident narratives",
                    "Security and IT teams need a shared language for recovery risk",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            <strong className="text-white">Core idea:</strong> recovery is not only a data
            problem — it is a trust problem. GX-RA is built to make that trust measurable and
            defensible when it matters most.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background/50 border-t border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
            WHY <span className="text-rose-400">GX-RA</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-sm md:text-base">
            High-level outcomes — detailed architecture and integration paths are available under
            NDA for qualified partners and enterprise evaluations.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {valueCards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Card className="bg-card/50 border-white/10 h-full">
                  <CardHeader>
                    <c.icon className="w-8 h-8 text-rose-400 mb-2" />
                    <CardTitle className="text-lg text-white">{c.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{c.body}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden border border-white/10">
              <img
                src={assuranceImg}
                alt=""
                className="w-full h-64 object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-rose-400 mb-4">
                <Link2 className="w-5 h-5" />
                <span className="text-sm font-medium">Portfolio context</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-white mb-4">
                Part of a unified behavioral-trust stack
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                GX-RA sits alongside AgentGX, BlockchainDNA, ZeroKnight30, and related
                Knight InfoTek Global capabilities — one behavioral substrate for governance,
                identity, defense, and recovery.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="link" className="text-rose-400 p-0 h-auto font-display">
                  <Link href="/blog/beyond-backups-recovery-assurance-gap">Read the industry brief →</Link>
                </Button>
                <Button asChild variant="link" className="text-rose-400/80 p-0 h-auto font-display">
                  <Link href="/agent-gx">Explore AgentGX →</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-4">
            Ready to evaluate recovery assurance?
          </h2>
          <p className="text-muted-foreground mb-8">
            We work with enterprises, MSSPs, and technology partners on pilots, licensing, and
            design partnerships. Share your environment and compliance context — we will align
            on the right next step.
          </p>
          <Button asChild size="lg" className="font-display">
            <a href="/#contact">Contact Knight InfoTek</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
