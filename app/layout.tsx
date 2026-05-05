import type { Metadata } from "next";
import { siteMetadata } from "@/config/site";
import SectionNav from "./_components/SectionNav";
import "./globals.css";

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.ogTitle,
    description: siteMetadata.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <header className="site-header">
          <SectionNav />
        </header>
        {children}
      </body>
    </html>
  );
}
