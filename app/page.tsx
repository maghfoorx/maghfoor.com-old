import variables from "../styles/variables.module.scss";
import Link from 'next/link'

export default async function Home() {

  return (
    <main>
      <div>
        Home Page
        <br></br>
        <Link href={"/blog"}>Check out my blog</Link>
        <p className={variables.title}>testing Sass</p>
      </div>
    </main>
  )
}
