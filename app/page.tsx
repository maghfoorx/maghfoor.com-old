import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src={logo} alt="logo" />
      <h1>Maghfoor Ahmed</h1>
      <p>maghfoor.dev@gmail.com</p>
    </main>
  );
}
