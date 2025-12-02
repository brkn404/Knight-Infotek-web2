import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, FileText, Book, HelpCircle, Search, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function Support() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-white">
              SUPPORT <span className="text-primary">CENTER</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get help, find answers, and access resources for Knight InfoTek products and services.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Help Options */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-card/50 border-white/10 hover:border-primary/30 transition-colors cursor-pointer group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <HelpCircle className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-display">FAQs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Find answers to common questions about our products and services.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-white/10 hover:border-primary/30 transition-colors cursor-pointer group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Book className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-display">Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Technical documentation, API references, and integration guides.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-white/10 hover:border-primary/30 transition-colors cursor-pointer group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-display">Contact Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Reach out to our support team for technical assistance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-white/10 hover:border-primary/30 transition-colors cursor-pointer group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-display">Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Whitepapers, case studies, and additional learning materials.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Support Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold font-display mb-6 text-white">
                GET <span className="text-primary">SUPPORT</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Need help with implementation, integration, or technical issues? Our support team is here to assist you. 
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded bg-primary/10 text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Email Support</h4>
                    <p className="text-muted-foreground text-sm">
                      <a href="mailto:support@knightinfotek.com" className="hover:text-primary transition-colors">
                        support@knightinfotek.com
                      </a>
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Response time: Within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded bg-primary/10 text-primary">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Support Hours</h4>
                    <p className="text-muted-foreground text-sm">
                      Monday - Friday: 8:00 AM - 6:00 PM PST
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Emergency support available for enterprise customers
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-white/10">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Name</label>
                  <Input placeholder="Your name" className="bg-background/50 border-white/10" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Email</label>
                  <Input type="email" placeholder="your@email.com" className="bg-background/50 border-white/10" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Product/Service</label>
                  <select className="flex h-10 w-full rounded-md border border-white/10 bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white">
                    <option>General Support</option>
                    <option>Cha-Ching Analytics (CCA)</option>
                    <option>BlockchainDNA (BDNA)</option>
                    <option>ZeroKnight30 (ZK30)</option>
                    <option>ChainGuardian</option>
                    <option>Integration & Implementation</option>
                    <option>Technical Issue</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Priority</label>
                  <select className="flex h-10 w-full rounded-md border border-white/10 bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Emergency</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Message</label>
                  <Textarea 
                    placeholder="Describe your issue or question..." 
                    className="bg-background/50 border-white/10 min-h-[150px]" 
                  />
                </div>
                
                <Button type="submit" className="w-full bg-primary text-primary-foreground font-display font-bold tracking-wide hover:bg-primary/90">
                  SUBMIT SUPPORT REQUEST
                </Button>
              </form>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold font-display mb-8 text-center text-white">
              ADDITIONAL <span className="text-primary">RESOURCES</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="bg-card/50 border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <FileText className="w-5 h-5 text-primary" /> Documentation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Comprehensive guides and API documentation for all Knight InfoTek products.
                  </p>
                  <Button variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary/10">
                    View Docs <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Book className="w-5 h-5 text-primary" /> Knowledge Base
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Search our knowledge base for answers to common questions and troubleshooting guides.
                  </p>
                  <Button variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary/10">
                    Search KB <Search className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <MessageSquare className="w-5 h-5 text-primary" /> Community
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Connect with other users, share experiences, and get community support.
                  </p>
                  <Button variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary/10">
                    Join Community <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

