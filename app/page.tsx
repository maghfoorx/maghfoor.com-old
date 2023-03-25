import { createClient, groq } from 'next-sanity'

const projectId = process.env.SANITY_PROJECT_ID

const client = createClient({
  projectId,
  dataset: 'production',
  apiVersion: "2023-03-25",
  useCdn: true
})

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
