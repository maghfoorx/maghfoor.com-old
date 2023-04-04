import { client } from "@/utils/sanityClient";
import { Metadata } from "next";
import { groqQueries } from "@/utils/groqQueries";
import PortableText from "react-portable-text";
import { RichTextComponents, urlFor } from "@/components/RichTextComponents";
import Image from "next/image"
import "../../../styles/post.scss"
import NavBar from "@/components/NavBar";

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
            <NavBar href="/blog" />
            <section className="post-section">
                {blogPost.mainImage &&
                    <div className="main-image-div">
                        <Image src={urlFor(blogPost.mainImage.asset).url()} alt="Main Image" fill className="main-image" />
                    </div>}
                <p>Published: {new Date(blogPost.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                <article>
                    <PortableText content={blogPost.body} serializers={RichTextComponents} />
                </article>
            </section>
        </div>
    )
}