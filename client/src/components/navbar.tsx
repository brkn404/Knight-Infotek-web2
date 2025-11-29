import { Link } from "wouter";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = () => (
    <>
      <a href="#products" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
        Products
      </a>
      <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
        About
      </a>
      <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
        Contact
      </a>
    </>
  );

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <span className="font-display font-bold text-xl tracking-wider text-foreground">
              KNIGHT<span className="text-primary">INFOTEK</span>
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavItems />
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary font-display tracking-wide">
            PARTNER LOGIN
          </Button>
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
                <Button className="w-full bg-primary text-primary-foreground font-display">
                  PARTNER LOGIN
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}