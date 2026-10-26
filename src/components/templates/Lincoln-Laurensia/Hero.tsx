import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col justify-end overflow-hidden text-white"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Lincoln-Laurensia/Hero/HeroBG.webp"
          alt="Lincoln & Laurensia"
          fill
          priority
          className="object-cover object-center lg:hidden"
        />
        <Image
          src="/images/Lincoln-Laurensia/Hero/HeroBGD.webp"
          alt="Lincoln & Laurensia"
          fill
          priority
          className="object-cover object-top hidden lg:block"
        />
        {/* <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" /> */}
      </div>

      <div className="relative z-10 flex flex-col items-center pt-[505px] pb-[80px] lg:pt-[540px] lg:pb-[36 2px] text-center">
        <p className="font-poppins text-[14px] lg:text-[22px] font-light uppercase tracking-[12%]">
          The Wedding of
        </p>

        <h1 className="mt-[5px] lg:mt-[13px] font-overpass text-[36px] lg:text-[52px] uppercase leading-[1.1] lg:leading-[55px] tracking-wide">
          <p className="block text-left mr-[60px]">Lincoln <span className="">&</span></p>
          <p className="block text-right ml-[60px]">Laurensia</p>
        </h1>

        <p className="mt-[25px] font-poppins text-[14px] lg:text-[22px] italic">
          #KENCENbersama
        </p>

        <p className="mt-[5px] font-poppins text-[20px] lg:text-[28px] italic flex items-center justify-center gap-[20px]">
          <p>28</p>
          <p>11</p>
          <p>26</p>
        </p>

        <a
          href="#profile"
          aria-label="Scroll down"
          className="mt-[50px] lg:mt-[35px] flex justify-center"
        >
          <Image
            src="/gif/Lincoln-Laurensia/PanahBawah.gif"
            alt="Scroll Down"
            width={80}
            height={80}
            unoptimized
            draggable={false}
            className="h-[40px] w-[40px] select-none [-webkit-touch-callout:none]"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;