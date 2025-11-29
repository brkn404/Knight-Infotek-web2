import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/10 relative border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              FROM CONSULTING TO <br />
              <span className="text-primary">GLOBAL INFRASTRUCTURE</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Knight InfoTek has evolved. Formerly a premier Cybersecurity and AI consulting firm, we have transformed into the exclusive US distribution arm for Knight Global Enterprises.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our mission is to bring the "Global Ledger of Truth" to US industries. We provide the essential infrastructure for regulated sectors—Healthcare, Finance, Legal, and Education—to safely adopt autonomous AI agents under strict human professional oversight.
            </p>
            
            <div className="space-y-4">
              {[
                "US-Based Support & Integration",
                "Compliance with US Regulations (HIPAA, SEC, FINRA)",
                "Enterprise-Grade SLA Assurance",
                "Direct Bridge to Knight Global Innovation"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-20" />
            <div className="relative glass-panel p-8 rounded-2xl border border-white/10">
              <div className="flex flex-col gap-8">
                <div className="border-l-2 border-primary pl-6">
                  <h4 className="text-lg font-bold text-white mb-2">Identity</h4>
                  <p className="text-sm text-muted-foreground">Verifiable proof of who (or what) is acting.</p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <h4 className="text-lg font-bold text-white mb-2">Provenance</h4>
                  <p className="text-sm text-muted-foreground">Immutable history of origin and ownership.</p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <h4 className="text-lg font-bold text-white mb-2">Compliance</h4>
                  <p className="text-sm text-muted-foreground">Real-time adherence to regulatory frameworks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}