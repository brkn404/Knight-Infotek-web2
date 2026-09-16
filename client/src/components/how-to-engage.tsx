import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Shield, Target, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function HowToEngage() {
  const audiences = [
    {
      icon: Building2,
      title: "For Enterprises",
      items: [
        "Deploy BlockchainDNA, CCA, GenomeX Assurance, or AgentGX",
        "Security assessments and penetration testing",
        "Cybersecurity consulting and architecture review"
      ],
      link: "/enterprises"
    },
    {
      icon: Shield,
      title: "For Governments",
      items: [
        "Behavioral sovereignty and compliance solutions",
        "Cyber defense modernization and assessments",
        "Secure AI and agent governance programs"
      ],
      link: "/governments"
    },
    {
      icon: Target,
      title: "Security Teams",
      items: [
        "Scoped pen tests and red-team exercises",
        "Vulnerability and posture assessments",
        "AI / LLM security audits and remediation guidance"
      ],
      link: "/services"
    }
  ];

  return (
    <section className="py-24 bg-card/30 relative border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              HOW TO <span className="text-primary">ENGAGE</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Products we build · Security services we deliver
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {audiences.map((audience, index) => (
              <Link key={index} href={audience.link} className="block text-inherit no-underline">
                <Card className="bg-background/50 border-white/10 hover:border-primary/50 transition-all duration-300 h-full cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        <audience.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl font-display text-white">
                        {audience.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {audience.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
