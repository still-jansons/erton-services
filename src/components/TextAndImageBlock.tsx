"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TextAndImageBlock({
  title,
  body,
  image,
  imagePosition = "left",
}: {
  title: string;
  body: string;
  image?: string;
  imagePosition?: "left" | "right";
}) {
  return (
    <div
      className={`relative mx-auto flex max-w-5xl flex-col-reverse items-center gap-24 px-5 md:gap-20 ${imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src={image}
            alt={title}
            width={225}
            height={225}
            style={{ width: "auto" }}
          />
        </motion.div>
      )}
      <motion.div
        className="mx-auto flex max-w-[700px] flex-col gap-4 md:max-w-[60%]"
        initial={{
          opacity: 0,
          translateX: imagePosition === "right" ? "-70%" : "70%",
        }}
        whileInView={{ opacity: 1, translateX: "0%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: "easeInOut", delay: 0.5 }}
      >
        <h2>{title}</h2>
        <p>{body}</p>
      </motion.div>
    </div>
  );
}
