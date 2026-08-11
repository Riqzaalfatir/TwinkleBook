  import React from "react";
  import Image from "next/image";

  const DesktopCover: React.FC = () => {
    return (
      <div
        className="relative w-full overflow-hidden h-screen"
      //   style={{ minHeight: "1020px", height: "100dvh" }}
      >
        <Image
          src="/images/Albert-Jessica/DekstopCover/DekstopCover.webp"
          alt="Galih & Vio Wedding Cover"
          fill
          priority
          className="object-cover object-[50%_15%]"
        />
        <div className="absolute inset-0 flex flex-col justify-end items-center text-white text-center px-10 pb-[5%] tracking-wide">
          <p className="font-lora text-[16px] text-white uppercase">
            The Wedding of
          </p>
          <h1 className="font-marcellus text-[60px] uppercase">Albert & Jessica</h1>
          <p className="font-lora text-[16px] leading-6">
            Saturday · 12 Sep 2026
          </p>
        </div>
      </div>
    );
  };

  export default DesktopCover;