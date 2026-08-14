import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight } from "../../../lib/animation";

type ThankyouProps = {
  data?: any;
};

const FALLBACK_BG = "/images/Albert-Jessica/Thankyou/BgThankyou.webp";
const FALLBACK_FOOTER_NOTE = (
  <>
    For being part of our journey. <br />
    We look forward to celebrating love, laughter, and <br />
    happily ever after with you!
  </>
);
const FALLBACK_HASHTAG = "#ALBethereforJES";

const Thankyou = ({ data }: ThankyouProps) => {
  const footerImageUrl = data?.dataContent?.footerImageData?.[0]?.url
    ? `https://media.twinklebook.com/${data.dataContent.footerImageData[0].url}`
    : FALLBACK_BG;

  const footerNote = data?.dataContent?.footerNote || FALLBACK_FOOTER_NOTE;
  const hashTag = data?.dataEvent?.hashTag ?? FALLBACK_HASHTAG;

  return (
    <section className="relative w-full min-h-screen">
      <Image
        src={footerImageUrl}
        alt="Thankyou Background"
        fill
        className="object-cover object-bottom z-10 pointer-events-none"
      />

      <div className="relative z-20 flex flex-col items-center justify-between text-center">
        <div className="pt-[98px] flex flex-col items-center justify-center">
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
            {footerNote}
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
        </div>

        <div className="relative px-10 pb-[6px] text-center leading-none">
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
      </div>
    </section>
  );
};

export default Thankyou;




