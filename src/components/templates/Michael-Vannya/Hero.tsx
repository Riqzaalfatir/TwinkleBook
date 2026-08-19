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
      className="relative w-full z-10 min-h-screen flex flex-col justify-between"
    >
      {/* Teks ATAS */}
      <div className="relative pt-[120px] text-center leading-none">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={start ? "show" : "hidden"}
          transition={{ duration: 2, ease: "easeOut" }}
          className="font-times-new-roman text-[14px] text-white uppercase"
        >
          The Wedding of
        </motion.p>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate={start ? "show" : "hidden"}
          transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
          className="font-kinfolk text-[28px] uppercase mt-[11px] text-white leading-none break-words"
        >
          Michael & Vannya
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={start ? "show" : "hidden"}
          transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
          className="font-times-new-roman text-[14px] mt-[12px] leading-5 text-white break-words px-[8%]"
        >
          02 . 10 . 26
        </motion.p>
      </div>

      {/* Teks BAWAH */}
      <div className="relative pb-[54px] text-center leading-none">
        {/* GIF Arrow */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={start ? "show" : "hidden"}
          transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
          className="flex justify-center mb-[13px]"
        >
          <Image
            src="/gif/Michael-Vannya/PanahKeBawah.gif"
            alt="Scroll Down"
            width={40}
            height={40}
            unoptimized
            className="w-[40px] h-[40px]"
          />
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={start ? "show" : "hidden"}
          transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
          className="font-times-new-roman text-[12px] leading-[17px] text-white"
        >
          “So they are no longer two, but one flesh. <br />
          What therefore God has joined together, <br />
          let no one separate.”
          <span className="block text-[12px] mt-[10px]">Matthew 19:6</span>
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
