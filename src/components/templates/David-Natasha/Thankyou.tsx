import React from "react";
import Image from "next/image";

const Thankyou = () => {
  return (
    <section className="relative w-full z-10">
      <Image
        src="/images/David-Natasha/Thankyou/AsetAtasM.webp"
        alt="flower decoration"
        width={950}
        height={950}
        className="absolute -top-[0vw] -left-[0vw] w-[45.5vw] h-auto pointer-events-none z-20"
      />

      <Image
        src="/images/David-Natasha/Thankyou/AsetBawahM.webp"
        alt="flower decoration"
        width={650}
        height={650}
        className="absolute -bottom-[0vw] -right-[0vw] w-[156vw] h-auto pointer-events-none z-20"
      />

      <div className="relative z-[15] flex flex-col items-center text-center pt-[76vw]">
        <h1
          className="font-sackers-italic-script text-[13.33vw] text-[#021125]"
          style={{ WebkitTextStroke: "0.3px #021125" }}
        >
          Thank You
        </h1>
        <p className="font-cormorant-garamond text-[3.59vw] text-[#021125] mt-[3.8vw] leading-[5.13vw]">
          for being part of this golden celebration. <br />
          We look forward to celebrating this special <br />
          milestone with you.
        </p>
        <Image
          src="/images/David-Natasha/Thankyou/Provite.webp"
          alt="Provite"
          width={250}
          height={250}
          className="w-[22.82vw] h-auto mt-[59vw] mb-[25.38vw]"
        />
      </div>
    </section>
  );
};

export default Thankyou;

// ukuran sebelum di vw kan
// import React from "react";
// import Image from "next/image";

// const Thankyou = () => {
//   return (
//     <section className="relative w-full bg-[url('/images/David-Natasha/EventOrder/Kertas.webp')] bg-no-repeat [background-size:100%_100%] z-10">
//       <Image
//         src="/images/David-Natasha/Thankyou/AsetAtasKiriM.webp"
//         alt="flower decoration"
//         width={450}
//         height={450}
//         className="absolute -top-[100px] -left-[250px] w-[500px] h-auto pointer-events-none z-20"
//       />

//       <Image
//         src="/images/David-Natasha/Thankyou/AsetBawahKanannM.webp"
//         alt="flower decoration"
//         width={650}
//         height={650}
//         className="absolute -bottom-[0px] -right-[0px] w-[400px] h-auto pointer-events-none z-20"
//       />

//       <div className="relative z-[15] flex flex-col items-center text-center pt-[313px]">
//         <h1
//           className="font-sackers-italic-script text-[52px] text-[#021125]"
//           style={{ WebkitTextStroke: "0.3px #021125" }}
//         >
//           Thank You
//         </h1>
//         <p className="font-cormorant-garamond text-[14px] text-[#021125] mt-[20px] leading-[5.13vw]">
//           for being part of this golden celebration. <br />
//           We look forward to celebrating this special <br />
//           milestone with you.
//         </p>
//         <Image
//           src="/images/David-Natasha/Thankyou/Provite.webp"
//           alt="Provite"
//           width={250}
//           height={250}
//           className="w-[89px] h-auto mt-[218px] mb-[60px]"
//         />
//       </div>
//     </section>
//   );
// };

// export default Thankyou;
