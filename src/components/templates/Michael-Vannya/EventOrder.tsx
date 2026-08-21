import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import moment from "moment";
import { fadeUp } from "../../../lib/animation";

type SessionItem = {
  id: string;
  eventSessionId: string;
  eventId: string;
  name: string;
  date: string;
  address: string;
  addressName: string;
  latLong: string;
  quota?: number;
};

type EventOrderProps = {
  data?: any;
};

const buildMapsUrl = (session: SessionItem) => {
  // 1. Kalau latLong udah berupa link Maps, pakai langsung
  if (session.latLong?.startsWith("http")) {
    return session.latLong;
  }

  // 2. Kalau ada address lengkap dari API, search by alamat
  if (session.address) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(session.address)}`;
  }

  // 3. Fallback: koordinat mentah
  if (session.latLong) {
    return `https://www.google.com/maps/search/?api=1&query=${session.latLong.replace(/\s/g, "")}`;
  }

  return "https://maps.app.goo.gl/NYgz9hw7AJesD5fz6";
};

const formatTime = (date: string) => moment(date).format("HH.mm") + " WITA";

const findSessionByName = (
  sessions: SessionItem[],
  keyword: string,
): SessionItem | undefined => {
  return sessions.find((s) =>
    s.name?.toLowerCase().includes(keyword.toLowerCase()),
  );
};

const DEFAULT_TEA_CEREMONY: SessionItem = {
  id: "",
  eventSessionId: "",
  eventId: "",
  name: "Tea Ceremony",
  date: "2026-10-02T14:00:00",
  addressName: "CANDANI VILLA",
  address:
    "Jl. Pantai Gumicik No.11, Ketewel, Kec.Sukawati, Kabupaten Gianyar, Bali 80582",
  latLong: "https://maps.app.goo.gl/NYgz9hw7AJesD5fz6",
};

const DEFAULT_HOLY_MATRIMONY: SessionItem = {
  id: "",
  eventSessionId: "",
  eventId: "",
  name: "Holy Matrimony",
  date: "2026-10-02T15:30:00",
  addressName: "CANDANI VILLA",
  address:
    "Jl. Pantai Gumicik No.11, Ketewel, Kec.Sukawati, Kabupaten Gianyar, Bali 80582",
  latLong: "https://maps.app.goo.gl/NYgz9hw7AJesD5fz6",
};

const DEFAULT_RECEPTION: SessionItem = {
  id: "",
  eventSessionId: "",
  eventId: "",
  name: "Dinner Reception",
  date: "2026-10-02T18:30:00",
  addressName: "CANDANI VILLA",
  address:
    "Jl. Pantai Gumicik No.11, Ketewel, Kec.Sukawati, Kabupaten Gianyar, Bali 80582",
  latLong: "https://maps.app.goo.gl/NYgz9hw7AJesD5fz6",
};

