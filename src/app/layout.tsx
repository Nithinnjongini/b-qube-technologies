import type { Metadata } from "next";
import { Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BQube Technologies | AI-First Software Development & Consulting",
  description: "Specializing in AI automation, multi-agent orchestration, and end-to-end IT consulting. Building the future of business beyond boundaries.",
  keywords: ["AI Consulting", "Software Development", "Workflow Automation", "Multi-Agent Orchestration", "Digital Branding"],
  icons: {
    icon: '/favicon.svg',
    apple: '/logo.svg',
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${playfairDisplay.variable}`} suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
