import React from "react";
import Image from "next/image";

const schedule = [
  { title: "Holy Matrimony", time: "10:30", note: "", right: false, top: "lg:top-[1178px]" },
  { title: "Tea Pai", time: "15:00", note: "", right: true, top: "lg:top-[1351px]" },
  { title: "Cocktail Party", time: "16:30", note: "", right: false, top: "lg:top-[1510px]" },
  { title: "Dinner Reception", time: "18:00", note: "at manten ballroom", right: true, top: "lg:top-[1667px]" },
  { title: "After Party", time: "21:00", note: "at rirlungan hall", right: false, top: "lg:top-[1852px]" },
];

const EventOrder = () => {
  return (
    <section
      id="event-order"
      className="relative z-10 w-full overflow-hidden bg-[#2F2F2F] px-6 py-12 font-poppins text-white lg:px-0 lg:py-0"
    >
      <div className="mx-auto w-full max-w-[420px] lg:relative lg:h-[2148px] lg:w-[891px] lg:max-w-none">
        <p className="text-center text-[9px] uppercase tracking-wide text-[#A0A0A0] lg:absolute lg:left-[617px] lg:top-[130px] lg:whitespace-nowrap lg:text-left lg:text-[22px]">
          Our Date and Location
        </p>

        <div className="mt-4 text-left lg:absolute lg:left-0 lg:top-[117px] lg:mt-0">
          <h2 className="text-[40px] font-semibold uppercase leading-[1.1] lg:text-[96px]">
            Imah
            <br />
            Seniman
            <br />
            <span className="text-[34px] font-normal leading-none text-[#E2E2E2] lg:text-[96px]">
              28.11.26
            </span>
          </h2>
          <p className="mt-3 font-overpass text-[9px] font-light uppercase lg:whitespace-nowrap lg:text-[22px]">
            Jl. Kolonel Masturi No. VIII, Kab. Bandung
          </p>
          <a
            href="#"
            className="mt-2 inline-block border-b border-white/70 text-[8px] font-light italic uppercase"
          >
            Google Maps
          </a>
        </div>

        <div className="relative left-1/2 mt-6 aspect-[420/170] w-screen -translate-x-1/2 lg:hidden">
          <Image
            src="/images/Lincoln-Laurensia/EventOrder/RumahMobile.webp"
            alt="Imah Seniman"
            fill
            className="object-contain object-right"
          />
        </div>

        <div className="hidden lg:absolute lg:left-[150px] lg:top-[515px] lg:block lg:h-[713px] lg:w-[calc(741px+(100vw-891px)/2)]">
          <Image
            src="/images/Lincoln-Laurensia/EventOrder/RumahDekstop.webp"
            alt="Imah Seniman"
            fill
            className="object-contain object-right"
          />
        </div>

        <div className="mt-10 flex flex-col gap-8 lg:absolute lg:inset-0 lg:mt-0 lg:gap-0">
          {schedule.map((item) => (
            <div
              key={item.title}
              className={`flex flex-col lg:absolute lg:w-[300px] ${item.top} ${
                item.right
                  ? "items-end text-right lg:right-0"
                  : "items-start text-left lg:left-0"
              }`}
            >
              <p className="text-[13px] text-[#E2E2E2] font-light uppercase lg:text-[32px]">
                {item.title}
              </p>
              {item.note && (
                <p className="text-[9px] text-[#E2E2E2]  italic lg:text-[20px]">
                  {item.note}
                </p>
              )}
              <p className="mt-1 text-[30px] text-[#E2E2E2] font-medium leading-[1.05] lg:text-[64px]">
                {item.time}
                <br />
                WIB
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventOrder;