import Image from "next/image"
import Link from "next/link"
import "../styles/navBar.scss"
type NavBarProps = {
    href?: string
}
export default function NavBar({ href }: NavBarProps) {
    return (
        <div>
            <div className="nav-bar">
                {href && <Link href={href}>back</Link>}
                <Link href={"/blog"}><p className="nav-title">Maghfoor&apos;s Blog</p></Link>
                <Link href={"/"}><Image src={"/logo.png"} alt="logo" width={70} height={70} className="nav-logo" /></Link>
            </div>
        </div>
    )
}