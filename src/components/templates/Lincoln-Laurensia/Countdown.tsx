import React from "react";
import Image from "next/image";

const items = [
  { label: "Days", value: "59" },
  { label: "Hour", value: "59" },
  { label: "Minutes", value: "59" },
  { label: "Seconds", value: "59" },
];

const Countdown = () => {
  return (
    <section
      id="countdown"
      className="relative z-10 w-full overflow-hidden text-white"
    >
      <Image
        src="/images/Lincoln-Laurensia/Countdown/BgMobile.webp"
        alt="Countdown background"
        fill
        className="-z-10 object-cover object-bottom lg:hidden"
      />
      <Image
        src="/images/Lincoln-Laurensia/Countdown/BgDekstop.webp"
        alt="Countdown background"
        fill
        className="-z-10 hidden object-cover object-top lg:block"
      />
      <div className="absolute inset-0 -z-10 bg-black/30" />

      <div className="relative flex min-h-[595px] flex-col items-center px-5 pt-10 lg:min-h-[640px] lg:pt-[100px]">
        <div className="flex items-start justify-center gap-5 lg:gap-[25.79px]">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <span className="font-poppins text-[40px] font-medium leading-none lg:text-[64px]">
                {item.value}
              </span>
              <span className="mt-2 lg:mt-0 font-poppins text-[12px]  lg:text-[18px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="mt-8 bg-[#605C5C82]/50 w-[276px] h-[30px] font-poppins text-[12px] uppercase tracking-wide lg:mt-[35.63px] lg:text-[20px] flex items-center justify-center"
        >
          Mark Your Calendar
        </a>
      </div>
    </section>
  );
};

export default Countdown;
