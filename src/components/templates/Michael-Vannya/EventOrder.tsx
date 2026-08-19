import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";

const EventOrder = () => {
  return (
    <section
      id="eventorder"
      className="relative w-full pt-[74px] pb-[75px] bg-[#7A883F]"
    >
      {/* Ornament Kanan Bawah */}
      <Image
        src="/images/Michael-Vannya/EventOrder/Bunga.webp"
        alt=""
        width={300}
        height={300}
        className="absolute -bottom-[42px] -right-[0px] w-[252px] h-auto pointer-events-none z-0"
      />
      <div className="relative flex flex-col items-center justify-center leading-none text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-kinfolk text-[34px] text-white uppercase"
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
            width={300}
            height={300}
            className="w-[95px] h-auto pointer-events-none"
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
              width={450}
              height={450}
              className="mt-[27.5px] w-[290px] h-auto pointer-events-none"
            />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman text-[20px] font-bold  italic text-white pt-[23px] tracking-widest"
          >
            CANDANI VILLA
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman text-[15px] leading-[20px] text-white pt-[19px] tracking-wide"
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
            className="w-[160px] h-[33px] bg-white rounded-[6px] font-times-new-roman text-[15px] text-[#1E1E1E] mt-[15px] flex items-center justify-center"
          >
            GOOGLE MAPS
          </motion.a>

          <div className="flex flex-col items-center justify-center gap-[30px]">
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-times-new-roman font-bold italic text-[16px] text-white flex flex-col pt-[40px]"
            >
              TEA CEREMONY
              <span className="font-normal not-italic mt-[15px]">
                14.00 WITA
              </span>
            </motion.h3>
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-times-new-roman font-bold italic text-[16px] text-white flex flex-col"
            >
              HOLY MATRIMONY
              <span className="font-normal not-italic mt-[15px]">
                15.30 WITA
              </span>
            </motion.h3>
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-times-new-roman font-bold italic text-[16px] text-white flex flex-col uppercase"
            >
              Dinner Reception
              <span className="font-normal not-italic mt-[15px]">
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
