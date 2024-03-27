"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useWillChange } from "framer-motion";
import React from "react";

export default function Section({
  children,
  color,
  hasPadding = false,
  title,
  subtitle,
  background = {
    type: "float",
    image: "/images/blocks.svg",
    color: "bg-white",
  },
  className,
  style,
}: {
  children: React.ReactNode;
  color?: "primary" | "secondary";
  hasPadding?: boolean;
  title?: string;
  subtitle?: string;
  background: {
    type?: "float" | "scroll" | "solid";
    image?: string;
    color?: "bg-white" | "bg-gray";
  };
  className?: string;
  style?: React.CSSProperties;
}) {
  const { scrollYProgress } = useScroll();
  const willChange = useWillChange();
  const position = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);

  return (
    <section
      className={`relative shadow-2xl ${color === "primary" ? "bg-gradient-to-b from-primary-light to-primary" : "bg-white"} ${hasPadding ? "py-24" : null} shadow-md`}
      style={style}
    >
      {background.type === "float" && (
        <motion.div
          initial={{ opacity: 0, x: "-50%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="absolute inset-0 my-auto h-full"
        >
          <Image
            src={background.image || "/images/blocks.svg"}
            alt="Background blocks"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            fill={true}
            className="m-auto"
            quality={100}
          />
        </motion.div>
      )}

      {background.type === "scroll" && (
        <motion.div
          className="absolute inset-0 z-0 -scale-x-100 bg-cover bg-center bg-no-repeat"
          transition={{ ease: "easeOut" }}
          style={{
            willChange: "background-position-y",
            backgroundImage: `url(${background.image})`,
            backgroundPositionY: position,
          }}
        />
      )}

      {background.type === "solid" && (
        <div
          className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat ${background.color}`}
        />
      )}

      {(title || subtitle) && (
        <motion.div
          className={`relative mx-auto mb-6 flex max-w-5xl flex-col gap-4`}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeInOut", delay: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          style={{
            willChange,
          }}
        >
          {title && (
            <h2
              className={`text-center ${color === "primary" ? "light" : null}`}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p
              className={`h3 text-center ${color === "primary" ? "!text-white" : "!text-black"}`}
            >
              {subtitle}
            </p>
          )}
        </motion.div>
      )}
      <div className="relative">{children}</div>
    </section>
  );
}
