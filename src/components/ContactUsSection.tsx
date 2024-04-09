"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/form/ContactForm";
import Image from "next/image";
import Section from "@/components/Section";

export default function ContactUsSection() {
  return (
    <Section
      background={{
        type: "scroll",
        image: "/images/lines.webp",
      }}
      hasPadding
    >
      <div className="px-5">
        <div className="mx-auto flex max-w-[700px] flex-col gap-24">
          <motion.div
            id="form"
            className="w-full scroll-mt-48"
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <ContactForm />
          </motion.div>
          <div className="flex w-full flex-col gap-6 md:flex-row">
            <motion.div
              className="flex flex-1 items-center gap-5 border-[3px] border-logo-blue bg-white p-5"
              initial={{ opacity: 0, translateY: "50%" }}
              whileInView={{ opacity: 1, translateY: "0%" }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Image
                src="/icons/phone.svg"
                alt="Phone icon"
                width={60}
                height={60}
                quality={100}
              />
              <div className="flex flex-col gap-1.5">
                <p className="font-heebo font-bold">Telefon:</p>
                <p className="font-heebo">+46 708 937 873</p>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-1 items-center gap-5 border-[3px] border-logo-green bg-white p-5"
              initial={{ opacity: 0, translateY: "50%" }}
              whileInView={{ opacity: 1, translateY: "0%" }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Image
                src="/icons/envelope.svg"
                alt="Envelope icon"
                width={60}
                height={60}
                quality={100}
              />
              <div className="flex flex-col gap-1.5">
                <p className="font-heebo font-bold">E-post:</p>
                <p className="font-heebo pointer-events-none">
                  sven.lundqvist@erton.se
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
