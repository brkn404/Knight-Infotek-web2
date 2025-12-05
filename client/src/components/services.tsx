import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Building2, Code, Briefcase, Users, Wrench } from "lucide-react";
import { Link } from "wouter";

export function Services() {
  const services = [
    {
      icon: Briefcase,
      title: "IP Licensing & Acquisition",
      description: "Accelerate product launches by licensing or acquiring proven, patent-backed behavioral intelligence and cybersecurity frameworks.",
      link: "#contact"
    },
    {
      icon: Code,
      title: "Implementation & Integration",
      description: "Full-stack technical integration covering Unix/Linux systems, multi-agent AI workloads, blockchain infrastructure, cybersecurity hardening, and compliance environments.",
      link: "#contact"
    },
    {
      icon: Building2,
      title: "Product Takeover & Migration",
      description: "We help organizations seamlessly absorb Knight Global Enterprises-developed technologies into their own teams — with or without internal engineering.",
      link: "#contact"
    },
    {
      icon: Users,
      title: "12–36 Month Transition Support",
      description: "Maintain continuity and stability after acquisition or licensing with white-glove support from the original architects.",
      link: "#contact"
    },
    {
      icon: Wrench,
      title: "Custom Feature Development",
      description: "AI model tuning, behavioral engine extensions, analytics modules, RAG system integration, and compliance features.",
      link: "#contact"
    }
  ];

  return (
    <section id="services" className="py-24 bg-card/30 relative border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              WHAT WE <span className="text-primary">OFFER</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Solutions Built for Enterprises, Governments, and Next-Gen Platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link href={service.link} key={index}>
                <Card className="bg-background/50 border-white/10 hover:border-primary/50 transition-all duration-300 h-full cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        <service.icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg font-display text-white">
                        {index + 1}. {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="#contact">
              <button className="text-primary hover:text-primary/80 font-medium text-lg transition-colors">
                View Full Services →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

