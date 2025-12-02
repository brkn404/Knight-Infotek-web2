import { CheckCircle2, Building2, Globe, Shield, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/10 relative border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              FROM CONSULTING TO <br />
              <span className="text-primary">GLOBAL INFRASTRUCTURE</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Knight InfoTek has evolved. Formerly a premier Cybersecurity and AI consulting firm, we have transformed into the exclusive US distribution arm for Knight Global Enterprises—delivering behavioral trust infrastructure for the autonomous future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold font-display mb-6 text-white">
                Our Mission
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We bring the "Global Ledger of Truth" to US industries. We provide the essential infrastructure for regulated sectors—Healthcare, Legal, Finance, and Education—to safely adopt autonomous AI agents under strict human professional oversight.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Knight Global Enterprises operates globally through a structured multi-entity approach: <strong>KGE (Ireland)</strong> owns all IP and handles R&D, while <strong>Knight InfoTek LLC (USA)</strong> serves as the reseller, implementation partner, and customer-facing services provider.
              </p>
              
              <div className="space-y-4">
                {[
                  "US-Based Support & Integration",
                  "Compliance with US Regulations (HIPAA, SEC, FINRA)",
                  "Enterprise-Grade SLA Assurance",
                  "Direct Bridge to Knight Global Innovation",
                  "Implementation & Integration Services",
                  "Managed Services on KGE Platform"
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
                  FOUNDER PROFILE: <span className="text-primary">BRIAN KNIGHT</span>
                </h3>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  U.S. Marine Corps veteran with 30+ years in IT, cybersecurity, and AI innovation
                </p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-background/50 rounded-lg p-6 border border-white/10">
                    <h4 className="text-xl font-bold text-white mb-4">Professional Overview</h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Brian Knight is a U.S. Marine Corps veteran, Unix administrator, cybersecurity expert, and AI innovator with deep expertise in blockchain and cryptocurrency mining operations. His career spans over three decades, combining military precision with cutting-edge technical innovation across Unix/Linux systems, cybersecurity operations, AI development, and blockchain infrastructure.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Today, as the founder and creative lead of Knight InfoTek, Brian is fusing AI, cybersecurity, and blockchain technology into something entirely new.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
                    <h4 className="text-lg font-bold text-white mb-4">Key Qualifications</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>U.S. Marine Corps Veteran</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>30+ years Unix/Linux administration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>Advanced cybersecurity expertise</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>AI/ML model development & training</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>Blockchain development & architecture</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>Cryptocurrency mining operations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>Red team operations & penetration testing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>Custom security software development</span>
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

          {/* The Behavioral Trust Vision */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold font-display mb-8 text-center">
              THE <span className="text-primary">BEHAVIORAL TRUST</span> VISION
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-background/50 border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Building2 className="w-5 h-5 text-primary" /> The Challenge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Traditional trust mechanisms—passwords, certificates, time-based audits, and rule-based compliance—are no longer sufficient in a world of AI agents, autonomous systems, and instant-settlement financial rails.
                  </p>
                </CardContent>
              </Card>

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
