import { getPostMetaData } from "@/utils/postsFunctions"



export default function BlogPage() {
    const result = getPostMetaData();
    console.log(result);
    return (
        <>
        <h1>This is Blogs page</h1>
        {result.map((post) => {
            return (
                <div key={post.slug}>
                    <h3>{post.title}</h3>
                    <p>{post.date}</p>
                </div>
            )
        })}
        </>
    )
}
