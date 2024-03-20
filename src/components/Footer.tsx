import Image from "next/image";

export default function Footer() {
  const routes = [
    {name: "Hem", path: "/"},
    {name: "Tjänster", path: "/tjanster"},
    {name: "Om oss", path: "/om-oss"},
    {name: "Kontakter", path: "/kontakter"}
  ]
  
  return (
    <footer className="bg-gradient-to-b from-primary-dark to-black py-[50px] flex flex-col justify-center items-center gap-6">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={125}
        height={37}
        className="m-auto"
      />
      
      <div className="border-t border-b border-secondary flex">
        {routes.map((route, index) => (
          <a className="px-4 py-2.5 text-white font-extrabold text-base">{route.name}</a>
        ))}
      </div>
      <div className="flex flex-col gap-3 items-center">
        <a className="text-white text-base font-normal" href="tel:+46708937873">+46 708 937 873</a>
        <a className="text-white text-base font-normal" href="mailto:sven.lundqvist@erton.se">sven.lundqvist@erton.se</a>
      </div>
    </footer>
  )
}
