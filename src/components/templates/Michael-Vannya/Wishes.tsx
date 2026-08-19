"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import WishesCard from "../Michael-Vannya/popup/WishesCard";
import NotifModal from "../../../popup/NotifModal";
import { fadeUp } from "../../../lib/animation";
import { dummyPesan } from "../Michael-Vannya/data/wishes";

type ModalType = string | null;

type WishItem = {
  id: string | number;
  nama: string;
  pesan: string;
};

const decodeHtmlEntities = (text: string): string => {
  if (typeof window === "undefined") return text;

  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
};

const Wishes = () => {
  const [nama, setNama] = useState<string>("");
  const [pesan, setPesan] = useState<string>("");
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedMessage, setSelectedMessage] = useState<WishItem | null>(null);

  const [pesanList, setPesanList] = useState<WishItem[]>(
    () => dummyPesan as WishItem[],
  );

  const handleSubmit = (): void => {
    const cleanNama = nama.trim();
    const cleanPesan = pesan.trim();

    if (!cleanNama || !cleanPesan) {
      setModalType("incomplete_wishes");
      return;
    }

    const newMessage: WishItem = {
      id: `local-${Date.now()}`,
      nama: cleanNama,
      pesan: cleanPesan,
    };

    setPesanList((prev) => [newMessage, ...prev]);

    setNama("");
    setPesan("");
    setShowPopup(true);
  };

  return (
    <>
      <section id="wishes" className="relative w-full pb-[75px] bg-[#7A883F]">
        <Image
          src="/images/Michael-Vannya/Wishes/BungaKiriBawah.webp"
          alt=""
          width={300}
          height={300}
          className="absolute -bottom-[0px] -left-[0px] w-[220px] h-auto pointer-events-none z-0"
        />
        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-kinfolk text-[34px] text-white"
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
              className="w-[95px] h-auto pointer-events-none -mt-[7px]"
            />
          </motion.div>

          <div className="max-w-[285px] w-full flex flex-col gap-[16px] mt-[25px]">
            <motion.input
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              type="text"
              value={nama}
              placeholder="Nama"
              onChange={(e) => setNama(e.target.value)}
              className="w-full text-white font-times-new-roman bg-transparent border-[0.5px] text-[12px] border-white/70 px-[12px] h-[30px] rounded-[10px] outline-none placeholder:text-white/70"
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
              className="w-full text-white font-times-new-roman bg-transparent border-[0.5px] text-[12px]  border-white/70 px-[12px] py-[6px] h-[106px] rounded-[10px] outline-none placeholder:text-white/70 resize-none"
            />

            <motion.button
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              type="button"
              onClick={handleSubmit}
              className="bg-white transition-colors duration-200 rounded-[10px] h-[30px] text-[12px] font-times-new-roman uppercase flex items-center justify-center gap-1.5 text-[#1B1C1D]"
            >
              <Image
                src="/images/Michael-Vannya/Wishes/Panah.png"
                alt="Kirim"
                width={15}
                height={19}
                className="object-cover w-[16px] h-[17px]"
              />
              Send
            </motion.button>

            {/* PESAN */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className={`w-full h-[300px] overflow-y-auto rounded-[10px] ${
                showAll ? "bg-transparent" : " bg-white"
              }`}
            >
              {!showAll ? (
                <>
                  <div className="sticky top-0 w-full h-[15px] bg-white z-10" />

                  <div className="px-[12px] pt-[13px] pb-[2px]">
                    {pesanList.slice(0, 8).map((item, index, array) => (
                      <div key={item.id}>
                        <p className="text-[#1B1C1D] font-times-new-roman text-[12px] font-bold mb-[3px]">
                          {item.nama}
                        </p>

                        <p className="text-[#1B1C1D] font-times-new-roman text-[12px]">
                          {decodeHtmlEntities(item.pesan)}
                        </p>

                        {index !== array.length - 1 && (
                          <div className="border-t-[0.1px] border-[#1B1C1D] mt-[7px] mb-[15px]" />
                        )}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="w-full px-[2px] py-[6px]">
                  <div className="grid grid-cols-2 gap-[12px]">
                    {pesanList.map((item, index) => {
                      const initials = item.nama
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
                              {decodeHtmlEntities(item.pesan)}
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
                              {item.nama}
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
              data={selectedMessage}
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
              className="bg-white transition-colors duration-200 rounded-[10px] h-[30px] text-[12px] font-times-new-roman uppercase flex items-center justify-center gap-1.5 text-[#1B1C1D]"
            >
              <Image
                src="/images/Michael-Vannya/Wishes/Pesan.png"
                alt="Pesan"
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
          waNumber="6281234567890"
        />
      )}
    </>
  );
};

export default Wishes;
