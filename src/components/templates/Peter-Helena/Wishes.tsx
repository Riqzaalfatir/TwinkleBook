"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "../../../lib/animation";
import { dummyPesan, PesanItem } from "./data/wishes";
import NotifModal from "../../../popup/NotifModal";
import WishesCard from "./popup/WishesCard";

const Wishes = () => {
  const [nama, setNama] = useState<string>("");
  const [pesan, setPesan] = useState<string>("");
  const [showAll, setShowAll] = useState<boolean>(false);
  const [notifType, setNotifType] = useState<string>("");
  const [selectedMessage, setSelectedMessage] = useState<PesanItem | null>(null);

  const [pesanList] = useState<PesanItem[]>(dummyPesan);

  const handleSubmit = () => {
    if (!nama.trim() || !pesan.trim()) {
      setNotifType("incomplete_wishes");
      return;
    }

    console.log("Kirim:", nama, pesan);
  };

  return (
    <section
      id="wishes"
      className="relative w-full pt-[49px] pb-[84.5px] lg:pt-[47px] lg:pb-[82.5px] bg-[#430D0D]"
    >
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-aston-script text-[28px] lg:text-[28.35px] text-white"
        >
          Your Wishes
        </motion.h1>

        <div className="max-w-[286px] lg:w-[289.62px] w-full flex flex-col gap-[20px] lg:gap-[20.25px] mt-[38px] lg:mt-[35px]">
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
            className="w-full text-white font-cinzel bg-transparent border text-[13px] lg:text-[13.16px] border-[#EEDBCD] px-[12px] lg:px-[12.11px] h-[33px] lg:h-[33.42px] rounded-[6px] outline-none placeholder:text-white/60"
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
            className="w-full text-white font-cinzel bg-transparent text-[13px] lg:text-[13.16px] border border-[#EEDBCD] px-[12px] lg:px-[12.11px] py-[6px] lg:py-[6.25px] h-[98px] lg:h-[99.24px] rounded-[6px] outline-none placeholder:text-white/30 resize-none"
          />

          <motion.button
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            type="button"
            onClick={handleSubmit}
            className="bg-[#EEDBCD]  rounded-[6px] h-[33px] lg:h-[33.42px] text-[12px] lg:text-[12.15px] font-cinzel uppercase flex items-center justify-center gap-[11.5px] lg:gap-[11.4px] text-[#3E0E2A] transition-colors duration-300 hover:bg-[#EBD6C6]"
          >
            <Image
              src="/images/Peter-Helena/Wishes/Panah.png"
              alt="Kirim"
              width={15}
              height={19}
              className="object-cover w-[16px] h-[20px]"
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
            className={`w-full h-[373px] lg:h-[377.72px] overflow-y-auto rounded-[6px] ${
              showAll
                ? "bg-transparent"
                : "bg-transparent border border-[#EEDBCD]"
            }`}
          >
            {!showAll ? (
              <>
                <div className="sticky top-0 w-full h-[15px] lg:h-[15.5px] bg-[#430D0D] z-10" />

                <div className="px-[12px] lg:px-[12.11px] pt-[13px] lg:pt-[4px] pb-[2px] lg:pb-[2.25px]">
                  {pesanList.map((item, index, array) => (
                    <div key={item.id}>
                      <p className="text-white font-cinzel text-[13px] lg:text-[13.16px] font-bold mb-[7px] lg:mb-[7.32px]">
                        {item.nama}
                      </p>

                      <p className="text-white font-cinzel text-[13px] lg:text-[13.16px]">
                        {item.pesan}
                      </p>

                      {index !== array.length - 1 && (
                        <div className="border-t-[0.1px] border-white mt-[12px] lg:mt-[12.61px] mb-[15px] lg:mb-[19px]" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="sticky bottom-0 w-full h-[15px] lg:h-[15.5px] bg-[#430D0D] z-10" />
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
                        animate="show"
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                          delay: index * 0.05,
                        }}
                        onClick={() => setSelectedMessage(item)}
                        className="group relative overflow-hidden rounded-[10px] border-[0.5px] border-white/70 bg-[#FBFAF5] flex flex-col cursor-pointer hover:shadow-lg hover:border-white transition-[box-shadow,border-color] duration-300"
                      >
                        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#430D0D]/70 via-[#430D0D]/30 to-transparent" />

                        <div className="p-[12px] flex-1 flex flex-col justify-between">
                          <p className="font-aston-script text-[26px] text-[#430D0D]/15 leading-none mb-2 group-hover:text-[#430D0D]/25 transition-colors">
                            &quot;
                          </p>

                          <p className="font-cinzel text-[12px] text-[#1B1C1D]/70 text-left line-clamp-4 leading-[17px] mb-4">
                            {item.pesan}
                          </p>

                          <div className="w-8 h-[1px] bg-[#430D0D]/40 rounded-full" />
                        </div>

                        <div className="bg-[#F3EEE1] px-[14px] py-[10px] flex items-center gap-[10px] border-t border-[#1B1C1D]/10">
                          <div className="w-[28px] h-[28px] rounded-full bg-white flex items-center justify-center flex-shrink-0 border border-[#1B1C1D]/15">
                            <p className="text-[#1B1C1D] text-[11px] font-cinzel font-bold">
                              {initials || "?"}
                            </p>
                          </div>

                          <p className="text-[#1B1C1D] text-[12px] font-cinzel font-medium truncate flex-1 tracking-wide">
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
            className="bg-[#EEDBCD]  rounded-[6px] h-[33px] lg:h-[33.42px] text-[12px] lg:text-[12.15px] font-cinzel uppercase flex items-center justify-center gap-1.5 lg:gap-[9.6px] text-[#3E0E1C] transition-colors duration-300 hover:bg-[#EBD6C6]"
          >
            <Image
              src="/images/Peter-Helena/Wishes/Pesan.png"
              alt="Pesan"
              width={18}
              height={20}
              className="object-cover w-[17px] h-[21px] lg:w-[17.74px] lg:h-[22.15px]"
            />
            {showAll ? "BACK" : "View all message"}
          </motion.button>
        </div>
      </div>

      {notifType && (
        <NotifModal type={notifType} onClose={() => setNotifType("")} />
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
