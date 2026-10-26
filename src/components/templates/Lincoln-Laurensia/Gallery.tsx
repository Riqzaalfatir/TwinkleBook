import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="relative z-10 flex w-full flex-col items-center bg-white px-4 py-10 font-poppins font-light text-[#737573] lg:py-[120px]"
    >
      <div className="flex w-full max-w-[344px] justify-between text-[13px] lg:max-w-[630px] lg:text-[22px]">
        <p>just</p>
        <p>us two</p>
      </div>

      <div className="relative my-10 h-[460px] w-[344px] lg:my-[64px] lg:h-[717px] lg:w-[536.19px]">
        <Image
          src="/images/Lincoln-Laurensia/Gallery/AsetSatu.webp"
          alt="Lincoln & Laurensia"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex w-full max-w-[344px] justify-between text-[13px] lg:max-w-[630px] lg:text-[22px]">
        <p>good times</p>
        <p>saturday - 28/11/26</p>
      </div>
    </section>
  );
};

export default Gallery;