// import Image from "next/image";
// import { motion } from "framer-motion";
// import { fadeUp, fadeIn, scaleIn, stagger } from "../../../lib/animation";
// type EventOrderProps = {
//   data?: any[];  // Array of sessions
// };

// const EventOrder = ({ data = [] }: EventOrderProps) => {
//   // Filter untuk Ceremony & Cocktail/Reception
//   const ceremony = data.find(s => s.name === "Ceremony");
//   const reception = data.find(s => s.name === "Cocktail & Reception");

//   // Default fallback
//   const ceremonySession = ceremony || {
//     name: "Ceremony",
//     date: "2026-09-12T16:00:37",
//     addressName: "Desa Potato Head Bali, Jalan Petitenget, Seminyak, Badung Regency, Bali, Indonesia"
//   };

//   const receptionSession = reception || {
//     name: "Cocktail & Reception",
//     date: "2026-09-12T17:00:37",
//     addressName: "Desa Potato Head Bali, Jalan Petitenget, Seminyak, Badung Regency, Bali, Indonesia"
//   };

//   // Format waktu
//   const ceremonyTime = new Date(ceremonySession.date).toLocaleTimeString("en-US", { 
//     hour: "2-digit", 
//     minute: "2-digit",
//     hour12: true
//   });

//   const receptionTime = new Date(receptionSession.date).toLocaleTimeString("en-US", { 
//     hour: "2-digit", 
//     minute: "2-digit",
//     hour12: true
//   });

//   // Extract venue name dari addressName
//   const venueName = ceremonySession.addressName.split(",")[0] || "Desa Potato Head";
//   const fullAddress = ceremonySession.addressName;

//   // Generate Google Maps link dari latLong
//   const ceremonyLatLong = ceremony?.latLong || "-8.6790217, 115.1509365";
//   const mapsLink = `https://maps.google.com/maps?q=${ceremonyLatLong.replace(" ", "")}`;

//   return (
//     <section id="eventorder" className="relative w-full">
//       {/* BACKGROUND KERTAS */}
//       {/* <Image
//         src="/images/Atet-Halim/Hero/BackgoundKertas.webp"
//         alt="background"
//         fill
//         className="object-cover"
//       /> */}

//       {/* BUNGA POJOK ATAS */}
//       <Image
//         src="/images/Atet-Halim/EventOrder/RantingKiriAtasD.webp"
//         alt="flower decoration"
//         width={450}
//         height={450}
//         className="absolute -top-[3.9vw] lg:-top-[26.13vw] left-0 w-[45.90vw] lg:w-[23.12vw] h-auto pointer-events-none z-20 -mt-[37.69vw] lg:mt-[3.96vw]"
//       />
//       <Image
//         src="/images/Atet-Halim/EventOrder/RantingKananAtasD.webp"
//         alt="flower decoration"
//         width={450}
//         height={450}
//         className="absolute -top-[3.9vw] lg:-top-[26.13vw] right-0 w-[45.90vw] lg:w-[23.12vw] h-auto pointer-events-none z-20 -mt-[37.69vw] lg:mt-[3.96vw]"
//       />

//       <Image
//         src="/images/Atet-Halim/EventOrder/BungaKiriBawahD.webp"
//         alt="flower decoration"
//         width={650}
//         height={650}
//         className="absolute bottom-[4.5vw] lg:-bottom-[8.92vw] -left-[1.5vw] lg:-left-0 w-[42vw] lg:w-[22vw] h-auto pointer-events-none z-30"
//       />
//       <Image
//         src="/images/Atet-Halim/EventOrder/BungaKananBawahD.webp"
//         alt="flower decoration"
//         width={650}
//         height={650}
//         className="absolute bottom-[5.5vw] lg:-bottom-[8.4vw] -right-[1.5vw] lg:-right-0 w-[42vw] lg:w-[22vw] h-auto pointer-events-none z-30"
//       />

//       {/* CONTAINER TENGAH — LAYER KERTAS */}
//       <div className="relative z-[15] flex items-center justify-center mt-[0.5vw] lg:mt-[4.62vw]">
//         <div className="relative w-full bg-[url('/images/Atet-Halim/EventOrder/LayerKertas.webp')] bg-no-repeat [background-size:100%_100%] lg:bg-[url('/images/Atet-Halim/EventOrder/LayerKertasD.svg')] lg:[background-size:100%_100%]">
//           <div className="relative flex flex-col items-center text-center">
//             {/* LOGO */}
//             <motion.div
//               variants={fadeIn}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 3, ease: "easeOut" }}
//               className="pt-[12.82vw] lg:pt-[0px]"
//             >
//               <Image
//                 src="/images/Atet-Halim/Hero/LogoD4.webp"
//                 alt="logo stamp"
//                 width={220}
//                 height={220}
//                 className="w-[24.36vw] lg:w-[13vw] h-auto"
//               />
//             </motion.div>

