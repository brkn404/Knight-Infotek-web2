import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageSeo } from "@/components/page-seo";
import { ResourceLadder } from "@/components/resource-ladder";
import { getAssuranceResource } from "@/lib/resources";

export default function EnterpriseAssuranceHub() {
  const category = getAssuranceResource("category-paper");
  const architecture = getAssuranceResource("architecture-paper");

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PageSeo
        title="Enterprise Assurance"
        description="Digital assets have become infrastructure. GenomeX measures, governs, and proves trust before use across recovery, knowledge, ML, agents, and software."
        path="/enterprise-assurance"
      />
      <Navbar />

      <section className="relative pt-24 md:pt-28 pb-16 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Enterprise Assurance
          </p>
          <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 leading-tight">
            Digital assets have become{" "}
            <span className="text-primary">infrastructure</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            Knowledge, models, agents, software, and recovery states now influence operations
            directly. Trust can no longer be assumed.
          </p>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            GenomeX measures, governs, and proves trust before use. One assurance model. Five
            domains: Recovery · Knowledge · ML · Agents · Software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={category.href}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 font-display"
            >
              Read the category paper
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={architecture.href}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10 font-display"
            >
              Explore the GenomeX architecture
            </Link>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10 font-display"
            >
              Talk to Knight InfoTek
            </a>
          </div>
        </div>
      </section>

      <ResourceLadder variant="full" />

      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
            Technical evidence supports audit and operational review. It does not by itself
            establish legal compliance. We describe evidence workflows that can support
            DORA-oriented recoverability reviews and EU AI Act-oriented logging and oversight —
            not guaranteed regulatory outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={architecture.href}
              className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2 justify-center"
            >
              GenomeX architecture overview
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="/#contact"
              className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2 justify-center"
            >
              Talk to Knight InfoTek
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
