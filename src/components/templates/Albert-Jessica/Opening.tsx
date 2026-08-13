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
  popUpIconImageData?: ImageData | null; // dari dataContent API
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
  groomName = "Albert",
  brideName = "Jessica",
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
    setTimeout(() => {
      setStart(true);
    }, 600);
  };

  // Kalau API nyediain gambar (popUpIconImageData), pakai itu untuk mobile & desktop.
  // Kalau masih null (kayak sekarang), fallback ke hardcode mobile/desktop.
  const apiImageUrl = popUpIconImageData?.url
    ? `https://media.twinklebook.com/${popUpIconImageData.url}`
    : null;

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
            className="relative bg-[#EBE8E5] rounded-[15px] lg:rounded-[22px] overflow-hidden w-[290px] max-w-[290px] lg:w-[416px] lg:max-w-[416px] shadow-xl flex flex-col z-[100] [box-shadow:0px_8px_11.6px_0px_rgba(0,0,0,0.54)]"
          >
            {/* FOTO ATAS - FULL WIDTH */}
            <div className="relative w-full h-[180px] lg:h-[220px] overflow-hidden z-10 bg-black">
              {apiImageUrl ? (
                <Image
                  src={apiImageUrl}
                  alt={`${groomName} & ${brideName}`}
                  fill
                  className="object-cover -mt-[0px]"
                  priority
                  unoptimized
                />
              ) : (
                <>
                  <Image
                    src="/images/Albert-Jessica/Opening/OpeningMobile.webp"
                    alt={`${groomName} & ${brideName}`}
                    fill
                    className="object-cover -mt-[0px] lg:hidden"
                    priority
                  />
                  <Image
                    src="/images/Albert-Jessica/Opening/OpeningDekstop.webp"
                    alt={`${groomName} & ${brideName}`}
                    fill
                    className="object-cover -mt-[0px] hidden lg:block"
                    priority
                  />
                </>
              )}
            </div>

            <div className="relative z-20 flex flex-col items-center text-center px-[10px] lg:px-[20px] pt-[20px] lg:pt-[27px] pb-[30px] lg:pb-[40px]">
              <p className="font-lora text-[12px] lg:text-[14px] text-black">
                The Wedding of
              </p>

              <h1 className="font-marcellus text-[28px] lg:text-[36px] text-[#A4753A] pt-[3px] lg:pt-[5px] tracking-wide leading-none break-words max-w-[250px] lg:max-w-[375px]">
                {groomName.toUpperCase()} & {brideName.toUpperCase()}
              </h1>

              <p className="font-lora text-[12px] lg:text-[14px] text-black pt-[14px] lg:pt-[21px]">
                Dear,
              </p>
              <p className="font-lora text-[14px] lg:text-[18px] text-black pt-[3px] break-words max-w-[250px] lg:max-w-[375px]">
                {namaTamu}
              </p>

              <p className="font-lora text-[10px] lg:text-[12px] text-black leading-[14px] lg:leading-[17px] pt-[27px] lg:pt-[32px]">
                We sincerely apologize
                <br />
                for any misspelling of names or titles.
              </p>

              <button
                onClick={handleOpen}
                className="bg-[#473B2F] hover:bg-[#402824] transition-colors flex items-center justify-center text-[#F6F6F4] w-[184px] h-[30.25px] lg:w-[220px] lg:h-[40px] rounded-[25px] lg:rounded-[40px] uppercase font-lora text-[14px] lg:text-[18px] tracking-widest mt-[15px] lg:mt-[23px]"
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

// // SEBELUM ALBERT JESSICA DI LATCHIING
// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// type OpeningProps = {
//   setStart: (v: boolean) => void;
//   namaTamu?: string;
//   groomFullName?: string;
//   brideFullName?: string;
// };

// const blurVariants = {
//   exit: {
//     backdropFilter: "blur(0px)",
//     backgroundColor: "rgba(0,0,0,0)",
//     transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] as const, delay: 0.1 },
//   },
// };

// const cardVariants = {
//   exit: {
//     opacity: 0,
//     scale: 0.93,
//     y: 30,
//     transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] as const, delay: 0.1 },
//   },
// };

