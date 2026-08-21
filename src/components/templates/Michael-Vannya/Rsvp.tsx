"use client";

import Image from "next/image";
import moment from "moment";
import { SmartRsvpForm, useSmartRsvp } from "@/components/rsvp/SmartRsvpForm";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight } from "../../../lib/animation";

type RsvpProps = {
  data?: any;
  paramUrl?: string;
  onSubmitRSVP?: () => void;
};

const Rsvp = ({ data, paramUrl, onSubmitRSVP }: RsvpProps) => {
  const rsvpImageUrl = data?.dataContent?.rsvpImageData?.url
    ? `https://media.twinklebook.com/${data.dataContent.rsvpImageData.url}`
    : "/images/Michael-Vannya/Foto/MichaelVannya.webp";

  return (
    <SmartRsvpForm
      data={data}
      paramUrl={paramUrl}
      onSubmitRSVP={onSubmitRSVP}
      defaultAttendStatus={0}
    >
      <RsvpSectionDesign rsvpImageUrl={rsvpImageUrl} />
    </SmartRsvpForm>
  );
};

type RsvpSectionDesignProps = {
  rsvpImageUrl: string;
};

const RsvpSectionDesign = ({ rsvpImageUrl }: RsvpSectionDesignProps) => {
  const { guestData, attendStatus, invitationUrl, paramUrl } = useSmartRsvp();

  const waHref = (invitationUrl ?? "6281234567890").replace(/\D/g, "");

  return (
    <>
      <SmartRsvpForm.Modals />

      <section
        id="rsvp"
        className="relative w-full pt-[0px] pb-[72px] lg:pt-[35px] lg:pb-[0px] bg-white lg:flex lg:items-stretch"
      >
        {/* KOLOM KIRI - FOTO (DESKTOP ONLY) */}
        <div className="hidden lg:block relative lg:w-1/2">
          <Image
            src={rsvpImageUrl}
            alt="Michael & Vannya"
            fill
            className="object-cover"
          />
        </div>

        {/* KOLOM KANAN - KONTEN RSVP */}
        <div className="relative lg:w-1/2">
          {/* Ornament Kiri Bawah Mobile */}
          <Image
            src="/images/Michael-Vannya/Rsvp/BungaKiriBawahh.webp"
            alt=""
            width={300}
            height={300}
            className="absolute -bottom-[182px] left-[0px] w-[230px] h-auto pointer-events-none z-0 lg:hidden"
          />

          {/* Ornament Kanan Atas Desktop */}
          {/* <Image
            src="/images/Michael-Vannya/Rsvp/BungaKananAtas.webp"
            alt=""
            width={300}
            height={300}
            className="hidden lg:block absolute -top-[30px] -right-[10px] w-[280px] h-auto pointer-events-none z-0"
          /> */}

          {/* Ornament Kanan Atas Desktop */}
          <Image
            src="/images/Michael-Vannya/Dresscode/BungaTengah.webp"
            alt=""
            width={600}
            height={600}
            className="hidden lg:block absolute -top-[550px] -right-[0px] w-[575px] h-auto pointer-events-none z-0"
          />

          <div className="relative flex flex-col items-center justify-center text-center leading-none lg:pt-[130px]">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-kinfolk text-[34px] lg:text-[48px] text-[#1B1C1D]"
            >
              RSVP
            </motion.h1>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <Image
                src="/images/Michael-Vannya/Dresscode/OrnamentGaris.png"
                alt="ornament"
                width={250}
                height={250}
                className="w-[95px] lg:w-[147px] h-auto pointer-events-none"
              />
            </motion.div>
            <div className="flex flex-col items-center justify-center text-center leading-none">
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="font-times-new-roman text-[14px] lg:text-[20px] text-[#1B1C1D] pt-[25px] lg:pt-[54px]"
              >
                Dear Mr. /Mrs. / Ms.
              </motion.p>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="font-times-new-roman text-[14px] lg:text-[22px] text-[#1B1C1D] pt-[10.5px] lg:pt-[20px]"
              >
                {paramUrl !== "" ? paramUrl : (guestData?.name ?? "[Guest Name]")}
              </motion.p>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="font-times-new-roman text-[12px] lg:text-[20px] text-[#1B1C1D] pt-[19.5px] lg:pt-[36px] lg:leading-[26px]"
              >
                Kindly confirm your attendance before <br />
                <span className="block pt-[8px]">
                  {moment(
                    guestData?.closeRSVPDate ?? new Date().toISOString(),
                  ).format("DD MMMM YYYY")}
                </span>
              </motion.p>
              <div className="flex items-center justify-center gap-[22px] lg:gap-[28px] mt-[24px] lg:mt-[25px]">
                <motion.div
                  variants={fadeLeft}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  <SmartRsvpForm.AttendToggle
                    className={`w-[113px] font-normal tracking-wide lg:w-[203px] h-[42px] rounded-[71px] lg:rounded-[50px] font-times-new-roman text-[12px] lg:text-[16px] text-wrap flex items-center justify-center transition-colors ${
                      attendStatus === 1
                        ? "bg-[#434341] text-white"
                        : "bg-transparent border border-[#1B1C1D]/50 text-[#292A2B]"
                    }`}
                  />
                </motion.div>
                <motion.div
                  variants={fadeRight}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  <SmartRsvpForm.NotAttendToggle
                    className={`w-[113px] font-normal tracking-wide lg:w-[203px] h-[42px] rounded-[71px] lg:rounded-[50px] font-times-new-roman text-[12px] lg:text-[16px] flex items-center justify-center transition-colors ${
                      attendStatus === 2
                        ? "bg-[#434341] text-white"
                        : "border border-[#1B1C1D]/50 text-[#292A2B]"
                    }`}
                  />
                </motion.div>
              </div>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="font-times-new-roman text-[12px] lg:text-[20px] text-[#1B1C1D] pt-[60px] lg:pt-[100px]"
              >
                Confirm Your RSVP
              </motion.p>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <SmartRsvpForm.SubmitButton className="w-[160px] font-normal tracking-wide lg:w-[220px] h-[42px] lg:h-[52px] rounded-[71px] lg:rounded-[50px] bg-[#434341] font-times-new-roman text-[12px] lg:text-[16px] text-white flex items-center justify-center mt-[25px] lg:mt-[36px] leading-[16px] lg:leading-[17px]" />
              </motion.div>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="font-times-new-roman text-[10px] lg:text-[20px] text-[#1B1C1D] pt-[53px] lg:pt-[66px] leading-[16px] lg:leading-[22px]"
              >
                If you need assistance with your RSVP, <br />
                please contact our support team.
              </motion.p>
              <motion.a
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                href={`https://wa.me/${waHref}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[160px] lg:w-[220px] h-[30px] lg:h-[42px] bg-[#12877B] rounded-[55px] lg:rounded-[50px] font-times-new-roman text-[12px] lg:text-[16px] text-white gap-[6px] lg:gap-[10px] mt-[23.2px] lg:mt-[34px] lg:mb-[117px]"
              >
                <Image
                  src="/images/Michael-Vannya/Rsvp/Wa.png"
                  alt="whatsapp"
                  width={200}
                  height={200}
                  className="w-[16px] lg:w-[25px] -mt-[2px]"
                />
                CHAT SUPPORT
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rsvp;





// SEBELUM DI DINAMISKAN
// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import NotifModal from "../../../popup/NotifModal";
// import { motion } from "framer-motion";
// import { fadeUp, fadeLeft, fadeRight } from "../../../lib/animation";

// type AttendStatus = 0 | 1 | 2; // 0: belum pilih, 1: attend, 2: unable to attend
// type ModalType =
//   | ""
//   | "confirm_rsvp"
//   | "rsvp_confirmed_hadir"
//   | "rsvp_confirmed_tidak_hadir";

// const Rsvp = () => {
//   const [attendStatus, setAttendStatus] = useState<AttendStatus>(0);
//   const [modalType, setModalType] = useState<ModalType>("");

//   const handleAttendClick = (status: AttendStatus) => {
//     setAttendStatus((prev) => (prev === status ? 0 : status));
//   };

//   const handleConfirmClick = () => {
//     if (attendStatus === 0) return; // belum pilih attend/unable
//     setModalType("confirm_rsvp");
//   };

//   const handleConfirmed = () => {
//     setModalType(
//       attendStatus === 1
//         ? "rsvp_confirmed_hadir"
//         : "rsvp_confirmed_tidak_hadir",
//     );
//   };

//   const handleCloseModal = () => {
//     setModalType("");
//   };

//   return (
//     <section
//       id="rsvp"
//       className="relative w-full pt-[0px] pb-[72px] lg:pt-[35px] lg:pb-[0px] bg-white lg:flex lg:items-stretch"
//     >
//       {/* KOLOM KIRI - FOTO (DESKTOP ONLY) */}
//       <div className="hidden lg:block relative lg:w-1/2">
//         <Image
//           src="/images/Michael-Vannya/Foto/MichaelVannya.webp"
//           alt="Michael & Vannya"
//           fill
//           className="object-cover"
//         />
//       </div>

//       {/* KOLOM KANAN - KONTEN RSVP (isi sama persis seperti sebelumnya) */}
//       <div className="relative lg:w-1/2">
//       {/* Ornament Kiri  Bawah Mobile */}
//       <Image
//         src="/images/Michael-Vannya/Rsvp/BungaKiriBawahh.webp"
//         alt=""
//         width={300}
//         height={300}
//         className="absolute -bottom-[182px] left-[0px] w-[230px] h-auto pointer-events-none z-0 lg:hidden"
//       />

//         {/* Ornament Kanan Atas Desktop */}
//         {/* <Image
//           src="/images/Michael-Vannya/Rsvp/BungaKananAtas.webp"
//           alt=""
//           width={300}
//           height={300}
//           className="hidden lg:block absolute -top-[30px] -right-[10px] w-[280px] h-auto pointer-events-none z-0"
//         /> */}

//         {/* Ornament Kanan Atas Desktop */}
//         <Image
//           src="/images/Michael-Vannya/Dresscode/BungaTengah.webp"
//           alt=""
//           width={600}
//           height={600}
//           className="hidden lg:block absolute -top-[550px] -right-[0px] w-[575px] h-auto pointer-events-none z-0"
//         />

//         <div className="relative flex flex-col items-center justify-center text-center leading-none lg:pt-[130px]">
//           <motion.h1
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="font-kinfolk text-[34px] lg:text-[48px] text-[#1B1C1D]"
//           >
//             RSVP
//           </motion.h1>
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//           >
//             <Image
//               src="/images/Michael-Vannya/Dresscode/OrnamentGaris.png"
//               alt="ornament"
//               width={250}
//               height={250}
//               className="w-[95px] lg:w-[147px] h-auto pointer-events-none"
//             />
//           </motion.div>
//           <div className="flex flex-col items-center justify-center text-center leading-none">
//             <motion.p
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               className="font-times-new-roman text-[14px] lg:text-[20px] text-[#1B1C1D] pt-[25px] lg:pt-[54px]"
//             >
//               Dear Mr. /Mrs. / Ms.
//             </motion.p>
//             <motion.p
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               className="font-times-new-roman text-[14px] lg:text-[22px] text-[#1B1C1D] pt-[10.5px] lg:pt-[20px]"
//             >
//               [Guest Name]
//             </motion.p>
//             <motion.p
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               className="font-times-new-roman text-[12px] lg:text-[20px] text-[#1B1C1D] pt-[19.5px] lg:pt-[36px] lg:leading-[26px]"
//             >
//               Kindly confirm your attendance before <br />
//               <span className="block pt-[8px]">[Due Date]</span>
//             </motion.p>
//             <div className="flex items-center justify-center gap-[22px] lg:gap-[28px] mt-[24px] lg:mt-[25px]">
//               <motion.button
//                 variants={fadeLeft}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 1.5, ease: "easeOut" }}
//                 onClick={() => handleAttendClick(1)}
//                 className={`w-[113px] font-normal tracking-wide lg:w-[203px] h-[42px] rounded-[71px] lg:rounded-[50px] font-times-new-roman text-[12px] lg:text-[16px] text-wrap flex items-center justify-center transition-colors ${
//                   attendStatus === 1
//                     ? "bg-[#434341] text-white"
//                     : "bg-transparent border border-[#1B1C1D]/50 text-[#292A2B]"
//                 }`}
//               >
//                 ATTEND
//               </motion.button>
//               <motion.button
//                 variants={fadeRight}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 1.5, ease: "easeOut" }}
//                 onClick={() => handleAttendClick(2)}
//                 className={`w-[113px] font-normal tracking-wide lg:w-[203px] h-[42px] rounded-[71px] lg:rounded-[50px] font-times-new-roman text-[12px] lg:text-[16px] flex items-center justify-center transition-colors ${
//                   attendStatus === 2
//                     ? "bg-[#434341] text-white"
//                     : "border border-[#1B1C1D]/50 text-[#292A2B]"
//                 }`}
//               >
//                 UNABLE TO <br className="lg:hidden" />
//                 ATTEND
//               </motion.button>
//             </div>
//             <motion.p
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               className="font-times-new-roman text-[12px] lg:text-[20px] text-[#1B1C1D] pt-[60px] lg:pt-[100px]"
//             >
//               Confirm Your RSVP
//             </motion.p>
//             <motion.a
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               onClick={handleConfirmClick}
//               className="w-[160px] font-normal tracking-wide lg:w-[220px] h-[42px] lg:h-[52px] rounded-[71px] lg:rounded-[50px] bg-[#434341] font-times-new-roman text-[12px] lg:text-[16px] text-white flex items-center justify-center mt-[25px] lg:mt-[36px] leading-[16px] lg:leading-[17px]"
//             >
//               CONFIRM {attendStatus === 2 ? "UNABLE" : ""} <br />
//               TO ATTEND
//             </motion.a>
//             <motion.p
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               className="font-times-new-roman text-[10px] lg:text-[20px] text-[#1B1C1D] pt-[53px] lg:pt-[66px] leading-[16px] lg:leading-[22px]"
//             >
//               If you need assistance with your RSVP, <br />
//               please contact our support team.
//             </motion.p>
//             <motion.a
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               href="https://wa.me/6281234567890"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center justify-center w-[160px] lg:w-[220px] h-[30px] lg:h-[42px] bg-[#12877B] rounded-[55px] lg:rounded-[50px] font-times-new-roman text-[12px] lg:text-[16px] text-white gap-[6px] lg:gap-[10px] mt-[23.2px] lg:mt-[34px] lg:mb-[117px]"
//             >
//               <Image
//                 src="/images/Michael-Vannya/Rsvp/Wa.png"
//                 alt="whatsapp"
//                 width={200}
//                 height={200}
//                 className="w-[16px] lg:w-[25px] -mt-[2px]"
//               />
//               CHAT SUPPORT
//             </motion.a>
//           </div>
//         </div>
//       </div>

//       {modalType && (
//         <NotifModal
//           type={modalType}
//           onClose={handleCloseModal}
//           onConfirm={handleConfirmed}
//         />
//       )}
//     </section>
//   );
// };

// export default Rsvp;