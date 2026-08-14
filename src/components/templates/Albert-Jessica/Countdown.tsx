"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight } from "../../../lib/animation";
import { formatDateWithWeekday } from "@/lib/formatDate";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type CountdownProps = {
  data?: any;
};

function getTimeLeft(targetDate: Date): TimeLeft {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
}

const Countdown = ({ data }: CountdownProps) => {
  const eventDate = data?.dataEvent?.date ?? "2026-09-12T00:00:00";
  const dateLabel = formatDateWithWeekday(eventDate);

  // Pecah jadi 2 baris: "SATURDAY," di baris 1, "12 SEPTEMBER 2026" di baris 2
  const [dayPart, ...restParts] = dateLabel.split(",");
  const datePart = restParts.join(",").trim();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(eventDate);

    setTimeLeft(getTimeLeft(targetDate));

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hour", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="relative w-full z-10">
      <div className="flex flex-col items-center justify-center pt-[33px] pb-[38px] px-10">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-marcellus text-[28px] text-white text-center leading-[35px]"
        >
          {dayPart.toUpperCase()},
          <br />
          {datePart.toUpperCase()}
        </motion.h2>

        {/* Kotak Countdown */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="grid grid-cols-2 gap-x-[42px] gap-y-[25px] mt-[28px]"
        >
          {items.map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <span className="font-lora text-[41px] text-white leading-none">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="font-lora text-[10px] text-white mt-[3.5px]">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;