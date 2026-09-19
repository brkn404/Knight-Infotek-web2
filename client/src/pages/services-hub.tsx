import { Link } from "wouter";
import { ArrowRight, Shield, Package } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageSeo } from "@/components/page-seo";
import { securityServiceOfferings } from "@/data/security-services";
import { Button } from "@/components/ui/button";

export default function ServicesHub() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PageSeo
        title="Services"
        description="Cybersecurity consulting, security assessments, and penetration testing from Knight InfoTek, plus in-house products for behavioral trust and Enterprise Assurance."
        path="/services"
      />
      <Navbar />

      <section className="relative pt-24 md:pt-28 pb-14 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
            Professional Services
          </p>
          <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 leading-tight">
            Cybersecurity <span className="text-primary">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Veteran-led consulting, assessments, and penetration testing, alongside the
            in-house products we build for behavioral trust, FinTech, and Enterprise Assurance.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-8 text-center">
            Security <span className="text-primary">Engagements</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {securityServiceOfferings.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.slug} href={service.href} className="group block h-full">
                  <div className="rounded-2xl border border-white/10 bg-card/30 p-6 md:p-8 h-full hover:border-primary/40 transition-all flex flex-col">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-5 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-grow">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/20 border-y border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="rounded-2xl border border-white/10 bg-background/40 p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="p-4 rounded-xl bg-primary/10 text-primary shrink-0">
              <Package className="w-8 h-8" />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-bold font-display text-white mb-3">
                In-house products
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                We also build and operate our own product lines, BlockchainDNA, Cha-Ching
                Analytics, GenomeX Assurance, and AgentGX, with consulting available for
                deployment and integration where it helps your team.
              </p>
              <Link
                href="/#products"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/90"
              >
                View products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold font-display text-white mb-4">
            SDVOSB · CISSP-led delivery
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Knight InfoTek is a Service-Disabled Veteran-Owned Small Business with decades of
            hands-on offensive and defensive security experience, red team, penetration testing,
            and enterprise architecture.
          </p>
          <Button asChild size="lg" className="font-display">
            <a href="/#contact">Schedule a consultation</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
