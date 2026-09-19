import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Bug } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageSeo } from "@/components/page-seo";
import { Button } from "@/components/ui/button";
import type { ServiceDetailBlock } from "@/data/security-services";
import { methodologySteps } from "@/data/security-services";

interface ServicePageLayoutProps {
  title: string;
  eyebrow: string;
  description: string;
  path: string;
  blocks: ServiceDetailBlock[];
  showMethodology?: boolean;
}

export function ServicePageLayout({
  title,
  eyebrow,
  description,
  path,
  blocks,
  showMethodology = true,
}: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PageSeo title={title} description={description} path={path} />
      <Navbar />

      <section className="relative pt-24 md:pt-28 pb-14 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All services
          </Link>
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
            {eyebrow}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {blocks.map((block) => {
              const Icon = block.icon;
              return (
                <div
                  key={block.title}
                  className="rounded-2xl border border-white/10 bg-card/30 p-6 md:p-8 hover:border-primary/30 transition-colors"
                >
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h2 className="text-xl font-bold font-display text-white mb-3">
                    {block.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {block.description}
                  </p>
                  <ul className="space-y-2">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Bug className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {showMethodology && (
        <section className="py-16 bg-card/20 border-y border-white/5">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-white text-center mb-10">
              Our <span className="text-primary">Methodology</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodologySteps.map((step, i) => (
                <div
                  key={step.title}
                  className="rounded-xl border border-white/10 bg-background/50 p-5 text-center"
                >
                  <div className="text-primary font-display font-bold text-lg mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-sm">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-8 max-w-2xl mx-auto">
              Engagements align with recognized frameworks including OSSTMM, PTES, and OWASP,
              adapted to your scope and regulatory context.
            </p>
          </div>
        </section>
      )}

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Tell us about your environment, compliance drivers, and timeline, we will scope an
            engagement that fits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-display">
              <a href="/#contact">
                Contact us
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-display border-white/20">
              <Link href="/services">View all services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
