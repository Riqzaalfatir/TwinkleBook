// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { fadeUp } from "../../../lib/animation";

// type ProfileProps = {
//   data?: any;
// };

// const splitParentName = (text?: string) => {
//   if (!text) return null;
//   const idx = text.indexOf(" and ");
//   if (idx === -1) return text;
//   return (
//     <>
//       {text.slice(0, idx + 4)} {/* termasuk "and" */}
//       <br />
//       {text.slice(idx + 5)}
//     </>
//   );
// };

// const Profile = ({ data }: ProfileProps) => {
//   const groomFullName =
//     data?.dataEvent?.groomFullName ?? "Prawira David Aldridge Susetio";
//   const brideFullName = data?.dataEvent?.brideFullName ?? "Stefanie Natasya";

//   const groomParent =
//     data?.dataEvent?.groomParent ??
//     "Mr. Andy Solaiman Susetio and Mrs. Natalia Chrismastuti";
//   const brideParent =
//     data?.dataEvent?.brideParent ??
//     "Mr. Stefanie Natasya and Mrs. Agus Lugiman";

//   return (
//     <section
//       id="profile"
//       className="relative w-full flex flex-col items-center py-[8.75vw] lg:py-[3.97vw]"
//     >
//       <div className="relative w-[100%] lg:w-[66%]">
//         <Image
//           src="/images/David-Natasha/Profile/temp2.webp"
//           alt="Profile Frame"
//           width={1554}
//           height={4096}
//           className="w-full h-auto lg:hidden"
//         />
//         <Image
//           src="/images/David-Natasha/Profile/temp3.webp"
//           alt="Profile Frame"
//           width={1554}
//           height={4096}
//           className="w-full h-auto hidden lg:block"
//         />

//         <div className="absolute inset-0 flex flex-col items-center text-center mt-[34.35vw] lg:mt-[18.7vw]">
//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="font-cormorant-garamond text-[3.85vw] lg:text-[1.59vw] text-[#021125]"
//           >
//             By the Grace of God
//           </motion.p>

//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="font-cormorant-garamond text-[4.10vw] lg:text-[1.59vw] font-semibold text-[#021125] mt-[6.5vw] lg:mt-[3.7vw] leading-[4.93vw] lg:leading-[1.8vw]"
//           >
//             {splitParentName(groomParent)}
//           </motion.p>

//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="font-cormorant-garamond text-[3.85vw] lg:text-[1.59vw] italic text-[#021125] my-[4.3vw] lg:my-[1.65vw]"
//           >
//             together with
//           </motion.p>

//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="font-cormorant-garamond text-[4.10vw] lg:text-[1.59vw] font-semibold text-[#021125] leading-[4.93vw] lg:leading-[1.98vw]"
//           >
//             {splitParentName(brideParent)}
//           </motion.p>

//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="font-cormorant-garamond leading-[4.93vw] lg:leading-[1.82vw] text-[3.85vw] lg:text-[1.59vw] text-[#021125] mt-[7.5vw] lg:mt-[3.8vw]"
//           >
//             Cordially request the honour of your
//             <br className="lg:hidden" />
//             presence at the <br className="hidden lg:block" /> marriage of their
//             <br />
//             son and daughter
//           </motion.p>

//           <motion.h2
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="font-sackers-italic-script text-[10.26vw] lg:text-[6.35vw] leading-[8.62vw] text-[#021125] lg:leading-[4.6vw] mt-[8vw] lg:mt-[4.3vw] [--stroke-w:0.3px] lg:[--stroke-w:0.64px]"
//             style={{ WebkitTextStroke: "var(--stroke-w) #021125" }}
//           >
//             {groomFullName}
//           </motion.h2>

//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="font-sackers-italic-script text-[12.31vw] lg:text-[6.78vw] text-[#021125] mt-[0.4vw] lg:mt-[1.49vw] [--stroke-w:0.3px] lg:[--stroke-w:0.64px]"
//             style={{ WebkitTextStroke: "var(--stroke-w) #021125" }}
//           >
//             &
//           </motion.p>

