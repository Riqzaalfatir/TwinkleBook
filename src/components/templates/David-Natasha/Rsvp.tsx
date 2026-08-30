"use client";

import React, { useState } from "react";
import Image from "next/image";
import NotifModal from "../../../popup/NotifModal";
import { motion } from "framer-motion";
import { fadeUp, fadeRight, fadeLeft } from "../../../lib/animation";

type ModalType =
  | "incomplete_rsvp"
  | "confirm_rsvp"
  | "rsvp_confirmed_hadir"
  | "rsvp_confirmed_tidak_hadir"
  | null;

const Rsvp = () => {
  const [attendStatus, setAttendStatus] = useState<number>(0); // 0 = belum pilih, 1 = attend, 2 = unable
  const [modalType, setModalType] = useState<ModalType>(null);

  const waNumber = "6281998478131";

  const activeClass =
    "flex items-center justify-center w-[36.15vw] h-[10.26vw] lg:w-[13.43vw] lg:h-[2.78vw] bg-[#021125] rounded-[1.54vw] lg:rounded-[3.31vw] font-cormorant-garamond text-[3.33vw] lg:text-[1.19vw] text-white";
  const inactiveClass =
    "flex items-center justify-center w-[36.15vw] h-[10.26vw] lg:w-[13.43vw] lg:h-[2.78vw] border border-[#021125] rounded-[1.54vw] lg:rounded-[3.31vw] font-cormorant-garamond text-[3.33vw] lg:text-[1.19vw] text-[#021125]";

  const handleAttendClick = () => {
    setAttendStatus((prev) => (prev === 1 ? 0 : 1));
  };

  const handleUnableClick = () => {
    setAttendStatus((prev) => (prev === 2 ? 0 : 2));
  };

  const handleSubmitClick = () => {
    if (attendStatus === 0) {
      setModalType("incomplete_rsvp");
      return;
    }
    setModalType("confirm_rsvp");
  };

  const handleFinalConfirm = (): void => {
    setModalType(
      attendStatus === 1
        ? "rsvp_confirmed_hadir"
        : "rsvp_confirmed_tidak_hadir",
    );
  };

  return (
    <section id="rsvp" className="relative w-full  z-10">
      <Image
        src="/images/David-Natasha/Rsvp/AsetAtasG.webp"
        alt="flower decoration"
        width={450}
        height={450}
        className="absolute -top-[0vw] -left-[0vw] w-[84vw] lg:w-[37.2vw] h-auto pointer-events-none z-20"
      />
      <Image
        src="/images/David-Natasha/Rsvp/AsetTengahG.webp"
        alt="flower decoration"
        width={450}
        height={450}
        className="absolute -bottom-[56vw] lg:-bottom-[18.5vw] -right-[0vw] w-[26vw] lg:w-[17.8vw] h-auto pointer-events-none z-20"
      />
      <div className="relative z-[15] flex flex-col items-center text-center leading-none pt-[25.4vw] lg:pt-[9.54vw] pb-[15.38vw] lg:pb-[14.4vw] px-[6.15vw] lg:px-[0vw]">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-sackers-italic-script text-[13.33vw] lg:text-[5.29vw] text-[#021125] [--stroke-w:0.3px] lg:[--stroke-w:0.53px]"
          style={{ WebkitTextStroke: "var(--stroke-w) #021125" }}
        >
          Rsvp
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-cormorant-garamond text-[3.85vw] lg:text-[1.59vw] text-[#021125] mt-[8.2vw] lg:mt-[2.9vw]"
        >
          Dear Mr./Mrs./Ms.
        </motion.p>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-cormorant-garamond text-[3.85vw] lg:text-[1.72vw] text-[#021125] mt-[4.7vw] lg:mt-[1.63vw]"
        >
          [Guest Name]
        </motion.p>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-cormorant-garamond text-[3.33vw] lg:text-[1.59vw] text-[#021125] mt-[8.46vw] leading-[5vw] lg:leading-[1.8vw] lg:mt-[2.1vw]"
        >
          Kindly confirm your attendance before <br />
          11 June 2026
        </motion.p>
        <div className="flex items-center justify-center gap-[5.13vw] lg:gap-[1.90vw] mt-[8.3vw] lg:mt-[2.2vw]">
          <motion.button
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            type="button"
            onClick={handleAttendClick}
            className={attendStatus === 1 ? activeClass : inactiveClass}
          >
            ATTEND
          </motion.button>
          <motion.button
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            type="button"
            onClick={handleUnableClick}
            className={attendStatus === 2 ? activeClass : inactiveClass}
          >
            UNABLE TO <br /> ATTEND
          </motion.button>
        </div>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-cormorant-garamond text-[3.33vw] lg:text-[1.59vw] text-[#021125] mt-[21.77vw] lg:mt-[5.9vw]"
        >
          Confirm Your RSVP
        </motion.p>
        <motion.button
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          type="button"
          onClick={handleSubmitClick}
          className="flex items-center justify-center w-[41.28vw] h-[9.23vw]  lg:w-[14.55vw] lg:h-[3.44vw] bg-[#021125] rounded-[1.54vw] lg:rounded-[3.31vw] font-cormorant-garamond text-[3.33vw] lg:text-[1.19vw] text-white mt-[6.8vw] lg:mt-[2.1vw]"
        >
          CONFIRM UNABLE <br />
          TO ATTEND
        </motion.button>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-cormorant-garamond text-[2.82vw] lg:text-[1.59vw] text-[#021125] mt-[8.7vw] lg:mt-[4.10vw] leading-[3.8vw] lg:leading-[1.98vw]"
        >
          If you need assistance with your RSVP, <br />
          please contact our support team.
        </motion.p>
        <motion.a
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          href="https://wa.me/6281998478131"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-[41.28vw] lg:w-[14.55vw] h-[7.69vw] lg:h-[2.78vw] bg-[#12877B] rounded-[1.54vw] lg:rounded-[3.31vw] font-cormorant-garamond text-[3.33vw] lg:text-[1.06vw] text-white gap-[1.93vw] lg:gap-[0.75vw] mt-[7.8vw] lg:mt-[1.9vw]"
        >
          <Image
            src="/images/Michael-Vannya/Rsvp/Wa.png"
            alt="whatsapp"
            width={200}
            height={200}
            className="w-[5.25vw] lg:w-[1.68vw]"
          />
          CHAT SUPPORT
        </motion.a>
      </div>

      {modalType && (
        <NotifModal
          type={modalType}
          onClose={() => setModalType(null)}
          onConfirm={handleFinalConfirm}
          waNumber={waNumber}
        />
      )}
    </section>
  );
};

export default Rsvp;

// UKURAN SEBELUM DI KE VW KAN
// import React from "react";
// import Image from "next/image";

// const Rsvp = () => {
//   return (
//     <section className="relative w-full bg-[url('/images/David-Natasha/EventOrder/Kertas.webp')] bg-no-repeat [background-size:100%_100%] z-10">
//       <Image
//         src="/images/David-Natasha/Rsvp/AsetAtasM.webp"
//         alt="flower decoration"
//         width={450}
//         height={450}
//         className="absolute -top-[210px] -left-[150px] w-[500px] h-auto pointer-events-none z-20"
//       />
//       <Image
//         src="/images/David-Natasha/Rsvp/AsetTengahM.webp"
//         alt="flower decoration"
//         width={450}
//         height={450}
//         className="absolute -bottom-[250px] -right-[280px] w-[500px] h-auto pointer-events-none z-20"
//       />
//       <div className="relative z-[15] flex flex-col items-center text-center leading-none pt-[98px] pb-[60px] px-[24px]">
//         <h1
//           className="font-sackers-italic-script text-[52px] text-[#021125]"
//           style={{ WebkitTextStroke: "0.3px #021125" }}
//         >
//           Rsvp
//         </h1>
//         <p className="font-cormorant-garamond text-[15px] text-[#021125] mt-[20px]">
//           Dear Mr./Mrs./Ms.
//         </p>
//         <p className="font-cormorant-garamond text-[15px] text-[#021125] mt-[15px]">
//           [Guest Name]
//         </p>
//         <p className="font-cormorant-garamond text-[13px] text-[#021125] mt-[33px]">
//           Kindly confirm your attendance before <br />
//           [Due Date]
//         </p>
//         <div className="flex items-center justify-center gap-[20px] mt-[34px]">
//           <a
//             href=""
//             className="flex items-center justify-center w-[141px] h-[40px] bg-[#021125] rounded-[6px] font-cormorant-garamond text-[13px] text-white"
//           >
//             ATTEND
//           </a>
//           <a
//             href=""
//             className="flex items-center justify-center w-[141px] h-[40px] border border-[#021125] rounded-[6px] font-cormorant-garamond text-[13px] text-[#021125]"
//           >
//             UNABLE TO <br /> ATTEND
//           </a>
//         </div>
//         <p className="font-cormorant-garamond text-[13px] text-[#021125] mt-[81px]">
//           Confirm Your RSVP
//         </p>
//         <a
//           href=""
//           className="flex items-center justify-center w-[161px] h-[36px] bg-[#021125] rounded-[6px] font-cormorant-garamond text-[13px] text-white mt-[25px]"
//         >
//           CONFIRM UNABLE TO <br />
//           ATTEND
//         </a>
//         <p className="font-cormorant-garamond text-[11px] text-[#021125] mt-[34px]">
//           If you need assistance with your RSVP, <br />
//           please contact our support team.
//         </p>
//         <a
//           href="#"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center justify-center w-[161px] lg:w-[220px] h-[30px] lg:h-[42px] bg-[#12877B] rounded-[6px] font-cormorant-garamond text-[13px] lg:text-[16px] text-white gap-[7.51px] lg:gap-[10px] mt-[31px] lg:mt-[34px]"
//         >
//           <Image
//             src="/images/Michael-Vannya/Rsvp/Wa.png"
//             alt="whatsapp"
//             width={200}
//             height={200}
//             className="w-[20.49px]"
//           />
//           CHAT SUPPORT
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Rsvp;
