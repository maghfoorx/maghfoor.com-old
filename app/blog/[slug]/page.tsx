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

    const blogPost = await client.fetch(groqQueries.getPost, { slug })
    return ({
        title: blogPost.title,
        description: "This blog is written by Maghfoor Ahmed."
    })

}

export default async function PostPage({ params: { slug } }: PostPageProps) {
    const blogPost = await client.fetch(groqQueries.getPost, { slug });
    console.log(blogPost)
    return (
        <div>
            <section>
                <p>Published: {new Date(blogPost.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                <p>Author: Maghfoor Ahmed</p>
            </section>
            <article>
                <PortableText content={blogPost.body} serializers={RichTextComponents} />
            </article>
        </div>
    )
}