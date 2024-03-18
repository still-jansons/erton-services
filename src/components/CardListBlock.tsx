"use client"
import {motion} from "framer-motion";
import Image from 'next/image';

type Card = {
  title: string;
  body: string;
  icon?: string;
}
export default function CardListBlock(
  {
    cards = []
  }: {
    cards: Card[]
  }
) {
  return (
    <div className="content-wrapper">
      <motion.ul className="flex flex-wrap justify-center w-full">
        {cards.map((card, index) => (
          <motion.li
            key={index}
            initial={{opacity: 0, y: '70%'}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: .5, ease: "easeOut", delay: (index + 2.7) * .45}}
            viewport={{ amount: 'all', once: false}}
            className="flex flex-col gap-3 bg-white p-4 rounded-2xl shadow-lg w-full md:w-[380px] min-h-[206px] m-4 cursor-default"
          >
            <div className="flex gap-3 items-center">
              {card.icon && (
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={44}
                  height={44}
                  className="aspect-square"
                />
              )}
              <h3>{card.title}</h3>
            </div>
            <p className="text-base leading-5">{card.body}</p>
          </motion.li>
        ))}
      </motion.ul>
    
    </div>
  )
}
