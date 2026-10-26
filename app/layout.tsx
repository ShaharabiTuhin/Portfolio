import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: "Gazi Shaharabi Anwar Tuhin | Computer Engineer & AI Researcher",
  description: "Portfolio of Gazi Shaharabi Anwar Tuhin: AI/ML research, IEEE QPAIN 2026 papers, full-stack and UI/UX work.",
  openGraph: { title: "Gazi Shaharabi Anwar Tuhin", description: "Computer Engineer | AI & ML Researcher | UI/UX Designer", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>
        <div className="mesh" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
