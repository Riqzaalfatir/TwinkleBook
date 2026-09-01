"use client";

import Image from "next/image";
import { SmartRsvpForm, useSmartRsvp } from "@/components/rsvp/SmartRsvpForm";
import { motion } from "framer-motion";
import { fadeUp, fadeRight, fadeLeft } from "../../../lib/animation";
import moment from "moment";
import { DavidNatashaDataProps } from "./types";

type RsvpProps = {
  data?: DavidNatashaDataProps;
  guestData?: { name?: string; closeRSVPDate?: string } | null;
};

const Rsvp = ({ data, guestData }: RsvpProps) => {
  return (
    <SmartRsvpForm data={data} guestData={guestData} defaultAttendStatus={0}>
      <RsvpSectionDesign />
    </SmartRsvpForm>
  );
};

const RsvpSectionDesign = () => {
  const { guestData, attendStatus, invitationUrl } = useSmartRsvp();

  const waHref = (invitationUrl ?? "6281998478131").replace(/\D/g, "");

  const activeClass =
    "flex items-center justify-center w-[36.15vw] h-[10.26vw] lg:w-[13.43vw] lg:h-[2.78vw] bg-[#021125] rounded-[1.54vw] lg:rounded-[3.31vw] font-cormorant-garamond text-[3.33vw] lg:text-[1.19vw] text-white";
  const inactiveClass =
    "flex items-center justify-center w-[36.15vw] h-[10.26vw] lg:w-[13.43vw] lg:h-[2.78vw] border border-[#021125] rounded-[1.54vw] lg:rounded-[3.31vw] font-cormorant-garamond text-[3.33vw] lg:text-[1.19vw] text-[#021125]";

  return (
    <>
      <SmartRsvpForm.Modals />

      <section id="rsvp" className="relative w-full  z-10">
        <Image
          src="/images/David-Natasha/Rsvp/AsetAtasM.webp"
          alt="flower decoration"
          width={450}
          height={450}
          className="absolute -top-[0vw] -left-[0vw] w-[84vw] h-auto pointer-events-none z-20 lg:hidden"
        />
        <Image
          src="/images/David-Natasha/Rsvp/AsetTengahM.webp"
          alt="flower decoration"
          width={450}
          height={450}
          className="absolute -bottom-[56vw] -right-[0vw] w-[26vw] h-auto pointer-events-none z-20 lg:hidden"
        />
        <Image
          src="/images/David-Natasha/Rsvp/AsetAtasG.webp"
          alt="flower decoration"
          width={450}
          height={450}
          className="absolute -top-[0vw] -left-[0vw] w-[37.2vw] h-auto pointer-events-none z-20 hidden lg:block"
        />
        <Image
          src="/images/David-Natasha/Rsvp/AsetTengahG.webp"
          alt="flower decoration"
          width={450}
          height={450}
          className="absolute lg:-bottom-[18.5vw] -right-[0vw] w-[17.8vw] h-auto pointer-events-none z-20 hidden lg:block"
        />
        <div className="relative z-[15] flex flex-col items-center text-center leading-none pt-[25.4vw] lg:pt-[9.54vw] pb-[15.38vw] lg:pb-[14.4vw] px-[6.15vw] lg:px-[0vw]">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-sackers-italic-script text-[13.33vw] lg:text-[5.29vw] text-[#021125] [--stroke-w:0.3px] lg:[--stroke-w:0.53px]"
            style={{ WebkitTextStroke: "var(--stroke-w) #021125" }}
          >
            Rsvp
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cormorant-garamond text-[3.85vw] lg:text-[1.59vw] text-[#021125] mt-[8.2vw] lg:mt-[2.9vw] tracking-wide"
          >
            Dear Mr./Mrs./Ms.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cormorant-garamond text-[3.85vw] lg:text-[1.72vw] text-[#021125] mt-[4.7vw] lg:mt-[1.63vw]"
          >
            {guestData?.name ?? "[Guest Name]"}
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cormorant-garamond text-[3.33vw] lg:text-[1.59vw] text-[#021125] mt-[8.46vw] leading-[5vw] lg:leading-[1.8vw] lg:mt-[2.1vw]"
          >
            Kindly confirm your attendance before <br />
            {moment(
              guestData?.closeRSVPDate ?? new Date().toISOString(),
            ).format("DD MMMM YYYY")}
          </motion.p>
          <div className="flex items-center justify-center gap-[5.13vw] lg:gap-[1.90vw] mt-[8.3vw] lg:mt-[2.3vw]">
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <SmartRsvpForm.AttendToggle
                className={attendStatus === 1 ? activeClass : inactiveClass}
              />
            </motion.div>
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <SmartRsvpForm.NotAttendToggle
                className={attendStatus === 2 ? activeClass : inactiveClass}
              />
            </motion.div>
          </div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cormorant-garamond text-[3.33vw] lg:text-[1.59vw] text-[#021125] mt-[21.77vw] lg:mt-[5.9vw]"
          >
            Confirm Your RSVP
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <SmartRsvpForm.SubmitButton className="flex items-center justify-center w-[41.28vw] h-[9.23vw]  lg:w-[14.55vw] lg:h-[3.44vw] bg-[#021125] rounded-[1.54vw] lg:rounded-[3.31vw] font-cormorant-garamond text-[3.33vw] lg:text-[1.19vw] text-white mt-[6.8vw] lg:mt-[2.1vw]" />
          </motion.div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cormorant-garamond text-[2.82vw] lg:text-[1.59vw] text-[#021125] mt-[8.7vw] lg:mt-[4.05vw] leading-[3.8vw] lg:leading-[1.98vw]"
          >
            If you need assistance with your RSVP, <br />
            please contact our support team.
          </motion.p>
          <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            href={`https://wa.me/${waHref}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-[41.28vw] lg:w-[14.55vw] h-[7.69vw] lg:h-[2.78vw] bg-[#12877B] rounded-[1.54vw] lg:rounded-[3.31vw] font-cormorant-garamond text-[3.33vw] lg:text-[1.06vw] text-white gap-[1.93vw] lg:gap-[0.75vw] mt-[7.8vw] lg:mt-[1.9vw]"
          >
            <Image
              src="/images/Michael-Vannya/Rsvp/Wa.png"
              alt="whatsapp"
              width={200}
              height={200}
              className="w-[5.25vw] lg:w-[1.68vw]"
            />
            CHAT SUPPORT
          </motion.a>
        </div>
      </section>
    </>
  );
};

export default Rsvp;