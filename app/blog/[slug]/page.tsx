import { client } from "@/utils/sanityClient";
import { Metadata } from "next";
import { groqQueries } from "@/utils/groqQueries";
import PortableText from "react-portable-text";
import { RichTextComponents } from "@/components/RichTextComponents";

interface PostPageProps {
    params: {
        slug: string;
    }
}

export async function generateMetadata({ params: { slug } }: PostPageProps): Promise<Metadata> {

    const blogPost = await client.fetch(groqQueries.getPosts, { slug })
    return ({
        title: blogPost.title,
        description: "This blog is written by Maghfoor Ahmed."
    })

}

export default async function PostPage({ params: { slug } }: PostPageProps) {
    const blogPost = await client.fetch(groqQueries.getPosts, { slug });
    console.log(blogPost.body)
    return (
        <div>
            <PortableText content={blogPost.body} serializers={RichTextComponents} />
        </div>
    )
}