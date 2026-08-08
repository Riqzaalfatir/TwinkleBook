  "use client";

  import { useState, useEffect } from "react";
  import Image from "next/image";
  import WishesCard from "./popup/WishesCard";
  import NotifModal from "../../../popup/NotifModal";
  import { motion } from "framer-motion";
  import { fadeUp, fadeIn } from "../../../lib/animation";
  import { useListPMG, type PersonalGuestMessage } from "../../../hooks/api/useListPMG";
  import { usePMG } from "../../../hooks/api/usePMG";
  import { dummyPesan } from "./data/wishes";

  type ModalType = string | null;

  type WishesProps = {
    data?: any;
  };

  // ✅ Konversi dummyPesan (format lama: nama/pesan) ke format API (name/message)
  //    biar bisa dipake sebagai fallback tanpa ubah file dummy-nya
  const dummyAsApiFormat: PersonalGuestMessage[] = dummyPesan.map(
    (item: any) =>
      ({
        id: String(item.id),
        name: item.nama,
        message: item.pesan,
      }) as PersonalGuestMessage,
  );

  const Wishes = ({ data }: WishesProps) => {
    const [nama, setNama] = useState<string>("");
    const [pesan, setPesan] = useState<string>("");
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [showAll, setShowAll] = useState<boolean>(false);
    const [selectedMessage, setSelectedMessage] =
      useState<PersonalGuestMessage | null>(null);
    const [modalType, setModalType] = useState<ModalType>(null);

    // ✅ Sumber eventId — konsisten sama pola EventOrder/Countdown
    //    Kalau ternyata field yang bener dataContent.eventId, ganti baris ini jadi:
    //    const eventId = data?.dataContent?.eventId ?? data?.dataEvent?.id;
    const eventId = data?.dataEvent?.id;

    // ✅ Alias status wajib, biar ga bentrok kalau nanti ada hook lain dgn field sama
    const {
      getListPMG,
      listPMG,
      statusListPMG: listStatus,
      errorListPMG: listError,
    } = useListPMG();

    const {
      submitPMG,
      statusPMG: pmgStatus,
      errorPMG: pmgError,
    } = usePMG();

    useEffect(() => {
      if (eventId) {
        getListPMG(eventId);
      }
    }, [eventId, getListPMG]);

    const handleSubmit = async (): Promise<void> => {
      if (!nama || !pesan) {
        setModalType("incomplete_wishes");
        return;
      }
      if (!eventId) return;

      const success = await submitPMG(eventId, nama, pesan);

      if (success) {
        setShowPopup(true);
        setNama("");
        setPesan("");
        getListPMG(eventId); // ✅ refresh manual, list ga auto-update
      } else {
        setModalType("submit_failed");
      }
    };

    // ✅ Fallback ke dummy kalau list API kosong (belum ada ucapan / masih loading / gagal)
    const pesanList: PersonalGuestMessage[] =
      listPMG && listPMG.length > 0 ? listPMG : dummyAsApiFormat;

    return (
      <>
        <section
          id="wishes"
          className="relative w-full flex flex-col items-center px-[4.10vw] pt-[25.13vw] lg:pt-[9.38vw] pb-[12.31vw] lg:pb-[0.53vw]"
        >
          {/* BACKGROUND KERTAS */}
          {/* <Image
            src="/images/Atet-Halim/Hero/BackgoundKertas.webp"
            alt="background"
            fill
            className="object-cover"
          /> */}

          <Image
            src="/images/Atet-Halim/Wishes/BungaKiriAtas.webp"
            alt="flower decoration"
            width={450}
            height={450}
            className="absolute -top-[14vw] lg:-top-[14.53vw] -left-[2vw] lg:left-0 w-[52vw] lg:w-[23.12vw] h-auto pointer-events-none z-20 -mt-[37.69vw] lg:-mt-[0vw]"
          />
          <Image
            src="/images/Atet-Halim/Wishes/BungaKananAtas.webp"
            alt="flower decoration"
            width={450}
            height={450}
            className="absolute -top-[14vw] lg:-top-[14.53vw] -right-[2vw] lg:right-0 w-[52vw] lg:w-[23.12vw] h-auto pointer-events-none z-20  -mt-[37.69vw] lg:-mt-[0vw]"
          />

          <Image
            src="/images/Atet-Halim/Wishes/BungaKiriTengah.webp"
            alt="flower decoration"
            width={650}
            height={650}
            className="absolute -bottom-[38.5vw] lg:-bottom-[9vw] -left-[9.5vw] lg:-left-[2vw] w-[46vw] lg:w-[28.40vw] h-auto pointer-events-none z-30"
          />

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="relative z-20 font-poltawski text-[7.18vw] lg:text-[3.17vw] text-[#402824]"
          >
            YOUR WISHES
          </motion.h2>

          {/* ORNAMENT GARIS — nempel di bawah judul */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 3, ease: "easeOut" }}
          >
            <Image
              src="/images/Atet-Halim/Wishes/Garis.webp"
              alt="ornament"
              width={250}
              height={250}
              className="relative z-20 w-[36.41vw] h-auto -mt-[0.5vw] lg:w-[14.99vw] lg:-mt-[5px]"
            />
          </motion.div>

          <div className="relative z-20 w-full max-w-[67.44vw] lg:max-w-[45.64vw] mx-auto mt-[10vw] lg:mt-[4.9vw] bg-transparent">
            <div className="flex flex-col gap-[20px] lg:gap-[1.98vw]">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 3, ease: "easeOut" }}
              >
                <input
                  type="text"
                  value={nama}
                  placeholder="Desy (Tester)"
                  onChange={(e) => setNama(e.target.value)}
                  className="w-full text-[#5E5036] font-athelas bg-transparent text-[3.59vw] lg:text-[1.45vw] border-[0.38vw] lg:border-[0.13vw] border-[#5E5036]/50 px-[4.10vw] lg:px-[1.85vw] h-[8.46vw] lg:h-[3.10vw] rounded-[1.54vw] lg:rounded-[0.66vw] outline-none placeholder:text-[#5E5036]/50"
                />
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 3, ease: "easeOut" }}
              >
                <textarea
                  value={pesan}
                  onChange={(e) => setPesan(e.target.value)}
                  className="w-full text-[#402824] font-athelas text-[3.59vw] lg:text-[1.45vw] bg-transparent border-[0.38vw] lg:border-[0.13vw] border-[#5E5036]/50 px-[4.10vw] lg:px-[1.85vw] py-[2.56vw] lg:py-[1.19vw] h-[15.38vw] lg:h-[17.24vw] rounded-[1.54vw] lg:rounded-[0.66vw] outline-none placeholder:text-[#5E5036]/50 resize-none"
                />
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 3, ease: "easeOut" }}
              >
                <button
                  onClick={handleSubmit}
                  disabled={pmgStatus === "loading"}
                  className="group bg-[#5E5036] hover:bg-[#402824] active:scale-95 transition-all duration-200 w-full rounded-[1.54vw] lg:rounded-[0.66vw] h-[8.46vw] lg:h-[3.10vw] text-[3.59vw] lg:text-[1.45vw] font-athelas uppercase flex items-center justify-center gap-[1.54vw] text-white tracking-widest disabled:opacity-60"
                >
                  <Image
                    src="/images/Atet-Halim/Wishes/Panah.svg"
                    alt="Kirim"
                    width={18}
                    height={18}
                    className="object-contain w-[4.62vw] lg:w-[1.45vw]"
                  />
                  {pmgStatus === "loading" ? "SENDING..." : "Send"}
                </button>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 3, ease: "easeOut" }}
                className={`w-full rounded-[1.54vw] lg:rounded-[0.66vw] h-[97.95vw] lg:h-[34.28vw] overflow-y-auto scrollbar-hide ${
                  showAll
                    ? "bg-transparent rounded-none"
                    : "bg-transparent border-[0.38vw] lg:border-[0.13vw] border-[#5E5036]/50"
                }`}
              >
                {listStatus === "loading" && (
                  <p className="text-[#5E5036] text-center py-4 font-athelas text-[3.08vw] lg:text-[1.2vw]">
                    Memuat ucapan...
                  </p>
                )}

                {!showAll ? (
                  <div>
                    <div className="sticky top-0 w-full h-[3.08vw] lg:h-[0.99vw] bg-transparent z-10" />

                    <div className="px-[3.08vw] lg:px-[1.85vw] py-[1.03vw] lg:py-[0.46vw]">
                      {pesanList.map((item, index, array) => (
                        <div key={item.id}>
                          <p className="text-[#5E5036] font-athelas font-bold text-[3.59vw] lg:text-[1.45vw] mb-[2.05vw] lg:mb-[1.12vw]">
                            {item.name}
                          </p>

                          <p className="text-[#5E5036] font-athelas text-[3.59vw] lg:text-[1.45vw] tracking-wide mb-[3.08vw] lg:mb-[1.12vw] break-words leading-[4.62vw] lg:leading-[1.32vw]">
                            {item.message}
                          </p>

                          {index !== array.length - 1 && (
                            <div className="border-t border-[#402824]/20 mt-[2.05vw] mb-[4.10vw] lg:mb-[1.25vw]" />
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="sticky bottom-0 w-full h-[3.08vw] lg:h-[0.99vw] bg-transparent z-10" />
                  </div>
                ) : (
                  <div className="w-full px-[2.5px] py-[16px]">
                    <div className="grid grid-cols-2 gap-[12px]">
                      {pesanList.map((item, index) => {
                        const initials = item.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()
                          .slice(0, 2);

                        return (
                          <motion.div
                            key={item.id}
                            variants={fadeIn}
                            initial="hidden"
                            animate="show"
                            transition={{
                              duration: 1.5,
                              ease: "easeOut",
                              delay: index * 0.08,
                            }}
                            onClick={() => setSelectedMessage(item)}
                            className="group relative overflow-hidden rounded-[6px] border-[1px] lg:border-[0.13vw] border-[#5E5036] flex flex-col cursor-pointer hover:shadow-lg transition-all duration-300 hover:border-[#402824]/30 active:scale-95"
                          >
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5E5036]/60 via-[#5E5036]/30 to-transparent" />

                            <div className="p-[12px] flex-1 flex flex-col justify-between">
                              <p className="text-[28px] font-poltawski text-[#402824]/15 leading-none mb-2 group-hover:text-[#402824]/25 transition-colors">
                                "
                              </p>

                              <p className="font-athelas text-[13px] text-[#402824]/85 text-left line-clamp-4 leading-[18px] mb-4">
                                {item.message}
                              </p>

                              <div className="w-8 h-0.5 bg-[#402824]/20 rounded-full" />
                            </div>

                            <div className="bg-[#402824] px-[14px] py-[10px] flex items-center gap-[10px]">
                              <div className="w-[30px] h-[30px] rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 border border-white/20">
                                <p className="text-white text-[11px] font-athelas font-bold">
                                  {initials}
                                </p>
                              </div>

                              <p className="text-white text-[12px] font-athelas font-medium truncate flex-1 tracking-wide">
                                {item.name}
                              </p>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 3, ease: "easeOut" }}
              >
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="group bg-[#5E5036]  active:scale-95 transition-all duration-200 w-full rounded-[1.54vw] lg:rounded-[0.66vw] h-[8.46vw] lg:h-[3.10vw] text-[3.08vw] lg:text-[1.45vw] font-athelas uppercase flex items-center justify-center gap-[1.54vw] lg:gap-[1.32vw] text-white tracking-widest"
                >
                  <Image
                    src="/images/Atet-Halim/Wishes/Pesan.svg"
                    alt="Pesan"
                    width={18}
                    height={18}
                    className="object-cover w-[4.62vw] lg:w-[1.92vw]"
                  />
                  {showAll ? "BACK" : "VIEW ALL MESSAGES"}
                </button>
              </motion.div>
            </div>
          </div>

          {showPopup && (
            <motion.div
              className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-[4px] px-[24px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative overflow-hidden rounded-[28px] border border-[#402824]/20 bg-[#F6F6F4] shadow-lg w-full max-w-[330px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute top-0 left-0 w-full h-[6px] bg-[#5E5036]" />

                <div className="px-[28px] pt-[36px] pb-[28px] flex flex-col items-center text-center">
                  <div className="w-[72px] h-[72px] rounded-full bg-[#5E5036]/10 border border-[#402824]/10 flex items-center justify-center mb-[20px]">
                    <Image
                      src="/images/Atet-Halim/Wishes/Pesan.svg"
                      alt="Success"
                      width={0}
                      height={0}
                      className="object-contain w-[34px] h-[34px]"
                    />
                  </div>

                  <h3 className="font-poltawski text-[24px] text-[#402824]">
                    Thank You
                  </h3>

                  <div className="w-[70px] h-[1px] bg-[#402824]/30 my-[16px]" />

                  <p className="font-athelas text-[13px] leading-[22px] text-[#402824]/85 max-w-[240px]">
                    Your wishes and prayers mean so much to us. Thank you for
                    sharing your kind words on our special day.
                  </p>

                  <button
                    onClick={() => setShowPopup(false)}
                    className="mt-[28px] bg-[#5E5036] hover:bg-[#402824] active:scale-95 transition-all duration-300 text-white font-athelas uppercase text-[12px] px-[32px] h-[38px] rounded-full"
                  >
                    Close
                  </button>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[5px] bg-[#5E5036]" />
              </motion.div>
            </motion.div>
          )}
        </section>

        <WishesCard
          data={
            selectedMessage
              ? { id: selectedMessage.id, nama: selectedMessage.name, pesan: selectedMessage.message }
              : null
          }
          onClose={() => setSelectedMessage(null)}
        />

        {modalType && (
          <NotifModal
            type={modalType}
            onClose={() => setModalType(null)}
            onConfirm={() => setModalType(null)}
            waNumber={data?.dataEvent?.invitationWAUrl ?? "6281234567890"}
          />
        )}
      </>
    );
  };

  export default Wishes;





// SEBELUM DI DINAMISKAN
// // INI VERSI SAYA SEKARANG ATET HALIM
// "use client";

// import { dummyPesan } from "./data/wishes";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import WishesCard from "./popup/WishesCard";
// import NotifModal from "./popup/NotifModal";
// import { motion } from "framer-motion";
// import { fadeUp, fadeIn } from "../../../lib/animation";

// type PesanItem = {
//   id: number;
//   nama: string;
//   pesan: string;
// };

// type ModalType = string | null;

// const Wishes = () => {
//   const [nama, setNama] = useState<string>("");
//   const [pesan, setPesan] = useState<string>("");
//   const [showPopup, setShowPopup] = useState<boolean>(false);
//   const [showAll, setShowAll] = useState<boolean>(false);
//   const [selectedMessage, setSelectedMessage] = useState<PesanItem | null>(
//     null,
//   );
//   const [pesanList, setPesanList] = useState<PesanItem[]>(() => {
//     if (typeof window === "undefined") return dummyPesan;
//     const saved = localStorage.getItem("pesan");
//     return saved ? JSON.parse(saved) : dummyPesan;
//   });
//   const [modalType, setModalType] = useState<ModalType>(null);

//   const handleSubmit = (): void => {
//     if (!nama || !pesan) {
//       setModalType("incomplete_wishes");
//       return;
//     }

//     const newPesan: PesanItem = {
//       id: Date.now(),
//       nama,
//       pesan,
//     };

//     setPesanList((prev) => [newPesan, ...prev]);
//     setShowPopup(true);
//     setNama("");
//     setPesan("");
//   };

//   useEffect(() => {
//     localStorage.setItem("pesan", JSON.stringify(pesanList));
//   }, [pesanList]);

//   return (
//     <>
//       <section
//         id="wishes"
//         className="relative w-full flex flex-col items-center px-[4.10vw] pt-[25.13vw] lg:pt-[9.38vw] pb-[12.31vw] lg:pb-[0.53vw]"
//       >
//         {/* BACKGROUND KERTAS */}
//         {/* <Image
//           src="/images/Atet-Halim/Hero/BackgoundKertas.webp"
//           alt="background"
//           fill
//           className="object-cover"
//         /> */}

//         <Image
//           src="/images/Atet-Halim/Wishes/BungaKiriAtas.webp"
//           alt="flower decoration"
//           width={450}
//           height={450}
//           className="absolute -top-[14vw] lg:-top-[14.53vw] -left-[2vw] lg:left-0 w-[52vw] lg:w-[23.12vw] h-auto pointer-events-none z-20 -mt-[37.69vw] lg:-mt-[0vw]"
//         />
//         <Image
//           src="/images/Atet-Halim/Wishes/BungaKananAtas.webp"
//           alt="flower decoration"
//           width={450}
//           height={450}
//           className="absolute -top-[14vw] lg:-top-[14.53vw] -right-[2vw] lg:right-0 w-[52vw] lg:w-[23.12vw] h-auto pointer-events-none z-20  -mt-[37.69vw] lg:-mt-[0vw]"
//         />

//         <Image
//           src="/images/Atet-Halim/Wishes/BungaKiriTengah.webp"
//           alt="flower decoration"
//           width={650}
//           height={650}
//           className="absolute -bottom-[38.5vw] lg:-bottom-[9vw] -left-[9.5vw] lg:-left-[2vw] w-[46vw] lg:w-[28.40vw] h-auto pointer-events-none z-30"
//         />

//         <motion.h2
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 3, ease: "easeOut" }}
//           className="relative z-20 font-poltawski text-[7.18vw] lg:text-[3.17vw] text-[#402824]"
//         >
//           YOUR WISHES
//         </motion.h2>

//         {/* ORNAMENT GARIS — nempel di bawah judul */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 3, ease: "easeOut" }}
//         >
//           <Image
//             src="/images/Atet-Halim/Wishes/Garis.webp"
//             alt="ornament"
//             width={250}
//             height={250}
//             className="relative z-20 w-[36.41vw] h-auto -mt-[0.5vw] lg:w-[14.99vw] lg:-mt-[5px]"
//           />
//         </motion.div>

//         <div className="relative z-20 w-full max-w-[67.44vw] lg:max-w-[45.64vw] mx-auto mt-[10vw] lg:mt-[4.9vw] bg-transparent">
//           <div className="flex flex-col gap-[20px] lg:gap-[1.98vw]">
//             <motion.div
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 3, ease: "easeOut" }}
//             >
//               <input
//                 type="text"
//                 value={nama}
//                 placeholder="Desy (Tester)"
//                 onChange={(e) => setNama(e.target.value)}
//                 className="w-full text-[#5E5036] font-athelas bg-transparent text-[3.59vw] lg:text-[1.45vw] border-[0.38vw] lg:border-[0.13vw] border-[#5E5036]/50 px-[4.10vw] lg:px-[1.85vw] h-[8.46vw] lg:h-[3.10vw] rounded-[1.54vw] lg:rounded-[0.66vw] outline-none placeholder:text-[#5E5036]/50"
//               />
//             </motion.div>

//             <motion.div
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 3, ease: "easeOut" }}
//             >
//               <textarea
//                 value={pesan}
//                 onChange={(e) => setPesan(e.target.value)}
//                 className="w-full text-[#402824] font-athelas text-[3.59vw] lg:text-[1.45vw] bg-transparent border-[0.38vw] lg:border-[0.13vw] border-[#5E5036]/50 px-[4.10vw] lg:px-[1.85vw] py-[2.56vw] lg:py-[1.19vw] h-[15.38vw] lg:h-[17.24vw] rounded-[1.54vw] lg:rounded-[0.66vw] outline-none placeholder:text-[#5E5036]/50 resize-none"
//               />
//             </motion.div>

//             <motion.div
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 3, ease: "easeOut" }}
//             >
//               <button
//                 onClick={handleSubmit}
//                 className="group bg-[#5E5036] hover:bg-[#402824] active:scale-95 transition-all duration-200 w-full rounded-[1.54vw] lg:rounded-[0.66vw] h-[8.46vw] lg:h-[3.10vw] text-[3.59vw] lg:text-[1.45vw] font-athelas uppercase flex items-center justify-center gap-[1.54vw] text-white tracking-widest"
//               >
//                 <Image
//                   src="/images/Atet-Halim/Wishes/Panah.svg"
//                   alt="Kirim"
//                   width={18}
//                   height={18}
//                   className="object-contain w-[4.62vw] lg:w-[1.45vw]"
//                 />
//                 Send
//               </button>
//             </motion.div>

//             <motion.div
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 3, ease: "easeOut" }}
//               className={`w-full rounded-[1.54vw] lg:rounded-[0.66vw] h-[97.95vw] lg:h-[34.28vw] overflow-y-auto scrollbar-hide ${
//                 showAll
//                   ? "bg-transparent rounded-none"
//                   : "bg-transparent border-[0.38vw] lg:border-[0.13vw] border-[#5E5036]/50"
//               }`}
//             >
//               {!showAll ? (
//                 <div>
//                   <div className="sticky top-0 w-full h-[3.08vw] lg:h-[0.99vw] bg-transparent z-10" />

