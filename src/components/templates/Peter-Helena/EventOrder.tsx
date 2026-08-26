"use client";

import React from "react";
import Image from "next/image";
import moment from "moment";
import { motion } from "framer-motion";
import { fadeUp, fadeRight, fadeLeft } from "../../../lib/animation";

type SessionItem = {
  id: string;
  eventSessionId: string;
  eventId: string;
  name: string;
  date: string;
  address: string | null;
  addressName: string | null;
  latLong: string | null;
  quota?: number;
};

type EventOrderProps = {
  data?: any;
};

const findValidSessionByName = (
  sessions: SessionItem[],
  keyword: string,
  validEventId?: string,
): SessionItem | undefined => {
  return sessions.find(
    (s) =>
      s.name?.toLowerCase().includes(keyword.toLowerCase()) &&
      validEventId &&
      s.eventId === validEventId,
  );
};

const formatTime = (date: string) => moment(date).format("HH.mm") + " WIB";

const buildMapsUrl = (session: SessionItem | undefined, fallback: string) => {
  if (!session) return fallback;
  if (session.latLong?.startsWith("http")) return session.latLong;
  if (session.address) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(session.address)}`;
  }
  if (session.latLong) {
    return `https://www.google.com/maps/search/?api=1&query=${session.latLong.replace(/\s/g, "")}`;
  }
  return fallback;
};

