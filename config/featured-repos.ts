export type FeaturedRepo = {
  name: string;
  summary: string;
  href: string;
  status: "planned" | "ready";
};

export type FeaturedReposContent = {
  title: string;
  description: string;
  repos: FeaturedRepo[];
};

export const featuredReposContent: FeaturedReposContent = {
  title: "Projects",
  description:
    "Curated repositories will be wired in Phase 4. Phase 2 defines the typed contract and placeholder data shape.",
  repos: [
    {
      name: "Portfolio Migration",
      summary: "Next.js refactor scaffold and migration work for this site.",
      href: "https://github.com/kurchi1205/kurchi1205.github.io",
      status: "planned",
    },
  ],
};
