
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn } from "../../../lib/animation";

type ThankyouProps = {
  data?: any;
};

const FALLBACK_FOOTER_NOTE =
  "Thank you for being part of our 50th Wedding Anniversary celebration.";
const FALLBACK_FOOTER_IMAGE = null;
const Thankyou = ({ data }: ThankyouProps) => {
  const footerNote = data?.dataContent?.footerNote || FALLBACK_FOOTER_NOTE;

  const footerImageUrl = data?.dataContent?.footerImageData?.url
    ? `https://media.twinklebook.com/${data.dataContent.footerImageData.url}`
    : data?.dataContent?.footerImage || FALLBACK_FOOTER_IMAGE;

  return (
    <section className="relative w-full overflow-hidden pt-[6.5vw] lg:pt-[13vw] pb-[8.97vw] lg:pb-[0.99vw]">
      {/* ✅ Background dinamis kalau API ngasih gambar, kalau kosong biarin section pakai LayerKertas statis di bawah (gak perlu render apa-apa di sini) */}
      {footerImageUrl && (
        <Image
          src={footerImageUrl}
          alt="footer background"
          fill
          className="object-cover -z-10"
        />
      )}

      {/* BUNGA POJOK KANAN ATAS */}
      <Image
        src="/images/Atet-Halim/Thankyou/BungaAtass.webp"
        alt="flower decoration"
        width={450}
        height={450}
        className="absolute -top-[12vw] lg:-top-[1vw]  -right-[7vw] lg:-right-0 w-[58vw] lg:w-[26vw] h-auto pointer-events-none z-30"
      />

      <Image
        src="/images/Atet-Halim/Thankyou/BungaKiriBawah.webp"
        alt="flower decoration"
        width={450}
        height={450}
        className="absolute bottom-[0vw] left-0 w-[21vw] h-auto pointer-events-none z-30 hidden lg:block"
      />
      <Image
        src="/images/Atet-Halim/Thankyou/BungaKananBawah.webp"
        alt="flower decoration"
        width={450}
        height={450}
        className="absolute -bottom-[0.3vw] right-0 w-[19vw] h-auto pointer-events-none z-30 hidden lg:block"
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
        <div className="relative w-full bg-[url('/images/Atet-Halim/Thankyou/LayerKertas.webp')] bg-no-repeat [background-size:100%_100%] lg:bg-[url('/images/Atet-Halim/Hero/ateskertas.webp')] lg:[background-size:100%_100%]">
          <div className="relative flex flex-col items-center text-center">
            <div className="relative z-20 flex flex-col items-center text-center  py-[16.41vw] lg:py-[0vw]">
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
                  className="w-[24.36vw] lg:w-[13.14vw] h-auto -mt-[3vw] lg:-mt-[1.32vw] pointer-events-none"
                />
              </motion.div>

              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="font-poltawski text-[10.26vw] lg:text-[4.23vw] text-[#2B1F05] mt-[21vw] lg:mt-[1.32vw]"
              >
                Thank You
              </motion.h2>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="font-athelas text-[3.59vw] lg:text-[1.45vw] text-[#573517] mt-[4.36vw] lg:mt-[1.5vw] leading-[1.7] lg:leading-[1.98vw]"
              >
                {data?.dataContent?.footerNote ? (
                  footerNote
                ) : (
                  <>
                    Thank you for being part <br />
                    of our 50th Wedding Anniversary <br className="lg:hidden" />
                    celebration.
                  </>
                )}
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="flex flex-col items-center mt-[56vw] lg:mt-[10.5vw] mb-[15.38vw] lg:mb-[7.5vw]"
              >
                <Image
                  src="/images/Atet-Halim/Thankyou/LogoProvite.webp"
                  alt="Provite"
                  width={200}
                  height={200}
                  className="h-[27.95vw] lg:h-[10.77vw] w-auto pointer-events-none"
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
