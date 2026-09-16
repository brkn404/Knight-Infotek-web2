import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { solutionStacks } from "@/data/solution-stacks";
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
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 md:mb-8">
                <div className="max-w-2xl">
                  <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                    {stack.badge}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-2">
                    {stack.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {stack.intro}
                  </p>
                </div>
                <Link
                  href={`/solutions/${stack.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/90 transition-colors shrink-0 pt-1"
                >
                  Stack overview
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
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
