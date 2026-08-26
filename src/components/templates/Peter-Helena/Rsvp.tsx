"use client";

import Image from "next/image";
import { SmartRsvpForm, useSmartRsvp } from "@/components/rsvp/SmartRsvpForm";
import { motion } from "framer-motion";
import { fadeUp, fadeRight, fadeLeft } from "../../../lib/animation";

type RsvpProps = {
  data?: any;
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
    "flex items-center justify-center text-center font-cinzel text-[12px] lg:text-[12.15px] text-[#3E0E1C] bg-[#EEDBCD] w-[141px] h-[40px] lg:w-[142.79px] lg:h-[40.51px] rounded-[6px] transition-colors duration-300";
  const inactiveClass =
    "flex items-center justify-center text-center font-cinzel text-[12px] lg:text-[12.15px] text-white bg-transparent border border-[#EEDBCD] w-[141px] h-[40px] lg:w-[142.79px] lg:h-[40.51px] rounded-[6px] transition-colors duration-300 hover:bg-[#EEDBCD] hover:text-[#3E0E1C]";

  return (
    <>
      <SmartRsvpForm.Modals />

      <section id="rsvp" className="w-full bg-[#430D0D]">
        <div className="flex flex-col items-center justify-center leading-none pt-[19px] lg:pt-[18.5px] pb-[97.5px]">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-aston-script text-[28px] lg:text-[28.35px] text-white pt-[27px] lg:pt-[28px]"
          >
            Rsvp
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cinzel text-[14px] lg:text-[14.18px] text-white pt-[47px]"
          >
            Dear Mr./Mrs./Ms.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cinzel text-[14px] lg:text-[14.18px] text-white pt-[19px] lg:pt-[20px]"
          >
            {guestData?.name ?? "[Guest Name]"}
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cinzel text-[12px] lg:text-[12.15px] text-white text-center leading-[20px] pt-[34px] tracking-wide"
          >
            Kindly confirm your attendance before <br />
            [Due Date]
          </motion.p>
          <div className="flex items-center justify-center gap-[20px] lg:gap-[20.25px] mt-[31.5px] lg:mt-[32px]">
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
            className="font-cinzel text-[14px] lg:text-[14.18px] text-white pt-[88.5px] lg:pt-[85px]"
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
            <SmartRsvpForm.SubmitButton className="flex items-center justify-center text-center font-cinzel text-[12px] lg:text-[12.15px] text-[#3E0E1C] w-[161px] min-h-[36px] lg:w-[163.04px] lg:min-h-[36.46px] bg-[#EEDBCD] rounded-[6px] mt-[25px] transition-colors duration-300 hover:bg-[#EBD6C6]" />
          </motion.div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cinzel text-[10px] lg:text-[10.13px] text-white pt-[46.5px] lg:pt-[44.5px] text-center leading-[13px] lg:leading-[15px] tracking-wide"
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
            className="flex items-center justify-center w-[161px] h-[30px] lg:w-[163.04px] lg:h-[36.46px] bg-[#12877B] rounded-[6px] font-cinzel text-[12px] lg:text-[12.15px] text-white gap-[8px] mt-[25.5px] lg:mt-[19px] transition-colors duration-300 hover:bg-[#0f6f65]"
          >
            <Image
              src="/images/Albert-Jessica/Rsvp/Wa.png"
              alt="whatsapp"
              width={200}
              height={200}
              className="w-[18px] lg:w-[20.75px]"
            />
            CHAT SUPPORT
          </motion.a>
        </div>
      </section>
    </>
  );
};

export default Rsvp;

