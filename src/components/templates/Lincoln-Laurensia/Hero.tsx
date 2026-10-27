import React from "react";
import Image from "next/image";
import moment from "moment";
import { motion } from "framer-motion";
import { fadeIn, fadeUp, fadeLeft, fadeRight } from "../../../lib/animation";

type HeroProps = {
  data?: any;
  start?: boolean;
};

const Hero = ({ data, start = true }: HeroProps) => {
  const groomName = data?.dataEvent?.groomName ?? "Lincoln";
  const brideName = data?.dataEvent?.brideName ?? "Laurensia";

  const date = data?.dataEvent?.date ? moment(data.dataEvent.date) : null;
  const day = date ? date.format("DD") : "28";
  const month = date ? date.format("MM") : "11";
  const year = date ? date.format("YY") : "26";

  const hashTag = data?.dataEvent?.hashTag ?? "kencenbersama";

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col justify-end overflow-hidden text-white"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Lincoln-Laurensia/Hero/HeroBG.webp"
          alt={`${groomName} & ${brideName}`}
          fill
          priority
          className="object-cover object-top lg:hidden"
        />
        <Image
          src="/images/Lincoln-Laurensia/Hero/HeroBGD.webp"
          alt={`${groomName} & ${brideName}`}
          fill
          priority
          className="object-cover object-top hidden lg:block"
        />
        <div className="absolute bottom-0 left-0 hidden h-[52.65vw] w-full lg:block bg-[linear-gradient(to_top,rgba(0,0,0,1)_0%,rgba(0,0,0,0.55)_33%,rgba(0,0,0,0.39)_66%,rgba(0,0,0,0)_100%)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center pt-[129.49vw] pb-[20.51vw] lg:pt-[35.71vw] lg:pb-[24.47vw] text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={start ? "show" : "hidden"}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-poppins text-[3.59vw] lg:text-[1.46vw] font-light uppercase tracking-[12%]"
        >
          The Wedding of
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate={start ? "show" : "hidden"}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mt-[2.05vw] lg:mt-[0.73vw] font-overpass text-[9.23vw] lg:text-[3.44vw] uppercase leading-[1] lg:leading-[3.64vw] lg:tracking-wide"
        >
          <span className="block text-left pl-[0.77vw] lg:pr-[3.97vw]">
            {groomName} <span>&</span>
          </span>
          <span className="block text-right pl-[10.26vw] lg:pl-[3.97vw]">
            {brideName}
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={start ? "show" : "hidden"}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mt-[7.44vw] lg:mt-[1.92vw] font-poppins text-[3.59vw] lg:text-[1.46vw] italic"
        >
          #KENCENbersama
        </motion.p>

        <div className="mt-[1.54vw] lg:mt-[0.66vw] font-poppins text-[5.13vw] lg:text-[1.85vw] italic flex items-center justify-center gap-[6.41vw] lg:gap-[2.25vw]">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate={start ? "show" : "hidden"}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0 }}
          >
            {day}
          </motion.span>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate={start ? "show" : "hidden"}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.15 }}
          >
            {month}
          </motion.span>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate={start ? "show" : "hidden"}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          >
            {year}
          </motion.span>
        </div>

        <motion.a
          variants={fadeUp}
          initial="hidden"
          animate={start ? "show" : "hidden"}
          transition={{ duration: 1.5, ease: "easeOut" }}
          href="#profile"
          aria-label="Scroll down"
          className="mt-[12.82vw] lg:mt-[2.12vw] flex justify-center"
        >
          <Image
            src="/gif/Lincoln-Laurensia/PanahBawah.gif"
            alt="Scroll Down"
            width={80}
            height={80}
            unoptimized
            draggable={false}
            className="h-[10.26vw] w-[10.26vw] lg:h-[2.65vw] lg:w-[2.65vw] select-none [-webkit-touch-callout:none]"
          />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;

// SEBELUM DI DINAMISKAN
// import React from "react";
// import Image from "next/image";

// const Hero = () => {
//   return (
//     <section
//       id="hero"
//       className="relative flex min-h-screen w-full flex-col justify-end overflow-hidden text-white"
//     >
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/images/Lincoln-Laurensia/Hero/HeroBG.webp"
//           alt="Lincoln & Laurensia"
//           fill
//           priority
//           className="object-cover object-center lg:hidden"
//         />
//         <Image
//           src="/images/Lincoln-Laurensia/Hero/HeroBGD.webp"
//           alt="Lincoln & Laurensia"
//           fill
//           priority
//           className="object-cover object-top hidden lg:block"
//         />
//         <div className="absolute bottom-0 left-0 hidden h-[52.65vw] w-full lg:block bg-[linear-gradient(to_top,rgba(0,0,0,1)_0%,rgba(0,0,0,0.55)_33%,rgba(0,0,0,0.39)_66%,rgba(0,0,0,0)_100%)]" />
//       </div>

