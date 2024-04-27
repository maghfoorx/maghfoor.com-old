import { FrontMatter } from "@/types";
import { FrontMatterResult } from "front-matter";
import Link from "next/link";
import { Card } from "./ui/card";

type BlogsSectionProperties = {
  posts: FrontMatterResult<FrontMatter>[];
};

export default function BlogsSection({ posts }: BlogsSectionProperties) {
  return (
    <section className="p-4 mx-auto max-w-4xl">
      <h2 className="pb-2 text-2xl font-semibold md:text-3xl">Blogs</h2>
      <div className="flex flex-col gap-4 items-stretch">
        {posts.map((post) => {
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
      </div>
    </section>
  );
}
