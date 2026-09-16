import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroBg from "@assets/generated_images/abstract_high-tech_enterprise_blockchain_background.png";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
        <div className="absolute inset-0 cyber-grid opacity-15" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-px h-64 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-30 animate-pulse" />
          <div
            className="absolute top-1/3 right-1/3 w-64 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-px h-48 bg-gradient-to-b from-transparent via-indigo-400 to-transparent opacity-30 animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-2 md:pt-4 pb-8 md:pb-12">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-display">
              Knight InfoTek
            </h1>

            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                </span>
                Enterprise Assurance · GenomeX
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight font-display">
              Digital assets have become
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                infrastructure
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-3 font-semibold">
              Trust can no longer be assumed. Measure it before use.
            </p>

            <div className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl mx-auto space-y-3">
              <p>
                Knowledge, models, agents, software, and recovery states now influence operations
                directly. GenomeX measures, governs, and proves trust before restore, index, train,
                deploy, or act.
              </p>
              <p>
                One assurance model. Five domains. Official US partner for Knight InfoTek Global.
              </p>
            </div>

            <p className="text-cyan-400 mb-8 flex items-center justify-center gap-2 text-lg">
              <ArrowRight className="w-5 h-5" />
              Recovery · Knowledge · ML · Agents · Software
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/enterprise-assurance/when-data-becomes-infrastructure">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 font-display text-lg h-12 px-8 shadow-lg hover:shadow-xl"
                >
                  Read the category paper <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="/genomex-assurance-platform">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 font-display text-lg h-12 px-8"
                >
                  GenomeX Assurance Platform
                </Button>
              </a>
              <a href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 font-display text-lg h-12 px-8"
                >
                  <Check className="mr-2 w-5 h-5" /> Talk to Knight InfoTek
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
