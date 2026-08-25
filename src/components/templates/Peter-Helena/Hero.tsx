"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { formatDateWithWeekday } from "../../../lib/formatDate";
import { fadeUp } from "../../../lib/animation";

type HeroProps = {
  start?: boolean;
  data?: any;
};

const Hero: React.FC<HeroProps> = ({ start = false, data }) => {
  const groomName = data?.dataEvent?.groomName ?? "Peter";
  const brideName = data?.dataEvent?.brideName ?? "Helena";
  const eventDate = data?.dataEvent?.date
    ? formatDateWithWeekday(data.dataEvent.date)
    : "Sunday, 25 October 2026";
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center"
    >
      <Image
        src="/images/Peter-Helena/Hero/PeterHelenaBG.webp"
        alt="Hero"
        fill
        priority
        className="object-cover object-top"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#201202",
          opacity: 0.5,
          mixBlendMode: "multiply",
        }}
      />

      <div className="relative z-10 text-center px-6">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={start ? "show" : "hidden"}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-cinzel text-[14px] lg:text-[14.18px] text-white uppercase"
        >
          The Wedding of
        </motion.p>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate={start ? "show" : "hidden"}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="font-aston-script  text-white text-[41.23px] lg:text-[41.75px] mt-[23px] lg:mt-[23px]"
        >
          <div className="leading-[63px]">
            {groomName}{" "}
            <span className="text-[26.85px] lg:text-[27.19px] -ml-[5px]">
              &
            </span>
          </div>
          <div className="pl-[25px] pt-[1px] leading-[50px]">{brideName}</div>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={start ? "show" : "hidden"}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          className="font-cinzel text-[14px] lg:text-[14.18px] text-white uppercase mt-[20px] lg:mt-[18.2px]"
        >
          {eventDate}
        </motion.p>
      </div>

      {/* Tombol panah — nempel di bawah section, jaraknya dihitung dari bawah */}
      <div className="absolute bottom-[79px] lg:bottom-[47px] left-0 w-full flex justify-center z-10">
        <motion.a
          href="#profile"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("profile")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          variants={fadeUp}
          initial="hidden"
          animate={start ? "show" : "hidden"}
          transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
          className="cursor-pointer"
        >
          <Image
            src="/gif/Peter-Helena/PanahBawah.gif"
            alt="Scroll Down"
            width={80}
            height={80}
            unoptimized
            draggable={false}
            className="w-[40px] h-[40px] lg:w-[40.51px] lg:h-[40.51px] select-none [-webkit-touch-callout:none]"
          />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;

// SEBELUM DI DINAMISKAN
// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { fadeUp } from "../../../lib/animation";

// type HeroProps = {
//   start?: boolean;
// };

// const Hero: React.FC<HeroProps> = ({ start = false }) => {
//   return (
//     <section
//       id="hero"
//       className="relative w-full min-h-screen flex items-center justify-center"
//     >
//       <Image
//         src="/images/Peter-Helena/Hero/PeterHelenaBG.webp"
//         alt="Hero"
//         fill
//         priority
//         className="object-cover object-top"
//       />

//       {/* Overlay */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundColor: "#201202",
//           opacity: 0.5,
//           mixBlendMode: "multiply",
//         }}
//       />

//       <div className="relative z-10 text-center px-6">
//         <motion.p
//           variants={fadeUp}
//           initial="hidden"
//           animate={start ? "show" : "hidden"}
//           transition={{ duration: 1.2, ease: "easeOut" }}
//           className="font-cinzel text-[14px] lg:text-[14.18px] text-white uppercase"
//         >
//           The Wedding of
//         </motion.p>
//         <motion.h1
//           variants={fadeUp}
//           initial="hidden"
//           animate={start ? "show" : "hidden"}
//           transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
//           className="font-aston-script  text-white text-[41.23px] lg:text-[41.75px] mt-[23px] lg:mt-[23px]"
//         >
//           <div className="leading-[63px]">
//             Peter{" "}
//             <span className="text-[26.85px] lg:text-[27.19px] -ml-[5px]">
//               &
//             </span>
//           </div>
//           <div className="pl-[25px] pt-[1px] leading-[50px]">Helena</div>
//         </motion.h1>
//         <motion.p
//           variants={fadeUp}
//           initial="hidden"
//           animate={start ? "show" : "hidden"}
//           transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
//           className="font-cinzel text-[14px] lg:text-[14.18px] text-white uppercase mt-[20px] lg:mt-[18.2px]"
//         >
//           Sunday, 25 October 2026
//         </motion.p>
//       </div>

//       {/* Tombol panah — nempel di bawah section, jaraknya dihitung dari bawah */}
//       <div className="absolute bottom-[79px] lg:bottom-[47px] left-0 w-full flex justify-center z-10">
//         <motion.a
//           href="#profile"
//           onClick={(e) => {
//             e.preventDefault();
//             document
//               .getElementById("profile")
//               ?.scrollIntoView({ behavior: "smooth" });
//           }}
//           variants={fadeUp}
//           initial="hidden"
//           animate={start ? "show" : "hidden"}
//           transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
//           className="cursor-pointer"
//         >
//           <Image
//             src="/gif/Peter-Helena/PanahBawah.gif"
//             alt="Scroll Down"
//             width={80}
//             height={80}
//             unoptimized
//             draggable={false}
//             className="w-[40px] h-[40px] lg:w-[40.51px] lg:h-[40.51px] select-none [-webkit-touch-callout:none]"
//           />
//         </motion.a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
