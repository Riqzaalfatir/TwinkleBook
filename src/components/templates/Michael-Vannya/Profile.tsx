import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";

const Profile = () => {
  return (
    <section
      id="profile"
      className="relative w-full pt-[71px] pb-[72px] bg-white overflow-hidden"
    >
      {/* Ornament Kiri Atas */}
      <Image
        src="/images/Michael-Vannya/Profile/BungaKiriAtas.webp"
        alt=""
        width={300}
        height={300}
        className="absolute -top-[100px] -left-[10px] w-[200px] h-auto pointer-events-none z-0"
      />

      {/* Ornament Kanan Bawah */}
      <Image
        src="/images/Michael-Vannya/Profile/BungaKananBawah.webp"
        alt=""
        width={300}
        height={300}
        className="absolute -bottom-[103px] -right-[7px] w-[215px] h-auto pointer-events-none z-0"
      />
      <div className="relative z-10 flex flex-col items-center justify-center leading-none text-center">
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
            width={350}
            height={350}
            className="w-[97px] h-auto mx-auto pointer-events-none"
          />
        </motion.div>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-times-new-roman text-[14px] text-[#1B1C1D] pt-[39px] leading-[18px]"
        >
          Together with our families, <br />
          we joyfully invite you to celebrate the <br />
          beginning of our new journey.
        </motion.p>
        <div className="flex flex-col items-center justify-center leading-none pt-[51px]">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-kinfolk text-[32px] text-[#7A883F] uppercase leading-[31px]"
          >
            Michael Wijaya
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman text-[14px] text-[#1B1C1D] pt-[24px]"
          >
            The son of
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman text-[14px] text-[#1B1C1D] pt-[17.5px] leading-[20px]"
          >
            Mr. Thian Fu Tjan (Chandra Harry Mulyanto) and <br />
            Mrs. Bong Tjhai Sian (†)
          </motion.p>
          <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            href="https://www.instagram.com/michaellmw"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[117px] h-[30px] border border-[#000000]/30 flex items-center justify-center gap-[5px] font-times-new-roman text-[12px] text-[#1B1C1D] rounded-[52px] mt-[15px] tracking-wide"
          >
            <Image
              src="/images/Michael-Vannya/Profile/Instagram.webp"
              alt="whatsapp"
              width={250}
              height={250}
              className="w-[13px]"
            />
            michaellmw
          </motion.a>
        </div>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-kinfolk text-[32px] text-[#7A883F] pt-[31px] pb-[30px]"
        >
          &
        </motion.h2>
        <div className="flex flex-col items-center justify-center leading-none">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-kinfolk text-[32px] text-[#7A883F] uppercase leading-[31px]"
          >
            Vannya Velysia Soegiarto
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman text-[14px] text-[#1B1C1D] pt-[24px]"
          >
            The son of
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman text-[14px] text-[#1B1C1D] pt-[17.5px] leading-[20px]"
          >
            Mr. Soegiarto Santo (Tjeng Fuk Yen) and <br />
            Mrs. Febe Yulia Hezron
          </motion.p>
          <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            href="https://www.instagram.com/vannyazhuang"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[117px] h-[30px] border border-[#000000]/30 flex items-center justify-center gap-[5px] font-times-new-roman text-[12px] text-[#1B1C1D] rounded-[52px] mt-[15px] tracking-wide"
          >
            <Image
              src="/images/Michael-Vannya/Profile/Instagram.webp"
              alt="whatsapp"
              width={200}
              height={200}
              className="w-[13px]"
            />
            vannyazhuang
          </motion.a>
        </div>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="pt-[56.5px] font-times-new-roman text-[14px] text-[#1B1C1D] leading-[20px]"
        >
          We look forward to celebrating <br />
          this new beginning with you.
        </motion.p>
      </div>
    </section>
  );
};

export default Profile;
