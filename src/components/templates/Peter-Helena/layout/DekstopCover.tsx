import React from "react";
import Image from "next/image";

const DesktopCover: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden h-screen">
      <Image
        src="/images/Peter-Helena/DekstopCover/PETERHELENA.webp"
        alt="Peter & Helena Wedding Cover"
        fill
        priority
        className="object-cover object-[50%_15%]"
      />
      <div className="absolute inset-0 flex flex-col justify-end items-center text-white text-center px-10 pb-[6%] tracking-wide">
        <h1 className="font-aston-script text-[35px] ">Peter & Helena</h1>
      </div>
    </div>
  );
};

export default DesktopCover;
