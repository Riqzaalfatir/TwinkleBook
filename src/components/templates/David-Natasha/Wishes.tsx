"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "../../../lib/animation";
import { dummyPesan, PesanItem } from "./data/wishes";
import NotifModal from "../../../popup/NotifModal";
import WishesCard from "./popup/WishesCard";
import { useListPMG } from "../../../hooks/api/useListPMG";
import { usePMG } from "../../../hooks/api/usePMG";
import { DavidNatashaDataProps } from "./types";

const decodeHtmlEntities = (text: string): string => {
  if (typeof window === "undefined") return text;
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
};

type WishesProps = {
  data?: DavidNatashaDataProps;
  guestData?: { name?: string } | null;
};

const Wishes = ({ data, guestData }: WishesProps) => {
  const [nama, setNama] = useState<string>("");
  const [pesan, setPesan] = useState<string>("");
  const [showAll, setShowAll] = useState<boolean>(false);
  const [notifType, setNotifType] = useState<string>("");
  const [selectedMessage, setSelectedMessage] = useState<PesanItem | null>(
    null,
  );
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const hasAutofilled = useRef(false);

  const eventId = data?.dataEvent?.id;

  const { getListPMG, listPMG, statusListPMG: listStatus } = useListPMG();

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
      className="relative w-full flex flex-col items-center py-[16vw] lg:py-[12.15vw]"
    >
      <div className="relative w-[100%] lg:w-[66%]">
        <Image
          src="/images/David-Natasha/Wishes/Frameee.webp"
          alt="Wishes Frame"
          width={1554}
          height={4096}
          className="w-full h-auto lg:hidden"
        />
        <Image
          src="/images/David-Natasha/Wishes/FrameD.webp"
          alt="Wishes Frame"
          width={1554}
          height={4096}
          className="w-full h-auto hidden lg:block"
        />

        <div className="absolute inset-0 flex flex-col items-center mt-[34.5vw] lg:mt-[15.98vw] ml-[1vw] lg:-ml-[0.2vw]">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-sackers-italic-script text-[13.33vw] lg:text-[5.29vw] text-[#021125] [--stroke-w:0.3px] lg:[--stroke-w:0.53px]"
            style={{ WebkitTextStroke: "var(--stroke-w) #021125" }}
          >
            Your Wishes
          </motion.h1>

          <div className="flex flex-col gap-[5.13vw] lg:gap-[1.72vw] mt-[3.9vw] lg:mt-[1.5vw] w-[67.44vw] lg:w-[32.71vw]">
            <motion.input
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              type="text"
              value={nama}
              placeholder="[Guest Name]"
              onChange={(e) => setNama(e.target.value)}
              className="w-full text-[#021125] font-cormorant-garamond bg-transparent border-[0.5px] text-[3.59vw] lg:text-[1.59vw] border-[#021125] px-[3.08vw] lg:px-[1.35vw] h-[8.46vw] lg:h-[2.78vw] rounded-[1.54vw] lg:rounded-[0.66vw] outline-none placeholder:text-[#021125]/50"
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
              className="w-full text-[#021125] font-cormorant-garamond bg-transparent text-[3.59vw] lg:text-[1.59vw] border-[0.5px] border-[#021125] px-[3.08vw] py-[1.54vw] lg:py-[0.8vw] lg:px-[1.35vw] h-[15.38vw] lg:h-[13.03vw] rounded-[1.54vw] lg:rounded-[1.32vw] outline-none placeholder:text-[#021125]/30 resize-none"
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
              className="bg-[#021125] rounded-[1.54vw] lg:rounded-[0.66vw] h-[8.46vw] lg:h-[2.78vw] text-[3.59vw] lg:text-[1.06vw] font-cormorant-garamond uppercase flex items-center justify-center gap-[2.56vw] lg:gap-[0.46vw] text-white transition-colors duration-300 hover:bg-[#0a1f3d] disabled:opacity-60"
            >
              <Image
                src="/images/David-Natasha/Wishes/Panah.png"
                alt="Kirim"
                width={50}
                height={50}
                className="object-cover w-[4.10vw] h-auto lg:w-[1.46vw]"
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
              className={`w-full h-[97.95vw] lg:h-[36.44vw] overflow-y-auto rounded-[1.54vw] lg:rounded-[0.66vw] ${
                showAll ? "bg-transparent" : "border border-[#021125]"
              }`}
            >
              {listStatus === "loading" && (
                <p className="text-[#021125] text-center py-4 font-cormorant-garamond text-[3.59vw] lg:text-[1.06vw]">
                  Memuat ucapan...
                </p>
              )}

              {!showAll ? (
                <div className="px-[3.08vw] lg:px-[1.35vw] py-[5.5vw] lg:py-[1.46vw]">
                  {pesanList.map((item, index, array) => (
                    <div key={item.id}>
                      <p className="text-[#021125] font-cormorant-garamond text-[3.59vw] lg:text-[1.59vw] font-bold mb-[0.4vw] lg:mb-[0.2vw]">
                        {item.nama}
                      </p>

                      <p className="text-[#021125] font-cormorant-garamond text-[3.59vw] lg:text-[1.59vw] break-words">
                        {item.pesan}
                      </p>

                      {index !== array.length - 1 && (
                        <div className="border-t-[0.03vw] border-[#021125] mt-[2.95vw] lg:mt-[0.50vw] mb-[3.08vw] lg:mb-[1.26vw]" />
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full px-[0.51vw] lg:px-[0.26vw] py-[1.54vw] lg:py-[0.40vw]">
                  <div className="grid grid-cols-2 gap-[3.08vw] lg:gap-[1.06vw]">
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
                          animate="show"
                          transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: index * 0.05,
                          }}
                          onClick={() => setSelectedMessage(item)}
                          className="group relative overflow-hidden rounded-[2.56vw] lg:rounded-[0.79vw] border border-[#021125]/30 bg-white flex flex-col cursor-pointer shadow-[0_2px_6px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:border-[#021125] transition-[box-shadow,border-color] duration-300"
                        >
                          <div className="absolute top-0 left-0 right-0 h-[0.77vw] lg:h-[0.26vw] bg-[#021125]" />

                          <div className="p-[3.08vw] lg:p-[1.06vw] flex-1 flex flex-col justify-between">
                            <p className="font-sackers-italic-script text-[6.67vw] lg:text-[2.12vw] text-[#021125]/25 leading-none mb-[0.51vw] lg:mb-[0.26vw] group-hover:text-[#021125]/40 transition-colors">
                              &quot;
                            </p>

                            <p className="font-cormorant-garamond text-[3.08vw] lg:text-[0.93vw] text-[#021125] text-left line-clamp-4 leading-[4.36vw] lg:leading-[1.32vw] mb-[1.03vw] lg:mb-[0.53vw]">
                              {item.pesan}
                            </p>

                            <div className="w-[2.05vw] lg:w-[1.59vw] h-[0.26vw] lg:h-[0.13vw] bg-[#021125]/40 rounded-full" />
                          </div>

                          <div className="bg-[#021125]/8 px-[3.59vw] lg:px-[1.06vw] py-[2.56vw] lg:py-[0.66vw] flex items-center gap-[2.56vw] lg:gap-[0.66vw] border-t border-[#021125]/15">
                            <div className="w-[7.18vw] lg:w-[2.12vw] h-[7.18vw] lg:h-[2.12vw] rounded-full bg-white flex items-center justify-center flex-shrink-0 border border-[#021125]/25">
                              <p className="text-[#021125] text-[2.82vw] lg:text-[0.79vw] font-cormorant-garamond font-bold">
                                {initials || "?"}
                              </p>
                            </div>

                            <p className="text-[#021125] text-[3.08vw] lg:text-[0.86vw] font-cormorant-garamond font-semibold truncate flex-1 tracking-wide">
                              {item.nama}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>

            <motion.button
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="bg-[#021125] rounded-[1.54vw] lg:rounded-[0.66vw] h-[8.46vw] lg:h-[2.78vw] text-[3.59vw] lg:text-[1.06vw] font-cormorant-garamond uppercase flex items-center justify-center gap-[2.34vw] lg:gap-[0.68vw] text-white transition-colors duration-300 hover:bg-[#0a1f3d]"
            >
              <Image
                src="/images/David-Natasha/Wishes/Pesan.png"
                alt="Pesan"
                width={50}
                height={50}
                className="object-cover w-[4.36vw] h-auto lg:w-[1.63vw]"
              />
              {showAll ? "Back" : "View all messages"}
            </motion.button>
          </div>
        </div>
      </div>

      {/* POPUP KETIKA PESAN BERHASIL DIKIRIM */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 px-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative bg-white rounded-[16px] w-[300px] text-center shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#021125]" />

              <div className="px-[28px] pb-[38px] pt-[42px]">
                <h3 className="font-sackers-italic-script text-[50px] lg:text-[55px] text-[#021125] leading-none">
                  Thank You
                </h3>

                <p className="font-cormorant-garamond font-bold text-[12px] text-[#021125]/70 tracking-[0.15em] uppercase mt-[15px]">
                  Message Sent
                </p>

                <div className="w-[36px] h-[1px] bg-[#021125]/60 mx-auto my-[18px]" />

                <p className="font-cormorant-garamond text-[13px] text-[#021125]/80 leading-[20px]">
                  Thank you for your warm wishes and prayers.
                  <br />
                  We truly appreciate your message.
                </p>

                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  className="w-[140px] h-[36px] mt-[26px] bg-[#021125] text-white font-cormorant-garamond text-[11px] tracking-[0.1em] uppercase rounded-[71px] transition-colors duration-300 hover:bg-[#0a1f3d]"
                >
                  Close
                </button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#021125]" />
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