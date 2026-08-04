"use client";

import { useState } from "react";
import Image from "next/image";
import NotifModal from "./popup/NotifModal"; // TODO: cek lagi path-nya, sesuaikan sama struktur folder project ini
import { motion } from "framer-motion";
import { fadeUp, fadeIn, scaleIn, stagger } from "../../../lib/animation";

type RsvpProps = {
  data?: {
    guestName?: string;
    deadline?: string;
  };
};

type Selected = "attend" | "unable" | null;
type ModalType = string | null;

const Rsvp = ({ data }: RsvpProps) => {
  const [selected, setSelected] = useState<Selected>(null);
  const [modalType, setModalType] = useState<ModalType>(null);

  const guestName = data?.guestName ?? "Sela";
  const deadline = data?.deadline ?? "12 September 2026";

  // Logic konfirmasi, disamain kayak code lama
  const handleConfirm = (): void => {
    if (!selected) {
      setModalType("incomplete_rsvp"); // popup: belum pilih ATTEND/UNABLE
      return;
    }
    setModalType("confirm_rsvp"); // popup: "yakin nih pilihannya?"
  };

  const handleFinalConfirm = (): void => {
    setModalType(null);
    // TODO: di sinilah nanti tempat manggil submit ke backend/API (InputRSVP)
    if (selected === "attend") {
      setModalType("rsvp_confirmed_hadir");
    } else {
      setModalType("rsvp_confirmed_tidak_hadir");
    }
  };

  return (
    <>
      <section className="relative w-full overflow-hidden pt-[19vw] lg:pt-[180px] pb-[41.54vw] lg:pb-[158px]">
        {/* BUNGA POJOK KANAN ATAS */}
        <Image
          src="/images/Atet-Halim/Rsvp/BungaKananAtass.webp"
          alt="flower decoration"
          width={450}
          height={450}
          className="absolute -top-[3.85vw] lg:-bottom-[0px] right-0 w-[33.08vw] lg:w-[240px] h-auto pointer-events-none z-30"
        />

        {/* BUNGA POJOK KIRI BAWAH */}
        <Image
          src="/images/Atet-Halim/Rsvp/BungaKiriBawahh.webp"
          alt="flower decoration"
          width={450}
          height={450}
          className="absolute -bottom-[33.33vw] lg:-bottom-[210px] left-0 w-[50.26vw] lg:w-[330px] h-auto pointer-events-none z-30"
        />

        {/* BUNGA POJOK KANAN BAWAH */}
        <Image
          src="/images/Atet-Halim/Rsvp/BungaKananBawahh.webp"
          alt="flower decoration"
          width={450}
          height={450}
          className="absolute -bottom-[33.33vw] lg:-bottom-[210px] right-0 w-[50.26vw] lg:w-[330px] h-auto pointer-events-none z-30"
        />

        {/* KONTEN */}
        <div className="relative z-20 flex flex-col items-center text-center px-[8.21vw] lg:px-[20px]">
          {/* RSVP */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-poltawski text-[7.18vw] lg:text-[48px] text-[#402824] tracking-wide"
          >
            RSVP
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
              src="/images/Atet-Halim/EventOrder/OrnamentGaris.webp"
              alt="ornament"
              width={250}
              height={250}
              className="w-[36.41vw] lg:w-[227px] h-auto lg:-mt-[5px]"
            />
          </motion.div>

          {/* DEAR, NAMA */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-athelas text-[3.9vw] lg:text-[22px] text-[#402824] mt-[6.41vw] lg:mt-[55px]"
          >
            Dear,
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-athelas text-[3.59vw] lg:text-[30px] text-[#402824] mt-[5.13vw] lg:mt-[23px]"
          >
            {guestName}
          </motion.p>

          {/* KONFIRMASI TEXT */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-athelas text-[3.59vw] lg:text-[22px] text-[#402824] mt-[4.62vw] lg:mt-[25px]"
          >
            Kindly confirm your attendance before <br />
            {deadline}
          </motion.p>

          {/* TOMBOL ATTEND / UNABLE TO ATTEND */}
          {/* TOMBOL ATTEND / UNABLE TO ATTEND */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex gap-[5.13vw] lg:gap-[23.5px] mt-[10.26vw] lg:mt-[34px]"
          >
            <button
              onClick={() =>
                setSelected(selected === "attend" ? null : "attend")
              }
              className={`w-[31.03vw] lg:w-[235px] h-[10.26vw] lg:h-[47px] text-[3.59vw] lg:text-[22px] tracking-wide font-athelas rounded-[1.54vw] lg:rounded-[10px] border transition-colors ${
                selected === "attend"
                  ? "bg-[#5E5036] text-white border-[#5E5036]"
                  : "bg-transparent text-[#402824] border-[#5E5036]"
              }`}
            >
              ATTEND
            </button>
            <button
              onClick={() =>
                setSelected(selected === "unable" ? null : "unable")
              }
              className={`w-[31.03vw] lg:w-[235px] h-[10.26vw] lg:h-[47px] text-[3.59vw] lg:text-[22px] leading-none font-athelas rounded-[1.54vw] lg:rounded-[10px] border transition-colors ${
                selected === "unable"
                  ? "bg-[#5E5036] text-white border-[#5E5036]"
                  : "bg-transparent text-[#402824] border-[#5E5036]"
              }`}
            >
              UNABLE TO <br className="lg:hidden" />
              ATTEND
            </button>
          </motion.div>

          {/* CONFIRM SELECTION — sekarang SELALU muncul, kayak code lama */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-athelas text-[3.59vw] lg:text-[22px] text-[#402824] mt-[10.26vw] lg:mt-[72px]"
          >
            {selected === "unable"
              ? "ARE YOU SURE?"
              : "Confirm your selection?"}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <button
              onClick={handleConfirm}
              className="w-[41.03vw] lg:w-[388px] h-[8.46vw] lg:h-[47px] mt-[6.67vw] lg:mt-[68px] bg-[#5E5036] text-white text-[3.08vw] lg:text-[22px] tracking-wide font-athelas rounded-[1.54vw] lg:rounded-[10px]"
            >
              {selected === "attend"
                ? "CONFIRM ATTEND"
                : selected === "unable"
                  ? "CONFIRM NOT ATTEND"
                  : "CONFIRM"}
            </button>
          </motion.div>

          {/* SUPPORT TEXT */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-athelas text-[3.08vw] lg:text-[22px] text-[#402824] mt-[11.79vw] lg:mt-[60px] leading-[1.3] lg:leading-[30px]"
          >
            If you need assistance with your RSVP, <br />
            please contact our support team.
          </motion.p>

          {/* CHAT SUPPORT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <a
              href="https://wa.me/6281998478131"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-[2.05vw] lg:gap-[10px] h-[8.46vw] lg:h-[47px] w-[41.03vw] lg:w-[388px] mt-[5.38vw] lg:mt-[25px] bg-[#12877B] text-white text-[3.08vw] lg:text-[22px] tracking-wide font-athelas rounded-[1.54vw] lg:rounded-[10px]"
            >
              <Image
                src="/images/Atet-Halim/Rsvp/Wa.png"
                alt="whatsapp"
                width={18}
                height={18}
                className="w-[18px] lg:w-[28px]"
              />
              CHAT SUPPORT
            </a>
          </motion.div>
        </div>
      </section>

      {modalType && (
        <NotifModal
          type={modalType}
          onClose={() => setModalType(null)}
          onConfirm={handleFinalConfirm}
          waNumber="6281234567890"
        />
      )}
    </>
  );
};

export default Rsvp;
