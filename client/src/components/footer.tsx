import { Linkedin } from "lucide-react";
import { solutionStacks } from "@/data/solution-stacks";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <span className="font-display font-bold text-xl tracking-wider text-foreground">
                KNIGHT<span className="text-primary">INFOTEK</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-md mb-4">
              <strong className="text-white">Knight InfoTek LLC (USA)</strong><br />
              Implementation • Migration • Support • Engineering • Acquisition Partnerships
            </p>
            <p className="text-muted-foreground max-w-md mb-6 text-sm">
              <strong className="text-white">Knight InfoTek Global (Ireland)</strong><br />
              R&D • Patents • Product Development • IP Ownership
            </p>
            <a 
              href="https://www.linkedin.com/in/brian-knight2k" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Solution stacks</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {solutionStacks.map((s) => (
                <li key={s.slug}>
                  <a href={`/solutions/${s.slug}`} className="hover:text-primary transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="font-bold text-white mb-3 mt-6">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/agent-gx" className="hover:text-primary transition-colors">AgentGX</a></li>
              <li><a href="/enterprise-assurance" className="hover:text-primary transition-colors">GenomeX Assurance</a></li>
              <li><a href="/gen-id" className="hover:text-primary transition-colors">GenID</a></li>
              <li><a href="/blockchain-dna" className="hover:text-primary transition-colors">BlockchainDNA</a></li>
              <li><a href="/cha-ching-analytics" className="hover:text-primary transition-colors">Cha-Ching Analytics</a></li>
              <li><a href="/chain-guardian" className="hover:text-primary transition-colors">ChainGuardian</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/enterprise-assurance" className="hover:text-primary transition-colors">Enterprise Assurance</a></li>
              <li><a href="/#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="/faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Knight InfoTek Global - All Rights Reserved</p>
          <div className="flex gap-4">
            <a href="/enterprise-assurance" className="hover:text-primary transition-colors">Assurance</a>
            <a href="/#products" className="hover:text-primary transition-colors">Products</a>
            <a href="/#about" className="hover:text-primary transition-colors">About</a>
            <a href="/#contact" className="hover:text-primary transition-colors">Contact</a>
            <a href="/blog" className="hover:text-primary transition-colors">Blog</a>
          </div>
        </div>
      </div>
    </footer>
  );
}