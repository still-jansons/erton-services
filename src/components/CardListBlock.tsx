"use client";
import { motion, useWillChange } from "framer-motion";
import Image from "next/image";

type Card = {
  title: string;
  body: string;
  icon?: string;
  theme?: "light" | "dark";
};
export default function CardListBlock({ cards = [] }: { cards: Card[] }) {
  const listAnimation = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        delayChildren: 1,
      },
    },
  };

  const listItemAnimation = {
    hidden: { opacity: 0, y: "70%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const willChange = useWillChange();

  return (
    <div className="content-wrapper">
      <motion.ul
        className="flex w-full flex-wrap justify-center"
        variants={listAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {cards.map((card, index) => (
          <motion.li
            key={index}
            variants={listItemAnimation}
            className={`m-4 flex min-h-[206px] w-full cursor-default flex-col gap-3 rounded-2xl p-4 shadow-lg md:w-[380px] ${card.theme === "dark" ? "bg-gradient-to-b from-primary-light to-primary" : "bg-white"}`}
            style={{
              willChange,
            }}
          >
            <div className="flex items-center gap-3">
              {card.icon && (
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={44}
                  height={44}
                  className="aspect-square"
                />
              )}
              <h3 className={card.theme === "dark" ? "text-white" : ""}>
                {card.title}
              </h3>
            </div>
            <p
              className={`text-base leading-5 ${card.theme === "dark" ? "text-white" : ""}`}
            >
              {card.body}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
