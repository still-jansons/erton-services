"use client"

import {motion, useWillChange} from "framer-motion";

export default function VideoBlock() {
  const willChange = useWillChange()
  return (
    <motion.div
      className="w-full max-w-4xl px-5 mx-auto"
      initial={{opacity: 0, y: '50%'}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, margin: '-100px'}}
      transition={{duration: .75, ease: "easeOut", delay: .5}}
      style={{
        willChange: 'opacity, transform'
      }}
    >
      <div className="aspect-video relative w-full">
        <iframe
          src="https://www.youtube.com/embed/QqENXljwWsg?si=xitObF3fBEhZ45ut&rel=0&controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full rounded-3xl bg-gradient-to-b from-primary-dark to-black shadow-xl"
        />
      </div>
    </motion.div>
  )
}
