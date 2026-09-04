import { Link } from "wouter";
import { ArrowRight, FileText } from "lucide-react";
import type { AssuranceResource } from "@/lib/resources";

type Props = {
  resource: AssuranceResource;
  preferPdf?: boolean;
};

export function ResourceCard({ resource, preferPdf }: Props) {
  const primaryHref = preferPdf ? resource.pdfHref : resource.href;
  const isPdf = primaryHref.endsWith(".pdf");

  return (
    <article className="rounded-2xl border border-white/10 bg-card/40 p-6 flex flex-col h-full hover:border-primary/40 transition-colors">
      <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-primary mb-3">
        <FileText className="w-3.5 h-3.5" aria-hidden />
        {resource.kind}
      </div>
      <h3 className="text-xl font-bold font-display text-white mb-2">{resource.title}</h3>
      <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{resource.subtitle}</p>
      <p className="text-xs text-muted-foreground/70 mb-4">{resource.dateLabel}</p>
      <div className="flex flex-wrap gap-4 items-center">
        {isPdf ? (
          <a
            href={primaryHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
            target="_blank"
            rel="noopener noreferrer"
          >
            {resource.cta}
            <ArrowRight className="w-4 h-4" />
          </a>
        ) : (
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
          >
            {resource.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
        {!preferPdf && !resource.href.endsWith(".pdf") && (
          <a
            href={resource.pdfHref}
            className="text-sm text-muted-foreground hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            PDF
          </a>
        )}
      </div>
    </article>
  );
}
