import Image from "next/image"
import Link from "next/link"
import styles from "../styles/navBar.module.scss"
type NavBarProps = {
    href?: string
}
export default function NavBar({ href }: NavBarProps) {
    return (
        <div>
            <div className={styles['nav-bar']}>
                {href && <Link href={href}>back</Link>}
                <Link href={"/blog"}><p className={styles['nav-title']}>Maghfoor&apos;s Blog</p></Link>
                <Link href={"/"}><Image src={"/logo.png"} alt="logo" width={70} height={70} className={styles['nav-logo']} /></Link>
            </div>
        </div>
    )
}