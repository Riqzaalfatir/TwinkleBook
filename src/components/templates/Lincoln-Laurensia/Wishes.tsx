"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { dummyPesan, PesanItem } from "./data/wishes";
import WishesCard from "./popup/WishesCard";
import NotifModal from "../../../popup/NotifModal";
import { useListPMG } from "../../../hooks/api/useListPMG";
import { usePMG } from "../../../hooks/api/usePMG";
import { LincolnLaurensiaDataProps } from "./types";
import { motion } from "framer-motion";
import { fadeIn, fadeUp, fadeLeft, fadeRight } from "../../../lib/animation";

const decodeHtmlEntities = (text: string): string => {
  if (typeof window === "undefined") return text;
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
};

type WishesProps = {
  data?: LincolnLaurensiaDataProps;
  guestData?: { name?: string } | null;
};

const Wishes = ({ data, guestData }: WishesProps) => {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [notifType, setNotifType] = useState<string>("");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<PesanItem | null>(
    null,
  );
  const hasAutofilled = useRef(false);

  const eventId = data?.dataEvent?.id;

  const { getListPMG, listPMG } = useListPMG();
  const { submitPMG, statusPMG: pmgStatus } = usePMG();

  useEffect(() => {
    if (guestData?.name && !hasAutofilled.current) {
      setNama(guestData.name);
      hasAutofilled.current = true;
    }
  }, [guestData?.name]);

  useEffect(() => {
    if (eventId) {
      getListPMG(eventId);
    }
  }, [eventId, getListPMG]);

  const handleSubmit = async () => {
    const cleanNama = nama.trim();
    const cleanPesan = pesan.trim();

    if (!cleanNama || !cleanPesan) {
      setNotifType("incomplete_wishes");
      return;
    }
    if (!eventId) return;

    const success = await submitPMG(eventId, cleanNama, cleanPesan);

    if (success) {
      setNama(guestData?.name ?? "");
      setPesan("");
      setShowPopup(true);
      getListPMG(eventId);
    } else {
      setNotifType("submit_failed");
    }
  };

  const pesanList: PesanItem[] =
    listPMG && listPMG.length > 0
      ? listPMG.map((item) => ({
          id: item.id,
          nama: item.name,
          pesan: decodeHtmlEntities(item.message),
        }))
      : dummyPesan;

  return (
    <section
      id="wishes"
      className="relative z-10 flex w-full flex-col items-center bg-white px-[6.15vw] py-[20.65vw] font-poppins text-[#2F2F2F] lg:px-[1.59vw] lg:py-[8.3vw]"
    >
      <motion.h2 
      variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 1.5, ease: "easeOut" }}
      className="font-poppins text-[8.72vw] lg:font-semibold uppercase leading-none lg:text-[2.78vw] text-[#2F2F2F]">
        Your Wishes
      </motion.h2>

      <div className="mt-[8.2vw] lg:mt-[3.9vw] flex w-full max-w-[73.08vw] flex-col gap-[4.1vw] lg:gap-[1.65vw] lg:max-w-[39.29vw]">
        <motion.input 
        variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 1.5, ease: "easeOut" }}
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="[Guest Name]"
          className="h-[7.69vw] w-full rounded-[2.56vw] border border-[#2F2F2F] bg-transparent px-[3.33vw] lg:px-[1.65vw] text-[3.59vw] outline-none placeholder:text-[#2F2F2F] lg:h-[2.78vw] lg:rounded-[0.66vw] lg:text-[1.32vw]"
        />

        <motion.textarea
        variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 1.5, ease: "easeOut" }}
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          placeholder="Leave your wishes here."
          className="h-[27.18vw] w-full resize-none rounded-[2.56vw] lg:rounded-[1.32vw] border border-[#2F2F2F] bg-transparent px-[3.33vw] py-[2.05vw] lg:px-[1.65vw] lg:py-[0.66vw] text-[3.59vw] outline-none placeholder:text-[#2F2F2F]/50 lg:h-[13.03vw] lg:text-[1.32vw]"
        />

        <motion.button
        variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 1.5, ease: "easeOut" }}
          type="button"
          onClick={handleSubmit}
          disabled={pmgStatus === "loading"}
          className="flex h-[7.69vw] w-full items-center justify-center gap-[2vw] lg:gap-[0.5vw] rounded-[2.56vw] lg:rounded-[0.66vw] bg-[#2F2F2F] text-[3.59vw] uppercase text-white lg:h-[2.78vw] lg:text-[1.19vw]"
        >
          <Image
            src="/images/Lincoln-Laurensia/Wishes/Panah.png"
            alt="Kirim"
            width={15}
            height={19}
            className="h-[3.59vw] w-[4.36vw] object-cover lg:h-[1.65vw] lg:w-[1.65vw]"
          />
          Send
        </motion.button>

        {/* Daftar pesan */}
        <motion.div
        variants={fadeUp}
