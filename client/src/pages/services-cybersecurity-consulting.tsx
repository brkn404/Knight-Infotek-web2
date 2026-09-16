import { ServicePageLayout } from "@/components/service-page-layout";
import { consultingBlocks } from "@/data/security-services";

export default function CybersecurityConsultingPage() {
  return (
    <ServicePageLayout
      title="Cybersecurity Consulting"
      eyebrow="Strategic guidance"
      description="Architecture, program review, and AI governance advisory — practical guidance from practitioners who also build security products."
      path="/services/cybersecurity-consulting"
      blocks={consultingBlocks}
      showMethodology={false}
    />
  );
}
