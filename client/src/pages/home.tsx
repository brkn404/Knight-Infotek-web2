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
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Home() {
  const [location] = useLocation();

  useEffect(() => {
    // Handle hash navigation on page load
    if (location.includes('#')) {
      const hash = location.split('#')[1];
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const offset = 100; // Account for fixed navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <Hero />
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