initial="hidden"
whileInView="show"
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 1.5, ease: "easeOut" }}
          className={`h-[76.92vw] w-full overflow-y-auto rounded-[2.56vw] lg:rounded-[0.66vw] lg:h-[31.68vw] ${
            showAll ? "" : "border border-[#2F2F2F]"
          }`}
        >
          {!showAll ? (
            <>
              {/* Bar atas */}
              <div className="sticky top-0 z-10 h-[15px] w-full bg-white lg:h-[15px]" />

              <div className="px-[3.33vw] py-[4.4vw] lg:px-[1.65vw] lg:py-[1.28vw]">
                {pesanList.map((item, index) => (
                  <div key={item.id}>
                    <p className="text-[3.59vw] font-bold lg:text-[1.46vw]">
                      {item.nama}
                    </p>
                    <p className="mt-[0.2vw] lg:mt-[0.5vw] break-words text-[3.59vw] lg:text-[1.46vw]">
                      {item.pesan}
                    </p>
                    {index !== pesanList.length - 1 && (
                      <div className="mt-[1.33vw] mb-[1.75vw] lg:mt-[1.15vw] lg:mb-[1.15vw] border-t border-[#2F2F2F]/60" />
                    )}
                  </div>
                ))}
              </div>

              {/* Bar bawah */}
              <div className="sticky bottom-0 z-10 h-[15px] w-full bg-white lg:h-[15px]" />
            </>
          ) : (
            <div className="grid grid-cols-2 gap-[3.08vw] lg:gap-[1.06vw]">
              {pesanList.map((item) => {
                const initials = item.nama
                  .split(" ")
                  .filter(Boolean)
                  .map((w) => w[0])
                  .join("")
                  .toUpperCase()
                  .slice(0, 2);

                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedMessage(item)}
                    className="group relative flex cursor-pointer flex-col overflow-hidden rounded-[2.56vw] lg:rounded-[0.79vw] border border-[#2F2F2F]/30 bg-white shadow-[0_2px_6px_rgba(0,0,0,0.08)] transition hover:border-[#2F2F2F]"
                  >
                    <div className="absolute left-0 right-0 top-0 h-[0.77vw] lg:h-[0.26vw] bg-[#2F2F2F]" />

                    <div className="flex flex-1 flex-col justify-between p-[3.08vw] lg:p-[1.06vw]">
                      <p className="mb-[0.51vw] text-[6.67vw] leading-none text-[#2F2F2F]/25 lg:mb-[0.26vw] lg:text-[2.12vw]">
                        &quot;
                      </p>
                      <p className="mb-[1.03vw] line-clamp-4 text-left text-[3.08vw] leading-[4.36vw] lg:mb-[0.53vw] lg:text-[0.93vw] lg:leading-[1.32vw]">
                        {item.pesan}
                      </p>
                      <div className="h-[0.26vw] w-[2.05vw] rounded-full bg-[#2F2F2F]/40 lg:h-[0.13vw] lg:w-[1.59vw]" />
                    </div>

                    <div className="flex items-center gap-[2.56vw] lg:gap-[0.66vw] border-t border-[#2F2F2F]/15 bg-[#2F2F2F]/5 px-[3.59vw] py-[2.56vw] lg:px-[1.06vw] lg:py-[0.66vw]">
                      <div className="flex h-[7.18vw] w-[7.18vw] flex-shrink-0 items-center justify-center rounded-full border border-[#2F2F2F]/25 bg-white lg:h-[2.12vw] lg:w-[2.12vw]">
                        <p className="text-[2.82vw] font-bold lg:text-[0.79vw]">
                          {initials || "?"}
                        </p>
                      </div>
                      <p className="flex-1 truncate text-[3.08vw] font-semibold lg:text-[0.86vw]">
                        {item.nama}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </motion.div>

        <button
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          className="flex h-[7.69vw] w-full items-center justify-center gap-[1.79vw] lg:gap-[0.66vw] rounded-[2.56vw] lg:rounded-[0.66vw] bg-[#2F2F2F] text-[3.59vw] uppercase text-white lg:h-[2.78vw] lg:text-[1.19vw]"
        >
          <Image
            src="/images/Lincoln-Laurensia/Wishes/Pesan.png"
            alt="Pesan"
            width={18}
            height={20}
            className="h-[4.1vw] w-[4.62vw] object-cover lg:h-[2.18vw] lg:w-[1.79vw]"
          />
          {showAll ? "Back" : "View all messages"}
        </button>
      </div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-[300px] overflow-hidden rounded-[16px] bg-white text-center shadow-2xl"
            >
              <div className="absolute left-0 right-0 top-0 h-[4px] bg-[#2F2F2F]" />

              <div className="px-[28px] pb-[38px] pt-[42px]">
                <h3 className="font-poppins text-[28px] font-semibold uppercase leading-none text-[#2F2F2F]">
                  Thank You
                </h3>

                <p className="mt-[15px] font-poppins text-[12px] font-bold uppercase tracking-[0.15em] text-[#2F2F2F]/70">
                  Message Sent
                </p>

                <div className="mx-auto my-[18px] h-[1px] w-[36px] bg-[#2F2F2F]/60" />

                <p className="font-poppins text-[13px] leading-[20px] text-[#2F2F2F]/80">
                  Thank you for your warm wishes and prayers.
                  <br />
                  We truly appreciate your message.
                </p>

                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  className="mt-[26px] h-[36px] w-[140px] rounded-[71px] bg-[#2F2F2F] font-poppins text-[11px] uppercase tracking-[0.1em] text-white"
                >
                  Close
                </button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#2F2F2F]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {notifType && (
        <NotifModal
          type={notifType}
          onClose={() => setNotifType("")}
          waNumber={data?.dataEvent?.invitationWAUrl ?? "6281234567890"}
        />
      )}

      {/* Popup detail pesan */}
      <AnimatePresence>
        {selectedMessage && (
          <WishesCard
            data={selectedMessage}
            onClose={() => setSelectedMessage(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Wishes;


// SEBELUM DI DINAMISKAN
// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { AnimatePresence } from "framer-motion";
// import { dummyPesan, PesanItem } from "./data/wishes";
// import WishesCard from "./popup/WishesCard";

// const Wishes = () => {
//   const [nama, setNama] = useState("");
//   const [pesan, setPesan] = useState("");
//   const [list, setList] = useState<PesanItem[]>(dummyPesan);
//   const [showAll, setShowAll] = useState(false);
//   const [selectedMessage, setSelectedMessage] = useState<PesanItem | null>(
//     null,
//   );

//   const handleSubmit = () => {
//     const cleanNama = nama.trim();
//     const cleanPesan = pesan.trim();
//     if (!cleanNama || !cleanPesan) return;

//     setList((prev) => [
//       { id: Date.now(), nama: cleanNama, pesan: cleanPesan },
//       ...prev,
//     ]);
//     setNama("");
//     setPesan("");
//   };

//   return (
//     <section
//       id="wishes"
//       className="relative z-10 flex w-full flex-col items-center bg-white px-[6.15vw] py-[20.65vw] font-poppins text-[#2F2F2F] lg:px-[1.59vw] lg:py-[8.3vw]"
//     >
//       <h2 className="font-poppins text-[8.72vw] lg:font-semibold uppercase leading-none lg:text-[2.78vw] text-[#2F2F2F]">
//         Your Wishes
//       </h2>

//       <div className="mt-[8.2vw] lg:mt-[3.9vw] flex w-full max-w-[73.08vw] flex-col gap-[4.1vw] lg:gap-[1.65vw] lg:max-w-[39.29vw]">
//         <input
//           type="text"
//           value={nama}
//           onChange={(e) => setNama(e.target.value)}
//           placeholder="[Guest Name]"
//           className="h-[7.69vw] w-full rounded-[2.56vw] border border-[#2F2F2F] bg-transparent px-[3.33vw] lg:px-[1.65vw] text-[3.59vw] outline-none placeholder:text-[#2F2F2F] lg:h-[2.78vw] lg:rounded-[0.66vw] lg:text-[1.32vw]"
//         />

//         <textarea
//           value={pesan}
//           onChange={(e) => setPesan(e.target.value)}
//           placeholder="Leave your wishes here."
//           className="h-[27.18vw] w-full resize-none rounded-[2.56vw] lg:rounded-[1.32vw] border border-[#2F2F2F] bg-transparent px-[3.33vw] py-[2.05vw] lg:px-[1.65vw] lg:py-[0.66vw] text-[3.59vw] outline-none placeholder:text-[#2F2F2F]/50 lg:h-[13.03vw] lg:text-[1.32vw]"
//         />

//         <button
//           type="button"
//           onClick={handleSubmit}
//           className="flex h-[7.69vw] w-full items-center justify-center gap-[2vw] lg:gap-[0.5vw] rounded-[2.56vw] lg:rounded-[0.66vw] bg-[#2F2F2F] text-[3.59vw] uppercase text-white lg:h-[2.78vw] lg:text-[1.19vw]"
//         >
//           <Image
//             src="/images/Lincoln-Laurensia/Wishes/Panah.png"
//             alt="Kirim"
//             width={15}
//             height={19}
//             className="h-[3.59vw] w-[4.36vw] object-cover lg:h-[1.65vw] lg:w-[1.65vw]"
//           />
//           Send
//         </button>

//         {/* Daftar pesan */}
//         <div
//           className={`h-[76.92vw] w-full overflow-y-auto rounded-[2.56vw] lg:rounded-[0.66vw] lg:h-[31.68vw] ${
//             showAll ? "" : "border border-[#2F2F2F]"
//           }`}
//         >
//           {!showAll ? (
//             <>
//               {/* Bar atas */}
//               <div className="sticky top-0 z-10 h-[15px] w-full bg-white lg:h-[15px]" />

//               <div className="px-[3.33vw] py-[4.4vw] lg:px-[1.65vw] lg:py-[1.28vw]">
//                 {list.map((item, index) => (
//                   <div key={item.id}>
//                     <p className="text-[3.59vw] font-bold lg:text-[1.46vw]">
//                       {item.nama}
//                     </p>
//                     <p className="mt-[0.2vw] lg:mt-[0.5vw] break-words text-[3.59vw] lg:text-[1.46vw]">
//                       {item.pesan}
//                     </p>
//                     {index !== list.length - 1 && (
//                       <div className="mt-[1.33vw] mb-[1.75vw] lg:mt-[1.15vw] lg:mb-[1.15vw] border-t border-[#2F2F2F]/60" />
//                     )}
//                   </div>
//                 ))}
//               </div>

//               {/* Bar bawah */}
//               <div className="sticky bottom-0 z-10 h-[15px] w-full bg-white lg:h-[15px]" />
//             </>
//           ) : (
//             <div className="grid grid-cols-2 gap-[3.08vw] lg:gap-[1.06vw]">
//               {list.map((item) => {
//                 const initials = item.nama
//                   .split(" ")
//                   .filter(Boolean)
//                   .map((w) => w[0])
//                   .join("")
//                   .toUpperCase()
//                   .slice(0, 2);

//                 return (
//                   <div
//                     key={item.id}
//                     onClick={() => setSelectedMessage(item)}
//                     className="group relative flex cursor-pointer flex-col overflow-hidden rounded-[2.56vw] lg:rounded-[0.79vw] border border-[#2F2F2F]/30 bg-white shadow-[0_2px_6px_rgba(0,0,0,0.08)] transition hover:border-[#2F2F2F]"
//                   >
//                     <div className="absolute left-0 right-0 top-0 h-[0.77vw] lg:h-[0.26vw] bg-[#2F2F2F]" />

//                     <div className="flex flex-1 flex-col justify-between p-[3.08vw] lg:p-[1.06vw]">
//                       <p className="mb-[0.51vw] text-[6.67vw] leading-none text-[#2F2F2F]/25 lg:mb-[0.26vw] lg:text-[2.12vw]">
//                         &quot;
//                       </p>
//                       <p className="mb-[1.03vw] line-clamp-4 text-left text-[3.08vw] leading-[4.36vw] lg:mb-[0.53vw] lg:text-[0.93vw] lg:leading-[1.32vw]">
//                         {item.pesan}
//                       </p>
//                       <div className="h-[0.26vw] w-[2.05vw] rounded-full bg-[#2F2F2F]/40 lg:h-[0.13vw] lg:w-[1.59vw]" />
//                     </div>

//                     <div className="flex items-center gap-[2.56vw] lg:gap-[0.66vw] border-t border-[#2F2F2F]/15 bg-[#2F2F2F]/5 px-[3.59vw] py-[2.56vw] lg:px-[1.06vw] lg:py-[0.66vw]">
//                       <div className="flex h-[7.18vw] w-[7.18vw] flex-shrink-0 items-center justify-center rounded-full border border-[#2F2F2F]/25 bg-white lg:h-[2.12vw] lg:w-[2.12vw]">
//                         <p className="text-[2.82vw] font-bold lg:text-[0.79vw]">
//                           {initials || "?"}
//                         </p>
//                       </div>
//                       <p className="flex-1 truncate text-[3.08vw] font-semibold lg:text-[0.86vw]">
//                         {item.nama}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>

//         <button
//           type="button"
//           onClick={() => setShowAll((prev) => !prev)}
//           className="flex h-[7.69vw] w-full items-center justify-center gap-[1.79vw] lg:gap-[0.66vw] rounded-[2.56vw] lg:rounded-[0.66vw] bg-[#2F2F2F] text-[3.59vw] uppercase text-white lg:h-[2.78vw] lg:text-[1.19vw]"
//         >
//           <Image
//             src="/images/Lincoln-Laurensia/Wishes/Pesan.png"
//             alt="Pesan"
//             width={18}
//             height={20}
//             className="h-[4.1vw] w-[4.62vw] object-cover lg:h-[2.18vw] lg:w-[1.79vw]"
//           />
//           {showAll ? "Back" : "View all messages"}
//         </button>
//       </div>

//       {/* Popup detail pesan */}
//       <AnimatePresence>
//         {selectedMessage && (
//           <WishesCard
//             data={selectedMessage}
//             onClose={() => setSelectedMessage(null)}
//           />
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Wishes;

// SEBELUM DI VW KAN
// import React from "react";
// import Image from "next/image";

// const messages = [
//   { name: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, nisi laborum" },
//   {
//     name: "Lorem Ipsum",
//     text: "Lorem ipsum dolor sit amet, non veniam commodo ex qui.",
//   },
// ];

// const Wishes = () => {
//   return (
//     <section
//       id="wishes"
//       className="relative z-10 flex w-full flex-col items-center bg-white px-6 py-[80px] font-poppins text-[#2F2F2F] lg:py-[120px]"
//     >
//       <h2 className="font-poppins text-[34px] lg:font-semibold uppercase leading-none lg:text-[42px] text-[#2F2F2F]">
//         Your Wishes
//       </h2>

//       <div className="mt-[25px] lg:mt-[50px] flex w-full max-w-[285px] flex-col gap-[16px] lg:gap-[25px] lg:max-w-[594px]">
//         <input
//           type="text"
//           placeholder="[Guest Name]"
//           className="h-[30px] w-full rounded-[10px] border border-[#2F2F2F] bg-transparent px-[13px] lg:px-[25px] text-[14px] outline-none placeholder:text-[#2F2F2F] lg:h-[42px] lg:text-[20px]"
//         />

//         <textarea
//           placeholder="Leave your wishes here."
//           className="h-[106px] w-full resize-none rounded-[10px] lg:rounded-[20px] border border-[#2F2F2F] bg-transparent px-[13px] py-[8px] lg:px-[25px] lg:py-[10px] text-[14px] outline-none placeholder:text-[#2F2F2F]/50 lg:h-[197px] lg:text-[20px]"
//         />

//         <button
//           type="button"
//           className="flex h-[30px] w-full items-center justify-center gap-[4px] lg:gap-[1px] rounded-[10px] bg-[#2F2F2F] text-[14px]  uppercase text-white lg:h-[42px] lg:text-[18px]"
//         >
//           <Image
//             src="/images/Lincoln-Laurensia/Wishes/Panah.png"
//             alt="Kirim"
//             width={15}
//             height={19}
//             className="h-[14px] w-[17px] object-cover lg:h-[25px] lg:w-[25px]"
//           />
//           Send
//         </button>

//         <div className="h-[300px] w-full overflow-y-auto rounded-[10px] border border-[#2F2F2F] px-[13px] py-[18px] lg:px-[25px] lg:py-[20px] lg:h-[479px] ">
//           {messages.map((item, index) => (
//             <div key={index}>
//               <p className="text-[14px] font-bold lg:text-[22px]">
//                 {item.name}
//               </p>
//               <p className="mt-[7px] lg:mt-[10px] text-[14px] lg:text-[22px]">
//                 {item.text}
//               </p>
//               {index !== messages.length - 1 && (
//                 <div className="mt-[5.17px] mb-[6.83px] lg:mt-0 lg:mb-0 lg:my-[20px] border-t border-[#2F2F2F]/60" />
//               )}
//             </div>
//           ))}
//         </div>

//         <button
//           type="button"
//           className="flex h-[30px] w-full items-center justify-center gap-[7px] lg:gap-[10px] rounded-[10px] bg-[#2F2F2F] text-[14px] uppercase text-white lg:h-[42px] lg:text-[18px]"
//         >
//           <Image
//             src="/images/Lincoln-Laurensia/Wishes/Pesan.png"
//             alt="Pesan"
//             width={18}
//             height={20}
//             className="h-[16px] w-[18px] object-cover lg:h-[33px] lg:w-[27px]"
//           />
//           See all messages
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Wishes;
