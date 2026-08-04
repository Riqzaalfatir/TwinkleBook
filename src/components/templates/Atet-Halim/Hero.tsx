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
    <section className="relative w-full min-h-screen overflow-hidden lg:overflow-visible">
      {/* <Image
        src="/images/Atet-Halim/Hero/BackgoundKertas.webp"
        alt="background"
        fill
        priority
        className="object-cover"
      /> */}

      <Image
        src="/images/Atet-Halim/hero/BungaKiriAtasD.webp"
        alt="flower decoration"
        width={450}
        height={450}
        className="absolute -top-[3.5vw] lg:-top-[8px] -left-[2vw] lg:left-0 w-[52.56vw] lg:w-[391px] h-auto pointer-events-none z-30"
      />

      <Image
        src="/images/Atet-Halim/hero/BungaKananAtasD.webp"
        alt="flower decoration"
        width={450}
        height={450}
        className="absolute -top-[3.5vw] lg:-top-[8px] -right-[5.8vw] lg:right-0 w-[51.5vw] lg:w-[391px] h-auto pointer-events-none z-30"
      />

      <Image
        src="/images/Atet-Halim/hero/BungaKiriBawahD.webp"
        alt="flower decoration"
        width={300}
        height={300}
        className="absolute -bottom-[13.5vw] lg:-bottom-[175px] left-0 w-[39.23vw] lg:w-[290px] h-auto pointer-events-none z-30"
      />

      <Image
        src="/images/Atet-Halim/hero/BungaKananBawahD.webp"
        alt="flower decoration"
        width={350}
        height={350}
        className="absolute -bottom-[13.5vw] lg:-bottom-[160px] right-0 w-[39.23vw] lg:w-[290px] h-auto pointer-events-none z-30"
      />

      <div className="relative z-20 flex items-center justify-center pt-[0vw] lg:pt-[91px]">
        <div className="relative w-full bg-[url('/images/Atet-Halim/hero/LayerKertas4.webp')] bg-no-repeat [background-size:100%_100%] lg:bg-[url('/images/Atet-Halim/Hero/LayerKertasD.svg')] lg:[background-size:100%_100%]">
          <div className="relative flex flex-col items-center text-center">
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate={start ? "show" : "hidden"}
            >
              <Image
                src="/images/Atet-Halim/hero/LogoD4.webp"
                alt="logo stamp"
                width={220}
                height={220}
                className="w-[24.36vw] h-auto mt-[11vw] lg:w-[199px] lg:-mt-[15px]"
              />
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={start ? "show" : "hidden"}
              transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
              className="font-athelas text-[3.59vw] lg:text-[22px] text-[#402824] pt-[22vw] lg:pt-[29px] leading-[4.5vw] lg:leading-[30px]"
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
              className="font-athelas text-[9.23vw] lg:text-[58px] text-[#402824] pt-[8.5vw] lg:pt-[43px] leading-[10.26vw] lg:leading-[50px] lg:max-w-[580px] break-words"
            >
              ATET <br className="lg:hidden" />
              WIJONO
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={start ? "show" : "hidden"}
              transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
              className="font-athelas text-[7.18vw] lg:text-[48.75px] text-[#402824] pt-[4.10vw] lg:pt-[27px]"
            >
              &
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate={start ? "show" : "hidden"}
              transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
              className="font-athelas text-[9.23vw] lg:text-[58px] text-[#402824] pt-[4.7vw] lg:pt-[28px] leading-[10.26vw] lg:leading-[50px] pb-[67vw] lg:pb-[288px] lg:max-w-[580px] break-words"
            >
              TRISNAWATI <br className="lg:hidden" />
              HALIM
            </motion.h1>

            {/* <p className="font-athelas text-[3.59vw] text-[#402824]">
              05 September 2026
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