//                   <div className="px-[3.08vw] lg:px-[1.85vw] py-[1.03vw] lg:py-[0.46vw]">
//                     {pesanList.map((item, index, array) => (
//                       <div key={item.id}>
//                         <p className="text-[#5E5036] font-athelas font-bold text-[3.59vw] lg:text-[1.45vw] mb-[2.05vw] lg:mb-[1.12vw]">
//                           {item.nama}
//                         </p>

//                         <p className="text-[#5E5036] font-athelas text-[3.59vw] lg:text-[1.45vw] tracking-wide mb-[3.08vw] lg:mb-[1.12vw] break-words leading-[4.62vw] lg:leading-[1.32vw]">
//                           {item.pesan}
//                         </p>

//                         {index !== array.length - 1 && (
//                           <div className="border-t border-[#402824]/20 mt-[2.05vw] mb-[4.10vw] lg:mb-[1.25vw]" />
//                         )}
//                       </div>
//                     ))}
//                   </div>

//                   <div className="sticky bottom-0 w-full h-[3.08vw] lg:h-[0.99vw] bg-transparent z-10" />
//                 </div>
//               ) : (
//                 <div className="w-full px-[2.5px] py-[16px]">
//                   <div className="grid grid-cols-2 gap-[12px]">
//                     {pesanList.map((item, index) => {
//                       const initials = item.nama
//                         .split(" ")
//                         .map((n) => n[0])
//                         .join("")
//                         .toUpperCase()
//                         .slice(0, 2);

