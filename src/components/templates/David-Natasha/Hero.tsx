"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, scaleIn } from "../../../lib/animation";

type HeroProps = {
  start?: boolean;
};

const Hero = ({ start = false }: HeroProps) => {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">

      {/* MOBILE */}
      <Image
        src="/images/David-Natasha/Hero/DNBackground.webp"
        alt="Hero Background"
        fill
        priority
        className="object-cover object-top lg:hidden"
      />

      {/* DEKSTOP */}
       <Image
        src="/images/David-Natasha/Hero/DNBackgroundD.webp"
        alt="Hero Background"
        fill
        priority
        className="object-cover object-bottom hidden lg:block"
      />

      <div className="absolute top-0 left-0 w-full h-[500px] lg:h-[600px] z-[5] bg-gradient-to-b from-white to-white/0" />

      <div className="relative z-10 w-full h-full flex flex-col items-center leading-none pt-[18vw] lg:pt-[6.55vw]">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate={start ? "show" : "hidden"}
        >
          <Image
            src="/images/David-Natasha/Hero/DNLOGOO.webp"
            alt="David & Natasya Logo"
            width={550}
            height={550}
            className="w-[21.28vw] lg:w-[7.94vw] h-auto"
          />
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={start ? "show" : "hidden"}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          className="font-cormorant-garamond font-medium text-[4.10vw] lg:text-[1.46vw] text-[#021125] mt-[14.5vw] lg:mt-[4.87vw]"
        >
          THE WEDDING OF
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate={start ? "show" : "hidden"}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          className="font-sackers-italic-script font-normal text-[12.31vw] lg:text-[6.35vw] text-[#021125] mt-[2.82vw] lg:mt-[1.2vw]"
        >
          David & Natasya
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={start ? "show" : "hidden"}
          transition={{ duration: 2, ease: "easeOut", delay: 0.7 }}
          className="font-cormorant-garamond text-[4.62vw] lg:text-[1.72vw] font-medium text-[#021125] mt-[2.7vw] lg:mt-[0.8vw]"
        >
          10 . 10 . 26
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;

// UKURAN SEBELUM DI UBAH KE VW
// import React from "react";
// import Image from "next/image";

// const Hero = () => {
//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       <Image
//         src="/images/David-Natasha/Hero/DNBackground.webp"
//         alt="Hero Background"
//         fill
//         priority
//         className="object-cover"
//       />

//       <div className="relative z-10 w-full h-full flex flex-col items-center leading-none pt-[72.5px]">
//         <Image
//           src="/images/David-Natasha/Hero/DNLOGOO.webp"
//           alt="David & Natasya Logo"
//           width={200}
//           height={200}
//           className="w-[83px] h-auto"
//         />

//         <p className="font-cormorant-garamond font-medium text-[16px]  text-[#021125] mt-[59px]">
//           THE WEDDING OF
//         </p>

//         <h1 className="font-sackers-italic-script font-normal text-[48px] text-[#021125] mt-[11px]">
//           David & Natasya
//         </h1>

//         <p className="font-cormorant-garamond text-[18px] font-medium  text-[#021125] mt-[12px]">
//           10 . 10 . 26
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Hero;
