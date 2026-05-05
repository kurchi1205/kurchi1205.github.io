export type SocialLink = {
  label: string;
  href: string;
};

export type SiteMetadata = {
  title: string;
  description: string;
  ogTitle: string;
};

export type HeroContent = {
  name: string;
  role: string;
  location: string;
  intro: string;
  focusAreas: string[];
  photo?: string;
};

export type AboutContent = {
  title: string;
  paragraphs: string[];
  highlights: Array<{
    title: string;
    body: string;
  }>;
};

export type WritingContent = {
  title: string;
  description: string;
  items: Array<{
    id: string;
    title: string;
    summary: string;
    href: string;
    publishedOn: string;
  }>;
};

export type ContactContent = {
  title: string;
  description: string;
  email: string;
  location: string;
  socialLinks: SocialLink[];
};

export const siteMetadata: SiteMetadata = {
  title: "Prerana Chakraborty | Portfolio",
  description:
    "AI/ML engineer portfolio built with Next.js, TypeScript, and a pastel design system.",
  ogTitle: "Prerana Chakraborty Portfolio",
};

export const heroContent: HeroContent = {
  name: "Prerana Chakraborty",
  role: "AI/ML Engineer",
  location: "Singapore",
  intro:
    "Hey! I’m an AI/ML engineer who likes building scalable stuff, tinkering with generative models, and turning big ideas into real projects. Outside of tech, I’m usually singing.",
  focusAreas: [
    "Generative AI systems",
    "Production ML infrastructure",
    "Research engineering",
  ],
  photo: "/profile_pic.png",
};

export const aboutContent: AboutContent = {
  title: "About",
  paragraphs: [
    "I am currently pursuing a Master of Computing in Artificial Intelligence at the National University of Singapore.",
    "My work sits at the intersection of applied machine learning, generative models, and production systems. I care about model quality, system efficiency, and making research ideas usable in products.",
  ],
  highlights: [
    {
      title: "What I Build",
      body:
        "I work on end-to-end ML products, from model experimentation to deployment and performance tuning.",
    },
    {
      title: "How I Work",
      body:
        "I prefer practical systems thinking: clear interfaces, measurable tradeoffs, and code that can survive real production constraints.",
    },
    {
      title: "What I Care About",
      body:
        "Generative models, efficient inference, and research ideas that become reliable tools rather than demos.",
    },
  ],
};

export const writingContent: WritingContent = {
  title: "Writing",
  description: "Selected papers and technical writing pulled from the legacy portfolio content.",
  items: [
    {
      id: "neuro-symbolic-sudoku-solver",
      title: "Neuro-Symbolic Sudoku Solver",
      summary: "Paper published in KDD KiML 2023.",
      href: "https://arxiv.org/abs/2307.00653",
      publishedOn: "2023-07-02",
    },
    {
      id: "mdp-diffusion",
      title: "MDP-Diffusion",
      summary: "Blog published in Paperspace.",
      href: "https://blog.paperspace.com/mdp-diffusion/",
      publishedOn: "2023-09-19",
    },
    {
      id: "consistency-models",
      title: "Consistency Models",
      summary: "Blog published in Paperspace.",
      href: "https://blog.paperspace.com/consistency-models/",
      publishedOn: "2023-10-12",
    },
  ],
};

export const contactContent: ContactContent = {
  title: "Contact",
  description:
    "Message me if you want to talk about ML systems, generative AI, research engineering, or collaboration.",
  email: "prerana1298@gmail.com",
  location: "Singapore",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/kurchi1205",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/prerana-c-44b9931a3/",
    },
    {
      label: "Email",
      href: "mailto:prerana1298@gmail.com",
    },
  ],
};
