import { Card } from "@/components/ui/card";
import { getPostsMeta } from "@/actions/get-posts-meta";

export const runtime = "edge";

export default async function BlogPage() {
  const results = await getPostsMeta();

  return (
    <main className="mt-4 min-w-0 text-left">
      <section className="flex flex-col gap-3 p-4 mx-auto max-w-4xl">
        {results.map((post) => {
          return (
            <Card key={post.attributes.slug} className="p-4">
              <p className="text-xl font-semibold">{post.attributes.title}</p>
              <p>{post.attributes.description}</p>
            </Card>
          );
        })}
      </section>
    </main>
  );
}
