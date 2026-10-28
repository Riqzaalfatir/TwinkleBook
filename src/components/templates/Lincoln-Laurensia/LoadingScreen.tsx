"use client";

import { useEffect } from "react";

type Props = {
  progress: number;
  onDone?: () => void;
};

export default function LoadingScreen({ progress, onDone }: Props) {
  const fading = progress === 100;

  // Kunci scroll selama loading
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => onDone?.(), 600);
      return () => clearTimeout(timer);
    }
  }, [progress, onDone]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-white font-poppins"
      style={{
        opacity: fading ? 0 : 1,
        transition: "opacity 600ms ease",
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      {/* Ornamen sudut */}
      <div className="absolute left-[6.15vw] top-[6.15vw] h-[6.15vw] w-[6.15vw] border-l border-t border-[#2F2F2F]/30 lg:left-[1.59vw] lg:top-[1.59vw] lg:h-[1.59vw] lg:w-[1.59vw]" />
      <div className="absolute right-[6.15vw] top-[6.15vw] h-[6.15vw] w-[6.15vw] border-r border-t border-[#2F2F2F]/30 lg:right-[1.59vw] lg:top-[1.59vw] lg:h-[1.59vw] lg:w-[1.59vw]" />
      <div className="absolute bottom-[6.15vw] left-[6.15vw] h-[6.15vw] w-[6.15vw] border-b border-l border-[#2F2F2F]/30 lg:bottom-[1.59vw] lg:left-[1.59vw] lg:h-[1.59vw] lg:w-[1.59vw]" />
      <div className="absolute bottom-[6.15vw] right-[6.15vw] h-[6.15vw] w-[6.15vw] border-b border-r border-[#2F2F2F]/30 lg:bottom-[1.59vw] lg:right-[1.59vw] lg:h-[1.59vw] lg:w-[1.59vw]" />

      {/* Konten */}
      <div className="relative z-10 flex flex-col items-center px-8 text-center text-[#2F2F2F]">
        <p className="text-[3.08vw] font-light italic tracking-[0.2em] text-[#2F2F2F]/70 lg:text-[0.86vw]">
          The Wedding of
        </p>

        <h1 className="mt-[2.56vw] text-[8vw] font-semibold uppercase leading-[1.3] tracking-wide lg:mt-[0.66vw] lg:text-[2.51vw]">
          Lincoln
        </h1>

        <p className="my-[1px] text-[6vw] font-light leading-none lg:text-[1.85vw]">
          &amp;
        </p>

        <h1 className="text-[8vw] font-semibold uppercase leading-[1.3] tracking-wide lg:text-[2.51vw]">
          Laurensia
        </h1>

        <p className="mt-[3.59vw] text-[2.82vw] tracking-[0.15em] text-[#2F2F2F]/70 lg:mt-[0.93vw] lg:text-[0.79vw]">
          28 NOVEMBER 2026
        </p>

        {/* Progress bar */}
        <div className="mt-[9.23vw] h-[1px] w-[46vw] overflow-hidden rounded-full bg-[#2F2F2F]/15 lg:mt-[2.38vw] lg:w-[14.55vw]">
          <div
            className="h-full rounded-full bg-[#2F2F2F] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-[2.56vw] text-[2.56vw] tabular-nums text-[#2F2F2F]/60 lg:mt-[0.66vw] lg:text-[0.66vw]">
          {progress}%
        </p>
      </div>
    </div>
  );
}
