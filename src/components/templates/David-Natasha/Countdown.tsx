"use client";

import React from "react";
import Countdown from "react-countdown";

const TARGET_DATE = new Date("2026-10-10T00:00:00");

const CountdownSection = () => {
  return (
    <section id="countdown" className="relative w-full bg-[#080225] flex flex-col items-center pt-[9vw] pb-[10vw] z-30">
      <h2 className="font-cormorant-garamond font-semibold text-[6.15vw] text-white">
        SATURDAY, 10 October 2026
      </h2>

      <Countdown
        date={TARGET_DATE}
        renderer={({ days, hours, minutes, seconds }) => (
          <div className="flex flex-row items-center gap-[3.84vw] mt-[5vw]">
            <div className="flex flex-col items-center justify-center w-[18.82vw] h-[18.43vw] bg-white rounded-[1.54vw] gap-[2vw]">
              <span className="font-cormorant-garamond text-[10.75vw] text-[#080225] leading-none -mt-[2.1vw]">
                {String(days).padStart(2, "0")}
              </span>
              <span className="font-cormorant-garamond text-[3.08vw] text-[#080225]">
                Days
              </span>
            </div>

            <div className="flex flex-col items-center justify-center w-[18.82vw] h-[18.43vw] bg-white rounded-[1.54vw] gap-[2vw]">
              <span className="font-cormorant-garamond text-[10.75vw] text-[#080225] leading-none -mt-[2.1vw]">
                {String(hours).padStart(2, "0")}
              </span>
              <span className="font-cormorant-garamond text-[3.08vw] text-[#080225]">
                Hour
              </span>
            </div>

            <div className="flex flex-col items-center justify-center w-[18.82vw] h-[18.43vw] bg-white rounded-[1.54vw] gap-[2vw]">
              <span className="font-cormorant-garamond text-[10.75vw] text-[#080225] leading-none -mt-[2.1vw]">
                {String(minutes).padStart(2, "0")}
              </span>
              <span className="font-cormorant-garamond text-[3.08vw] text-[#080225]">
                Minutes
              </span>
            </div>

            <div className="flex flex-col items-center justify-center w-[18.82vw] h-[18.43vw] bg-white rounded-[1.54vw] gap-[2vw]">
              <span className="font-cormorant-garamond text-[10.75vw] text-[#080225] leading-none -mt-[2.1vw]">
                {String(seconds).padStart(2, "0")}
              </span>
              <span className="font-cormorant-garamond text-[3.08vw] text-[#080225]">
                Seconds
              </span>
            </div>
          </div>
        )}
      />
    </section>
  );
};

export default CountdownSection;






// UKURAN SEBELUM DI KE VW KAN
// import React from "react";
// import Image from "next/image";

// const Countdown = () => {
//   return (
//     <section className="relative w-full bg-[#080225] flex flex-col items-center py-[30px] z-30">
//       <h2 className="font-cormorant-garamond font-semibold text-[24px] text-white tracking-wide">
//         SATURDAY, 10 October 2026
//       </h2>

      

//       <div className="flex flex-row items-center gap-[14.98px] mt-[14px]">
//         <div className="flex flex-col items-center justify-center  w-[73.39px] h-[71.89px] bg-white rounded-[6px] gap-[10px]">
//           <span className="font-cormorant-garamond text-[41.94px] text-[#080225] leading-none -mt-[10px]">
//             59
//           </span>
//           <span className="font-cormorant-garamond text-[12px] text-[#080225]">
//             Days
//           </span>
//         </div>

//         <div className="flex flex-col items-center justify-center w-[73.39px] h-[71.89px] bg-white rounded-[6px]">
//           <span className="font-cormorant-garamond text-[41.94px] text-[#080225] leading-none">
//             59
//           </span>
//           <span className="font-cormorant-garamond text-[12px] text-[#080225]">
//             Hour
//           </span>
//         </div>

//         <div className="flex flex-col items-center justify-center w-[73.39px] h-[71.89px] bg-white rounded-[6px]">
//           <span className="font-cormorant-garamond text-[41.94px] text-[#080225] leading-none">
//             59
//           </span>
//           <span className="font-cormorant-garamond text-[12px] text-[#080225]">
//             Minutes
//           </span>
//         </div>

//         <div className="flex flex-col items-center justify-center w-[73.39px] h-[71.89px] bg-white rounded-[6px]">
//           <span className="font-cormorant-garamond text-[41.94px] text-[#080225] leading-none">
//             59
//           </span>
//           <span className="font-cormorant-garamond text-[12px] text-[#080225]">
//             Seconds
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Countdown;
