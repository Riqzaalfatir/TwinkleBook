"use client";

import { motion } from "framer-motion";

type PesanItem = {
  id: string;
  nama: string;
  pesan: string;
};

type WishesCardProps = {
  data: PesanItem | null;
  onClose: () => void;
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
        className="relative overflow-hidden rounded-[24px] border border-[#4E4E4E]/20 bg-[#F6F6F4] shadow-lg w-full max-w-[360px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Decorasi bar atas */}
        <div className="h-1.5 bg-[#4E4E4E]" />

        {/* Content */}
        <div className="px-8 py-10 flex flex-col items-center">
          {/* Avatar */}
          <div className="relative mb-7">
            <div className="w-16 h-16 rounded-full bg-[#4E4E4E]/10 border border-[#4E4E4E]/10 flex items-center justify-center">
              <span className="text-[22px] font-lora font-bold text-[#4E4E4E]/80">
                {initials}
              </span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#4E4E4E]/15 rounded-full" />
          </div>

          <h3 className="font-marcellus text-[22px] text-[#4E4E4E] mb-1 tracking-wide">
            {data.nama}
          </h3>

          <div className="w-12 h-0.5 bg-[#4E4E4E]/20 mb-5 rounded-full" />

          <p className="font-marcellus text-[32px] text-[#4E4E4E]/15 leading-none mb-3">
            "
          </p>

          {/* Pesan */}
          <p className="font-lora text-[14px] leading-[1.8] text-[#4E4E4E]/80 line-clamp-6 text-center mb-7">
            {data.pesan}
          </p>

          <button
            onClick={onClose}
            className="w-full bg-[#4E4E4E] hover:bg-[#6B6B6B] active:scale-95 transition-all duration-300 text-white px-6 py-3.5 rounded-full text-[13px] font-lora font-bold tracking-[0.5px] uppercase"
          >
            Close
          </button>
        </div>

        {/* Decorasi bar bawah */}
        <div className="h-1 bg-[#4E4E4E]" />
      </motion.div>
    </motion.div>
  );
};

export default WishesCard;