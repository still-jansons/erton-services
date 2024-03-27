"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const routes = [
    { name: "Hem", path: "/" },
    { name: "Tjänster", path: "/tjanster" },
    { name: "Om oss", path: "/om-oss" },
    { name: "Kontakter", path: "/kontakter" },
  ];

  return (
    <motion.header
      className="sticky top-0 z-50 h-[60px] bg-primary shadow-xl"
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="content-wrapper flex h-full items-center">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Erton"
            className="h-12"
            width={125}
            height={37}
            style={{ width: "auto", maxHeight: "36px" }}
          />
        </Link>
        <div className="ml-auto flex items-center">
          {routes.map((route, index) => (
            <Link
              key={index}
              href={route.path}
              className={`nav-link ${pathname === route.path ? "active" : ""}`}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
