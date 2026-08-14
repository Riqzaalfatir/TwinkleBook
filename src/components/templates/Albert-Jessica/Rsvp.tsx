"use client";

import Image from "next/image";
import moment from "moment";
import { SmartRsvpForm, useSmartRsvp } from "@/components/rsvp/SmartRsvpForm";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight } from "../../../lib/animation";

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

      <section id="rsvp" className="relative w-full px-10 overflow-hidden">
        <div className="relative flex flex-col items-center justify-center text-center z-20 pb-[79px]">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="uppercase font-marcellus text-[28px] text-[#4E4E4E]"
          >
            RSVP
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-lora text-[14px] text-[#322E29] pt-[22.5px]"
          >
            Dear,
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-lora text-[14px] text-[#322E29] pt-[18px]"
          >
            {paramUrl !== "" ? paramUrl : (guestData?.name ?? "Sela")}
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-lora text-[14px] text-[#322E29] pt-[19.5px]"
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
            className="flex items-center justify-center gap-[19px] mt-[42px]"
          >
            <SmartRsvpForm.AttendToggle
              className={`flex items-center justify-center w-[146px] h-[40px] rounded-[6px] font-lora text-[14px] transition-colors ${
                attendStatus === 1
                  ? "bg-[#4E4E4E] text-[#FEF8EF]"
                  : "bg-transparent border border-[#4E4E4E] text-[#4E4E4E]"
              }`}
            />
            <SmartRsvpForm.NotAttendToggle
              className={`flex items-center justify-center w-[148px] h-[40px] rounded-[6px] font-lora text-[14px] leading-[15px] transition-colors px-[20px] ${
                attendStatus === 2
                  ? "bg-[#4E4E4E] text-[#FEF8EF]"
                  : "bg-transparent border border-[#4E4E4E] text-[#4E4E4E]"
              }`}
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mt-[30px] font-lora text-[14px] text-[#322E29]"
          >
            {attendStatus === 2 ? "ARE YOU SURE?" : "Confirm your selection?"}
          </motion.p>

          {/*
            SmartRsvpForm.Accordion — dipanggil tapi dikomen, sesuai aturan main dokumentasi.
            <SmartRsvpForm.Accordion className="w-full mt-[36px]" bgActiveColor="#4E4E4E" />
          */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <SmartRsvpForm.SubmitButton className="flex items-center justify-center w-[201px] h-[33px] bg-[#4E4E4E] rounded-[6px] font-lora text-[14px] text-[#FEF8EF] mt-[30px]" />
          </motion.div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-lora text-[10px] text-[#322E29] pt-[40px]"
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
              className="flex items-center justify-center w-[201px] h-[33px] bg-[#12877B] rounded-[6px] font-lora text-[14px] text-[#FEF8EF] gap-[8px] mt-[23.5px]"
            >
              <Image
                src="/images/Albert-Jessica/Rsvp/Wa.png"
                alt="whatsapp"
                width={200}
                height={200}
                className="w-[18px]"
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