//             {/* TIME & LOCATION */}
//             <motion.h2
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               className="font-poltawski text-[7.18vw] lg:text-[3.17vw] text-[#402824] pt-[7.69vw] lg:pt-[10px] tracking-wide"
//             >
//               TIME & LOCATION
//             </motion.h2>

//             {/* ORNAMENT GARIS */}
//             <motion.div
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//             >
//               <Image
//                 src="/images/Atet-Halim/EventOrder/OrnamentGaris.webp"
//                 alt="ornament"
//                 width={250}
//                 height={250}
//                 className="w-[36.41vw] lg:w-[14.99vw] h-auto lg:-mt-[5px]"
//               />
//             </motion.div>

//             {/* FOTO HOTEL */}
//             <motion.div
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               className="relative w-[71.28vw] lg:w-[31.04vw] h-[46.15vw] lg:h-[20.81vw] mt-[7.69vw] lg:mt-[6px]"
//             >
//               <Image
//                 src="/images/Atet-Halim/EventOrder/Pullman..webp"
//                 alt="Pullman Grand Ballroom"
//                 fill
//                 className="object-cover"
//               />
//             </motion.div>

//             {/* NAMA VENUE + ALAMAT */}
//             <motion.h3
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               className="font-athelas font-bold text-[4.62vw] lg:text-[1.45vw] text-[#2B1F05] pt-[9.49vw] lg:pt-[3.43vw] tracking-wide"
//             >
//                             {venueName.toUpperCase()}

//             </motion.h3>
//             <motion.p
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               className="font-athelas text-[3.59vw] lg:text-[1.45vw] lg:pt-[5px] text-[#402824]"
//             >
//                {fullAddress}
//             </motion.p>

//             {/* TOMBOL GOOGLE MAPS */}
//             <motion.div
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//             >
//               <a
//                 href={mapsLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-[4.10vw] lg:mt-[1.45vw] w-[41.03vw] lg:w-[16.91vw] h-[8.46vw] lg:h-[3.43vw] bg-[#5E5036] text-white text-[3.59vw] lg:text-[1.45vw] tracking-wide rounded-[1.54vw] lg:rounded-[9px] font-athelas flex items-center justify-center"
//               >
//                 GOOGLE MAPS
//               </a>
//             </motion.div>

//             {/* THANKSGIVING MASS */}
//             <motion.h4
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               className="font-cylburn text-[10.26vw] lg:text-[3.43vw] text-[#402824] pt-[13.33vw] lg:pt-[4.7vw] [--stroke-w:0.5px] lg:[--stroke-w:0.8px]"
//               style={{ WebkitTextStroke: "var(--stroke-w) #402824" }}
//             >
//                             {ceremonySession.name.toUpperCase()}

//             </motion.h4>
//             <motion.p
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               className="font-athelas text-[4.10vw] lg:text-[1.72vw] text-[#402824] pt-[3.85vw] lg:pt-[5px]"
//             >
//               {ceremonyTime}
//             </motion.p>

//             {/* LUNCH RECEPTION */}
//             <motion.h4
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               className="font-cylburn text-[10.26vw] lg:text-[3.43vw] text-[#402824] pt-[9.74vw] lg:pt-[2.58vw]  [--stroke-w:0.5px] lg:[--stroke-w:0.8px]"
//               style={{ WebkitTextStroke: "var(--stroke-w) #402824" }}
//             >
//               {receptionSession.name.toUpperCase()}
//             </motion.h4>
//             <motion.p
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               className="font-athelas text-[4.10vw] lg:text-[1.72vw] text-[#402824] pt-[4.10vw] lg:pt-[0px] pb-[51.28vw] lg:pb-[13.21vw]"
//             >
//               {receptionTime}
//             </motion.p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EventOrder;








// SEBELUM DI DINAMISKAN
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, scaleIn, stagger } from "../../../lib/animation";

type EventOrderProps = {
  data?: unknown;
};

