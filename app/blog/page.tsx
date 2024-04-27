import { Card } from "@/components/ui/card";
import { getPostsMeta } from "@/actions/get-posts-meta";
import Link from "next/link";

export const runtime = "edge";

export default async function BlogPage() {
  const results = await getPostsMeta();

  return (
    <main className="mt-4 min-w-0 text-left">
      <section className="flex flex-col gap-3 p-4 mx-auto max-w-4xl">
        {results.map((post) => {
          return (
            <Link
              key={post.attributes.slug}
              href={`/blog/${post.attributes.slug}`}
              className="rounded-md border-2 border-transparent border-solid hover:border-black group"
            >
              <Card className="p-4">
                <p className="text-xl font-semibold group-hover:underline">
                  {post.attributes.title}
                </p>
                <p>{post.attributes.description}</p>
              </Card>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
