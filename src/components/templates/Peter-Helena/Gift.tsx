"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";

const WeddingGift = () => {
  const accountNumber = "0123456789";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="gift"
      className="w-full bg-[#430D0D] flex justify-center py-[45px]"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-[340px] lg:w-[344.31px] rounded-[20px] lg:rounded-[20.25px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.4)] overflow-hidden"
      >
        <div className="pt-[5px] px-[4px]">
          <div className="relative w-full h-[376px] lg:h-[380.76px]">
            <Image
              src="/images/Peter-Helena/Gift/PeterHelenaBG.webp"
              alt="Peter & Helena"
              fill
              className="object-cover rounded-t-[20px] lg:rounded-t-[20.25px] rounded-b-none"
            />
            <div className="absolute inset-0 bg-black/[0.30] rounded-t-[20px] rounded-b-none" />
          </div>
        </div>

        <div className="flex flex-col  px-[26px] lg:px-[26.33px] pt-[31px] lg:pt-[30px] pb-[43px] lg:pb-[42.5px]">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-aston-script text-[28px] lg:text-[28.35px]  text-[#430D0D]"
          >
            Wedding Gift
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cinzel text-[14px] lg:text-[14.18px] text-[#454545] leading-[17.5px] mt-[37.5px] lg:mt-[35px]"
          >
            Your presence and prayers are the <br />
            greatest blessing to us.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cinzel text-[12px] lg:text-[12.15px] text-[#454545] leading-[17.5px] mt-[20.2px] lg:mt-[20px]"
          >
            Should you wish to honor us with a gift, <br />
            please find the details below for your <br />
            convenience.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-[285px] lg:w-[288.61px] h-[66px] lg:h-[66.84px] rounded-[10px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex items-center mt-[37px] lg:mt-[35px]"
          >
            <Image
              src="/images/Peter-Helena/Gift/BCA.webp"
              alt="BCA"
              width={34}
              height={34}
              className="w-[34px] h-[34px] lg:w-[34.43px] lg:h-[34.43px] object-contain ml-[15px]"
            />

            <div className="text-left ml-[14px] leading-[14px] lg:leading-[15.5px]">
              <p className="font-cinzel text-[12px] lg:text-[12.15px] text-[#454545] font-bold">
                {accountNumber}
              </p>
              <p className="font-cinzel text-[12px] lg:text-[12.15px] text-[#454545]">
                BCA
              </p>
              <p className="font-cinzel text-[12px] lg:text-[12.15px] text-[#454545]">
                Lorem Ipsum Dolor
              </p>
            </div>

            <button
              onClick={handleCopy}
              className="font-times-new-roman text-[12px] lg:text-[12.15px] text-[#454545] ml-auto mr-[15px] lg:mr-[17px] font-bold"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WeddingGift;
