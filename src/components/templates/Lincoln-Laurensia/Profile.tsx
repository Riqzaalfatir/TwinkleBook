import React from "react";
import Image from "next/image";

const Profile = () => {
  return (
    <section id="profile" className="relative z-10 -mt-10 lg:-mt-[210px] mx-auto">
      <div className="">
        <div className="mx-auto flex items-center justify-center gap-[22px] lg:gap-[22px]">
          <div className="relative h-[239px] w-[159px] lg:w-[312px] lg:h-[468px]">
            <Image
              src="/images/Lincoln-Laurensia/Profile/AsetKiri.webp"
              alt="Lincoln & Laurensia"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[239px] w-[159px] lg:w-[312px] lg:h-[468px]">
            <Image
              src="/images/Lincoln-Laurensia/Profile/AsetKanan.webp"
              alt="Lincoln & Laurensia"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-white pb-[155px] pt-[155px] font-poppins text-black">
  <div className="mx-auto w-full max-w-[340px] lg:max-w-[646px]">
    <p className="text-[14px] font-semibold">
      Then make my joy complete by being like- <br />
      minded, having the same love, being one in <br />
      spirit and of one mind.
    </p>
    <p className="mt-3 text-[12px] font-semibold lg:text-[13px]">
      Philippians 2:2
    </p>
  </div>
</div>

      <div className="mx-auto flex max-w-[520px] flex-col items-center gap-[30px] bg-white pb-[50px] lg:grid lg:max-w-[1462px] lg:grid-cols-[300px_1fr_300px] lg:items-stretch lg:gap-x-10 lg:gap-y-0 lg:pb-24">
        <div className="relative w-full max-w-[340px] lg:contents">
          <div className="relative h-[815px] w-full lg:col-start-1 lg:row-start-1 lg:h-[845px] lg:w-full">
            <Image
              src="/images/Lincoln-Laurensia/Profile/Lincoln.webp"
              alt="Lincoln"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-4 pb-[80px] pt-20 font-poppins text-white lg:static lg:col-start-2 lg:row-start-1 lg:self-start lg:bg-none lg:p-0 lg:text-black">
            <p className="text-[14px] font-light italic lg:text-[20px]">
              The Groom
            </p>
            <h2 className="text-[38px] font-semibold uppercase leading-none lg:text-[42px]">
              Lincoln
            </h2>
            <p className="mt-1 text-[20px] font-light italic uppercase lg:text-[26px]">
              Halim
            </p>
            <p className="mt-[10px] text-[14px] lg:mt-6 lg:text-[22px]">
              Son of
            </p>
            <p className="text-[14px] font-medium lg:text-[22px]">
              Mr. Asun Halim & Mrs. Yanti Widjono
            </p>
            <p className="mt-[15px] text-[14px] font-extralight leading-[20px] lg:mt-5 lg:text-[22px] lg:leading-[24px]">
              Meet Ken. He&apos;s the calm to her chaos, the steady sea to her
              wild waves. The one who <br className="lg:hidden" /> loves her
              through it all, and always finds a way to make her smile.
            </p>
          </div>
        </div>

        <div className="relative w-full max-w-[340px] lg:contents">
          <div className="relative h-[815px] w-full lg:col-start-3 lg:row-start-1 lg:h-[845px] lg:w-full">
            <Image
              src="/images/Lincoln-Laurensia/Profile/Laurensia.webp"
              alt="Laurensia"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-6 pb-8 pt-20 font-poppins text-white lg:static lg:col-start-2 lg:row-start-1 lg:self-end lg:bg-none lg:p-0 lg:text-right lg:text-black">
            <p className="text-[11px] font-light italic lg:text-[20px]">
              The Bride
            </p>
            <h2 className="font-overpass text-[30px] font-semibold uppercase leading-none lg:text-[52px]">
              Laurensia
            </h2>
            <p className="mt-1 text-[12px] font-light italic uppercase lg:text-[26px]">
              Leonie Kusuma
            </p>
            <p className="mt-4 text-[11px] font-light lg:mt-6 lg:text-[22px]">
              Daughter of
            </p>
            <p className="text-[12px] font-medium lg:text-[22px]">
              Mr. Ivan & Mrs. Linda
            </p>
            <p className="mt-[15px] text-[14px] font-extralight leading-[20px] lg:mt-5 lg:text-[22px] lg:leading-[24px]">
              Ken calls her Lien. She&apos;s the one he can talk to about
              anything, dream about everything with, and count on through the
              hardest days. His best friend, his greatest comfort, and the one
              he wants by his side for a lifetime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;