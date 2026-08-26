import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";

type ThankyouProps = {
  data?: any;
};

const FALLBACK_BG = "/images/Peter-Helena/Thankyou/PeterHelenaBG.webp";
const FALLBACK_FOOTER_NOTE = (
  <>
    It would be a joy and an honor for us <br />
    to have you join our celebration and <br />
    share your blessings.
  </>
);

const Thankyou = ({ data }: ThankyouProps) => {
  const bgImageUrl = data?.dataContent?.footerImageData?.[0]?.url
    ? `https://media.twinklebook.com/${data.dataContent.footerImageData[0].url}`
    : FALLBACK_BG;

  const footerNote = data?.dataContent?.footerNote || FALLBACK_FOOTER_NOTE;

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-end pb-[50px] lg:pb-[71px] px-6">
      <Image
        src={bgImageUrl}
        alt="Peter & Helena"
        fill
        className="object-cover object-top"
      />

      {/* Gradient krem dari bawah */}
      <div className="absolute bottom-0 left-0 w-full h-[270px] lg:h-[370px] bg-gradient-to-t from-[#EBE3DA]/50 to-transparent" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-aston-script text-white text-[32px] lg:text-[32.41px] leading-none"
        >
          Thank You
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-cinzel text-[14px] text-white uppercase leading-[20px] lg:text-[14.18px] mt-[48px] lg:mt-[49.1px]"
        >
          {footerNote}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/images/Peter-Helena/Thankyou/Provite.png"
            alt="Provite"
            width={250}
            height={250}
            className="w-[90px] lg:w-[91.14px] h-auto mt-[19px] lg:mt-[15px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Thankyou;

