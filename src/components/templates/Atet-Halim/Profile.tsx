import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, scaleIn } from "../../../lib/animation";

type ProfileProps = {
  data?: unknown;
};

const Profile = ({ data }: ProfileProps) => {
  return (
    <section className="relative w-full overflow-hidden">
      <Image
        src="/images/Atet-Halim/Profile/BungaKiriBD.webp"
        alt="flower decoration"
        width={400}
        height={400}
        className="absolute -bottom-[33.8vw] lg:-bottom-[282px] left-0 w-[41vw] lg:w-[365px] h-auto pointer-events-none z-30"
      />
      <Image
        src="/images/Atet-Halim/Profile/BungaKananBawahD.webp"
        alt="flower decoration"
        width={400}
        height={400}
        className="absolute -bottom-[33.8vw] lg:-bottom-[282px] right-0 w-[41vw] lg:w-[365px] h-auto pointer-events-none z-30"
      />

      <div className="relative z-20 flex flex-col items-center text-center px-[6.15vw] pt-[21.8vw] lg:pt-[142px] pb-[20.8vw] lg:pb-[140px]">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-athelas text-[3.59vw] lg:text-[22px] text-[#6C2525] leading-[5.2vw] lg:leading-[30px]"
        >
          With grateful hearts and thanks to God, <br />
          we invite you to join us <br />
          for our Thanksgiving Service.
        </motion.p>

        {/* WRAPPER: column di mobile, row di desktop */}
        {/* WRAPPER: column di mobile, row di desktop */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-0 lg:gap-[141px] mt-[5vw] lg:mt-[55px] lg:ml-[30px]">
          {/* Groom */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="relative w-[51.28vw] lg:w-[287px] h-[72.56vw] lg:h-[385px]">
              <Image
                src="/images/Atet-Halim/Profile/PengantinCowo.webp"
                alt="Atet Wijono"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="font-athelas text-[6.67vw] lg:text-[36px] text-[#6C2525] pt-[5.5vw] lg:pt-[16px] leading-none">
              ATET WIJONO
            </h1>
          </motion.div>

          {/* & — di-center pakai flex sendiri, tinggi ngikutin foto (lg:h-[343px]) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex items-center justify-center lg:h-[343px] pt-[5vw] lg:pt-0"
          >
            <p className="font-athelas text-[8.21vw] lg:text-[64px] text-[#6C2525]">
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
            <div className="relative w-[51.28vw] lg:w-[287px] h-[72.56vw] lg:h-[385px] mt-[3vw] lg:mt-0">
              <Image
                src="/images/Atet-Halim/Profile/PengantinCewe.webp"
                alt="Trisnawati Halim"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="font-athelas text-[6.67vw] lg:text-[36px] text-[#6C2525] pt-[6vw] lg:pt-[16px] leading-none">
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
          className="font-athelas text-[3.59vw] lg:text-[22px] text-[#6C2525] leading-relaxed lg:leading-[30px] pt-[8.46vw] lg:pt-[66px]"
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
