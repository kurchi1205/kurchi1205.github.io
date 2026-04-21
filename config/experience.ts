export type ExperienceEntry = {
  role: string;
  company: string;
  companyHref: string;
  duration: string;
  location: string;
  description: string;
};

export type ExperienceSection = {
  title: string;
  items: ExperienceEntry[];
};

export type ExperienceContent = {
  title: string;
  subtitle: string;
  description: string;
  sections: ExperienceSection[];
};

export const experienceContent: ExperienceContent = {
  title: "Experience",
  subtitle: "Work, internship, and research roles",
  description:
    "A condensed view of the roles most relevant to the Phase 2 migration. The legacy portfolio includes more historical entries that can be migrated later.",
  sections: [
    {
      title: "Recent Roles",
      items: [
        {
          role: "Research Assistant",
          company: "National University of Singapore",
          companyHref: "https://www.nus.edu.sg/",
          duration: "Mar 2025 - Nov 2025",
          location: "Singapore",
          description:
            "Developed adaptive sampling to reduce 3D Gaussian Splatting artifacts and built a GPU-feature-driven model to predict mobile rendering power consumption.",
        },
        {
          role: "AI Intern",
          company: "Pensees Systems Pvt. Ltd.",
          companyHref: "https://www.pensees.sg/",
          duration: "Oct 2024 - Jan 2025",
          location: "Singapore",
          description:
            "Benchmarked SDXL serving frameworks under load and built a 6-bit CoreML-quantized SDXL iOS prototype for on-device deployment.",
        },
        {
          role: "Machine Learning Engineer",
          company: "Sivi.AI",
          companyHref:
            "https://sivi.ai/?srsltid=AfmBOoqcT-x-bkF70Do07T3-bfgqgWS1yICz-56FEZdiIaZZ_a1jTKPL",
          duration: "Dec 2021 - Jun 2024",
          location: "India",
          description:
            "Built CV, NLP, and multimodal AI systems including fine-tuned LLMs, diffusion pipelines, Kubernetes-based ML infra, and large-scale data processing workflows.",
        },
        {
          role: "AI Intern",
          company: "Sigmared Technologies",
          companyHref: "https://sigmared.ai/",
          duration: "Oct 2021 - Dec 2021",
          location: "India",
          description:
            "Implemented model interpretability and bias analysis using attribution and perturbation methods, Captum, and TCAV.",
        },
      ],
    },
  ],
};
