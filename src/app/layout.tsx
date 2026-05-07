import type { Metadata } from "next";
import "./globals.css";
import { UIProvider } from "@/lib/UIContext";

export const metadata: Metadata = {
  title: "Sushant — CEO, Developer & SEO Expert",
  description:
    "Personal portfolio of the Sushant Gautam,Founder & CEO of Nexolinx. Full-Stack Developer and SEO Expert building digital products that scale and rank.",
  keywords: ["Nexolinx", "CEO", "Full-Stack Developer", "SEO Expert", "Next.js", "React"],
  openGraph: {
    title: "Sushant — CEO, Developer & SEO Expert",
    description: "Building digital products that scale and rank.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body><UIProvider>{children}</UIProvider></body>
    </html>
  );
}
