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

type GiftProps = {
  data?: any;
};

const FALLBACK_GIFTS: Gift[] = [
  {
    bank: "BCA",
    number: "0123456789",
    name: "Lorem ipsum dolor",
  },
];

const Gift = ({ data }: GiftProps) => {
  const [copied, setCopied] = useState<number | null>(null);

  const electronicGivings = data?.dataContent?.electronicGivings ?? [];

  const gifts: Gift[] =
    electronicGivings.length > 0
      ? electronicGivings.map((item: any) => ({
          bank: item.bankName,
          number: item.accountNumber,
          name: item.accountName,
        }))
      : FALLBACK_GIFTS;

  const handleCopy = (number: string, index: number) => {
    navigator.clipboard.writeText(number);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section
      id="gift"
      className="relative w-full pt-[68.5px] lg:pt-[115px] pb-[108px] bg-[#7A883F] overflow-hidden"
    >
      {/* Ornament Kiri Atas DEKSTOP Mobile*/}
      <Image
        src="/images/Michael-Vannya/Gift/BungaKananAtasM.webp"
        alt=""
        width={550}
        height={550}
        className="absolute -top-[0px]  right-[0px]   w-[205px] h-auto pointer-events-none z-0 lg:hidden"
      />

      {/* Ornament Kiri Atas DEKSTOP */}
      <Image
        src="/images/Michael-Vannya/Gift/BungaKananAtasD.webp"
        alt=""
        width={550}
        height={550}
        className="absolute -top-[0px] right-[0px] w-[620px] h-auto pointer-events-none z-0 hidden lg:block"
      />

      <div className="relative z-10 flex flex-col items-center text-center px-[24px]">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-kinfolk text-[34px] lg:text-[48px] text-white  uppercase"
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
            className="w-[95px] lg:w-[147px] h-auto pointer-events-none -mt-[10px]"
          />
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-times-new-roman text-[14px] lg:text-[20px] text-[#FEFBF0] mt-[21px] lg:mt-[54px] leading-[22px] lg:leading-[26px]"
        >
          Your presence and prayers are the greatest{" "}
          <br className="lg:hidden" />
          blessing to us. <br className="hidden lg:block" />
          Should you wish to send a gift, <br className="lg:hidden" />
          the details are provided <br className="hidden lg:block" />
          below for your <br className="lg:hidden" />
          convenience.
        </motion.p>

        <div className="w-full max-w-[270px] lg:max-w-[480px] flex flex-col mt-[31px] lg:mt-[52px]">
          {gifts.map((gift, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-[270px] h-[66px] lg:w-[480px] lg:h-[120px] rounded-[10px] lg:rounded-[20px] bg-white flex items-center"
            >
              <Image
                src="/images/Michael-Vannya/Gift/BCA.webp"
                alt="BCA"
                width={45}
                height={45}
                className="w-[34px] h-[34px] lg:w-[45px] lg:h-[45px] object-contain ml-[15px] lg:ml-[34px]"
              />

              <div className="text-left ml-[20px] lg:ml-[41px] leading-[14px] lg:leading-[25px]">
                <p className="font-times-new-roman text-[14px] lg:text-[20px] text-black font-bold">
                  {gift.number}
                </p>

                <div className="flex items-center gap-2 mt-[0.4px]">
                  <p className="font-times-new-roman text-[14px] lg:text-[20px] text-black">
                    {gift.bank}
                  </p>
                </div>

                <p className="font-times-new-roman text-[14px] lg:text-[20px] text-black">
                  {gift.name}
                </p>
              </div>

              <button
                onClick={() => handleCopy(gift.number, index)}
                className="font-times-new-roman text-[14px] lg:text-[20px] text-black ml-[37px]  lg:ml-[125px] font-bold"
              >
                {copied === index ? "Copied!" : "Copy"}
              </button>
            </motion.div>
          ))}
        </div>

        {/* <div className="w-full max-w-[241px] flex flex-col gap-6 mt-[36.5px]">
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
        </div> */}
      </div>
    </section>
  );
};

export default Gift;

