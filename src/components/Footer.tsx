"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const routes = [
    { name: "Hem", path: "/" },
    { name: "Tjänster", path: "/tjanster" },
    { name: "Om oss", path: "/om-oss" },
    { name: "Kontakter", path: "/kontakter" },
  ];

  return (
    <footer className="bg-gradient-to-b from-primary-dark to-black py-[50px]">
      <motion.div
        className="flex flex-col items-center justify-center gap-6"
        initial={{ opacity: 0, scale: 0.75 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Image
          src="/logo.svg"
          alt="Logo"
          width={125}
          height={37}
          className="m-auto"
        />

        <div className="flex border-b border-t border-secondary">
          {routes.map((route, index) => (
            <Link
              key={index}
              className="px-4 py-2.5 text-base font-extrabold text-white"
              href={route.path}
            >
              {route.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center gap-3">
          <a
            className="text-base font-normal text-white"
            href="tel:+46708937873"
          >
            +46 708 937 873
          </a>
          <a
            className="text-base font-normal text-white"
            href="mailto:sven.lundqvist@erton.se"
          >
            sven.lundqvist@erton.se
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
