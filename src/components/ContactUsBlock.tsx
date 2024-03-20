"use client";

import {motion, useWillChange} from "framer-motion";
import Image from "next/image";

export default function ContactUsBlock() {
  const willChange = useWillChange()
  
  return (
    <div className="relative content-wrapper flex py-44 flex-row-reverse">
      <motion.div
        className="z-10 absolute bottom-0 max-w-[55%] w-full left-0"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: .75, ease: "easeIn", delay: .5}}
        viewport={{once: true, margin: '-100px'}}
      >
        <Image
          src="/images/one-support-man.webp"
          alt="One support assistant"
          width={500}
          height={500}
          quality={100}
          className="w-full max-w-[550px] mx-auto"
        />
      </motion.div>
      <motion.div
        className="max-w-[45%] w-full text-white"
        initial={{opacity: 0, x: '50%'}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: .75, ease: "easeInOut", delay: .75}}
        viewport={{once: true, margin: '-100px'}}
      >
        <h2 className="text-white text-center mb-8">Kontakta oss</h2>
        <form>
          <div className="flex flex-col gap-6">
            <div className="flex gap-6">
              <input type="text" placeholder="Förnamn" className="rounded-lg px-4 py-3 text-black font-base leading-[19px] flex-1" />
              <input type="text" placeholder="Efternamn" className="rounded-lg px-4 py-3 text-black font-base leading-[19px] flex-1" />
            </div>
            <input type="email" placeholder="E-post" className="rounded-lg px-4 py-3 text-black font-base leading-[19px]" />
            <textarea placeholder="Meddelande" className="rounded-lg px-4 py-3 text-black font-base leading-[19px]" rows={5} />
            <button className="btn-primary self-end">Skicka</button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}
