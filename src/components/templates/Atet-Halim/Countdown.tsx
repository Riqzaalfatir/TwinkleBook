"use client";

import Image from "next/image";
import Countdown from "react-countdown";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, scaleIn, stagger } from "../../../lib/animation";

type CountdownSectionProps = {
  data?: unknown;
  targetDate?: string;
};

const CountdownSection = ({
  data,
  targetDate = "2026-09-26T00:00:00",
}: CountdownSectionProps) => {
  const dateLabel = new Date(targetDate).toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="relative w-full bg-[#845F47] flex flex-col items-center overflow-hidden">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="font-playfair text-[5.64vw] lg:text-[48px] text-white tracking-wide pt-[7.18vw] lg:pt-[23px]"
      >
        SATURDAY, 26 JULY 2026
      </motion.h2>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/images/Atet-Halim/Countdown/OrnamentGaris.webp"
          alt="ornament"
          width={250}
          height={250}
          className="w-[38vw] lg:w-[227px] h-auto"
        />
      </motion.div>

      <Countdown
        date={targetDate}
        renderer={({ days, hours, minutes, seconds }) => {
          const boxes = [
            { value: days, label: "Days" },
            { value: hours, label: "Hour" },
            { value: minutes, label: "Minutes" },
            { value: seconds, label: "Seconds" },
          ];

          return (
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-row items-center gap-[3.46vw] lg:gap-[27.5px] mt-[4.62vw] lg:mt-[28px] mb-[8.46vw] lg:mb-[39px]"
            >
              {boxes.map((box) => (
                <motion.div
                  key={box.label}
                  variants={fadeUp}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center w-[18.72vw] lg:w-[144px] h-[18.21vw] lg:h-[142px] bg-white rounded-[6px] lg:rounded-[12px] shadow-md"
                >
                  <span className="font-lora text-[10.51vw] lg:text-[72px] text-[#402824] leading-none">
                    {String(box.value).padStart(2, "0")}
                  </span>
                  <span className="font-lora text-[2.56vw] lg:text-[20px] text-[#402824]">
                    {box.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          );
        }}
      />
    </section>
  );
};

export default CountdownSection;