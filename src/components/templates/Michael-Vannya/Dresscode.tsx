import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";

const Dresscode = () => {
  return (
    <section
      id="dresscode"
      className="relative w-full pt-[70px] lg:pt-[133px] pb-[69px] bg-white z-0"
    >
      {/* Ornament Kanan Atas Mobile */}
      <Image
        src="/images/Michael-Vannya/Dresscode/BungaKananAtas.webp"
        alt=""
        width={300}
        height={300}
        className="absolute -top-[36px] -right-[0px] w-[205px] h-auto pointer-events-none z-0 lg:hidden"
      />
      {/* Ornament Kiri Atas Dekstop */}
      <Image
        src="/images/Michael-Vannya/Dresscode/BungaKiriAtas.webp"
        alt=""
        width={300}
        height={300}
        className="absolute -top-[80px] -left-[0px] w-[470px] h-auto pointer-events-none z-0 hidden lg:block"
      />
      <div className="relative flex flex-col items-center justify-center text-center leading-none z-10">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-kinfolk text-[34px] lg:text-[48px] text-[#1B1C1D]"
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
            src="/images/Michael-Vannya/Dresscode/OrnamentGaris.png"
            alt="ornament"
            width={500}
            height={500}
            className="w-[95px] lg:w-[147px] h-auto pointer-events-none lg:mt-[7px]"
          />
        </motion.div>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-times-new-roman text-[14px] lg:text-[20px] text-[#1B1C1D] tracking-wide leading-[20px] pt-[22px] lg:pt-[45px]"
        >
          We’d love to see you dressed in <br className="lg:hidden" />
          soft summer shades.
        </motion.p>
        <div className="flex flex-col items-center justify-center pt-[22px] lg:pt-[35px]">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman font-bold text-[14px] lg:text-[20px] text-black"
          >
            MEN: <span className="font-normal">Casual Suit</span>
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman italic text-[11px] lg:text-[16px] text-black pt-[14.5px] lg:pt-[23px]"
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
              className="w-[220px] lg:w-[335px] h-auto pointer-events-none mt-[7px] lg:mt-[20px]"
            />
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center pt-[28.5px] lg:pt-[46px]">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman font-bold text-[14px] lg:text-[20px] text-black"
          >
            WOMEN: <span className="font-normal">Effortless Elegance</span>
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman italic text-[11px] lg:text-[16px] text-black pt-[14.5px] lg:pt-[23px]"
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
              width={450}
              height={450}
              className="w-[215px] lg:w-[335px] h-auto pointer-events-none mt-[7px] lg:mt-[20px]"
            />
          </motion.div>
        </div>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-times-new-roman italic text-[14px] lg:text-[20px] text-[#1B1C1D] pt-[27px] lg:pt-[38px] tracking-wide leading-[19px] lg:leading-[26px]"
        >
          As we’ll be celebrating outdoors, <br />
          comfortable shoes and light, <br className="lg:hidden" />
          breathable fabrics are warmly encouraged.
        </motion.p>
      </div>
    </section>
  );
};

export default Dresscode;
