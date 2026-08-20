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

  const groomName = data?.dataEvent?.groomName ?? "Michael";
  const brideName = data?.dataEvent?.brideName ?? "Vannya";
  const eventDate = data?.dataEvent?.date
    ? moment(data.dataEvent.date).format("D MMMM YYYY").toUpperCase()
    : "02 OCTOBER 2026";

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => onDone?.(), 600);
      return () => clearTimeout(timer);
    }
  }, [progress, onDone]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-white"
      style={{
        opacity: fading ? 0 : 1,
        transition: "opacity 600ms ease",
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      {/* Ornamen sudut */}
      <div className="absolute top-[24px] left-[24px] w-[24px] h-[24px] border-t border-l border-[#00273E]/30" />
      <div className="absolute top-[24px] right-[24px] w-[24px] h-[24px] border-t border-r border-[#00273E]/30" />
      <div className="absolute bottom-[24px] left-[24px] w-[24px] h-[24px] border-b border-l border-[#00273E]/30" />
      <div className="absolute bottom-[24px] right-[24px] w-[24px] h-[24px] border-b border-r border-[#00273E]/30" />

      {/* Konten */}
      <div className="relative z-10 flex flex-col items-center text-center px-8">
        <p className="font-times-new-roman italic text-[3.08vw] lg:text-[13px] text-[#4D4D4D]/70 tracking-[0.2em]">
          The Wedding of
        </p>

        <h1 className="font-kinfolk text-[8vw] lg:text-[38px] text-[#7A883F] mt-[10px] leading-[1.3] tracking-wide">
          {groomName}
        </h1>

        <p className="font-kinfolk text-[6vw] lg:text-[28px] text-[#7A883F] leading-none my-[4px]">
          &amp;
        </p>

        <h1 className="font-kinfolk text-[8vw] lg:text-[38px] text-[#7A883F] leading-[1.3] tracking-wide">
          {brideName}
        </h1>

        <p className="font-times-new-roman text-[2.82vw] lg:text-[12px] text-[#4D4D4D]/70 mt-[14px] tracking-[0.15em]">
          {eventDate}
        </p>

        {/* Progress bar */}
        <div className="mt-[36px] w-[46vw] lg:w-[220px] h-[1px] rounded-full overflow-hidden bg-[#00273E]/15">
          <div
            className="h-full rounded-full transition-all duration-300 ease-out bg-[#00273E]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="font-times-new-roman text-[2.56vw] lg:text-[10px] text-[#4D4D4D]/60 mt-[10px] tabular-nums">
          {progress}%
        </p>
      </div>
    </div>
  );
}