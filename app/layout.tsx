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
    "Software Engineer with extensive experience in building full stack applications. Checkout all the projects and things I am working on.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.className} antialiased border-box flex flex-col min-h-[100vh]`}
      >
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
