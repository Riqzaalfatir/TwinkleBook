"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight } from "../../../lib/animation";

type Gift = {
  bank: string;
  number: string;
  name: string;
};

const gifts: Gift[] = [
  {
    bank: "BCA",
    number: "0123456789",
    name: "Lorem ipsum dolor",
  },
];

const Gift = () => {
  const [copied, setCopied] = useState<number | null>(null);

  const handleCopy = (number: string, index: number) => {
    navigator.clipboard.writeText(number);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section
      id="gift"
      className="relative w-full pt-[67px] pb-[108px] bg-[#7A883F]"
    >
      {/* Ornament Kiri Atas */}
      <Image
        src="/images/Michael-Vannya/Gift/BungaKananAtas.webp"
        alt=""
        width={300}
        height={300}
        className="absolute -top-[258px] right-[0px] w-[240px] h-auto pointer-events-none z-0"
      />

      <div className="relative z-10 flex flex-col items-center text-center px-[24px]">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-kinfolk text-[34px] text-white  uppercase"
        >
          Wedding Gift
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/images/Michael-Vannya/EventOrder/Ornamentgaris.png"
            alt="ornament"
            width={250}
            height={250}
            className="w-[95px] h-auto pointer-events-none -mt-[10px]"
          />
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-times-new-roman text-[14px] text-[#FEFBF0] mt-[21px] leading-[22px]"
        >
          Your presence and prayers are the greatest <br />
          blessing to us. Should you wish to send a gift, <br />
          the details are provided below for your <br />
          convenience.
        </motion.p>

        <div className="w-full max-w-[241px] flex flex-col gap-6 mt-[36.5px]">
          {gifts.map((gift, index) => (
            <div key={index} className="w-full">
              <div className="flex items-center justify-between leading-[17.5px]">
                <motion.div
                  variants={fadeLeft}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="text-left text-white"
                >
                  <p className="font-times-new-roman text-[14px]">
                    {gift.bank}
                  </p>
                  <p className="font-times-new-roman text-[14px]">
                    {gift.number}
                  </p>
                  <p className="font-times-new-roman text-[14px]">
                    {gift.name}
                  </p>
                </motion.div>

                <motion.button
                  variants={fadeRight}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  onClick={() => handleCopy(gift.number, index)}
                  className="font-times-new-roman text-[14px] text-white  pb-[1px] border-b border-white transition-opacity hover:opacity-70"
                >
                  {copied === index ? "COPIED!" : "COPY"}
                </motion.button>
              </div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="mt-3 border-b border-white"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gift;
