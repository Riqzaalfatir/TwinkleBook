import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn } from "../../../lib/animation";

type ThankyouProps = {
  data?: unknown;
};

const Thankyou = ({ data }: ThankyouProps) => {
  return (
    <section className="relative w-full overflow-hidden pt-[6.5vw] lg:pt-[205px] pb-[8.97vw] lg:pb-[15px]">
      {/* BACKGROUND KERTAS */}
      {/* <Image
        src="/images/Atet-Halim/Hero/BackgoundKertas.webp"
        alt="background"
        fill
        className="object-cover"
      /> */}

      {/* BUNGA POJOK KANAN ATAS */}
      <Image
        src="/images/Atet-Halim/Thankyou/BungaAtass.webp"
        alt="flower decoration"
        width={450}
        height={450}
        className="absolute -top-[12vw] lg:top-[15px] -right-[7vw] lg:-right-0 w-[58vw] lg:w-[350px] h-auto pointer-events-none z-30"
      />

      <Image
        src="/images/Atet-Halim/Thankyou/BungaKiriBawah.webp"
        alt="flower decoration"
        width={450}
        height={450}
        className="absolute bottom-[5px] left-0 w-[320px] h-auto pointer-events-none z-30 hidden lg:block"
      />
      <Image
        src="/images/Atet-Halim/Thankyou/BungaKananBawah.webp"
        alt="flower decoration"
        width={450}
        height={450}
        className="absolute -bottom-[10px] right-0 w-[310px] h-auto pointer-events-none z-30 hidden lg:block"
      />

      <Image
        src="/images/Atet-Halim/Thankyou/BungaKiriM.webp"
        alt="flower decoration"
        width={450}
        height={450}
        className="absolute -bottom-[2vw] -left-[0vw] w-[40vw] h-auto pointer-events-none z-30 lg:hidden"
      />
      <Image
        src="/images/Atet-Halim/Thankyou/BungaKananM.webp"
        alt="flower decoration"
        width={450}
        height={450}
        className="absolute -bottom-[2vw]  right-0 w-[42vw]  h-auto pointer-events-none z-30 lg:hidden"
      />

      {/* CONTAINER TENGAH — LAYER KERTAS */}
      <div className="relative z-20 flex items-center justify-center">
        <div className="relative w-full bg-[url('/images/Atet-Halim/Thankyou/LayerKertas.webp')] bg-no-repeat [background-size:100%_100%] lg:bg-[url('/images/Atet-Halim/Thankyou/LayerKertasD.webp')] lg:[background-size:100%_100%]">
          <div className="relative flex flex-col items-center text-center">
            {/* KONTEN */}
            <div className="relative z-20 flex flex-col items-center text-center px-[8.21vw] lg:px-[20px] py-[16.41vw] lg:py-[0px]">
              {/* LOGO */}
              <motion.div 
              variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 3, ease: "easeOut" }}
              >
              <Image
                src="/images/Atet-Halim/Hero/LogoD4.webp"
                alt="logo stamp"
                width={220}
                height={220}
                className="w-[24.36vw] lg:w-[199px] h-auto -mt-[3vw] lg:-mt-[20px]"
              />
              </motion.div>

              {/* THANK YOU */}
              <motion.h2 
              variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-poltawski text-[10.26vw] lg:text-[64px] text-[#2B1F05] tracking-wide mt-[21vw] lg:mt-[20px]">
                Thank You
              </motion.h2>

              {/* PARAGRAF */}
              <motion.p 
              variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-athelas text-[3.59vw] lg:text-[22px] text-[#573517] mt-[4.36vw] lg:mt-[28px] leading-[1.7] lg:leading-[30px]">
                Thank you for being part <br />
                of our 50th Wedding Anniversary <br className="lg:hidden" />
                celebration.
              </motion.p>

              {/* BRANDING VENDOR */}
              <motion.div 
              variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
              className="flex flex-col items-center mt-[56vw] lg:mt-[165px] mb-[15.38vw] lg:mb-[123px]">
                <Image
                  src="/images/Atet-Halim/Thankyou/LogoProvite.webp"
                  alt="Provite"
                  width={200}
                  height={200}
                  className="h-[27.95vw] lg:h-[163px] w-auto"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thankyou;
