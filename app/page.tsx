import { createClient, groq } from 'next-sanity'

const projectId = process.env.SANITY_PROJECT_ID

const client = createClient({
  projectId,
  dataset: 'production',
  apiVersion: "2023-03-25",
  useCdn: false
})

export default async function Home() {

  const postData = await client.fetch(groq`*[_type == "post"]`);

  console.log(postData[0].title)

  return (
    <main>
      <div>
        Hello
        <p>The title of my blog is: {postData[0].title}</p>
      </div>
    </main>
  )
}
