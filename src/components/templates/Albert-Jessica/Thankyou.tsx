import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight } from "../../../lib/animation";

const Thankyou = () => {
  return (
    <section className="relative w-full">
      <Image
        src="/images/Albert-Jessica/Thankyou/BgThankyou.webp"
        alt="Profile Background"
        fill
        className="object-cover object-bottom z-10"
      />

      <div className="relative z-20 pt-[98px] flex flex-col items-center justify-center text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="upperacse font-marcellus text-[28px] text-[#4E4E4E] uppercase"
        >
          Thank You
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-lora text-[12px] text-[#322E29] leading-normal pt-[26.5px]"
        >
          For being part of our journey. <br />
          We look forward to celebrating love, laughter, and <br />
          happily ever after with you!
        </motion.p>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-lora text-[12px] text-[#322E29] leading-normal pt-[22px]"
        >
          #ALBethereforJES
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col items-center mt-[470px] mb-[34px]"
        >
          <Image
            src="/images/Albert-Jessica/Thankyou/Provite.png"
            alt="Provite"
            width={250}
            height={250}
            className="w-[89px] h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Thankyou;
