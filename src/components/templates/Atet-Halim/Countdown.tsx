"use client";

import Image from "next/image";
import Countdown from "react-countdown";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, scaleIn, stagger } from "../../../lib/animation";
import { formatDateWithWeekday } from "@/lib/formatDate";

type CountdownSectionProps = {
  data?: any;
  targetDate?: string;
};

const CountdownSection = ({ data, targetDate }: CountdownSectionProps) => {
  const eventDate = data?.dataEvent?.date ?? targetDate ?? "2026-09-12T18:00:02";
  const dateLabel = formatDateWithWeekday(eventDate);

  return (
    <section id="countdown" className="relative w-full bg-[#845F47] flex flex-col items-center overflow-hidden z-30">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="font-playfair text-[5.64vw] lg:text-[3.17vw] text-white tracking-wide pt-[7.18vw] lg:pt-[1.52vw]"
      >
        {dateLabel.toUpperCase()}
      </motion.h2>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <Image
          src="/images/Atet-Halim/Countdown/OrnamentGaris.webp"
          alt="ornament"
          width={250}
          height={250}
          className="w-[38vw] lg:w-[14.99vw] h-auto"
        />
      </motion.div>

      <Countdown
        date={eventDate}
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
              className="flex flex-row items-center gap-[3.46vw] lg:gap-[1.82vw] mt-[4.62vw] lg:mt-[1.85vw] mb-[8.46vw] lg:mb-[2.58vw]"
            >
              {boxes.map((box) => (
                <motion.div
                  key={box.label}
                  variants={fadeUp}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center w-[18.72vw] lg:w-[9.51vw] h-[18.21vw] lg:h-[9.38vw] bg-white rounded-[6px] lg:rounded-[12px] shadow-md"
                >
                  <span className="font-lora text-[10.51vw] lg:text-[4.76vw] text-[#402824] leading-none">
                    {String(box.value).padStart(2, "0")}
                  </span>
                  <span className="font-lora text-[2.56vw] lg:text-[1.32vw] text-[#402824]">
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