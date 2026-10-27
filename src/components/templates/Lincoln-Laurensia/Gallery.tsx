import React from "react";
import Image from "next/image";
import moment from "moment";
import { motion } from "framer-motion";
import { fadeIn, fadeUp, fadeLeft, fadeRight } from "../../../lib/animation";

type GalleryProps = {
  data?: any;
};

const Gallery = ({ data }: GalleryProps) => {
  const galleryData = data?.dataContent?.galleryImageData;
  const firstUrl =
    Array.isArray(galleryData) && galleryData[0]?.url
      ? `https://media.twinklebook.com/${galleryData[0].url}`
      : "/images/Lincoln-Laurensia/Gallery/AsetSatu.webp";

  const eventDate = data?.dataEvent?.date;
  const dateLabel = eventDate
    ? moment(eventDate).format("dddd - DD/MM/YY").toLowerCase()
    : "saturday - 28/11/26";

  return (
    <section
      id="gallery"
      className="relative z-10 flex w-full flex-col items-center bg-white px-[4.1vw] py-[11.25vw] font-poppins text-[#737573] lg:px-[1.06vw] lg:py-[7.4vw]"
    >
      <div className="flex w-full max-w-[88.21vw] justify-between text-[2.82vw] lg:max-w-[41.2vw] lg:text-[1.46vw]">
        <motion.p
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          just
        </motion.p>
        <motion.p
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          us two
        </motion.p>
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative my-[9.5vw] h-[117.95vw] w-[88.21vw] lg:my-[3.8vw] lg:h-[47.42vw] lg:w-[35.25vw]"
      >
        <Image
          src={firstUrl}
          alt="Lincoln & Laurensia"
          fill
          className="object-cover"
        />
      </motion.div>

      <div className="flex w-full max-w-[88.21vw] justify-between text-[2.82vw] lg:max-w-[41.2vw] lg:text-[1.46vw]">
        <motion.p
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          good times
        </motion.p>
        <motion.p
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {dateLabel}
        </motion.p>
      </div>
    </section>
  );
};

export default Gallery;

// SEBELUM DI DINAMISKAN
// import React from "react";
// import Image from "next/image";

// const Gallery = () => {
//   return (
//     <section
//       id="gallery"
//       className="relative z-10 flex w-full flex-col items-center bg-white px-[4.1vw] py-[11.25vw] font-poppins text-[#737573] lg:px-[1.06vw] lg:py-[7.4vw]"
//     >
//       <div className="flex w-full max-w-[88.21vw] justify-between text-[2.82vw] lg:max-w-[41.2vw] lg:text-[1.46vw]">
//         <p>just</p>
//         <p>us two</p>
//       </div>

//       <div className="relative my-[9.5vw] h-[117.95vw] w-[88.21vw] lg:my-[4.23vw] lg:h-[47.42vw] lg:w-[35.25vw]">
//         <Image
//           src="/images/Lincoln-Laurensia/Gallery/AsetSatu.webp"
//           alt="Lincoln & Laurensia"
//           fill
//           className="object-cover"
//         />
//       </div>

//       <div className="flex w-full max-w-[88.21vw] justify-between text-[2.82vw] lg:max-w-[41.2vw] lg:text-[1.46vw]">
//         <p>good times</p>
//         <p>saturday - 28/11/26</p>
//       </div>
//     </section>
//   );
// };

// export default Gallery;

// SEBELUM DI VW KAN
// import React from "react";
// import Image from "next/image";

// const Gallery = () => {
//   return (
//     <section
//       id="gallery"
//       className="relative z-10 flex w-full flex-col items-center bg-white px-4 py-10 font-poppins text-[#737573] lg:py-[120px]"
//     >
//       <div className="flex w-full max-w-[344px] justify-between text-[11px] lg:max-w-[630px] lg:text-[22px]">
//         <p>just</p>
//         <p>us two</p>
//       </div>

//       <div className="relative my-10 h-[460px] w-[344px] lg:my-[64px] lg:h-[717px] lg:w-[536.19px]">
//         <Image
//           src="/images/Lincoln-Laurensia/Gallery/AsetSatu.webp"
//           alt="Lincoln & Laurensia"
//           fill
//           className="object-cover"
//         />
//       </div>

//       <div className="flex w-full max-w-[344px] justify-between text-[11px] lg:max-w-[630px] lg:text-[22px]">
//         <p>good times</p>
//         <p>saturday - 28/11/26</p>
//       </div>
//     </section>
//   );
// };

// export default Gallery;
