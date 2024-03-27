"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const routes = [
    { name: "Hem", path: "/" },
    { name: "Tjänster", path: "/tjanster" },
    { name: "Om oss", path: "/om-oss" },
    { name: "Kontakter", path: "/kontakter" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.header
      className={`sticky top-0 z-50 h-screen overflow-x-hidden bg-primary shadow-xl transition-all duration-300 md:h-[60px] ${isOpen ? "max-h-screen" : "max-h-[60px]"}`}
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="content-wrapper flex w-full flex-wrap gap-24 md:gap-0">
        <div className="flex h-[60px] w-full items-center md:w-auto">
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
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-auto md:hidden"
          >
            <span className={!isOpen ? "visible" : "hidden"}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 10V14H44V10H4ZM4 22V26H44V22H4ZM4 34V38H44V34H4Z"
                  fill="#FFB100"
                />
              </svg>
            </span>
            <span className={isOpen ? "visible" : "hidden"}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5858 10.5858C11.3668 9.80474 12.6332 9.80474 13.4142 10.5858L24 21.1716L34.5858 10.5858C35.3668 9.80474 36.6332 9.80474 37.4142 10.5858C38.1953 11.3668 38.1953 12.6332 37.4142 13.4142L26.8284 24L37.4142 34.5858C38.1953 35.3668 38.1953 36.6332 37.4142 37.4142C36.6332 38.1953 35.3668 38.1953 34.5858 37.4142L24 26.8284L13.4142 37.4142C12.6332 38.1953 11.3668 38.1953 10.5858 37.4142C9.80474 36.6332 9.80474 35.3668 10.5858 34.5858L21.1716 24L10.5858 13.4142C9.80474 12.6332 9.80474 11.3668 10.5858 10.5858Z"
                  fill="#FFB100"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="flex w-full flex-col items-center gap-8 md:ml-auto md:w-auto md:flex-row md:gap-0">
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
