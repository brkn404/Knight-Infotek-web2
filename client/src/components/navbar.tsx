import { Link } from "wouter";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { solutionStacks } from "@/data/solution-stacks";
import logo from "@assets/knight-infotek-logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    const currentPath = window.location.pathname;

    if (currentPath !== "/") {
      window.location.href = `/#${hash}`;
    } else {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 10);
    }
  };

  const NavItems = () => (
    <>
      <Link
        href="/enterprise-assurance"
        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      >
        Enterprise Assurance
      </Link>
      <a
        href="/#products"
        onClick={(e) => handleHashClick(e, "products")}
        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      >
        Products
      </a>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 outline-none"
          >
            Solutions
            <ChevronDown className="w-4 h-4 opacity-70" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="bg-card border-white/10 text-foreground min-w-[14rem]"
        >
          {solutionStacks.map((s) => (
            <DropdownMenuItem key={s.slug} asChild className="focus:bg-white/10 cursor-pointer">
              <Link href={`/solutions/${s.slug}`}>{s.title}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <a
        href="/#about"
        onClick={(e) => handleHashClick(e, "about")}
        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      >
        About
      </a>
      <a
        href="/#contact"
        onClick={(e) => {
          if (window.location.pathname === "/") {
            e.preventDefault();
            setTimeout(() => {
              const element = document.getElementById("contact");
              if (element) {
                const offset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }, 10);
          }
        }}
        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      >
        Contact
      </a>
      <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
        Blog
      </Link>
    </>
  );

  const MobileNavItems = () => (
    <>
      <Link
        href="/enterprise-assurance"
        className="text-base font-medium text-gray-200"
        onClick={() => setIsOpen(false)}
      >
        Enterprise Assurance
      </Link>
      <a
        href="/#products"
        onClick={(e) => {
          handleHashClick(e, "products");
          setIsOpen(false);
        }}
        className="text-base font-medium text-gray-200"
      >
        Products
      </a>
      <p className="text-xs uppercase tracking-wider text-muted-foreground pt-2">Solutions</p>
      {solutionStacks.map((s) => (
        <Link
          key={s.slug}
          href={`/solutions/${s.slug}`}
          className="block pl-2 text-base font-medium text-gray-200 hover:text-primary"
          onClick={() => setIsOpen(false)}
        >
          {s.title}
        </Link>
      ))}
      <a
        href="/#about"
        onClick={(e) => {
          handleHashClick(e, "about");
          setIsOpen(false);
        }}
        className="text-base font-medium text-gray-200"
      >
        About
      </a>
      <a
        href="/#contact"
        onClick={(e) => {
          setIsOpen(false);
          if (window.location.pathname === "/") {
            e.preventDefault();
            setTimeout(() => {
              const element = document.getElementById("contact");
              if (element) {
                const offset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }, 10);
          }
        }}
        className="text-base font-medium text-gray-200"
      >
        Contact
      </a>
      <Link
        href="/blog"
        className="text-base font-medium text-gray-200"
        onClick={() => setIsOpen(false)}
      >
        Blog
      </Link>
    </>
  );

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-3 group overflow-visible cursor-pointer">
            <img
              src={logo}
              alt="Knight InfoTek Logo"
              className="h-16 md:h-20 scale-150 md:scale-[2] origin-left object-contain transition-transform group-hover:scale-[1.55] md:group-hover:scale-[2.1]"
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavItems />
        </div>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-card border-l-white/10">
              <div className="flex flex-col gap-4 mt-8">
                <MobileNavItems />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
