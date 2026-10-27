"use client";

import { motion } from "framer-motion";
import { PesanItem } from "../data/wishes";

type WishesCardProps = {
  data: PesanItem | null;
  onClose: () => void;
};

const decodeHtmlEntities = (text: string): string => {
  if (typeof window === "undefined") return text; // guard buat SSR
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
};

const WishesCard = ({ data, onClose }: WishesCardProps) => {
  if (!data) return null;

  const initials = data.nama
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <motion.div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[4px] px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative overflow-hidden rounded-[24px] border border-[#021125]/20 bg-white shadow-lg w-full max-w-[360px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Decorasi bar atas */}
        <div className="h-1.5 bg-[#021125]" />

        {/* Content */}
        <div className="px-8 py-10 flex flex-col items-center">
          {/* Avatar */}
          <div className="relative mb-7">
            <div className="w-16 h-16 rounded-full bg-[#021125]/10 border border-[#021125]/10 flex items-center justify-center">
              <span className="text-[22px] font-cormorant-garamond font-bold text-[#021125]/80">
                {initials}
              </span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#021125]/15 rounded-full" />
          </div>

          <h3 className="font-cormorant-garamond text-[16px] text-[#021125] mb-1 tracking-wide font-bold">
            {data.nama}
          </h3>

          <div className="w-12 h-0.5 bg-[#021125]/20 mb-5 rounded-full" />

          <p className="font-sackers-italic-script text-[32px] text-[#021125]/25 leading-none mb-3">
            &quot;
          </p>

          {/* Pesan */}
          <p className="font-cormorant-garamond text-[13px] leading-[1.8] text-[#021125] text-center mb-7 max-h-[130px] overflow-y-auto px-1 lg:max-h-[170px]">
            {decodeHtmlEntities(data.pesan)}
          </p>

          <button
            onClick={onClose}
            className="w-full bg-[#021125] hover:bg-[#0a1f3d] active:scale-95 transition-all duration-300 text-white px-6 py-3.5 rounded-full text-[12px] font-cormorant-garamond font-bold tracking-[0.5px] uppercase"
          >
            Close
          </button>
        </div>

        {/* Decorasi bar bawah */}
        <div className="h-1 bg-[#021125]" />
      </motion.div>
    </motion.div>
  );
};

export default WishesCard;
