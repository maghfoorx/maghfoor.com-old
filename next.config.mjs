import createMDX from "@next/mdx";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkRehype],
    rehypePlugins: [rehypeSlug],
  },
});

export default withMDX(nextConfig);
