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

const Opening = ({
  setStart,
  namaTamu = "Tamu Undangan",
  groomName = "Groom",
  groomFullName = "Groom Name",
  brideName = "Bride",
  brideFullName = "Bride Name",
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
            className="relative bg-[#F6F6F4] rounded-[3.08vw] lg:rounded-[22px] overflow-hidden w-[74.36vw] max-w-[320px] lg:w-[416px] lg:max-w-[416px] shadow-xl flex flex-col z-[100] [box-shadow:0px_8px_11.6px_0px_rgba(0,0,0,0.54)]"
          >
            {/* BACKGROUND KERTAS */}
            <Image
              src="/images/Atet-Halim/Hero/BackgoundKertas.webp"
              alt="background"
              fill
              className="object-cover z-0"
            />

            {/* BUNGA POJOK ATAS MOBILE */}
            <Image
              src="/images/Atet-Halim/Opening/BungaKiriAtas.webp"
              alt="flower decoration"
              width={350}
              height={350}
              className="absolute -top-[1.28vw] -left-[1.28vw] lg:-top-[0px] lg:-left-[20px] w-[150px] lg:w-[197px] h-auto pointer-events-none z-30 lg:hidden"
            />

            {/* BUNGA POJOK BAWAH MOBILE */}
            <Image
              src="/images/Atet-Halim/Opening/BungaKananBawah.webp"
              alt="flower decoration"
              width={350}
              height={350}
              className="absolute -bottom-[1.28vw] -right-[1.28vw] lg:bottom-[10px] lg:-right-[16px] w-[150px] lg:w-[180px] h-auto pointer-events-none z-30 lg:hidden"
            />

            {/* BUNGA POJOK ATAS DEKSTOP */}
            <Image
              src="/images/Atet-Halim/Opening/BungaKiriAtasD.webp"
              alt="flower decoration"
              width={350}
              height={350}
              className=" absolute -top-[0px] -left-[3px] w-[203px] h-auto pointer-events-none z-30 hidden lg:block"
            />

            {/* BUNGA POJOK BAWAH DEKSTOP */}
            <Image
              src="/images/Atet-Halim/Opening/BungaKananBawahD.webp"
              alt="flower decoration"
              width={350}
              height={350}
              className="absolute -bottom-[3px] -right-[5px] w-[203px] h-auto pointer-events-none z-30 hidden lg:block"
            />

            {/* LOGO STEMPEL */}
            <div className="relative z-20 flex flex-col items-center text-center px-[5.13vw] lg:px-[40px] pt-[69px] lg:pt-[95px] pb-[77px] lg:pb-[90px]">
              {/* TEXT UNDANGAN */}
              <p className="font-athelas text-[12px] lg:text-[14.76px] text-[#402824] leading-[1.2]">
                We cordially invite you <br className="lg:hidden" />
                to celebrate our <br />
                50th Wedding Anniversary
              </p>

              <h1 className="font-athelas text-[20px] lg:text-[32px] text-[#402824] pt-[22px] lg:pt-[30px] tracking-wide leading-none break-words max-w-[225px] lg:max-w-[350px]">
                {groomFullName.toUpperCase()}
              </h1>

              <h1 className="font-athelas text-[20px] lg:text-[28px] text-[#402824] pt-[3.5px] lg:pt-[15px] tracking-wide leading-[1.4]">
                &
              </h1>

              <h1 className="font-athelas text-[20px] lg:text-[32px] text-[#402824] pt-[5.5px] lg:pt-[15px] tracking-wide leading-none break-words max-w-[225px] lg:max-w-[350px]">
                {brideFullName.toUpperCase()}
              </h1>

              <p className="font-athelas text-[10px] lg:text-[16px] text-[#402824] pt-[37.7px] lg:pt-[27px]">
                Dear,
              </p>
              <p className="font-athelas text-[14px] lg:text-[20px] text-[#402824] break-words max-w-full pt-[8px] lg:pt-[6px]">
                {namaTamu}
              </p>

              <p className="font-athelas text-[8px] lg:text-[14px] text-[#402824] leading-[1.6] lg:leading-[1.4] pt-[28.7px] lg:pt-[28px] tracking-wide">
                We sincerely apologize
                <br />
                for any misspelling of names or titles.
              </p>

              <button
                onClick={handleOpen}
                className="bg-[#5E5036] hover:bg-[#402824] transition-colors flex items-center justify-center text-white w-[184px] h-[33px] lg:w-[244px] lg:h-[40px] rounded-[6px] lg:rounded-[10px] uppercase font-athelas text-[12px] lg:text-[18px] tracking-widest mt-[16px] lg:mt-[13px]"
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

// SBELUM DI DINAMISKAN
// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// type OpeningProps = {
//   setStart: (v: boolean) => void;
//   namaTamu?: string;
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

// const Opening = ({ setStart, namaTamu = "Sela" }: OpeningProps) => {
//   const [open, setOpen] = useState<boolean>(true);

// useEffect(() => {
//   document.documentElement.classList.add("no-scroll");

//   const preventTouch = (e: TouchEvent) => e.preventDefault();
//   document.addEventListener("touchmove", preventTouch, { passive: false });

//   return () => {
//     document.documentElement.classList.remove("no-scroll");
//     document.removeEventListener("touchmove", preventTouch);
//   };
// }, []);

// const handleOpen = (): void => {
//   setOpen(false);
//   document.documentElement.classList.remove("no-scroll");
//   setTimeout(() => {
//     setStart(true);
//   }, 600);
// };

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
//             className="relative bg-[#F6F6F4] rounded-[3.08vw] lg:rounded-[22px] overflow-hidden w-[74.36vw] max-w-[320px] lg:w-[416px] lg:max-w-[416px] shadow-xl flex flex-col z-[100] [box-shadow:0px_8px_11.6px_0px_rgba(0,0,0,0.54)]"
//           >
//             {/* BACKGROUND KERTAS */}
//             <Image
//               src="/images/Atet-Halim/Hero/BackgoundKertas.webp"
//               alt="background"
//               fill
//               className="object-cover z-0"
//             />

//             {/* BUNGA POJOK ATAS */}
//             <Image
//               src="/images/Atet-Halim/Opening/BungaKiriAtas.webp"
//               alt="flower decoration"
//               width={350}
//               height={350}
//               className="absolute -top-[1.28vw] -left-[1.28vw] lg:-top-[0px] lg:-left-[20px] w-[150px] lg:w-[197px] h-auto pointer-events-none z-30 lg:hidden"
//             />

//             {/* BUNGA POJOK BAWAH */}
//             <Image
//               src="/images/Atet-Halim/Opening/BungaKananBawah.webp"
//               alt="flower decoration"
//               width={350}
//               height={350}
//               className="absolute -bottom-[1.28vw] -right-[1.28vw] lg:bottom-[10px] lg:-right-[16px] w-[150px] lg:w-[180px] h-auto pointer-events-none z-30 lg:hidden"
//             />

//             {/* BUNGA POJOK ATAS */}
//             <Image
//               src="/images/Atet-Halim/Opening/BungaKiriAtasD.webp"
//               alt="flower decoration"
//               width={350}
//               height={350}
//               className=" absolute -top-[0px] -left-[3px] w-[203px] h-auto pointer-events-none z-30 hidden lg:block"
//             />

//             {/* BUNGA POJOK BAWAH */}
//             <Image
//               src="/images/Atet-Halim/Opening/BungaKananBawahD.webp"
//               alt="flower decoration"
//               width={350}
//               height={350}
//               className="absolute -bottom-[3px] -right-[5px] w-[203px] h-auto pointer-events-none z-30 hidden lg:block"
//             />

//             {/* LOGO STEMPEL */}
//             <div className="relative z-20 flex flex-col items-center text-center px-[5.13vw] lg:px-[40px] pt-[68px] lg:pt-[92px] pb-[77px] lg:pb-[90px]">
//               {/* TEXT UNDANGAN */}
//               <p className="font-athelas text-[12px] lg:text-[14.76px] text-[#402824] leading-[1.2]">
//                 We cordially invite you <br className="lg:hidden" />
//                 to celebrate our <br />
//                 50th Wedding Anniversary
//               </p>

//               <h1 className="font-athelas text-[20px] lg:text-[32px] text-[#402824] pt-[16px] lg:pt-[25px] tracking-wide leading-[1.4]">
//                 ATET WIJONO
//               </h1>

//               <h1 className="font-athelas text-[20px] lg:text-[28px] text-[#402824] pt-[0px] lg:pt-[8px] tracking-wide leading-[1.4]">
//                 &
//               </h1>

//               <h1 className="font-athelas text-[20px] lg:text-[32px] text-[#402824] pt-[0px] lg:pt-[7px] tracking-wide leading-[1.4]">
//                 TRISNAWATI HALIMI
//               </h1>

//               <p className="font-athelas text-[10px] lg:text-[16px] text-[#402824] pt-[33px] lg:pt-[19px]">
//                 Dear,
//               </p>
//               <p className="font-athelas text-[14px] lg:text-[20px] text-[#402824] break-words max-w-full pt-[8px] lg:pt-[6px]">
//                 Sela
//               </p>

//               <p className="font-athelas text-[8px] lg:text-[14px] text-[#402824] leading-[1.6] lg:leading-[1.4] pt-[24px] lg:pt-[25px] tracking-wide">
//                 We sincerely apologize
//                 <br />
//                 for any misspelling of names or titles.
//               </p>

//               <button
//                 onClick={handleOpen}
//                 className="bg-[#5E5036] hover:bg-[#402824] transition-colors flex items-center justify-center text-white w-[184px] h-[33px] lg:w-[244px] lg:h-[40px] rounded-[6px] lg:rounded-[10px] uppercase font-athelas text-[12px] lg:text-[18px] tracking-widest mt-[16px] lg:mt-[13px]"
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
