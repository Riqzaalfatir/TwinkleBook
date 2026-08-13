
// CONTOH PROFILE ATET HALIM YG SUDAH DI LATCHING 
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, scaleIn } from "../../../lib/animation";

type ProfileProps = {
  data?: any;
};

const FALLBACK_GROOM_IMAGE = "/images/Atet-Halim/Profile/PengantinCowo.webp";
const FALLBACK_BRIDE_IMAGE = "/images/Atet-Halim/Profile/PengantinCewe.webp";

const Profile = ({ data }: ProfileProps) => {
  const groomFullName = data?.dataEvent?.groomFullName ?? "GROOM NAME";
  const brideFullName = data?.dataEvent?.brideFullName ?? "BRIDE NAME";

  const groomImage = data?.dataContent?.groomImageData?.url
    ? `https://media.twinklebook.com/${data.dataContent.groomImageData.url}`
    : FALLBACK_GROOM_IMAGE;

  const brideImage = data?.dataContent?.brideImageData?.url
    ? `https://media.twinklebook.com/${data.dataContent.brideImageData.url}`
    : FALLBACK_BRIDE_IMAGE;

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

      <div className="relative z-20 flex flex-col items-center text-center px-[6.15vw] pt-[21.8vw] lg:pt-[9vw] pb-[20.8vw] lg:pb-[9.25vw]">
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
        <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-0 lg:gap-[8.2vw] mt-[5vw] lg:mt-[3.63vw] lg:ml-[2.5vw]">
          {/* Groom */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="relative w-[54vw] lg:w-[18.5vw] h-[79.5vw] lg:h-[24.8vw]">
              <Image
                src={groomImage}
                alt={groomFullName}
                fill
                className="object-cover"
              />
            </div>
            <h1 className="font-athelas text-[6.67vw] lg:text-[2.38vw] text-[#402824] pt-[5.5vw] lg:pt-[1.06vw] leading-none">
              {groomFullName.toUpperCase()} {/* ← Dinamis */}
            </h1>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex items-center justify-center lg:h-[22.66vw] pt-[5vw] lg:pt-0"
          >
            <p className="font-athelas text-[8.21vw] lg:text-[4.23vw] text-[#402824] lg:-mt-[3vw] lg:pl-[2vw]">
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
            <div className="relative w-[54vw] lg:w-[18.5vw] h-[79.5vw] lg:h-[24.8vw] mt-[3vw] lg:mt-0">
              <Image
                src={brideImage}
                alt={brideFullName}
                fill
                className="object-cover"
              />
            </div>
            <h1 className="font-athelas text-[6.67vw] lg:text-[2.38vw] text-[#402824] pt-[6vw] lg:pt-[1.06vw] leading-none">
              {brideFullName.toUpperCase()}
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
