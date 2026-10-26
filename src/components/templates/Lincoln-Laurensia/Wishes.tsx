import React from "react";
import Image from "next/image";

const messages = [
  { name: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, nisi laborum" },
  { name: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, non veniam commodo ex qui." },
];

const Wishes = () => {
  return (
    <section
      id="wishes"
      className="relative z-10 flex w-full flex-col items-center bg-white px-6 py-12 font-poppins text-[#2F2F2F] lg:py-[120px]"
    >
      <h2 className="font-poppins text-[26px] font-semibold uppercase leading-none lg:text-[42px] text-[#2F2F2F]">
        Your Wishes
      </h2>

      <div className="mt-8 lg:mt-[50px] flex w-full max-w-[320px] flex-col gap-3 lg:gap-[20px] lg:max-w-[594px]">
        <input
          type="text"
          placeholder="[Guest Name]"
          className="h-[30px] w-full rounded-[10px] border border-[#2F2F2F] bg-transparent px-[25px] text-[11px] outline-none placeholder:text-[#2F2F2F] lg:h-[42px] lg:text-[20px]"
        />

        <textarea
          placeholder="Leave your wishes here."
          className="h-[110px] w-full resize-none rounded-[20px] border border-[#2F2F2F] bg-transparent px-[25px] py-[10px] text-[11px] outline-none placeholder:text-[#2F2F2F]/50 lg:h-[197px] lg:text-[20px]"
        />

        <button
          type="button"
          className="flex h-[28px] w-full items-center justify-center gap-2 rounded-[6px] bg-[#2F2F2F] text-[10px]  uppercase text-white lg:h-[42px] lg:text-[18px]"
        >
          <Image
            src="/images/Lincoln-Laurensia/Wishes/Panah.png"
            alt="Kirim"
            width={15}
            height={19}
            className="h-[17px] w-[16px] object-cover lg:h-[25px] lg:w-[23px]"
          />
          Send
        </button>

        <div className="h-[200px] w-full overflow-y-auto rounded-[10px] border border-[#2F2F2F]/60 px-[25px] py-[20px] lg:h-[479px] ">
          {messages.map((item, index) => (
            <div key={index}>
              <p className="text-[11px] font-bold lg:text-[22px]">
                {item.name}
              </p>
              <p className="mt-1 lg:mt-[10px] text-[11px] lg:text-[22px]">
                {item.text}
              </p>
              {index !== messages.length - 1 && (
                <div className="my-[20p] border-t border-[#2F2F2F]" />
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          className="flex h-[28px] w-full items-center justify-center gap-[10px] rounded-[10px] bg-[#2F2F2F] text-[10px] uppercase text-white lg:h-[42px] lg:text-[18px]"
        >
          <Image
            src="/images/Lincoln-Laurensia/Wishes/Pesan.png"
            alt="Pesan"
            width={18}
            height={20}
            className="h-[17px] w-[17px] object-cover lg:h-[22px] lg:w-[22px]"
          />
          See all messages
        </button>
      </div>
    </section>
  );
};

export default Wishes;