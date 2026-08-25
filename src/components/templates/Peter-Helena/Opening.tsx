"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ResponsivePicture from "../../../hooks/ResponsivePicture";


type OpeningProps = {
  setStart: (v: boolean) => void;
  namaTamu?: string;
  groomName?: string;
  brideName?: string;
  eventDate?: string;
  backgroundUrl?: string;
};

const bgVariants = {
  exit: {
    opacity: 0,
    transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] as const },
  },
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
  namaTamu = "[Guest Name]",
  groomName = "Peter",
  brideName = "Helena",
  eventDate = "Sunday, 25 October 2026",
  backgroundUrl,
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
          {/* BACKGROUND FULL SCREEN */}
          <motion.div
            variants={bgVariants}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit="exit"
            className="absolute inset-0 z-0"
          >
           <ResponsivePicture
  mobileSrc={
    backgroundUrl ||
    "/images/Peter-Helena/Opening/PeterHelenaM.webp"
  }
  desktopSrc={
    backgroundUrl ||
    "/images/Peter-Helena/Opening/PeterHelenaD.webp"
  }
  alt="background"
  className={
    backgroundUrl
      ? "absolute inset-0 w-full h-full object-cover"
      : "absolute inset-0 w-full h-full object-cover object-center lg:object-[50%_20%]"
  }
  priority
