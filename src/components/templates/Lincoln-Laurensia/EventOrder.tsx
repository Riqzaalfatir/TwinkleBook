import React from "react";
import Image from "next/image";

const schedule = [
  { title: "Holy Matrimony", time: "10:30", note: "", right: false },
  { title: "Tea Pai", time: "15:00", note: "", right: true },
  { title: "Cocktail Party", time: "16:30", note: "", right: false },
  {
    title: "Dinner Reception",
    time: "18:00",
    note: "at manten ballroom",
    right: true,
  },
  {
    title: "After Party",
    time: "21:00",
    note: "at rirlungan hall",
    right: false,
  },
];

const EventOrder = () => {
  return (
    <section
      id="event-order"
      className="relative z-10 w-full overflow-hidden bg-[#2F2F2F] px-[6.15vw] pt-[9.3vw] pb-[17vw] font-poppins text-white lg:px-0 lg:pt-0 lg:pb-0"
    >
      <div className="mx-auto w-full max-w-[107.69vw] lg:relative lg:w-[58.93vw] lg:max-w-none lg:pb-[8.29vw] lg:pt-[7.4vw] lg:ml-[11.9vw]">
        <p className="text-right text-[4.1vw] uppercase  text-[#A0A0A0] lg:absolute lg:left-[40.81vw] lg:top-[8.1vw] lg:whitespace-nowrap lg:text-left lg:text-[1.46vw]">
          Our Date and Location
        </p>

        <div className="mt-[3vw] text-left text-[#E2E2E2] lg:mt-0">
          <h2 className="text-[16.41vw] font-semibold uppercase leading-[1.05] lg:leading-[0.99] lg:text-[6.35vw]">
            Imah
            <br />
            Seniman
            <br />
            <span className="text-[16.41vw] font-normal leading-none lg:text-[6.35vw]">
              28.11.26
            </span>
          </h2>
          <p className="mt-[1vw] lg:mt-[0.6vw] font-overpass text-[3.59vw] font-light uppercase lg:whitespace-nowrap lg:text-[1.46vw]">
            Jl. Kolonel Masturi No. VIII, Kab. Bandung
          </p>
          <a
            href="#"
            className="mt-[0vw] lg:mt-[0.5vw] inline-block border-b border-[#E2E2E2] font-overpass text-[3.08vw] font-medium italic uppercase lg:text-[1.32vw]"
          >
            Google Maps
          </a>
        </div>

        {/* Gambar mobile */}
      <div className="relative left-1/2 mt-[3vw] h-[68vw] w-screen -translate-x-1/2 lg:hidden">
  <Image
    src="/images/Lincoln-Laurensia/EventOrder/RumahMobile.webp"
    alt="Imah Seniman"
    fill
    className="object-contain object-right"
  />
</div>

        {/* Gambar desktop (ikut flow, bukan absolute) */}
        <div className="hidden lg:relative lg:ml-[9.1vw] lg:block lg:h-[41.5vw] lg:w-[78.97vw] mt-[0.5vw]">
          <Image
            src="/images/Lincoln-Laurensia/EventOrder/RumahDekstop.webp"
            alt="Imah Seniman"
            fill
            className="object-contain object-right"
          />
        </div>

        {/* Daftar acara: tinggi otomatis mengikuti jumlah item */}
        <div className="relative z-10 mt-[10.5vw] flex flex-col gap-[3.8vw] lg:mt-[3.4vw] lg:gap-0">
          {schedule.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col lg:w-[19.84vw] ${
                index > 0 ? "lg:-mt-[0.6vw]" : ""
              } ${
                item.right
                  ? "items-end text-right lg:self-end"
                  : "items-start text-left lg:self-start"
              }`}
            >
              <p className="text-[6.15vw] font-light uppercase leading-none text-[#E2E2E2] lg:text-[2.12vw]">
                {item.title}
              </p>

              {item.note && (
                <p className="mt-[0.75vw] text-[4.1vw] italic leading-none text-[#E2E2E2] lg:mt-[0.25vw] lg:text-[1.32vw]">
                  {item.note}
                </p>
              )}

              <p
                className={`text-[12.31vw] font-medium leading-[1.05] text-[#E2E2E2] lg:text-[4.23vw] ${
                  item.note
                    ? "mt-[1.5vw] lg:mt-[0.45vw]"
                    : "mt-[1vw] lg:mt-[0.45vw]"
                }`}
              >
                {item.time}
                <br />
                <p className="-mt-[5px]" >WIB</p>
                
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventOrder;

// SEBELUM DI VW KAN
// import React from "react";
// import Image from "next/image";

// const schedule = [
//   { title: "Holy Matrimony", time: "10:30", note: "", right: false },
//   { title: "Tea Pai", time: "15:00", note: "", right: true },
//   { title: "Cocktail Party", time: "16:30", note: "", right: false },
//   {
//     title: "Dinner Reception",
//     time: "18:00",
//     note: "at manten ballroom",
//     right: true,
//   },
//   {
//     title: "After Party",
//     time: "21:00",
//     note: "at rirlungan hall",
//     right: false,
//   },
// ];

// const EventOrder = () => {
//   return (
//     <section
//       id="event-order"
//       className="relative z-10 w-full overflow-hidden bg-[#2F2F2F] px-6 py-12 font-poppins text-white lg:px-0 lg:py-0"
//     >
//       <div className="mx-auto w-full max-w-[420px] lg:relative lg:w-[891px] lg:max-w-none lg:pb-[80px] lg:pt-[117px]">
//         <p className="text-center text-[16px] uppercase tracking-wide text-[#A0A0A0] lg:absolute lg:left-[617px] lg:top-[130px] lg:whitespace-nowrap lg:text-left lg:text-[22px]">
//           Our Date and Location
//         </p>

//         <div className="mt-4 text-left text-[#E2E2E2] lg:mt-0">
//           <h2 className="text-[64px] font-semibold uppercase leading-[1.1] lg:text-[96px]">
//             Imah
//             <br />
//             Seniman
//             <br />
//             <span className="text-[64px] font-normal leading-none lg:text-[96px]">
//               28.11.26
//             </span>
//           </h2>
//           <p className="mt-3 font-overpass text-[14px] font-light uppercase lg:whitespace-nowrap lg:text-[22px]">
//             Jl. Kolonel Masturi No. VIII, Kab. Bandung
//           </p>
//           <a
//             href="#"
//             className="mt-2 inline-block border-b border-[#E2E2E2] font-overpass text-[12px] font-medium italic uppercase lg:text-[20px]"
//           >
//             Google Maps
//           </a>
//         </div>

//         {/* Gambar mobile */}
//         <div className="relative left-1/2 mt-6 aspect-[420/170] w-screen -translate-x-1/2 lg:hidden">
//           <Image
//             src="/images/Lincoln-Laurensia/EventOrder/RumahMobile.webp"
//             alt="Imah Seniman"
//             fill
//             className="object-contain object-right"
//           />
//         </div>

//         {/* Gambar desktop (ikut flow, bukan absolute) */}
//         <div className="hidden lg:relative lg:ml-[150px] lg:block lg:h-[713px] lg:w-[1194px]">
//           <Image
//             src="/images/Lincoln-Laurensia/EventOrder/RumahDekstop.webp"
//             alt="Imah Seniman"
//             fill
//             className="object-contain object-right"
//           />
//         </div>

//         {/* Daftar acara: tinggi otomatis mengikuti jumlah item */}
//         <div className="relative z-10 mt-10 flex flex-col gap-8 lg:-mt-[50px] lg:gap-0">
//           {schedule.map((item, index) => (
//             <div
//               key={item.title}
//               className={`flex flex-col lg:w-[300px] ${
//                 index > 0 ? "lg:-mt-[25px]" : ""
//               } ${
//                 item.right
//                   ? "items-end text-right lg:self-end"
//                   : "items-start text-left lg:self-start"
//               }`}
//             >
//               <p className="text-[24px] font-light uppercase text-[#E2E2E2] lg:text-[32px]">
//                 {item.title}
//               </p>
//               {item.note && (
//                 <p className="text-[16px] italic text-[#E2E2E2] lg:text-[20px]">
//                   {item.note}
//                 </p>
//               )}
//               <p className="mt-1 text-[48px] font-medium leading-[1.05] text-[#E2E2E2] lg:text-[64px]">
//                 {item.time}
//                 <br />
//                 WIB
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EventOrder;
