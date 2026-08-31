"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "../../../lib/animation";
import { dummyPesan, PesanItem } from "./data/wishes";
import NotifModal from "../../../popup/NotifModal";
import WishesCard from "./popup/WishesCard";

const Wishes = () => {
  const [nama, setNama] = useState<string>("");
  const [pesan, setPesan] = useState<string>("");
  const [showAll, setShowAll] = useState<boolean>(false);
  const [notifType, setNotifType] = useState<string>("");
  const [selectedMessage, setSelectedMessage] = useState<PesanItem | null>(
    null,
  );

  const [pesanList] = useState<PesanItem[]>(dummyPesan);

  const handleSubmit = () => {
    if (!nama.trim() || !pesan.trim()) {
      setNotifType("incomplete_wishes");
      return;
    }

    console.log("Kirim:", nama, pesan);
  };

  return (
    <section
      id="wishes"
      className="relative w-full flex flex-col items-center py-[16vw] lg:py-[12.15vw]"
    >
      <div
        className="relative w-[100%] lg:w-[66%]"
      >
        <Image
          src="/images/David-Natasha/Wishes/Frameee.webp"
          alt="Wishes Frame"
          width={1554}
          height={4096}
          className="w-full h-auto lg:hidden"
        />
        <Image
          src="/images/David-Natasha/Wishes/FrameD.webp"
          alt="Wishes Frame"
          width={1554}
          height={4096}
          className="w-full h-auto hidden lg:block"
        />

        <div className="absolute inset-0 flex flex-col items-center mt-[34.5vw] lg:mt-[15.98vw] ml-[1vw] lg:-ml-[0.2vw]">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-sackers-italic-script text-[13.33vw] lg:text-[5.29vw] text-[#021125] [--stroke-w:0.3px] lg:[--stroke-w:0.53px]"
            style={{ WebkitTextStroke: "var(--stroke-w) #021125" }}
          >
            Your Wishes
          </motion.h1>

          <div className="flex flex-col gap-[5.13vw] lg:gap-[1.72vw] mt-[3.9vw] lg:mt-[1.5vw] w-[67.44vw] lg:w-[32.71vw]">
            <motion.input
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              type="text"
              value={nama}
              placeholder="[Guest Name]"
              onChange={(e) => setNama(e.target.value)}
              className="w-full text-[#021125] font-cormorant-garamond bg-transparent border-[0.5px] text-[3.59vw] lg:text-[1.59vw] border-[#021125] px-[3.08vw] lg:px-[1.35vw] h-[8.46vw] lg:h-[2.78vw] rounded-[1.54vw] lg:rounded-[0.66vw] outline-none placeholder:text-[#021125]/50"
            />

            <motion.textarea
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              value={pesan}
              placeholder="Leave your wishes here."
              onChange={(e) => setPesan(e.target.value)}
              className="w-full text-[#021125] font-cormorant-garamond bg-transparent text-[3.59vw] lg:text-[1.59vw] border-[0.5px] border-[#021125] px-[3.08vw] py-[1.54vw] lg:py-[0.8vw] lg:px-[1.35vw] h-[15.38vw] lg:h-[13.03vw] rounded-[1.54vw] lg:rounded-[1.32vw] outline-none placeholder:text-[#021125]/30 resize-none"
            />

            <motion.button
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              type="button"
              onClick={handleSubmit}
              className="bg-[#021125] rounded-[1.54vw] lg:rounded-[0.66vw] h-[8.46vw] lg:h-[2.78vw] text-[3.59vw] lg:text-[1.06vw] font-cormorant-garamond uppercase flex items-center justify-center gap-[2.56vw] lg:gap-[0.46vw] text-white transition-colors duration-300 hover:bg-[#0a1f3d]"
            >
              <Image
                src="/images/David-Natasha/Wishes/Panah.png"
                alt="Kirim"
                width={50}
                height={50}
                className="object-cover w-[4.10vw] h-auto lg:w-[1.46vw]"
              />
              Send
            </motion.button>

            {/* PESAN */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className={`w-full h-[97.95vw] lg:h-[36.44vw] overflow-y-auto rounded-[1.54vw] lg:rounded-[0.66vw] ${
                showAll ? "bg-transparent" : "border border-[#021125]"
              }`}
            >
              {!showAll ? (
                <div className="px-[3.08vw] lg:px-[1.35vw] py-[5.5vw] lg:py-[1.46vw]">
                  {pesanList.map((item, index, array) => (
                    <div key={item.id}>
                      <p className="text-[#021125] font-cormorant-garamond text-[3.59vw] lg:text-[1.59vw] font-bold mb-[0.4vw] lg:mb-[0.2vw]">
                        {item.nama}
                      </p>

                      <p className="text-[#021125] font-cormorant-garamond text-[3.59vw] lg:text-[1.59vw]">
                        {item.pesan}
                      </p>

                      {index !== array.length - 1 && (
                        <div className="border-t-[0.03vw] border-[#021125] mt-[2.95vw] lg:mt-[0.50vw] mb-[3.08vw] lg:mb-[1.26vw]" />
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full px-[0.51vw] lg:px-[0.26vw] py-[1.54vw] lg:py-[0.40vw]">
                  <div className="grid grid-cols-2 gap-[3.08vw] lg:gap-[1.06vw]">
                    {pesanList.map((item, index) => {
                      const initials = item.nama
                        .split(" ")
                        .filter(Boolean)
                        .map((word) => word[0])
                        .join("")
                        .toUpperCase()
                        .slice(0, 2);

                      return (
                        <motion.div
                          key={item.id}
                          variants={fadeUp}
                          initial="hidden"
                          animate="show"
                          transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: index * 0.05,
                          }}
                          onClick={() => setSelectedMessage(item)}
                          className="group relative overflow-hidden rounded-[2.56vw] lg:rounded-[0.79vw] border border-[#021125]/30 bg-white flex flex-col cursor-pointer shadow-[0_2px_6px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:border-[#021125] transition-[box-shadow,border-color] duration-300"
                        >
                          <div className="absolute top-0 left-0 right-0 h-[0.77vw] lg:h-[0.26vw] bg-[#021125]" />

                          <div className="p-[3.08vw] lg:p-[1.06vw] flex-1 flex flex-col justify-between">
                            <p className="font-sackers-italic-script text-[6.67vw] lg:text-[2.12vw] text-[#021125]/25 leading-none mb-[0.51vw] lg:mb-[0.26vw] group-hover:text-[#021125]/40 transition-colors">
                              &quot;
                            </p>

                            <p className="font-cormorant-garamond text-[3.08vw] lg:text-[0.93vw] text-[#021125] text-left line-clamp-4 leading-[4.36vw] lg:leading-[1.32vw] mb-[1.03vw] lg:mb-[0.53vw]">
                              {item.pesan}
                            </p>

                            <div className="w-[2.05vw] lg:w-[1.59vw] h-[0.26vw] lg:h-[0.13vw] bg-[#021125]/40 rounded-full" />
                          </div>

                          <div className="bg-[#021125]/8 px-[3.59vw] lg:px-[1.06vw] py-[2.56vw] lg:py-[0.66vw] flex items-center gap-[2.56vw] lg:gap-[0.66vw] border-t border-[#021125]/15">
                            <div className="w-[7.18vw] lg:w-[2.12vw] h-[7.18vw] lg:h-[2.12vw] rounded-full bg-white flex items-center justify-center flex-shrink-0 border border-[#021125]/25">
                              <p className="text-[#021125] text-[2.82vw] lg:text-[0.79vw] font-cormorant-garamond font-bold">
                                {initials || "?"}
                              </p>
                            </div>

                            <p className="text-[#021125] text-[3.08vw] lg:text-[0.86vw] font-cormorant-garamond font-semibold truncate flex-1 tracking-wide">
                              {item.nama}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>

            <motion.button
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="bg-[#021125] rounded-[1.54vw] lg:rounded-[0.66vw] h-[8.46vw] lg:h-[2.78vw] text-[3.59vw] lg:text-[1.06vw] font-cormorant-garamond uppercase flex items-center justify-center gap-[2.34vw] lg:gap-[0.68vw] text-white transition-colors duration-300 hover:bg-[#0a1f3d]"
            >
              <Image
                src="/images/David-Natasha/Wishes/Pesan.png"
                alt="Pesan"
                width={50}
                height={50}
                className="object-cover w-[4.36vw] h-auto lg:w-[1.63vw]"
              />
              {showAll ? "Back" : "View all messages"}
            </motion.button>
          </div>
        </div>
      </div>

      {notifType && (
        <NotifModal type={notifType} onClose={() => setNotifType("")} />
      )}

      <AnimatePresence>
        {selectedMessage && (
          <WishesCard
            data={selectedMessage}
            onClose={() => setSelectedMessage(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Wishes;

// UKURAN SEBELUM DI VW KAN
// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { fadeUp } from "../../../lib/animation";
// import { dummyPesan, PesanItem } from "./data/wishes";
// import NotifModal from "../../../popup/NotifModal";
// import WishesCard from "./popup/WishesCard";

// const Wishes = () => {
//   const [nama, setNama] = useState<string>("");
//   const [pesan, setPesan] = useState<string>("");
//   const [showAll, setShowAll] = useState<boolean>(false);
//   const [notifType, setNotifType] = useState<string>("");
//   const [selectedMessage, setSelectedMessage] = useState<PesanItem | null>(null);

//   const [pesanList] = useState<PesanItem[]>(dummyPesan);

//   const handleSubmit = () => {
//     if (!nama.trim() || !pesan.trim()) {
//       setNotifType("incomplete_wishes");
//       return;
//     }

//     console.log("Kirim:", nama, pesan);
//   };

//   return (
//     <section className="relative w-full flex flex-col items-center py-[80px]">
//       <div className="relative w-[100%]">
//         <Image
//           src="/images/David-Natasha/Wishes/Frameee.webp"
//           alt="Wishes Frame"
//           width={1554}
//           height={4096}
//           className="w-full h-auto"
//         />

//         <div className="absolute inset-0 flex flex-col items-center  mt-[170px] ml-[15px]">
//           <motion.h1
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="font-sackers-italic-script text-[52px] text-[#021125]"
//             style={{ WebkitTextStroke: "0.3px #021125" }}
//           >
//             Your Wishes
//           </motion.h1>

//           <div className="flex flex-col gap-[20px] mt-[35px] w-[263px]">
//             <motion.input
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               type="text"
//               value={nama}
//               placeholder="[Guest Name]"
//               onChange={(e) => setNama(e.target.value)}
//               className="w-full text-[#021125] font-cormorant-garamond bg-transparent border text-[14px] border-[#021125] px-[12px] h-[33px] rounded-[6px] outline-none placeholder:text-[#021125]/50"
//             />

//             <motion.textarea
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               value={pesan}
//               placeholder="Leave your wishes here."
//               onChange={(e) => setPesan(e.target.value)}
//               className="w-full text-[#021125] font-cormorant-garamond bg-transparent text-[14px] border border-[#021125] px-[12px] py-[6px] h-[60px] rounded-[6px] outline-none placeholder:text-[#021125]/30 resize-none"
//             />

//             <motion.button
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               type="button"
//               onClick={handleSubmit}
//               className="bg-[#021125] rounded-[6px] h-[33px] text-[14px] font-cormorant-garamond uppercase flex items-center justify-center gap-[10px] text-white transition-colors duration-300 hover:bg-[#0a1f3d]"
//             >
//               <Image
//                 src="/images/David-Natasha/Wishes/Panah.png"
//                 alt="Kirim"
//                 width={15}
//                 height={19}
//                 className="object-cover w-[16px] h-[20px]"
//               />
//               Send
//             </motion.button>

//             <motion.div
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               className="w-full h-[382px] overflow-y-auto rounded-[6px] border border-[#021125]"
//             >
//               {/* <div className="sticky top-0 w-full h-[10px] bg-[#F6F6F4] z-10" /> */}

//               <div className="px-[12px] pt-[8px] pb-[2px]">
//                 {pesanList.map((item, index, array) => (
//                   <div key={item.id}>
//                     <p className="text-[#021125] font-cormorant-garamond text-[14px] font-bold mb-[4px]">
//                       {item.nama}
//                     </p>

//                     <p className="text-[#021125] font-cormorant-garamond text-[14px]">
//                       {item.pesan}
//                     </p>

//                     {index !== array.length - 1 && (
//                       <div className="border-t-[0.1px] border-[#021125] mt-[10px] mb-[12px]" />
//                     )}
//                   </div>
//                 ))}
//               </div>

//               {/* <div className="sticky bottom-0 w-full h-[10px] bg-[#F6F6F4] z-10" /> */}
//             </motion.div>

//             <motion.button
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               type="button"
//               onClick={() => setShowAll((prev) => !prev)}
//               className="bg-[#021125] rounded-[6px] h-[33px] text-[14px] font-cormorant-garamond uppercase flex items-center justify-center gap-[9.13px] text-white transition-colors duration-300 hover:bg-[#0a1f3d]"
//             >
//               <Image
//                 src="/images/David-Natasha/Wishes/Pesan.png"
//                 alt="Pesan"
//                 width={18}
//                 height={20}
//                 className="object-cover w-[17px] h-[21px]"
//               />
//               View all messages
//             </motion.button>
//           </div>
//         </div>
//       </div>

//       {notifType && (
//         <NotifModal type={notifType} onClose={() => setNotifType("")} />
//       )}

//       <AnimatePresence>
//         {selectedMessage && (
//           <WishesCard
//             data={selectedMessage}
//             onClose={() => setSelectedMessage(null)}
//           />
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Wishes;
