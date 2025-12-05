import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Shield, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function HowToEngage() {
  const audiences = [
    {
      icon: Building2,
      title: "For Enterprises",
      items: [
        "License or acquire the core technology",
        "Integrate behavioral intelligence into your existing platforms",
        "Launch new AI-driven products faster"
      ],
      link: "/enterprises"
    },
    {
      icon: Shield,
      title: "For Governments",
      items: [
        "Behavioral sovereignty solutions",
        "Blockchain intelligence & compliance",
        "Cyber defense modernization"
      ],
      link: "/governments"
    },
    {
      icon: TrendingUp,
      title: "For Investors & Incubators",
      items: [
        "Acquire entire product lines",
        "Build startups on top of Knight Global Enterprises IP",
        "Operate with built-in technical leadership and transition support"
      ],
      link: "/investors"
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
              Work With Knight InfoTek
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {audiences.map((audience, index) => (
              <Link href={audience.link} key={index}>
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

