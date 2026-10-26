import React from "react";
import Image from "next/image";

const Thankyou = () => {
  return (
    <section
      id="thankyou"
      className="relative z-10 flex min-h-[640px] w-full flex-col items-center overflow-hidden px-6 pt-12 text-center font-poppins text-white lg:h-screen lg:min-h-0 lg:px-0 lg:pt-[6%]"
    >
      <Image
        src="/images/Lincoln-Laurensia/Thankyou/AsetMobile.webp"
        alt="Thank you"
        fill
        className="-z-10 object-cover object-center lg:hidden"
      />
      <Image
        src="/images/Lincoln-Laurensia/Thankyou/AsetDekstop.webp"
        alt="Thank you"
        fill
        className="-z-10 hidden object-cover object-center lg:block"
      />

      <div className="flex flex-col items-center">
        <h2 className="text-[26px] font-light uppercase leading-none lg:text-[42px]">
          Thank You
        </h2>
        <p className="mt-6 lg:mt-[30px] text-[11px] font-light leading-[1.6] lg:text-[22px] lg:leading-[1.5]">
          Lucky in love,
          <br />
          lucky to have you.
          <br />
          Thanks for being part of our big day!
        </p>
      </div>

      <div className="absolute bottom-[6%] left-1/2 h-[40px] w-[110px] -translate-x-1/2 lg:bottom-[5%] lg:h-[50px] lg:w-[140px]">
        <Image
          src="/images/Lincoln-Laurensia/Thankyou/LogoProvite.webp"
          alt="Provite"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Thankyou;