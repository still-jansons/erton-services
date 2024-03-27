"use client";

import { motion, useWillChange } from "framer-motion";

export default function VideoBlock() {
  const willChange = useWillChange();
  return (
    <motion.div
      className="mx-auto w-full max-w-4xl px-5"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.75 }}
      style={{
        willChange: "opacity, transform",
      }}
    >
      <div className="relative aspect-video w-full">
        <iframe
          src="https://www.youtube.com/embed/QqENXljwWsg?si=xitObF3fBEhZ45ut&rel=0&controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full rounded-3xl bg-gradient-to-b from-primary-dark to-black shadow-xl"
        />
      </div>
    </motion.div>
  );
}
