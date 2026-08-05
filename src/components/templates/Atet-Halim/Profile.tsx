import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, scaleIn } from "../../../lib/animation";

type ProfileProps = {
  data?: unknown;
};

const Profile = ({ data }: ProfileProps) => {
  return (
    <section id="profile" className="relative w-full overflow-hidden">
      <Image
        src="/images/Atet-Halim/Profile/BungaKiriBD.webp"
        alt="flower decoration"
        width={400}
        height={400}
        className="absolute -bottom-[33.8vw] lg:-bottom-[18.4vw] left-0 w-[41vw] lg:w-[23.5vw] h-auto pointer-events-none z-30"
      />
      <Image
        src="/images/Atet-Halim/Profile/BungaKananBawahD.webp"
        alt="flower decoration"
        width={400}
        height={400}
        className="absolute -bottom-[33.8vw] lg:-bottom-[18.4vw] right-0 w-[41vw] lg:w-[23.5vw] h-auto pointer-events-none z-30"
      />

      <div className="relative z-20 flex flex-col items-center text-center px-[6.15vw] pt-[21.8vw] lg:pt-[9.38vw] pb-[20.8vw] lg:pb-[9.25vw]">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-athelas text-[3.59vw] lg:text-[1.45vw] text-[#402824] leading-[5.2vw] lg:leading-[1.98vw]"
        >
          With grateful hearts and thanks to God, <br />
          we invite you to join us <br />
          for our Thanksgiving Service.
        </motion.p>

        {/* WRAPPER: column di mobile, row di desktop */}
        {/* WRAPPER: column di mobile, row di desktop */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-0 lg:gap-[9.11vw] mt-[5vw] lg:mt-[3.63vw] lg:ml-[1.98vw]">
          {/* Groom */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="relative w-[51.28vw] lg:w-[18.96vw] h-[72.56vw] lg:h-[25.43vw]">
              <Image
                src="/images/Atet-Halim/Profile/PengantinCowo.webp"
                alt="Atet Wijono"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="font-athelas text-[6.67vw] lg:text-[2.38vw] text-[#402824] pt-[5.5vw] lg:pt-[1.06vw] leading-none">
              ATET WIJONO
            </h1>
          </motion.div>

          {/* & — di-center pakai flex sendiri, tinggi ngikutin foto (lg:h-[22.66vw]) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex items-center justify-center lg:h-[22.66vw] pt-[5vw] lg:pt-0"
          >
            <p className="font-athelas text-[8.21vw] lg:text-[4.23vw] text-[#402824]">
              &
            </p>
          </motion.div>

          {/* Bride */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="relative w-[51.28vw] lg:w-[18.96vw] h-[72.56vw] lg:h-[25.43vw] mt-[3vw] lg:mt-0">
              <Image
                src="/images/Atet-Halim/Profile/PengantinCewe.webp"
                alt="Trisnawati Halim"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="font-athelas text-[6.67vw] lg:text-[2.38vw] text-[#402824] pt-[6vw] lg:pt-[1.06vw] leading-none">
              TRISNAWATI HALIM
            </h1>
          </motion.div>
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-athelas text-[3.59vw] lg:text-[1.45vw] text-[#402824] leading-relaxed lg:leading-[1.98vw] pt-[8.46vw] lg:pt-[3.9vw]"
        >
          Your presence and prayers <br />
          will bring warmth and happiness <br className="lg:hidden" />
          to this celebration.
        </motion.p>
      </div>
    </section>
  );
};

export default Profile;