import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Products } from "@/components/products";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { WhyWorkWithUs } from "@/components/why-work-with-us";
import { HowToEngage } from "@/components/how-to-engage";
import { ClosingCTA } from "@/components/closing-cta";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { PageSeo } from "@/components/page-seo";
import { ResourceLadder } from "@/components/resource-ladder";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PageSeo
        title="Knight InfoTek"
        description="Enterprise Assurance for the AI-native enterprise. GenomeX measures trust before use across recovery, knowledge, ML, agents, and software. Official US partner of Knight InfoTek Global."
        path="/"
      />
      <Navbar />
      <main className="pt-20 md:pt-24">
        <Hero />
        <ResourceLadder variant="strip" className="border-y border-white/5 bg-card/20" />
        <About />
        <Services />
        <Products />
        <WhyWorkWithUs />
        <HowToEngage />
        <ClosingCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}