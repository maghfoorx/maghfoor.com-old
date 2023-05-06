import fs from "fs";
import matter from "gray-matter";

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
        }
    })
    return posts;
}