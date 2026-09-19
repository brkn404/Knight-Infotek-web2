
export function ClosingCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 skew-y-3 transform origin-bottom-left" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Products we build. <span className="text-primary">Security you can trust.</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            From GenomeX Assurance and AgentGX to veteran-led pen testing and consulting,
            Knight InfoTek delivers behavioral trust infrastructure and the services to protect it.
          </p>
        </div>
      </div>
    </section>
  );
}
