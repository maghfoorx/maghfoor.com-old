import Projects from "@/src/projects";
import HeroSection from "../src/hero-section";

export const runtime = "edge";

export default async function Home() {
  return (
    <main className="text-left mt-4 min-w-0">
      <HeroSection />
      <Projects />
    </main>
  );
}
