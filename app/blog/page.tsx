import NavBar from "@/components/NavBar";
import { createClient, groq } from "next-sanity";
import Link from "next/link";
import "../../styles/navBar.scss"
import { urlFor } from "@/components/RichTextComponents";
import Image from "next/image";
import "../../styles/blogpage.scss"

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
            <NavBar />
            <section className="blogs-section">
                {blogs?.map((post: any) => {
                    return <BlogPost key={post._id} blogPost={post} />
                })}
            </section>
        </div>
    )
}

function BlogPost({ blogPost }: any): JSX.Element {
    console.log(blogPost)
    return (
        <div className="blog-post-summary">
            <div className="image-wrapper">
                <Image src={urlFor(blogPost.mainImage.asset).url()} alt={blogPost.title} fill className="main-image" />
            </div>
            <Link href={`/blog/${blogPost.slug.current}`}>
                <h3>{blogPost.title}</h3>
            </Link>
            <p>{new Date(blogPost.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>
    )
}