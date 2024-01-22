import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-center gap-4 max-w-4xl">
      <Image src={logo} alt="logo" width={50} height={50} className="logo" />
      {/* <Link href={"#experience"}>Experience</Link> */}
    </nav>
  );
}
