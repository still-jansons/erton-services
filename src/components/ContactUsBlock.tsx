"use client";

import { motion, useWillChange } from "framer-motion";
import Image from "next/image";

export default function ContactUsBlock() {
  const willChange = useWillChange();

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
        initial={{ opacity: 0, x: "50%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, ease: "easeInOut", delay: 0.75 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="mb-8 text-center text-white">Kontakta oss</h2>
        <form>
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-6">
              <input
                type="text"
                placeholder="Förnamn"
                className="font-base flex-1 rounded-lg px-4 py-3 leading-[19px] text-black"
              />
              <input
                type="text"
                placeholder="Efternamn"
                className="font-base flex-1 rounded-lg px-4 py-3 leading-[19px] text-black"
              />
            </div>
            <input
              type="email"
              placeholder="E-post"
              className="font-base rounded-lg px-4 py-3 leading-[19px] text-black"
            />
            <textarea
              placeholder="Meddelande"
              className="font-base rounded-lg px-4 py-3 leading-[19px] text-black"
              rows={5}
            />
            <button className="btn-primary self-end">Skicka</button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
