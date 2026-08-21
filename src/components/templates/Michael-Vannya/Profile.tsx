"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";

type ProfileProps = {
  data?: any;
};

const splitParentName = (text?: string) => {
  if (!text) return null;
  const idx = text.indexOf(" and ");
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx + 4)} {/* termasuk "and" */}
      <br className="lg:hidden" />
      {text.slice(idx + 5)}
    </>
  );
};

const Profile = ({ data }: ProfileProps) => {
  const groomFullName = data?.dataEvent?.groomFullName ?? " Michael Wijaya";
  const brideFullName =
    data?.dataEvent?.brideFullName ?? "Vannya Velysia Soegiarto";

  const groomParent =
    data?.dataEvent?.groomParent ??
    "Mr. Thian Fu Tjan (Chandra Harry Mulyanto) and Mrs. Bong Tjhai Sian (†)";
  const brideParent =
    data?.dataEvent?.brideParent ??
    "Mr. Soegiarto Santo (Tjeng Fuk Yen) and Mrs. Febe Yulia Hezron";

  return (
    <section
      id="profile"
      className="relative w-full pt-[70px] lg:pt-[115px] pb-[72px] lg:pb-[118.5px] bg-white overflow-hidden"
    >
      {/* Ornament Kiri Atas */}
      <Image
        src="/images/Michael-Vannya/Profile/BungaKiriAtas.webp"
        alt=""
        width={700}
        height={700}
        className="absolute -top-[100px] -left-[10px] w-[205px] lg:-top-[300px] lg:-left-[22px] lg:w-[690px] h-auto pointer-events-none z-0"
      />

      {/* Ornament Kanan Bawah */}
      <Image
        src="/images/Michael-Vannya/Profile/BungaKananBawah.webp"
        alt=""
        width={300}
        height={300}
        className="absolute -bottom-[109px] -right-[0px] w-[223px] lg:-bottom-[308px] lg:-right-[47px] lg:w-[480px] h-auto pointer-events-none z-0"
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
            className="w-[97px] lg:w-[179px] h-auto mx-auto pointer-events-none"
          />
        </motion.div>
        <motion.p
        id='butongif'
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-times-new-roman text-[14px] lg:text-[20px] text-[#1B1C1D] pt-[39px] lg:pt-[44px] leading-[18px] lg:leading-[26px]"
        >
          Together with our families, <br />
          we joyfully invite you to celebrate the <br className="lg:hidden" />
          beginning of our new journey.
        </motion.p>
        <div className="flex flex-col items-center justify-center leading-none pt-[51px] lg:pt-[62px]">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-kinfolk text-[32px] lg:text-[46px] text-[#7A883F] uppercase leading-[31px] lg:tracking-wide"
          >
            {groomFullName}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman text-[14px] lg:text-[20px] text-[#1B1C1D] pt-[24px] lg:pt-[37.5px]"
          >
            The son of
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman text-[14px] lg:text-[20px] text-[#1B1C1D] pt-[17.5px] lg:pt-[12px] leading-[20px] lg:leading-[26px]"
          >
            {splitParentName(groomParent)}
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
            className="w-[117px] h-[30px] lg:w-[150px] border border-[#000000]/30 flex items-center justify-center gap-[5px] lg:gap-[7px] font-times-new-roman text-[12px] lg:text-[16px] text-[#1B1C1D] rounded-[52px] mt-[15px] lg:mt-[34px] tracking-wide"
          >
            <Image
              src="/images/Michael-Vannya/Profile/Instagram.webp"
              alt="whatsapp"
              width={250}
              height={250}
              className="w-[13px] lg:w-[16px]"
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
          className="font-kinfolk text-[32px] lg:text-[46px] text-[#7A883F] pt-[31px] pb-[30px] lg:pt-[50px] lg:pb-[52px]"
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
            className="font-kinfolk text-[32px] lg:text-[46px] text-[#7A883F] uppercase leading-[31px] lg:tracking-wide"
          >
            {brideFullName}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman text-[14px] lg:text-[20px] text-[#1B1C1D] pt-[24px] lg:pt-[37.5px]"
          >
            The Daughter of
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman text-[14px] lg:text-[20px] text-[#1B1C1D] pt-[17.5px] lg:pt-[12px] leading-[20px] lg:leading-[26px]"
          >
            {splitParentName(brideParent)}
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
            className="w-[117px] lg:w-[150px] h-[30px] border border-[#000000]/30 flex items-center justify-center gap-[5px] lg:gap-[7px] font-times-new-roman text-[12px] lg:text-[16px] text-[#1B1C1D] rounded-[52px] mt-[15px] lg:mt-[34px] tracking-wide"
          >
            <Image
              src="/images/Michael-Vannya/Profile/Instagram.webp"
              alt="whatsapp"
              width={200}
              height={200}
              className="w-[13px] lg:w-[16px]"
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
          className="pt-[56.5px] lg:pt-[54px] font-times-new-roman text-[14px] lg:text-[20px] text-[#1B1C1D] leading-[20px] lg:leading-[26px]"
        >
          We look forward to celebrating <br />
          this new beginning with you.
        </motion.p>
      </div>
    </section>
  );
};

export default Profile;

// SEBELUM DI DINAMISKAN
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { fadeUp } from "../../../lib/animation";

// const Profile = () => {
//   return (
//     <section
//       id="profile"
//       className="relative w-full pt-[70px] lg:pt-[115px] pb-[72px] lg:pb-[118.5px] bg-white overflow-hidden"
//     >
//       {/* Ornament Kiri Atas */}
//       <Image
//         src="/images/Michael-Vannya/Profile/BungaKiriAtas.webp"
//         alt=""
//         width={700}
//         height={700}
//         className="absolute -top-[100px] -left-[10px] w-[205px] lg:-top-[300px] lg:-left-[22px] lg:w-[690px] h-auto pointer-events-none z-0"
//       />

//       {/* Ornament Kanan Bawah */}
//       <Image
//         src="/images/Michael-Vannya/Profile/BungaKananBawah.webp"
//         alt=""
//         width={300}
//         height={300}
//         className="absolute -bottom-[109px] -right-[0px] w-[223px] lg:-bottom-[308px] lg:-right-[47px] lg:w-[480px] h-auto pointer-events-none z-0"
//       />
//       <div className="relative z-10 flex flex-col items-center justify-center leading-none text-center">
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//         >
//           <Image
//             src="/images/Michael-Vannya/Hero/LogoMV.webp"
//             alt="ornament"
//             width={350}
//             height={350}
//             className="w-[97px] lg:w-[179px] h-auto mx-auto pointer-events-none"
//           />
//         </motion.div>
//         <motion.p
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           className="font-times-new-roman text-[14px] lg:text-[20px] text-[#1B1C1D] pt-[39px] lg:pt-[44px] leading-[18px] lg:leading-[26px]"
//         >
//           Together with our families, <br />
//           we joyfully invite you to celebrate the <br className="lg:hidden" />
//           beginning of our new journey.
//         </motion.p>
//         <div className="flex flex-col items-center justify-center leading-none pt-[51px] lg:pt-[62px]">
//           <motion.h2
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="font-kinfolk text-[32px] lg:text-[46px] text-[#7A883F] uppercase leading-[31px] lg:tracking-wide"
//           >
//             Michael Wijaya
//           </motion.h2>
//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="font-times-new-roman text-[14px] lg:text-[20px] text-[#1B1C1D] pt-[24px] lg:pt-[37.5px]"
//           >
//             The son of
//           </motion.p>
//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="font-times-new-roman text-[14px] lg:text-[20px] text-[#1B1C1D] pt-[17.5px] lg:pt-[12px] leading-[20px] lg:leading-[26px]"
//           >
//             Mr. Thian Fu Tjan (Chandra Harry Mulyanto) and{" "}
//             <br className="lg:hidden" />
//             Mrs. Bong Tjhai Sian (†)
//           </motion.p>
//           <motion.a
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             href="https://www.instagram.com/michaellmw"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-[117px] h-[30px] lg:w-[150px] border border-[#000000]/30 flex items-center justify-center gap-[5px] lg:gap-[7px] font-times-new-roman text-[12px] lg:text-[16px] text-[#1B1C1D] rounded-[52px] mt-[15px] lg:mt-[34px] tracking-wide"
//           >
//             <Image
//               src="/images/Michael-Vannya/Profile/Instagram.webp"
//               alt="whatsapp"
//               width={250}
//               height={250}
//               className="w-[13px] lg:w-[16px]"
//             />
//             michaellmw
//           </motion.a>
//         </div>
//         <motion.h2
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           className="font-kinfolk text-[32px] lg:text-[46px] text-[#7A883F] pt-[31px] pb-[30px] lg:pt-[50px] lg:pb-[52px]"
//         >
//           &
//         </motion.h2>
//         <div className="flex flex-col items-center justify-center leading-none">
//           <motion.h2
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="font-kinfolk text-[32px] lg:text-[46px] text-[#7A883F] uppercase leading-[31px] lg:tracking-wide"
//           >
//             Vannya Velysia Soegiarto
//           </motion.h2>
//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="font-times-new-roman text-[14px] lg:text-[20px] text-[#1B1C1D] pt-[24px] lg:pt-[37.5px]"
//           >
//             The Daughter of
//           </motion.p>
//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="font-times-new-roman text-[14px] lg:text-[20px] text-[#1B1C1D] pt-[17.5px] lg:pt-[12px] leading-[20px] lg:leading-[26px]"
//           >
//             Mr. Soegiarto Santo (Tjeng Fuk Yen) and <br className="lg:hidden" />
//             Mrs. Febe Yulia Hezron
//           </motion.p>
//           <motion.a
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             href="https://www.instagram.com/vannyazhuang"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-[117px] lg:w-[150px] h-[30px] border border-[#000000]/30 flex items-center justify-center gap-[5px] lg:gap-[7px] font-times-new-roman text-[12px] lg:text-[16px] text-[#1B1C1D] rounded-[52px] mt-[15px] lg:mt-[34px] tracking-wide"
//           >
//             <Image
//               src="/images/Michael-Vannya/Profile/Instagram.webp"
//               alt="whatsapp"
//               width={200}
//               height={200}
//               className="w-[13px] lg:w-[16px]"
//             />
//             vannyazhuang
//           </motion.a>
//         </div>
//         <motion.p
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           className="pt-[56.5px] lg:pt-[54px] font-times-new-roman text-[14px] lg:text-[20px] text-[#1B1C1D] leading-[20px] lg:leading-[26px]"
//         >
//           We look forward to celebrating <br />
//           this new beginning with you.
//         </motion.p>
//       </div>
//     </section>
//   );
// };

// export default Profile;
