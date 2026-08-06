// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { fadeUp, fadeIn, scaleIn } from "../../../lib/animation";

// type HeroProps = {
//   data?: unknown;
//   start?: boolean;
//   groomFullName?: string;
//   brideFullName?: string;
//   date?: string;
// };

// const Hero = ({
//   data,
//   start = false,
//   groomFullName = "GROOM NAME",
//   brideFullName = "BRIDE NAME",
//   date = "00 Month 0000",
// }: HeroProps) => {
//   return (
//     <section
//       id="hero"
//       className="relative w-full min-h-screen overflow-hidden lg:overflow-visible"
//     >
//       {/* <Image
//         src="/images/Atet-Halim/Hero/BackgoundKertas.webp"
//         alt="background"
//         fill
//         priority
//         className="object-cover"
//       /> */}

//       <Image
//         src="/images/Atet-Halim/Hero/BungaKiriAtasD.webp"
//         alt="flower decoration"
//         width={450}
//         height={450}
//         className="absolute -top-[3.5vw] lg:-top-[0.53vw] -left-[2vw] lg:-left-[0.2vw] w-[50.5vw] lg:w-[25.83vw] h-auto pointer-events-none z-30"
//       />

//       <Image
//         src="/images/Atet-Halim/Hero/BungaKananAtasD.webp"
//         alt="flower decoration"
//         width={450}
//         height={450}
//         className="absolute -top-[3.5vw] lg:-top-[0.5vw] -right-[5.8vw] lg:right-0 w-[50.5vw] lg:w-[25.83vw] h-auto pointer-events-none z-30"
//       />

//       <Image
//         src="/images/Atet-Halim/Hero/BungaKiriBawahD.webp"
//         alt="flower decoration"
//         width={300}
//         height={300}
//         className="absolute -bottom-[13.5vw] lg:-bottom-[11.56vw] left-0 w-[39.23vw] lg:w-[19.15vw] h-auto pointer-events-none z-30"
//       />

//       <Image
//         src="/images/Atet-Halim/Hero/BungaKananBawahD.webp"
//         alt="flower decoration"
//         width={350}
//         height={350}
//         className="absolute -bottom-[13.5vw] lg:-bottom-[11vw] right-0 w-[39.23vw] lg:w-[19.15vw] h-auto pointer-events-none z-30"
//       />

//       <div className="relative z-20 flex items-center justify-center pt-[0vw] lg:pt-[6.01vw]">
//         <div className="relative w-full bg-[url('/images/Atet-Halim/Hero/LayerKertas4.webp')] bg-no-repeat [background-size:100%_100%] lg:bg-[url('/images/Atet-Halim/Hero/ateskertas.webp')] lg:[background-size:100%_100%]">
//           <div className="relative flex flex-col items-center text-center">
//             <motion.div
//               variants={scaleIn}
//               initial="hidden"
//               animate={start ? "show" : "hidden"}
//             >
//               <Image
//                 src="/images/Atet-Halim/Hero/LogoD4.webp"
//                 alt="logo stamp"
//                 width={220}
//                 height={220}
//                 className="w-[24.36vw] h-auto mt-[11vw] lg:w-[13vw] lg:-mt-[0.99vw]"
//               />
//             </motion.div>

//             <motion.p
//               variants={fadeUp}
//               initial="hidden"
//               animate={start ? "show" : "hidden"}
//               transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
//               className="font-athelas text-[3.59vw] lg:text-[1.45vw] text-[#402824] pt-[22vw] lg:pt-[1.7vw] leading-[4.5vw] lg:leading-[1.98vw]"
//             >
//               We cordially invite you <br className="lg:hidden" />
//               to celebrate our <br />
//               50th Wedding Anniversary
//             </motion.p>

//             <motion.h1
//               variants={fadeUp}
//               initial="hidden"
//               animate={start ? "show" : "hidden"}
//               transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
//               className="font-athelas text-[9.23vw] lg:text-[3.83vw] text-[#402824] pt-[8.5vw] lg:pt-[2.7vw] leading-[10.26vw] lg:leading-[3.30vw] lg:max-w-[38.31vw] break-words"
//             >
//               {groomFullName.toUpperCase()}
//             </motion.h1>

//             <motion.p
//               variants={fadeUp}
//               initial="hidden"
//               animate={start ? "show" : "hidden"}
//               transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
//               className="font-athelas text-[7.18vw] lg:text-[3.22vw] text-[#402824] pt-[4.10vw] lg:pt-[1.78vw]"
//             >
//               &
//             </motion.p>

//             <motion.h1
//               variants={fadeUp}
//               initial="hidden"
//               animate={start ? "show" : "hidden"}
//               transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
//               className="font-athelas text-[9.23vw] lg:text-[3.83vw] text-[#402824] pt-[4.7vw] lg:pt-[1.78vw] leading-[10.26vw] lg:leading-[3.30vw] lg:max-w-[38.31vw] break-words"
//             >
//               {brideFullName.toUpperCase()}
//             </motion.h1>

