"use client";

import { useEffect } from "react";
import moment from "moment";

type Props = {
  progress: number;
  onDone?: () => void;
  data?: any;
};

export default function LoadingScreen({ progress, onDone, data }: Props) {
  const fading = progress === 100;

  const groomName = data?.dataEvent?.groomName ?? "Albert";
  const brideName = data?.dataEvent?.brideName ?? "Jessica";
  const eventDate = data?.dataEvent?.date
    ? moment(data.dataEvent.date).format("D MMMM YYYY").toUpperCase()
    : "12 SEPTEMBER 2026";

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
      <div className="absolute top-[24px] left-[24px] w-[24px] h-[24px] border-t border-l border-[#402824]/30" />
      <div className="absolute top-[24px] right-[24px] w-[24px] h-[24px] border-t border-r border-[#402824]/30" />
      <div className="absolute bottom-[24px] left-[24px] w-[24px] h-[24px] border-b border-l border-[#402824]/30" />
      <div className="absolute bottom-[24px] right-[24px] w-[24px] h-[24px] border-b border-r border-[#402824]/30" />

      {/* Konten */}
      <div className="relative z-10 flex flex-col items-center text-center px-8">
        <p className="font-lora italic text-[3.08vw] lg:text-[13px] text-[#402824]/70 tracking-[0.2em]">
          The Wedding of
        </p>

        <h1 className="font-marcellus text-[8vw] lg:text-[38px] text-[#402824] mt-[10px] leading-[1.3] tracking-wide">
          {groomName}
        </h1>

        <p className="font-marcellus text-[6vw] lg:text-[28px] text-[#402824] leading-none my-[4px]">
          &amp;
        </p>

        <h1 className="font-marcellus text-[8vw] lg:text-[38px] text-[#402824] leading-[1.3] tracking-wide">
          {brideName}
        </h1>

        <p className="font-lora text-[2.82vw] lg:text-[12px] text-[#402824]/70 mt-[14px] tracking-[0.15em]">
          {eventDate}
        </p>

        {/* Progress bar */}
        <div className="mt-[36px] w-[46vw] lg:w-[220px] h-[1px] rounded-full overflow-hidden bg-[#402824]/15">
          <div
            className="h-full rounded-full transition-all duration-300 ease-out bg-[#402824]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="font-lora text-[2.56vw] lg:text-[10px] text-[#402824]/60 mt-[10px] tabular-nums">
          {progress}%
        </p>
      </div>
    </div>
  );
}