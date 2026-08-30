"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeRight, fadeLeft } from "../../../lib/animation";

type DresscodeProps = {
  guestData?: { groups?: { name: string }[] } | null;
};

const Dresscode = ({ guestData }: DresscodeProps) => {
  const isDCGuest = guestData?.groups?.some(
    (g) => g.name === "Dresscode Guest",
  );


  return (
    <section
      id="dresscode"
      className="w-full pt-[93.5px] lg:pt-[91px] pb-[76px] bg-[#430D0D] flex flex-col items-center text-center"
    >
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="font-aston-script text-white text-[28px] lg:text-[28.35px] leading-none"
      >
        Dress Code
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="font-cinzel text-[14px] lg:text-[14.18px] text-white leading-[20px] mt-[40px] lg:mt-[40.5px] px-10"
      >
        {isDCGuest ? (
          <>
           We kindly invite you to dress in <br />
           formal attire. Kindly avoid batik.
          </>
        ) : (
          <>
            We kindly invite you to dress in <br />
            elegant formal attire.
          </>
        )}
      </motion.p>

      <div className="flex flex-col items-center mt-[23px]">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-cinzel text-[14px] lg:text-[14.18px] text-white"
        >
          <span className="font-bold uppercase">Men:</span>{" "}
          {isDCGuest ? "Formal Wear" : "Black Tie"}
        </motion.p>

        {isDCGuest ? (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex items-start gap-[15.38px] mt-[8px]"
          >
            <div className="flex flex-col items-center">
              <Image
                src="/images/Peter-Helena/Dresscode/MEN.png"
                alt="Black"
                width={54}
                height={54}
                className="w-[55px] lg:w-[55.31px] h-auto"
              />
              <p className="font-times-new-roman text-[12px] text-white mt-[3.38px]">Black</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/Peter-Helena/Dresscode/NAVY.png"
                alt="Deep Navy"
                width={54}
                height={54}
                className="w-[55px] lg:w-[55.31px] h-auto"
              />
              <p className="font-times-new-roman text-[12px] text-white mt-[3.38px]">Deep Navy</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src="/images/Peter-Helena/Dresscode/MEN.png"
              alt="Men Dresscode"
              width={54}
              height={54}
              className="w-[55px] lg:w-[55.31px] h-auto mt-[8px]"
            />
          </motion.div>
        )}
      </div>

      <div className="flex flex-col items-center mt-[20px]">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-cinzel text-[14px] lg:text-[14.18px] text-white"
        >
          <span className="font-bold uppercase">Women:</span> Formal Evening
          Attire
        </motion.p>

        {isDCGuest ? (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex items-start gap-[15.38px] mt-[8px]"
          >
            <div className="flex flex-col items-center">
              <Image
                src="/images/Peter-Helena/Dresscode/MEN.png"
                alt="Black"
                width={54}
                height={54}
                className="w-[55px] lg:w-[55.31px] h-auto"
              />
              <p className="font-times-new-roman text-[12px] text-white mt-[3.38px]">Black</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/Peter-Helena/Dresscode/NAVY.png"
                alt="Deep Navy"
                width={54}
                height={54}
                className="w-[55px] lg:w-[55.31px] h-auto"
              />
              <p className="font-times-new-roman text-[12px] text-white mt-[3.38px]">Deep Navy</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src="/images/Peter-Helena/Dresscode/WOMEN.webp"
              alt="Women Dresscode"
              width={356}
              height={354}
              className="w-[196px] lg:w-[188.84px] h-auto mt-[8px]"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Dresscode;