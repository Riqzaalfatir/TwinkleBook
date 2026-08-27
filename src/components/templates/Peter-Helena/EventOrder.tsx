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

type GuestSessionGroup = {
  name: string;
  additionalSessionDescription?: string | null;
  sessionDate?: string | null;
};

type EventOrderProps = {
  data?: any;
  guestData?: { groups?: GuestSessionGroup[] } | null;
};

type LocationDummy = {
  name: string;
  address: string;
  addressName: string;
  directMapURL: string;
};

type ListRow = {
  key: string;
  line1: string;
  line2: string;
  time: string;
  location: string;
};

const dataLocationDummy: LocationDummy[] = [
  {
    name: "HOLY MATRIMONY",
    address: "Jl. Jend. Sudirman no 51, South Jakarta",
    addressName: "Chapel St. Albertus Magnus Atma Jaya",
    directMapURL: "https://maps.app.goo.gl/UQMb3zP8T1VqwneH9",
  },
  {
    name: "WEDDING RECEPTION",
    address: "Jl. Imam Bonjol, Menteng, Central Jakarta",
    addressName: "Mandarin Oriental Hotel",
    directMapURL: "https://maps.app.goo.gl/7rba66o67yTGGZUy7",
  },
];

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

// fallback ke dummy array dulu, lalu data API, lalu teks statis
const resolveLocation = (
  session: SessionItem | undefined,
  fallbackAddressName: string,
  fallbackAddress: string,
  fallbackMapUrl: string,
) => {
  const dummyMatch = session
    ? dataLocationDummy.find(
        (d) => d.name.toLowerCase() === session.name?.toLowerCase(),
      )
    : undefined;

  if (dummyMatch) {
    return {
      addressName: dummyMatch.addressName,
      address: dummyMatch.address,
      mapUrl: dummyMatch.directMapURL,
    };
  }

  if (session) {
    const mapUrl = session.latLong?.startsWith("http")
      ? session.latLong
      : session.address
        ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(session.address)}`
        : session.latLong
          ? `https://www.google.com/maps/search/?api=1&query=${session.latLong.replace(/\s/g, "")}`
          : fallbackMapUrl;

    return {
      addressName: session.addressName?.trim() || fallbackAddressName,
      address: session.address?.trim() || fallbackAddress,
      mapUrl,
    };
  }

  return {
    addressName: fallbackAddressName,
    address: fallbackAddress,
    mapUrl: fallbackMapUrl,
  };
};

const toTitleCase = (text: string): string => {
  if (!text) return text;
  return text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
};

// split nama sesi jadi 2 baris di spasi pertama
const splitLabel = (
  name: string,
  fallbackLine1: string,
  fallbackLine2: string,
): [string, string] => {
  if (!name) return [fallbackLine1, fallbackLine2];
  const titleCased = toTitleCase(name);
  const spaceIndex = titleCased.indexOf(" ");
  if (spaceIndex === -1) return [titleCased, ""];
  return [titleCased.slice(0, spaceIndex), titleCased.slice(spaceIndex + 1)];
};

// split address jadi 2 baris setelah koma terakhir
const renderAddressWithLineBreak = (address: string) => {
  const commaIndex = address.lastIndexOf(",");
  if (commaIndex === -1) return address;
  const firstLine = address.slice(0, commaIndex + 1);
  const secondLine = address.slice(commaIndex + 1).trim();
  if (!secondLine) return firstLine;
  return (
    <>
      {firstLine}
      <br />
      {secondLine}
    </>
  );
};

