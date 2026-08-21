import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";

type ThankyouProps = {
  data?: any;
};

const DEFAULT_BG_MOBILE = "/images/Michael-Vannya/Thankyou/Thankyou.webp";
const DEFAULT_BG_DESKTOP = "/images/Michael-Vannya/Thankyou/ThankyouD.webp";

const DEFAULT_FOOTER_NOTE = (
  <>
    Your presence and blessings have made this <br className="lg:hidden" />
    celebration <br className="hidden lg:block" />
    more meaningful, and we are grateful <br className="lg:hidden" />
    to share it with you.
  </>
);

const Thankyou = ({ data }: ThankyouProps) => {
  const footerImageData = data?.dataContent?.footerImageData ?? [];

  const footerImageUrl = footerImageData?.[0]?.url
    ? `https://media.twinklebook.com/${footerImageData[0].url}`
    : null;

  const footerNote = data?.dataContent?.footerNote || DEFAULT_FOOTER_NOTE;

  return (
    <section className="relative w-full h-screen">
      <Image
        src={footerImageUrl ?? DEFAULT_BG_MOBILE}
        alt="Thankyou Background"
        fill
        className="object-cover object-top z-10 pointer-events-none lg:hidden "
      />

      <Image
        src={footerImageUrl ?? DEFAULT_BG_DESKTOP}
        alt="Thankyou Background"
        fill
        className="object-cover object-bottom z-10 pointer-events-none hidden lg:block"
      />

      <div className="relative z-20 flex flex-col items-center justify-between text-center h-full">
        <div className="pt-[67.5px] lg:pt-[45px] flex flex-col items-center justify-center">
          <div>
            <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
             >
            <Image
              src="/images/Michael-Vannya/Hero/LogoMV.webp"
              alt="ornament"
              width={250}
              height={250}
              className="w-[95px] lg:w-[167px] h-auto pointer-events-none"
            />
            </motion.div>
          </div>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-kinfolk text-[34px] lg:text-[48px] text-[#1B1C1D] uppercase pt-[19px] lg:pt-[18px]"
          >
            Thank You
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman text-[14px] lg:text-[20px] text-[#1B1C1D] leading-normal lg:leading-[26px] pt-[36.5px] lg:pt-[39px]"
          >
            {footerNote}
          </motion.p>
        </div>

        <div className="relative px-10 pb-[5.5px] lg:pb-[0px] text-center leading-none">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center mt-[0px] mb-[28px]"
          >
            <Image
              src="/images/Michael-Vannya/Thankyou/LogoProvite.webp"
              alt="Provite"
              width={250}
              height={250}
              className="w-[89px] lg:w-[127px] h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Thankyou;



// THANKYOU SEBELUM DI DINAMISKAN

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { fadeUp } from "../../../lib/animation";

// const Thankyou = () => {
//   return (
//     <section className="relative w-full h-screen">
//       <Image
//         src="/images/Michael-Vannya/Thankyou/Thankyou.webp"
//         alt="Thankyou Background"
//         fill
//         className="object-cover object-top z-10 pointer-events-none lg:hidden "
//       />

//       <Image
//         src="/images/Michael-Vannya/Thankyou/ThankyouD.webp"
//         alt="Thankyou Background"
//         fill
//         className="object-cover object-bottom z-10 pointer-events-none hidden lg:block"
//       />

//       <div className="relative z-20 flex flex-col items-center justify-between text-center h-full">
//         <div className="pt-[67.5px] lg:pt-[45px] flex flex-col items-center justify-center">
//           <div>
//             <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//              >
//             <Image
//               src="/images/Michael-Vannya/Hero/LogoMV.webp"
//               alt="ornament"
//               width={250}
//               height={250}
//               className="w-[95px] lg:w-[167px] h-auto pointer-events-none"
//             />
//             </motion.div>
//           </div>
//           <motion.h2
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="font-kinfolk text-[34px] lg:text-[48px] text-[#1B1C1D] uppercase pt-[19px] lg:pt-[18px]"
//           >
//             Thank You
//           </motion.h2>

//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="font-times-new-roman text-[14px] lg:text-[20px] text-[#1B1C1D] leading-normal lg:leading-[26px] pt-[36.5px] lg:pt-[39px]"
//           >
//             Your presence and blessings have made this <br className="lg:hidden" />
//             celebration <br className="hidden lg:block" />
//             more meaningful, and we are grateful <br className="lg:hidden" />
//             to share it with you.
//           </motion.p>
//         </div>

//         <div className="relative px-10 pb-[5.5px] lg:pb-[0px] text-center leading-none">
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="flex flex-col items-center mt-[0px] mb-[28px]"
//           >
//             <Image
//               src="/images/Michael-Vannya/Thankyou/LogoProvite.webp"
//               alt="Provite"
//               width={250}
//               height={250}
//               className="w-[89px] lg:w-[127px] h-auto"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Thankyou;