const EventOrder = ({ data }: EventOrderProps) => {
  const rawSessions: SessionItem[] = data?.dataSession ?? [];
  const validEventId: string | undefined = data?.dataEvent?.id;

  const holyMatrimony = findValidSessionByName(rawSessions, "holy matrimony", validEventId);
  const teapai = findValidSessionByName(rawSessions, "teapai", validEventId);
  const reception = findValidSessionByName(rawSessions, "reception", validEventId);
  const afterParty = findValidSessionByName(rawSessions, "after party", validEventId);

  return (
    <section
      id="eventorder"
      className="w-full pt-[48.5px] pb-[68.5px] lg:pt-[48.5px] lg:pb-[68px]"
    >
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="leading-none font-aston-script text-center text-[24px] lg:text-[24.3px] text-[#430D0D]"
      >
        Event Detail
      </motion.h1>

      <div className="flex flex-col items-center justify-center text-center leading-none mt-[32.5px] lg:mt-[30px]">
        {/* Holy Matrimony */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-[59px] h-[88px] lg:h-[89px]"
        >
          <Image
            src="/images/Peter-Helena/EventOrder/Gereja.webp"
            alt="Church"
            fill
            className="object-contain"
          />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-cinzel font-bold text-[14px] lg:text-[14.18px] text-[#430D0D] mt-[25px] lg:mt-[24px]"
        >
          {holyMatrimony?.addressName?.trim() ??
            "Chapel St. Albertus Magnus Atma Jaya"}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-cinzel text-[14px] lg:text-[14.18px] text-[#454545] leading-[16px] lg:leading-[16.2px] mt-[25.5px] lg:mt-[25px]"
        >
          Jl. Jend. Sudirman no 51, <br />
          South Jakarta
        </motion.p>
        <motion.a
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          href={buildMapsUrl(
            holyMatrimony,
            "https://maps.app.goo.gl/UQMb3zP8T1VqwneH9",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block font-ovo text-[12px] lg:text-[12.15px] text-[#454545] mt-[18px] lg:mt-[16.5px] uppercase transition-colors duration-300 hover:text-[#430D0D]"
        >
          Google Maps
          <span className="absolute left-0 top-[calc(100%+3px)] w-full h-[1px] bg-current transition-transform duration-300 ease-out group-hover:translate-y-[3px]" />
        </motion.a>

        <div className="flex items-center justify-center gap-x-[20px] lg:gap-x-[20.25px] mt-[31.4px] lg:mt-[29px]">
          <motion.span
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-[100px] lg:w-[200px] font-cinzel text-right font-bold text-[14px] lg:text-[14.18px] text-[#430D0D] uppercase leading-[16px] lg:leading-[18px]"
          >
            Holy <br /> Matrimony
          </motion.span>
          <motion.span
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-[100px] lg:w-[200px] font-cinzel text-left text-[14px] lg:text-[14.18px] text-[#454545]"
          >
            {holyMatrimony ? formatTime(holyMatrimony.date) : "11.00 WIB"}
          </motion.span>
        </div>

        {/* Divider icon */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-[63px] h-[95px] lg:h-[96px] mt-[37px] lg:mt-[35px]"
        >
          <Image
            src="/images/Peter-Helena/EventOrder/Cheers.webp"
            alt="Toast"
            fill
            className="object-contain"
          />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-cinzel font-bold text-[14px] lg:text-[14.18px] text-[#430D0D]  mt-[14px] lg:mt-[13px]"
        >
          {reception?.addressName?.trim() ?? "Mandarin Oriental Hotel"}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-cinzel text-[14px] lg:text-[14.18px] text-[#454545] leading-[16px] mt-[25.5px] lg:mt-[25px]"
        >
          Jl. Imam Bonjol , Menteng, <br />
          Central Jakarta
        </motion.p>
        <motion.a
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          href={buildMapsUrl(
            reception,
            "https://maps.app.goo.gl/7rba66o67yTGGZUy7",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block font-ovo text-[12px] lg:text-[12.15px] text-[#454545] mt-[18px] lg:mt-[16.5px] uppercase transition-colors duration-300 hover:text-[#430D0D]"
        >
          Google Maps
          <span className="absolute left-0 top-[calc(100%+3px)] w-full h-[1px] bg-current transition-transform duration-300 ease-out group-hover:translate-y-[3px]" />
        </motion.a>

        <div className="flex flex-col gap-y-[36px] lg:gap-y-[32.5px] mt-[30px] lg:mt-[31px]">
          <div className="flex items-center justify-center gap-[20px]">
            <motion.span
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-[150px] lg:w-[150px] font-cinzel text-right font-bold text-[14px] lg:text-[14.18px] text-[#430D0D] leading-[16px] lg:leading-[18px]"
            >
              Teapai <br /> Ceremony
            </motion.span>
            <motion.span
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-[150px] lg:w-[150px] font-cinzel text-left text-[14px] lg:text-[14.18px] text-[#454545] leading-[16px]"
            >
              {teapai ? formatTime(teapai.date) : "14.30 WIB"} <br />{" "}
              {teapai?.addressName?.trim() ?? "Esquire Room"}
            </motion.span>
          </div>

          <div className="flex items-center justify-center gap-[20px]">
            <motion.span
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-[150px] lg:w-[150px] font-cinzel text-right font-bold text-[14px] lg:text-[14.18px] text-[#430D0D] leading-[16px] lg:leading-[18px]"
            >
              Wedding <br /> Reception
            </motion.span>
            <motion.span
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-[150px] lg:w-[150px] font-cinzel text-left text-[14px] lg:text-[14.18px] text-[#454545] leading-[16px] break-words"
            >
              {reception ? formatTime(reception.date) : "18.30 WIB"} <br />{" "}
              {reception?.addressName?.trim() ?? "Ballroom"}
            </motion.span>
          </div>

          <div className="flex items-center justify-center gap-[20px]">
            <motion.span
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-[150px] lg:w-[150px] font-cinzel text-right font-bold text-[14px] lg:text-[14.18px] text-[#430D0D] leading-[16px] lg:leading-[18px]"
            >
              After Party
            </motion.span>
            <motion.span
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-[150px] lg:w-[150px] font-cinzel text-left text-[14px] lg:text-[14.18px] text-[#454545] leading-[16px]"
            >
              {afterParty ? formatTime(afterParty.date) : "21.30 WIB"} <br />{" "}
              {afterParty?.addressName?.trim() ?? "Esquire Room"}
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventOrder;