"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";

const BANK_ICONS: Record<string, string> = {
  BCA: "/images/David-Natasha/Gift/BCA.webp",
};

const Gift = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const gifts = [
    {
      bank: "BCA",
      number: "5415073469",
      name: "Prawira David Aldridge S",
    },
    {
      bank: "BCA",
      number: "6840308667",
      name: "Stefanie Natasya",
    },
  ];

  const handleCopy = (number: string, index: number) => {
    navigator.clipboard.writeText(number);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="gift" className="relative w-full  z-[5]">
      <div className="relative z-[15] flex flex-col items-center text-center leading-none pt-[17.5vw] pb-[15.38vw] px-[6.15vw] lg:pt-[0.1vw] lg:pb-[0vw] lg:px-[0vw]">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-sackers-italic-script text-[13.33vw] lg:text-[5.29vw] text-[#021125] -ml-[5.13vw] lg:ml-[0vw] [--stroke-w:0.3px] lg:[--stroke-w:0.53px]"
          style={{ WebkitTextStroke: "var(--stroke-w) #021125" }}
        >
          Wedding Gift
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-cormorant-garamond text-[3.85vw] lg:text-[1.59vw] text-[#021125] mt-[7vw] lg:mt-[2.8vw] leading-[4.4vw] lg:leading-[2vw]"
        >
          Your presence and prayers <br className="lg:hidden" />
          are the <br className="hidden lg:block" />
          greatest blessing to us. <br />
          <p className="pt-[5.2vw] lg:pt-[1.7vw]">
            Should you wish to honor us with a gift, <br />
            please find the details below <br className="lg:hidden" />
            for your convenience.
          </p>
        </motion.p>

        <div className="w-full max-w-[72.82vw] lg:max-w-[31.5vw] flex flex-col gap-[5.90vw] lg:gap-[1.95vw] mt-[11.5vw] lg:mt-[4.78vw]">
          {gifts.map((gift, index) => {
            const icon = BANK_ICONS[gift.bank];

            return (
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: index * 0.15,
                }}
                key={index}
                className="w-full flex items-center bg-white rounded-[2.80vw] lg:rounded-[1.32vw] shadow-[0_2px_8px_rgba(0,0,0,0.15)] px-[3.85vw] pt-[3.21vw] pb-[2.26vw]
                 lg:px-[2vw] lg:pt-[1.46vw] lg:pb-[1.52vw]"
              >
                <div className="w-[8.72vw] lg:w-[2.8vw] flex-shrink-0 flex justify-center">
                  <Image
                    src={icon ?? "/images/David-Natasha/Gift/BCA.webp"}
                    alt={gift.bank}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>

                <div className="text-left ml-[3.85vw] lg:ml-[2.9vw] leading-[3.85vw] lg:leading-[1.7vw] flex-1 min-w-0">
                  <p
                    className=" font-garamond text-[3.08vw] lg:text-[1.32vw] text-[#021125]"
                    style={{ WebkitTextStroke: "0.11px #021125" }}
                  >
                    {gift.number}
                  </p>
                  <p
                    className="font-cormorant-garamond text-[3.08vw] lg:text-[1.32vw] text-[#021125]"
                    style={{ WebkitTextStroke: "0.11px #021125" }}
                  >
                    {gift.bank}
                  </p>
                  <p
                    className="font-cormorant-garamond text-[3.08vw] lg:text-[1.32vw] text-[#021125]"
                    style={{ WebkitTextStroke: "0.11px #021125" }}
                  >
                    {gift.name}
                  </p>
                </div>

                <button
                  onClick={() => handleCopy(gift.number, index)}
                  className="font-times-new-roman-bold text-[3.08vw] lg:text-[1.32vw] text-[#021125] mr-[1.5vw] lg:mr-[0.39vw] font-bold flex-shrink-0"
                  style={{ WebkitTextStroke: "0.11px #021125" }}
                >
                  {copiedIndex === index ? "Copied!" : "Copy"}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gift;

// UKURAN SEBELUM DI KE VW KAN
// "use client";

// import React, { useState } from "react";
// import Image from "next/image";

// const BANK_ICONS: Record<string, string> = {
//   BCA: "/images/David-Natasha/Gift/BCA.webp",
// };

// const Gift = () => {
//   const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

//   const gifts = [
//     {
//       bank: "BCA",
//       number: "5415073469",
//       name: "Prawira David Aldridge S",
//     },
//     {
//       bank: "BCA",
//       number: "6840308667",
//       name: "Stefanie Natasya",
//     },
//   ];

//   const handleCopy = (number: string, index: number) => {
//     navigator.clipboard.writeText(number);
//     setCopiedIndex(index);
//     setTimeout(() => setCopiedIndex(null), 2000);
//   };

//   return (
//     <section className="relative w-full bg-[url('/images/David-Natasha/EventOrder/Kertas.webp')] bg-no-repeat [background-size:100%_100%] z-[5]">
//       <div className="relative z-[15] flex flex-col items-center text-center leading-none pt-[100px] pb-[60px] px-[24px]">
//         <h1
//           className="font-sackers-italic-script text-[52px] text-[#021125] -ml-[20px]"
//           style={{ WebkitTextStroke: "0.3px #021125" }}
//         >
//           Wedding Gift
//         </h1>

//         <p className="font-cormorant-garamond text-[15px] text-[#021125] mt-[20px] leading-normal">
//           Your presence and prayers
//           <br />
//           are the greatest blessing to us.
//         </p>

//         <p className="font-cormorant-garamond text-[15px] text-[#021125] mt-[15px] leading-normal">
//           Should you wish to honor us with a gift,
//           <br />
//           please find the details below
//           <br />
//           for your convenience.
//         </p>

//         <div className="w-full max-w-[284px] flex flex-col gap-[23px] mt-[45px]">
//           {gifts.map((gift, index) => {
//             const icon = BANK_ICONS[gift.bank];

//             return (
//               <div
//                 key={index}
//                 className="w-full flex items-center bg-white rounded-[10.92px] shadow-[0_2px_8px_rgba(0,0,0,0.15)] px-[15px] pt-[12.5px] pb-[8.8px]"
//               >
//                 <div className="w-[34px] flex-shrink-0 flex justify-center">
//                   <Image
//                     src={icon ?? "/images/David-Natasha/Gift/BCA.webp"}
//                     alt={gift.bank}
//                     width={34}
//                     height={34}
//                     className="object-contain"
//                   />
//                 </div>

//                 <div className="text-left ml-[14px] leading-[15px] flex-1 min-w-0">
//                   <p
//                     className="font-cormorant-garamond text-[12px] text-[#021125] font-bold"
//                     style={{ WebkitTextStroke: "0.11px #021125" }}
//                   >
//                     {gift.number}
//                   </p>
//                   <p
//                     className="font-cormorant-garamond text-[12px] text-[#021125]"
//                     style={{ WebkitTextStroke: "0.11px #021125" }}
//                   >
//                     {gift.bank}
//                   </p>
//                   <p
//                     className="font-cormorant-garamond text-[12px] text-[#021125]"
//                     style={{ WebkitTextStroke: "0.11px #021125" }}
//                   >
//                     {gift.name}
//                   </p>
//                 </div>

//                 <button
//                   onClick={() => handleCopy(gift.number, index)}
//                   className="font-times-new-roman-bold text-[12px] text-[#021125] ml-[8px] font-bold flex-shrink-0"
//                   style={{ WebkitTextStroke: "0.11px #021125" }}
//                 >
//                   {copiedIndex === index ? "Copied!" : "Copy"}
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gift;
