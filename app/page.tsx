import HeroSection from "@/src/hero-section";
import IaglSection from "@/src/iagl-section";

export default async function Home() {
  return (
    <main className="text-center mt-4 min-w-0">
      <HeroSection />
      {/* <IaglSection /> */}
    </main>
  );
}
