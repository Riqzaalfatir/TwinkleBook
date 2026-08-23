"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";

const items = [
  { label: "DAYS", value: 59 },
  { label: "HOUR", value: 59 },
  { label: "MINUTES", value: 59 },
  { label: "SECONDS", value: 59 },
];

const dayPart = "Sunday";
const datePart = "25 October 2026";

const Countdown = () => {
  return (
    <div
      id="countdown"
      className="relative w-full h-[406px] lg:h-[411.14px] overflow-hidden"
    >
      <Image
        src="/images/Peter-Helena/Countdown/PeterHelenaBG.webp"
        alt="Countdown"
        fill
        className="object-cover rounded-t-[20px] rounded-b-none object-top"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/[0.59] rounded-t-[20px] rounded-b-none" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full pt-[78px] lg:pt-[73px] pb-[38px]">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-cinzel text-[32px] lg:text-[32.41px] text-white text-center leading-[35px] uppercase"
        >
          <span className="font-cinzel-decorative">S</span>unday, <br />
          25 <span className="font-cinzel-decorative ">O</span>ctober 2026
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="grid grid-cols-2 gap-x-[42px] gap-y-[30px] lg:gap-y-[29px] mt-[29px] lg:mt-[27px]"
        >
          {items.map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <span className="font-cinzel text-[41.94px] lg:text-[42.47px] text-white leading-none">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="font-cinzel font-bold text-[10px] lg:text-[10.13px] text-white mt-[2px] lg:mt-[1.5px]">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Countdown;
