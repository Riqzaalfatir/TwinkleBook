import React from "react";
import Image from "next/image";

const EventOrder = () => {
  return (
    <section id="eventorder" className="relative w-full z-10">
      <Image
        src="/images/David-Natasha/EventOrder/BungaAtasA.webp"
        alt="flower decoration"
        width={500}
        height={500}
        className="absolute -top-[0vw] -left-[0vw] w-[71vw] h-auto pointer-events-none z-20"
      />

      <Image
        src="/images/David-Natasha/EventOrder/AsetBawahM.webp"
        alt="flower decoration"
        width={650}
        height={650}
        className="absolute -bottom-[0vw] -right-[0vw] w-[73vw] h-auto pointer-events-none z-20"
      />

      <div className="relative z-[15] flex flex-col items-center text-center pt-[22.4vw] pb-[29.49vw]">
        <h1
          className="font-sackers-italic-script text-[13.33vw] text-[#021125]"
          style={{ WebkitTextStroke: "0.3px #021125" }}
        >
          Event Detail
        </h1>

        <div className="flex flex-col items-center justify-center leading-none mt-[4.5vw]">
          <Image
            src="/images/David-Natasha/EventOrder/GIDAGOO.webp"
            alt="GII HOK IM TONG Dago"
            width={450}
            height={450}
            className="w-[67.69vw] h-auto"
          />

          <h2 className="font-cormorant-garamond text-[5.13vw] font-bold text-[#021125] tracking-wide mt-[10.26vw]">
            HOLY MATRIMONY
          </h2>

          <p className="font-cormorant-garamond font-medium text-[4.62vw] text-[#021125] mt-[5.13vw]">
            10.30 WIB
          </p>

          <p className="font-cormorant-garamond text-[3.85vw] font-bold text-[#021125] mt-[6.1vw] leading-[5.13vw]">
            GII HOK IM TONG - DAGO
          </p>

          <p className="font-cormorant-garamond text-[3.59vw] text-[#021125] mt-[1.4vw] font-medium leading-[4.13vw]">
            Jl. Cikapayang No. 2-4, Kota Bandung
          </p>

          <a
            href="https://maps.app.goo.gl/4E2uyDg52DDiW5hn7"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[6.1vw] w-[41.03vw] h-[7.69vw] bg-[#021125] text-white text-[3.59vw] tracking-wide font-medium rounded-[1.54vw] font-cormorant-garamond flex items-center justify-center"
          >
            GOOGLE MAPS
          </a>
        </div>

        <div className="flex flex-col items-center justify-center leading-none mt-[13.08vw]">
          <Image
            src="/images/David-Natasha/EventOrder/International.webp"
            alt="Intercontinental Bandung Dago Pakar"
            width={450}
            height={450}
            className="w-[67.69vw] h-auto"
          />

          <h2 className="font-cormorant-garamond text-[5.13vw] font-bold text-[#021125] mt-[10.26vw]">
            WEDDING RECEPTION
          </h2>

          <p className="font-cormorant-garamond font-medium text-[4.62vw] text-[#021125] mt-[5.13vw]">
            18.00 WIB
          </p>

          <p className="font-cormorant-garamond text-[3.85vw] font-bold text-[#021125] mt-[6.1vw] leading-[5.13vw]">
            INTERCONTINENTAL BANDUNG <br />
            DAGO PAKAR
          </p>

          <p className="font-cormorant-garamond font-medium text-[3.59vw] text-[#021125] mt-[1.4vw] leading-[4.13vw]">
            Jl. Resor Dago Pakar Raya 2B
            <br />
            Resor Dago Pakar, Kota Bandung
          </p>

          <a
            href="https://maps.app.goo.gl/QPdiNEsZX5cvHibA8"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[6.1vw] w-[41.03vw] h-[7.69vw] bg-[#021125] text-white text-[3.59vw] font-medium tracking-wide rounded-[1.54vw] font-cormorant-garamond flex items-center justify-center"
          >
            GOOGLE MAPS
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventOrder;










// // UKURAN SEBELUM DI KE VW KAN
// import React from "react";
// import Image from "next/image";

// const EventOrder = () => {
//   return (
//     <section className="relative w-full z-10">
//       <Image
//         src="/images/David-Natasha/EventOrder/AsetAtasKiriM.webp"
//         alt="flower decoration"
//         width={450}
//         height={450}
//         className="absolute -top-[170px] -left-[150px] w-[500px] h-auto pointer-events-none z-20"
//       />

//       <Image
//         src="/images/David-Natasha/EventOrder/AsetBawahKananM.webp"
//         alt="flower decoration"
//         width={650}
//         height={650}
//         className="absolute -bottom-[170px] -right-[170px] w-[500px] h-auto pointer-events-none z-20"
//       />

//       <div className="relative z-[15] flex flex-col items-center text-center pt-[98px] pb-[115px]">
//         <h1 className="font-sackers-italic-script text-[52px] text-[#021125]" style={{ WebkitTextStroke: "0.3px #021125" }}>
//           Event Detail
//         </h1>

//         <div className="flex flex-col items-center justify-center leading-none mt-[32px]">
//           <Image
//             src="/images/David-Natasha/EventOrder/GIDAGOO.webp"
//             alt="GII HOK IM TONG Dago"
//             width={450}
//             height={450}
//             className="w-[264px] h-auto"
//           />

//           <h2 className="font-cormorant-garamond text-[20px] font-bold text-[#021125] tracking-wide mt-[40px]">
//             HOLY MATRIMONY
//           </h2>

//           <p className="font-cormorant-garamond font-medium text-[18px] text-[#021125] mt-[20px]">
//             10.30 WIB
//           </p>

//           <p className="font-cormorant-garamond text-[15px] font-bold text-[#021125] mt-[20px]">
//             GII HOK IM TONG - DAGO
//           </p>

//           <p className="font-cormorant-garamond text-[14px] text-[#021125] mt-[4px] font-medium">
//             Jl. Cikapayang No. 2-4, Kota Bandung
//           </p>

//           <a
//             href="#"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-[20px] w-[160px] h-[30px] bg-[#021125] text-white text-[14px] font-medium rounded-[6px] font-cormorant-garamond flex items-center justify-center"
//           >
//             GOOGLE MAPS
//           </a>
//         </div>

//         <div className="flex flex-col items-center justify-center leading-none mt-[51px]">
//           <Image
//             src="/images/David-Natasha/EventOrder/International.webp"
//             alt="Intercontinental Bandung Dago Pakar"
//             width={450}
//             height={450}
//             className="w-[264px] h-auto"
//           />

//           <h2 className="font-cormorant-garamond text-[20px] font-bold text-[#021125] mt-[40px]">
//             WEDDING RECEPTION
//           </h2>

//           <p className="font-cormorant-garamond font-medium text-[18px] text-[#021125] mt-[20px]">
//             18.00 WIB
//           </p>

//           <p className="font-cormorant-garamond text-[15px] font-bold text-[#021125] mt-[20px]">
//             INTERCONTINENTAL BANDUNG br
//             DAGO PAKAR
//           </p>

//           <p className="font-cormorant-garamond font-medium text-[14px] text-[#021125] mt-[4px]">
//             Jl. Resor Dago Pakar Raya 2B
//             <br />
//             Resor Dago Pakar, Kota Bandung
//           </p>

//           <a
//             href="#"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-[20px] w-[160px] h-[30px] bg-[#021125] text-white text-[14px] font-medium tracking-wide rounded-[6px] font-cormorant-garamond flex items-center justify-center"
//           >
//             GOOGLE MAPS
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EventOrder;
