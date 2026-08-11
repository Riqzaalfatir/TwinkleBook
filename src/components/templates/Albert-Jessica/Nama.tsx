import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight } from "../../../lib/animation";

const Nama = () => {
  return (
    <section className="w-full relative py-[92px] px-4 overflow-hidden">
      <Image
        src="/images/Albert-Jessica/Nama/BgNamaa.webp"
        alt="Profile Background"
        fill
        className="object-cover z-10"
      />

      <div className="relative flex flex-row items-center justify-center z-20 text-[#FEF8EF] gap-[15px]">
        <motion.h2
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-marcellus text-[26px] uppercase"
        >
          Albert
        </motion.h2>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-[6px] h-[6px] bg-[#FEF8EF] rounded-full"
        />
        <motion.h2
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-marcellus text-[26px] uppercase"
        >
          Jessica
        </motion.h2>
      </div>
    </section>
  );
};

export default Nama;
