"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const EVENT_DATE = "2026-09-12T00:00:00";

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

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(EVENT_DATE);

    setTimeLeft(getTimeLeft(targetDate));

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hour", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="relative w-full z-10 overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/Michael-Vannya/Countdown/BG.webp"
        alt="countdown background"
        fill
        priority={false}
        className="object-cover -z-10"
      />

      {/* Overlay tipis biar teks tetep kebaca di atas foto */}
      <div className="absolute inset-0 bg-black/20 -z-10" />

      <div className="relative flex flex-col items-center justify-center pt-[31px] pb-[38px]">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-times-new-roman text-[24px] text-white text-center"
        >
          SATURDAY, 02 OCTOBER 2026
        </motion.h2>

        <div className="flex flex-row items-center justify-center gap-[15px] mt-[20px]">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              className="flex flex-col items-center justify-center w-[75px] h-[72px] border-[2px] border-white/40 rounded-[6px] backdrop-blur-[1.75px]"
            >
              <span className="font-times-new-roman text-[41px] text-white leading-none">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="font-times-new-roman text-[12px] text-white mt-[0px]">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;