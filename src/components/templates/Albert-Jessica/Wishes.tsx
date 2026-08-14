"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import WishesCard from "../Albert-Jessica/popup/WishesCard";
import NotifModal from "../../../popup/NotifModal";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight } from "../../../lib/animation";
import {
  useListPMG,
  type PersonalGuestMessage,
} from "../../../hooks/api/useListPMG";
import { usePMG } from "../../../hooks/api/usePMG";
import { dummyPesan } from "../Albert-Jessica/data/wishes";

type ModalType = string | null;

type WishesProps = {
  data?: any;
};

const decodeHtmlEntities = (text: string): string => {
  if (typeof window === "undefined") return text; // guard buat SSR
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

const Wishes = ({ data }: WishesProps) => {
  const [nama, setNama] = useState<string>("");
  const [pesan, setPesan] = useState<string>("");
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [selectedMessage, setSelectedMessage] =
    useState<PersonalGuestMessage | null>(null);
  const [modalType, setModalType] = useState<ModalType>(null);

  const eventId = data?.dataEvent?.id;

  const {
    getListPMG,
    listPMG,
    statusListPMG: listStatus,
    errorListPMG: listError,
  } = useListPMG();

  const { submitPMG, statusPMG: pmgStatus, errorPMG: pmgError } = usePMG();

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
        className="relative w-full flex flex-col items-center px-8 z-10"
      >
        <Image
          src="/images/Albert-Jessica/Profile/BgKertas.webp"
          alt="Profile Background"
          fill
          className="object-cover z-10"
        />

        <div className="flex flex-col items-center mx-auto relative z-20 pt-[63px] pb-[81px]">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-marcellus text-[28px] text-[#4E4E4E] uppercase"
          >
            Share Your Wishes
          </motion.h2>

          <div className="max-w-[263px] flex flex-col gap-[20px] mt-[27px]">
            <motion.input
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              type="text"
              value={nama}
              placeholder="Desy (Tester)"
              onChange={(e) => setNama(e.target.value)}
              className="w-full text-[#4E4E4E] font-lora border-[1px] text-[12px] bg-transparent border-[#4E4E4E]/50 px-[12px] h-[33px] rounded-[6px] outline-none placeholder:text-[#4E4E4E]/50"
            />

            <motion.textarea
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              className="w-full text-[#4E4E4E] font-lora border-[1px] text-[12px] bg-transparent border-[#4E4E4E]/50 px-[12px] py-[3px] h-[60px] rounded-[6px] outline-none placeholder:text-[#4E4E4E]/50 resize-none"
            />

            <motion.button
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              onClick={handleSubmit}
              disabled={pmgStatus === "loading"}
              className="bg-[#4E4E4E] hover:bg-[#6B6B6B] active:bg-[#3A3A3A] transition-colors duration-200 rounded-[6px] h-[33px] text-[14px] font-lora uppercase flex items-center justify-center gap-1.5 text-white disabled:opacity-60"
            >
              <Image
                src="/images/Albert-Jessica/Wishes/Panah.png"
                alt="Kirim"
                width={15}
                height={19}
                className="object-cover w-[15px] h-[19px]"
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
              className={`w-full h-[382px] overflow-y-auto rounded-[6px] ${
                showAll ? "bg-transparent" : "border border-[#4E4E4E] py-[15px]"
              }`}
            >
              {listStatus === "loading" && (
                <p className="text-[#4E4E4E] text-center py-4 font-lora text-[13px]">
                  Memuat ucapan...
                </p>
              )}

              {!showAll ? (
                <div>
                  <div className="px-[10px] py-[2px]">
                    {pesanList.slice(0, 8).map((item, index, array) => (
                      <div key={item.id}>
                        <p className="text-[#4E4E4E] font-lora text-[14px] font-semibold mb-[3px]">
                          {item.name}
                        </p>
                        <p className="text-[#4E4E4E] font-lora text-[14px]">
                          {decodeHtmlEntities(item.message)}
                        </p>
                        {index !== array.length - 1 && (
                          <div className="border-t border-[#4E4E4E] mt-[8px] mb-[15px]" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="w-full px-[2px] py-[6px]">
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
                          className="group relative overflow-hidden rounded-[6px] border-[1px] border-[#4E4E4E] flex flex-col cursor-pointer hover:shadow-lg transition-all duration-300 hover:border-[#4E4E4E]/30 active:scale-95"
                        >
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4E4E4E]/60 via-[#4E4E4E]/30 to-transparent" />

                          <div className="p-[12px] flex-1 flex flex-col justify-between">
                            <p className="text-[28px] font-lora text-[#4E4E4E]/15 leading-none mb-2 group-hover:text-[#4E4E4E]/25 transition-colors">
                              "
                            </p>

                            <p className="font-lora text-[13px] text-[#4E4E4E]/85 text-left line-clamp-4 leading-[18px] mb-4">
                              {decodeHtmlEntities(item.message)}
                            </p>

                            <div className="w-8 h-0.5 bg-[#4E4E4E]/20 rounded-full" />
                          </div>

                          <div className="bg-[#4E4E4E] px-[14px] py-[10px] flex items-center gap-[10px]">
                            <div className="w-[30px] h-[30px] rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 border border-white/20">
                              <p className="text-white text-[11px] font-lora font-bold">
                                {initials}
                              </p>
                            </div>

                            <p className="text-white text-[12px] font-lora font-medium truncate flex-1 tracking-wide">
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
              onClick={() => setShowAll(!showAll)}
              className="bg-[#4E4E4E] hover:bg-[#6B6B6B] active:bg-[#3A3A3A] transition-colors duration-200 rounded-[6px] h-[33px] text-[14px] font-lora uppercase flex items-center justify-center gap-1.5 text-white"
            >
              <Image
                src="/images/Albert-Jessica/Wishes/Pesan.png"
                alt="Kirim"
                width={18}
                height={20}
                className="object-cover w-[15px] h-[19px]"
              />
              {showAll ? "BACK" : "See all message"}
            </motion.button>
          </div>
        </div>

        {/* POPUP KETIKA PESAN DIKIRIM */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
            <div className="bg-[#F7F8F2] rounded-2xl p-6 w-[340px] text-center shadow-xl border border-[#E4E7D6]">
              <h3 className="text-[22px] font-marcellus font-semibold text-[#4E4E4E] mb-3 tracking-wide">
                Pesan Terkirim !
              </h3>
              <div className="w-10 h-[2px] bg-[#4E4E4E] mx-auto mb-4 opacity-60" />
              <p className="text-[16px] text-[#4E4E4E] font-lora leading-relaxed mb-6">
                Terima kasih atas doa dan ucapan baik Anda. Kami sangat
                menghargai pesan yang telah diberikan.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-[#4E4E4E] transition-all text-white px-6 py-2 rounded-[6px] text-[14px] tracking-wide font-lora"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>

      {/* NOTIF MODAL — muncul kalau nama/pesan belum diisi */}
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