//             <motion.p
//               variants={fadeUp}
//               initial="hidden"
//               animate={start ? "show" : "hidden"}
//               transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
//               className="font-athelas text-[3.59vw] text-[#402824] pt-[8.5vw] lg:text-[1.45vw] lg:pt-[2.7vw] pb-[52.8vw] lg:pb-[14vw]"
//             >
//               {date}
//             </motion.p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// SBELUM DI DINAMISKAN
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, scaleIn } from "../../../lib/animation";

type HeroProps = {
  data?: unknown;
  start?: boolean;
};

const Hero = ({ data, start = false }: HeroProps) => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden lg:overflow-visible"
    >
      {/* <Image
        src="/images/Atet-Halim/Hero/BackgoundKertas.webp"
        alt="background"
        fill
        priority
        className="object-cover"
      /> */}

      <Image
        src="/images/Atet-Halim/Hero/BungaKiriAtasD.webp"
        alt="flower decoration"
        width={450}
        height={450}
        className="absolute -top-[3.5vw] lg:-top-[0.53vw] -left-[2vw] lg:-left-[0.2vw] w-[50.5vw] lg:w-[25.83vw] h-auto pointer-events-none z-30"
      />

      <Image
        src="/images/Atet-Halim/Hero/BungaKananAtasD.webp"
        alt="flower decoration"
        width={450}
        height={450}
        className="absolute -top-[3.5vw] lg:-top-[0.5vw] -right-[5.8vw] lg:right-0 w-[50.5vw] lg:w-[25.83vw] h-auto pointer-events-none z-30"
      />

      <Image
        src="/images/Atet-Halim/Hero/BungaKiriBawahD.webp"
        alt="flower decoration"
        width={300}
        height={300}
        className="absolute -bottom-[13.5vw] lg:-bottom-[11.56vw] left-0 w-[39.23vw] lg:w-[19.15vw] h-auto pointer-events-none z-30"
      />

      <Image
        src="/images/Atet-Halim/Hero/BungaKananBawahD.webp"
        alt="flower decoration"
        width={350}
        height={350}
        className="absolute -bottom-[13.5vw] lg:-bottom-[11vw] right-0 w-[39.23vw] lg:w-[19.15vw] h-auto pointer-events-none z-30"
      />

      <div className="relative z-20 flex items-center justify-center pt-[0vw] lg:pt-[6.01vw]">
        <div className="relative w-full bg-[url('/images/Atet-Halim/Hero/LayerKertas4.webp')] bg-no-repeat [background-size:100%_100%] lg:bg-[url('/images/Atet-Halim/Hero/ateskertas.webp')] lg:[background-size:100%_100%]">
          <div className="relative flex flex-col items-center text-center">
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate={start ? "show" : "hidden"}
            >
              <Image
                src="/images/Atet-Halim/Hero/LogoD4.webp"
                alt="logo stamp"
                width={220}
                height={220}
                className="w-[24.36vw] h-auto mt-[11vw] lg:w-[13vw] lg:-mt-[0.99vw]"
              />
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={start ? "show" : "hidden"}
              transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
              className="font-athelas text-[3.59vw] lg:text-[1.45vw] text-[#402824] pt-[22vw] lg:pt-[1.7vw] leading-[4.5vw] lg:leading-[1.98vw]"
            >
              We cordially invite you <br className="lg:hidden" />
              to celebrate our <br />
              50th Wedding Anniversary
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate={start ? "show" : "hidden"}
              transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
              className="font-athelas text-[9.23vw] lg:text-[3.83vw] text-[#402824] pt-[8.5vw] lg:pt-[2.7vw] leading-[10.26vw] lg:leading-[3.30vw] lg:max-w-[38.31vw] break-words"
            >
              ATET <br className="lg:hidden" />
              WIJONO
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={start ? "show" : "hidden"}
              transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
              className="font-athelas text-[7.18vw] lg:text-[3.22vw] text-[#402824] pt-[4.10vw] lg:pt-[1.78vw]"
            >
              &
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate={start ? "show" : "hidden"}
              transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
              className="font-athelas text-[9.23vw] lg:text-[3.83vw] text-[#402824] pt-[4.7vw] lg:pt-[1.78vw] leading-[10.26vw] lg:leading-[3.30vw] lg:max-w-[38.31vw] break-words"
            >
              TRISNAWATI <br className="lg:hidden" />
              HALIM
            </motion.h1>

            <motion.p
            variants={fadeUp}
              initial="hidden"
              animate={start ? "show" : "hidden"}
              transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
            className="font-athelas text-[3.59vw] text-[#402824] pt-[8.5vw] lg:text-[1.45vw] lg:pt-[2.7vw] pb-[52.8vw] lg:pb-[14vw]">
              05 September 2026
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
