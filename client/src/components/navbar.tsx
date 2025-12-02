import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@assets/knight-infotek-logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    const currentPath = window.location.pathname;
    
    if (currentPath !== '/') {
      // Navigate to home first, then scroll
      window.location.href = `/#${hash}`;
    } else {
      // Already on home, just scroll with offset for navbar
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
      }, 10);
    }
  };

  const NavItems = () => (
    <>
      <a 
        href="/#products" 
        onClick={(e) => handleHashClick(e, 'products')}
        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      >
        Products
      </a>
      <Link href="/blockchain-dna">
        <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
          BlockchainDNA
        </a>
      </Link>
      <Link href="/cha-ching-analytics">
        <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
          Cha-Ching Analytics
        </a>
      </Link>
      <Link href="/zero-knight-30">
        <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
          ZeroKnight30
        </a>
      </Link>
      <Link href="/chain-guardian">
        <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
          ChainGuardian
        </a>
      </Link>
      <a 
        href="/#about" 
        onClick={(e) => handleHashClick(e, 'about')}
        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      >
        About
      </a>
      <a 
        href="#contact" 
        onClick={(e) => {
          e.preventDefault();
          setTimeout(() => {
            const element = document.getElementById('contact');
            if (element) {
              const offset = 100; // Account for fixed navbar
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - offset;

              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          }, 10);
        }}
        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      >
        Contact
      </a>
      <Link href="/blog">
        <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
          Blog
        </a>
      </Link>
      <Link href="/support">
        <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
          Support
        </a>
      </Link>
    </>
  );

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3 group overflow-visible">
            <img src={logo} alt="Knight InfoTek Logo" className="h-16 md:h-20 scale-150 md:scale-[2] origin-left object-contain transition-transform group-hover:scale-[1.55] md:group-hover:scale-[2.1]" />
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavItems />
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-card border-l-white/10">
              <div className="flex flex-col gap-6 mt-8">
                <NavItems />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}