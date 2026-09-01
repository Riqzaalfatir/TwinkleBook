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
  popUpIconImageData = null,
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

  // Kalau API nyediain gambar (popUpIconImageData), pakai itu untuk mobile & desktop.
  // Kalau masih null, fallback ke hardcode mobile/desktop punya David-Natasha.
  const apiImageUrl = popUpIconImageData?.url
    ? `https://media.twinklebook.com/${popUpIconImageData.url}`
    : null;

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
              {apiImageUrl ? (
                <Image
                  src={apiImageUrl}
                  alt={`${groomName} & ${brideName}`}
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              ) : (
                <>
                  <Image
                    src="/images/David-Natasha/Opening/DNMobile.avif"
                    alt={`${groomName} & ${brideName}`}
                    fill
                    className="object-cover lg:hidden"
                    priority
                  />
                  <Image
                    src="/images/David-Natasha/Opening/OpeningD.avif"
                    alt={`${groomName} & ${brideName}`}
                    fill
                    className="object-cover hidden lg:block"
                    priority
                  />
                </>
              )}
            </div>

            <div className="relative z-20 flex flex-col items-center text-center pt-[48px] lg:pt-[58px] pb-[50px] lg:pb-[65px] overflow-hidden">
              <Image
                src="/images/David-Natasha/Opening/AsetAtasM.avif"
                alt="flower decoration"
                width={450}
                height={450}
                className="absolute top-0 left-0 w-[125px] lg:w-[160px] h-auto pointer-events-none z-0"
              />
              <Image
                src="/images/David-Natasha/Opening/AsetBawahM.avif"
                alt="flower decoration"
                width={450}
                height={450}
                className="absolute bottom-0 right-0 w-[125px] lg:w-[145px] h-auto pointer-events-none z-0"
              />

              <p className="relative z-10 font-cormorant-garamond text-[12px] lg:text-[18px] text-[#021125] uppercase">
                The Wedding of
              </p>

              <h1 className="relative z-10 font-sackers-italic-script text-[40px] lg:text-[56px] text-[#021125] break-words max-w-[280px] lg:max-w-[320px] mt-[5.2px] lg:mt-[10px] leading-[26px] lg:leading-[32px]">
                {groomName} & {brideName}
              </h1>

              <p className="relative z-10 font-cormorant-garamond text-[12px] lg:text-[20px] text-[#021125] pt-[14.8px] lg:pt-[19px]">
                Dear,
              </p>
              <p className="relative z-10 font-cormorant-garamond text-[16px] lg:text-[24px] text-[#021125] pt-[6px] lg:pt-[0px] lg:mt-[3px] break-words max-w-[250px] leading-[19px] lg:leading-[20px]">
                {namaTamu}
              </p>

              <p className="relative z-10 font-cormorant-garamond text-[10px] lg:text-[16px] text-[#021125] leading-[13.7px] lg:leading-[19px] pt-[20px] lg:pt-[26px]">
                We sincerely apologize
                <br />
                for any misspelling of names or titles.
              </p>

              <button
                onClick={handleOpen}
                className="relative z-10 bg-[#021125] transition-colors flex items-center justify-center text-white w-[154px] h-[30px] lg:w-[220px] lg:h-[35px] rounded-[52px] lg:rounded-[35px] uppercase font-cormorant-garamond text-[12px] lg:text-[16px] tracking-widest mt-[15px] lg:mt-[15px]"
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
