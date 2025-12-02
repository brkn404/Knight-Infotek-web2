import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Globe } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 skew-y-3 transform origin-bottom-right" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              GET IN <span className="text-primary">TOUCH</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Ready to deploy the Global Ledger of Truth in your enterprise? Contact our US team to discuss integration and compliance solutions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded bg-primary/10 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Address</h4>
                  <p className="text-muted-foreground">Santa Ana, CA USA</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded bg-primary/10 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Phone</h4>
                  <p className="text-muted-foreground">714-466-4121</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded bg-primary/10 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Email</h4>
                  <p className="text-muted-foreground">
                    <a href="mailto:contact@knightinfotek.com" className="hover:text-primary transition-colors">
                      contact@knightinfotek.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded bg-primary/10 text-primary">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Website</h4>
                  <p className="text-muted-foreground">
                    <a href="https://www.knightinfotek.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      www.knightinfotek.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-2xl border border-white/10">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">First Name</label>
                  <Input placeholder="Jane" className="bg-background/50 border-white/10" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Last Name</label>
                  <Input placeholder="Doe" className="bg-background/50 border-white/10" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Work Email</label>
                <Input type="email" placeholder="jane@company.com" className="bg-background/50 border-white/10" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Interest</label>
                <select className="flex h-10 w-full rounded-md border border-white/10 bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white">
                  <option>General Inquiry</option>
                  <option>Cha-Ching Analytics (CCA)</option>
                  <option>BlockchainDNA (BDNA)</option>
                  <option>ZeroKnight30 (ZK30)</option>
                  <option>ChainGuardian</option>
                  <option>Enterprise Integration</option>
                  <option>Partner Program</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Message</label>
                <Textarea placeholder="Tell us about your project needs..." className="bg-background/50 border-white/10 min-h-[120px]" />
              </div>
              
              <Button type="submit" className="w-full bg-primary text-primary-foreground font-display font-bold tracking-wide hover:bg-primary/90">
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>
        
        {/* Additional Contact Emails Section */}
        <div className="mt-16 pt-16 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold font-display mb-8 text-center">
              ADDITIONAL <span className="text-primary">CONTACT</span> INFORMATION
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h4 className="font-bold text-white mb-4">General</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="mailto:info@knightinfotek.com" className="hover:text-primary transition-colors">
                      info@knightinfotek.com
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Business</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="mailto:sales@knightinfotek.com" className="hover:text-primary transition-colors">
                      sales@knightinfotek.com
                    </a>
                  </li>
                  <li>
                    <a href="mailto:billing@knightinfotek.com" className="hover:text-primary transition-colors">
                      billing@knightinfotek.com
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="mailto:support@knightinfotek.com" className="hover:text-primary transition-colors">
                      support@knightinfotek.com
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Careers</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="mailto:jobs@knightinfotek.com" className="hover:text-primary transition-colors">
                      jobs@knightinfotek.com
                    </a>
                  </li>
                  <li>
                    <a href="mailto:careers@knightinfotek.com" className="hover:text-primary transition-colors">
                      careers@knightinfotek.com
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hr@knightinfotek.com" className="hover:text-primary transition-colors">
                      hr@knightinfotek.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}