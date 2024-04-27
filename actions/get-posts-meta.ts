"use server";

import fm, { FrontMatterResult } from "front-matter";

type Meta = {
  id: string;
  title: string;
  date: string;
  tags: string[];
};

type BlogPost = {
  markdown: string;
};

export async function getPostByName(
  fileName: string
): Promise<FrontMatterResult<unknown> | null> {
  const result = await fetch(
    `https://raw.githubusercontent.com/maghfoor-dev/blog-posts/main/${fileName}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACESS_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!result.ok) return null;

  const rawMDX = await result.text();

  if (rawMDX === "404: Not Found") return null;

  const structuredPost = fm(rawMDX);

  return structuredPost;
}

export async function getPostsMeta() {
  const result = await fetch(
    "https://api.github.com/repos/maghfoor-dev/blog-posts/git/trees/main?recursive=1",
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACESS_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!result.ok) return [];

  const repoFiletree = await result.json();
  const filesArray = repoFiletree.tree
    .map((object: { path: string }) => object.path)
    .filter((path: string) => path.endsWith(".mdx"));

  const posts = [];

  for (const file of filesArray) {
    const post = await getPostByName(file);

    if (post) {
      posts.push(post);
    }
  }

  return posts;
}
