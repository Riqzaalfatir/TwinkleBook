"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type ImageData = {
  id?: string;
  filename?: string;
  url: string;
  type?: number;
  parentId?: string;
};

type OpeningProps = {
  setStart: (v: boolean) => void;
  namaTamu?: string;
  groomName?: string;
  brideName?: string;
  popUpIconImageData?: ImageData | null;
  hashTag?: string;
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
  popUpIconImageData = null,
  hashTag = "oVIDSYAllytogether",
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

  const apiImageUrl = popUpIconImageData?.url
    ? `https://media.twinklebook.com/${popUpIconImageData.url}`
    : null;

  return (
    <AnimatePresence mode="wait">
      {open && (
        <div className="fixed inset-0 z-[100] flex justify-center items-center px-[16px]">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src="/images/Lincoln-Laurensia/Opening/BgMobile.webp"
              alt="Opening background"
              fill
              priority
              className="object-cover object-top lg:hidden"
            />
            <Image
              src="/images/Lincoln-Laurensia/Opening/BgDekstop.webp"
              alt="Opening background"
              fill
              priority
              className="hidden object-cover object-top lg:block"
            />
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial={{ opacity: 1, scale: 1, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit="exit"
            className="relative bg-[#2F2F2F]/80 rounded-[15px] lg:rounded-[23.39px] overflow-hidden w-[290px] max-w-[290px] lg:w-[452.12px] lg:max-w-[452.12px] shadow-xl flex flex-col z-[100] [box-shadow:0px_8px_11.6px_0px_rgba(0,0,0,0.54)]"
          >
            

            <div className="relative z-20 flex flex-col items-center text-center pt-[48px] lg:pt-[90px] pb-[49px] lg:pb-[67px] overflow-hidden">

              <p className="relative z-10 font-poppins text-[12px] lg:text-[18px] text-white italic tracking-widest">
                we invite you to celebrate
              </p>

              <h1 className="relative z-10 font-overpass text-[30px] lg:text-[46px] text-white break-words max-w-[280px] lg:max-w-[320px] mt-[6px] lg:mt-[10px] leading-[33px] lg:leading-[43px] uppercase">
                <span className="mr-[25px] lg:mr-[50px]">{groomName} &</span>
                <span className="block ml-[52px] lg:ml-[60px]">{brideName}</span>
              </h1>

             

              <p className="relative z-10 font-poppins text-[12px] lg:text-[16px]  text-white pt-[7.82px] lg:pt-[10.89px]">
                SATURDAY, 19 SEPTEMBER 2026
              </p>

              <p className="relative z-10 poppins font-medium text-[12px] lg:text-[20px] text-white pt-[31px] lg:pt-[41px]">
                Mr./Mrs./Ms.
              </p>
              <p className="relative z-10 font-poppins text-[16px] lg:text-[24px] text-white pt-[12px] lg:pt-[14.86px] break-words max-w-[250px] leading-[19px] lg:leading-[20px]">
                NAMA & PARTNER
              </p>

              <p className="relative z-10 font-poppins text-[10px] lg:text-[16px] text-white italic pt-[22px] lg:pt-[50.48px]  leading-[19px] lg:leading-[20px]">
               we sincerely apologize <br />
for any misspelling of names or titles
              </p>

              

              <button
                onClick={handleOpen}
                className="relative z-10 bg-[#878787] transition-colors flex items-center justify-center text-white w-[162px] h-[22px] lg:w-[253px] lg:h-[31px] rounded-[6px] lg:rounded-[9.35px] uppercase font-poppins italic text-[12px] lg:text-[18px] mt-[8px] lg:mt-[20px]"
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