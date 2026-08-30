"use client";

import { useEffect } from "react";

type Props = {
  progress: number;
  onDone?: () => void;
  groomName?: string;
  brideName?: string;
  eventDate?: string;
};

export default function LoadingScreen({
  progress,
  onDone,
  groomName = "David",
  brideName = "Natasya",
  eventDate = "SATURDAY, 10 OCTOBER 2026",
}: Props) {
  const fading = progress === 100;

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => onDone?.(), 600);
      return () => clearTimeout(timer);
    }
  }, [progress, onDone]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#F6F6F4]"
      style={{
        opacity: fading ? 0 : 1,
        transition: "opacity 600ms ease",
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      {/* Ornamen sudut */}
      <div className="absolute top-[24px] left-[24px] w-[24px] h-[24px] border-t border-l border-[#021125]/30" />
      <div className="absolute top-[24px] right-[24px] w-[24px] h-[24px] border-t border-r border-[#021125]/30" />
      <div className="absolute bottom-[24px] left-[24px] w-[24px] h-[24px] border-b border-l border-[#021125]/30" />
      <div className="absolute bottom-[24px] right-[24px] w-[24px] h-[24px] border-b border-r border-[#021125]/30" />

      {/* Konten */}
      <div className="relative z-10 flex flex-col items-center text-center px-8">
        <p className="font-cormorant-garamond italic text-[12px] text-[#021125]/70 tracking-[0.2em]">
          The Wedding of
        </p>

        <h1 className="font-sackers-italic-script font-normal text-[51px] text-[#021125] mt-[10px] leading-[1.3]">
          {groomName} & {brideName}
        </h1>

        <p className="font-cormorant-garamond text-[11px] text-[#021125]/70 mt-[14px] tracking-[0.15em]">
          {eventDate}
        </p>

        {/* Progress bar */}
        <div className="mt-[36px] w-[179px] h-[1px] rounded-full overflow-hidden bg-[#021125]/15">
          <div
            className="h-full rounded-full transition-all duration-300 ease-out bg-[#021125]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="font-cormorant-garamond text-[10px] text-[#021125]/60 mt-[10px] tabular-nums">
          {progress}%
        </p>
      </div>
    </div>
  );
}