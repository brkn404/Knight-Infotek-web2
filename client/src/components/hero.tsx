import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/abstract_high-tech_enterprise_blockchain_background.png";

export function Hero() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center pt-20 md:pt-24 pb-12 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Enterprise Blockchain Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
        <div className="absolute inset-0 cyber-grid opacity-15" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Official US Partner of Knight Global Enterprises
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight font-display">
              Building the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300 text-glow">
                AI, Cybersecurity & Blockchain Infrastructure
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-2 max-w-2xl leading-relaxed">
              <strong className="text-white">Patent-Backed Technologies. Enterprise-Grade Implementation. Global Impact.</strong>
            </p>
            
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl leading-relaxed">
              Knight Global Enterprises (KGE) invents and owns the next generation of behavioral intelligence, cybersecurity, and blockchain systems.
              <br /><br />
              Knight InfoTek is the exclusive U.S. partner — delivering implementation, migration, integration, and long-term support.
            </p>
            
            <p className="text-sm text-primary/80 mb-6 max-w-2xl italic">
              → The technology foundation behind tomorrow's AI-powered companies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#products">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-display text-lg h-12 px-8">
                  Explore Technologies <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-display text-lg h-12 px-8">
                  <ShieldCheck className="mr-2 w-5 h-5" /> Licensing & Acquisition
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Abstract scrolling data decoration */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}