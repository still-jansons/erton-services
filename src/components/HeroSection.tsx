"use client"

import {motion} from "framer-motion"
import Image from 'next/image'
import Section from "@/components/Section";

export default function HeroSection() {
  return (
    <Section color="primary">
      <div className="relative content-wrapper flex py-44">
        <motion.div
          initial={{x: '-100%', opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: .75, ease: "easeInOut", delay: .75}}
          viewport={{ once: true }}
          className="max-w-[40%] text-white"
        >
          <h1>Välkommen till Erton Services AB!</h1>
          <p className="h2 light mt-4">Vi gör kundservice enkel</p>
          <button className="btn-primary mt-8">Kontakta oss</button>
        </motion.div>
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: .75, ease: "easeIn", delay: .5}}
          viewport={{ once: true }}
          className="z-10 absolute bottom-0 max-w-[60%] w-full right-0"
        >
          <Image
            src="/images/two-support-people.webp"
            alt="Two support assistants"
            width={500}
            height={500}
            quality={100}
            className="w-full max-h-[550px]"
          />
        </motion.div>
      </div>
    </Section>
  )
}
