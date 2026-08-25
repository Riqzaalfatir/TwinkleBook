"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";

type ProfileProps = {
  data?: any;
};

const getMiddleLastName = (fullName?: string, firstName?: string) => {
  if (!fullName) return "";
  if (firstName && fullName.startsWith(firstName)) {
    return fullName.slice(firstName.length).trim();
  }
  const idx = fullName.indexOf(" ");
  return idx === -1 ? "" : fullName.slice(idx + 1).trim();
};

const splitParentName = (text?: string) => {
  if (!text) return null;
  const idx = text.indexOf(" and ");
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)} <span className="uppercase">and</span>
      <br />
      {text.slice(idx + 5)}
    </>
  );
};

const Profile = ({ data }: ProfileProps) => {
  const groomName = data?.dataEvent?.groomName ?? "Peter";
  const groomFullName =
    data?.dataEvent?.groomFullName ?? "Peter Andreas Sutjiatma";
  const brideName = data?.dataEvent?.brideName ?? "Helena";
  const brideFullName = data?.dataEvent?.brideFullName ?? "Helena Surajiman";

  const groomParent =
    data?.dataEvent?.groomParent ??
    "Mr. Lie Andi Kunadi and Mrs. Juliasih Lukanta";
  const brideParent =
    data?.dataEvent?.brideParent ??
    "Mr. Setiyono Wibowo and Mrs. Wini Anggraini";

  const compilationVideo = data?.dataContent?.videoUploadData?.[0]?.url;
const videoSrc = compilationVideo
  ? `https://media.twinklebook.com/${compilationVideo}`
  : "/video/Peter-Helena/PeterHelenaCMP.mp4";

  return (
    <section
      id="profile"
      className="w-full bg-[#430D0D] pt-[78px] pb-[76.5px] lg:pt-[76.96px] lg:pb-[73px]"
    >
      <div className="flex flex-col items-center text-center justify-center leading-none">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <video
  src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-[342px] h-[142px] lg:w-[346.09px] lg:h-[143.9px] object-cover"
          />
        </motion.div>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-cinzel text-[14px] lg:text-[14.18px] text-white mt-[41px] lg:mt-[38.5px] leading-[20px]"
        >
          Together with their families <br /> invite you to celebrate <br />{" "}
          their marriage
        </motion.p>
        <div className="flex flex-col items-center justify-center leading-none mt-[49px] lg:mt-[47px]">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cinzel font-semibold text-[32px] lg:text-[32.41px] text-white uppercase"
          >
            {groomName.toUpperCase()}
          </motion.h2>
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-aston-script text-[20px] lg:text-[20.25px] text-white pt-[5px]"
          >
            {getMiddleLastName(groomFullName, groomName)}
          </motion.h3>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cinzel font-medium text-[14px] lg:text-[14.18px] text-white leading-[20px] pt-[35px] lg:pt-[32px]"
          >
            {splitParentName(groomParent)}
          </motion.p>
        </div>
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-cinzel text-[24px] lg:text-[24.3px] text-white py-[28px] lg:py-[29px]"
        >
          &
        </motion.h3>
        <div className="flex flex-col items-center justify-center leading-none">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cinzel font-semibold text-[32px] lg:text-[32.41px] text-white uppercase"
          >
            {brideName.toUpperCase()}
          </motion.h2>
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-aston-script text-[20px] lg:text-[20.25px] text-white pt-[5px]"
          >
            {getMiddleLastName(brideFullName, brideName)}
          </motion.h3>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cinzel font-medium text-[14px] lg:text-[14.18px] text-white leading-[20px] pt-[35px] lg:pt-[32px]"
          >
            {splitParentName(brideParent)}
          </motion.p>
        </div>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-cinzel text-[14px] lg:text-[14.18px] text-white leading-[20px] pt-[45px]"
        >
          Our joy will be complete with <br />
          your presence and blessings.
        </motion.p>
      </div>
    </section>
  );
};

export default Profile;

// SEBELUM DI DINAMISKAN
// import React from "react";
// import { motion } from "framer-motion";
// import { fadeUp } from "../../../lib/animation";

// const Profile = () => {
//   return (
//     <section
//       id="profile"
//       className="w-full bg-[#430D0D] pt-[78px] pb-[76.5px] lg:pt-[76.96px] lg:pb-[73px]"
//     >
//       <div className="flex flex-col items-center text-center justify-center leading-none">
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//         >
//           <video
//             src="/video/Peter-Helena/PeterHelenaCMP.mp4"
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="w-[342px] h-[142px] lg:w-[346.09px] lg:h-[143.9px] object-cover"
//           />
//         </motion.div>
//         <motion.p
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           className="font-cinzel text-[14px] lg:text-[14.18px] text-white mt-[41px] lg:mt-[38.5px] leading-[20px]"
//         >
//           Together with their families <br /> invite you to celebrate <br />{" "}
//           their marriage
//         </motion.p>
//         <div className="flex flex-col items-center justify-center leading-none mt-[49px] lg:mt-[47px]">
//           <motion.h2
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="font-cinzel font-semibold text-[32px] lg:text-[32.41px] text-white uppercase"
//           >
//             Peter
//           </motion.h2>
//           <motion.h3
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="font-aston-script text-[20px] lg:text-[20.25px] text-white pt-[5px]"
//           >
//             Andreas Sutjiatma
//           </motion.h3>
//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="font-cinzel font-medium text-[14px] lg:text-[14.18px] text-white leading-[20px] pt-[35px] lg:pt-[32px]"
//           >
//             Mr. Lie Andi Kunadi <span className="uppercase">and</span> <br />
//             Mrs. Juliasih Lukanta
//           </motion.p>
//         </div>
//         <motion.h3
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           className="font-cinzel text-[24px] lg:text-[24.3px] text-white py-[28px] lg:py-[29px]"
//         >
//           &
//         </motion.h3>
//         <div className="flex flex-col items-center justify-center leading-none">
//           <motion.h2
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="font-cinzel font-semibold text-[32px] lg:text-[32.41px] text-white uppercase"
//           >
//             Helena
//           </motion.h2>
//           <motion.h3
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="font-aston-script text-[20px] lg:text-[20.25px] text-white pt-[5px]"
//           >
//             Surajiman
//           </motion.h3>
//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="font-cinzel font-medium text-[14px] lg:text-[14.18px] text-white leading-[20px] pt-[35px] lg:pt-[32px]"
//           >
//             Mr. Setiyono Wibowo <span className="uppercase">and</span> <br />
//             Mrs. Wini Anggraini
//           </motion.p>
//         </div>
//         <motion.p
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           className="font-cinzel text-[14px] lg:text-[14.18px] text-white leading-[20px] pt-[45px]"
//         >
//           Our joy will be complete with <br />
//           your presence and blessings.
//         </motion.p>
//       </div>
//     </section>
//   );
// };

// export default Profile;
