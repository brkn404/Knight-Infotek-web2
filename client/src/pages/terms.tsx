import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageSeo } from "@/components/page-seo";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PageSeo
        title="Terms of Service"
        description="Terms governing use of the Knight InfoTek website. Product-specific agreements may apply separately."
        path="/terms"
      />
      <Navbar />
      <main className="pt-24 md:pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold font-display text-white mb-2">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: March 2026</p>

          <div className="prose prose-invert prose-lg max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-white mt-0">Agreement</h2>
              <p>
                By accessing or using this website, you agree to these terms. If you do not agree, do not
                use the site. Separate written agreements govern products, services, trials, and
                partnerships where applicable.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white">Use of the site</h2>
              <p>
                You may use this site for lawful purposes only. You agree not to attempt to disrupt,
                damage, or gain unauthorized access to our systems, or to use automated means to scrape or
                overload the site without permission.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white">Intellectual property</h2>
              <p>
                Content on this site (including text, graphics, logos, and layout) is owned by Knight
                InfoTek or its licensors and is protected by applicable intellectual property laws. No
                license is granted except the limited right to view the site for your internal business
                or personal use.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white">Disclaimers</h2>
              <p>
                The site and its content are provided &quot;as is&quot; without warranties of any kind,
                express or implied. Descriptions of products and capabilities are for general information
                and do not replace formal specifications, statements of work, or contracts.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white">Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, Knight InfoTek and its affiliates will not be
                liable for any indirect, incidental, special, consequential, or punitive damages arising
                from your use of the site, or for any loss of data, profits, or business opportunity.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white">Governing law</h2>
              <p>
                These terms are governed by the laws of the State of Delaware, United States, without
                regard to conflict-of-law rules, except where mandatory consumer protections apply in your
                jurisdiction.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white">Changes</h2>
              <p>
                We may update these terms periodically. Continued use of the site after changes constitutes
                acceptance of the revised terms.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white">Contact</h2>
              <p>
                Questions about these terms:{" "}
                <a href="/#contact" className="text-primary hover:underline">
                  contact us
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
