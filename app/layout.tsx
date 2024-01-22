import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

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
    <html lang="en" className="bg-slate-300 scroll-smooth">
      <body
        className={`${montserrat.className} antialiased flex flex-col items-center justify-center mx-4 mt-8 lg:mx-auto`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
