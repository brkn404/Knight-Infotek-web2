import { ServicePageLayout } from "@/components/service-page-layout";
import { penTestBlocks } from "@/data/security-services";

export default function PenetrationTestingPage() {
  return (
    <ServicePageLayout
      title="Penetration Testing"
      eyebrow="Offensive security"
      description="External, internal, application, and physical testing, find weaknesses before adversaries do, with clear remediation paths."
      path="/services/penetration-testing"
      blocks={penTestBlocks}
    />
  );
}
