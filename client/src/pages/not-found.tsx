import { Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageSeo } from "@/components/page-seo";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
      <PageSeo
        title="Page not found"
        description="The page you requested does not exist on knightinfotek.com."
        path="/404"
        noindex
      />
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 pt-24 pb-16">
        <div className="max-w-md w-full text-center border border-white/10 rounded-lg bg-card/40 p-8">
          <div className="flex justify-center mb-4">
            <AlertCircle className="h-12 w-12 text-primary" aria-hidden />
          </div>
          <h1 className="text-2xl font-display font-bold text-white mb-2">404: Page not found</h1>
          <p className="text-sm text-muted-foreground mb-8">
            That URL is not part of this site. Check the address or start from the home page.
          </p>
          <Button asChild>
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
