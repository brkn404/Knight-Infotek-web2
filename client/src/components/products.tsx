import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { solutionStacks, type SolutionStack } from "@/data/solution-stacks";

/** Stacks whose product cards link straight to live sites — no /solutions/ overview. */
const STACKS_WITHOUT_OVERVIEW = new Set<SolutionStack["slug"]>([
  "fintech",
  "enterprise-assurance",
]);
import { SolutionProductCard } from "@/components/solution-product-card";
import { getProductGridClass } from "@/lib/stack-layout";

export function Products() {
  return (
    <section id="products" className="py-14 md:py-20 bg-background relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            OUR <span className="text-primary">PRODUCTS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Live FinTech products on their own domains, Enterprise Assurance as the
            GenomeX platform hub, and AgentGX for governed autonomous AI.
          </p>
        </div>

        <div className="space-y-14 md:space-y-16">
          {solutionStacks.map((stack, stackIndex) => (
            <motion.div
              key={stack.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: stackIndex * 0.05 }}
              className="rounded-2xl border border-white/10 bg-card/20 p-6 md:p-8"
            >
              <div className="mb-6 md:mb-8 max-w-2xl">
                <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                  {stack.badge}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-2">
                  {stack.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {stack.intro}
                </p>
                {!STACKS_WITHOUT_OVERVIEW.has(stack.slug) && (
                  <Link
                    href={`/solutions/${stack.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/90 transition-colors mt-4"
                  >
                    Stack overview
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                )}
              </div>

              <div className={getProductGridClass(stack.products.length)}>
                {stack.products.map((product, index) => (
                  <SolutionProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
