import { getPostByName } from "@/actions/get-posts-meta";
import { notFound } from "next/navigation";

export const runtime = "edge";

export default async function PostPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await getPostByName(`${slug}.mdx`);

  if (!post) notFound();

  console.log(post?.body, "is the post");
  return <h1>hello</h1>;
}
