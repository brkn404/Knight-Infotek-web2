import { motion } from "framer-motion";
import { Activity, ArrowRight, ExternalLink, ListChecks, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageSeo } from "@/components/page-seo";
import { PRODUCT_SITES } from "@/lib/product-sites";
import heroBg from "@assets/generated_images/abstract_financial_analytics_visualization.png";

export default function ChaChingAnalytics() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PageSeo
        title="Cha-Ching Analytics"
        description="Institutional named watch on the BlockchainDNA store — Life Arc depth, desk workflow, and Transact now for the addresses you name."
        path="/cha-ching-analytics"
      />
      <Navbar />

      <section className="relative min-h-[70vh] flex items-center pt-20 md:pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/70 to-background/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Activity className="w-4 h-4" />
                Knight InfoTek product
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-display">
                The chain shows what happened.{" "}
                <span className="text-primary">CCA shows whether it&apos;s out of character.</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                Cha-Ching Analytics is a desk product on top of the BlockchainDNA evidence store.
                You name up to fifty addresses; CCA reads observation, freshness, coverage, and
                Life Arc — it does not fingerprint chains or write genomes itself.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="font-display">
                  <a href={PRODUCT_SITES.chaChingAnalytics} target="_blank" rel="noopener noreferrer">
                    Visit cha-chinganalytics.com
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="font-display">
                  <a href="/#contact">Licensing &amp; partnerships</a>
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
              <ListChecks className="w-8 h-8 text-primary mb-4" />
              <h2 className="text-lg font-bold text-white mb-2 font-display">Your named list</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Empty until you add real addresses. Institutional desks, exchange risk, and DeFi
                ops — not a chain-scale scanner.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/40 p-6">
              <Eye className="w-8 h-8 text-primary mb-4" />
              <h2 className="text-lg font-bold text-white mb-2 font-display">Reads BlockchainDNA</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Attention, Facts, Convergence, and Transact now use the same store as the
                behavioral overlay. Deep-link to full evidence replay on BlockchainDNA.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-card/40 p-6">
              <Activity className="w-8 h-8 text-primary mb-4" />
              <h2 className="text-lg font-bold text-white mb-2 font-display">Honest outputs</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pending stays pending. Historical last-seen stays historical. Unobserved is never
                zero. No CCA risk score invented on top of the store.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-muted-foreground mb-6">
            Pricing, workspace access, and product detail live on the dedicated site. Knight
            InfoTek handles enterprise licensing, API tiers, and investigator programs.
          </p>
          <a
            href={PRODUCT_SITES.blockchainDna}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
          >
            BlockchainDNA — the evidence store CCA reads
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
