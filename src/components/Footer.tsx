import Image from "next/image";
import ContactUsBlock from "@/components/ContactUsBlock";
import Section from "@/components/Section";

export default function Footer() {
  const routes = [
    { name: "Hem", path: "/" },
    { name: "Tjänster", path: "/tjanster" },
    { name: "Om oss", path: "/om-oss" },
    { name: "Kontakter", path: "/kontakter" },
  ];

  return (
    <>
      <Section
        background={{
          type: "float",
          image: "/images/blocks-secondary.svg",
        }}
        color="primary"
      >
        <ContactUsBlock />
      </Section>
      <footer className="flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-primary-dark to-black py-[50px]">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={125}
          height={37}
          className="m-auto"
        />

        <div className="flex border-b border-t border-secondary">
          {routes.map((route, index) => (
            <a className="px-4 py-2.5 text-base font-extrabold text-white">
              {route.name}
            </a>
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
      </footer>
    </>
  );
}
