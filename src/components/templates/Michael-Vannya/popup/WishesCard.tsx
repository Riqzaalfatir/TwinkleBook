"use client";

import { createPortal } from "react-dom";
import { motion } from "framer-motion";

type PesanItem = {
  id: string | number;
  nama: string;
  pesan: string;
};

type WishesCardProps = {
  data: PesanItem | null;
  onClose: () => void;
};

const decodeHtmlEntities = (text: string): string => {
  if (typeof window === "undefined") return text;

  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
};

const WishesCard = ({ data, onClose }: WishesCardProps) => {
  if (!data) return null;

  const initials = data.nama
    .split(" ")
    .filter(Boolean)
    .map((name) => name[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const portalTarget =
    typeof window !== "undefined"
      ? (document.getElementById("mv-root") ?? document.body)
      : null;

  if (!portalTarget) return null;

  return createPortal(
    <motion.div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[4px] px-6 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative overflow-hidden rounded-[24px] border border-[#1B1C1D]/15 bg-[#FBFAF5] shadow-lg w-full max-w-[360px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="h-1.5 bg-[#D8CBAE]" />

        <div className="px-8 py-10 flex flex-col items-center">
          <div className="relative mb-7">
            <div className="w-16 h-16 rounded-full bg-[#D8CBAE]/30 border border-[#D8CBAE] flex items-center justify-center">
              <span className="text-[22px] font-times-new-roman font-bold text-[#1B1C1D]/80">
                {initials || "?"}
              </span>
            </div>

            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#D8CBAE]/50 rounded-full" />
          </div>

          <h3 className="font-kinfolk text-[24px] text-[#00273E] mb-1 tracking-wide">
            {data.nama}
          </h3>

          <div className="w-12 h-0.5 bg-[#D8CBAE] mb-5 rounded-full" />

          <p className="font-kinfolk text-[32px] text-[#1B1C1D]/15 leading-none mb-3">
            &quot;
          </p>

          <p className="font-times-new-roman text-[13px] leading-[1.8] text-[#1B1C1D]/85 line-clamp-6 text-center mb-7">
            {decodeHtmlEntities(data.pesan)}
          </p>

          <button
            type="button"
            onClick={onClose}
            className="w-full bg-[#D8CBAE] hover:bg-[#C9B896] active:scale-95 transition-all duration-300 text-[#1B1C1D] px-6 py-3.5 rounded-full text-[13px] font-times-new-roman font-bold tracking-[0.5px] uppercase"
          >
            Close
          </button>
        </div>

        <div className="h-1 bg-[#D8CBAE]" />
      </motion.div>
    </motion.div>,
    portalTarget,
  );
};

export default WishesCard;