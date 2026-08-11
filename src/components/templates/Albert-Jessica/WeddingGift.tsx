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
    number: "4490086221",
    name: "a/n Jessica Nathalie",
  },
];

const WeddingGift = () => {
  const [copied, setCopied] = useState<number | null>(null);

  const handleCopy = (number: string, index: number) => {
    navigator.clipboard.writeText(number);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section
      id="gift"
      className="relative w-full flex items-center justify-center overflow-hidden"
    >
      <Image
        src="/images/Albert-Jessica/Gift/BgGift.webp"
        alt="Profile Background"
        fill
        className="object-cover z-10"
      />

      {/* Layer overlay: dark tint 60% + background blur */}
      <div className="absolute inset-0 z-[15] bg-[#322E29]/60 backdrop-blur-[2px]" />

      {/* Konten */}
      <div className="relative z-20 flex flex-col items-center text-center px-8 text-[#FEF8EF] mt-[143px] mb-[158px]">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[28px] font-marcellus tracking-wide uppercase"
        >
          Wedding Gift
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[14px] font-lora mt-[24px] tracking-wide"
        >
          Your presence and prayers
          <br />
          are the greatest blessing to us.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[14px] font-lora mt-[18px] tracking-wide"
        >
          Should you wish to honor us with a gift,
          <br />
          please find the details below
          <br />
          for your convenience.
        </motion.p>

        {/* List rekening */}
        <div className="w-full max-w-[259px] flex flex-col gap-6 mt-[28px]">
          {gifts.map((gift, index) => (
            <div key={index} className="w-full">
              {/* Info bank */}
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="flex items-center justify-between leading-[17.5px]"
              >
                <div className="text-left">
                  <p className="text-[14px] font-lora">{gift.bank}</p>
                  <p className="text-[14px] font-lora">{gift.number}</p>
                  <p className="text-[14px] font-lora">{gift.name}</p>
                </div>

                {/* Tombol COPY */}
                <motion.div
                  variants={fadeRight}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  <button
                    onClick={() => handleCopy(gift.number, index)}
                    className="text-[14px] font-lora tracking-widest pb-[8px] border-b border-[#FEF8EF] transition-opacity hover:opacity-70 pt-[18px]"
                  >
                    {copied === index ? "COPIED!" : "COPY"}
                  </button>
                </motion.div>
              </motion.div>

              {/* Garis bawah */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="mt-3 border-b border-[#FEF8EF]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingGift;
