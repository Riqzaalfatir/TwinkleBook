import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight } from "../../../lib/animation";

const EventOrder = () => {
  return (
    <section id="eventorder" className="relative w-full z-10 px-[27px]">
      <div className="bg-[#F4F4F4] rounded-[30px]">
        <div className="flex flex-col items-center justify-center pt-[74px] pb-[83px] gap-[35px]">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="uppercase font-marcellus text-[28px] text-[#4E4E4E]"
          >
            EVENT DETAIL
          </motion.h3>
          <div className="flex flex-col items-center justify-center text-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <Image
                src="/images/Albert-Jessica/EventOrder/Gereja.webp"
                alt="Ornament Divider"
                width={250}
                height={250}
                className="-mt-[12px] w-[59px] h-auto"
              />
            </motion.div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-lora font-medium text-[14px] text-[#33302D] pt-[26px] uppercase"
            >
              Holy Matrimony
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-lora text-[16px] font-semibold text-[#33302D] uppercase pt-[17px]"
            >
              11.00 WIB
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-lora font-medium text-[14px] text-[#33302D] pt-[17px]"
            >
              Gereja Bunda Tujuh Kedukaan
              <span className="block font-normal text-[12px]">
                Jl. Pandu no. 4, Bandung
              </span>
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <a
                href="https://maps.app.goo.gl/vfD7wKoZg1gEY2M88"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[160px] h-[33px] text-[14px] font-lora font-semibold text-white bg-[#4E4E4E] rounded-[6px] mt-[20px]"
              >
                GOOGLE MAPS
              </a>
            </motion.div>
          </div>
          <div className="flex flex-col items-center justify-center text-center -mt-[12px]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <Image
                src="/images/Albert-Jessica/EventOrder/Teko.webp"
                alt="Ornament Divider"
                width={250}
                height={250}
                className="mt-[30px] w-[95px] h-auto"
              />
            </motion.div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-lora font-medium text-[14px] text-[#33302D] pt-[26px] uppercase"
            >
              TEA PAI
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-lora text-[16px] font-semibold text-[#33302D] uppercase pt-[17px]"
            >
              16.30 WIB
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-lora font-medium text-[14px] text-[#33302D] pt-[17px]"
            >
              Empire Ballroom <br />
              Holiday Inn Bandung Pasteur
              <span className="block font-normal text-[12px]">
                Jl. dr. Djundjunan no. 96, Pasteur, Bandung
              </span>
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <a
                href="https://maps.app.goo.gl/grkeAGbFwbAWLY1h8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[160px] h-[33px] text-[14px] font-lora font-semibold text-white bg-[#4E4E4E] rounded-[6px] mt-[20px]"
              >
                GOOGLE MAPS
              </a>
            </motion.div>
          </div>
          <div className="flex flex-col items-center justify-center text-center -mt-[12px]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <Image
                src="/images/Albert-Jessica/EventOrder/Cheers.webp"
                alt="Ornament Divider"
                width={250}
                height={250}
                className="mt-[30px] w-[64px] h-auto"
              />
            </motion.div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-lora font-medium text-[14px] text-[#33302D] pt-[26px] uppercase"
            >
              Wedding Reception
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-lora text-[16px] font-semibold text-[#33302D] uppercase pt-[17px]"
            >
              18.00 WIB
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-lora font-medium text-[14px] text-[#33302D] pt-[17px]"
            >
              Meridien Room <br />
              Holiday Inn Bandung Pasteur
              <span className="block font-normal text-[12px]">
                Jl. dr. Djundjunan no. 96, Pasteur, Bandung
              </span>
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <a
                href="https://maps.app.goo.gl/grkeAGbFwbAWLY1h8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[160px] h-[33px] text-[14px] font-lora font-semibold text-white bg-[#4E4E4E] rounded-[6px] mt-[20px]"
              >
                GOOGLE MAPS
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventOrder;