/>
          </motion.div>

          {/* BLUR + DARK OVERLAY */}
          <motion.div
            variants={blurVariants}
            initial={{
              backdropFilter: "blur(3px)",
              backgroundColor: "rgba(0,0,0,0.35)",
            }}
            animate={{
              backdropFilter: "blur(3px)",
              backgroundColor: "rgba(0,0,0,0.35)",
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
            className="relative bg-[#EEDBCDC7]/80 rounded-[20px] lg:rounded-[22px] overflow-hidden w-[290px] max-w-[290px] lg:w-[416px] lg:max-w-[416px] shadow-xl flex flex-col z-[100] [box-shadow:0px_8px_11.6px_0px_rgba(0,0,0,0.54)]"
          >
            <div className="relative z-20 flex flex-col items-center text-center px-[10px] lg:px-[20px] pt-[45px] lg:pt-[59px] pb-[42.5px] lg:pb-[60px]">
              <p className="font-cinzel text-[12px] lg:text-[16px] text-[#430D0D] uppercase">
                We invite you to celebrate
              </p>

              <h1 className="font-aston-script text-[23.74px] lg:text-[40px] text-[#430D0D] pt-[10px] lg:pt-[23.5px]">
                <div className="leading-tight -ml-[20px] lg:-ml-[35px]">
                  {groomName}{" "}
                  <span className="text-[15.46px] lg:text-[26px] -ml-[5px]">
                    &
                  </span>
                </div>
                <div className="mt-[8px]">{brideName}</div>
              </h1>

              <p className="font-cinzel text-[12px] lg:text-[15.06px] text-[#430D0D] pt-[4px] lg:pt-[16.5px] font-medium">
                {eventDate}
              </p>

              <p className="font-cinzel text-[10px] lg:text-[14px] text-[#430D0D] pt-[29px] lg:pt-[38px]">
                Dear Mr./Mrs./Ms.
              </p>
              <p className="font-cinzel text-[12px] lg:text-[20px] text-[#430D0D] font-bold pt-[18px] lg:pt-[21.5px] leading-[15px] lg:leading-[18.83px]">
                {namaTamu}
              </p>

              <p className="font-cinzel text-[8px] lg:text-[12px] text-[#430D0D]  pt-[25px] lg:pt-[35px] uppercase lg:max-w-[280px] lg:leading-[25px]">
                we sincerely apologize <br />
                for any misspelling of names or titles
              </p>

              <button
                onClick={handleOpen}
                className="bg-[#430D0D] hover:bg-[#5a1414] transition-colors flex items-center justify-center text-[#FEF8EF] w-[162px] h-[36px] lg:w-[220px] lg:h-[35px] rounded-[6px] font-cinzel text-[14px] lg:text-[12px] mt-[17px] lg:mt-[26px] uppercase"
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

// SEBELUM DI DINAMISKAN
// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// type OpeningProps = {
//   setStart: (v: boolean) => void;
// };

// const bgVariants = {
//   exit: {
//     opacity: 0,
//     transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] as const },
//   },
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

// const Opening = ({ setStart }: OpeningProps) => {
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
//           {/* BACKGROUND FULL SCREEN */}
//           <motion.div
//             variants={bgVariants}
//             initial={{ opacity: 1 }}
//             animate={{ opacity: 1 }}
//             exit="exit"
//             className="absolute inset-0 z-0"
//           >
//             <Image
//               src="/images/Peter-Helena/Opening/PeterHelenaM.webp"
//               alt="background"
//               fill
//               priority
//               className="object-cover lg:hidden"
//             />
//             <Image
//               src="/images/Peter-Helena/Opening/PeterHelenaD.webp"
//               alt="background"
//               fill
//               priority
//               className="object-cover hidden lg:block object-[50%_20%]"
//             />
//           </motion.div>

//           {/* BLUR + DARK OVERLAY */}
//           <motion.div
//             variants={blurVariants}
//             initial={{
//               backdropFilter: "blur(3px)",
//               backgroundColor: "rgba(0,0,0,0.35)",
//             }}
//             animate={{
//               backdropFilter: "blur(3px)",
//               backgroundColor: "rgba(0,0,0,0.35)",
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
//             className="relative bg-[#EEDBCDC7]/80 rounded-[20px] lg:rounded-[22px] overflow-hidden w-[290px] max-w-[290px] lg:w-[416px] lg:max-w-[416px] shadow-xl flex flex-col z-[100] [box-shadow:0px_8px_11.6px_0px_rgba(0,0,0,0.54)]"
//           >
//             <div className="relative z-20 flex flex-col items-center text-center px-[10px] lg:px-[20px] pt-[45px] lg:pt-[59px] pb-[42.5px] lg:pb-[60px]">
//               <p className="font-cinzel text-[12px] lg:text-[16px] text-[#430D0D] uppercase">
//                 We invite you to celebrate
//               </p>

//               <h1 className="font-aston-script text-[23.74px] lg:text-[40px] text-[#430D0D] pt-[10px] lg:pt-[23.5px]">
//                 <div className="leading-tight -ml-[20px] lg:-ml-[35px]">
//                   Peter{" "}
//                   <span className="text-[15.46px] lg:text-[26px] -ml-[5px]">
//                     &
//                   </span>
//                 </div>
//                 <div className="mt-[8px]">Helena</div>
//               </h1>

//               <p className="font-cinzel text-[12px] lg:text-[15.06px] text-[#430D0D] pt-[4px] lg:pt-[16.5px] font-medium">
//                 Sunday, 25 October 2026
//               </p>

//               <p className="font-cinzel text-[10px] lg:text-[14px] text-[#430D0D] pt-[29px] lg:pt-[38px]">
//                 Dear Mr./Mrs./Ms.
//               </p>
//               <p className="font-cinzel text-[12px] lg:text-[20px] text-[#430D0D] font-bold pt-[18px] lg:pt-[21.5px] leading-[15px] lg:leading-[18.83px]">
//                 [Guest Name]
//               </p>

//               <p className="font-cinzel text-[8px] lg:text-[12px] text-[#430D0D]  pt-[25px] lg:pt-[35px] uppercase lg:max-w-[280px] lg:leading-[25px]">
//                 we sincerely apologize <br />
//                 for any misspelling of names or titles
//               </p>

//               <button
//                 onClick={handleOpen}
//                 className="bg-[#430D0D] hover:bg-[#5a1414] transition-colors flex items-center justify-center text-[#FEF8EF] w-[162px] h-[36px] lg:w-[220px] lg:h-[35px] rounded-[6px] font-cinzel text-[14px] lg:text-[12px] mt-[17px] lg:mt-[26px] uppercase"
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
