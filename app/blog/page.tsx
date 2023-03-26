import { createClient, groq } from "next-sanity";
import Link from "next/link";

const projectId = process.env.SANITY_PROJECT_ID

const client = createClient({
    projectId,
    dataset: 'production',
    apiVersion: "2023-03-25",
    useCdn: false
})

export default async function Blog() {
    const blogs = await client.fetch(groq`*[_type == "post"]`);

    return (
        <div>
            The Blog Page
            <p>The title of my blog is: {blogs[0].title}</p>
            {blogs?.map((post: any) => {
                return <BlogPost key={post._id} blogPost={post} />
            })}
        </div>
    )
}

function BlogPost({ blogPost }: any): JSX.Element {
    console.log(blogPost.slug.current)
    return (
        <div>
            <Link href={`/blog/${blogPost.slug.current}`}>Click to go to post</Link>
        </div>
    )
}