//                       return (
//                         <motion.div
//                           key={item.id}
//                           variants={fadeIn}
//                           initial="hidden"
//                           animate="show"
//                           transition={{
//                             duration: 1.5,
//                             ease: "easeOut",
//                             delay: index * 0.08,
//                           }}
//                           onClick={() => setSelectedMessage(item)}
//                           className="group relative overflow-hidden rounded-[6px] border-[1px] lg:border-[0.13vw] border-[#5E5036] flex flex-col cursor-pointer hover:shadow-lg transition-all duration-300 hover:border-[#402824]/30 active:scale-95"
//                         >
//                           <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5E5036]/60 via-[#5E5036]/30 to-transparent" />

//                           <div className="p-[12px] flex-1 flex flex-col justify-between">
//                             <p className="text-[28px] font-poltawski text-[#402824]/15 leading-none mb-2 group-hover:text-[#402824]/25 transition-colors">
//                               "
//                             </p>

//                             <p className="font-athelas text-[13px] text-[#402824]/85 text-left line-clamp-4 leading-[18px] mb-4">
//                               {item.pesan}
//                             </p>

//                             <div className="w-8 h-0.5 bg-[#402824]/20 rounded-full" />
//                           </div>

//                           <div className="bg-[#402824] px-[14px] py-[10px] flex items-center gap-[10px]">
//                             <div className="w-[30px] h-[30px] rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 border border-white/20">
//                               <p className="text-white text-[11px] font-athelas font-bold">
//                                 {initials}
//                               </p>
//                             </div>

