import fs from "fs";
import matter from "gray-matter";
import { serialize } from "v8";

export function getPostMetaData() {
    const folder = "posts/"
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".mdx"));
    console.log(markdownPosts)

    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`posts/${fileName}`, "utf-8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            slug: fileName.replace(".mdx", ""),
            content: matterResult.content
        }
    })
    return posts;
}