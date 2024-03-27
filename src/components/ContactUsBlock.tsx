"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ContactForm from "@/components/form/ContactForm";

export default function ContactUsBlock() {
  return (
    <div className="content-wrapper relative flex flex-col-reverse pt-12 md:flex-row-reverse md:py-12 lg:py-44">
      <motion.div
        className="bottom-0 left-0 z-10 w-full md:absolute md:max-w-[55%]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeIn", delay: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Image
          src="/images/one-support-man.webp"
          alt="One support assistant"
          width={500}
          height={500}
          quality={100}
          className="mx-auto w-full max-w-[550px]"
        />
      </motion.div>
      <motion.div
        className="w-full text-white md:max-w-[45%]"
        initial={{ opacity: 0, scale: 0.75 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.75 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="mb-8 text-center text-white">Kontakta oss</h2>
        <ContactForm />
      </motion.div>
    </div>
  );
}
