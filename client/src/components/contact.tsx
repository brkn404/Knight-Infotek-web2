import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

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
                  <h4 className="font-bold text-white">US Headquarters</h4>
                  <p className="text-muted-foreground">123 Innovation Drive<br />Tech Valley, CA 94043</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded bg-primary/10 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Email</h4>
                  <p className="text-muted-foreground">contact@knightinfotek.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded bg-primary/10 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Phone</h4>
                  <p className="text-muted-foreground">+1 (888) 555-0123</p>
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
                  <option>Cha-Ching Analytics</option>
                  <option>BlockchainDNA</option>
                  <option>ZeroKnight30</option>
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
      </div>
    </section>
  );
}