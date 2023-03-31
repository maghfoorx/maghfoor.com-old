import Link from 'next/link'
import "../styles/homepage.scss";
import Image from "next/image";
import logo from "../public/logo.png";

export default async function Home() {

  return (
    <main>
      <div className="home-page">
        <Image src={logo} alt="logo" className="logo" />
        <h1>Maghfoor Ahmed</h1>
        <Link href={"/blog"}>blog</Link>
      </div>
    </main>
  )
}
