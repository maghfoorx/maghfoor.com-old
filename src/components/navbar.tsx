"use client";

import Image from "next/image";
import logo from "../../public/logo.png";
import hoveredLogo from "../../public/logo-hovered.png";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="flex flex-row justify-between p-4 mx-auto max-w-4xl">
      <nav className="flex flex-row gap-4 justify-center items-center">
        <Link href={"/"} className="group flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 180, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 50,
            }}
            className=""
          >
            <Image
              src={logo}
              alt="logo"
              width={50}
              height={50}
              className="logo"
            />
          </motion.div>
          <motion.div
            animate={{ rotate: 180, scale: 1 }}
            className="absolute invisible group-hover:visible"
          >
            <Image
              src={hoveredLogo}
              alt="logo"
              width={50}
              height={50}
              className="logo"
            />
          </motion.div>
        </Link>
        <Link
          href={"https://github.com/maghfoor-dev"}
          target="_blank"
          className="hover:underline"
        >
          GitHub
        </Link>
        <Link
          href={"https://www.linkedin.com/in/maghfoor/"}
          target="_blank"
          className="hover:underline"
        >
          LinkedIn
        </Link>
        <Link href={"/blog"} className="hover:underline">
          Blog
        </Link>
        <Link
          href={"mailto:maghfoor.dev@gmail.com"}
          target="_blank"
          className="hover:underline"
        >
          Email Me
        </Link>
      </nav>
      <div></div>
    </header>
  );
}