const EventOrder = ({ data }: EventOrderProps) => {
  const currentEventId = data?.dataEvent?.id;
  const rawSessions: SessionItem[] = data?.dataSession ?? [];

  const validSessions = rawSessions.filter(
    (s) => s.eventId === currentEventId,
  );

  const teaCeremony =
    findSessionByName(validSessions, "tea") ?? DEFAULT_TEA_CEREMONY;

  const holyMatrimony =
    findSessionByName(validSessions, "holy matrimony") ??
    DEFAULT_HOLY_MATRIMONY;

  const reception =
    findSessionByName(validSessions, "reception") ??
    findSessionByName(validSessions, "dinner") ??
    DEFAULT_RECEPTION;

  // Venue ditampilkan satu kali di atas (semua acara di venue yang sama).
  // Prioritas: Holy Matrimony > Reception > Tea Ceremony > default.
  const venueSession =
    findSessionByName(validSessions, "holy matrimony") ??
    findSessionByName(validSessions, "reception") ??
    findSessionByName(validSessions, "dinner") ??
    findSessionByName(validSessions, "tea") ??
    DEFAULT_HOLY_MATRIMONY;

  const venueName = venueSession.addressName || "CANDANI VILLA";
  const venueAddress =
    venueSession.address ||
    "Jl. Pantai Gumicik No.11, Ketewel, Kec.Sukawati, Kabupaten Gianyar, Bali 80582";

  return (
    <section
      id="eventorder"
      className="relative w-full pt-[74px] pb-[75px] lg:pt-[116px] lg:pb-[118px] bg-[#7A883F]"
    >
      {/* Ornament Kanan Bawah */}
      <Image
        src="/images/Michael-Vannya/EventOrder/BungaD.webp"
        alt=""
        width={500}
        height={500}
        className="absolute -bottom-[42px] -right-[8px] w-[260px] lg:-bottom-[105px] lg:right-[0px] lg:w-[510px] h-auto pointer-events-none z-0"
      />
      <div className="relative flex flex-col items-center justify-center leading-none text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-kinfolk text-[34px] lg:text-[48px] text-white uppercase"
        >
          Event Detail
        </motion.h1>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/images/Michael-Vannya/EventOrder/Ornamentgaris.png"
            alt="ornament"
            width={500}
            height={500}
            className="w-[95px] lg:w-[147px] h-auto pointer-events-none lg:mt-[5px]"
          />
        </motion.div>
        <div className=" flex flex-col items-center justify-center leading-none text-center">
          <motion.div
            className=""
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src="/images/Michael-Vannya/EventOrder/CandaniVilla.webp"
              alt="Ornament"
              width={750}
              height={750}
              className="mt-[27.5px] lg:-mt-[17px] w-[290px] lg:w-[550px] h-auto pointer-events-none"
            />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman text-[20px] lg:text-[30px] font-bold  italic text-white pt-[23px] lg:pt-[44px] tracking-widest lg:tracking-normal"
          >
            {venueName}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-times-new-roman text-[15px] lg:text-[20px] leading-[20px] lg:leading-[26px] text-white pt-[19px] lg:pt-[26px] tracking-wide"
          >
            Jl. Pantai Gumicik No.11, Ketewel, Kec.Sukawati, <br />
            Kabupaten Gianyar, Bali 80582
          </motion.p>
          <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            href={buildMapsUrl(venueSession)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[160px] h-[33px] lg:h-[30px] bg-white rounded-[6px] font-times-new-roman text-[15px] lg:text-[14px] text-[#1E1E1E] mt-[15px] lg:mt-[16px] flex items-center justify-center"
          >
            GOOGLE MAPS
          </motion.a>

          <div className="flex flex-col items-center justify-center gap-[30px] lg:gap-[33px] pt-[40px] lg:pt-[58.5px]">
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-times-new-roman font-bold italic text-[16px] lg:text-[26px] text-white flex flex-col"
            >
              TEA CEREMONY
              <span className="font-normal not-italic mt-[15px] lg:mt-[15px]">
                {formatTime(teaCeremony.date)}
              </span>
            </motion.h3>
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-times-new-roman font-bold italic text-[16px] lg:text-[26px] text-white flex flex-col"
            >
              HOLY MATRIMONY
              <span className="font-normal not-italic mt-[15px] lg:mt-[15px]">
                {formatTime(holyMatrimony.date)}
              </span>
            </motion.h3>
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-times-new-roman font-bold italic text-[16px] lg:text-[26px] text-white flex flex-col uppercase"
            >
              Dinner Reception
              <span className="font-normal not-italic mt-[15px] lg:mt-[15px]">
                {formatTime(reception.date)}
              </span>
            </motion.h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventOrder;





// SEBELUM DI DINAMISKAN
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { fadeUp } from "../../../lib/animation";

// const EventOrder = () => {
//   return (
//     <section
//       id="eventorder"
//       className="relative w-full pt-[74px] pb-[75px] lg:pt-[116px] lg:pb-[118px] bg-[#7A883F]"
//     >
//       {/* Ornament Kanan Bawah */}
//       <Image
//         src="/images/Michael-Vannya/EventOrder/BungaD.webp"
//         alt=""
//         width={500}
//         height={500}
//         className="absolute -bottom-[42px] -right-[8px] w-[260px] lg:-bottom-[105px] lg:right-[0px] lg:w-[510px] h-auto pointer-events-none z-0"
//       />
//       <div className="relative flex flex-col items-center justify-center leading-none text-center">
//         <motion.h1
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           className="font-kinfolk text-[34px] lg:text-[48px] text-white uppercase"
//         >
//           Event Detail
//         </motion.h1>
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//         >
//           <Image
//             src="/images/Michael-Vannya/EventOrder/Ornamentgaris.png"
//             alt="ornament"
//             width={500}
//             height={500}
//             className="w-[95px] lg:w-[147px] h-auto pointer-events-none lg:mt-[5px]"
//           />
//         </motion.div>
//         <div className=" flex flex-col items-center justify-center leading-none text-center">
//           <motion.div
//             className=""
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//           >
//             <Image
//               src="/images/Michael-Vannya/EventOrder/CandaniVilla.webp"
//               alt="Ornament"
//               width={750}
//               height={750}
//               className="mt-[27.5px] lg:-mt-[17px] w-[290px] lg:w-[550px] h-auto pointer-events-none"
//             />
//           </motion.div>
//           <motion.h2
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="font-times-new-roman text-[20px] lg:text-[30px] font-bold  italic text-white pt-[23px] lg:pt-[44px] tracking-widest lg:tracking-normal"
//           >
//             CANDANI VILLA
//           </motion.h2>
//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="font-times-new-roman text-[15px] lg:text-[20px] leading-[20px] lg:leading-[26px] text-white pt-[19px] lg:pt-[26px] tracking-wide"
//           >
//             Jl. Pantai Gumicik No.11, Ketewel, Kec.Sukawati, <br />
//             Kabupaten Gianyar, Bali 80582
//           </motion.p>
//           <motion.a
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             href="https://maps.app.goo.gl/NYgz9hw7AJesD5fz6"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-[160px] h-[33px] lg:h-[30px] bg-white rounded-[6px] font-times-new-roman text-[15px] lg:text-[14px] text-[#1E1E1E] mt-[15px] lg:mt-[16px] flex items-center justify-center"
//           >
//             GOOGLE MAPS
//           </motion.a>

//           <div className="flex flex-col items-center justify-center gap-[30px] lg:gap-[33px] pt-[40px] lg:pt-[58.5px]">
//             <motion.h3
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               className="font-times-new-roman font-bold italic text-[16px] lg:text-[26px] text-white flex flex-col"
//             >
//               TEA CEREMONY
//               <span className="font-normal not-italic mt-[15px] lg:mt-[15px]">
//                 14.00 WITA
//               </span>
//             </motion.h3>
//             <motion.h3
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               className="font-times-new-roman font-bold italic text-[16px] lg:text-[26px] text-white flex flex-col"
//             >
//               HOLY MATRIMONY
//               <span className="font-normal not-italic mt-[15px] lg:mt-[15px]">
//                 15.30 WITA
//               </span>
//             </motion.h3>
//             <motion.h3
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               className="font-times-new-roman font-bold italic text-[16px] lg:text-[26px] text-white flex flex-col uppercase"
//             >
//               Dinner Reception
//               <span className="font-normal not-italic mt-[15px] lg:mt-[15px]">
//                 18.30 WITA
//               </span>
//             </motion.h3>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EventOrder;
