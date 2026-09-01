"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";
import { DavidNatashaDataProps } from "./types";

type Gift = {
  bank: string;
  number: string;
  name: string;
};

type GiftProps = {
  data?: DavidNatashaDataProps;
};

const BANK_ICONS: Record<string, string> = {
  BCA: "/images/David-Natasha/Gift/BCA.avif",
};

const FALLBACK_GIFTS: Gift[] = [
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

const Gift = ({ data }: GiftProps) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  /*
   * Pastikan data dari API benar-benar array.
   * Ini mencegah error TypeScript dan runtime
   * kalau API mengembalikan {} / null.
   */
  const electronicGivingSource =
    data?.dataContent?.electronicGivings;

  const electronicGivings: any[] = Array.isArray(electronicGivingSource)
    ? electronicGivingSource
    : [];

  const gifts: Gift[] =
    electronicGivings.length > 0
      ? electronicGivings.map((item: any) => ({
          bank: item?.bankName ?? "",
          number: item?.accountNumber ?? "",
          name: item?.accountName ?? "",
        }))
      : FALLBACK_GIFTS;

  const handleCopy = async (number: string, index: number) => {
    try {
      await navigator.clipboard.writeText(number);

      setCopiedIndex(index);

      setTimeout(() => {
        setCopiedIndex(null);
      }, 2000);
    } catch (error) {
      console.warn("Gagal copy rekening:", error);
    }
  };

  return (
    <section id="gift" className="relative w-full z-[5]">
      <div className="relative z-[15] flex flex-col items-center text-center leading-none pt-[17.5vw] pb-[15.38vw] px-[6.15vw] lg:pt-[0.1vw] lg:pb-[0vw] lg:px-[0vw]">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="font-sackers-italic-script text-[13.33vw] lg:text-[5.29vw] text-[#021125] -ml-[5.13vw] lg:ml-[0vw] [--stroke-w:0.3px] lg:[--stroke-w:0.53px]"
          style={{
            WebkitTextStroke: "var(--stroke-w) #021125",
          }}
        >
          Wedding Gift
        </motion.h1>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="font-cormorant-garamond text-[3.85vw] lg:text-[1.59vw] text-[#021125] mt-[7vw] lg:mt-[2.8vw] leading-[4.4vw] lg:leading-[2vw]"
        >
          <p>
            Your presence and prayers <br className="lg:hidden" />
            are the <br className="hidden lg:block" />
            greatest blessing to us.
          </p>

          <p className="pt-[5.2vw] lg:pt-[1.7vw]">
            Should you wish to honor us with a gift, <br />
            please find the details below <br className="lg:hidden" />
            for your convenience.
          </p>
        </motion.div>

        <div className="w-full max-w-[72.82vw] lg:max-w-[31.5vw] flex flex-col gap-[5.90vw] lg:gap-[1.95vw] mt-[11.5vw] lg:mt-[4.78vw]">
          {gifts.map((gift, index) => {
            const icon =
              BANK_ICONS[gift.bank?.toUpperCase()] ??
              "/images/David-Natasha/Gift/BCA.avif";

            return (
              <motion.div
                key={`${gift.bank}-${gift.number}-${index}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: index * 0.15,
                }}
                className="
                  w-full
                  flex
                  items-center
                  bg-white
                  rounded-[2.80vw]
                  lg:rounded-[1.32vw]
                  shadow-[0_2px_8px_rgba(0,0,0,0.15)]
                  px-[3.85vw]
                  pt-[3.21vw]
                  pb-[2.26vw]
                  lg:px-[2vw]
                  lg:pt-[1.46vw]
                  lg:pb-[1.52vw]
                "
              >
                <div className="w-[8.72vw] lg:w-[2.8vw] flex-shrink-0 flex justify-center">
                  <Image
                    src={icon}
                    alt={gift.bank || "Bank"}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>

                <div className="text-left ml-[3.85vw] lg:ml-[2.9vw] leading-[3.85vw] lg:leading-[1.7vw] flex-1 min-w-0">
                  <p
                    className="font-garamond text-[3.08vw] lg:text-[1.32vw] text-[#021125]"
                    style={{
                      WebkitTextStroke: "0.11px #021125",
                    }}
                  >
                    {gift.number}
                  </p>

                  <p
                    className="font-cormorant-garamond text-[3.08vw] lg:text-[1.32vw] text-[#021125]"
                    style={{
                      WebkitTextStroke: "0.11px #021125",
                    }}
                  >
                    {gift.bank}
                  </p>

                  <p
                    className="font-cormorant-garamond text-[3.08vw] lg:text-[1.32vw] text-[#021125]"
                    style={{
                      WebkitTextStroke: "0.11px #021125",
                    }}
                  >
                    {gift.name}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    handleCopy(gift.number, index)
                  }
                  className="font-times-new-roman-bold text-[3.08vw] lg:text-[1.32vw] text-[#021125] mr-[1.5vw] lg:mr-[0.39vw] font-bold flex-shrink-0"
                  style={{
                    WebkitTextStroke: "0.11px #021125",
                  }}
                >
                  {copiedIndex === index
                    ? "Copied!"
                    : "Copy"}
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

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { fadeUp } from "../../../lib/animation";
// import { DavidNatashaDataProps } from "./types";

// type Gift = {
//   bank: string;
//   number: string;
//   name: string;
// };

// type GiftProps = {
//   data?: DavidNatashaDataProps;
// };

// const BANK_ICONS: Record<string, string> = {
//   BCA: "/images/David-Natasha/Gift/BCA.webp",
// };

// const FALLBACK_GIFTS: Gift[] = [
//   {
//     bank: "BCA",
//     number: "5415073469",
//     name: "Prawira David Aldridge S",
//   },
//   {
//     bank: "BCA",
//     number: "6840308667",
//     name: "Stefanie Natasya",
//   },
// ];

// const Gift = ({ data }: GiftProps) => {
//   const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

//   const electronicGivings = data?.dataContent?.electronicGivings ?? [];

//   const gifts: Gift[] =
//     electronicGivings.length > 0
//       ? electronicGivings.map((item: any) => ({
//           bank: item.bankName,
//           number: item.accountNumber,
//           name: item.accountName,
//         }))
//       : FALLBACK_GIFTS;

//   const handleCopy = (number: string, index: number) => {
//     navigator.clipboard.writeText(number);
//     setCopiedIndex(index);
//     setTimeout(() => setCopiedIndex(null), 2000);
//   };

//   return (
//     <section id="gift" className="relative w-full  z-[5]">
//       <div className="relative z-[15] flex flex-col items-center text-center leading-none pt-[17.5vw] pb-[15.38vw] px-[6.15vw] lg:pt-[0.1vw] lg:pb-[0vw] lg:px-[0vw]">
//         <motion.h1
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           className="font-sackers-italic-script text-[13.33vw] lg:text-[5.29vw] text-[#021125] -ml-[5.13vw] lg:ml-[0vw] [--stroke-w:0.3px] lg:[--stroke-w:0.53px]"
//           style={{ WebkitTextStroke: "var(--stroke-w) #021125" }}
//         >
//           Wedding Gift
//         </motion.h1>

//         <motion.p
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           className="font-cormorant-garamond text-[3.85vw] lg:text-[1.59vw] text-[#021125] mt-[7vw] lg:mt-[2.8vw] leading-[4.4vw] lg:leading-[2vw]"
//         >
//           Your presence and prayers <br className="lg:hidden" />
//           are the <br className="hidden lg:block" />
//           greatest blessing to us. <br />
//           <p className="pt-[5.2vw] lg:pt-[1.7vw]">
//             Should you wish to honor us with a gift, <br />
//             please find the details below <br className="lg:hidden" />
//             for your convenience.
//           </p>
//         </motion.p>

//         <div className="w-full max-w-[72.82vw] lg:max-w-[31.5vw] flex flex-col gap-[5.90vw] lg:gap-[1.95vw] mt-[11.5vw] lg:mt-[4.78vw]">
//           {gifts.map((gift, index) => {
//             const icon = BANK_ICONS[gift.bank];

//             return (
//               <motion.div
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{
//                   duration: 1,
//                   ease: "easeOut",
//                   delay: index * 0.15,
//                 }}
//                 key={index}
//                 className="w-full flex items-center bg-white rounded-[2.80vw] lg:rounded-[1.32vw] shadow-[0_2px_8px_rgba(0,0,0,0.15)] px-[3.85vw] pt-[3.21vw] pb-[2.26vw]
//                  lg:px-[2vw] lg:pt-[1.46vw] lg:pb-[1.52vw]"
//               >
//                 <div className="w-[8.72vw] lg:w-[2.8vw] flex-shrink-0 flex justify-center">
//                   <Image
//                     src={icon ?? "/images/David-Natasha/Gift/BCA.avif"}
//                     alt={gift.bank}
//                     width={64}
//                     height={64}
//                     className="object-contain"
//                   />
//                 </div>

//                 <div className="text-left ml-[3.85vw] lg:ml-[2.9vw] leading-[3.85vw] lg:leading-[1.7vw] flex-1 min-w-0">
//                   <p
//                     className=" font-garamond text-[3.08vw] lg:text-[1.32vw] text-[#021125]"
//                     style={{ WebkitTextStroke: "0.11px #021125" }}
//                   >
//                     {gift.number}
//                   </p>
//                   <p
//                     className="font-cormorant-garamond text-[3.08vw] lg:text-[1.32vw] text-[#021125]"
//                     style={{ WebkitTextStroke: "0.11px #021125" }}
//                   >
//                     {gift.bank}
//                   </p>
//                   <p
//                     className="font-cormorant-garamond text-[3.08vw] lg:text-[1.32vw] text-[#021125]"
//                     style={{ WebkitTextStroke: "0.11px #021125" }}
//                   >
//                     {gift.name}
//                   </p>
//                 </div>

//                 <button
//                   onClick={() => handleCopy(gift.number, index)}
//                   className="font-times-new-roman-bold text-[3.08vw] lg:text-[1.32vw] text-[#021125] mr-[1.5vw] lg:mr-[0.39vw] font-bold flex-shrink-0"
//                   style={{ WebkitTextStroke: "0.11px #021125" }}
//                 >
//                   {copiedIndex === index ? "Copied!" : "Copy"}
//                 </button>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gift;