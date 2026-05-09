export type EducationEntry = {
  school: string;
  degree: string;
  logo: string;
  altName: string;
  duration: string;
  website: string;
  highlights: string[];
};

export type EducationContent = {
  title: string;
  subtitle: string;
  items: EducationEntry[];
};

export const educationContent: EducationContent = {
  title: "Education",
  subtitle: "Degrees and academic foundations",
  items: [
    {
      school: "National University of Singapore",
      degree: "Master of Computing, Artificial Intelligence Specialization",
      logo: "/education/nus-logo.png",
      altName: "NUS",
      duration: "2024 - 2025",
      website: "https://www.comp.nus.edu.sg/",
      highlights: [
        "Graduated with CGPA 4.17.",
        "Relevant coursework across deep learning, advanced ML systems, reinforcement learning, uncertainty modeling, AI ethics, and data mining.",
        "Project work on efficient serving for DiT-based diffusion models.",
        "Part of Scalable AI Lab and Metaverse Foundry Lab.",
      ],
    },
    {
      school: "Institute of Engineering and Management",
      degree: "B.Tech. in Computer Science Engineering",
      logo: "/education/iem-logo.png",
      altName: "IEM",
      duration: "2016 - 2020",
      website: "https://iem.edu.in/",
      highlights: [
        "Graduated with CGPA 9.01.",
        "Member of the Green Revolution plant-a-seed drive.",
        "Organizing member of Tech Fest Innovacion.",
      ],
    },
  ],
};
