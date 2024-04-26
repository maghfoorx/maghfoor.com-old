import type { Metadata } from "next";
import { Montserrat, Work_Sans, Ubuntu, Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/navbar";
import Script from "next/script";
import Footer from "@/components/footer";

const montserrat = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maghfoor",
  description:
    "Personal website and portfolio of Maghfoor Ahmed. A full stack Software Engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.className} antialiased border-box`}>
        <Navbar />
        {children}
        <Footer />
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "07dbc8f0925840219b52a3152f351e2d"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
