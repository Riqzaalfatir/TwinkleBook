"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import moment from "moment";
import { fadeUp, fadeIn, scaleIn } from "../../../lib/animation";

type HeroProps = {
  start?: boolean;
  data?: any;
};

const Hero: React.FC<HeroProps> = ({ start = false, data }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (start) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [start]);

  const groomName = data?.dataEvent?.groomName ?? "Albert";
  const brideName = data?.dataEvent?.brideName ?? "Jessica";
  const eventDate = data?.dataEvent?.date
    ? moment(data.dataEvent.date).format("DD . MM . YYYY")
    : "12 . 09 . 2026";

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
          className="font-marcellus text-[36px] uppercase mt-[18.5px] text-white leading-none break-words px-[8%]"
        >
          {groomName} &amp; {brideName}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={start ? "show" : "hidden"}
          transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
          className="font-lora text-[14px] mt-[18px] leading-5 text-[#FEF8EF] break-words px-[8%]"
        >
          {eventDate}
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