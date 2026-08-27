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

// cari alamat/link Maps dari dummy array dulu (by name), baru fallback ke data mentah API,
// baru fallback ke teks statis desain
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

// pecah nama session jadi 2 baris (sesuai layout desain), split di spasi pertama
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

// pecah address jadi 2 baris persis setelah koma pertama (sesuai desain: "Jl. ... No 51," / "South Jakarta")
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
  // asumsi sementara: eventSessionByPin ada di data.eventSessionByPin, fallback ke dataSession
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

  // Teapai: dari guestData.groups, BUKAN dari rawSessions
  const teapaiGroup = guestData?.groups?.find(
    (g) => g.name?.toLowerCase() === "teapai ceremony",
  );
  const teapaiDate = teapaiGroup?.sessionDate ?? null;
  const teapaiLocation =
    teapaiGroup?.additionalSessionDescription?.trim() || null;

  // --- Kondisi tampil per section  ---
  // 1) eventSessionByPin belum ada kasih statis
  // 2) eventSessionByPin UDAH ngasih data tapi tidak cocok, sembunyikan
  const isSessionDataLoaded = rawSessions.length > 0;
  const shouldShowHoly = !isSessionDataLoaded || Boolean(holyMatrimony);
  const shouldShowReception = !isSessionDataLoaded || Boolean(reception);
  const shouldShowAfterParty = !isSessionDataLoaded || Boolean(afterParty);

  // Teapai sumbernya guestData, jadi kondisi "belum loaded"-nya ngecek guestData, bukan rawSessions
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
  // After Party render 1 baris
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
    "Mandarin Oriental Hotel",
    "Jl. Imam Bonjol, Menteng, Central Jakarta",
    "https://maps.app.goo.gl/7rba66o67yTGGZUy7",
  );

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
          </>
        )}

        {/* Divider icon + info Reception */}
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

        {/* List sesi: Teapai / Reception / After Party */}
        {(shouldShowTeapai || shouldShowReception || shouldShowAfterParty) && (
          <div className="flex flex-col items-center gap-y-[36px] lg:gap-y-[32.5px] mt-[30px] lg:mt-[31px]">
            {shouldShowTeapai && (
              <div className="flex items-center justify-center gap-[20px]">
                <motion.span
                  variants={fadeRight}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-[150px] lg:w-[150px] font-cinzel text-right font-bold text-[14px] lg:text-[14.18px] text-[#430D0D] leading-[16px] lg:leading-[18px]"
                >
                  {teapaiLine1} <br /> {teapaiLine2}
                </motion.span>
                <motion.span
                  variants={fadeLeft}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-[150px] lg:w-[150px] font-cinzel text-left text-[14px] lg:text-[14.18px] text-[#454545] leading-[16px]"
                >
                  {teapaiDate ? formatTime(teapaiDate) : "14.30 WIB"} <br />{" "}
                  {teapaiLocation ?? "Esquire Room"}
                </motion.span>
              </div>
            )}

            {shouldShowReception && (
              <div className="flex items-center justify-center gap-[20px]">
                <motion.span
                  variants={fadeRight}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-[150px] lg:w-[150px] font-cinzel text-right font-bold text-[14px] lg:text-[14.18px] text-[#430D0D] leading-[16px] lg:leading-[18px]"
                >
                  {receptionLine1} <br /> {receptionLine2}
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
                  {receptionLocation.addressName}
                </motion.span>
              </div>
            )}

            {shouldShowAfterParty && (
              <div className="flex items-center justify-center gap-[20px]">
                <motion.span
                  variants={fadeRight}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-[150px] lg:w-[150px] font-cinzel text-right font-bold text-[14px] lg:text-[14.18px] text-[#430D0D] leading-[16px] lg:leading-[18px]"
                >
                  {afterPartyLabel}
                </motion.span>
                <motion.span
                  variants={fadeLeft}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-[150px] lg:w-[150px] font-cinzel text-left text-[14px] lg:text-[14.18px] text-[#454545] leading-[16px]"
                >
                  {afterParty ? formatTime(afterParty.date) : "21.30 WIB"}{" "}
                  <br /> {afterParty?.addressName?.trim() ?? "Esquire Room"}
                </motion.span>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default EventOrder;
