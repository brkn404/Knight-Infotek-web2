import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import BlockchainDNA from "@/pages/blockchain-dna";
import ChaChingAnalytics from "@/pages/cha-ching-analytics";
import ZeroKnight30 from "@/pages/zero-knight-30";
import ChainGuardian from "@/pages/chain-guardian";
import Enterprises from "@/pages/enterprises";
import Governments from "@/pages/governments";
import Investors from "@/pages/investors";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import Docs from "@/pages/docs";
import DocsIndex from "@/pages/docs-index";
import FAQ from "@/pages/faq";
import NotFound from "@/pages/not-found";
import RedirectPage from "@/pages/redirect";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blockchain-dna" component={BlockchainDNA} />
      <Route path="/cha-ching-analytics" component={ChaChingAnalytics} />
      <Route path="/zero-knight-30" component={ZeroKnight30} />
      <Route path="/chain-guardian" component={ChainGuardian} />
      <Route path="/enterprises" component={Enterprises} />
      <Route path="/governments" component={Governments} />
      <Route path="/investors" component={Investors} />
      <Route path="/docs" component={DocsIndex} />
      <Route path="/docs/:product/*" component={Docs} />
      <Route path="/docs/:filename" component={Docs} />
      <Route path="/faq" component={FAQ} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/blog" component={Blog} />
      {/* Redirect common incorrect URLs to correct /docs/ paths */}
      <Route path="/troubleshooting">
        {() => <RedirectPage to="/docs/blockchain-dna/troubleshooting/README" />}
      </Route>
      <Route path="/troubleshooting/">
        {() => <RedirectPage to="/docs/blockchain-dna/troubleshooting/README" />}
      </Route>
      <Route path="/api">
        {() => <RedirectPage to="/docs/blockchain-dna/api/README" />}
      </Route>
      <Route path="/api/">
        {() => <RedirectPage to="/docs/blockchain-dna/api/README" />}
      </Route>
      <Route path="/integrations">
        {() => <RedirectPage to="/docs/blockchain-dna/integrations/README" />}
      </Route>
      <Route path="/integrations/">
        {() => <RedirectPage to="/docs/blockchain-dna/integrations/README" />}
      </Route>
      <Route path="/documentation">
        {() => <RedirectPage to="/docs/blockchain-dna/documentation/README" />}
      </Route>
      <Route path="/documentation/">
        {() => <RedirectPage to="/docs/blockchain-dna/documentation/README" />}
      </Route>
      <Route path="/features">
        {() => <RedirectPage to="/docs/blockchain-dna/features/README" />}
      </Route>
      <Route path="/features/">
        {() => <RedirectPage to="/docs/blockchain-dna/features/README" />}
      </Route>
      <Route path="/resources">
        {() => <RedirectPage to="/docs/blockchain-dna/resources/README" />}
      </Route>
      <Route path="/resources/">
        {() => <RedirectPage to="/docs/blockchain-dna/resources/README" />}
      </Route>
      <Route path="/getting-started">
        {() => <RedirectPage to="/docs/blockchain-dna/getting-started/README" />}
      </Route>
      <Route path="/getting-started/">
        {() => <RedirectPage to="/docs/blockchain-dna/getting-started/README" />}
      </Route>
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