//           <motion.h2
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="font-sackers-italic-script text-[10.26vw] lg:text-[6.35vw] leading-[8.62vw] lg:leading-[4.6vw] text-[#021125] mt-[2.4vw] 
//             lg:mt-[3vw] [--stroke-w:0.3px] lg:[--stroke-w:0.64px]"
//             style={{ WebkitTextStroke: "var(--stroke-w) #021125" }}
//           >
//             {brideFullName}
//           </motion.h2>

//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="font-cormorant-garamond text-[4.10vw] text-[#021125] lg:text-[1.59vw] mt-[9.52vw] lg:mt-[5.9vw] leading-[4.85vw] lg:leading-[1.95vw]"
//           >
//             Our joy will be complete with
//             <br />
//             your presence and blessings.
//           </motion.p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Profile;

// SEBELUM DI DINAMISKAN
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";

const Profile = () => {
  return (
    <section
      id="profile"
      className="relative w-full flex flex-col items-center py-[8.75vw] lg:py-[3.97vw]"
    >
      <div className="relative w-[100%] lg:w-[66%]">
        <Image
          src="/images/David-Natasha/Profile/temp2.webp"
          alt="Profile Frame"
          width={1554}
          height={4096}
          className="w-full h-auto lg:hidden"
        />
        <Image
          src="/images/David-Natasha/Profile/temp3.webp"
          alt="Profile Frame"
          width={1554}
          height={4096}
          className="w-full h-auto hidden lg:block"
        />

        <div className="absolute inset-0 flex flex-col items-center text-center mt-[34.35vw] lg:mt-[18.7vw]">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cormorant-garamond text-[3.85vw] lg:text-[1.59vw] text-[#021125]"
          >
            By the Grace of God
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cormorant-garamond text-[4.10vw] lg:text-[1.59vw] font-semibold text-[#021125] mt-[6.5vw] lg:mt-[3.7vw] leading-[4.93vw] lg:leading-[1.8vw]"
          >
            Mr. Andy Solaiman Susetio and
            <br />
            Mrs. Natalia Chrismastuti
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cormorant-garamond text-[3.85vw] lg:text-[1.59vw] italic text-[#021125] my-[4.3vw] lg:my-[1.65vw]"
          >
            together with
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cormorant-garamond text-[4.10vw] lg:text-[1.59vw] font-semibold text-[#021125] leading-[4.93vw] lg:leading-[1.98vw]"
          >
            Mr. Stefanie Natasya and
            <br />
            Mrs. Agus Lugiman
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cormorant-garamond leading-[4.93vw] lg:leading-[1.82vw] text-[3.85vw] lg:text-[1.59vw] text-[#021125] mt-[7.5vw] lg:mt-[3.8vw]"
          >
            Cordially request the honour of your
            <br className="lg:hidden" />
            presence at the <br className="hidden lg:block" /> marriage of their
            <br />
            son and daughter
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-sackers-italic-script text-[10.26vw] lg:text-[6.35vw] leading-[8.62vw] text-[#021125] lg:leading-[4.6vw] mt-[8vw] lg:mt-[4.3vw] [--stroke-w:0.3px] lg:[--stroke-w:0.64px]"
            style={{ WebkitTextStroke: "var(--stroke-w) #021125" }}
          >
            Prawira David <br />
            Aldridge Susetio
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-sackers-italic-script text-[12.31vw] lg:text-[6.78vw] text-[#021125] mt-[0.4vw] lg:mt-[1.49vw] [--stroke-w:0.3px] lg:[--stroke-w:0.64px]"
            style={{ WebkitTextStroke: "var(--stroke-w) #021125" }}
          >
            &
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-sackers-italic-script text-[10.26vw] lg:text-[6.35vw] leading-[8.62vw] lg:leading-[4.6vw] text-[#021125] mt-[2.4vw] 
            lg:mt-[3vw] [--stroke-w:0.3px] lg:[--stroke-w:0.64px]"
            style={{ WebkitTextStroke: "var(--stroke-w) #021125" }}
          >
            Stefanie Natasya
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cormorant-garamond text-[4.10vw] text-[#021125] lg:text-[1.59vw] mt-[9.52vw] lg:mt-[5.9vw] leading-[4.85vw] lg:leading-[1.95vw]"
          >
            Our joy will be complete with
            <br />
            your presence and blessings.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Profile;

