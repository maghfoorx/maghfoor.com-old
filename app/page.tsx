import Projects from "@/src/projects";
import HeroSection from "../src/hero-section";
import BlogsSection from "@/components/blogs-section";
import { getPostsMeta } from "@/actions/get-posts-meta";

export const runtime = "edge";

export default async function Home() {
  const posts = await getPostsMeta();
  return (
    <main className="mt-4 min-w-0 text-left">
      <HeroSection />
      <Projects />
      <BlogsSection posts={posts} />
    </main>
  );
}
