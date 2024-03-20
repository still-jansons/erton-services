"use client"

import {motion} from "framer-motion";
import Image from 'next/image';

export default function TextAndImageBlock() {
  return (
    <div className="relative flex items-center gap-20 max-w-5xl mx-auto">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{ once: true }}
        transition={{duration: 1, ease: "easeOut"}}
      >
        <Image
          src="/images/check-seal.svg"
          alt="Check seal"
          width={225}
          height={225}
        />
      </motion.div>
      <motion.div
        className="max-w-[700px] flex flex-col gap-4"
        initial={{ opacity: 0 , x: '100%' }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{duration: .75, ease: "easeInOut", delay: .5}}
      >
        <h2>Högkvalitativ kundservice</h2>
        <p>Vi på Erton Services är stolta över att erbjuda skräddarsydda och högkvalitativa kundservice och callcenterlösningar för företag i hela Sverige. I dagens snabbt föränderliga affärsmiljö är  det avgörande att ha en effektiv och proaktiv kundservicestrategi för att behålla och locka  nya kunder. Genom att anlita oss som din föredragna outsourcingpartner för kundservice kan  du dra nytta av följande fördelar</p>
      </motion.div>
    </div>
  )
}