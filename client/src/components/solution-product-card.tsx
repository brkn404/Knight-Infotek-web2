import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import type { StackProduct } from "@/data/solution-stacks";
import { productCardImages } from "@/lib/stack-media";

type Props = {
  product: StackProduct;
  index: number;
};

export function SolutionProductCard({ product, index }: Props) {
  const img = productCardImages[product.imageKey];
  const Icon = product.icon;

  return (
    <Link href={product.link}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="cursor-pointer h-full"
      >
        <Card className="bg-card/50 border-white/10 overflow-hidden group hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
          <div className="h-40 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
            <img
              src={img}
              alt={product.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          <CardHeader className="p-4 pb-2">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Icon className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <CardTitle className="text-xl font-display">{product.title}</CardTitle>
            <CardDescription className="text-primary/80 font-medium text-xs">
              {product.subtitle}
            </CardDescription>
          </CardHeader>

          <CardContent className="p-4 pt-0 flex-grow flex flex-col">
            <p className="text-muted-foreground mb-4 text-xs leading-relaxed flex-grow">
              {product.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {product.features.map((feature) => (
                <span
                  key={feature}
                  className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-muted-foreground"
                >
                  {feature}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
