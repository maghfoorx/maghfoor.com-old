import { client } from "@/utils/sanityClient";
import { Metadata } from "next";
import { groq } from "next-sanity";

interface PostPageProps {
    params: {
        slug: string;
    }
}

const query = groq`
    *[_type=="post" && slug.current == $slug][0]{...}
    `;

export async function generateMetadata({ params: { slug } }: PostPageProps): Promise<Metadata> {

    const blogPost = await client.fetch(query, { slug })
    return ({
        title: blogPost.title,
        description: "This blog is written by Maghfoor Ahmed."
    })

}

export default async function PostPage({ params: { slug } }: PostPageProps) {
    const blogPost = await client.fetch(query, { slug });
    return (
        <div>
            {blogPost.title}
        </div>
    )
}