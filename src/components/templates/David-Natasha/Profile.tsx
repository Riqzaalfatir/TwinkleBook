"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";
import { DavidNatashaDataProps } from "./types";

type ProfileProps = {
  data?: DavidNatashaDataProps;
};

const splitParentName = (text?: string) => {
  if (!text) return null;
  const idx = text.indexOf(" and ");
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx + 4)} {/* termasuk "and" */}
      <br />
      {text.slice(idx + 5)}
    </>
  );
};

const Profile = ({ data }: ProfileProps) => {
  const groomFullName =
    data?.dataEvent?.groomFullName ?? "Prawira David Aldridge Susetio";
  const brideFullName = data?.dataEvent?.brideFullName ?? "Stefanie Natasya";

  const groomParent =
    data?.dataEvent?.groomParent ??
    "Mr. Andy S. Susetio and Mrs. Natalia Susetio";
  const brideParent =
    data?.dataEvent?.brideParent ?? "Mr. Agus Lugiman and Mrs. Ratna Sari";

  return (
    <section
      id="profile"
      className="relative w-full flex flex-col items-center py-[8.75vw] lg:pt-[3.9vw] lg:pb-[6.8vw]"
    >
      <div className="relative w-[100%] lg:w-[66%]">
        <Image
          src="/images/David-Natasha/Profile/temp2.avif"
          alt="Profile Frame"
          width={1554}
          height={4096}
          className="w-full h-auto lg:hidden"
        />
        <Image
          src="/images/David-Natasha/Profile/tempdekstop.webp"
          alt="Profile Frame"
          width={1554}
          height={4096}
          className="w-full h-auto hidden lg:block"
        />

        <div className="absolute inset-0 flex flex-col items-center text-center mt-[34.35vw] lg:mt-[18.7vw]">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cormorant-garamond text-[3.85vw] lg:text-[1.59vw] text-[#021125]"
          >
            By the grace of God
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cormorant-garamond text-[4.10vw] lg:text-[1.59vw] font-semibold text-[#021125] mt-[6.5vw] lg:mt-[3.5vw] leading-[4.93vw] lg:leading-[1.8vw] max-w-[70vw] lg:max-w-[35vw] break-words"
          >
            {splitParentName(groomParent)}
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cormorant-garamond text-[3.85vw] lg:text-[1.59vw] italic text-[#021125] my-[4.3vw] lg:my-[2.1vw]"
          >
            together with
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cormorant-garamond text-[4.10vw] lg:text-[1.59vw] font-semibold text-[#021125] leading-[4.93vw] lg:leading-[1.98vw] max-w-[70vw] lg:max-w-[35vw] break-words"
          >
            {splitParentName(brideParent)}
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cormorant-garamond leading-[4.93vw] lg:leading-[1.82vw] text-[3.85vw] lg:text-[1.59vw] text-[#021125] mt-[7.1vw] lg:mt-[3.6vw]"
          >
            Cordially request the honour of your
            <br className="lg:hidden" /> presence at the{" "}
            <br className="hidden lg:block" /> marriage of their 
            <br className="lg:hidden" />
            {" "} son and daughter
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-antic-didone text-[7.18vw] lg:text-[3.84vw] leading-[8.62vw] text-[#021125] lg:leading-[4.6vw] mt-[8vw] lg:mt-[3.3vw]  px-[13.5vw] lg:px-[14vw]"
          >
            {groomFullName}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-antic-didone text-[7.18vw] lg:text-[3.83vw] text-[#021125] mt-[5.5vw] lg:mt-[4.4vw] "
          >
            &
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-antic-didone text-[7.18vw] lg:text-[3.84vw] leading-[8.62vw] lg:leading-[4.6vw] text-[#021125] mt-[5.5vw] px-[13.5vw] lg:px-[14vw]
            lg:mt-[3.7vw] "
          >
            {brideFullName}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cormorant-garamond text-[4.10vw] text-[#021125] lg:text-[1.59vw] mt-[9.52vw] lg:mt-[3.7vw] leading-[4.85vw] lg:leading-[1.9vw]"
          >
            Our joy will be complete with
            <br />
            your presence and blessings
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
