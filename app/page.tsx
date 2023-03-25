import { Inter } from 'next/font/google'
import { createClient, groq } from 'next-sanity'

const client = createClient({
  projectId: '2nn9ph58',
  dataset: 'production',
  apiVersion: "2023-03-25",
  useCdn: true
})

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

  const postData = await client.fetch(groq`*[_type == "post"]`);

  console.log(postData)

  return (
    <main>
      <div>
        Hello
      </div>
    </main>
  )
}
