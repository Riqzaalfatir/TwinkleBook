"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";
import Image from "next/image";

type HeroProps = {
  start?: boolean;
};

const Hero: React.FC<HeroProps> = ({ start = false }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (start) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [start]);

  return (
    <section
      id="hero"
      className="relative w-full z-10 min-h-screen flex flex-col justify-between overflow-hidden"
    >
      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          muted
          loop
          playsInline
        >
          <source src="/video/Michael-Vannya/VidioMV.mp4" />
        </video>

        {/* LAYER WARNA OVERLAY (dari Figma: #201202 66%) */}
        <div className="absolute inset-0 bg-[#201202] opacity-[0.66]" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </div>

      {/* Teks ATAS */}
      <div className="relative z-10 pt-[120px] lg:pt-[118px] text-center leading-none">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={start ? "show" : "hidden"}
          transition={{ duration: 2, ease: "easeOut" }}
          className="font-times-new-roman text-[14px] lg:text-[20px] text-white uppercase"
        >
          The Wedding of
        </motion.p>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate={start ? "show" : "hidden"}
          transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
          className="font-kinfolk text-[28px] lg:text-[36px] uppercase mt-[11px] text-white leading-none break-words"
        >
          Michael & Vannya
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={start ? "show" : "hidden"}
          transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
          className="font-times-new-roman text-[14px] lg:text-[20px] mt-[12px] lg:mt-[13px] leading-5 text-white break-words px-[8%]"
        >
          02 . 10 . 26
        </motion.p>
      </div>

      {/* Teks BAWAH */}
      <div className="relative z-10 pb-[64px] lg:pb-[102px] text-center leading-none">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={start ? "show" : "hidden"}
          transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
          className="flex justify-center mb-[13px] lg:mb-[32px]"
        >
          <Image
            src="/gif/Michael-Vannya/PanahBawah.gif"
            alt="Scroll Down"
            width={80}
            height={80}
            unoptimized
            className="w-[40px] h-[40px] lg:w-[55px] lg:h-[55px]"
          />
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={start ? "show" : "hidden"}
          transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
          className="font-times-new-roman text-[12px] lg:text-[20px] leading-[17px] lg:leading-[27px] text-white"
        >
          “So they are no longer two, but one flesh. <br />
          What therefore God has joined together, <br className="lg:hidden" />
          let no one separate.”
          <span className="block mt-[10px] lg:mt-[24px]">Matthew 19:6</span>
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
