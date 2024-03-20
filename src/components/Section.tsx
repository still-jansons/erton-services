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
    backgroundType = "float",
    background = "/images/blocks.svg"
  }: {
    children: React.ReactNode
    backgroundType: "float" | "scroll"
    color: "primary" | "secondary"
    hasPadding?: boolean
    title?: string
    subtitle?: string
    background?: string
  }
) {
  const {scrollYProgress} = useScroll()
  const willChange = useWillChange()
  const position = useTransform(scrollYProgress, [0, 2], ['50%', '0%'])

  return (
    <section
      className={
        `relative ${color === "primary" ? "bg-gradient-to-b from-primary-light to-primary" : "bg-white"} ${hasPadding ? "py-24" : null}`
      }
    >
      {backgroundType === "float" ? (
        <motion.div
          initial={{ opacity: 0, x: '-50%' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{duration: .75, ease: "easeOut"}}
          viewport={{once: true, margin: '-100px'}}
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
            className=" m-auto"
            quality={100}
          />
        </motion.div>
      ) : (
        <motion.div
          className="absolute inset-0 z-0 -scale-x-100 bg-no-repeat bg-cover bg-center"
          transition={{ease: "easeOut"}}
          style={{
            willChange,
            backgroundImage: `url(${background})`,
            backgroundPositionY: position
          }}
        />
      )}
      
      { (title || subtitle) && (
        <motion.div
          className={`relative max-w-5xl flex flex-col gap-4 mx-auto mb-6`}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{duration: .75, ease: "easeInOut", delay: .5}}
          viewport={{once: true, margin: '-50px'}}
          style={{
            willChange
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
