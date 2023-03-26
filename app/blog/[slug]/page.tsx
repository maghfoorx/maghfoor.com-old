import { createClient, groq } from "next-sanity";

interface PostPageProps {
    params: {
        slug: string;
    }
}

const projectId = process.env.SANITY_PROJECT_ID

const client = createClient({
    projectId,
    dataset: 'production',
    apiVersion: "2023-03-25",
    useCdn: false
})

export default async function PostPage({ params: { slug } }: PostPageProps) {
    console.log(slug)

    const query = groq`
    *[_type=="post" && slug.current == $slug][0]{...}
    `
    const blogPost = await client.fetch(query, { slug });

    console.log("the blog post is", blogPost)
    return (
        <div>
            {blogPost.title}
        </div>
    )
}