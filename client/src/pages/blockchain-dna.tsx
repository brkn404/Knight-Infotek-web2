import { motion } from "framer-motion";
import { Dna, ArrowRight, ExternalLink, Layers, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageSeo } from "@/components/page-seo";
import { PRODUCT_SITES } from "@/lib/product-sites";
import heroBg from "@assets/generated_images/digital_dna_strand_made_of_blockchain_blocks.png";

export default function BlockchainDNA() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PageSeo
        title="BlockchainDNA"
        description="Behavioral overlay and evidence store for multi-chain observation — GenomeX Life Arc depth that Cha-Ching Analytics and other products read."
        path="/blockchain-dna"
      />
      <Navbar />

      <section className="relative min-h-[70vh] flex items-center pt-20 md:pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Dna className="w-4 h-4" />
                Knight InfoTek product
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-display">
                Blockchain<span className="text-primary">DNA</span>
              </h1>

              <p className="text-xl text-primary font-display mb-6">
                Behavioral overlay &amp; evidence store
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                GenomeX behavioral intelligence on live chain data — observation, freshness,
                coverage, and Life Arc on Ethereum, Base, BNB Chain, Arbitrum, Optimism, Tron,
                and Solana. The store Cha-Ching Analytics and platform APIs read.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="font-display">
                  <a href={PRODUCT_SITES.blockchainDna} target="_blank" rel="noopener noreferrer">
                    Visit blockchain-dna.com
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="font-display">
                  <a href="/#contact">Platform &amp; API licensing</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-xl border border-white/10 bg-card/40 p-6">
              <Network className="w-8 h-8 text-primary mb-4" />
              <h2 className="text-lg font-bold text-white mb-2 font-display">Multi-chain observation</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Live writes on seven chains. Each chain is its own read; Tron and Solana are
                head-only. Same-address pairing stays EVM-only.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/40 p-6">
              <Layers className="w-8 h-8 text-primary mb-4" />
              <h2 className="text-lg font-bold text-white mb-2 font-display">Life Arc evidence</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Quality-gated behavioral depth and transition artifacts desks and investigators
                can open — not a second truth invented by downstream products.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/40 p-6">
              <Dna className="w-8 h-8 text-primary mb-4" />
              <h2 className="text-lg font-bold text-white mb-2 font-display">Platform surface</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                GenomeX coordinates and API access for named watch programs, Maltego
                transforms, and exchange pre-listing similarity — same store as CCA.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-muted-foreground mb-6">
            Product workspace, pricing, and replay live on the dedicated site. Technical
            documentation remains available from Knight InfoTek docs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={PRODUCT_SITES.chaChingAnalytics}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
            >
              Cha-Ching Analytics — desk on this store
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/docs/blockchain-dna"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-white font-medium text-sm"
            >
              Knight InfoTek docs
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
