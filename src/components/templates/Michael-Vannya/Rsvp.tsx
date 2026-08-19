"use client";

import React, { useState } from "react";
import Image from "next/image";
import NotifModal from "../../../popup/NotifModal";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight } from "../../../lib/animation";

type AttendStatus = 0 | 1 | 2; // 0: belum pilih, 1: attend, 2: unable to attend
type ModalType =
  | ""
  | "confirm_rsvp"
  | "rsvp_confirmed_hadir"
  | "rsvp_confirmed_tidak_hadir";

const Rsvp = () => {
  const [attendStatus, setAttendStatus] = useState<AttendStatus>(0);
  const [modalType, setModalType] = useState<ModalType>("");

  const handleAttendClick = (status: AttendStatus) => {
    setAttendStatus((prev) => (prev === status ? 0 : status));
  };

  const handleConfirmClick = () => {
    if (attendStatus === 0) return; // belum pilih attend/unable
    setModalType("confirm_rsvp");
  };

  const handleConfirmed = () => {
    setModalType(
      attendStatus === 1
        ? "rsvp_confirmed_hadir"
        : "rsvp_confirmed_tidak_hadir",
    );
  };

  const handleCloseModal = () => {
    setModalType("");
  };

  return (
    <section
      id="rsvp"
      className="relative w-full pt-[109px] pb-[78.5px] bg-white"
    >
      {/* Ornament Kanan Bawah */}
      <Image
        src="/images/Michael-Vannya/Rsvp/BungaKiriBawah.webp"
        alt=""
        width={300}
        height={300}
        className="absolute -bottom-[60px] -left-[5px] w-[190px] h-auto pointer-events-none z-0"
      />
      <div className="relative flex flex-col items-center justify-center text-center leading-none">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-kinfolk text-[34px] text-[#00273E]"
        >
          RSVP
        </motion.h1>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/images/Michael-Vannya/Dresscode/Ornamentgaris.png"
            alt="ornament"
            width={250}
            height={250}
            className="w-[95px] h-auto pointer-events-none"
          />
        </motion.div>
        <div className="flex flex-col items-center justify-center text-center leading-none">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman text-[14px] text-[#1B1C1D] pt-[25px]"
          >
            Dear Mr. /Mrs. / Ms.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman text-[14px] text-[#1B1C1D] pt-[10.5px]"
          >
            [Guest Name]
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman text-[12px] text-[#1B1C1D] pt-[18px]"
          >
            Kindly confirm your attendance before <br />
            <span className="block pt-[8px]">[Due Date]</span>
          </motion.p>
          <div className="flex items-center justify-center gap-[22px] mt-[24px]">
            <motion.button
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              onClick={() => handleAttendClick(1)}
              className={`w-[113px] h-[42px] rounded-[71px] font-times-new-roman text-[12px] text-wrap flex items-center justify-center transition-colors ${
                attendStatus === 1
                  ? "bg-[#434341] text-white"
                  : "bg-transparent border border-[#1B1C1D]/50 text-[#292A2B]"
              }`}
            >
              ATTEND
            </motion.button>
            <motion.button
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              onClick={() => handleAttendClick(2)}
              className={`w-[113px] h-[42px] rounded-[71px] font-times-new-roman text-[12px] flex items-center justify-center transition-colors ${
                attendStatus === 2
                  ? "bg-[#434341] text-white"
                  : "border border-[#1B1C1D]/50 text-[#292A2B]"
              }`}
            >
              UNABLE TO <br />
              ATTEND
            </motion.button>
          </div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman text-[12px] text-[#1B1C1D] pt-[59px]"
          >
            Confirm Your RSVP
          </motion.p>
          <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            onClick={handleConfirmClick}
            className="w-[160px] h-[42px] rounded-[71px] bg-[#434341] font-times-new-roman text-[12px] text-white flex items-center justify-center mt-[25px] leading-[16px]"
          >
            CONFIRM {attendStatus === 2 ? "UNABLE" : ""} <br />
            TO ATTEND
          </motion.a>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman text-[10px] text-[#1B1C1D] pt-[54.5px] leading-[16px]"
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
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-[160px] h-[30px] bg-[#12877B] rounded-[55px] font-times-new-roman text-[12px] text-white gap-[6px] mt-[23.2px]"
          >
            <Image
              src="/images/Michael-Vannya/Rsvp/Wa.png"
              alt="whatsapp"
              width={200}
              height={200}
              className="w-[16px]"
            />
            CHAT SUPPORT
          </motion.a>
        </div>
      </div>

      {modalType && (
        <NotifModal
          type={modalType}
          onClose={handleCloseModal}
          onConfirm={handleConfirmed}
        />
      )}
    </section>
  );
};

export default Rsvp;