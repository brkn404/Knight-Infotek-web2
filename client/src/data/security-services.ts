import {
  Shield,
  Target,
  Users,
  Brain,
  Network,
  Building,
  Code,
  Bug,
  Eye,
  AlertTriangle,
  type LucideIcon,
} from "lucide-react";

export interface ServiceOffering {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  href: string;
  icon: LucideIcon;
  bullets: string[];
}

export const securityServiceOfferings: ServiceOffering[] = [
  {
    slug: "cybersecurity-consulting",
    title: "Cybersecurity Consulting",
    shortTitle: "Consulting",
    description:
      "Strategic security planning, architecture design, and program guidance, from posture review through remediation roadmaps.",
    href: "/services/cybersecurity-consulting",
    icon: Users,
    bullets: [
      "Security architecture & zero-trust design",
      "Program assessment & roadmap development",
      "AI / LLM governance advisory",
      "Incident readiness & executive briefings",
    ],
  },
  {
    slug: "security-assessments",
    title: "Security Assessments",
    shortTitle: "Assessments",
    description:
      "Structured evaluations of your environment, vulnerability analysis, AI/LLM audits, red-team exercises, and threat hunting.",
    href: "/services/security-assessments",
    icon: Shield,
    bullets: [
      "Vulnerability & posture assessment",
      "AI / LLM security audits",
      "Red teaming & adversary simulation",
      "Threat hunting & incident response testing",
    ],
  },
  {
    slug: "penetration-testing",
    title: "Penetration Testing",
    shortTitle: "Pen Testing",
    description:
      "Hands-on offensive testing across external, internal, application, and physical layers, OSSTMM, PTES, and OWASP aligned.",
    href: "/services/penetration-testing",
    icon: Target,
    bullets: [
      "External & internal network testing",
      "Web, API & mobile application testing",
      "Physical & social-engineering assessment",
      "Actionable remediation reporting",
    ],
  },
];

export interface ServiceDetailBlock {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
}

export const consultingBlocks: ServiceDetailBlock[] = [
  {
    title: "Security Architecture",
    description:
      "Design and review security controls for cloud, on-prem, and hybrid environments, aligned to your risk profile and compliance context.",
    icon: Shield,
    items: [
      "Zero-trust & segmentation design",
      "Identity and access architecture",
      "Secure AI / agent deployment patterns",
      "Vendor and control mapping",
    ],
  },
  {
    title: "Program & Posture Review",
    description:
      "Evaluate how security is run today, policies, tooling, detection, and response, and build a prioritized improvement plan.",
    icon: Target,
    items: [
      "Current-state assessment",
      "Gap analysis against frameworks",
      "Remediation roadmap & quick wins",
      "Executive and board-ready summaries",
    ],
  },
  {
    title: "AI & LLM Governance",
    description:
      "Advisory for teams deploying language models and autonomous agents, policy, monitoring, and proof-before-use patterns.",
    icon: Brain,
    items: [
      "LLM deployment risk review",
      "Prompt-injection & data-exposure controls",
      "Agent governance alignment",
      "Integration with Enterprise Assurance concepts",
    ],
  },
  {
    title: "Incident Readiness",
    description:
      "Prepare teams to detect, contain, and recover, tabletop exercises, playbooks, and coordination with existing SOC workflows.",
    icon: AlertTriangle,
    items: [
      "IR plan review & tabletops",
      "Detection coverage mapping",
      "Forensics readiness",
      "Post-incident improvement cycles",
    ],
  },
];

export const assessmentBlocks: ServiceDetailBlock[] = [
  {
    title: "Vulnerability & Posture Assessment",
    description:
      "Baseline your attack surface and control effectiveness before deeper testing or major architecture changes.",
    icon: Eye,
    items: [
      "External attack surface review",
      "Configuration & hardening review",
      "Control effectiveness validation",
      "Risk-prioritized findings",
    ],
  },
  {
    title: "AI & LLM Security Audits",
    description:
      "Assess models, prompts, integrations, and data flows for abuse paths, without treating AI as a black box.",
    icon: Brain,
    items: [
      "LLM security assessment",
      "Model & pipeline vulnerability review",
      "Prompt injection testing",
      "Data privacy & leakage analysis",
    ],
  },
  {
    title: "Red Teaming & Adversary Simulation",
    description:
      "Simulate realistic adversaries to test detection, response, and resilience across people, process, and technology.",
    icon: AlertTriangle,
    items: [
      "Objective-driven adversary simulation",
      "Threat intelligence integration",
      "Detection & response validation",
      "Purple-team collaboration options",
    ],
  },
  {
    title: "Threat Hunting",
    description:
      "Proactive search for latent compromise and misconfiguration, especially in high-value or regulated environments.",
    icon: Target,
    items: [
      "Hypothesis-driven hunting",
      "Behavioral anomaly review",
      "SOC workflow integration",
      "Findings with remediation guidance",
    ],
  },
];

export const penTestBlocks: ServiceDetailBlock[] = [
  {
    title: "External Penetration Testing",
    description:
      "Assessment of your internet-facing perimeter, services, applications, and mail, from an attacker outside the organization.",
    icon: Network,
    items: [
      "Network infrastructure testing",
      "External service enumeration",
      "Web application security testing",
      "Email & VPN security assessment",
    ],
  },
  {
    title: "Internal Penetration Testing",
    description:
      "Simulate an insider or post-breach attacker moving inside your network, segmentation, identity, and privilege paths.",
    icon: Shield,
    items: [
      "Network segmentation testing",
      "Active Directory assessment",
      "Internal service security",
      "Privilege escalation & lateral movement",
    ],
  },
  {
    title: "Physical & Social Engineering",
    description:
      "Test physical controls and human factors, access procedures, facility security, and targeted social engineering where scoped.",
    icon: Building,
    items: [
      "Access control testing",
      "Facility security review",
      "Social engineering assessment",
      "Physical bypass attempts (scoped)",
    ],
  },
  {
    title: "Application Security Testing",
    description:
      "Deep review of web, API, and mobile surfaces, automated and manual techniques against OWASP-class issues.",
    icon: Code,
    items: [
      "OWASP Top 10 testing",
      "API security assessment",
      "Mobile application testing",
      "Source code & architecture review",
    ],
  },
];

export const methodologySteps = [
  {
    title: "Planning & Discovery",
    description: "Scoping, rules of engagement, and reconnaissance tailored to your environment and compliance needs.",
  },
  {
    title: "Testing & Analysis",
    description: "Manual and automated techniques, with clear evidence chains and reproducible findings.",
  },
  {
    title: "Reporting & Briefing",
    description: "Executive summary plus technical detail, risk ratings, and prioritized remediation guidance.",
  },
  {
    title: "Retest & Hardening",
    description: "Optional validation of fixes and follow-on consulting to close gaps systematically.",
  },
];
