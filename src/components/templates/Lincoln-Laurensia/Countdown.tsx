"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeUp,
  fadeLeft,
  fadeRight,
  stagger,
} from "../../../lib/animation";

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
  const distance = targetDate.getTime() - new Date().getTime();

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

const pad = (n: number) => String(n).padStart(2, "0");

// Format lokal tanpa konversi zona waktu: YYYYMMDDTHHMMSS
const toCalendarDate = (d: Date) =>
  `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}` +
  `T${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;

function buildCalendarUrl(data: any, eventDate: string) {
  const start = new Date(eventDate);
  const end = new Date(start.getTime() + 4 * 60 * 60 * 1000); // durasi 4 jam (tebakan)

  const title =
    data?.dataEvent?.name ??
    `The Wedding of ${data?.dataEvent?.groomName ?? "Lincoln"} & ${
      data?.dataEvent?.brideName ?? "Laurensia"
    }`;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${toCalendarDate(start)}/${toCalendarDate(end)}`,
    ctz: "Asia/Jakarta",
    details: data?.dataEvent?.url
      ? `Undangan: https://provite.id/${data.dataEvent.url}`
      : "",
    location: "Imah Seniman, Jl. Kolonel Masturi No. VIII, Kab. Bandung",
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

const Countdown = ({ data }: CountdownProps) => {
  const eventDate = data?.dataEvent?.date ?? "2026-11-28T18:00:44";
  const calendarUrl = buildCalendarUrl(data, eventDate);

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
    <section
      id="countdown"
      className="relative z-10 w-full overflow-hidden text-white"
    >
      <Image
        src="/images/Lincoln-Laurensia/Countdown/BgMobile.webp"
        alt="Countdown background"
        fill
        className="-z-10 object-cover object-top lg:hidden"
      />
      <Image
        src="/images/Lincoln-Laurensia/Countdown/BgDekstop.webp"
        alt="Countdown background"
        fill
        className="-z-10 hidden object-cover object-top lg:block"
      />
      <div className="absolute inset-0 -z-10 bg-black/30" />

      <div className="relative flex flex-col items-center px-[5.13vw] pt-[18vw] pb-[89vw] lg:px-0 lg:pt-[7.5vw] lg:pb-[33.5vw]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-start justify-center gap-[6.2vw] lg:gap-[2.5vw]"
        >
          {items.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="flex flex-col items-center lg:gap-[3px]"
            >
              <span className="font-poppins text-[10.26vw] font-medium leading-none lg:text-[4.23vw]">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="mt-[2.2vw] font-poppins text-[3.08vw] lg:mt-0 lg:text-[1.19vw]">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.a
        variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 1.5, ease: "easeOut" }}
          href={calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-[9vw] flex h-[7.44vw] w-[41.03vw] items-center justify-center bg-[#605C5C82]/50 font-poppins text-[3.08vw] uppercase tracking-wide text-[#FEFBF0] lg:mt-[2.25vw] lg:h-[1.98vw] lg:w-[18.25vw] lg:text-[1.32vw]"
        >
          Mark Your Calendar
        </motion.a>
      </div>
    </section>
  );
};

export default Countdown;

// SEBELUM DI DINAMISKAN
// import React from "react";
// import Image from "next/image";

// const items = [
//   { label: "Days", value: "59" },
//   { label: "Hour", value: "59" },
//   { label: "Minutes", value: "59" },
//   { label: "Seconds", value: "59" },
// ];

// const Countdown = () => {
//   return (
//     <section
//       id="countdown"
//       className="relative z-10 w-full overflow-hidden text-white"
//     >
//       <Image
//         src="/images/Lincoln-Laurensia/Countdown/BgMobile.webp"
//         alt="Countdown background"
//         fill
//         className="-z-10 object-cover object-top lg:hidden"
//       />
//       <Image
//         src="/images/Lincoln-Laurensia/Countdown/BgDekstop.webp"
//         alt="Countdown background"
//         fill
//         className="-z-10 hidden object-cover object-top lg:block"
//       />
//       <div className="absolute inset-0 -z-10 bg-black/30" />

//       <div className="relative flex flex-col items-center px-[5.13vw] pt-[16.1vw] pb-[86vw] lg:px-0 lg:pt-[7.5vw] lg:pb-[33.5vw]">
//         <div className="flex items-start justify-center gap-[4.25vw] lg:gap-[2.25vw]">
//           {items.map((item) => (
//             <div
//               key={item.label}
//               className="flex flex-col items-center lg:gap-[3px]"
//             >
//               <span className="font-poppins text-[10.26vw] font-medium leading-none lg:text-[4.23vw]">
//                 {item.value}
//               </span>
//               <span className="mt-[2.2vw] font-poppins text-[3.08vw] lg:mt-0 lg:text-[1.19vw]">
//                 {item.label}
//               </span>
//             </div>
//           ))}
//         </div>

//         <a
//           href="#"
//           className="mt-[8vw] flex h-[7.44vw] w-[41.03vw] items-center justify-center bg-[#605C5C82]/50 font-poppins text-[3.08vw] uppercase tracking-wide text-[#FEFBF0] lg:mt-[2.25vw] lg:h-[1.98vw] lg:w-[18.25vw] lg:text-[1.32vw]"
//         >
//           Mark Your Calendar
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Countdown;

// SEBELUM DI VW KAN
// import React from "react";
// import Image from "next/image";

// const items = [
//   { label: "Days", value: "59" },
//   { label: "Hour", value: "59" },
//   { label: "Minutes", value: "59" },
//   { label: "Seconds", value: "59" },
// ];

// const Countdown = () => {
//   return (
//     <section
//       id="countdown"
//       className="relative z-10 w-full overflow-hidden text-white"
//     >
//       <Image
//         src="/images/Lincoln-Laurensia/Countdown/BgMobile.webp"
//         alt="Countdown background"
//         fill
//         className="-z-10 object-cover object-bottom lg:hidden"
//       />
//       <Image
//         src="/images/Lincoln-Laurensia/Countdown/BgDekstop.webp"
//         alt="Countdown background"
//         fill
//         className="-z-10 hidden object-cover object-top lg:block"
//       />
//       <div className="absolute inset-0 -z-10 bg-black/30" />

//       <div className="relative flex min-h-[595px] flex-col items-center px-5 pt-10 lg:min-h-[640px] lg:pt-[100px]">
//         <div className="flex items-start justify-center gap-5 lg:gap-[25.79px]">
//           {items.map((item) => (
//             <div key={item.label} className="flex flex-col items-center">
//               <span className="font-poppins text-[40px] font-medium leading-none lg:text-[64px]">
//                 {item.value}
//               </span>
//               <span className="mt-2 lg:mt-0 font-poppins text-[12px]  lg:text-[18px]">
//                 {item.label}
//               </span>
//             </div>
//           ))}
//         </div>

//         <a
//           href="#"
//           className="mt-8 bg-[#605C5C82]/50 w-[276px] h-[30px] font-poppins text-[12px] uppercase tracking-wide lg:mt-[35.63px] lg:text-[20px] flex items-center justify-center text-[#FEFBF0]"
//         >
//           Mark Your Calendar
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Countdown;
