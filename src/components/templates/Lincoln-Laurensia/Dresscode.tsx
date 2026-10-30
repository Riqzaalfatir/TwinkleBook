import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, fadeUp, fadeLeft, fadeRight } from "../../../lib/animation";

type DressCodeProps = {
  guestData?: { groups?: { name: string }[] } | null;
};

const DressCode = ({ guestData }: DressCodeProps) => {
  // Sambungan untuk versi dresscode khusus grup tamu (belum dipakai di tampilan).
  // Nama grup "Dresscode Guest" masih perlu dicek ke backend.
  const isDCGuest = guestData?.groups?.some(
    (g) => g.name === "Dresscode Guest",
  );

  return (
    <section
      id="dress-code"
      className="relative z-10 flex w-full flex-col items-center bg-white px-[6.15vw] py-[20.51vw] text-center font-poppins text-[#2F2F2F] lg:px-[1.59vw] lg:py-[8.3vw]"
    >
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-[8.72vw] font-semibold uppercase leading-none lg:text-[2.78vw] text-[#2F2F2F]"
      >
        Dress Code
      </motion.h2>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative w-full mt-[4.1vw] h-[16.8vw] max-w-[37.3vw] hidden lg:block"
      >
        <Image
          src="/images/Lincoln-Laurensia/Dresscode/NewDC.webp"
          alt="Dress code"
          fill
          className="object-contain"
        />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative mt-[9vw] h-[44vw] w-[120vw] max-w-none lg:hidden"
      >
        <Image
          src="/images/Lincoln-Laurensia/Dresscode/NewDCMobilee.webp"
          alt="Dress code"
          fill
          className="object-contain"
        />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="mt-[6.65vw] lg:mt-[2.7vw]"
      >
        <p className="text-[3.08vw] font-bold uppercase lg:text-[1.46vw] text-[#2F2F2F]">
          Gentlemen :
        </p>
        <p className="text-[3.08vw] italic uppercase lg:text-[1.46vw] text-[#2F2F2F] -mt-[2px] lg:-mt-0">
          Black Formal Suit
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="mt-[3.5vw] max-w-[56.41vw] lg:mt-[2.31vw] lg:max-w-none"
      >
        <p className="text-[3.08vw] font-bold uppercase lg:text-[1.46vw] text-[#2F2F2F]">
          Ladies :
        </p>
        <p className="text-[3.08vw] italic uppercase lg:text-[1.46vw] text-[#2F2F2F] leading-[15px] mt-[1px] lg:mt-[0.7vw]">
          Formal attire following the <br className="lg:hidden" /> color palette
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="mt-[7vw] flex items-start justify-center gap-[7.95vw] lg:mt-[2.8vw] lg:gap-[2.99vw]"
      >
        <div className="flex flex-col items-center">
          <div className="relative h-[17.18vw] w-[17.18vw] lg:h-[6.47vw] lg:w-[6.47vw]">
            <Image
              src="/images/Lincoln-Laurensia/Dresscode/NoWhite.webp"
              alt="No White"
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-[2.7vw] text-[3.59vw] font-light italic lg:mt-[0.9vw] lg:text-[1.32vw] text-[#4E4033]">
            No White
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative h-[17.18vw] w-[17.18vw] lg:h-[6.47vw] lg:w-[6.47vw]">
            <Image
              src="/images/Lincoln-Laurensia/Dresscode/NoBatik.webp"
              alt="No Batik"
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-[2.7vw] text-[3.59vw] font-light italic lg:mt-[0.9vw] lg:text-[1.32vw] text-[#4E4033]">
            No Batik
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default DressCode;