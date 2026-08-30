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
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const cardVariants = {
  exit: {
    opacity: 0,
    scale: 0.93,
    y: 30,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const Opening = ({
  setStart,
  namaTamu = "[Guest Name]",
  groomName = "David",
  brideName = "Natasya",
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
    setStart(true);
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <div className="fixed inset-0 z-[100] flex justify-center items-center px-[16px]">
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

          <motion.div
            variants={cardVariants}
            initial={{ opacity: 1, scale: 1, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit="exit"
            className="relative bg-white rounded-[15px] lg:rounded-[20px] overflow-hidden w-[290px] max-w-[290px] lg:w-[416px] lg:max-w-[416px] shadow-xl flex flex-col z-[100] [box-shadow:0px_8px_11.6px_0px_rgba(0,0,0,0.54)]"
          >
            <div className="relative w-full h-[188px] lg:h-[221px] overflow-hidden z-10 bg-black pointer-events-none">
              <Image
                src="/images/David-Natasha/Opening/DNMobile.webp"
                alt={`${groomName} & ${brideName}`}
                fill
                className="object-cover lg:hidden"
                priority
              />
              <Image
                src="/images/David-Natasha/Opening/OpeningD.webp"
                alt={`${groomName} & ${brideName}`}
                fill
                className="object-cover hidden lg:block"
                priority
              />
            </div>

            <div className="relative z-20 flex flex-col items-center text-center px-[10px] pt-[46px] lg:pt-[58px] pb-[50px] lg:pb-[65px] overflow-hidden">
              <Image
                src="/images/David-Natasha/Opening/AsetAtasM.webp"
                alt="flower decoration"
                width={450}
                height={450}
                className="absolute top-0 left-0 w-[123px] h-auto pointer-events-none z-0"
              />
              <Image
                src="/images/David-Natasha/Opening/AsetBawahM.webp"
                alt="flower decoration"
                width={450}
                height={450}
                className="absolute bottom-0 right-0 w-[123px] h-auto pointer-events-none z-0"
              />

              <p className="relative z-10 font-cormorant-garamond text-[12px] lg:text-[18px] text-[#021125] uppercase">
                The Wedding of
              </p>

              <h1 className="relative z-10 font-sackers-italic-script text-[40px] lg:text-[56px] text-[#021125] leading-none break-words max-w-[280px]">
                {groomName} & {brideName}
              </h1>

              <p className="relative z-10 font-cormorant-garamond text-[12px] lg:text-[20px] text-[#021125] pt-[7.5px]">
                Dear,
              </p>
              <p className="relative z-10 font-cormorant-garamond text-[16px] lg:text-[24px] text-[#021125] pt-[4px] break-words max-w-[250px]">
                {namaTamu}
              </p>

              <p className="relative z-10 font-cormorant-garamond text-[10px] lg:text-[16px] text-[#021125] leading-[13px] pt-[19px]">
                We sincerely apologize
                <br />
                for any misspelling of names or titles.
              </p>

              <button
                onClick={handleOpen}
                className="relative z-10 bg-[#021125] transition-colors flex items-center justify-center text-white w-[154px] h-[30px] lg:w-[220px] lg:h-[35px] rounded-[52px] lg:rounded-[35px] uppercase font-cormorant-garamond text-[12px] lg:text-[16px] tracking-widest mt-[16px] lg:mt-[15px]"
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
