import { Link } from "wouter";
import { ArrowRight, Download } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageSeo } from "@/components/page-seo";
import { Button } from "@/components/ui/button";
import { getAssuranceResource } from "@/lib/resources";

const resource = getAssuranceResource("category-paper");

export default function WhenDataBecomesInfrastructure() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PageSeo
        title={resource.title}
        description={resource.subtitle}
        path="/enterprise-assurance/when-data-becomes-infrastructure"
      />
      <Navbar />

      <header className="pt-24 md:pt-28 pb-12 border-b border-white/10">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            href="/enterprise-assurance"
            className="text-sm text-primary hover:text-primary/80 mb-6 inline-block"
          >
            ← Enterprise Assurance
          </Link>
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
            Category paper · {resource.dateLabel}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4 leading-tight">
            {resource.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            Enterprise Assurance for the AI-native enterprise
          </p>
          <p className="text-muted-foreground mb-8">{resource.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="font-display">
              <a href={resource.pdfHref} target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </a>
            </Button>
            <Button asChild variant="outline" className="border-white/20 font-display">
              <Link href="/enterprise-assurance/genomex-assurance-platform">
                Companion: GenomeX architecture
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <article className="container mx-auto px-4 py-12 md:py-16 max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
        <p className="text-lg text-foreground/90">
          Enterprise computing is changing for a reason larger than another application platform
          or another AI tool. Artificial intelligence changes the operational role of digital
          assets. For decades, data was largely passive: created by users, stored in databases,
          protected by access control, analyzed by applications, and preserved by backup.
          Applications performed work. Infrastructure provided the operating environment. Data
          supplied the information those systems consumed.
        </p>
        <p>
          That separation is no longer stable. Knowledge repositories feed retrieval systems.
          Retrieval shapes model outputs. Model outputs guide agents. Agents invoke tools, alter
          systems, and initiate business activity. Software releases carry supply-chain
          provenance. Recovery states are possible operational futures, not merely copies of
          files. Training data becomes embedded in the future behavior of systems that will
          decide at scale.
        </p>

        <h2 className="text-2xl font-bold font-display text-white pt-6">
          Data as operational infrastructure
        </h2>
        <p>
          Infrastructure is any system upon which operations depend. Historically that meant
          compute, storage, network, identity, and applications. In the AI-native enterprise it
          also includes knowledge, models, recovery state, software provenance, agent context,
          policy, behavioral history, and evidence. If those assets are poisoned, stale,
          compromised, or unverifiable, the enterprise may continue functioning while making
          decisions on untrusted infrastructure. The systems remain available. The decisions
          become unreliable.
        </p>
        <p>
          <strong className="text-white">Availability is not assurance.</strong> An available
          knowledge repository can be poisoned. An available model can drift. An available agent
          can operate outside its authority. An available software release can originate from a
          compromised supply chain. An available recovery state can faithfully preserve malware.
        </p>

        <h2 className="text-2xl font-bold font-display text-white pt-6">
          The question that defines Enterprise Assurance
        </h2>
        <blockquote className="border-l-4 border-primary pl-4 my-4 text-foreground text-xl font-medium">
          Can this digital asset be trusted before the enterprise uses it — and can that decision
          be proven?
        </blockquote>
        <p>
          Backup can prove that data was copied. EDR can detect compromise in the present. AppSec
          can list vulnerabilities. AI governance can inspect a prompt or a response. None of them
          consistently answers that question across restore, index, train, deploy, and act.
        </p>
        <p>
          Enterprise Assurance is the continuous measurement, governance, and attestation of
          digital infrastructure before operational use. The GenomeX Assurance Platform is Knight
          InfoTek&apos;s implementation: a vendor-agnostic overlay that sequences digital assets,
          evaluates behavioral integrity, applies policy, and records evidence before those assets
          are restored, indexed, trained on, deployed, or executed. GenomeX does not replace
          backup, security, CI/CD, or AI platforms. It sits above them as the control plane that
          converts fragmented signals into governed trust decisions.
        </p>

        <h2 className="text-2xl font-bold font-display text-white pt-6">
          Market confirmation, not invented crisis
        </h2>
        <p>
          Platform economics already say models commoditize and value moves to data, workflow, and
          harness. Analyst forecasts warn that agentic projects fail on risk control and
          misapplication. Offensive security shows how untrusted content becomes an action path.
          Identity research shows agents in production without distinct attribution. Government
          guidance presses for distinct principals, runtime policy decisions, trust scoring, and
          human override. Recovery and resilience conversations already asked for trusted state,
          not merely the newest copy.
        </p>
        <p>
          Enterprise Assurance is the name for the layer that answers that shared structure. The
          scarce capability is no longer intelligence. Intelligence is becoming abundant. The
          scarce capability is trust that can be measured, governed, and proven before use.
        </p>

        <h2 className="text-2xl font-bold font-display text-white pt-6">
          Decisions, not only alerts
        </h2>
        <p>
          Many enterprise tools are advisory. Enterprise Assurance is decision-oriented. The
          output is a governed decision: <strong className="text-white">ALLOW</strong>,{" "}
          <strong className="text-white">DENY</strong>, or{" "}
          <strong className="text-white">CONFIRM</strong>. CONFIRM is not a weakness — incomplete
          or conflicting evidence is normal. A mature platform must prevent silent risk acceptance
          while still allowing accountable escalation. Proof is part of the product: a decision
          without evidence may help in the moment; it does not survive audit, incident response,
          insurance review, or board scrutiny.
        </p>
        <p className="text-sm border border-white/10 rounded-xl p-4 bg-card/40">
          Technical evidence can support DORA-oriented recoverability workflows and EU AI
          Act-oriented logging and oversight requirements. Evidence suitable for audit review is
          not the same as a legal determination of compliance. Status of capabilities should be
          read with Available / Pilot / roadmap discipline as described in the companion product
          materials.
        </p>

        <h2 className="text-2xl font-bold font-display text-white pt-6">Next step</h2>
        <p>
          How GenomeX implements that layer — one Behavioral Genome (
          <code className="text-primary text-sm">platform_genome_128</code>
          ), five shared engines, five assurance domains — is the subject of the companion
          architecture paper.
        </p>
      </article>

      <div className="border-t border-white/10 py-12">
        <div className="container mx-auto px-4 max-w-3xl flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <Button asChild className="font-display">
            <a href={resource.pdfHref} target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </a>
          </Button>
          <Link
            href="/enterprise-assurance/genomex-assurance-platform"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
          >
            Explore the GenomeX architecture
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
