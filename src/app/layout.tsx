import "../styles/globals.css";
import { Fira_Code, Inter } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ✅ Import and configure the font
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // avoids layout shift
  variable: "--font-inter", // optional: allows CSS variable usage
  weight: ["400", "500", "600", "700"], // include multiple weights
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
});

export const metadata: Metadata = {
  title: "Md. Serajul Islam | Full-Stack Engineer",
  description:
    "Portfolio of Md. Serajul Islam – Full-Stack Software Engineer specializing in SaaS systems and scalable web architecture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className={`${inter.className} ${firaCode.className}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
