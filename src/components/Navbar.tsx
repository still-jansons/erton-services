'use client'

import Image from 'next/image'
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Navbar() {
  const pathname = usePathname()
  const routes = [
    {name: "Hem", path: "/"},
    {name: "Tjänster", path: "/tjanster"},
    {name: "Om oss", path: "/om-oss"},
    {name: "Kontakter", path: "/kontakter"}
  ]
  
  return (
    <header className="bg-primary h-[60px]">
      <nav className="h-full flex items-center content-wrapper">
        <a>
          <Image
            src="/logo.svg"
            alt="Erton"
            className="h-12"
            width={125}
            height={37}
          />
        </a>
        <div className="ml-auto flex items-center">
          {routes.map((route, index) => (
            <Link
              key={index}
              href={route.path}
              className={`nav-link ${pathname === route.path ? "active" : ""}`}
            >{route.name}</Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
