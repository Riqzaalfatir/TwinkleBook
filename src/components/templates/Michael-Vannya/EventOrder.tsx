import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";

const EventOrder = () => {
  return (
    <section
      id="eventorder"
      className="relative w-full pt-[74px] pb-[75px] lg:pt-[116px] lg:pb-[118px] bg-[#7A883F]"
    >
      {/* Ornament Kanan Bawah */}
      <Image
        src="/images/Michael-Vannya/EventOrder/BungaD.webp"
        alt=""
        width={500}
        height={500}
        className="absolute -bottom-[42px] -right-[8px] w-[260px] lg:-bottom-[105px] lg:right-[0px] lg:w-[510px] h-auto pointer-events-none z-0"
      />
      <div className="relative flex flex-col items-center justify-center leading-none text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-kinfolk text-[34px] lg:text-[48px] text-white uppercase"
        >
          Event Detail
        </motion.h1>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/images/Michael-Vannya/EventOrder/Ornamentgaris.png"
            alt="ornament"
            width={500}
            height={500}
            className="w-[95px] lg:w-[147px] h-auto pointer-events-none lg:mt-[3px]"
          />
        </motion.div>
        <div className=" flex flex-col items-center justify-center leading-none text-center">
          <motion.div
            className=""
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src="/images/Michael-Vannya/EventOrder/CandaniVilla.webp"
              alt="Ornament"
              width={750}
              height={750}
              className="mt-[27.5px] lg:-mt-[14px] w-[290px] lg:w-[550px] h-auto pointer-events-none"
            />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman text-[20px] lg:text-[30px] font-bold  italic text-white pt-[23px] lg:pt-[43px] tracking-widest lg:tracking-normal"
          >
            CANDANI VILLA
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman text-[15px] lg:text-[20px] leading-[20px] text-white pt-[19px] lg:pt-[26px] tracking-wide"
          >
            Jl. Pantai Gumicik No.11, Ketewel, Kec.Sukawati, <br />
            Kabupaten Gianyar, Bali 80582
          </motion.p>
          <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            href="https://maps.app.goo.gl/NYgz9hw7AJesD5fz6"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[160px] h-[33px] lg:h-[30px] bg-white rounded-[6px] font-times-new-roman text-[15px] lg:text-[14px] text-[#1E1E1E] mt-[15px] lg:mt-[16px] flex items-center justify-center"
          >
            GOOGLE MAPS
          </motion.a>

          <div className="flex flex-col items-center justify-center gap-[30px] lg:gap-[33px] pt-[40px] lg:pt-[58.5px]">
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-times-new-roman font-bold italic text-[16px] lg:text-[26px] text-white flex flex-col"
            >
              TEA CEREMONY
              <span className="font-normal not-italic mt-[15px] lg:mt-[15px]">
                14.00 WITA
              </span>
            </motion.h3>
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-times-new-roman font-bold italic text-[16px] lg:text-[26px] text-white flex flex-col"
            >
              HOLY MATRIMONY
              <span className="font-normal not-italic mt-[15px] lg:mt-[15px]">
                15.30 WITA
              </span>
            </motion.h3>
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-times-new-roman font-bold italic text-[16px] lg:text-[26px] text-white flex flex-col uppercase"
            >
              Dinner Reception
              <span className="font-normal not-italic mt-[15px] lg:mt-[15px]">
                18.30 WITA
              </span>
            </motion.h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventOrder;
