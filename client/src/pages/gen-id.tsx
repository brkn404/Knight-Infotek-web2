import { motion } from "framer-motion";
import {
  Fingerprint,
  Users,
  Bot,
  Link2,
  ShieldCheck,
  Globe,
  FileKey,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageSeo } from "@/components/page-seo";

import heroBg from "@assets/generated_images/digital_dna_strand_made_of_blockchain_blocks.png";
import genomexImg from "@assets/generated_images/genomex_behavioral_intelligence_visualization.png";

const entityTypes = [
  "Human",
  "Wallet",
  "Smart contract",
  "AI agent",
  "DAO",
  "Stablecoin issuer",
  "RWA issuer",
  "Financial institution",
  "Autonomous system",
];

export default function GenId() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PageSeo
        title="GenID"
        description="Universal digital identity spanning humans, wallets, smart contracts, AI agents, and institutions. Provenance and governance-ready identifiers."
        path="/gen-id"
      />
      <Navbar />

      <section className="relative min-h-[85vh] flex items-center pt-20 md:pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/65 to-background" />
          <div className="absolute inset-0 cyber-grid opacity-15" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/15 border border-violet-400/30 text-violet-300 text-sm font-medium mb-6">
                <Fingerprint className="w-4 h-4" />
                Behavior-derived identity
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-display">
                GEN<span className="text-violet-400">ID</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 font-display font-medium tracking-wide mb-8">
                Universal behavioral identity for users, devices, and agents
              </p>

              <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                GenID is the identity registry inside the BlockchainDNA stack:
                behavior-first resolution and attestation across chains — not
                static credentials alone. Identity continuity across sessions,
                key rotation, and environments.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button asChild className="font-display">
                  <Link href="/docs/blockchain-dna/features/genid">Technical documentation</Link>
                </Button>
                <Button asChild variant="outline" className="font-display border-white/20">
                  <Link href="/blockchain-dna">BlockchainDNA platform</Link>
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
              WHAT IS <span className="text-violet-400">GENID</span>?
            </h2>
          </div>

          <div className="bg-card/50 rounded-xl p-8 md:p-12 border border-white/10 mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed text-center mb-8">
              <strong className="text-white">GenID</strong> manages identity for
              blockchain and enterprise entities: create and verify identities,
              resolve addresses across chains, and anchor{" "}
              <strong className="text-white">behavioral</strong> signals —
              including verification paths such as attestation, multi-factor, and
              behavior-linked checks — so trust follows how entities act over
              time.
            </p>
            <p className="text-sm text-muted-foreground text-center">
              Part of Knight InfoTek Global&apos;s BlockchainDNA trust
              infrastructure; pairs naturally with GenomeX analytics and AgentGX
              for AI agents registered as first-class entities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <Card className="bg-card/50 border-white/10">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-violet-400" />
                </div>
                <CardTitle className="text-white">Nine entity classes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  One registry model for humans, wallets, contracts, agents,
                  issuers, and autonomous systems — so compliance and risk tools
                  speak a single identity language.
                </p>
                <ul className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  {entityTypes.map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-violet-400 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-white/10">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-violet-400" />
                </div>
                <CardTitle className="text-white">Cross-chain resolution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Link and resolve identities across networks so portfolios,
                  auditors, and policy engines see the same entity — not a bag of
                  unrelated addresses.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-white/10">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-violet-400" />
                </div>
                <CardTitle className="text-white">AI &amp; agents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Register AI agents and autonomous actors with the same
                  behavioral substrate used for human and institutional entities —
                  aligned with AgentGX governance when agents act in production.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-white/10">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4">
                  <FileKey className="w-6 h-6 text-violet-400" />
                </div>
                <CardTitle className="text-white">Attestation &amp; standards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Identity passports, attestations, and ERC-8004-aligned flows
                  for on-chain identity metadata — see product docs for API and
                  integration patterns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={genomexImg}
                alt="Behavioral intelligence"
                className="rounded-xl border border-white/10 shadow-2xl"
              />
            </motion.div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Behavior-first, not credential-only
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                GenID is designed so integrity signals come from{" "}
                <strong className="text-white">how</strong> entities behave —
                patterns, drift, and lineage — layered with traditional
                credentials where policy requires them.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {[
                  "Continuity across session and key rotation",
                  "Wallet and contract linkage under one identity graph",
                  "Hooks for behavioral verification alongside attestations",
                  "Foundation for FinTech and compliance flows on BlockchainDNA",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="outline" className="font-display border-violet-500/30">
                  <Link href="/solutions/cybersecurity-identity">Cybersecurity &amp; identity stack</Link>
                </Button>
                <Button asChild className="font-display bg-violet-600 hover:bg-violet-700">
                  <Link href="/#contact">Licensing &amp; pilots</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-center border-t border-white/5">
        <p className="text-muted-foreground text-sm mb-4">
          Explore the full GenID guide and APIs in documentation.
        </p>
        <Button asChild variant="ghost" className="text-violet-400 hover:text-violet-300">
          <Link href="/docs/blockchain-dna/features/genid" className="inline-flex items-center gap-2">
            <Link2 className="w-4 h-4" />
            Open GenID docs
          </Link>
        </Button>
      </section>

      <Footer />
    </div>
  );
}
