import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Activity, Dna, ShieldAlert, Lock } from "lucide-react";
import { Link } from "wouter";

// Import generated images
import ccaImg from "@assets/generated_images/abstract_financial_analytics_visualization.png";
import dnaImg from "@assets/generated_images/digital_dna_strand_made_of_blockchain_blocks.png";
import zk30Img from "@assets/generated_images/futuristic_zero_trust_security_concept.png";
import cgImg from "@assets/generated_images/mempool_monitoring_firewall_visualization.png";

const products = [
  {
    id: "cca",
    title: "Cha-Ching Analytics",
    subtitle: "Autonomous Compliance Infrastructure",
    description: "Real-time behavioral genome hashing and fraud detection for the tokenized economy. Compliance at blockchain speed.",
    image: ccaImg,
    icon: Activity,
    status: "Live",
    features: ["Behavioral Genome Hashing", "Real-time Fraud Detection", "Token Validation"],
    link: "/cha-ching-analytics"
  },
  {
    id: "dna",
    title: "BlockchainDNA",
    subtitle: "Universal Identity & Provenance",
    description: "The intersection where AI agents meet Blockchain 4.0. The Universal Proof-of-Identity & Provenance Chain.",
    image: dnaImg,
    icon: Dna,
    status: "Core Vision",
    features: ["Identity Layer", "AI Governance", "Immutable Truth"],
    link: "/blockchain-dna"
  },
  {
    id: "zk30",
    title: "ZeroKnight30",
    subtitle: "Advanced Threat Prevention",
    description: "Next-generation zero trust architecture for autonomous systems. Secure the future of automated enterprise.",
    image: zk30Img,
    icon: ShieldAlert,
    status: "Coming Soon",
    features: ["Zero Trust", "Threat Prevention", "Automated Defense"],
    link: "/zero-knight-30"
  },
  {
    id: "chain-guardian",
    title: "ChainGuardian",
    subtitle: "Pre-Block Content Safety",
    description: "Liability protection for miners, pools, and nodes. Detects illegal content before it hits the blockchain.",
    image: cgImg,
    icon: Lock,
    status: "New",
    features: ["Mempool Firewall", "Hash-Only Verification", "Liability Shield"],
    link: "/chain-guardian"
  }
];

export function Products() {
  return (
    <section id="products" className="py-12 md:py-16 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            CORE <span className="text-primary">TECHNOLOGIES</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Deploying Knight Global Enterprises' advanced suite of blockchain and AI governance tools for the US market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Link href={product.link} key={product.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="cursor-pointer h-full"
              >
                <Card className="bg-card/50 border-white/10 overflow-hidden group hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                  <div className="h-40 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur text-primary border-primary/20">
                      {product.status}
                    </Badge>
                  </div>
                  
                  <CardHeader className="p-4 pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <product.icon className="w-5 h-5" />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <CardTitle className="text-xl font-display">{product.title}</CardTitle>
                    <CardDescription className="text-primary/80 font-medium text-xs">
                      {product.subtitle}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-4 pt-0 flex-grow flex flex-col">
                    <p className="text-muted-foreground mb-4 text-xs leading-relaxed flex-grow">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {product.features.map((feature) => (
                        <span key={feature} className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-muted-foreground">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}