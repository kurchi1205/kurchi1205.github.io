import type { ReactNode } from "react";
import Hero from "@/app/_sections/Hero";

type ContentLayoutProps = {
  children: ReactNode;
};

export default function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <main className="page-shell">
      <aside className="page-sidebar">
        <Hero variant="sidebar" />
      </aside>
      <div className="page-content">
        {children}
      </div>
    </main>
  );
}
