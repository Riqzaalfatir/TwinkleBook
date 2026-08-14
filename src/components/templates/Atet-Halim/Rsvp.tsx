"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import moment from "moment";
import { SmartRsvpForm, useSmartRsvp } from "@/components/rsvp/SmartRsvpForm";
import { fadeUp } from "../../../lib/animation";

type RsvpProps = {
  data?: any;
  paramUrl?: string;
  onSubmitRSVP?: () => void;
};

const Rsvp = ({ data, paramUrl, onSubmitRSVP }: RsvpProps) => {
  return (
    <SmartRsvpForm
      data={data}
      paramUrl={paramUrl}
      onSubmitRSVP={onSubmitRSVP}
      defaultAttendStatus={0}
    >
      <RsvpSectionDesign />
    </SmartRsvpForm>
  );
};

const RsvpSectionDesign = () => {
  const { guestData, attendStatus, invitationUrl, paramUrl } = useSmartRsvp();

  const waHref = (invitationUrl ?? "6281234567890").replace(/\D/g, "");

  return (
    <>
      <SmartRsvpForm.Modals />

      <section
        id="rsvp"
        className="relative w-full overflow-hidden pt-[19vw] lg:pt-[10.8vw] pb-[41.54vw] lg:pb-[10.44vw]"
      >
        {/* BUNGA POJOK KANAN ATAS */}
        <Image
          src="/images/Atet-Halim/Rsvp/BungaKananAtass.webp"
          alt="flower decoration"
          width={450}
          height={450}
          className="absolute top-[4.5vw] lg:-bottom-[0px] right-0 w-[33.08vw] lg:w-[15.85vw] h-auto pointer-events-none z-30"
        />

        {/* BUNGA POJOK KIRI BAWAH */}
        <Image
          src="/images/Atet-Halim/Rsvp/BungaKiriBawahh.webp"
          alt="flower decoration"
          width={450}
          height={450}
          className="absolute -bottom-[33.33vw] lg:-bottom-[13.87vw] left-0 w-[50.26vw] lg:w-[21.80vw] h-auto pointer-events-none z-30"
        />

        {/* BUNGA POJOK KANAN BAWAH */}
        <Image
          src="/images/Atet-Halim/Rsvp/BungaKananBawahh.webp"
          alt="flower decoration"
          width={450}
          height={450}
          className="absolute -bottom-[33.33vw] lg:-bottom-[13.87vw] right-0 w-[50.26vw] lg:w-[21.80vw] h-auto pointer-events-none z-30"
        />

        <div className="relative z-20 flex flex-col items-center text-center px-[8.21vw] lg:px-[1.32vw]">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-poltawski text-[7.18vw] lg:text-[3.17vw] text-[#402824]"
          >
            RSVP
          </motion.h2>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src="/images/Atet-Halim/EventOrder/OrnamentGaris.webp"
              alt="ornament"
              width={250}
              height={250}
              className="w-[36.41vw] lg:w-[14.99vw] h-auto lg:-mt-[5px] pointer-events-none"
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-athelas text-[3.9vw] lg:text-[1.45vw] text-[#402824] mt-[6.41vw] lg:mt-[3.63vw]"
          >
            Dear,
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-athelas text-[3.59vw] lg:text-[1.98vw] text-[#402824] mt-[5.13vw] lg:mt-[1.52vw] leading-none max-w-[60vw] lg:max-w-[30vw] break-words"
          >
            {paramUrl !== "" ? paramUrl : (guestData?.name ?? "Sela")}
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-athelas text-[3.59vw] lg:text-[1.45vw] text-[#402824] mt-[4.62vw] lg:mt-[1.65vw] leading-tight"
          >
            Kindly confirm your attendance before <br />
            {moment(
              guestData?.closeRSVPDate ?? new Date().toISOString(),
            ).format("DD MMMM YYYY")}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex gap-[5.13vw] lg:gap-[1.55vw] mt-[10.26vw] lg:mt-[2.25vw]"
          >
            <SmartRsvpForm.AttendToggle
              className={`w-[31.03vw] lg:w-[15.52vw] h-[10.26vw] lg:h-[3.10vw] text-[3.59vw] lg:text-[1.45vw] tracking-wide font-athelas rounded-[1.54vw] lg:rounded-[10px] border transition-colors ${
                attendStatus === 1
                  ? "bg-[#5E5036] text-white border-[#5E5036]"
                  : "bg-transparent text-[#402824] border-[#5E5036]"
              }`}
            />
            <SmartRsvpForm.NotAttendToggle
              className={`w-[31.03vw] lg:w-[15.52vw] h-[10.26vw] lg:h-[3.10vw] text-[3.59vw] lg:text-[1.45vw] leading-none font-athelas rounded-[1.54vw] lg:rounded-[10px] border transition-colors ${
                attendStatus === 2
                  ? "bg-[#5E5036] text-white border-[#5E5036]"
                  : "bg-transparent text-[#402824] border-[#5E5036]"
              }`}
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-athelas text-[3.59vw] lg:text-[1.45vw] text-[#402824] mt-[10vw] lg:mt-[4.5vw]"
          >
            {attendStatus === 2 ? "ARE YOU SURE?" : "Confirm your selection?"}
          </motion.p>

          {/*
            SmartRsvpForm.Accordion — dipanggil tapi dikomen, sesuai aturan main dokumentasi.
            <SmartRsvpForm.Accordion className="w-full mt-[36px]" bgActiveColor="#41261A" />
          */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <SmartRsvpForm.SubmitButton className="w-[41.03vw] lg:w-[25.63vw] h-[8.46vw] lg:h-[3.10vw] mt-[7.5vw] lg:mt-[4.49vw] bg-[#5E5036] text-white text-[3.08vw] lg:text-[1.45vw] tracking-wide font-athelas rounded-[1.54vw] lg:rounded-[10px]" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-athelas text-[3.08vw] lg:text-[1.45vw] text-[#402824] mt-[11.79vw] lg:mt-[3.96vw] leading-[1.3] lg:leading-[1.5vw]"
          >
            If you need assistance with your RSVP, <br />
            please contact our support team.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <a
              href={`https://wa.me/${waHref}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-[2.05vw] lg:gap-[10px] h-[8.46vw] lg:h-[3.10vw] w-[41.03vw] lg:w-[25.63vw] mt-[5.38vw] lg:mt-[1.65vw] bg-[#12877B] text-white text-[3.08vw] lg:text-[1.45vw] tracking-wide font-athelas rounded-[1.54vw] lg:rounded-[10px]"
            >
              <Image
                src="/images/Atet-Halim/Rsvp/Wa.png"
                alt="whatsapp"
                width={18}
                height={18}
                className="w-[18px] lg:w-[1.85vw]"
              />
              CHAT SUPPORT
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Rsvp;
