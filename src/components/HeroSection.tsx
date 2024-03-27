"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";
import Link from "next/link";
import React from "react";

export default function HeroSection({
  title,
  subtitle,
  link,
  image,
  style,
}: {
  title: string;
  subtitle: string;
  link?: {
    href: string;
    text: string;
  };
  image: string;
  style?: React.CSSProperties;
}) {
  return (
    <Section color="primary" background={{ type: "float" }} style={style}>
      <div className="content-wrapper relative flex flex-col justify-between gap-8 pt-40 md:min-h-[550px] md:flex-row md:gap-0 md:py-44">
        <motion.div
          className="text-white md:max-w-[45%]"
          initial={{ opacity: 0, translateX: "-50%" }}
          whileInView={{ opacity: 1, translateX: "0%" }}
          transition={{ duration: 0.75, ease: "easeInOut", delay: 0.75 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h1>{title}</h1>
          <p className="h2 light mt-4">{subtitle}</p>
          {link && (
            <Link
              href={link.href}
              type="button"
              className="btn-primary mt-8 inline-block"
            >
              {link.text}
            </Link>
          )}
        </motion.div>
        <motion.div
          className="bottom-0 right-0 z-10 flex w-full items-end md:absolute md:max-w-[55%]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.75, ease: "easeIn", delay: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            quality={100}
            className="mx-auto h-fit w-auto w-full"
          />
        </motion.div>
      </div>
    </Section>
  );
}
