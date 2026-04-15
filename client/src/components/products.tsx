import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { solutionStacks } from "@/data/solution-stacks";
import { SolutionProductCard } from "@/components/solution-product-card";
import { cn } from "@/lib/utils";

export function Products() {
  return (
    <section id="products" className="py-12 md:py-16 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            SOLUTION <span className="text-primary">STACKS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Products grouped by domain — artificial intelligence, cybersecurity &amp;
            identity, FinTech, and industrial / autonomous systems. Same card design;
            clearer organization.
          </p>
        </div>

        <div className="space-y-16 md:space-y-20">
          {solutionStacks.map((stack, stackIndex) => (
            <motion.div
              key={stack.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: stackIndex * 0.05 }}
            >
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6 md:mb-8 border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold font-display text-white">
                    {stack.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1 max-w-xl">
                    {stack.badge}
                  </p>
                </div>
                <Link
                  href={`/solutions/${stack.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/90 transition-colors shrink-0"
                >
                  Stack overview
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <div
                className={cn(
                  "grid grid-cols-1 gap-6",
                  stack.products.length === 1 && "md:max-w-md md:mx-auto",
                  stack.products.length === 2 && "md:grid-cols-2",
                  stack.products.length >= 3 && "md:grid-cols-2 xl:grid-cols-3",
                )}
              >
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
