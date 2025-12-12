import "../styles/globals.css";
import { Inter, Fira_Code } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ✅ Import and configure the fonts
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // avoids layout shift
  variable: "--font-inter", // allows CSS variable usage
  weight: ["400", "500", "600", "700"], // multiple weights
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
});

// ✅ Metadata (Next.js automatically uses this)
export const metadata = {
  title: "Md. Serajul Islam | Full-Stack Engineer",
  description:
    "Portfolio of Md. Serajul Islam – Full-Stack Software Engineer specializing in SaaS systems and scalable web architecture.",
};

// ✅ Root layout
export default function RootLayout({ children }) {
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
