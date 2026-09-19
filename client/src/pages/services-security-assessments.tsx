import { ServicePageLayout } from "@/components/service-page-layout";
import { assessmentBlocks } from "@/data/security-services";

export default function SecurityAssessmentsPage() {
  return (
    <ServicePageLayout
      title="Security Assessments"
      eyebrow="Evaluate before you invest"
      description="Structured assessments across vulnerability, AI/LLM risk, red-team simulation, and threat hunting, with findings you can act on."
      path="/services/security-assessments"
      blocks={assessmentBlocks}
    />
  );
}
