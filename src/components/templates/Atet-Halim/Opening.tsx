"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type OpeningProps = {
  setStart: (v: boolean) => void;
  namaTamu?: string;
};

const blurVariants = {
  exit: {
    backdropFilter: "blur(0px)",
    backgroundColor: "rgba(0,0,0,0)",
    transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] as const, delay: 0.1 },
  },
};

const cardVariants = {
  exit: {
    opacity: 0,
    scale: 0.93,
    y: 30,
    transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] as const, delay: 0.1 },
  },
};

const Opening = ({ setStart, namaTamu = "Sela" }: OpeningProps) => {
  const [open, setOpen] = useState<boolean>(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleOpen = (): void => {
    setOpen(false);
    document.body.style.overflow = "auto";
    setTimeout(() => {
      setStart(true);
    }, 600);
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <div className="fixed inset-0 z-[100] flex justify-center items-center px-[4.10vw] lg:px-0">
          <motion.div
            variants={blurVariants}
            initial={{
              backdropFilter: "blur(3px)",
              backgroundColor: "rgba(0,0,0,0.25)",
            }}
            animate={{
              backdropFilter: "blur(3px)",
              backgroundColor: "rgba(0,0,0,0.25)",
            }}
            exit="exit"
            className="absolute inset-0 z-[10]"
            style={{ transform: "translateZ(0)" }}
          />

          {/* CONTENT CARD */}
          <motion.div
            variants={cardVariants}
            initial={{ opacity: 1, scale: 1, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit="exit"
            className="relative bg-[#F6F6F4] rounded-[3.08vw] lg:rounded-[16px] overflow-hidden w-[74.36vw] max-w-[320px] lg:w-[420px] lg:max-w-[420px] shadow-xl flex flex-col z-[100] [box-shadow:0px_8px_11.6px_0px_rgba(0,0,0,0.54)]"
          >
            {/* BACKGROUND KERTAS */}
            <Image
              src="/images/Atet-Halim/Hero/BackgoundKertas.webp"
              alt="background"
              fill
              className="object-cover z-0"
            />

            {/* BUNGA POJOK ATAS */}
            <Image
              src="/images/Atet-Halim/Opening/BungaKiriAtas.webp"
              alt="flower decoration"
              width={350}
              height={350}
              className="absolute -top-[1.28vw] -left-[1.28vw] lg:-top-[16px] lg:-left-[16px] w-[150px] lg:w-[180px] h-auto pointer-events-none z-30"
            />

            {/* BUNGA POJOK BAWAH */}
            <Image
              src="/images/Atet-Halim/Opening/BungaKananBawah.webp"
              alt="flower decoration"
              width={350}
              height={350}
              className="absolute -bottom-[1.28vw] -right-[1.28vw] lg:-bottom-[16px] lg:-right-[16px] w-[150px] lg:w-[180px] h-auto pointer-events-none z-30"
            />

            {/* LOGO STEMPEL */}
            <div className="relative z-20 flex flex-col items-center text-center px-[5.13vw] lg:px-[40px] pt-[68px] lg:pt-[80px] pb-[77px] lg:pb-[90px]">
              {/* TEXT UNDANGAN */}
              <p className="font-athelas text-[12px] lg:text-[16px] text-[#402824] leading-[1.6]">
                We cordially invite you <br />
                to celebrate our <br />
                50th Wedding Anniversary
              </p>

              <h1 className="font-athelas text-[20px] lg:text-[26px] text-[#402824] pt-[16px] lg:pt-[20px] tracking-wide leading-[1.4]">
                ATET WIJONO
              </h1>

              <h1 className="font-athelas text-[20px] lg:text-[26px] text-[#402824] pt-[0px] lg:pt-[4px] tracking-wide leading-[1.4]">
                &
              </h1>

              <h1 className="font-athelas text-[20px] lg:text-[26px] text-[#402824] pt-[0px] lg:pt-[4px] tracking-wide leading-[1.4]">
                TRISNAWATI HALIM
              </h1>

              <p className="font-athelas text-[10px] lg:text-[13px] text-[#402824] pt-[33px] lg:pt-[40px]">
                Dear,
              </p>
              <p className="font-athelas text-[14px] lg:text-[18px] text-[#402824] break-words max-w-full pt-[8px] lg:pt-[10px]">
                Sela
              </p>

              <p className="font-athelas text-[8px] lg:text-[10px] text-[#402824] leading-[1.6] pt-[24px] lg:pt-[30px] tracking-wide">
                We sincerely apologize
                <br />
                for any misspelling of names or titles.
              </p>

              <button
                onClick={handleOpen}
                className="bg-[#5E5036] hover:bg-[#402824] transition-colors flex items-center justify-center text-white w-[184px] h-[33px] lg:w-[220px] lg:h-[42px] rounded-full uppercase font-athelas text-[12px] lg:text-[14px] tracking-widest mt-[16px] lg:mt-[20px]"
              >
                <span>View Invitation</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Opening;
