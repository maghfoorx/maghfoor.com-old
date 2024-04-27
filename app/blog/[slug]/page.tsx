import { getPostByName } from "@/actions/get-posts-meta";
import { strToHtml } from "@/actions/str-to-html";
import { notFound } from "next/navigation";

export const runtime = "edge";

export default async function PostPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await getPostByName(`${slug}.mdx`);

  if (!post) notFound();

  const convertingToHtml = await strToHtml(post.body);

  return (
    <article
      className="prose prose-quoteless prose-stone mx-auto prose-headings:text-primary text-black px-4"
      dangerouslySetInnerHTML={{
        __html: convertingToHtml,
      }}
    ></article>
  );
}
