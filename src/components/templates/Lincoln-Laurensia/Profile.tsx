import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, fadeUp, fadeLeft, fadeRight } from "../../../lib/animation";

const Profile = () => {
  return (
    <section
      id="profile"
      className="relative z-10 -mt-[5.5vw] lg:-mt-[14.22vw] mx-auto"
    >
      <div className="">
        <div className="mx-auto flex items-center justify-center gap-[5.64vw] lg:gap-[1.59vw]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative h-[61.28vw] w-[40.77vw] lg:w-[20.63vw] lg:h-[30.95vw]"
          >
            <Image
              src="/images/Lincoln-Laurensia/Profile/AsetKiri.webp"
              alt="Lincoln & Laurensia"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative h-[61.28vw] w-[40.77vw] lg:w-[20.63vw] lg:h-[30.95vw]"
          >
            <Image
              src="/images/Lincoln-Laurensia/Profile/AsetKanan.webp"
              alt="Lincoln & Laurensia"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div className="bg-white pb-[37vw] pt-[37.3vw] lg:pt-[5.9vw] lg:pb-[16.1vw] font-poppins text-black">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mx-auto w-full max-w-[87.18vw] lg:max-w-[42.86vw] leading-[25px] lg:leading-[30px]"
        >
          <p className="text-[3.59vw] lg:text-[1.46vw] font-semibold">
            Then make my joy complete by being like-{" "}
            <br className="lg:hidden" />
            minded, <br className="hidden lg:block" />
            having the same love, being one in <br className="lg:hidden" />
            spirit and of one mind.
          </p>
          <p className="mt-[6vw] lg:mt-[1.6vw] text-[3.59vw] font-semibold lg:text-[1.46vw]">
            Philippians 2:2
          </p>
        </motion.div>
      </div>

      <div className="mx-auto flex max-w-[520px] flex-col items-center gap-[7.5vw] bg-white pb-[12.1vw] lg:grid lg:max-w-[93.5vw] lg:grid-cols-[22.49vw_1fr_22.49vw] lg:items-stretch lg:gap-x-[2.78vw] lg:gap-y-0 lg:pb-[7.7vw]">
        <div className="relative w-full max-w-[87.18vw] lg:contents">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative h-[208.97vw] w-full lg:col-start-1 lg:row-start-1 lg:h-[55.89vw] lg:w-full"
          >
            <Image
              src="/images/Lincoln-Laurensia/Profile/Lincoln.webp"
              alt="Lincoln"
              fill
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-[125.64vw] bg-gradient-to-b from-black/0 to-black lg:hidden" />
          </motion.div>

          <div className="absolute inset-x-0 bottom-0 px-[6vw] pb-[21vw] pt-[20.51vw] font-poppins text-white lg:static lg:col-start-2 lg:row-start-1 lg:self-start lg:p-0 lg:text-black">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-[3.59vw] font-light italic lg:text-[1.32vw]"
            >
              The Groom
            </motion.p>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-[9.74vw] pt-[2px] lg:pt-[5px] font-semibold uppercase leading-none lg:text-[3.44vw]"
            >
              Lincoln
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="pt-[0.5px] lg:pt-[1px] text-[5.13vw] font-light italic uppercase lg:text-[1.72vw]"
            >
              Halim
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="pt-[7px] lg:pt-[13px] text-[3.59vw] lg:text-[1.46vw]"
            >
              Son of
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="lg:pt-[0.5px] text-[3.59vw] lg:text-[1.46vw]"
            >
              Mr. Asun Halim & Mrs. Yanti Widjono
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-[3.59vw] font-extralight leading-[5.13vw] mt-[12.5px] lg:mt-[10px] lg:text-[1.46vw] lg:leading-[2.2vw] text-white/80 lg:text-black/80"
            >
              Meet Ken. He&apos;s the calm to her chaos, the steady sea to{" "}
              <br className="hidden lg:block" />
              her wild waves. The one who <br className="lg:hidden" /> loves her
              through it all, and <br className="hidden lg:block" />
              always finds a way to make her smile.
            </motion.p>
          </div>
        </div>

        <div className="relative w-full max-w-[87.18vw] lg:contents">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative h-[208.97vw] w-full lg:col-start-3 lg:row-start-1 lg:h-[55.89vw] lg:w-full"
          >
            <Image
              src="/images/Lincoln-Laurensia/Profile/Laurensia.webp"
              alt="Laurensia"
              fill
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-[125.64vw] bg-gradient-to-b from-black/0 to-black lg:hidden" />
          </motion.div>

          <div className="absolute inset-x-0 bottom-0 px-[6vw] pb-[21vw] pt-[20.51vw] font-poppins text-white lg:static lg:col-start-2 lg:row-start-1 lg:self-end lg:p-0 lg:text-right lg:text-black">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-[3.59vw] font-light italic lg:text-[1.32vw]"
            >
              The Bride
            </motion.p>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="pt-[2px] lg:pt-[5px] font-overpass text-[9.74vw] font-semibold uppercase leading-none lg:text-[3.44vw]"
            >
              Laurensia
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="pt-[0.5px] lg:pt-[1px] text-[5.13vw] font-light italic uppercase lg:text-[1.72vw]"
            >
              Leonie Kusuma
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="pt-[7px] lg:pt-[13px] text-[2.82vw] font-light lg:text-[1.46vw]"
            >
              Daughter of
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="lg:pt-[0.5px] text-[3.59vw] lg:text-[1.46vw]"
            >
              Mr. Ivan & Mrs. Linda
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-[3.59vw] font-extralight leading-[5.13vw] mt-[12.5px] lg:mt-[10px] lg:text-[1.46vw] lg:leading-[2.2vw] text-white/80 lg:text-black/80"
            >
              Ken calls her Cen. She&apos;s the one he can{" "}
              <br className="lg:hidden" />
              talk to about <br className="hidden lg:block" />
              anything, dream about everything with, and count on{" "}
              <br className="hidden lg:block" />
              through the hardest days. His best friend, his greatest{" "}
              <br className="hidden lg:block" />
              comfort, and the one he wants by his side for a lifetime.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
