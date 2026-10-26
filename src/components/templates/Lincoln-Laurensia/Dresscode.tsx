import React from "react";
import Image from "next/image";

const DressCode = () => {
  return (
    <section
      id="dress-code"
      className="relative z-10 flex w-full flex-col items-center bg-white px-6 py-12 text-center font-poppins text-[#2F2F2F] lg:py-[120px]"
    >
      <h2 className="text-[30px] font-semibold uppercase leading-none lg:text-[42px] text-[#2F2F2F]">
        Dress Code
      </h2>

      <div className="relative mt-8 h-[100px] w-full max-w-[300px] lg:mt-[50px] lg:h-[195px] lg:max-w-[564px]">
        <Image
          src="/images/Lincoln-Laurensia/DressCode/Orang.webp"
          alt="Dress code"
          fill
          className="object-contain"
        />
      </div>

      <div className="mt-8 lg:mt-[35px]">
        <p className="text-[11px] font-bold uppercase lg:text-[22px] text-[#2F2F2F]">
          Gentlemen :
        </p>
        <p className="text-[11px]  italic uppercase lg:text-[22px] text-[#2F2F2F]">
          Black Formal Suit
        </p>
      </div>

      <div className="mt-6 max-w-[220px] lg:mt-[35px] lg:max-w-none">
        <p className="text-[11px] font-bold uppercase lg:text-[22px] text-[#2F2F2F]">
          Ladies :
        </p>
        <p className="text-[11px] italic uppercase lg:text-[22px] text-[#2F2F2F]">
          Formal attire following the color palette
        </p>
      </div>

      <div className="mt-10 flex items-start justify-center gap-8 lg:mt-[35px] lg:gap-[45.28px]">
        <div className="flex flex-col items-center">
          <div className="relative h-[70px] w-[70px] lg:h-[97.86px] lg:w-[97.86px]">
            <Image
              src="/images/Lincoln-Laurensia/DressCode/NoWhite.webp"
              alt="No White"
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-2 text-[12px] font-light italic lg:text-[20px] text-[#4E4033]">
            No White
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative h-[70px] w-[70px] lg:h-[97.86px] lg:w-[97.86px]">
            <Image
              src="/images/Lincoln-Laurensia/DressCode/NoBatik.webp"
              alt="No Batik"
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-2 text-[12px] font-light italic lg:text-[20px] text-[#4E4033]">
            No Batik
          </p>
        </div>
      </div>
    </section>
  );
};

export default DressCode;