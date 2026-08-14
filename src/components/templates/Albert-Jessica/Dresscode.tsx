import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight } from "../../../lib/animation";

const Dresscode = () => {
  return (
    <section
      id="dresscode"
      className="relative w-full pt-[68px] pb-[103px] px-10 overflow-hidden"
    >

      <div className="relative  flex flex-col items-center text-center justify-center z-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="uppercase font-marcellus text-[28px] text-[#4E4E4E]"
        >
          Dress Code
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-lora text-[14px] text-[#322E29] pt-[23px]"
        >
          Attire in colors from the suggested palette <br />
          is greatly appreciated.
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/images/Albert-Jessica/Dresscode/WarnaDresscode.webp"
            alt="Ornament Divider"
            width={350}
            height={350}
            className="mt-[32px] w-[257px] h-auto pointer-events-none"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Dresscode;
