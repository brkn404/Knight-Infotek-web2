import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import BlockchainDNA from "@/pages/blockchain-dna";
import ChaChingAnalytics from "@/pages/cha-ching-analytics";
import ZeroKnight30 from "@/pages/zero-knight-30";
import ChainGuardian from "@/pages/chain-guardian";
import Blog from "@/pages/blog";
import Support from "@/pages/support";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blockchain-dna" component={BlockchainDNA} />
      <Route path="/cha-ching-analytics" component={ChaChingAnalytics} />
      <Route path="/zero-knight-30" component={ZeroKnight30} />
      <Route path="/chain-guardian" component={ChainGuardian} />
      <Route path="/blog" component={Blog} />
      <Route path="/support" component={Support} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;