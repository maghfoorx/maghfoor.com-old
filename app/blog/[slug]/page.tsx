import { client } from "@/utils/sanityClient";
import { Metadata } from "next";
import { groqQueries } from "@/utils/groqQueries";
import PortableText from "react-portable-text";
import { RichTextComponents } from "@/components/RichTextComponents";
import Link from "next/link";
import Image from "next/image"
import "../../../styles/post.scss"

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
    return (
        <div>
            <div className="post-nav-bar">
                <Link href={"/blog"}>back</Link>
                <p className="nav-title">Maghfoor&apos;s Blog</p>
                <Image src={"/logo.png"} alt="logo" width={70} height={70} className="nav-logo" />
            </div>
            <section className="post-section">
                <p>Published: {new Date(blogPost.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                <article>
                    <PortableText content={blogPost.body} serializers={RichTextComponents} />
                </article>
            </section>
        </div>
    )
}