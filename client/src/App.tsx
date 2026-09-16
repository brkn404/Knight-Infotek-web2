import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import BlockchainDNA from "@/pages/blockchain-dna";
import ChaChingAnalytics from "@/pages/cha-ching-analytics";
import AgentGX from "@/pages/agent-gx";
import SolutionStackPage from "@/pages/solution-stack";
import Enterprises from "@/pages/enterprises";
import Governments from "@/pages/governments";
import Investors from "@/pages/investors";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import Docs from "@/pages/docs";
import DocsIndex from "@/pages/docs-index";
import FAQPage from "@/pages/faq";
import PrivacyPage from "@/pages/privacy";
import TermsPage from "@/pages/terms";
import ServicesHub from "@/pages/services-hub";
import CybersecurityConsultingPage from "@/pages/services-cybersecurity-consulting";
import SecurityAssessmentsPage from "@/pages/services-security-assessments";
import PenetrationTestingPage from "@/pages/services-penetration-testing";
import EnterpriseAssuranceHub from "@/pages/enterprise-assurance";
import WhenDataBecomesInfrastructure from "@/pages/when-data-becomes-infrastructure";
import GenomeXAssurancePlatform from "@/pages/genomex-assurance-platform";
import NotFound from "@/pages/not-found";
import RedirectPage from "@/pages/redirect";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route
        path="/enterprise-assurance/when-data-becomes-infrastructure"
        component={WhenDataBecomesInfrastructure}
      />
      <Route
        path="/enterprise-assurance/genomex-assurance-platform"
        component={GenomeXAssurancePlatform}
      />
      <Route path="/enterprise-assurance/product-whitepaper">
        {() => <RedirectPage to="/enterprise-assurance" />}
      </Route>
      <Route path="/services/cybersecurity-consulting" component={CybersecurityConsultingPage} />
      <Route path="/services/security-assessments" component={SecurityAssessmentsPage} />
      <Route path="/services/penetration-testing" component={PenetrationTestingPage} />
      <Route path="/services" component={ServicesHub} />
      <Route path="/services/cybersecurity">
        {() => <RedirectPage to="/services/penetration-testing" />}
      </Route>
      <Route path="/services/security">
        {() => <RedirectPage to="/services/security-assessments" />}
      </Route>
      <Route path="/services/consulting">
        {() => <RedirectPage to="/services/cybersecurity-consulting" />}
      </Route>
      <Route path="/enterprise-assurance" component={EnterpriseAssuranceHub} />
      <Route path="/blockchain-dna" component={BlockchainDNA} />
      <Route path="/cha-ching-analytics" component={ChaChingAnalytics} />
      <Route path="/agent-gx" component={AgentGX} />
      <Route path="/gen-id">{() => <RedirectPage to="/blockchain-dna" />}</Route>
      <Route path="/solutions/:stackSlug" component={SolutionStackPage} />
      <Route path="/solutions/cybersecurity-identity">
        {() => <RedirectPage to="/solutions/enterprise-assurance" />}
      </Route>
      <Route path="/solutions/industrial-autonomous">
        {() => <RedirectPage to="/solutions/artificial-intelligence" />}
      </Route>
      <Route path="/zero-knight-30">
        {() => <RedirectPage to="/agent-gx" />}
      </Route>
      <Route path="/chain-guardian">{() => <RedirectPage to="/#products" />}</Route>
      <Route path="/gx-ra">
        {() => <RedirectPage to="/enterprise-assurance" />}
      </Route>
      <Route path="/enterprises" component={Enterprises} />
      <Route path="/governments" component={Governments} />
      <Route path="/investors" component={Investors} />
      <Route path="/docs" component={DocsIndex} />
      <Route path="/docs/:product/*" component={Docs} />
      <Route path="/docs/:filename" component={Docs} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/terms" component={TermsPage} />
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