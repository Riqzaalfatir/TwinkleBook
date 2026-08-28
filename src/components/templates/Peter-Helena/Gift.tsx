"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";

type Gift = {
  bank: string;
  number: string;
  name: string;
};

type WeddingGiftProps = {
  data?: any;
};

const FALLBACK_GIFTS: Gift[] = [
  { bank: "BCA", number: "2580551311", name: "Helena Surajiman" },
  { bank: "Paynow", number: "84047107", name: "Peter Andreas Sutjiatma" },
  {
    bank: "Standard Chartered Bank Singapore Limited",
    number: "0119012634",
    name: "Peter Andreas Sutjiatma",
  },
];

// Mapping icon per nama bank (API belum nyediain field icon)
const BANK_ICONS: Record<string, string> = {
  BCA: "/images/Peter-Helena/Gift/BCA.webp",
  Paynow: "/images/Peter-Helena/Gift/Paynow.webp",
  "Standard Chartered Bank Singapore Limited":
    "/images/Peter-Helena/Gift/BSS.png",
};

// Info tambahan khusus Bank Singapore (API belum nyediain field ini)
const EXTRA_INFO: Record<string, { address: string[]; swiftCode: string }> = {
  "Standard Chartered Bank Singapore Limited": {
    address: [
      "8 Marina",
      "Boulevard, #01-01,",
      "Marina Bay Financial",
      "Centre Tower 1,",
      "Singapore 018981",
    ],
    swiftCode: "SCBLSG22",
  },
};

const WeddingGift = ({ data }: WeddingGiftProps) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const electronicGivings = data?.dataContent?.electronicGivings ?? [];

  const gifts: Gift[] =
    electronicGivings.length > 0
      ? electronicGivings.map((item: any) => ({
          bank: item.bankName,
          number: item.accountNumber,
          name: item.accountName,
        }))
      : FALLBACK_GIFTS;

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

          {gifts.map((gift, index) => {
            const extra = EXTRA_INFO[gift.bank];
            const icon = BANK_ICONS[gift.bank];
            const isSpecial = Boolean(extra);

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className={`w-[285px] pt-[12.5px] pb-[8.8px] rounded-[10.92px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex items-center px-[15px] ${
                  index === 0 ? "mt-[29px]" : "mt-[17.8px]"
                }`}
              >
                <div className="w-[34px] flex-shrink-0 flex justify-center">
                  <Image
                    src={icon ?? "/images/Peter-Helena/Gift/BCA.webp"}
                    alt={gift.bank}
                    width={isSpecial ? 44 : 34}
                    height={isSpecial ? 44 : 34}
                    className={`object-contain ${isSpecial ? "translate-x-[2px] lg:translate-x-[3px]" : ""}`}
                  />
                </div>

                <div className="text-left ml-[14px] leading-[15px] flex-1 min-w-0">
                  <p className="font-cinzel text-[12px] text-[#454545] font-bold">
                    {gift.number}
                  </p>
                  <p className="font-cinzel text-[12px] text-[#454545]">
                    {gift.bank}
                  </p>
                  <p className="font-cinzel text-[12px] text-[#454545]">
                    {gift.name}
                  </p>

                  {extra && (
                    <>
                      <p className="font-cinzel text-[12px] text-[#454545] pt-[3.5px]">
                        <span className="font-bold">Address:</span>{" "}
                        {extra.address.map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </p>
                      <p className="font-cinzel text-[12px] text-[#454545] pt-[3.5px]">
                        <span className="font-bold">Swift code:</span>{" "}
                        {extra.swiftCode}
                      </p>
                    </>
                  )}
                </div>

                <button
                  onClick={() => handleCopy(gift.number, index)}
                  className="font-times-new-roman text-[12px] text-[#454545] ml-[8px] font-bold flex-shrink-0"
                >
                  {copiedIndex === index ? "Copied!" : "Copy"}
                </button>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default WeddingGift;
