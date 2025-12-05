import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Globe, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interest: "General Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear status when user starts typing again
    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          interest: "General Inquiry",
          message: "",
        });
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Interested in licensing or acquiring KGE technologies? Contact our team to discuss IP licensing, product acquisition, or implementation support services.
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
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">First Name</label>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Jane"
                    className="bg-background/50 border-white/10"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Last Name</label>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="bg-background/50 border-white/10"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Work Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  className="bg-background/50 border-white/10"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Interest</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-white/10 bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                >
                  <option>General Inquiry</option>
                  <option>IP Licensing Inquiry</option>
                  <option>Product Acquisition</option>
                  <option>Cha-Ching Analytics (CCA) - Licensing</option>
                  <option>BlockchainDNA (BDNA) - Licensing</option>
                  <option>ZeroKnight30 (ZK30) - Licensing</option>
                  <option>ChainGuardian - Licensing</option>
                  <option>Implementation & Support Services</option>
                  <option>Transition Support Contract</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project needs..."
                  className="bg-background/50 border-white/10 min-h-[120px]"
                  required
                />
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="flex items-center gap-2 p-3 rounded-md bg-green-500/20 border border-green-500/30 text-green-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm">Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center gap-2 p-3 rounded-md bg-red-500/20 border border-red-500/30 text-red-400">
                  <AlertCircle className="w-5 h-5" />
                  <span className="text-sm">{errorMessage}</span>
                </div>
              )}
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground font-display font-bold tracking-wide hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    SENDING...
                  </>
                ) : (
                  "SEND MESSAGE"
                )}
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}