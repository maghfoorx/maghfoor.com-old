import NavBar from "@/components/NavBar";
import { createClient, groq } from "next-sanity";
import Link from "next/link";
import { urlFor } from "@/components/RichTextComponents";
import Image from "next/image";
import Footer from "@/components/Footer";
import styles from '../../styles/blogpage.module.scss'
import { client } from "@/utils/sanityClient";

export default async function Blog() {
    const blogs = await client.fetch(groq`*[_type == "post"]`);

    return (
        <div>
            <NavBar />
            <section className={styles['blogs-section']}>
                {blogs?.map((post: any) => {
                    return <BlogPost key={post._id} blogPost={post} />
                })}
            </section>
            <Footer />
        </div>
    )
}

function BlogPost({ blogPost }: any): JSX.Element {
    return (
        <div className={styles['blog-post-summary']}>
            {blogPost.mainImage && <div className={styles['image-wrapper']}>
                <Image src={urlFor(blogPost.mainImage.asset).url()} alt={blogPost.title} fill className={styles['main-image']} />
            </div>}
            <Link href={`/blog/${blogPost.slug.current}`}>
                <h3>{blogPost.title}</h3>
            </Link>
            <p>{new Date(blogPost.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>
    )
}