import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";

const Thankyou = () => {
  return (
    <section className="relative w-full min-h-screen">
      <Image
        src="/images/Michael-Vannya/Thankyou/Thankyou.webp"
        alt="Thankyou Background"
        fill
        className="object-cover object-bottom z-10 pointer-events-none lg:hidden"
      />

      <Image
        src="/images/Michael-Vannya/Thankyou/ThankyouD.webp"
        alt="Thankyou Background"
        fill
        className="object-cover object-bottom z-10 pointer-events-none hidden lg:block"
      />

      <div className="relative z-20 flex flex-col items-center justify-between text-center">
        <div className="pt-[67.5px] lg:pt-[117px] flex flex-col items-center justify-center">
          <div>
            <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
             >
            <Image
              src="/images/Michael-Vannya/Hero/LogoMV.webp"
              alt="ornament"
              width={250}
              height={250}
              className="w-[95px] lg:w-[167px] h-auto pointer-events-none"
            />
            </motion.div>
          </div>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-kinfolk text-[34px] lg:text-[48px] text-[#1B1C1D] uppercase pt-[19px] lg:pt-[18px]"
          >
            Thank You
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman text-[14px] lg:text-[20px] text-[#1B1C1D] leading-normal lg:leading-[26px] pt-[36.5px] lg:pt-[39px]"
          >
            Your presence and blessings have made this <br className="lg:hidden" />
            celebration <br className="hidden lg:block" />
            more meaningful, and we are grateful <br className="lg:hidden" />
            to share it with you.
          </motion.p>
        </div>

        <div className="relative px-10 pb-[5.5px] lg:pb-[0px] text-center leading-none">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center mt-[470px] mb-[30px]"
          >
            <Image
              src="/images/Michael-Vannya/Thankyou/LogoProvite.webp"
              alt="Provite"
              width={250}
              height={250}
              className="w-[89px] lg:w-[127px] h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Thankyou;
