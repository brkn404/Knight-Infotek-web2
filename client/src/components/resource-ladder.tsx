import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import {
  ASSURANCE_DOMAINS,
  ENGINE_SPINE,
  assuranceResources,
  getAssuranceResource,
} from "@/lib/resources";
import { ResourceCard } from "@/components/resource-card";

type Props = {
  variant?: "strip" | "full";
  className?: string;
};

export function ResourceLadder({ variant = "full", className = "" }: Props) {
  const resources = variant === "strip" ? assuranceResources.slice(0, 3) : assuranceResources;

  return (
    <section className={`py-16 md:py-20 ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
            Resource ladder
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-white">
            Discover · Understand · Evaluate · Share
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Start with the category thesis, then the GenomeX architecture and whitepaper.
            Brochure for short sales and recovery-domain conversations.
          </p>
        </div>

        {variant === "full" && (
          <div className="mb-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-sm text-muted-foreground">
            <p className="font-mono text-primary mb-2 break-words">{ENGINE_SPINE}</p>
            <p className="mb-4">
              Decisions: ALLOW · DENY · CONFIRM · Genome: platform_genome_128
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {ASSURANCE_DOMAINS.map((d) => (
                <li
                  key={d.abbr}
                  className="rounded-lg border border-white/10 bg-background/50 p-3"
                >
                  <div className="text-primary font-semibold text-xs mb-1">{d.abbr}</div>
                  <div className="text-white text-sm font-medium mb-1">{d.name}</div>
                  <div className="text-muted-foreground text-xs leading-snug">{d.question}</div>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div
          className={`grid gap-6 ${variant === "strip" ? "md:grid-cols-3" : "md:grid-cols-2"}`}
        >
          {resources.map((r) => (
            <ResourceCard
              key={r.id}
              resource={r}
              preferPdf={r.id === "platform-brochure" || r.id === "product-whitepaper"}
            />
          ))}
        </div>

        {variant === "strip" && (
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/enterprise-assurance"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
            >
              Full Enterprise Assurance hub
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={getAssuranceResource("platform-brochure").pdfHref}
              className="text-sm text-muted-foreground hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Assurance brochure PDF
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
