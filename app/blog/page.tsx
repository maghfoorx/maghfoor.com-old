import TestPage from "./page.mdx";
import { getPostsMeta } from "@/actions/get-posts-meta";

export const runtime = "edge";

export default async function BlogPage() {
  await getPostsMeta();

  return (
    <main className="mt-4 min-w-0 text-left">
      <article className="p-4 mx-auto max-w-3xl text-black prose prose-quoteless prose-stone prose-headings:text-primary">
        <TestPage />
      </article>
    </main>
  );
}