const EventOrder = ({ data, guestData }: EventOrderProps) => {
  const rawSessions: SessionItem[] =
    data?.eventSessionByPin ?? data?.dataSession ?? [];
  const validEventId: string | undefined = data?.dataEvent?.id;

  const holyMatrimony = findValidSessionByName(
    rawSessions,
    "holy matrimony",
    validEventId,
  );
  const reception = findValidSessionByName(
    rawSessions,
    "reception",
    validEventId,
  );
  const afterParty = findValidSessionByName(
    rawSessions,
    "after party",
    validEventId,
  );

  // teapai dari guestData.groups, bukan rawSessions
  const teapaiGroup = guestData?.groups?.find(
    (g) => g.name?.toLowerCase() === "teapai ceremony",
  );
  const teapaiDate = teapaiGroup?.sessionDate ?? null;
  const teapaiLocation =
    teapaiGroup?.additionalSessionDescription?.trim() || null;

  const isSessionDataLoaded = rawSessions.length > 0;

  const shouldShowHoly = true;
  const shouldShowReception = true;
  const shouldShowHolyTime = !isSessionDataLoaded || Boolean(holyMatrimony);
  const shouldShowReceptionTime = !isSessionDataLoaded || Boolean(reception);
  const shouldShowAfterParty = !isSessionDataLoaded || Boolean(afterParty);

  const isGuestDataLoaded = guestData != null;
  const shouldShowTeapai = !isGuestDataLoaded || Boolean(teapaiGroup);

  const [holyLine1, holyLine2] = splitLabel(
    holyMatrimony?.name ?? "",
    "Holy",
    "Matrimony",
  );
  const [teapaiLine1, teapaiLine2] = splitLabel(
    teapaiGroup?.name ?? "",
    "Teapai",
    "Ceremony",
  );
  const [receptionLine1, receptionLine2] = splitLabel(
    reception?.name ?? "",
    "Wedding",
    "Reception",
  );
  const afterPartyLabel = afterParty?.name
    ? toTitleCase(afterParty.name)
    : "After Party";

  const holyLocation = resolveLocation(
    holyMatrimony,
    "Chapel St. Albertus Magnus Atma Jaya",
    "Jl. Jend. Sudirman no 51, South Jakarta",
    "https://maps.app.goo.gl/UQMb3zP8T1VqwneH9",
  );
  const receptionLocation = resolveLocation(
    reception,
    "Ballroom",
    "Jl. Imam Bonjol, Menteng, Central Jakarta",
    "https://maps.app.goo.gl/7rba66o67yTGGZUy7",
  );

  // sesi lain di luar 4 nama yang dikenal, auto masuk list bawah
  const knownSessionKeywords = [
    "holy matrimony",
    "reception",
    "after party",
    "teapai",
  ];
  const extraSessions = rawSessions.filter((s) => {
    const nameLower = s.name?.toLowerCase() ?? "";
    const isKnown = knownSessionKeywords.some((keyword) =>
      nameLower.includes(keyword),
    );
    return !isKnown && validEventId && s.eventId === validEventId;
  });

  const listRows: ListRow[] = [
    ...(shouldShowTeapai
      ? [
          {
            key: "teapai",
            line1: teapaiLine1,
            line2: teapaiLine2,
            time: teapaiDate ? formatTime(teapaiDate) : "14.30 WIB",
            location: teapaiLocation ?? "Esquire Room",
          },
        ]
      : []),
    ...(shouldShowReceptionTime
      ? [
          {
            key: "reception-list",
            line1: receptionLine1,
            line2: receptionLine2,
            time: reception ? formatTime(reception.date) : "18.30 WIB",
            location: receptionLocation.addressName,
          },
        ]
      : []),
    ...(shouldShowAfterParty
      ? [
          {
            key: "after-party",
            line1: afterPartyLabel,
            line2: "",
            time: afterParty ? formatTime(afterParty.date) : "21.30 WIB",
            location: afterParty?.addressName?.trim() ?? "Esquire Room",
          },
        ]
      : []),
    ...extraSessions.map((s) => {
      const [line1, line2] = splitLabel(s.name, "", "");
      const dummyMatch = dataLocationDummy.find(
        (d) => d.name.toLowerCase() === s.name?.toLowerCase(),
      );
      return {
        key: s.id,
        line1,
        line2,
        time: formatTime(s.date),
        location:
          dummyMatch?.addressName ||
          s.addressName?.trim() ||
          s.address?.trim() ||
          "-",
      };
    }),
  ];

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
        {shouldShowHoly && (
          <>
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
              {holyLocation.addressName}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-cinzel text-[14px] lg:text-[14.18px] text-[#454545] leading-[16px] lg:leading-[16.2px] mt-[25.5px] lg:mt-[25px]"
            >
              {renderAddressWithLineBreak(holyLocation.address)}
            </motion.p>
            <motion.a
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              href={holyLocation.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block font-ovo text-[12px] lg:text-[12.15px] text-[#454545] mt-[18px] lg:mt-[16.5px] uppercase transition-colors duration-300 hover:text-[#430D0D]"
            >
              Google Maps
              <span className="absolute left-0 top-[calc(100%+3px)] w-full h-[1px] bg-current transition-transform duration-300 ease-out group-hover:translate-y-[3px]" />
            </motion.a>
          </>
        )}

        {shouldShowHolyTime && (
          <div className="flex items-center justify-center gap-x-[20px] lg:gap-x-[20.25px] mt-[31.4px] lg:mt-[29px]">
            <motion.span
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-[150px] lg:w-[150px] font-cinzel text-right font-bold text-[14px] lg:text-[14.18px] text-[#430D0D] leading-[16px] lg:leading-[18px]"
            >
              {holyLine1} <br /> {holyLine2}
            </motion.span>
            <motion.span
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-[150px] lg:w-[150px] font-cinzel text-left text-[14px] lg:text-[14.18px] text-[#454545]"
            >
              {holyMatrimony ? formatTime(holyMatrimony.date) : "11.00 WIB"}
            </motion.span>
          </div>
        )}

        {shouldShowReception && (
          <>
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
              {receptionLocation.addressName}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-cinzel text-[14px] lg:text-[14.18px] text-[#454545] leading-[16px] mt-[25.5px] lg:mt-[25px]"
            >
              {renderAddressWithLineBreak(receptionLocation.address)}
            </motion.p>
            <motion.a
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              href={receptionLocation.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block font-ovo text-[12px] lg:text-[12.15px] text-[#454545] mt-[18px] lg:mt-[16.5px] uppercase transition-colors duration-300 hover:text-[#430D0D]"
            >
              Google Maps
              <span className="absolute left-0 top-[calc(100%+3px)] w-full h-[1px] bg-current transition-transform duration-300 ease-out group-hover:translate-y-[3px]" />
            </motion.a>
          </>
        )}

        {listRows.length > 0 && (
          <div className="flex flex-col items-center gap-y-[36px] lg:gap-y-[32.5px] mt-[30px] lg:mt-[31px]">
            {listRows.map((row) => (
              <div
                key={row.key}
                className="flex items-center justify-center gap-[20px]"
              >
                <motion.span
                  variants={fadeRight}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-[150px] lg:w-[150px] font-cinzel text-right font-bold text-[14px] lg:text-[14.18px] text-[#430D0D] leading-[16px] lg:leading-[18px]"
                >
                  {row.line1}
                  {row.line2 && (
                    <>
                      {" "}
                      <br /> {row.line2}
                    </>
                  )}
                </motion.span>
                <motion.span
                  variants={fadeLeft}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-[150px] lg:w-[150px] font-cinzel text-left text-[14px] lg:text-[14.18px] text-[#454545] leading-[16px] break-words"
                >
                  {row.time} <br /> {row.location}
                </motion.span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EventOrder;