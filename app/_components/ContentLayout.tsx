import type { ReactNode } from "react";
import Hero from "@/app/_sections/Hero";
import SectionNav from "@/app/_components/SectionNav";

type ContentLayoutProps = {
  children: ReactNode;
};

export default function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <main className="page-shell">
      <aside className="page-sidebar">
        <Hero />
      </aside>
      <div className="page-content">
        <SectionNav />
        {children}
      </div>
    </main>
  );
}
