import { CheckCircle2, Building2, Globe, Shield, Brain, Linkedin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/10 relative border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              TWO ENTITIES. <br />
              <span className="text-primary">ONE MISSION.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
              <strong className="text-white">Invent. License. Implement. Scale.</strong>
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Knight Global Enterprises invents and owns the technology. We build products and IP that others license or acquire to build their own companies. 
              Knight InfoTek provides implementation support, transition services, and helps companies take over products as their own.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <div className="bg-card/50 rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold font-display mb-6 text-white flex items-center gap-3">
                <Globe className="w-6 h-6 text-primary" /> KGE (Ireland)
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">Owns all patents, IP, behavioral engines, software frameworks</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Conducts advanced R&D and product development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Licenses core technologies to enterprises, governments, incubators, and accelerators</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card/50 rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold font-display mb-6 text-white flex items-center gap-3">
                <Building2 className="w-6 h-6 text-primary" /> Knight InfoTek LLC (USA)
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-white">Implements and operationalizes KGE technology</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Provides enterprise integration services</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Delivers 12–36 month transition contracts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Offers extended support, product takeover, and custom feature development</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mb-16">
            <p className="text-xl text-primary font-medium italic">
              Together, we turn foundational IP into scalable products.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold font-display mb-6 text-white">
                What We Provide
              </h3>
              
              <div className="space-y-4">
                {[
                  "IP Licensing & Acquisition Opportunities",
                  "12-36 Month Transitional Support Contracts",
                  "Implementation & Integration Services",
                  "Product Takeover & Migration Support",
                  "Extended Support & IP Consulting",
                  "Feature Development & Customization"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-20" />
              <div className="relative glass-panel p-8 rounded-2xl border border-white/10">
                <div className="flex flex-col gap-8">
                  <div className="border-l-2 border-primary pl-6">
                    <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" /> Identity
                    </h4>
                    <p className="text-sm text-muted-foreground">Verifiable proof of who (or what) is acting. Behavior-first identity through GenomeX.</p>
                  </div>
                  <div className="border-l-2 border-primary pl-6">
                    <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                      <Brain className="w-5 h-5 text-primary" /> Provenance
                    </h4>
                    <p className="text-sm text-muted-foreground">Immutable history of origin, ownership, and behavioral lineage.</p>
                  </div>
                  <div className="border-l-2 border-primary pl-6">
                    <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                      <Globe className="w-5 h-5 text-primary" /> Compliance
                    </h4>
                    <p className="text-sm text-muted-foreground">Real-time adherence to regulatory frameworks at blockchain speed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Profile */}
          <div className="mt-16 mb-16">
            <div className="bg-card/50 rounded-xl p-8 md:p-12 border border-white/10">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-4xl font-bold font-display mb-4 text-white">
                  FOUNDER & CHIEF ARCHITECT: <span className="text-primary">BRIAN KNIGHT</span>
                </h3>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  U.S. Marine Corps veteran with 30+ years in cybersecurity, systems architecture, Unix/Linux engineering, blockchain infrastructure, and AI behavioral modeling.
                </p>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
                  Brian has architected enterprise systems, led cybersecurity operations, and pioneered behavioral integrity engines that fuse AI, cyber, and blockchain into a unified intelligence layer.
                </p>
                <p className="text-base text-primary/80 max-w-3xl mx-auto mt-2 italic">
                  Today, he leads both the engineering direction and creative innovation behind KGE's patent portfolio.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-background/50 rounded-lg p-6 border border-white/10">
                    <h4 className="text-xl font-bold text-white mb-4">Professional Overview</h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Brian Knight is a U.S. Marine Corps veteran, systems architect, cybersecurity expert, and AI innovator with deep expertise in blockchain and cryptocurrency mining operations. His career spans over three decades, combining military precision with cutting-edge technical innovation across Unix/Linux systems, cybersecurity operations, AI development, and blockchain infrastructure.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Today, as the founder and creative lead of Knight InfoTek, Brian is fusing AI, cybersecurity, and blockchain technology into something entirely new.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-primary/10 rounded-lg p-6 border border-primary/20 mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-white">Key Qualifications</h4>
                      <a 
                        href="https://www.linkedin.com/in/brian-knight2k" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                        title="Connect on LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>CISSP - (ISC)² ID: 1657523</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>U.S. Marine Corps Veteran</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>30+ Years Systems Architecture</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>Advanced Cybersecurity Expertise</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>AI/ML Model Development & Training</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>Blockchain Development & Architecture</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>Cryptocurrency Mining Operations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>Red Team Operations & Penetration Testing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>Custom Security Software Development</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Veteran-Owned & Mission-Driven */}
          <div className="mt-16 mb-16">
            <div className="bg-card/50 rounded-xl p-8 md:p-12 border border-white/10">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-4xl font-bold font-display mb-4 text-white">
                  VETERAN-OWNED & <span className="text-primary">MISSION-DRIVEN</span>
                </h3>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Knight InfoTek is a certified Service-Disabled Veteran-Owned Small Business (SDVOSB) and California Disabled Veteran Business Enterprise (DVBE)–eligible company.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Federal Contracting */}
                <div className="bg-background/50 rounded-lg p-6 border border-white/10">
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-white">Service-Disabled Veteran-Owned Small Business (SDVOSB)</h4>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Knight InfoTek is proudly owned and operated by a 100% service-disabled U.S. military veteran. We meet the federal requirements for:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✔</span>
                      <span><strong>SDVOSB</strong> – Service-Disabled Veteran-Owned Small Business</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✔</span>
                      <span>Qualified under U.S. federal contracting guidelines (38 U.S.C. § 101 & § 8127)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✔</span>
                      <span>Eligible for SDVOSB set-asides, sole-source awards, subcontracting partnerships, and federal supplier programs</span>
                    </li>
                  </ul>
                  
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <h5 className="font-bold text-white mb-3">Federal Contracting Eligibility</h5>
                    <p className="text-sm text-muted-foreground mb-3">As a 100% service-disabled veteran–owned company, Knight InfoTek is eligible for:</p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>SDVOSB set-aside contracts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>SBA Veteran Small Business Certification (VetCert)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>DoD, VA, DHS, GSA contracting opportunities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>Prime and subcontractor partnerships</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>Sole-source awards (up to $5M)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>SBA mentor-protégé programs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>VA Vets First procurement program</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* California State */}
                <div className="bg-background/50 rounded-lg p-6 border border-white/10">
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-white">California State Veteran Business Eligibility</h4>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Knight InfoTek qualifies for:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✔</span>
                      <span><strong>California DVBE</strong> – Disabled Veteran Business Enterprise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✔</span>
                      <span>Eligible under California Military & Veterans Code § 999</span>
                    </li>
                  </ul>
                  
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <h5 className="font-bold text-white mb-3">Program Benefits Include:</h5>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>State DVBE contracting opportunities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>California DVBE bid incentives (5%–7%)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>Mandatory participation goals for state agencies (3% DVBE)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>Eligibility for CALTRANS, CSU, UC, & municipal projects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>Prime and subcontracting preference</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 rounded-lg p-6 border border-primary/20 text-center">
                <p className="text-muted-foreground">
                  We are proudly 100% veteran-owned, meeting all federal and state requirements for SDVOSB/DVBE participation. This designation allows us to partner with government agencies, prime contractors, and enterprise organizations seeking innovative technology solutions under veteran-focused procurement programs.
                </p>
                <p className="text-muted-foreground mt-4 text-sm">
                  <strong className="text-white">Documentation and certification information available upon request.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Business Model Section */}
          <div className="mt-16 mb-16">
            <div className="bg-card/50 rounded-xl p-8 md:p-12 border border-white/10">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-4xl font-bold font-display mb-4 text-white">
                  OUR <span className="text-primary">BUSINESS MODEL</span>
                </h3>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  KGE invents the technology. Others license or acquire it to build their own companies.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-background/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <Building2 className="w-5 h-5 text-primary" /> Full Acquisition
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Complete IP ownership transfer. Buyer receives full patents, trademarks, codebase, and all rights. One-time purchase payment.
                    </p>
                    <p className="text-xs text-primary font-medium">
                      "It's gone" — Product fully transferred
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <Brain className="w-5 h-5 text-primary" /> Acquisition + Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Buyer owns the product. Knight InfoTek provides 12-36 months of transitional support: migration, training, stabilization, and feature development.
                    </p>
                    <p className="text-xs text-primary font-medium">
                      Most common model — Paid support during transition
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <Globe className="w-5 h-5 text-primary" /> Licensing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Best long-term model. Buyer gets full usage rights, rebranding, and product building capabilities. KGE retains IP ownership, licensing fees, and royalties.
                    </p>
                    <p className="text-xs text-primary font-medium">
                      Recurring revenue — IP ownership retained
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* The Behavioral Trust Vision */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold font-display mb-8 text-center">
              THE <span className="text-primary">BEHAVIORAL TRUST</span> VISION
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-background/50 border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Brain className="w-5 h-5 text-primary" /> The Solution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Identity through behavior. Integrity through provenance. Trust through continuous verification.</strong> KGE delivers a unified behavioral trust platform powered by GenomeX.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/50 border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Globe className="w-5 h-5 text-primary" /> The Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Enable digital finance, blockchain ecosystems, and autonomous systems to scale safely into the next decade with provable trust, real-time compliance, and behavioral governance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
