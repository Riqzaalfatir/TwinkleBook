import React from "react";
import Image from "next/image";

const Profile = () => {
  return (
    <section
      id="profile"
      className="relative w-full flex flex-col items-center py-[8.8vw] lg:py-[3.97vw]"
    >
      <div className="relative w-[100%] lg:w-[66%]">
        <Image
          src="/images/David-Natasha/Profile/temp2.webp"
          alt="Profile Frame"
          width={1554}
          height={4096}
          className="w-full h-auto lg:hidden"
        />
        <Image
          src="/images/David-Natasha/Profile/temp3.webp"
          alt="Profile Frame"
          width={1554}
          height={4096}
          className="w-full h-auto hidden lg:block"
        />

        <div className="absolute inset-0 flex flex-col items-center text-center mt-[34.4vw] lg:mt-[18.7vw]">
          <p className="font-cormorant-garamond text-[3.85vw] lg:text-[1.59vw] text-[#021125]">
            By the Grace of God
          </p>

          <p className="font-cormorant-garamond text-[4.10vw] lg:text-[1.59vw] font-semibold text-[#021125] mt-[6.5vw] lg:mt-[3.57vw] leading-[4.93vw] lg:leading-[1.98vw]">
            Mr. Andy Solaiman Susetio and
            <br />
            Mrs. Natalia Chrismastuti
          </p>

          <p className="font-cormorant-garamond text-[3.85vw] lg:text-[1.59vw] italic text-[#021125] my-[4.3vw] lg:my-[1.59vw]">
            together with
          </p>

          <p className="font-cormorant-garamond text-[4.10vw] lg:text-[1.59vw] font-semibold text-[#021125] leading-[4.93vw] lg:leading-[1.98vw]">
            Mr. Stefanie Natasya and
            <br />
            Mrs. Agus Lugiman
          </p>

          <p className="font-cormorant-garamond leading-[4.93vw] lg:leading-[1.98vw] text-[3.85vw] lg:text-[1.59vw] text-[#021125] mt-[7.5vw] lg:mt-[3.8vw]">
            Cordially request the honour of your
            <br className="lg:hidden" />
            presence at the <br className="hidden lg:block" /> marriage of their
            <br />
            son and daughter
          </p>

          <h2
            className="font-sackers-italic-script text-[10.26vw] lg:text-[6.35vw] leading-[8.62vw] text-[#021125] lg:leading-[4.6vw] mt-[8vw] lg:mt-[4.2vw] [--stroke-w:0.3px] lg:[--stroke-w:0.64px]"
            style={{ WebkitTextStroke: "var(--stroke-w) #021125" }}
          >
            Prawira David <br />
            Aldridge Susetio
          </h2>

          <p
            className="font-sackers-italic-script text-[12.31vw] lg:text-[6.78vw] text-[#021125] mt-[0.4vw] lg:mt-[1.49vw] [--stroke-w:0.3px] lg:[--stroke-w:0.64px]"
            style={{ WebkitTextStroke: "var(--stroke-w) #021125" }}
          >
            &
          </p>

          <h2
            className="font-sackers-italic-script text-[10.26vw] lg:text-[6.35vw] leading-[8.62vw] lg:leading-[4.6vw] text-[#021125] mt-[2.4vw] 
            lg:mt-[3.1vw] [--stroke-w:0.3px] lg:[--stroke-w:0.64px]"
            style={{ WebkitTextStroke: "var(--stroke-w) #021125" }}
          >
            Stefanie Natasya
          </h2>

          <p className="font-cormorant-garamond text-[4.10vw] text-[#021125] lg:text-[1.59vw] mt-[9.5vw] lg:mt-[5.9vw] leading-[4.93vw] lg:leading-[1.98vw]">
            Our joy will be complete with
            <br />
            your presence and blessings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;

// UKURAN SEBELUM DI UBAH KE VW
// import React from "react";
// import Image from "next/image";

// const Profile = () => {
//   return (
//     <section className="relative w-full flex flex-col items-center py-[36.5px]">
//       <div className="relative w-[100%]">
//         <Image
//           src="/images/David-Natasha/Profile/FRAME-compressed.webp"
//           alt="Profile Frame"
//           width={1554}
//           height={4096}
//           className="w-full h-auto"
//         />

//         <div className="absolute inset-0 flex flex-col items-center text-center mt-[140px]">
//           <p className="font-cormorant-garamond text-[15px] text-[#021125]">
//             By the Grace of God
//           </p>

//           <p className="font-cormorant-garamond text-[16px] font-semibold text-[#021125] mt-[80px]">
//             Mr. Andy Solaiman Susetio and
//             <br />
//             Mrs. Natalia Chrismastuti
//           </p>

//           <p className="font-cormorant-garamond text-[15px] italic text-[#021125] mt-[8px]">
//             together with
//           </p>

//           <p className="font-cormorant-garamond text-[16px] font-semibold text-[#021125] mt-[8px]">
//             Mr. Stefanie Natasya and
//             <br />
//             Mrs. Agus Lugiman
//           </p>

//           <p className="font-cormorant-garamond leading-[18px] text-[15px] text-[#021125] mt-[10px]">
//             Cordially request the honour of your
//             <br />
//             presence at the marriage of their
//             <br />
//             son and daughter
//           </p>

//           <h2
//             className="font-sackers-italic-script text-[40px] leading-none text-[#021125] mt-[10px]"
//             style={{ WebkitTextStroke: "0.3px #021125" }}
//           >
//             Prawira David <br />
//             Aldridge Susetio
//           </h2>

//           <p
//             className="font-sackers-italic-script text-[48px] text-[#021125] mt-[4px]"
//             style={{ WebkitTextStroke: "0.3px #021125" }}
//           >
//             &
//           </p>

//           <h2
//             className="font-sackers-italic-script text-[40px] text-[#021125] mt-[4px]"
//             style={{ WebkitTextStroke: "0.3px #021125" }}
//           >
//             Stefanie Natasya
//           </h2>

//           <p className="font-cormorant-garamond text-[16px] text-[#021125] mt-[10px] leading-[18px]">
//             Our joy will be complete with
//             <br />
//             your presence and blessings.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Profile;
