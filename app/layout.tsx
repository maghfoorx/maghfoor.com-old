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
    <html lang="en" className="bg-red-500">
      <body
        className={`${montserrat.className} antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto`}
      >
        <main className="min-w-0 px-2 md:px-0">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
