"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import WishesCard from "../Michael-Vannya/popup/WishesCard";
import NotifModal from "../../../popup/NotifModal";
import { fadeUp } from "../../../lib/animation";
import {
  useListPMG,
  type PersonalGuestMessage,
} from "../../../hooks/api/useListPMG";
import { usePMG } from "../../../hooks/api/usePMG";
import { dummyPesan } from "../Michael-Vannya/data/wishes";

type ModalType = string | null;

const decodeHtmlEntities = (text: string): string => {
  if (typeof window === "undefined") return text;

  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
};

const dummyAsApiFormat: PersonalGuestMessage[] = dummyPesan.map(
  (item: any) =>
    ({
      id: String(item.id),
      name: item.nama,
      message: item.pesan,
    }) as PersonalGuestMessage,
);

type WishesProps = {
  data?: any;
  guestData?: { name?: string } | null; 
};

const Wishes = ({ data, guestData }: WishesProps) => {
  // ⬅️ tambah guestData
  const [nama, setNama] = useState<string>("");
  const [pesan, setPesan] = useState<string>("");
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedMessage, setSelectedMessage] =
    useState<PersonalGuestMessage | null>(null);
  const hasAutofilled = useRef(false); 

  const eventId = data?.dataEvent?.id;

  const {
    getListPMG,
    listPMG,
    statusListPMG: listStatus,
    errorListPMG: listError,
  } = useListPMG();

  const { submitPMG, statusPMG: pmgStatus, errorPMG: pmgError } = usePMG();

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

  const handleSubmit = async (): Promise<void> => {
    const cleanNama = nama.trim();
    const cleanPesan = pesan.trim();

    if (!cleanNama || !cleanPesan) {
      setModalType("incomplete_wishes");
      return;
    }
    if (!eventId) return;

    const success = await submitPMG(eventId, cleanNama, cleanPesan);

    if (success) {
      setShowPopup(true);
      setNama("");
      setPesan("");
      getListPMG(eventId);
    } else {
      setModalType("submit_failed");
    }
  };

  const pesanList: PersonalGuestMessage[] =
    listPMG && listPMG.length > 0 ? listPMG : dummyAsApiFormat;

  return (
    <>
      <section
        id="wishes"
        className="relative w-full pt-[18px] pb-[81.5px] lg:pt-[28px] lg:pb-[120px] bg-[#7A883F]"
      >
        {/* DEKSTOP */}
        <Image
          src="/images/Michael-Vannya/Wishes/BungaKiriBawahD.webp"
          alt=""
          width={850}
          height={850}
          className="absolute -bottom-[145px] -left-[0px] w-[540px] h-auto pointer-events-none z-0 hidden lg:block"
        />

        {/* MOBILE */}
        <Image
          src="/images/Michael-Vannya/Wishes/BungaKiriBawahM.webp"
          alt=""
          width={850}
          height={850}
          className="absolute -bottom-[80px] -left-[0px] w-[290px] h-auto pointer-events-none z-0 lg:hidden"
        />
        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-kinfolk text-[34px] lg:text-[48px] text-white"
          >
            Your Wishes
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
              width={350}
              height={350}
              className="w-[95px] lg:w-[147px] h-auto pointer-events-none -mt-[7px]"
            />
          </motion.div>

          <div className="max-w-[285px] lg:max-w-[594px] w-full flex flex-col gap-[16px] lg:gap-[26px] mt-[25px] lg:mt-[56px]">
            <motion.input
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              type="text"
              value={nama}
              placeholder={guestData?.name || "Masukkan nama Anda"} 
              onChange={(e) => setNama(e.target.value)}
              className="w-full text-white font-times-new-roman bg-transparent border text-[12px] lg:text-[20px] border-white/70 px-[12px] lg:px-[24px] h-[30px] lg:h-[42px] rounded-[10px] outline-none placeholder:text-white/70"
            />

            <motion.textarea
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              value={pesan}
              placeholder="Leave your wishes here."
              onChange={(e) => setPesan(e.target.value)}
              className="w-full text-white font-times-new-roman bg-transparent border text-[12px] lg:text-[20px] border-white/70 px-[12px] lg:px-[24px] py-[6px] lg:py-[13px] h-[106px] lg:h-[197px] rounded-[10px] outline-none placeholder:text-white/70 resize-none"
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
              className="bg-white transition-colors duration-200 rounded-[10px] h-[30px] lg:h-[42px] text-[12px] lg:text-[14px] font-times-new-roman uppercase flex items-center justify-center gap-1.5 lg:gap-[5px] text-[#1B1C1D] disabled:opacity-60"
            >
              <Image
                src="/images/Michael-Vannya/Wishes/Panah.png"
                alt="Kirim"
                width={15}
                height={19}
                className="object-cover w-[16px] h-[17px] lg:w-[23px] lg:h-[25px]"
              />
              {pmgStatus === "loading" ? "SENDING..." : "Send"}
            </motion.button>

            {/* PESAN */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className={`w-full h-[300px] lg:h-[527px] overflow-y-auto rounded-[10px] ${
                showAll ? "bg-transparent" : " bg-white"
              }`}
            >
              {listStatus === "loading" && (
                <p className="text-[#1B1C1D] text-center py-4 font-times-new-roman text-[13px]">
                  Memuat ucapan...
                </p>
              )}

              {!showAll ? (
                <>
                  <div className="sticky top-0 w-full h-[15px] lg:h-[20px] bg-white z-10" />

                  <div className="px-[12px] lg:px-[24px] pt-[13px] lg:pt-[22px] pb-[2px] lg:pb-[5px]">
                    {pesanList.slice(0, 8).map((item, index, array) => (
                      <div key={item.id}>
                        <p className="text-[#1B1C1D] font-times-new-roman text-[12px] lg:text-[20px] font-bold mb-[3px] lg:mb-[15px]">
                          {item.name}
                        </p>

                        <p className="text-[#1B1C1D] font-times-new-roman text-[12px] lg:text-[20px]">
                          {decodeHtmlEntities(item.message)}
                        </p>

                        {index !== array.length - 1 && (
                          <div className="border-t-[0.1px] border-[#1B1C1D] mt-[7px] lg:mt-[15px] mb-[15px] lg:mb-[19px]" />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="sticky bottom-0 w-full h-[15px] lg:h-[20px] bg-white z-10" />
                </>
              ) : (
                <div className="w-full px-[2px] py-[6px]">
                  <div className="grid grid-cols-2 gap-[12px]">
                    {pesanList.map((item, index) => {
                      const initials = item.name
                        .split(" ")
                        .filter(Boolean)
                        .map((word) => word[0])
                        .join("")
                        .toUpperCase()
                        .slice(0, 2);

                      return (
                        <motion.div
                          key={item.id}
                          variants={fadeUp}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: index * 0.04,
                          }}
                          onClick={() => setSelectedMessage(item)}
                          className="group relative overflow-hidden rounded-[10px] border-[0.5px] border-white/70 bg-[#FBFAF5] flex flex-col cursor-pointer hover:shadow-lg transition-all duration-300 hover:border-white active:scale-95"
                        >
                          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#7A883F]/70 via-[#7A883F]/30 to-transparent" />

                          <div className="p-[12px] flex-1 flex flex-col justify-between">
                            <p className="font-kinfolk text-[26px] text-[#00273E]/15 leading-none mb-2 group-hover:text-[#00273E]/25 transition-colors">
                              &quot;
                            </p>

                            <p className="font-times-new-roman text-[12px] text-[#1B1C1D]/85 text-left line-clamp-4 leading-[17px] mb-4">
                              {decodeHtmlEntities(item.message)}
                            </p>

                            <div className="w-8 h-[1px] bg-[#7A883F]/40 rounded-full" />
                          </div>

                          <div className="bg-[#F3EEE1] px-[14px] py-[10px] flex items-center gap-[10px] border-t border-[#1B1C1D]/10">
                            <div className="w-[28px] h-[28px] rounded-full bg-white flex items-center justify-center flex-shrink-0 border border-[#1B1C1D]/15">
                              <p className="text-[#1B1C1D] text-[11px] font-times-new-roman font-bold">
                                {initials || "?"}
                              </p>
                            </div>

                            <p className="text-[#1B1C1D] text-[12px] font-times-new-roman font-medium truncate flex-1 tracking-wide">
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

            <WishesCard
              data={
                selectedMessage
                  ? {
                      id: selectedMessage.id,
                      nama: selectedMessage.name,
                      pesan: selectedMessage.message,
                    }
                  : null
              }
              onClose={() => setSelectedMessage(null)}
            />

            <motion.button
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="bg-white transition-colors duration-200 rounded-[10px] h-[30px] lg:h-[42px] text-[12px] lg:text-[14px] font-times-new-roman uppercase flex items-center justify-center gap-1.5 lg:gap-[11px] text-[#1B1C1D]"
            >
              <Image
                src="/images/Michael-Vannya/Wishes/Pesan.png"
                alt="Pesan"
                width={18}
                height={20}
                className="object-cover w-[15px] h-[19px] lg:w-[28px] lg:h-[36px]"
              />

              {showAll ? "BACK" : "See all message"}
            </motion.button>
          </div>
        </div>

        {/* POPUP KETIKA PESAN DIKIRIM */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative bg-[#FBFAF5] rounded-[16px] w-[300px] text-center shadow-2xl overflow-hidden"
            >
              {/* Ornament atas */}
              <Image
                src="/images/Michael-Vannya/EventOrder/Ornamentgaris.png"
                alt=""
                width={200}
                height={200}
                className="w-[70px] h-auto mx-auto pt-[28px] pointer-events-none"
              />

              <div className="px-[28px] pb-[28px] pt-[10px]">
                <h3 className="font-kinfolk text-[26px] text-[#00273E] leading-none">
                  Thank You
                </h3>

                <p className="font-times-new-roman text-[12px] text-[#1B1C1D]/70 tracking-[0.15em] uppercase mt-[8px]">
                  Pesan Terkirim
                </p>

                <div className="w-[36px] h-[1px] bg-[#7A883F] mx-auto my-[18px]" />

                <p className="font-times-new-roman text-[13px] text-[#1B1C1D] leading-[20px]">
                  Terima kasih atas doa dan ucapan baik Anda.
                  <br />
                  Kami sangat menghargai pesan yang telah diberikan.
                </p>

                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  className="w-[140px] h-[36px] mt-[26px] bg-[#7A883F] text-white font-times-new-roman text-[12px] tracking-[0.1em] uppercase rounded-[71px] transition-colors hover:bg-[#666f34]"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </section>

      {/* NOTIF MODAL */}
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