"use client"

import Image from "next/image";
import {motion, useScroll, useTransform, useWillChange} from "framer-motion";
import React from "react";

export default function Section(
  {
    children,
    color,
    hasPadding = false,
    title,
    subtitle,
    background = "/images/blocks.svg"
  }: {
    children: React.ReactNode
    color: "primary" | "secondary"
    hasPadding?: boolean
    title?: string
    subtitle?: string
    background?: string
  }
) {
  const {scrollYProgress} = useScroll()
  const willChange = useWillChange()
  const position = useTransform(scrollYProgress, [0, 3], ['50%', '0%'])

  return (
    <section
      className={
        `relative ${color === "primary" ? "bg-gradient-to-b from-primary-light to-primary" : "bg-white"} ${hasPadding ? "py-24" : null}`
      }
    >
      {color === "primary" ? (
        <motion.div
          initial={{opacity: 0, left: '-50%'}}
          animate={{opacity: 1, left: 0}}
          transition={{duration: .75, ease: "easeOut"}}
          viewport={{once: true}}
          className="absolute inset-0 h-full max-h-[90%] my-auto"
        >
          <Image
            src={background}
            alt="Background blocks"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            fill={true}
            className=" m-auto max-w-[1500px]"
            quality={100}
          />
        </motion.div>
      ) : (
        <motion.div
          className="absolute inset-0 z-0 -scale-x-100 bg-no-repeat bg-cover bg-center"
          transition={{ease: "easeOut"}}
          style={{
            willChange,
            backgroundImage: "url('/images/lines.webp')",
            backgroundPositionY: position
          }}
        />
      )}
      
      { (title || subtitle) && (
        <motion.div
          initial="hidden"
          animate={{opacity: 1, y: 0}}
          transition={{duration: .75, ease: "easeInOut", delay: .5}}
          className={`relative max-w-5xl flex flex-col gap-4 mx-auto mb-6`}
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 }
          }}
        >
          { title && <h2 className={`text-center ${color === 'primary' ? 'light' : null}`}>{title}</h2> }
          { subtitle && <p className={`h3 text-center ${color === 'primary' ? '!text-white' : '!text-black'}`}>{subtitle}</p> }
        </motion.div>
      ) }
      <div className="relative">
        { children }
      </div>
    </section>
  )
}
