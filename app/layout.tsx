import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prerana Chakraborty | Portfolio",
  description:
    "AI/ML engineer portfolio built with Next.js, TypeScript, and a pastel design system.",
  openGraph: {
    title: "Prerana Chakraborty | Portfolio",
    description:
      "AI/ML engineer portfolio built with Next.js, TypeScript, and a pastel design system.",
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
      <body>{children}</body>
    </html>
  );
}
