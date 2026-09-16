import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { securityServiceOfferings } from "@/data/security-services";

export function Services() {
  return (
    <section id="services" className="py-24 bg-card/30 relative border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              CYBERSECURITY <span className="text-primary">SERVICES</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Veteran-led consulting, assessments, and penetration testing — delivered by the
              same team that builds our in-house product stack.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {securityServiceOfferings.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={service.slug} href={service.href} className="group block h-full">
                  <Card className="bg-background/50 border-white/10 hover:border-primary/50 transition-all duration-300 h-full cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <CardTitle className="text-lg font-display text-white">
                          {index + 1}. {service.shortTitle}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                        Learn more
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <button className="text-primary hover:text-primary/80 font-medium text-lg transition-colors">
                View all services →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
