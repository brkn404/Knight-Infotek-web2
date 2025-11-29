import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Activity, Dna, ShieldAlert } from "lucide-react";

// Import generated images
import ccaImg from "@assets/generated_images/abstract_financial_analytics_visualization.png";
import dnaImg from "@assets/generated_images/digital_dna_strand_made_of_blockchain_blocks.png";
import zk30Img from "@assets/generated_images/futuristic_zero_trust_security_concept.png";

const products = [
  {
    id: "cca",
    title: "Cha-Ching Analytics",
    subtitle: "Autonomous Compliance Infrastructure",
    description: "Real-time behavioral genome hashing and fraud detection for the tokenized economy. Compliance at blockchain speed.",
    image: ccaImg,
    icon: Activity,
    status: "Live",
    features: ["Behavioral Genome Hashing", "Real-time Fraud Detection", "Token Validation"]
  },
  {
    id: "dna",
    title: "BlockchainDNA",
    subtitle: "Universal Identity & Provenance",
    description: "The intersection where AI agents meet Blockchain 4.0. The Universal Proof-of-Identity & Provenance Chain.",
    image: dnaImg,
    icon: Dna,
    status: "Core Vision",
    features: ["Identity Layer", "AI Governance", "Immutable Truth"]
  },
  {
    id: "zk30",
    title: "ZeroKnight30",
    subtitle: "Advanced Threat Prevention",
    description: "Next-generation zero trust architecture for autonomous systems. Secure the future of automated enterprise.",
    image: zk30Img,
    icon: ShieldAlert,
    status: "Coming Soon",
    features: ["Zero Trust", "Threat Prevention", "Automated Defense"]
  }
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            CORE <span className="text-primary">TECHNOLOGIES</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Deploying Knight Global Enterprises' advanced suite of blockchain and AI governance tools for the US market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-card/50 border-white/10 overflow-hidden group hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                <div className="h-48 overflow-hidden relative">
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
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <product.icon className="w-6 h-6" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="text-2xl font-display">{product.title}</CardTitle>
                  <CardDescription className="text-primary/80 font-medium">
                    {product.subtitle}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {product.features.map((feature) => (
                      <span key={feature} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-muted-foreground">
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}