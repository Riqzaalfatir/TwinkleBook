import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, scaleIn, stagger } from "../../../lib/animation";

type DresscodeProps = {
  data?: unknown;
};

const Dresscode = ({ data }: DresscodeProps) => {
  return (
    <section id="dresscode" className="relative w-full pt-[3vw] lg:pt-[3.30vw] ">
      {/* BACKGROUND KERTAS */}
      {/* <Image
        src="/images/Atet-Halim/Hero/BackgoundKertas.webp"
        alt="background"
        fill
        className="object-cover"
      /> */}

      {/* BUNGA POJOK KIRI BAWAH */}
      <Image
        src="/images/Atet-Halim/Dresscode/BungaKirii.webp"
        alt="flower decoration"
        width={286}
        height={286}
        className="absolute -bottom-[11vw] lg:-bottom-[12.5vw] -left-[5vw] lg:-left-0 w-[48vw] lg:w-[23.45vw] h-auto pointer-events-none z-30"
      />

      {/* KONTEN */}
      <div className="relative z-20 flex flex-col items-center text-center px-[8.21vw] lg:px-[1.32vw] pb-[12.31vw] lg:pb-[1.32vw]">
        {/* DRESS CODE */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-poltawski text-[7.18vw] lg:text-[3.17vw] text-[#402824]"
        >
          DRESS CODE
        </motion.h2>

        {/* ORNAMENT GARIS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/images/Atet-Halim/Dresscode/OrnamentGaris.webp"
            alt="ornament"
            width={230}
            height={230}
            className="w-[36.41vw] lg:w-[14.99vw] h-auto lg:-mt-[7px]"
          />
        </motion.div>

        {/* PARAGRAF */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-athelas text-[3.59vw] lg:text-[1.45vw] text-[#402824] mt-[7vw] lg:mt-[3.30vw] leading-[1.6] lg:leading-[1.98vw]"
        >
          To support our anniversary theme, <br />
          we request our dress to dress as follow on <br />
          our special day:
        </motion.p>

        {/* ILUSTRASI PASANGAN */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-[56.67vw] lg:w-[24.11vw] h-[56.67vw] lg:h-[24.11vw] -mt-[0.5vw] lg:-mt-[5px]"
        >
          <Image
            src="/images/Atet-Halim/Dresscode/Human.webp"
            alt="dress code illustration"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* FORMAL DRESS/TUXEDO */}
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-athelas text-[4.62vw] lg:text-[1.59vw] text-[#402824] -mt-[0.5vw] lg:mt-[6px]"
        >
          FORMAL DRESS/TUXEDO
        </motion.h3>
      </div>
    </section>
  );
};

export default Dresscode;