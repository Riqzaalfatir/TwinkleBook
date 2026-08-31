"use client";

import React from "react";
import Countdown from "react-countdown";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";

const TARGET_DATE = new Date("2026-10-10T00:00:00");

const CountdownSection = () => {
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
        SATURDAY, 10 October 2026
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

// UKURAN SEBELUM DI KE VW KAN
// import React from "react";
// import Image from "next/image";

// const Countdown = () => {
//   return (
//     <section className="relative w-full bg-[#080225] flex flex-col items-center py-[30px] z-30">
//       <h2 className="font-cormorant-garamond font-semibold text-[24px] text-white tracking-wide">
//         SATURDAY, 10 October 2026
//       </h2>

//       <div className="flex flex-row items-center gap-[14.98px] mt-[14px]">
//         <div className="flex flex-col items-center justify-center  w-[73.39px] h-[71.89px] bg-white rounded-[6px] gap-[10px]">
//           <span className="font-cormorant-garamond text-[41.94px] text-[#080225] leading-none -mt-[10px]">
//             59
//           </span>
//           <span className="font-cormorant-garamond text-[12px] text-[#080225]">
//             Days
//           </span>
//         </div>

//         <div className="flex flex-col items-center justify-center w-[73.39px] h-[71.89px] bg-white rounded-[6px]">
//           <span className="font-cormorant-garamond text-[41.94px] text-[#080225] leading-none">
//             59
//           </span>
//           <span className="font-cormorant-garamond text-[12px] text-[#080225]">
//             Hour
//           </span>
//         </div>

//         <div className="flex flex-col items-center justify-center w-[73.39px] h-[71.89px] bg-white rounded-[6px]">
//           <span className="font-cormorant-garamond text-[41.94px] text-[#080225] leading-none">
//             59
//           </span>
//           <span className="font-cormorant-garamond text-[12px] text-[#080225]">
//             Minutes
//           </span>
//         </div>

//         <div className="flex flex-col items-center justify-center w-[73.39px] h-[71.89px] bg-white rounded-[6px]">
//           <span className="font-cormorant-garamond text-[41.94px] text-[#080225] leading-none">
//             59
//           </span>
//           <span className="font-cormorant-garamond text-[12px] text-[#080225]">
//             Seconds
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Countdown;
