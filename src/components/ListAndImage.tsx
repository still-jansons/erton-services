"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ListAndImage({
  textList,
  image,
  imagePosition = "left",
}: {
  textList: { title: string; body: string }[];
  image?: string;
  imagePosition?: "left" | "right";
}) {
  return (
    <div
      className={`relative mx-auto flex max-w-7xl flex-col-reverse gap-24 px-5 md:gap-10 lg:gap-16 ${imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:max-w-[50%]"
        >
          <Image
            src={image}
            alt="List image"
            quality={100}
            width={800}
            height={800}
            className="h-[400px] w-full rounded-3xl object-cover md:h-full"
          />
        </motion.div>
      )}
      <motion.div
        className="mx-auto flex flex-col gap-4 md:max-w-[50%]"
        initial={{
          opacity: 0,
          x: imagePosition === "right" ? "-100%" : "100%",
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: "easeInOut", delay: 0.5 }}
      >
        <ul className="flex h-full flex-col justify-between gap-12">
          {textList.map((item, index) => (
            <li key={index} className="flex flex-col gap-4 pl-6">
              <p className="h2 relative before:absolute before:-left-6 before:top-2.5 before:block before:size-3.5 before:rounded-full before:bg-primary">
                {item.title}
              </p>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