//                             <p className="text-white text-[12px] font-athelas font-medium truncate flex-1 tracking-wide">
//                               {item.nama}
//                             </p>
//                           </div>

//                           <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
//                         </motion.div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               )}
//             </motion.div>

//             <motion.div
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 3, ease: "easeOut" }}
//             >
//               <button
//                 onClick={() => setShowAll(!showAll)}
//                 className="group bg-[#5E5036]  active:scale-95 transition-all duration-200 w-full rounded-[1.54vw] lg:rounded-[0.66vw] h-[8.46vw] lg:h-[3.10vw] text-[3.08vw] lg:text-[1.45vw] font-athelas uppercase flex items-center justify-center gap-[1.54vw] lg:gap-[1.32vw] text-white tracking-widest"
//               >
//                 <Image
//                   src="/images/Atet-Halim/Wishes/Pesan.svg"
//                   alt="Pesan"
//                   width={18}
//                   height={18}
//                   className="object-cover w-[4.62vw] lg:w-[1.92vw]"
//                 />
//                 {showAll ? "BACK" : "VIEW ALL MESSAGES"}
//               </button>
//             </motion.div>
//           </div>
//         </div>

//         {showPopup && (
//           <motion.div
//             className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-[4px] px-[24px]"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <motion.div
//               className="relative overflow-hidden rounded-[28px] border border-[#402824]/20 bg-[#F6F6F4] shadow-lg w-full max-w-[330px]"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.4 }}
//             >
//               <div className="absolute top-0 left-0 w-full h-[6px] bg-[#5E5036]" />

