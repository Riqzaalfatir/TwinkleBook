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
  eventDate?: string;
  popUpIconImageData?: ImageData | null;
  hashTag?: string;
};

const cardVariants = {
  exit: {
    opacity: 0,
    scale: 0.93,
    y: 30,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const Opening = ({
  setStart,
  namaTamu = "",
  groomName = "David",
  brideName = "Natasya",
  eventDate = "Saturday, 19 September 2026",
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
  };

  const apiImageUrl = popUpIconImageData?.url
    ? `https://media.twinklebook.com/${popUpIconImageData.url}`
    : null;

  const displayName = namaTamu.trim() || "NAMA & PARTNER";

  return (
    <AnimatePresence onExitComplete={() => setStart(true)}>
      {open && (
        <motion.div
          key="opening"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
className="fixed inset-0 z-[100] flex justify-center items-center px-[4.103vw] lg:pt-0"        >
          <div className="absolute inset-0 z-0 bg-[#2F2F2F]">
            <div className="relative aspect-[390/844] w-full lg:hidden">
              <Image
                src="/images/Lincoln-Laurensia/Opening/BgMobile.webp"
                alt="Opening background"
                fill
                priority
                className="object-cover"
              />
            </div>
            <Image
              src="/images/Lincoln-Laurensia/Opening/BgDekstop.webp"
              alt="Opening background"
              fill
              priority
              className="hidden object-cover object-top lg:block"
            />
          </div>

          <motion.div
            variants={cardVariants}
            initial={false}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit="exit"
            className="relative antialiased bg-[#2F2F2F]/[0.92] lg:bg-[#2F2F2F]/[0.86] rounded-[3.846vw] rounded-tl-[4.872vw] lg:rounded-[23.39px] lg:rounded-tl-[29.62px] overflow-hidden w-[74.359vw] max-w-[74.359vw] lg:w-[452.15px] lg:max-w-[452.15px] flex flex-col z-[100] [box-shadow:0px_2.051vw_2.974vw_0px_rgba(0,0,0,0.76)] lg:[box-shadow:0px_12.47px_18.09px_0px_rgba(0,0,0,0.54)]"
          >
            <div className="relative z-20 flex flex-col items-center text-center pt-[12.308vw] lg:pt-[90px] pb-[12.564vw] lg:pb-[67px] overflow-hidden">
              <p className="relative z-10 font-poppins text-[3.077vw] lg:text-[18px] text-white italic tracking-wide">
                we invite you to celebrate
              </p>

              <h1 className="relative z-10 font-overpass text-[7.692vw] lg:text-[46px] text-white break-words max-w-[71.795vw] lg:max-w-[320px] mt-[2.564vw] lg:mt-[19px] leading-[8.462vw] lg:leading-[47px] uppercase">
                <span className="mr-[7.692vw] lg:mr-[50px]">{groomName} &</span>
                <span className="block ml-[10.256vw] lg:ml-[60px]">
                  {brideName}
                </span>
              </h1>

              <p className="relative z-10 font-poppins text-[3.077vw] lg:text-[18px] tracking-[0.02em] text-white uppercase pt-[2.308vw] lg:pt-[15px]">
                {eventDate}
              </p>

              <p className="relative z-10 font-poppins font-medium text-[3.077vw] lg:text-[18px] text-white pt-[7.949vw] lg:pt-[38px]">
                Mr./Mrs./Ms.
              </p>
              <p className="relative z-10 font-poppins text-[4.103vw] lg:text-[24px] text-white pt-[2.051vw] lg:pt-[14.86px] break-words max-w-[64.103vw] leading-[4.872vw] lg:leading-[20px]">
                {displayName}
              </p>

              <p className="relative z-10 font-poppins text-[2.564vw] lg:text-[16px] text-white italic pt-[4.872vw] lg:pt-[50.48px] leading-[3.333vw] lg:leading-[20px]">
                we sincerely apologize <br />
                for any misspelling of names or titles
              </p>

              <button
                onClick={handleOpen}
                className="relative z-10 bg-[#878787] transition-colors flex items-center justify-center text-white w-[41.538vw] h-[5.641vw] lg:w-[253px] lg:h-[31px] rounded-[1.538vw] lg:rounded-[9.35px] uppercase font-poppins italic text-[3.077vw] lg:text-[18px] mt-[3.59vw] lg:mt-[20px]"
              >
                <span>OPEN</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Opening;