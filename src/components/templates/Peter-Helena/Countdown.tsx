"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";
import { formatDateWithWeekday } from "../../../lib/formatDate";

type CountdownProps = {
  data?: any;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = targetDate.getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const Countdown = ({ data }: CountdownProps) => {
  const eventDate = data?.dataEvent?.date ?? "2026-10-25T00:00:00";
  const targetDate = new Date(eventDate);

  const dateLabel = formatDateWithWeekday(eventDate); // ex: "Sunday, 25 October 2026"
  const [dayPart, ...restParts] = dateLabel.split(",");
  const weekday = dayPart.trim();
  const datePart = restParts.join(",").trim();
  const [dayNumber, monthWord, yearWord] = datePart.split(" ");

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(targetDate)); // langsung set begitu mount, hindari flash "00"

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const items = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOUR", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

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
          <span className="font-cinzel-decorative">{weekday.charAt(0)}</span>
          {weekday.slice(1)}, <br />
          {dayNumber} <span className="font-cinzel-decorative ">{monthWord.charAt(0)}</span>
          {monthWord.slice(1)} {yearWord}
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






// SEBELUM DI DINAMISKAN
// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { fadeUp } from "../../../lib/animation";

// const TARGET_DATE = new Date("2026-10-25T00:00:00");

// type TimeLeft = {
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// };

// const calculateTimeLeft = (): TimeLeft => {
//   const difference = TARGET_DATE.getTime() - new Date().getTime();

//   if (difference <= 0) {
//     return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//   }

//   return {
//     days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//     hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//     minutes: Math.floor((difference / 1000 / 60) % 60),
//     seconds: Math.floor((difference / 1000) % 60),
//   };
// };

// const Countdown = () => {
//   const [timeLeft, setTimeLeft] = useState<TimeLeft>({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     setTimeLeft(calculateTimeLeft()); // langsung set begitu mount, hindari flash "00"

//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const items = [
//     { label: "DAYS", value: timeLeft.days },
//     { label: "HOUR", value: timeLeft.hours },
//     { label: "MINUTES", value: timeLeft.minutes },
//     { label: "SECONDS", value: timeLeft.seconds },
//   ];

//   return (
//     <div
//       id="countdown"
//       className="relative w-full h-[406px] lg:h-[411.14px] overflow-hidden"
//     >
//       <Image
//         src="/images/Peter-Helena/Countdown/PeterHelenaBG.webp"
//         alt="Countdown"
//         fill
//         className="object-cover rounded-t-[20px] rounded-b-none object-top"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/[0.59] rounded-t-[20px] rounded-b-none" />
//       <div className="relative z-10 flex flex-col items-center justify-center h-full pt-[78px] lg:pt-[73px] pb-[38px]">
//         <motion.h2
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           className="font-cinzel text-[32px] lg:text-[32.41px] text-white text-center leading-[35px] uppercase"
//         >
//           <span className="font-cinzel-decorative">S</span>unday, <br />
//           25 <span className="font-cinzel-decorative ">O</span>ctober 2026
//         </motion.h2>

//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           className="grid grid-cols-2 gap-x-[42px] gap-y-[30px] lg:gap-y-[29px] mt-[29px] lg:mt-[27px]"
//         >
//           {items.map((item) => (
//             <div key={item.label} className="flex flex-col items-center">
//               <span className="font-cinzel text-[41.94px] lg:text-[42.47px] text-white leading-none">
//                 {String(item.value).padStart(2, "0")}
//               </span>
//               <span className="font-cinzel font-bold text-[10px] lg:text-[10.13px] text-white mt-[2px] lg:mt-[1.5px]">
//                 {item.label}
//               </span>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Countdown;