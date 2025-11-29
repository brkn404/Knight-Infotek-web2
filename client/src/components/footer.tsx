import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-xl tracking-wider text-foreground">
                KNIGHT<span className="text-primary">INFOTEK</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              The US Reseller for Knight Global Enterprises. Building the trust layer for the autonomous future.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Cha-Ching Analytics</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">BlockchainDNA</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">ZeroKnight30</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Enterprise Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Knight InfoTek LLC. All rights reserved.</p>
          <p>Partnered with Knight Global Enterprises (Ireland)</p>
        </div>
      </div>
    </footer>
  );
}