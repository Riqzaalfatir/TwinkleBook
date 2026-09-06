"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";
import { DavidNatashaDataProps } from "./types";

type ThankyouProps = {
  data?: DavidNatashaDataProps;
};

const Thankyou = ({ data }: ThankyouProps) => {
  /*
   * Pastikan footerNote benar-benar string.
   * API/type bisa saja mengembalikan {} / null.
   */
  const footerNoteRaw = data?.dataContent?.footerNote;

  const footerNote =
    typeof footerNoteRaw === "string" ? footerNoteRaw.trim() : "";

  const hashTagRaw = data?.dataEvent?.hashTag;
  const hashTag = typeof hashTagRaw === "string" ? hashTagRaw.trim() : "oVIDSYAllytogether";

  return (
    <section className="relative w-full z-10">
      {/* MOBILE TOP DECORATION */}
      <Image
        src="/images/David-Natasha/Thankyou/AsetAtasM.avif"
        alt="flower decoration"
        width={950}
        height={950}
        className="absolute top-[3vw] -left-[0vw] w-[45.5vw] h-auto pointer-events-none z-20 lg:hidden"
      />

      {/* MOBILE BOTTOM DECORATION */}
      <Image
        src="/images/David-Natasha/Thankyou/AsetBawahM.avif"
        alt="flower decoration"
        width={650}
        height={650}
        className="absolute -bottom-[0vw] -right-[0vw] w-[156vw] h-auto pointer-events-none z-20 lg:hidden"
      />

      {/* DESKTOP TOP DECORATION */}
      <Image
        src="/images/David-Natasha/Thankyou/AsetAtasD.avif"
        alt="flower decoration"
        width={950}
        height={950}
        className="absolute top-[0.5vw] -left-[0vw] w-[18.6vw] h-auto pointer-events-none z-20 hidden lg:block"
      />

      {/* DESKTOP BOTTOM DECORATION */}
      <Image
        src="/images/David-Natasha/Thankyou/AsetBawahD.avif"
        alt="flower decoration"
        width={650}
        height={650}
        className="absolute -bottom-[0vw] -right-[0vw] w-[28.9vw] h-auto pointer-events-none z-20 hidden lg:block"
      />

      <div className="relative z-[15] flex flex-col items-center text-center pt-[89.5vw] lg:pt-[228px]">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="font-antic-didone text-[8.72vw] lg:text-[3.04vw] text-[#021125] [--stroke-w:0.3px] lg:[--stroke-w:0.53px] leading-none"
          style={{
            WebkitTextStroke: "var(--stroke-w) #021125",
          }}
        >
          Thank You
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="font-cormorant-garamond text-[3.59vw] lg:text-[1.59vw] text-[#021125] mt-[10.5vw] lg:mt-[4.2vw] leading-[4.5vw] lg:leading-[2vw]"
        >
          {footerNote ? (
            footerNote
          ) : (
            <>
              We look forward to celebrate <br />
              this moment with you <br />
              {hashTag && (
                <span className="inline-block mt-[20px] lg:mt-[29px]">#{hashTag}</span>
              )}
            </>
          )}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="mt-[46.5vw] lg:mt-[13.4vw] mb-[29vw] lg:mb-[10.7vw]"
        >
          <Image
            src="/images/David-Natasha/Thankyou/Provite.avif"
            alt="Provite"
            width={250}
            height={250}
            className="w-[22.82vw] lg:w-[7.41vw] h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Thankyou;