//       <div className="relative z-10 flex flex-col items-center pt-[129.49vw] pb-[20.51vw] lg:pt-[35.71vw] lg:pb-[24.47vw] text-center">
//         <p className="font-poppins text-[3.59vw] lg:text-[1.46vw] font-light uppercase tracking-[12%]">
//           The Wedding of
//         </p>

//         <h1 className="mt-[2.05vw] lg:mt-[0.73vw] font-overpass text-[9.23vw] lg:text-[3.44vw] uppercase leading-[1] lg:leading-[3.64vw] lg:tracking-wide">
//           <p className="block text-left pl-[0.77vw] lg:pr-[3.97vw]">
//             Lincoln <span className="">&</span>
//           </p>
//           <p className="block text-right pl-[10.26vw] lg:pl-[3.97vw]">
//             Laurensia
//           </p>
//         </h1>

//         <p className="mt-[7.44vw] lg:mt-[1.92vw] font-poppins text-[3.59vw] lg:text-[1.46vw] italic">
//           #KENCENbersama
//         </p>

//         <p className="mt-[1.54vw] lg:mt-[0.66vw] font-poppins text-[5.13vw] lg:text-[1.85vw] italic flex items-center justify-center gap-[6.41vw] lg:gap-[2.25vw]">
//           <p>28</p>
//           <p>11</p>
//           <p>26</p>
//         </p>

//         <a
//           href="#profile"
//           aria-label="Scroll down"
//           className="mt-[12.82vw] lg:mt-[2.12vw] flex justify-center"
//         >
//           <Image
//             src="/gif/Lincoln-Laurensia/PanahBawah.gif"
//             alt="Scroll Down"
//             width={80}
//             height={80}
//             unoptimized
//             draggable={false}
//             className="h-[10.26vw] w-[10.26vw] lg:h-[2.65vw] lg:w-[2.65vw] select-none [-webkit-touch-callout:none]"
//           />
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// SUDAH DETAILING, SEBELUM DI VW KAN
// import React from "react";
// import Image from "next/image";

// const Hero = () => {
//   return (
//     <section
//       id="hero"
//       className="relative flex min-h-screen w-full flex-col justify-end overflow-hidden text-white"
//     >
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/images/Lincoln-Laurensia/Hero/HeroBG.webp"
//           alt="Lincoln & Laurensia"
//           fill
//           priority
//           className="object-cover object-center lg:hidden"
//         />
//         <Image
//           src="/images/Lincoln-Laurensia/Hero/HeroBGD.webp"
//           alt="Lincoln & Laurensia"
//           fill
//           priority
//           className="object-cover object-top hidden lg:block"
//         />
//         {/* <div className="absolute inset-0 bg-black/30" /> */}
//         <div className="absolute bottom-0 left-0 hidden h-[796px] w-full lg:block bg-[linear-gradient(to_top,rgba(0,0,0,1)_0%,rgba(0,0,0,0.55)_33%,rgba(0,0,0,0.39)_66%,rgba(0,0,0,0)_100%)]" />{" "}
//       </div>

//       <div className="relative z-10 flex flex-col items-center pt-[505px] pb-[80px] lg:pt-[540px] lg:pb-[370px] text-center">
//         <p className="font-poppins text-[14px] lg:text-[22px] font-light uppercase tracking-[12%]">
//           The Wedding of
//         </p>

//         <h1 className="mt-[8px] lg:mt-[11px] font-overpass text-[36px] lg:text-[52px] uppercase leading-[1] lg:leading-[55px] lg:tracking-wide">
//           <p className="block text-left pl-[3px] lg:pr-[60px]">
//             Lincoln <span className="">&</span>
//           </p>
//           <p className="block text-right pl-[40px] lg:pl-[60px]">Laurensia</p>
//         </h1>

//         <p className="mt-[29px] lg:mt-[29px] font-poppins text-[14px] lg:text-[22px] italic">
//           #KENCENbersama
//         </p>

//         <p className="mt-[6px] lg:mt-[10px] font-poppins text-[20px] lg:text-[28px] italic flex items-center justify-center gap-[25px] lg:gap-[34px]">
//           <p>28</p>
//           <p>11</p>
//           <p>26</p>
//         </p>

//         <a
//           href="#profile"
//           aria-label="Scroll down"
//           className="mt-[50px] lg:mt-[32px] flex justify-center"
//         >
//           <Image
//             src="/gif/Lincoln-Laurensia/PanahBawah.gif"
//             alt="Scroll Down"
//             width={80}
//             height={80}
//             unoptimized
//             draggable={false}
//             className="h-[40px] w-[40px] select-none [-webkit-touch-callout:none]"
//           />
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
