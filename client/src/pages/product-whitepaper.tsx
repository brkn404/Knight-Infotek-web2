import { useState, FormEvent } from "react";
import { Link } from "wouter";
import { ArrowRight, Check, Download } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageSeo } from "@/components/page-seo";
import { Button } from "@/components/ui/button";
import { getAssuranceResource } from "@/lib/resources";

const resource = getAssuranceResource("product-whitepaper");

export default function ProductWhitepaper() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onOptionalSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("GenomeX product updates / briefing request");
    const body = encodeURIComponent(
      `Name: ${name || "(not provided)"}\nEmail: ${email || "(not provided)"}\n\nPlease add me to product updates / schedule a briefing.`,
    );
    window.location.href = `mailto:contact@knightinfotek.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PageSeo
        title={resource.title}
        description={resource.subtitle}
        path="/enterprise-assurance/product-whitepaper"
      />
      <Navbar />

      <div className="container mx-auto px-4 pt-24 md:pt-28 pb-16 max-w-3xl">
        <Link
          href="/enterprise-assurance"
          className="text-sm text-primary hover:text-primary/80 mb-6 inline-block"
        >
          ← Enterprise Assurance
        </Link>
        <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
          Product whitepaper · {resource.dateLabel}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4 leading-tight">
          {resource.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{resource.subtitle}</p>

        <div className="rounded-2xl border border-primary/30 bg-primary/10 p-6 mb-10">
          <h2 className="text-lg font-bold text-white mb-3 font-display">Download instantly</h2>
          <p className="text-muted-foreground text-sm mb-4">
            No form required. Architecture is inherited from the GenomeX Assurance Platform paper;
            this document covers product surfaces, domain gates, receipts, deployment, and
            maturity badges (Available / Pilot / Roadmap).
          </p>
          <Button asChild className="font-display">
            <a href={resource.pdfHref} target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4 mr-2" />
              Download product whitepaper PDF
            </a>
          </Button>
        </div>

        <section className="mb-10 space-y-4 text-muted-foreground leading-relaxed">
          <h2 className="text-2xl font-bold font-display text-white">What buyers get</h2>
          <p>
            The GenomeX Assurance Platform evaluates digital assets before restore, index, train,
            deploy, or act. Domain questions include whether a{" "}
            <strong className="text-white">recovery chain</strong> can be trusted, and parallel
            questions for knowledge, ML assets, agents, and software releases — with ALLOW / DENY
            / CONFIRM and portable receipts.
          </p>
          <p className="text-sm border border-white/10 rounded-lg p-4 bg-card/40">
            Claims discipline: materials describe evidence that can support DORA-oriented and EU
            AI Act-oriented workflows and audit review. They do not assert that GenomeX alone
            satisfies those regimes or reduces insurance premiums.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-card/40 p-6 mb-10">
          <h2 className="text-lg font-bold text-white mb-2 font-display">
            Optional: product updates or briefing
          </h2>
          <p className="text-muted-foreground text-sm mb-4">
            Name and email are optional. Download works without this step.
          </p>
          {submitted ? (
            <p className="text-primary text-sm flex items-center gap-2">
              <Check className="w-4 h-4" /> Your mail client should open — thank you.
            </p>
          ) : (
            <form onSubmit={onOptionalSubmit} className="space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg bg-background border border-white/15 px-3 py-2 text-sm text-white placeholder:text-muted-foreground"
                />
                <input
                  type="email"
                  placeholder="Email (optional)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg bg-background border border-white/15 px-3 py-2 text-sm text-white placeholder:text-muted-foreground"
                />
              </div>
              <Button type="submit" variant="outline" className="border-white/20 font-display">
                Send me updates / request briefing
              </Button>
            </form>
          )}
        </section>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/enterprise-assurance/genomex-assurance-platform"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
          >
            Architecture paper
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
          >
            Talk to Knight InfoTek
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
