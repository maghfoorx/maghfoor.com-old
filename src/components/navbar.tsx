"use client";

import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <header className="flex flex-row justify-between p-4 max-w-4xl mx-auto">
      <nav className="flex flex-row items-center justify-center gap-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 180, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 50,
          }}
        >
          <Image
            src={logo}
            alt="logo"
            width={50}
            height={50}
            className="logo"
          />
        </motion.div>
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
      </nav>
      <div></div>
    </header>
  );
}
