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
  groomName = "Peter",
  brideName = "Helena",
  eventDate = "SUNDAY, 25 OCTOBER 2026",
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
      <div className="absolute top-[24px] left-[24px] w-[24px] h-[24px] border-t border-l border-[#430D0D]/30" />
      <div className="absolute top-[24px] right-[24px] w-[24px] h-[24px] border-t border-r border-[#430D0D]/30" />
      <div className="absolute bottom-[24px] left-[24px] w-[24px] h-[24px] border-b border-l border-[#430D0D]/30" />
      <div className="absolute bottom-[24px] right-[24px] w-[24px] h-[24px] border-b border-r border-[#430D0D]/30" />

      {/* Konten */}
      <div className="relative z-10 flex flex-col items-center text-center px-8">
        <p className="font-cinzel italic text-[3.08vw] lg:text-[13px] text-[#430D0D]/70 tracking-[0.2em]">
          The Wedding of
        </p>

        <h1 className="font-aston-script text-[8vw] lg:text-[38px] text-[#430D0D] mt-[10px] leading-[1.3]">
          {groomName}
        </h1>

        <p className="font-aston-script text-[6vw] lg:text-[28px] text-[#430D0D] leading-none mt-[15px] mb-[30px]">
          &amp;
        </p>

        <h1 className="font-aston-script text-[8vw] lg:text-[38px] text-[#430D0D] leading-[1.3]">
          {brideName}
        </h1>

        <p className="font-cinzel text-[2.82vw] lg:text-[12px] text-[#430D0D]/70 mt-[14px] tracking-[0.15em]">
          {eventDate}
        </p>

        {/* Progress bar */}
        <div className="mt-[36px] w-[46vw] lg:w-[220px] h-[1px] rounded-full overflow-hidden bg-[#430D0D]/15">
          <div
            className="h-full rounded-full transition-all duration-300 ease-out bg-[#430D0D]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="font-cinzel text-[2.56vw] lg:text-[10px] text-[#430D0D]/60 mt-[10px] tabular-nums">
          {progress}%
        </p>
      </div>
    </div>
  );
}