// const Opening = ({
//   setStart,
//   namaTamu = "Tamu Undangan",
//   groomFullName = "Albert Nathaniel",
//   brideFullName = "Jessica Nathalie Wibowo",
// }: OpeningProps) => {
//   const [open, setOpen] = useState<boolean>(true);

//   useEffect(() => {
//     document.documentElement.classList.add("no-scroll");

//     const preventTouch = (e: TouchEvent) => e.preventDefault();
//     document.addEventListener("touchmove", preventTouch, { passive: false });

//     return () => {
//       document.documentElement.classList.remove("no-scroll");
//       document.removeEventListener("touchmove", preventTouch);
//     };
//   }, []);

//   const handleOpen = (): void => {
//     setOpen(false);
//     document.documentElement.classList.remove("no-scroll");
//     setTimeout(() => {
//       setStart(true);
//     }, 600);
//   };

//   return (
//     <AnimatePresence mode="wait">
//       {open && (
//         <div className="fixed inset-0 z-[100] flex justify-center items-center px-[4.10vw] lg:px-0">
//           <motion.div
//             variants={blurVariants}
//             initial={{
//               backdropFilter: "blur(3px)",
//               backgroundColor: "rgba(0,0,0,0.25)",
//             }}
//             animate={{
//               backdropFilter: "blur(3px)",
//               backgroundColor: "rgba(0,0,0,0.25)",
//             }}
//             exit="exit"
//             className="absolute inset-0 z-[10]"
//             style={{ transform: "translateZ(0)" }}
//           />

//           {/* CONTENT CARD */}
//           <motion.div
//             variants={cardVariants}
//             initial={{ opacity: 1, scale: 1, y: 0 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit="exit"
//             className="relative bg-[#EBE8E5] rounded-[15px] lg:rounded-[22px] overflow-hidden w-[290px] max-w-[290px] lg:w-[416px] lg:max-w-[416px] shadow-xl flex flex-col z-[100] [box-shadow:0px_8px_11.6px_0px_rgba(0,0,0,0.54)]"
//           >
//             {/* FOTO ATAS - FULL WIDTH */}
//             <div className="relative w-full h-[180px] lg:h-[220px] overflow-hidden z-10 bg-black">
//               <Image
//                 src="/images/Albert-Jessica/Opening/OpeningMobile.webp"
//                 alt="Albert & Jessica"
//                 fill
//                 className="object-cover -mt-[0px] lg:hidden"
//                 priority
//               />
//               <Image
//                 src="/images/Albert-Jessica/Opening/OpeningDekstop.webp"
//                 alt="Albert & Jessica"
//                 fill
//                 className="object-cover -mt-[0px] hidden lg:block"
//                 priority
//               />
//             </div>

//             <div className="relative z-20 flex flex-col items-center text-center px-[10px] lg:px-[20px] pt-[20px] lg:pt-[27px] pb-[30px] lg:pb-[40px]">
//               {/* TEXT UNDANGAN */}
//               <p className="font-lora text-[12px] lg:text-[14px] text-black">
//                 The Wedding of
//               </p>

//               <h1 className="font-marcellus text-[28px] lg:text-[36px] text-[#A4753A] pt-[3px] lg:pt-[5px] tracking-wide leading-none break-words max-w-[250px] lg:max-w-[375px]">
//                 ALBERT & JESSICA
//               </h1>

//               <p className="font-lora text-[12px] lg:text-[14px] text-black pt-[14px] lg:pt-[21px]">
//                 Dear,
//               </p>
//               <p className="font-lora text-[14px] lg:text-[18px] text-black pt-[3px]">
//                 Sela
//               </p>

//               <p className="font-lora text-[10px] lg:text-[12px] text-black leading-[14px] lg:leading-[17px] pt-[27px] lg:pt-[32px]">
//                 We sincerely apologize
//                 <br />
//                 for any misspelling of names or titles.
//               </p>

//               <button
//                 onClick={handleOpen}
//                 className="bg-[#473B2F] hover:bg-[#402824] transition-colors flex items-center justify-center text-[#F6F6F4] w-[184px] h-[30.25px] lg:w-[220px] lg:h-[40px] rounded-[25px] lg:rounded-[40px] uppercase font-lora text-[14px] lg:text-[18px] tracking-widest mt-[15px] lg:mt-[23px]"
//               >
//                 <span>View Invitation</span>
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Opening;
