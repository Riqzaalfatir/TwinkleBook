"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type OpeningProps = {
  setStart: (v: boolean) => void;
  namaTamu?: string;
  groomName?: string;
  brideName?: string;
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

const Opening = ({
  setStart,
  namaTamu = "Tamu Undangan",
  groomName = "Michael",
  brideName = "Vannya",
}: OpeningProps) => {
  const [open, setOpen] = useState<boolean>(true);

  useEffect(() => {
    document.documentElement.classList.add("no-scroll");

    const preventTouch = (e: TouchEvent) => e.preventDefault();
    document.addEventListener("touchmove", preventTouch, { passive: false });

    return () => {
      document.documentElement.classList.remove("no-scroll");
      document.removeEventListener("touchmove", preventTouch);
    };
  }, []);

  const handleOpen = (): void => {
    setOpen(false);
    document.documentElement.classList.remove("no-scroll");
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
              backdropFilter: "blur(4px)",
              backgroundColor: "rgba(0,0,0,0.20)",
            }}
            animate={{
              backdropFilter: "blur(4px)",
              backgroundColor: "rgba(0,0,0,0.20)",
            }}
            exit="exit"
            className="absolute inset-0 z-[10]"
            style={{ transform: "translateZ(0)" }}
          />

          {/* CONTENT CARD */}
          {/* CONTENT CARD */}
          <motion.div
            variants={cardVariants}
            initial={{ opacity: 1, scale: 1, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit="exit"
            className="relative bg-white rounded-[15px] lg:rounded-[22px] overflow-hidden w-[290px] max-w-[290px] lg:w-[416px] lg:max-w-[416px] shadow-xl flex flex-col z-[100] [box-shadow:0px_8px_11.6px_0px_rgba(0,0,0,0.54)]"
          >
            {/* FOTO ATAS - FULL WIDTH, STATIS */}
            <div className="relative w-full h-[180px] lg:h-[220px] overflow-hidden z-10 bg-black pointer-events-none">
              <Image
                src="/images/Michael-Vannya/Opening/OpeningM.webp"
                alt={`${groomName} & ${brideName}`}
                fill
                className="object-cover -mt-[0px] lg:hidden"
                priority
              />
              <Image
                src="/images/Michael-Vannya/Opening/OpeningD.webp"
                alt={`${groomName} & ${brideName}`}
                fill
                className="object-cover -mt-[0px] hidden lg:block"
                priority
              />
            </div>

            {/* AREA TEKS - punya bunga di pojok kiri-atas & kanan-bawah */}
            <div className="relative z-20 flex flex-col items-center text-center px-[10px] lg:px-[20px] pt-[29px] lg:pt-[32px] pb-[33px] lg:pb-[38px] overflow-hidden">
              {/* BUNGA POJOK KIRI ATAS - nempel di pojok kiri-atas area teks (tepat di bawah foto) */}
              <Image
                src="/images/Michael-Vannya/Opening/BungaKiriAtas.webp"
                alt="flower decoration"
                width={450}
                height={450}
                className="absolute -top-[0px] -left-[0px] w-[100px] lg:w-[130px] h-auto pointer-events-none z-0"
              />

              {/* BUNGA POJOK KANAN BAWAH - nempel di pojok kanan-bawah card */}
              <Image
                src="/images/Michael-Vannya/Opening/BungaKananBawah.webp"
                alt="flower decoration"
                width={450}
                height={450}
                className="absolute -bottom-[0px] -right-[0px] w-[100px] lg:w-[130px] h-auto pointer-events-none z-0"
              />

              <p className="relative z-10 font-times-new-roman text-[10px] lg:text-[14px] text-[#4D4D4D] uppercase">
                The Wedding of
              </p>

              <h1 className="relative z-10 font-kinfolk text-[24px] lg:text-[32px] text-[#7A883F] pt-[7px] lg:pt-[11px]  leading-none break-words max-w-[280px] lg:max-w-[400px]">
                {groomName.toUpperCase()} & {brideName.toUpperCase()}
              </h1>

              <p className="relative z-10 font-times-new-roman text-[12px] lg:text-[16px] text-[#4D4D4D] pt-[22px] lg:pt-[22px]">
                Dear,
              </p>
              <p className="relative z-10 font-times-new-roman text-[16px] lg:text-[20px] text-[#4D4D4D] pt-[5px] break-words max-w-[250px] lg:max-w-[375px]">
                [Guest Name]
              </p>

              <p className="relative z-10 font-times-new-roman text-[10px] lg:text-[12px] text-[#4D4D4D] leading-[13px] lg:leading-[16px] pt-[18px] lg:pt-[22px]">
                We sincerely apologize
                <br />
                for any misspelling of names or titles.
              </p>

              <button
                onClick={handleOpen}
                className="relative z-10 bg-[#434341] transition-colors flex items-center justify-center text-white w-[154px] h-[30px] lg:w-[220px] lg:h-[35px] rounded-[52px] lg:rounded-[35px] uppercase font-times-new-roman text-[12px] lg:text-[12px] tracking-widest mt-[15px] lg:mt-[18px]"
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
