"use client";

import Image from "next/image";
import Link from "next/link";
import NeuButton from "./ui/NeuButton";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
  const menu = [
    {
      name: "collections",
      link: "/collections",
    },
    {
      name: "faq",
      link: "/faq",
    },
  ];

  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between">
      <nav className="flex items-center gap-6">
        <Link href="/">
          <h1 className="font-bold text-lg">Codexign</h1>
        </Link>

        <ul className="hidden sm:flex items-center gap-6 font-medium">
          {menu.map((item, index) => (
            <motion.li
              className={`${
                pathname === item.link
                  ? "text-indigo-500 active"
                  : "text-[var(--text)]"
              } `}
              key={index}
            >
              <Link className="menu-item" href={item.link}>
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
      <NeuButton>Support Us</NeuButton>
    </header>
  );
}
