import Link from 'next/link'
import Image from "next/image";
import logo from "../public/logo.png";
import styles from '../styles/homepage.module.scss'


export default async function Home() {

  return (
    <main>
      <div className={styles["home-page"]}>
        <Image src={logo} alt="logo" className={styles["logo"]} />
        <h1>Maghfoor Ahmed</h1>
        <Link href={"/blog"}>blog</Link>
      </div>
    </main>
  )
}
