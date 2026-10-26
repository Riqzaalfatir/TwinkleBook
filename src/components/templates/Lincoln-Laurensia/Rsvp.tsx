import React from "react";
import Image from "next/image";

const Rsvp = () => {
  return (
    <section
      id="rsvp"
      className="relative z-10 flex w-full flex-col items-center bg-[#2F2F2F] px-6 py-14 text-center font-poppins text-white lg:py-[120px]"
    >
      <h2 className="font-overpass text-[28px] font-semibold uppercase tracking-[0.5em] lg:tracking-[1.2em] lg:text-[52px]">
        RSVP
      </h2>

      <div className="mt-8 lg:mt-[50px]">
        <p className="text-[11px] lg:text-[22px]">
          Dear Mr. /Mrs. / Ms.
        </p>
        <p className="mt-1 lg:mt-[10px] text-[16px] lg:text-[24px]">
          [Guest Name]
        </p>
      </div>

      <div className="mt-6 lg:mt-[50px]">
        <p className="text-[11px] lg:text-[22px]">
          Kindly confirm your attendance before
          <br />
          11 June 2026
        </p>

        <div className="mt-3 lg:mt-[25px] flex items-center justify-center gap-2 lg:gap-[27.69px]">
          <button
            type="button"
            className="bg-white w-[203px] h-[42px] text-[8px] lg:text-[18px] font-light uppercase text-[#30201E] rounded-[5px]"
          >
            Attend
          </button>
          <button
            type="button"
            className="border border-white/60 w-[203px] h-[42px] text-[8px] lg:text-[18px] font-light uppercase text-white rounded-[5px]"
          >
            Unable to attend
          </button>
        </div>
      </div>

      <div className="mt-10 lg:mt-[90px]">
        <p className="text-[11px] lg:text-[22px]">Confirm Your RSVP</p>
        <button
          type="button"
          className="mt-2 lg:mt-[15px] bg-white w-[220px] h-[52px] text-[8px] lg:text-[18px] uppercase  text-[#30201E] rounded-[5px] leading-none"
        >
          Confirm Unable
          <br />
          to attend
        </button>
      </div>

      <div className="mt-10 lg:mt-[80px]">
        <p className="text-[10px] lg:text-[20px]">
          If you need assistance with your RSVP, <br />
           please contact our support team.
        </p>
        <a
            
            className="flex items-center justify-center w-[220px] h-[42px] bg-[#12877B] rounded-[5px]  text-[8px] lg:text-[18px] text-white gap-[10.6px] mt-[15px] mx-auto"
          >
            <Image
              src="/images/Lincoln-Laurensia/Rsvp/Wa.png"
              alt="whatsapp"
              width={200}
              height={200}
              className="w-[15px] lg:w-[25px]"
            />
            CHAT SUPPORT
          </a>
      </div>
    </section>
  );
};

export default Rsvp;