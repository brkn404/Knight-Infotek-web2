import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/abstract_high-tech_enterprise_blockchain_background.png";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Enterprise Blockchain Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
        {/* Animated network mesh overlay */}
        <div className="absolute inset-0 cyber-grid opacity-15" />
        {/* Animated neon lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-px h-64 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-30 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-px h-48 bg-gradient-to-b from-transparent via-indigo-400 to-transparent opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-2 md:pt-4 pb-8 md:pb-12">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Knight InfoTek Logo/Title - Centered */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-display">
              Knight InfoTek
            </h1>

            {/* Official US Partner Badge */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                Official US Partner of Knight Global Enterprises
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight font-display">
              Building the Future of<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                AI, Cybersecurity & Blockchain Infrastructure
              </span>
            </h2>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-gray-300 mb-3 font-semibold">
              Patent-Backed Technologies. Enterprise-Grade Implementation. Global Impact.
            </p>

            {/* Description */}
            <div className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl mx-auto space-y-3">
              <p>
                Knight Global Enterprises (KGE) invents and owns the next generation of behavioral intelligence, cybersecurity, and blockchain systems.
              </p>
              <p>
                Knight InfoTek is the exclusive U.S. partner — delivering implementation, migration, integration, and long-term support.
              </p>
            </div>

            {/* Subtext with arrow */}
            <p className="text-cyan-400 mb-8 flex items-center justify-center gap-2 text-lg">
              <ArrowRight className="w-5 h-5" />
              The technology foundation behind tomorrow's AI-powered companies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#products">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 font-display text-lg h-12 px-8 shadow-lg hover:shadow-xl">
                  Explore Technologies <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-display text-lg h-12 px-8">
                  <Check className="mr-2 w-5 h-5" /> Licensing & Acquisition
                </Button>
              </a>
              <a href="#services">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-display text-lg h-12 px-8">
                  What We Offer
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}