import { motion } from "framer-motion";
import { Shield, ArrowRight, CheckCircle2, Globe, Lock, FileCheck, Activity, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useLocation } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useEffect } from "react";
import heroBg from "@assets/generated_images/futuristic_zero_trust_security_concept.png";

export default function Governments() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigateToSection = (sectionId: string) => {
    setLocation('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 200);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 md:pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Government Solutions Background" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80" />
          <div className="absolute inset-0 cyber-grid opacity-15" />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Government Solutions
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-display">
                FOR <span className="text-primary">GOVERNMENTS</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Behavioral sovereignty solutions, blockchain intelligence, and cyber defense modernization for national security and public sector infrastructure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-center">
                Sovereign Technology for <span className="text-primary">National Security</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-center leading-relaxed">
                Knight Global Enterprises provides governments with behavioral intelligence, blockchain compliance, and autonomous cyber defense technologies designed for sovereign control, air-gapped operation, and mission-critical infrastructure protection.
              </p>
            </div>

            {/* Core Solutions */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-background/50 border-white/10">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    <Globe className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-display text-white">Behavioral Sovereignty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Maintain control over behavioral intelligence and threat detection capabilities within your sovereign infrastructure.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Air-gapped operation support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>On-premise deployment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>No external dependencies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-background/50 border-white/10">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    <Lock className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-display text-white">Blockchain Intelligence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Real-time compliance, transaction monitoring, and regulatory reporting for cryptocurrency and blockchain-based systems.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Multi-jurisdiction compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Automated regulatory reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Forensics and evidence generation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-background/50 border-white/10">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    <Activity className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-display text-white">Cyber Defense Modernization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Autonomous defense systems with self-healing capabilities for critical infrastructure protection.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Zero-trust architectures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Behavioral threat detection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Instant recovery capabilities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Use Cases */}
            <div className="mb-16 bg-card/50 rounded-xl p-8 md:p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-center">
                Government <span className="text-primary">Use Cases</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-primary" />
                    National Security Agencies
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Classified environment deployment (air-gapped)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Behavioral intelligence for threat analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Autonomous defense for critical systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Blockchain forensics and intelligence</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Public Sector & Compliance
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Cryptocurrency regulation and monitoring</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Financial crime detection and reporting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Multi-jurisdiction compliance automation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Infrastructure cybersecurity modernization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Compliance & Security */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-center">
                Compliance & <span className="text-primary">Security Standards</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-background/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-xl font-display text-white">Security Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Air-gapped operation capability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>On-premise deployment options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Zero external data transmission</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Classified environment support</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-xl font-display text-white">Regulatory Compliance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>US, EU, UK, BRICS, APAC frameworks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Automated regulatory reporting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Travel Rule compliance (IVMS-101)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Multi-jurisdiction asset classification</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Engagement Process */}
            <div className="mb-16 bg-card/50 rounded-xl p-8 md:p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-center">
                Government <span className="text-primary">Engagement Process</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Initial Consultation</h3>
                  <p className="text-sm text-muted-foreground">
                    Security clearance verification, requirements assessment, and solution architecture planning.
                  </p>
                </div>
                <div>
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Pilot Deployment</h3>
                  <p className="text-sm text-muted-foreground">
                    Limited scope implementation, security validation, and performance testing in your environment.
                  </p>
                </div>
                <div>
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Full Implementation</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete deployment, team training, and ongoing support with sovereign control maintained.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-xl p-8 md:p-12 border border-primary/30">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-white">
                Secure Your <span className="text-primary">Sovereign Infrastructure</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact our team to discuss government licensing, deployment options, and security requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-display"
                  onClick={() => navigateToSection('contact')}
                >
                  Contact Government Relations <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10 font-display"
                  onClick={() => navigateToSection('products')}
                >
                  View Technology Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

