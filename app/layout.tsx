import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const montserrat = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maghfoor",
  description:
    "Software Engineer with extensive experience in building full stack applications. Checkout all the projects and things I am working on.",
  metadataBase: new URL("https://maghfoor.com"),
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
        {children}
      </body>
    </html>
  );
}
