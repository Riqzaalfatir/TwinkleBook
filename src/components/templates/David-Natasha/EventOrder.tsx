import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";

const EventOrder = () => {
  return (
    <section id="eventorder" className="relative w-full z-10">
      <Image
        src="/images/David-Natasha/EventOrder/BungaAtasA.webp"
        alt="flower decoration"
        width={500}
        height={500}
        className="absolute -top-[0vw] -left-[0vw] w-[71vw] h-auto pointer-events-none z-20 lg:hidden"
      />
      <Image
        src="/images/David-Natasha/EventOrder/BungaAtasD.webp"
        alt="flower decoration"
        width={500}
        height={500}
        className="absolute -top-[0vw] -left-[0vw] w-[44vw] h-auto pointer-events-none z-20 hidden lg:block"
      />

      <Image
        src="/images/David-Natasha/EventOrder/AsetBawahM.webp"
        alt="flower decoration"
        width={650}
        height={650}
        className="absolute -bottom-[0vw] -right-[0vw] w-[73vw] h-auto pointer-events-none z-20 lg:hidden"
      />

      <Image
        src="/images/David-Natasha/EventOrder/AsetBawahD.webp"
        alt="flower decoration"
        width={650}
        height={650}
        className="absolute -bottom-[0vw] -right-[0vw] w-[33vw] h-auto pointer-events-none z-20 hidden lg:block"
      />

      <div className="relative z-[15] flex flex-col items-center text-center pt-[22.4vw] lg:pt-[8.15vw] pb-[29.45vw] lg:pb-[9.5vw]">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-sackers-italic-script text-[13.33vw] lg:text-[5.29vw] text-[#021125] [--stroke-w:0.3px] lg:[--stroke-w:0.53px]"
          style={{ WebkitTextStroke: "var(--stroke-w) #021125" }}
        >
          Event Detail
        </motion.h1>

        <div className="flex flex-col items-center justify-center leading-none mt-[5.6vw] lg:mt-[1.35vw]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src="/images/David-Natasha/EventOrder/GIIDago.webp"
              alt="GII HOK IM TONG Dago"
              width={750}
              height={750}
              className="w-[88vw] lg:w-[32.2vw] h-auto"
            />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cormorant-garamond text-[5.13vw] lg:text-[1.98vw] font-bold text-[#021125] tracking-wide mt-[11.2vw] lg:mt-[2.75vw]"
          >
            HOLY MATRIMONY
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cormorant-garamond font-medium text-[4.62vw] lg:text-[1.98vw] text-[#021125] mt-[5.13vw] lg:mt-[2.05vw]"
          >
            10.30 WIB
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cormorant-garamond text-[3.85vw] lg:text-[1.98vw] font-bold text-[#021125] mt-[5.3vw] lg:mt-[1.89vw] leading-[5.13vw] lg:leading-[1.98vw]"
          >
            GII HOK IM TONG - DAGO
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cormorant-garamond text-[3.59vw] lg:text-[1.32vw] text-[#021125] mt-[1.4vw] font-medium leading-[4.13vw] lg:leading-[1.98vw] lg:mt-[0.73vw]"
          >
            Jl. Cikapayang No. 2-4, Kota Bandung
          </motion.p>

          <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            href="https://maps.app.goo.gl/4E2uyDg52DDiW5hn7"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[5.5vw] lg:mt-[0.9vw] w-[41.03vw] lg:w-[10.58vw] h-[7.69vw] lg:h-[1.98vw] bg-[#021125] text-white text-[3.59vw] lg:text-[0.93vw] tracking-wide font-medium rounded-[1.54vw] lg:rounded-[0.40vw] font-cormorant-garamond flex items-center justify-center"
          >
            GOOGLE MAPS
          </motion.a>
        </div>

        <div className="flex flex-col items-center justify-center leading-none mt-[18.2vw] lg:mt-[7.15vw]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src="/images/David-Natasha/EventOrder/Intercontinental.webp"
              alt="Intercontinental Bandung Dago Pakar"
              width={550}
              height={550}
              className="w-[88vw] lg:w-[32.2vw] h-auto"
            />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cormorant-garamond text-[5.13vw] lg:text-[1.98vw] font-bold text-[#021125] mt-[11.2vw] lg:mt-[2.75vw]"
          >
            WEDDING RECEPTION
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cormorant-garamond font-medium text-[4.62vw] lg:text-[1.98vw] text-[#021125] mt-[5.13vw] lg:mt-[2.05vw]"
          >
            18.00 WIB
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cormorant-garamond text-[3.85vw] lg:text-[1.98vw] font-bold text-[#021125] mt-[5.3vw] leading-[5.13vw] lg:leading-[1.98vw] lg:mt-[1.98vw]"
          >
            INTERCONTINENTAL BANDUNG <br className="lg:hidden" />
            DAGO PAKAR
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cormorant-garamond font-medium text-[3.59vw] lg:text-[1.32vw] text-[#021125] mt-[1.4vw] leading-[4.13vw] lg:leading-[1.98vw] lg:mt-[0.73vw]"
          >
            Jl. Resor Dago Pakar Raya 2B
            <br className="lg:hidden" />
            Resor Dago Pakar, Kota Bandung
          </motion.p>

          <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            href="https://maps.app.goo.gl/QPdiNEsZX5cvHibA8"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[5.5vw] lg:mt-[0.9vw] w-[41.03vw] lg:w-[10.58vw] h-[7.69vw] lg:h-[1.98vw] bg-[#021125] text-white text-[3.59vw] lg:text-[0.93vw] font-medium tracking-wide rounded-[1.54vw] lg:rounded-[0.40vw] font-cormorant-garamond flex items-center justify-center"
          >
            GOOGLE MAPS
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default EventOrder;

// // UKURAN SEBELUM DI KE VW KAN
// import React from "react";
// import Image from "next/image";

// const EventOrder = () => {
//   return (
//     <section className="relative w-full z-10">
//       <Image
//         src="/images/David-Natasha/EventOrder/AsetAtasKiriM.webp"
//         alt="flower decoration"
//         width={450}
//         height={450}
//         className="absolute -top-[170px] -left-[150px] w-[500px] h-auto pointer-events-none z-20"
//       />

//       <Image
//         src="/images/David-Natasha/EventOrder/AsetBawahKananM.webp"
//         alt="flower decoration"
//         width={650}
//         height={650}
//         className="absolute -bottom-[170px] -right-[170px] w-[500px] h-auto pointer-events-none z-20"
//       />

//       <div className="relative z-[15] flex flex-col items-center text-center pt-[98px] pb-[115px]">
//         <h1 className="font-sackers-italic-script text-[52px] text-[#021125]" style={{ WebkitTextStroke: "0.3px #021125" }}>
//           Event Detail
//         </h1>

//         <div className="flex flex-col items-center justify-center leading-none mt-[32px]">
//           <Image
//             src="/images/David-Natasha/EventOrder/GIDAGOO.webp"
//             alt="GII HOK IM TONG Dago"
//             width={450}
//             height={450}
//             className="w-[264px] h-auto"
//           />

//           <h2 className="font-cormorant-garamond text-[20px] font-bold text-[#021125] tracking-wide mt-[40px]">
//             HOLY MATRIMONY
//           </h2>

//           <p className="font-cormorant-garamond font-medium text-[18px] text-[#021125] mt-[20px]">
//             10.30 WIB
//           </p>

//           <p className="font-cormorant-garamond text-[15px] font-bold text-[#021125] mt-[20px]">
//             GII HOK IM TONG - DAGO
//           </p>

//           <p className="font-cormorant-garamond text-[14px] text-[#021125] mt-[4px] font-medium">
//             Jl. Cikapayang No. 2-4, Kota Bandung
//           </p>

//           <a
//             href="#"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-[20px] w-[160px] h-[30px] bg-[#021125] text-white text-[14px] font-medium rounded-[6px] font-cormorant-garamond flex items-center justify-center"
//           >
//             GOOGLE MAPS
//           </a>
//         </div>

//         <div className="flex flex-col items-center justify-center leading-none mt-[51px]">
//           <Image
//             src="/images/David-Natasha/EventOrder/International.webp"
//             alt="Intercontinental Bandung Dago Pakar"
//             width={450}
//             height={450}
//             className="w-[264px] h-auto"
//           />

//           <h2 className="font-cormorant-garamond text-[20px] font-bold text-[#021125] mt-[40px]">
//             WEDDING RECEPTION
//           </h2>

//           <p className="font-cormorant-garamond font-medium text-[18px] text-[#021125] mt-[20px]">
//             18.00 WIB
//           </p>

//           <p className="font-cormorant-garamond text-[15px] font-bold text-[#021125] mt-[20px]">
//             INTERCONTINENTAL BANDUNG br
//             DAGO PAKAR
//           </p>

//           <p className="font-cormorant-garamond font-medium text-[14px] text-[#021125] mt-[4px]">
//             Jl. Resor Dago Pakar Raya 2B
//             <br />
//             Resor Dago Pakar, Kota Bandung
//           </p>

//           <a
//             href="#"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-[20px] w-[160px] h-[30px] bg-[#021125] text-white text-[14px] font-medium tracking-wide rounded-[6px] font-cormorant-garamond flex items-center justify-center"
//           >
//             GOOGLE MAPS
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EventOrder;
