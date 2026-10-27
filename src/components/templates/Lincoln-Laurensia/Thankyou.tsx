import React from "react";
import Image from "next/image";
import { LincolnLaurensiaDataProps } from "./types";
import { motion } from "framer-motion";
import { fadeIn, fadeUp, fadeLeft, fadeRight } from "../../../lib/animation";

type ThankyouProps = {
  data?: LincolnLaurensiaDataProps;
};

const Thankyou = ({ data }: ThankyouProps) => {
  const footerNoteRaw = data?.dataContent?.footerNote;
  const footerNote =
    typeof footerNoteRaw === "string" ? footerNoteRaw.trim() : "";

  return (
    <section
      id="thankyou"
      className="relative z-10 flex h-screen w-full flex-col items-center overflow-hidden px-[6.15vw] pt-[21vw] text-center font-poppins text-white lg:min-h-0 lg:px-0 lg:pt-[8.4vw]"
    >
     <Image
  src="/images/Lincoln-Laurensia/Thankyou/AsetMobile.webp"
  alt="Thank you"
  fill
  className="-z-10 object-cover object-top lg:hidden"
/>
<div className="absolute inset-x-0 top-0 -z-10 h-[105.38vw] bg-gradient-to-b from-black to-black/0 lg:hidden" />
      <Image
        src="/images/Lincoln-Laurensia/Thankyou/AsetDekstop.webp"
        alt="Thank you"
        fill
        className="-z-10 hidden object-cover object-top lg:block"
      />

      <div className="flex flex-col items-center">
        <motion.h2 
        variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-[8.72vw] uppercase leading-none lg:text-[2.78vw]">
          Thank You
        </motion.h2>
        <motion.p 
        variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 1.5, ease: "easeOut" }}
        className="mt-[8.5vw] lg:mt-[2.7vw] text-[3.59vw] font-light leading-[1.6] lg:text-[1.46vw] lg:leading-[1.45]">
          {footerNote ? (
            footerNote
          ) : (
            <>
              Lucky in love,
              <br />
              lucky to have you.
              <br />
              Thanks for being part of our big day!
            </>
          )}
        </motion.p>
      </div>

      <div className="absolute bottom-[2.5vw] inset-x-0 flex justify-center lg:bottom-[5vw]">
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    className="relative h-[15.13vw] w-[23.08vw] lg:h-[5.22vw] lg:w-[8.4vw]"
  >
    <Image
      src="/images/Lincoln-Laurensia/Thankyou/LogoProvite.webp"
      alt="Provite"
      fill
      className="object-contain"
    />
  </motion.div>
</div>
    </section>
  );
};

export default Thankyou;


// SEBELUM DI DINAMISKAN
// import React from "react";
// import Image from "next/image";

// const Thankyou = () => {
//   return (
//     <section
//       id="thankyou"
//       className="relative z-10 flex h-screen w-full flex-col items-center overflow-hidden px-[6.15vw] pt-[21vw] text-center font-poppins text-white lg:min-h-0 lg:px-0 lg:pt-[8.4vw]"
//     >
//       <Image
//         src="/images/Lincoln-Laurensia/Thankyou/AsetMobile.webp"
//         alt="Thank you"
//         fill
//         className="-z-10 object-cover object-top lg:hidden"
//       />
//       <div className="absolute inset-x-0 top-0 -z-10 h-[105.38vw] bg-gradient-to-b from-black to-black/0 lg:hidden" />
//       <Image
//         src="/images/Lincoln-Laurensia/Thankyou/AsetDekstop.webp"
//         alt="Thank you"
//         fill
//         className="-z-10 hidden object-cover object-top lg:block"
//       />

//       <div className="flex flex-col items-center">
//         <h2 className="text-[8.72vw] uppercase leading-none lg:text-[2.78vw]">
//           Thank You
//         </h2>
//         <p className="mt-[8.5vw] lg:mt-[2.7vw] text-[3.59vw] font-light leading-[1.6] lg:text-[1.46vw] lg:leading-[1.45]">
//           Lucky in love,
//           <br />
//           lucky to have you.
//           <br />
//           Thanks for being part of our big day!
//         </p>
//       </div>

//       <div className="absolute bottom-[2.5vw] left-1/2 h-[15.13vw] w-[23.08vw] -translate-x-1/2 lg:bottom-[5vw] lg:h-[5.22vw] lg:w-[8.4vw]">
//         <Image
//           src="/images/Lincoln-Laurensia/Thankyou/LogoProvite.webp"
//           alt="Provite"
//           fill
//           className="object-contain"
//         />
//       </div>
//     </section>
//   );
// };

// export default Thankyou;

// SEBELUM DI VW KAN
// import React from "react";
// import Image from "next/image";

// const Thankyou = () => {
//   return (
//     <section
//       id="thankyou"
//       className="relative z-10 flex h-screen w-full flex-col items-center overflow-hidden px-6 pt-[79px] text-center font-poppins text-white lg:min-h-0 lg:px-0 lg:pt-[120px]"
//     >
//       <Image
//         src="/images/Lincoln-Laurensia/Thankyou/AsetMobile.webp"
//         alt="Thank you"
//         fill
//         className="-z-10 object-cover object-center lg:hidden"
//       />
//       <Image
//         src="/images/Lincoln-Laurensia/Thankyou/AsetDekstop.webp"
//         alt="Thank you"
//         fill
//         className="-z-10 hidden object-cover object-center lg:block"
//       />

//       <div className="flex flex-col items-center">
//         <h2 className="text-[34px] uppercase leading-none lg:text-[42px]">
//           Thank You
//         </h2>
//         <p className="mt-[30px] lg:mt-[30px] text-[14px] font-light leading-[1.6] lg:text-[22px] lg:leading-[1.5]">
//           Lucky in love,
//           <br />
//           lucky to have you.
//           <br />
//           Thanks for being part of our big day!
//         </p>
//       </div>

//       <div className="absolute bottom-[45px] left-1/2 h-[59px] w-[90px] -translate-x-1/2 lg:bottom-[80px] lg:h-[79px] lg:w-[127px]">
//         <Image
//           src="/images/Lincoln-Laurensia/Thankyou/LogoProvite.webp"
//           alt="Provite"
//           fill
//           className="object-contain"
//         />
//       </div>
//     </section>
//   );
// };

// export default Thankyou;
