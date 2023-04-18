import Link from 'next/link'
import Image from "next/image";
import logo from "../../../public/logo.png";
import styles from './homepage.module.scss'


export default async function Home() {

  return (
    <main>
      <div className={styles["home-page"]}>
        <Image src={logo} alt="logo" className={styles["logo"]} />
        <h1>Maghfoor Ahmed</h1>
        <div className={styles['links']}>
        <Link href={"/blog"} className={`${styles['links__item']} ${styles['links__item-blog']}`}>Blog</Link>
        <a href='https://github.com/maghfoor-dev' className={`${styles['links__item']} ${styles['links__item-github']}`}>GitHub</a>
        </div>
        <p>maghfoor.dev@gmail.com</p>
      </div>
    </main>
  )
}