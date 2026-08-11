"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, scaleIn } from "../../../lib/animation";

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
      className="relative w-full z-10 pointer-events-none min-h-screen flex flex-col justify-between"
    >
      {/* Teks ATAS */}
      <div className="relative pt-[103px] text-center leading-none">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={start ? "show" : "hidden"}
          transition={{ duration: 2, ease: "easeOut" }}
          className="font-lora text-[14px] text-[#FEF8EF] uppercase tracking-widest"
        >
          The Wedding of
        </motion.p>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate={start ? "show" : "hidden"}
          transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
          className="font-marcellus text-[36px] uppercase mt-[18.5px] text-white"
        >
          albert & jessica
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={start ? "show" : "hidden"}
          transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
          className="font-lora text-[14px] mt-[18px] leading-5 text-[#FEF8EF]"
        >
          12 . 09 . 2026
        </motion.p>
      </div>

      {/* Teks BAWAH */}
      <div className="relative px-10 pb-[82px] text-center leading-none">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={start ? "show" : "hidden"}
          transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
          className="font-lora text-[14px] leading-[20px] text-[#FEF8EF]"
        >
          "As we begin this new chapter together, <br />
          we promise to love, to grow, and to <br />
          choose each other, always"
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
