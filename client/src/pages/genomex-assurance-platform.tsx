import { Link } from "wouter";
import { ArrowRight, Download } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageSeo } from "@/components/page-seo";
import { Button } from "@/components/ui/button";
import {
  ASSURANCE_DOMAINS,
  ENGINE_SPINE,
  getAssuranceResource,
} from "@/lib/resources";

const resource = getAssuranceResource("architecture-paper");

export default function GenomeXAssurancePlatform() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PageSeo
        title={`${resource.title} | Architecture`}
        description={resource.subtitle}
        path="/enterprise-assurance/genomex-assurance-platform"
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
            Architecture paper · {resource.dateLabel}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4 leading-tight">
            {resource.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{resource.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="font-display">
              <a href={resource.pdfHref} target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </a>
            </Button>
            <Button asChild variant="outline" className="border-white/20 font-display">
              <Link href="/enterprise-assurance/when-data-becomes-infrastructure">
                Category thesis
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 md:py-16 max-w-3xl space-y-10 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold font-display text-white mb-4">What GenomeX is</h2>
          <p className="mb-4">
            The GenomeX Assurance Platform is Knight InfoTek&apos;s implementation of Enterprise
            Assurance: a vendor-agnostic overlay that discovers digital assets, opens them,
            evaluates known-bad and behavioral evidence, applies policy, and records proof before
            those assets are restored, indexed, trained on, deployed, or executed.
          </p>
          <p>
            GenomeX does not replace backup platforms, security tools, AI systems, CI/CD
            pipelines, or observability stacks. It sits above them as an assurance control plane.
            Why that layer must exist is the subject of{" "}
            <Link
              href="/enterprise-assurance/when-data-becomes-infrastructure"
              className="text-primary hover:text-primary/80"
            >
              When Data Becomes Infrastructure
            </Link>
            .
          </p>
        </section>

        <section className="rounded-2xl border border-primary/25 bg-primary/5 p-6">
          <h2 className="text-xl font-bold font-display text-primary mb-3">
            Canonical processing spine
          </h2>
          <p className="font-mono text-primary text-sm md:text-base mb-3 break-words">
            {ENGINE_SPINE}
          </p>
          <p className="text-sm mb-2">
            Outcome: <strong className="text-white">ALLOW</strong> ·{" "}
            <strong className="text-white">DENY</strong> ·{" "}
            <strong className="text-white">CONFIRM</strong>
          </p>
          <p className="text-sm">
            GX-DAB and GX-SIG are first-class platform engines, not optional add-ons. Domain
            workflows differ; fusion reads the same genome wire:{" "}
            <code className="text-primary">platform_genome_128</code> (eight blocks × sixteen
            slots).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-display text-white mb-4">
            Five assurance domains
          </h2>
          <p className="mb-6">
            Recovery is one domain, not the organizing principle of the platform. Each domain asks
            a different operational question of the same spine.
          </p>
          <ul className="space-y-3">
            {ASSURANCE_DOMAINS.map((d) => (
              <li
                key={d.abbr}
                className="rounded-xl border border-white/10 bg-card/40 p-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
              >
                <span className="text-primary font-mono text-sm font-semibold w-24">{d.abbr}</span>
                <span className="text-white font-medium w-36">{d.name}</span>
                <span className="text-sm flex-1">{d.question}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm mt-4">
            GX-GRA fuses a Recovery Environment Genome and a Recovery Asset Genome into Restore
            Authority, the question is whether the{" "}
            <strong className="text-foreground">recovery chain</strong> can be trusted, not only a
            single recovery point checksum.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-display text-white mb-4">
            Proof is part of the product
          </h2>
          <p>
            A trusted agent may still act on untrusted knowledge. A clean model may depend on
            poisoned training data. A secure application may be deployed from an untrusted release.
            A hardened backup environment may faithfully preserve a compromised state. In each
            case GenomeX measures trust before use and produces an evidence-backed decision that
            can be proven later, evidence suitable for audit review and operational underwriting
            conversations, without claiming that evidence alone establishes legal compliance.
          </p>
        </section>
      </div>

      <div className="border-t border-white/10 py-12">
        <div className="container mx-auto px-4 max-w-3xl flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <Button asChild className="font-display">
            <a href={resource.pdfHref} target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </a>
          </Button>
          <Link
            href="/enterprise-assurance"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
          >
            Enterprise Assurance hub
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
