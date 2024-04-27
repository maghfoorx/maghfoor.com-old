import { Card, CardHeader } from "@/components/ui/card";
import TestPage from "./page.mdx";
import { getPostsMeta } from "@/actions/get-posts-meta";

export const runtime = "edge";

export default async function BlogPage() {
  const results = await getPostsMeta();
  console.log(results[0]);

  return (
    <main className="mt-4 min-w-0 text-left">
      {/*       <article className="p-4 mx-auto max-w-3xl text-black prose prose-quoteless prose-stone prose-headings:text-primary">
        <TestPage />
      </article> */}
      {results.map((post) => {
        return (
          <Card key={post.attributes?.title}>
            <CardHeader>{post.attributes?.title}</CardHeader>
          </Card>
        );
      })}
    </main>
  );
}
