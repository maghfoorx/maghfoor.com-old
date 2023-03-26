import { createClient, groq } from 'next-sanity'
import Link from 'next/link'

export default async function Home() {

  return (
    <main>
      <div>
        Home Page
        <br></br>
        <Link href={"/blog"}>Check out my blog</Link>
      </div>
    </main>
  )
}
