import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageSeo } from "@/components/page-seo";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PageSeo
        title="Privacy Policy"
        description="Knight InfoTek privacy policy: how we handle information when you use our website and engage with our teams."
        path="/privacy"
      />
      <Navbar />
      <main className="pt-24 md:pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold font-display text-white mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: March 2026</p>

          <div className="prose prose-invert prose-lg max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-white mt-0">Overview</h2>
              <p>
                Knight InfoTek LLC and Knight InfoTek Global respect your privacy. This policy describes
                how we may collect, use, and protect information when you visit this website, submit a
                contact form, or otherwise engage with us. It is intended as a general notice; specific
                agreements or product terms may add further detail.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white">Information we may collect</h2>
              <p>
                Depending on how you interact with us, we may process information you provide directly
                (such as name, email, company, and message content), technical data from your browser
                (such as IP address, device type, and general location derived from IP), and usage data
                related to site performance and security.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white">How we use information</h2>
              <p>
                We use this information to respond to inquiries, operate and improve our website,
                comply with legal obligations, and protect our systems and users. We do not sell your
                personal information.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white">Cookies and analytics</h2>
              <p>
                We may use cookies or similar technologies for essential site functionality, preferences,
                or aggregated analytics. You can control cookies through your browser settings.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white">Retention and security</h2>
              <p>
                We retain information only as long as needed for the purposes described above or as
                required by law. We apply reasonable technical and organizational measures to protect
                personal data.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white">Your rights</h2>
              <p>
                Depending on your jurisdiction, you may have rights to access, correct, delete, or
                restrict certain processing of your personal data. Contact us using the information on
                our site to make a request.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white">Changes</h2>
              <p>
                We may update this policy from time to time. The &quot;Last updated&quot; date at the top
                reflects the latest revision.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white">Contact</h2>
              <p>
                For privacy-related questions, use the contact options on{" "}
                <a href="/#contact" className="text-primary hover:underline">
                  our homepage
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
