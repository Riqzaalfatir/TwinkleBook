import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";

const Dresscode = () => {
  return (
    <section
      id="dresscode"
      className="relative w-full pt-[73px] pb-[0px] bg-white z-0"
    >
      {/* Ornament Kiri Atas */}
      <Image
        src="/images/Michael-Vannya/Dresscode/BungaKananAtas.webp"
        alt=""
        width={300}
        height={300}
        className="absolute -top-[36px] -right-[8px] w-[205px] h-auto pointer-events-none z-0"
      />
      <div className="relative flex flex-col items-center justify-center text-center leading-none z-10">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-kinfolk text-[34px] text-[#1B1C1D]"
        >
          Dress Code
        </motion.h1>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/images/Michael-Vannya/Dresscode/Ornamentgaris.png"
            alt="ornament"
            width={450}
            height={450}
            className="w-[95px] h-auto pointer-events-none"
          />
        </motion.div>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-times-new-roman text-[14px] text-[#1B1C1D] tracking-wide leading-[20px] pt-[22px]"
        >
          We’d love to see you dressed in <br />
          soft summer shades.
        </motion.p>
        <div className="flex flex-col items-center justify-center pt-[22px]">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman font-bold text-[14px] text-black"
          >
            MEN: <span className="font-normal">Casual Suit</span>
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman italic text-[11px] text-black pt-[14.5px]"
          >
            COLOUR PALLETE
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src="/images/Michael-Vannya/Dresscode/DCMen.webp"
              alt="ornament"
              width={450}
              height={450}
              className="w-[220px] h-auto pointer-events-none mt-[7px]"
            />
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center pt-[28.5px]">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman font-bold text-[14px] text-black"
          >
            WOMEN: <span className="font-normal">Effortless Elegance</span>
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman italic text-[11px] text-black pt-[14.5px]"
          >
            COLOUR PALLETE
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src="/images/Michael-Vannya/Dresscode/DCWomen.webp"
              alt="ornament"
              width={250}
              height={250}
              className="w-[215px] h-auto pointer-events-none mt-[7px]"
            />
          </motion.div>
        </div>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-times-new-roman italic text-[14px] text-[#1B1C1D] pt-[27px] tracking-wide leading-[19px]"
        >
          As we’ll be celebrating outdoors, <br />
          comfortable shoes and light, <br />
          breathable fabrics are warmly encouraged.
        </motion.p>
      </div>
    </section>
  );
};

export default Dresscode;
