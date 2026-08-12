import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, scaleIn, stagger } from "../../../lib/animation";

type DresscodeProps = {
  data?: unknown;
};

const Dresscode = ({ data }: DresscodeProps) => {
  return (
    <section
      id="dresscode"
      className="relative w-full pt-[2.2vw] lg:pt-[3.30vw] "
    >
      {/* BUNGA POJOK KIRI BAWAH */}
      <Image
        src="/images/Atet-Halim/Dresscode/BungaKirii.webp"
        alt="flower decoration"
        width={386}
        height={386}
        className="absolute -bottom-[36vw] lg:-bottom-[12vw] -left-[5vw] lg:-left-0 w-[42vw] lg:w-[23.45vw] h-auto pointer-events-none z-30"
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
            width={350}
            height={350}
            className="w-[36.41vw] lg:w-[14.99vw] h-auto lg:-mt-[5px]"
          />
        </motion.div>

        {/* PARAGRAF */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-athelas text-[3.59vw] lg:text-[1.45vw] text-[#402824] mt-[12.8vw] lg:mt-[3.30vw] leading-[1.4] lg:leading-[1.98vw]"
        >
          GUESTS ARE ENCOURAGED <br className="lg:hidden" />
          TO WEAR:
        </motion.p>

        {/* ILUSTRASI PASANGAN */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-[63.67vw] lg:w-[31vw] h-[56.67vw] lg:h-[24.11vw] -mt-[1vw] lg:mt-[2.2vw]"
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
          className="font-athelas text-[4.62vw] lg:text-[1.98vw] text-[#402824] -mt-[1.1vw] lg:mt-[2.2vw]"
        >
          FORMAL ATTIRE
        </motion.h3>
      </div>
    </section>
  );
};

export default Dresscode;
