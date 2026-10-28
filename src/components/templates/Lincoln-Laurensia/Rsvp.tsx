"use client";

import React from "react";
import Image from "next/image";
import moment from "moment";
import { SmartRsvpForm, useSmartRsvp } from "@/components/rsvp/SmartRsvpForm";
import { motion } from "framer-motion";
import { fadeIn, fadeUp, fadeLeft, fadeRight } from "../../../lib/animation";

type RsvpProps = {
  data?: any;
  guestData?: { name?: string; closeRSVPDate?: string } | null;
};

const Rsvp = ({ data, guestData }: RsvpProps) => {
  return (
    <SmartRsvpForm data={data} guestData={guestData} defaultAttendStatus={0}>
      <RsvpSection data={data} />
    </SmartRsvpForm>
  );
};

const RsvpSection = ({ data }: { data?: any }) => {
  const { guestData, attendStatus, invitationUrl } = useSmartRsvp();

  // Nomor WA: dari invitationUrl (hasil SmartRsvpForm), lalu invitationWAUrl event, lalu fallback
  const waHref = (
    invitationUrl ??
    data?.dataEvent?.invitationWAUrl ??
    "6285183354835"
  ).replace(/\D/g, "");

  // BARU: wording otomatis di chat support (nama tamu + nama acara dari API)
  const supportGuestName = guestData?.name ?? "Guest";
  const supportEventName =
    data?.dataEvent?.name ??
    `The Wedding of ${data?.dataEvent?.groomName ?? "Lincoln"} & ${
      data?.dataEvent?.brideName ?? "Laurensia"
    }`;
  const supportMessage = `Hi Provite Team, i need help with my RSVP with invitation name ${supportGuestName} for The Event: ${supportEventName}`;

  // Batas RSVP: dari data tamu, lalu data event
  const closeDate = guestData?.closeRSVPDate ?? data?.dataEvent?.closeRSVPDate;
  const closeLabel = closeDate
    ? moment(closeDate).format("DD MMMM YYYY")
    : "30 October 2026";

  const activeClass =
    "flex items-center justify-center bg-white w-[36.15vw] h-[10.26vw] lg:w-[13.43vw] lg:h-[2.78vw] text-[3.59vw] lg:text-[1.19vw] uppercase text-[#30201E] rounded-[1.54vw] lg:rounded-[0.33vw]";
  const inactiveClass =
    "flex items-center justify-center border border-white/60 w-[36.15vw] h-[10.26vw] lg:w-[13.43vw] lg:h-[2.78vw] text-[3.59vw] lg:text-[1.19vw] uppercase text-white rounded-[1.54vw] lg:rounded-[0.33vw] leading-none";

  return (
    <>
      <SmartRsvpForm.Modals />

      <section
        id="rsvp"
        className="relative z-10 flex w-full flex-col items-center bg-[#2F2F2F] px-[6.15vw] py-[19.5vw] text-center font-poppins text-white lg:px-[1.59vw] lg:py-[7.8vw]"
      >
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[10.26vw] font-semibold uppercase tracking-[1.2em] lg:tracking-[1.2em] lg:text-[3.44vw] ml-[10vw] lg:ml-[3.5vw]"
        >
          RSVP
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mt-[7.1vw] lg:mt-[3.31vw]"
        >
          <p className="text-[3.59vw] lg:text-[1.46vw]">Dear Mr. /Mrs. / Ms.</p>
          <p className="mt-[2.82vw] lg:mt-[0.66vw] text-[4.1vw] lg:text-[1.59vw]">
            {guestData?.name ?? "[Guest Name]"}
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mt-[6.67vw] lg:mt-[3.1vw] leading-[20px] lg:leading-[35px]"
        >
          <p className="text-[3.59vw] lg:text-[1.46vw]">
            Kindly confirm your attendance before
            <br />
            {closeLabel}
          </p>

          <div className="mt-[6vw] lg:mt-[1.35vw] flex items-center justify-center gap-[5.13vw] lg:gap-[1.83vw]">
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
                stacked
                className={attendStatus === 2 ? activeClass : inactiveClass}
              />
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-[19vw] lg:mt-[5.95vw]">
          <motion.p className="text-[3.59vw] lg:text-[1.46vw]">
            Confirm Your RSVP
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="transform-gpu"
          >
            <SmartRsvpForm.SubmitButton
              key={attendStatus}
              className="mx-auto mt-[5.64vw] flex h-[9.23vw] w-[41.28vw] items-center justify-center overflow-hidden whitespace-nowrap rounded-[1.54vw] bg-white text-center text-[3.59vw] uppercase leading-[1] text-[#30201E] [-webkit-transform:translateZ(0)] lg:mt-[0.99vw] lg:h-[3.44vw] lg:w-[14.55vw] lg:rounded-[0.33vw] lg:text-[1.19vw]"
            />
          </motion.div>
        </div>

        <div className="mt-[11vw] lg:mt-[5.29vw]">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-[3.59vw] lg:text-[1.32vw]"
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
            href={`https://wa.me/${waHref}?text=${encodeURIComponent(supportMessage)}`} // BARU
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-[41.28vw] h-[7.69vw] lg:w-[14.55vw] lg:h-[2.78vw] bg-[#12877B] rounded-[1.54vw] lg:rounded-[0.33vw] text-[3.59vw] lg:text-[1.19vw] text-white gap-[1.28vw] lg:gap-[0.7vw] mt-[3.59vw] lg:mt-[0.99vw] mx-auto"
          >
            <Image
              src="/images/Lincoln-Laurensia/Rsvp/Wa.png"
              alt="whatsapp"
              width={200}
              height={200}
              className="w-[4.1vw] lg:w-[1.65vw]"
            />
            CHAT SUPPORT
          </motion.a>
        </div>
      </section>
    </>
  );
};

export default Rsvp;
