import React from "react";
import Image from "next/image";

const messages = [
  { name: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, nisi laborum" },
  {
    name: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, non veniam commodo ex qui.",
  },
];

const Wishes = () => {
  return (
    <section
      id="wishes"
      className="relative z-10 flex w-full flex-col items-center bg-white px-[6.15vw] py-[20.65vw] font-poppins text-[#2F2F2F] lg:px-[1.59vw] lg:py-[8.3vw]"
    >
      <h2 className="font-poppins text-[8.72vw] lg:font-semibold uppercase leading-none lg:text-[2.78vw] text-[#2F2F2F]">
        Your Wishes
      </h2>

      <div className="mt-[8.2vw] lg:mt-[3.9vw] flex w-full max-w-[73.08vw] flex-col gap-[4.1vw] lg:gap-[1.65vw] lg:max-w-[39.29vw]">
        <input
          type="text"
          placeholder="[Guest Name]"
          className="h-[7.69vw] w-full rounded-[2.56vw] border border-[#2F2F2F] bg-transparent px-[3.33vw] lg:px-[1.65vw] text-[3.59vw] outline-none placeholder:text-[#2F2F2F] lg:h-[2.78vw] lg:rounded-[0.66vw] lg:text-[1.32vw]"
        />

        <textarea
          placeholder="Leave your wishes here."
          className="h-[27.18vw] w-full resize-none rounded-[2.56vw] lg:rounded-[1.32vw] border border-[#2F2F2F] bg-transparent px-[3.33vw] py-[2.05vw] lg:px-[1.65vw] lg:py-[0.66vw] text-[3.59vw] outline-none placeholder:text-[#2F2F2F]/50 lg:h-[13.03vw] lg:text-[1.32vw]"
        />

        <button
          type="button"
          className="flex h-[7.69vw] w-full items-center justify-center gap-[2vw] lg:gap-[0.5vw] rounded-[2.56vw] lg:rounded-[0.66vw] bg-[#2F2F2F] text-[3.59vw] uppercase text-white lg:h-[2.78vw] lg:text-[1.19vw]"
        >
          <Image
            src="/images/Lincoln-Laurensia/Wishes/Panah.png"
            alt="Kirim"
            width={15}
            height={19}
            className="h-[3.59vw] w-[4.36vw] object-cover lg:h-[1.65vw] lg:w-[1.65vw]"
          />
          Send
        </button>

        <div className="h-[76.92vw] w-full overflow-y-auto rounded-[2.56vw] lg:rounded-[0.66vw] border border-[#2F2F2F] px-[3.33vw] py-[4.4vw] lg:px-[1.65vw] lg:py-[1.28vw] lg:h-[31.68vw]">
          {messages.map((item, index) => (
            <div key={index}>
              <p className="text-[3.59vw] font-bold lg:text-[1.46vw]">
                {item.name}
              </p>
              <p className="mt-[0.2vw] lg:mt-[0.5vw] text-[3.59vw] lg:text-[1.46vw]">
                {item.text}
              </p>
              {index !== messages.length - 1 && (
                <div className="mt-[1.33vw] mb-[1.75vw] lg:mt-[1.15vw] lg:mb-[1.15vw]  border-t border-[#2F2F2F]/60" />
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          className="flex h-[7.69vw] w-full items-center justify-center gap-[1.79vw] lg:gap-[0.66vw] rounded-[2.56vw] lg:rounded-[0.66vw] bg-[#2F2F2F] text-[3.59vw] uppercase text-white lg:h-[2.78vw] lg:text-[1.19vw]"
        >
          <Image
            src="/images/Lincoln-Laurensia/Wishes/Pesan.png"
            alt="Pesan"
            width={18}
            height={20}
            className="h-[4.1vw] w-[4.62vw] object-cover lg:h-[2.18vw] lg:w-[1.79vw]"
          />
          View all messages
        </button>
      </div>
    </section>
  );
};

export default Wishes;



// SEBELUM DI VW KAN
// import React from "react";
// import Image from "next/image";

// const messages = [
//   { name: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, nisi laborum" },
//   {
//     name: "Lorem Ipsum",
//     text: "Lorem ipsum dolor sit amet, non veniam commodo ex qui.",
//   },
// ];

// const Wishes = () => {
//   return (
//     <section
//       id="wishes"
//       className="relative z-10 flex w-full flex-col items-center bg-white px-6 py-[80px] font-poppins text-[#2F2F2F] lg:py-[120px]"
//     >
//       <h2 className="font-poppins text-[34px] lg:font-semibold uppercase leading-none lg:text-[42px] text-[#2F2F2F]">
//         Your Wishes
//       </h2>

//       <div className="mt-[25px] lg:mt-[50px] flex w-full max-w-[285px] flex-col gap-[16px] lg:gap-[25px] lg:max-w-[594px]">
//         <input
//           type="text"
//           placeholder="[Guest Name]"
//           className="h-[30px] w-full rounded-[10px] border border-[#2F2F2F] bg-transparent px-[13px] lg:px-[25px] text-[14px] outline-none placeholder:text-[#2F2F2F] lg:h-[42px] lg:text-[20px]"
//         />

//         <textarea
//           placeholder="Leave your wishes here."
//           className="h-[106px] w-full resize-none rounded-[10px] lg:rounded-[20px] border border-[#2F2F2F] bg-transparent px-[13px] py-[8px] lg:px-[25px] lg:py-[10px] text-[14px] outline-none placeholder:text-[#2F2F2F]/50 lg:h-[197px] lg:text-[20px]"
//         />

//         <button
//           type="button"
//           className="flex h-[30px] w-full items-center justify-center gap-[4px] lg:gap-[1px] rounded-[10px] bg-[#2F2F2F] text-[14px]  uppercase text-white lg:h-[42px] lg:text-[18px]"
//         >
//           <Image
//             src="/images/Lincoln-Laurensia/Wishes/Panah.png"
//             alt="Kirim"
//             width={15}
//             height={19}
//             className="h-[14px] w-[17px] object-cover lg:h-[25px] lg:w-[25px]"
//           />
//           Send
//         </button>

//         <div className="h-[300px] w-full overflow-y-auto rounded-[10px] border border-[#2F2F2F] px-[13px] py-[18px] lg:px-[25px] lg:py-[20px] lg:h-[479px] ">
//           {messages.map((item, index) => (
//             <div key={index}>
//               <p className="text-[14px] font-bold lg:text-[22px]">
//                 {item.name}
//               </p>
//               <p className="mt-[7px] lg:mt-[10px] text-[14px] lg:text-[22px]">
//                 {item.text}
//               </p>
//               {index !== messages.length - 1 && (
//                 <div className="mt-[5.17px] mb-[6.83px] lg:mt-0 lg:mb-0 lg:my-[20px] border-t border-[#2F2F2F]/60" />
//               )}
//             </div>
//           ))}
//         </div>

//         <button
//           type="button"
//           className="flex h-[30px] w-full items-center justify-center gap-[7px] lg:gap-[10px] rounded-[10px] bg-[#2F2F2F] text-[14px] uppercase text-white lg:h-[42px] lg:text-[18px]"
//         >
//           <Image
//             src="/images/Lincoln-Laurensia/Wishes/Pesan.png"
//             alt="Pesan"
//             width={18}
//             height={20}
//             className="h-[16px] w-[18px] object-cover lg:h-[33px] lg:w-[27px]"
//           />
//           See all messages
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Wishes;