//               <div className="px-[28px] pt-[36px] pb-[28px] flex flex-col items-center text-center">
//                 <div className="w-[72px] h-[72px] rounded-full bg-[#5E5036]/10 border border-[#402824]/10 flex items-center justify-center mb-[20px]">
//                   <Image
//                     src="/images/Atet-Halim/Wishes/Pesan.svg"
//                     alt="Success"
//                     width={0}
//                     height={0}
//                     className="object-contain w-[34px] h-[34px]"
//                   />
//                 </div>

//                 <h3 className="font-poltawski text-[24px] text-[#402824]">
//                   Thank You
//                 </h3>

//                 <div className="w-[70px] h-[1px] bg-[#402824]/30 my-[16px]" />

//                 <p className="font-athelas text-[13px] leading-[22px] text-[#402824]/85 max-w-[240px]">
//                   Your wishes and prayers mean so much to us. Thank you for
//                   sharing your kind words on our special day.
//                 </p>

//                 <button
//                   onClick={() => setShowPopup(false)}
//                   className="mt-[28px] bg-[#5E5036] hover:bg-[#402824] active:scale-95 transition-all duration-300 text-white font-athelas uppercase text-[12px] px-[32px] h-[38px] rounded-full"
//                 >
//                   Close
//                 </button>
//               </div>

//               <div className="absolute bottom-0 left-0 w-full h-[5px] bg-[#5E5036]" />
//             </motion.div>
//           </motion.div>
//         )}
//       </section>
//       <WishesCard
//         data={selectedMessage}
//         onClose={() => setSelectedMessage(null)}
//       />

//       {modalType && (
//         <NotifModal
//           type={modalType}
//           onClose={() => setModalType(null)}
//           onConfirm={() => setModalType(null)}
//           waNumber="6281234567890"
//         />
//       )}
//     </>
//   );
// };

// export default Wishes;
