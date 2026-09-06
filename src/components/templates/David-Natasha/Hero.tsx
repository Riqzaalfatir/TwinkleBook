"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import moment from "moment";
import { fadeUp, scaleIn } from "../../../lib/animation";
import { DavidNatashaDataProps } from "./types";

type HeroProps = {
  start?: boolean;
  data?: DavidNatashaDataProps;
};

const Hero = ({ start = false, data }: HeroProps) => {
  const groomName = data?.dataEvent?.groomName ?? "David";
  const brideName = data?.dataEvent?.brideName ?? "Natasya";

  const eventDate = data?.dataEvent?.date
    ? moment(data.dataEvent.date).format("DD . MM . YY")
    : "10 . 10 . 26";

  const backgroundImageData = data?.dataContent?.backgroundImageData ?? null;
  const apiBackgroundUrl = backgroundImageData?.url
    ? `https://media.twinklebook.com/${backgroundImageData.url}`
    : null;

  const logoImageData = data?.dataContent?.logoImageData ?? null;
  const apiLogoUrl = logoImageData?.url
    ? `https://media.twinklebook.com/${logoImageData.url}`
    : null;

  const coupleImageData = data?.dataContent?.coupleImageData ?? null;
  const apiCoupleUrl = coupleImageData?.url
    ? `https://media.twinklebook.com/${coupleImageData.url}`
    : null;

  const HeroContent = () => (
    <div className="relative z-10 w-full flex flex-col items-center leading-none pt-[20.5vw] lg:pt-[6.55vw]">
      <motion.div
        variants={scaleIn}
        initial="hidden"
        animate={start ? "show" : "hidden"}
      >
        <Image
          src={apiLogoUrl || "/images/David-Natasha/Hero/DNLOGOO.avif"}
          alt={`${groomName} & ${brideName} Logo`}
          width={550}
          height={550}
          unoptimized={Boolean(apiLogoUrl)}
          className="w-[21.28vw] lg:w-[7vw] h-auto"
        />
      </motion.div>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate={start ? "show" : "hidden"}
        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        className="font-cormorant-garamond font-medium text-[4.10vw] lg:text-[1.46vw] text-[#021125] mt-[10.75vw] lg:mt-[2.4vw]"
      >
        THE WEDDING OF
      </motion.p>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate={start ? "show" : "hidden"}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        className="font-antic-didone font-normal text-[9.74vw] lg:text-[4.23vw] text-[#021125] mt-[3.5vw] lg:mt-[0.95vw]"
      >
        {groomName} & {brideName}
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate={start ? "show" : "hidden"}
        transition={{ duration: 2, ease: "easeOut", delay: 0.7 }}
        className="font-cormorant-garamond text-[4.62vw] lg:text-[1.72vw] font-medium text-[#021125] mt-[3.8vw] lg:mt-[0.9vw]"
      >
        {eventDate}
      </motion.p>
    </div>
  );

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* MOBILE */}
      <div className="lg:hidden relative w-full h-full">
        {apiBackgroundUrl ? (
          <Image
            src={apiBackgroundUrl}
            alt="Hero Background"
            fill
            priority
            unoptimized
            className="object-cover object-bottom"
          />
        ) : (
          <Image
            src="/images/David-Natasha/Hero/DNBackground.avif"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-bottom"
          />
        )}

        <div className="absolute top-0 left-0 w-full h-[500px] z-[5] bg-gradient-to-b from-white to-white/0" />

        <HeroContent />
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:block relative w-full h-full">
        {apiBackgroundUrl ? (
          <Image
            src={apiBackgroundUrl}
            alt="Hero Background"
            fill
            priority
            unoptimized
            className="object-cover object-bottom scale-110 "
          />
        ) : (
          <Image
            src="/images/David-Natasha/Hero/DNBackgroundD.avif"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-bottom blur-[7px]"
          />
        )}

        <div className="relative w-full h-full max-w-[45vw] mx-auto">
          <Image
            src={apiCoupleUrl || "/images/David-Natasha/Hero/BGDEKSTOP.webp"}
            alt={`${groomName} & ${brideName}`}
            fill
            priority
            unoptimized={Boolean(apiCoupleUrl)}
            className="object-cover object-[50%_70%]"
          />

          <div className="absolute top-0 left-0 w-full h-[22vw] z-[5] bg-gradient-to-b from-white to-white/0" />

          <HeroContent />
        </div>
      </div>
    </section>
  );
};

export default Hero;
