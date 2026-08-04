import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, scaleIn, stagger } from "../../../lib/animation";

type DresscodeProps = {
  data?: unknown;
};

const Dresscode = ({ data }: DresscodeProps) => {
  return (
    <section className="relative w-full pt-[3vw] lg:pt-[50px] ">
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
        className="absolute -bottom-[11vw] lg:-bottom-[180px] -left-[3vw] lg:-left-0 w-[48vw] lg:w-[355px] h-auto pointer-events-none z-30"
      />

      {/* KONTEN */}
      <div className="relative z-20 flex flex-col items-center text-center px-[8.21vw] lg:px-[20px] pb-[12.31vw] lg:pb-[20px]">
        {/* DRESS CODE */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-poltawski text-[7.18vw] lg:text-[48px] text-[#402824] tracking-wide"
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
            className="w-[36.41vw] lg:w-[227px] h-auto lg:-mt-[7px]"
          />
        </motion.div>

        {/* PARAGRAF */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-athelas text-[3.59vw] lg:text-[22px] text-[#402824] mt-[7vw] lg:mt-[50px] leading-[1.6] lg:leading-[30px]"
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
          className="relative w-[56.67vw] lg:w-[365px] h-[56.67vw] lg:h-[365px] -mt-[0.5vw] lg:-mt-[5px]"
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
          className="font-athelas text-[4.62vw] lg:text-[24px] text-[#402824] -mt-[0.5vw] lg:mt-[6px] tracking-wide"
        >
          FORMAL DRESS/TUXEDO
        </motion.h3>
      </div>
    </section>
  );
};

export default Dresscode;