const EventOrder = ({ data }: EventOrderProps) => {
  return (
    <section id="eventorder" className="relative w-full">
      {/* BACKGROUND KERTAS */}
      {/* <Image
        src="/images/Atet-Halim/Hero/BackgoundKertas.webp"
        alt="background"
        fill
        className="object-cover"
      /> */}

      {/* BUNGA POJOK ATAS */}
      <Image
        src="/images/Atet-Halim/EventOrder/RantingKiriAtasD.webp"
        alt="flower decoration"
        width={450}
        height={450}
        className="absolute -top-[3.9vw] lg:-top-[26.13vw] left-0 w-[45.90vw] lg:w-[23.12vw] h-auto pointer-events-none z-20 -mt-[37.69vw] lg:mt-[3.96vw]"
      />
      <Image
        src="/images/Atet-Halim/EventOrder/RantingKananAtasD.webp"
        alt="flower decoration"
        width={450}
        height={450}
        className="absolute -top-[3.9vw] lg:-top-[26.13vw] right-0 w-[45.90vw] lg:w-[23.12vw] h-auto pointer-events-none z-20 -mt-[37.69vw] lg:mt-[3.96vw]"
      />

      <Image
        src="/images/Atet-Halim/EventOrder/BungaKiriBawahD.webp"
        alt="flower decoration"
        width={650}
        height={650}
        className="absolute bottom-[4.5vw] lg:-bottom-[8.92vw] -left-[1.5vw] lg:-left-0 w-[42vw] lg:w-[22vw] h-auto pointer-events-none z-30"
      />
      <Image
        src="/images/Atet-Halim/EventOrder/BungaKananBawahD.webp"
        alt="flower decoration"
        width={650}
        height={650}
        className="absolute bottom-[5.5vw] lg:-bottom-[8.4vw] -right-[1.5vw] lg:-right-0 w-[42vw] lg:w-[22vw] h-auto pointer-events-none z-30"
      />

      {/* CONTAINER TENGAH — LAYER KERTAS */}
      <div className="relative z-[15] flex items-center justify-center mt-[0.5vw] lg:mt-[4.62vw]">
        <div className="relative w-full bg-[url('/images/Atet-Halim/EventOrder/LayerKertas.webp')] bg-no-repeat [background-size:100%_100%] lg:bg-[url('/images/Atet-Halim/EventOrder/LayerKertasD.svg')] lg:[background-size:100%_100%]">
          <div className="relative flex flex-col items-center text-center">
            {/* LOGO */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="pt-[12.82vw] lg:pt-[0px]"
            >
              <Image
                src="/images/Atet-Halim/Hero/LogoD4.webp"
                alt="logo stamp"
                width={220}
                height={220}
                className="w-[24.36vw] lg:w-[13vw] h-auto"
              />
            </motion.div>

            {/* TIME & LOCATION */}
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-poltawski text-[7.18vw] lg:text-[3.17vw] text-[#402824] pt-[7.69vw] lg:pt-[10px] tracking-wide"
            >
              TIME & LOCATION
            </motion.h2>

            {/* ORNAMENT GARIS */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <Image
                src="/images/Atet-Halim/EventOrder/OrnamentGaris.webp"
                alt="ornament"
                width={250}
                height={250}
                className="w-[36.41vw] lg:w-[14.99vw] h-auto lg:-mt-[5px]"
              />
            </motion.div>

            {/* FOTO HOTEL */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-[71.28vw] lg:w-[31.04vw] h-[46.15vw] lg:h-[20.81vw] mt-[7.69vw] lg:mt-[6px]"
            >
              <Image
                src="/images/Atet-Halim/EventOrder/Pullman..webp"
                alt="Pullman Grand Ballroom"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* NAMA VENUE + ALAMAT */}
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-athelas font-bold text-[4.62vw] lg:text-[1.45vw] text-[#2B1F05] pt-[9.49vw] lg:pt-[3.43vw] tracking-wide"
            >
              PULLMAN GRAND BALLROOM
            </motion.h3>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-athelas text-[3.59vw] lg:text-[1.45vw] lg:pt-[5px] text-[#402824]"
            >
              Jalan Diponegoro No. 72, Bandung
            </motion.p>

            {/* TOMBOL GOOGLE MAPS */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <a
                href="https://maps.app.goo.gl/4HJLptZmyHtkr9v68"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-[4.10vw] lg:mt-[1.45vw] w-[41.03vw] lg:w-[16.91vw] h-[8.46vw] lg:h-[3.43vw] bg-[#5E5036] text-white text-[3.59vw] lg:text-[1.45vw] tracking-wide rounded-[1.54vw] lg:rounded-[9px] font-athelas flex items-center justify-center"
              >
                GOOGLE MAPS
              </a>
            </motion.div>

            {/* THANKSGIVING MASS */}
            <motion.h4
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-cylburn text-[10.26vw] lg:text-[3.43vw] text-[#402824] pt-[13.33vw] lg:pt-[4.7vw] [--stroke-w:0.5px] lg:[--stroke-w:0.8px]"
              style={{ WebkitTextStroke: "var(--stroke-w) #402824" }}
            >
              Thanksgiving Mass
            </motion.h4>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-athelas text-[4.10vw] lg:text-[1.72vw] text-[#402824] pt-[3.85vw] lg:pt-[5px]"
            >
              10.00 AM
            </motion.p>

            {/* LUNCH RECEPTION */}
            <motion.h4
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-cylburn text-[10.26vw] lg:text-[3.43vw] text-[#402824] pt-[9.74vw] lg:pt-[2.58vw]  [--stroke-w:0.5px] lg:[--stroke-w:0.8px]"
              style={{ WebkitTextStroke: "var(--stroke-w) #402824" }}
            >
              Lunch Reception
            </motion.h4>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-athelas text-[4.10vw] lg:text-[1.72vw] text-[#402824] pt-[4.10vw] lg:pt-[0px] pb-[51.28vw] lg:pb-[13.21vw]"
            >
              11.30 AM
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventOrder;
