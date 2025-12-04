import { CheckCircle2, Shield, Award, Brain, Lock, Zap, Globe } from "lucide-react";

export function WhyWorkWithUs() {
  const benefits = [
    {
      icon: Award,
      text: "30+ years in enterprise cybersecurity"
    },
    {
      icon: Shield,
      text: "U.S. Marine Corps veteran leadership"
    },
    {
      icon: Brain,
      text: "Inventor-led engineering"
    },
    {
      icon: Lock,
      text: "Patent-backed behavioral intelligence core"
    },
    {
      icon: Zap,
      text: "Hybrid AI + blockchain + cybersecurity architecture"
    },
    {
      icon: Globe,
      text: "Built for compliance, sovereignty, and mission-critical workloads"
    },
    {
      icon: CheckCircle2,
      text: "Proven across Unix/Linux operational environments"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 skew-y-3 transform origin-top-left" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              WHY WORK <span className="text-primary">WITH US</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
              Designed for High-Security, High-Scale Environments
            </p>
            <p className="text-lg text-primary/80 italic max-w-2xl mx-auto">
              Our technology doesn't just detect behavior. It understands it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-white/10 hover:border-primary/30 transition-colors"
              >
                <div className="p-2 rounded bg-primary/10 text-primary flex-shrink-0">
                  <benefit.icon className="w-5 h-5" />
                </div>
                <p className="text-foreground font-medium leading-relaxed">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

