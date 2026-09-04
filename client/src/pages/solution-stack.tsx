import { motion } from "framer-motion";
import { useParams, Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageSeo, trimMetaDescription } from "@/components/page-seo";
import { Button } from "@/components/ui/button";
import { getSolutionStack } from "@/data/solution-stacks";
import { SolutionProductCard } from "@/components/solution-product-card";
import { stackHeroImages } from "@/lib/stack-media";
import { ArrowLeft } from "lucide-react";

export default function SolutionStackPage() {
  const { stackSlug } = useParams<{ stackSlug: string }>();
  const stack = getSolutionStack(stackSlug);
  const heroImg = stackSlug ? stackHeroImages[stackSlug] : undefined;

  if (!stack || !heroImg) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <PageSeo
          title="Solution not found"
          description="The requested solution stack could not be found."
          path={stackSlug ? `/solutions/${stackSlug}` : "/solutions"}
          noindex
        />
        <Navbar />
        <div className="flex-1 container mx-auto px-4 pt-32 pb-24 text-center">
          <h1 className="text-3xl font-display font-bold text-white mb-4">Solution not found</h1>
          <p className="text-muted-foreground mb-8">
            Choose a stack from the Products section on the home page.
          </p>
          <Button asChild variant="outline">
            <Link href="/">Back home</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const BadgeIcon = stack.badgeIcon;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PageSeo
        title={stack.title}
        description={trimMetaDescription(stack.intro)}
        path={`/solutions/${stack.slug}`}
      />
      <Navbar />

      <section className="relative min-h-[55vh] flex items-center pt-20 md:pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt=""
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
          <div className="absolute inset-0 cyber-grid opacity-15" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All solution stacks
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <BadgeIcon className="w-4 h-4" />
              {stack.badge}
            </div>

            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2 font-display">
              {stack.title}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-display">
              {stack.headline}{" "}
              <span className="text-primary text-glow">{stack.headlineAccent}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {stack.intro}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card/20 border-y border-white/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-6">
            {stack.whyTitle}
          </h2>
          <ul className="space-y-3">
            {stack.whyBullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 text-muted-foreground text-sm md:text-base"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-center mb-4">
            PRODUCTS IN THIS <span className="text-primary">STACK</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 text-sm md:text-base">
            Same look and card layout as the home page — organized by domain. Open a
            product for full detail.
          </p>

          <div
            className={`grid gap-6 max-w-6xl mx-auto ${
              stack.products.length === 1
                ? "md:grid-cols-1 max-w-lg mx-auto"
                : stack.products.length === 2
                  ? "md:grid-cols-2"
                  : "md:grid-cols-2 xl:grid-cols-3"
            }`}
          >
            {stack.products.map((p, i) => (
              <SolutionProductCard key={p.id} product={p} index={i} />
            ))}
          </div>

          <div className="text-center mt-14">
            <Button asChild variant="outline" className="font-display border-white/20">
              <Link href="/#contact">Licensing & pilots</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
