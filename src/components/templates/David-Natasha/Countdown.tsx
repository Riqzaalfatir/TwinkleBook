"use client";

import React from "react";
import Countdown from "react-countdown";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";
import { formatDateWithWeekday } from "@/lib/formatDate";
import { DavidNatashaDataProps } from "./types";

type CountdownSectionProps = {
  data?: DavidNatashaDataProps;
};

const CountdownSection = ({ data }: CountdownSectionProps) => {
  const eventDate = data?.dataEvent?.date ?? "2026-10-10T00:00:00";
  const TARGET_DATE = new Date(eventDate);
  const eventDateLabel = formatDateWithWeekday(eventDate).toUpperCase();

  return (
    <section
      id="countdown"
      className="relative w-full bg-[#080225] flex flex-col items-center pt-[8.9vw] lg:pt-[3.5vw] pb-[10vw] lg:pb-[3.95vw] z-30"
    >
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="font-cormorant-garamond font-semibold text-[6.15vw] lg:text-[2.78vw] text-white  uppercase"
      >
        {eventDateLabel}
      </motion.h2>

      <Countdown
        date={TARGET_DATE}
        renderer={({ days, hours, minutes, seconds }) => {
          const items = [
            { label: "Days", value: days },
            { label: "Hour", value: hours },
            { label: "Minutes", value: minutes },
            { label: "Seconds", value: seconds },
          ];

          return (
            <div className="flex flex-row items-center gap-[3.84vw] lg:gap-[1.7vw] mt-[5vw] lg:mt-[1.45vw]">
              {items.map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                    delay: index * 0.15,
                  }}
                  className="flex flex-col items-center justify-center w-[18.82vw] lg:w-[8.10vw] h-[18.43vw] lg:h-[7.94vw] bg-white rounded-[1.54vw] lg:rounded-[0.66vw] gap-[2vw] lg:gap-[0.55vw]"
                >
                  <span className="font-cormorant-garamond text-[10.75vw] lg:text-[4.63vw] text-[#080225] leading-none -mt-[2.1vw] lg:-mt-[0.9vw]">
                    {String(item.value).padStart(2, "0")}
                  </span>
                  <span className="font-cormorant-garamond text-[3.08vw] lg:text-[1.32vw] text-[#080225]">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          );
        }}
      />
    </section>
  );
};

export default CountdownSection;










