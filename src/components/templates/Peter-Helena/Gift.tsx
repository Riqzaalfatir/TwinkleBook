"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";

const WeddingGift = () => {

  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

const handleCopy = (text: string, index: number) => {
  navigator.clipboard.writeText(text);
  setCopiedIndex(index);
  setTimeout(() => setCopiedIndex(null), 2000);
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
        className="w-[340px] rounded-[20px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.4)] overflow-hidden"
      >
        <div className="pt-[5px] px-[4px]">
          <div className="relative w-full h-[376px]">
            <Image
              src="/images/Peter-Helena/Gift/PeterHelenaBG.webp"
              alt="Peter & Helena"
              fill
              className="object-cover rounded-t-[20px] rounded-b-none"
            />
            <div className="absolute inset-0 bg-black/[0.30] rounded-t-[20px] rounded-b-none" />
          </div>
        </div>

        <div className="flex flex-col  px-[26px]  pt-[29px] pb-[43px] ">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-aston-script text-[28px]   text-[#430D0D]"
          >
            Wedding Gift
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cinzel text-[14px] text-[#454545] leading-[17.5px] mt-[38px]"
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
            className="font-cinzel text-[12px]  text-[#454545] leading-[17.5px] mt-[20.7px]"
          >
            Should you wish to honor us with a gift, <br />
            please find the details below for your <br />
            convenience.
          </motion.p>

          {/* NO REK BCA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-[285px] pt-[12.5px] pb-[8.8px] rounded-[10.92px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex items-center mt-[29px]"
          >
            <Image
              src="/images/Peter-Helena/Gift/BCA.webp"
              alt="BCA"
              width={34}
              height={34}
              className="w-[34px] h-[34px] object-contain ml-[15px]"
            />

            <div className="text-left ml-[14px] leading-[15px]">
              <p className="font-cinzel text-[12px] text-[#454545] font-bold">
                2580551311
              </p>
              <p className="font-cinzel text-[12px] text-[#454545] ">
                BCA
              </p>
              <p className="font-cinzel text-[12px] text-[#454545] ">
                Helena Surajiman
              </p>
            </div>

            <button
               onClick={() => handleCopy("2580551311", 0)}
              className="font-times-new-roman text-[12px] text-[#454545] ml-auto mr-[8px] font-bold"
            >
                {copiedIndex === 0 ? "Copied!" : "Copy"}

            </button>
          </motion.div>

          {/* NO REK PAYNOW */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-[285px] pt-[12.5px] pb-[8.8px] rounded-[10.92px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex items-center mt-[17.8px]"
          >
            <Image
              src="/images/Peter-Helena/Gift/Paynow.webp"
              alt="BCA"
              width={34}
              height={34}
              className="w-[34px] h-[34px] object-contain ml-[15px]"
            />

            <div className="text-left ml-[14px] leading-[15px]">
              <p className="font-cinzel text-[12px] text-[#454545] font-bold">
                84047107
              </p>
              <p className="font-cinzel text-[12px] text-[#454545]">
                Paynow
              </p>
              <p className="font-cinzel text-[12px] text-[#454545]">
                Peter Andreas Sutjiatma
              </p>
            </div>

            <button
              onClick={() => handleCopy("84047107", 1)}
              className="font-times-new-roman text-[12px] text-[#454545] ml-auto mr-[8px] font-bold"
            >
  {copiedIndex === 1 ? "Copied!" : "Copy"}
            </button>
          </motion.div>


          {/* BANK SINGAPORE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-[285px] pt-[12.5px] pb-[8.8px] rounded-[10.92px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex items-center mt-[17.8px]"
          >
            <Image
              src="/images/Peter-Helena/Gift/BS.webp"
              alt="BCA"
              width={34}
              height={34}
              className="w-[44px] h-[44px] object-contain ml-[10px] -mt-[15px]"
            />

            <div className="text-left ml-[8.5px] leading-[15px]">
              <p className="font-cinzel text-[12px] text-[#454545] font-bold">
                0119012634
              </p>
              <p className="font-cinzel text-[12px] text-[#454545] pt-[4px]">
                Standard Chartered  <br />
                Bank Singapore Limited
              </p>
              <p className="font-cinzel text-[12px] text-[#454545]">
                Peter Andreas Sutjiatma
              </p>
              <p className="font-cinzel text-[12px] text-[#454545] pt-[3.5px]">
                <span className="font-bold">Address:</span> 8 Marina <br />
                Boulevard, #01-01, <br /> 
                Marina Bay Financial <br />
                Centre Tower 1, <br /> 
                Singapore 018981
              </p>
              <p className="font-cinzel text-[12px] text-[#454545] pt-[3.5px]">
                <span className="font-bold">Swift code:</span> SCBLSG22
              </p>
            </div>

            <button
              onClick={() => handleCopy("0119012634", 2)}
              className="font-times-new-roman text-[12px] text-[#454545] ml-auto mr-[8px] font-bold -mt-[10px]"
            >
  {copiedIndex === 2 ? "Copied!" : "Copy"}
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WeddingGift;
