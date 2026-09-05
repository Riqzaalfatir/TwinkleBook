"use client";

import React from "react";
import Image from "next/image";
import moment from "moment";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";
import { DavidNatashaDataProps } from "./types";

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
  data?: DavidNatashaDataProps;
};

type VenueDummy = {
  image: string;
  alt: string;
  addressName: string;
  address: string;
  mapUrl: string;
  titleBreakAfterWords?: number;
};

/*
 * Dummy khusus venue yang sudah dikenal.
 *
 * image:
 * menggunakan gambar lokal karena API tidak menyediakan
 * gambar gedung.
 *
 * address:
 * digunakan sebagai fallback.
 */
const VENUE_DUMMY: Record<string, VenueDummy> = {
  "HOLY MATRIMONY": {
    image: "/images/David-Natasha/EventOrder/GIIDago.avif",
    alt: "GII HOK IM TONG Dago",
    addressName: "GII HOK IM TONG - DAGO",
    address: "Jl. Cikapayang No. 2-4, Kota Bandung",
    mapUrl: "https://maps.app.goo.gl/4E2uyDg52DDiW5hn7",
  },

  "WEDDING RECEPTION": {
    image: "/images/David-Natasha/EventOrder/Intercontinental.avif",
    alt: "Intercontinental Bandung Dago Pakar",
    addressName: "INTERCONTINENTAL BANDUNG DAGO PAKAR",
    address: "Jl. Resor Dago Pakar Raya 2B Resor Dago Pakar, Kota Bandung",
    mapUrl: "https://maps.app.goo.gl/QPdiNEsZX5cvHibA8",
    titleBreakAfterWords: 2,
  },
};

const formatTime = (date: string) => moment(date).format("HH.mm") + " WIB";

/*
 * Cari session berdasarkan nama
 * dan pastikan session berasal
 * dari event yang sedang aktif.
 */
const findSessionByName = (
  sessions: SessionItem[],
  name: string,
  validEventId?: string,
) =>
  sessions.find(
    (session) =>
      session.name?.trim().toUpperCase() === name &&
      Boolean(validEventId) &&
      session.eventId === validEventId,
  );

/*
 * Alamat dari API dipakai apabila
 * tidak lebih panjang dari alamat fallback.
 */
const resolveAddress = (
  apiAddress: string | null | undefined,
  dummyAddress: string,
): string => {
  const clean = apiAddress?.trim();

  if (clean && clean.length <= dummyAddress.length) {
    return clean;
  }

  return dummyAddress;
};

/*
 * Split alamat panjang menjadi 2 baris
 * setelah koma terakhir.
 */
const renderAddressWithLineBreak = (address: string) => {
  const commaIndex = address.lastIndexOf(",");

  if (commaIndex === -1) {
    return address;
  }

  const firstLine = address.slice(0, commaIndex + 1);

  const secondLine = address.slice(commaIndex + 1).trim();

  if (!secondLine) {
    return firstLine;
  }

  return (
    <>
      {firstLine}
      <br className="lg:hidden" />
      {secondLine}
    </>
  );
};

/*
 * Break judul venue menjadi 2 baris
 * jika venue memiliki konfigurasi
 * titleBreakAfterWords.
 */
const renderTitleWithBreak = (text: string, breakAfterWords?: number) => {
  if (!breakAfterWords) {
    return text;
  }

  const words = text.split(" ");

  if (words.length <= breakAfterWords) {
    return text;
  }

  const firstLine = words.slice(0, breakAfterWords).join(" ");

  const secondLine = words.slice(breakAfterWords).join(" ");

  return (
    <>
      {firstLine}{" "}
      <br className="lg:hidden" />
      {secondLine}
    </>
  );
};

/*
 * Venue dikenal:
 * pakai map URL statis.
 *
 * Venue lain:
 * gunakan latLong dari API.
 */
const resolveMapUrl = (
  session: SessionItem | undefined,
  dummyMapUrl?: string,
): string => {
  if (dummyMapUrl) {
    return dummyMapUrl;
  }

  const latLong = session?.latLong;

  if (!latLong) {
    return "#";
  }

  if (latLong.startsWith("http")) {
    return latLong;
  }

  return `https://www.google.com/maps/search/?api=1&query=${latLong.replace(
    /\s/g,
    "",
  )}`;
};

const EventOrder = ({ data }: EventOrderProps) => {
  /*
   * FIX:
   *
   * eventSessionByPin / dataSession
   * dari type API bisa terbaca sebagai {}.
   *
   * Pastikan hanya array yang diterima
   * sebagai SessionItem[].
   */
  const sessionSource = data?.eventSessionByPin ?? data?.dataSession;

  const rawSessions: SessionItem[] = Array.isArray(sessionSource)
    ? sessionSource
    : [];

  const validEventId: string | undefined = data?.dataEvent?.id;

  const isSessionDataLoaded = rawSessions.length > 0;

  /*
   * Session utama
   */
  const holyMatrimony = findSessionByName(
    rawSessions,
    "HOLY MATRIMONY",
    validEventId,
  );

  const reception = findSessionByName(
    rawSessions,
    "WEDDING RECEPTION",
    validEventId,
  );

  /*
   * Sebelum data session tersedia,
   * gunakan fallback static.
   */
  const shouldShowHoly = !isSessionDataLoaded || Boolean(holyMatrimony);

  const shouldShowReception = !isSessionDataLoaded || Boolean(reception);

  /*
   * Session lain selain
   * Holy Matrimony dan Wedding Reception.
   */
  const extraSessions = rawSessions.filter((session) => {
    const nameUpper = session.name?.trim().toUpperCase() ?? "";

    const isKnown =
      nameUpper === "HOLY MATRIMONY" || nameUpper === "WEDDING RECEPTION";

    return (
      !isKnown && Boolean(validEventId) && session.eventId === validEventId
    );
  });

  const holyDummy = VENUE_DUMMY["HOLY MATRIMONY"];

  const receptionDummy = VENUE_DUMMY["WEDDING RECEPTION"];

  const holyTitle =
    holyMatrimony?.addressName?.trim().toUpperCase() || holyDummy.addressName;

  const receptionTitle =
    reception?.addressName?.trim().toUpperCase() || receptionDummy.addressName;

  const holyAddress = resolveAddress(holyMatrimony?.address, holyDummy.address);

  const receptionAddress = resolveAddress(
    reception?.address,
    receptionDummy.address,
  );

  return (
    <section id="eventorder" className="relative w-full z-10">
      {/* ========================== */}
      {/* DECORATION MOBILE TOP */}
      {/* ========================== */}

      <Image
        src="/images/David-Natasha/EventOrder/BungaAtasA.avif"
        alt="flower decoration"
        width={500}
        height={500}
        className="absolute -top-[0vw] -left-[0vw] w-[71vw] h-auto pointer-events-none z-20 lg:hidden"
      />

      {/* ========================== */}
      {/* DECORATION DESKTOP TOP */}
      {/* ========================== */}

      <Image
        src="/images/David-Natasha/EventOrder/BungaAtasD.avif"
        alt="flower decoration"
        width={500}
        height={500}
        className="absolute -top-[0vw] -left-[0vw] w-[44vw] h-auto pointer-events-none z-20 hidden lg:block"
      />

      {/* ========================== */}
      {/* DECORATION MOBILE BOTTOM */}
      {/* ========================== */}

      <Image
        src="/images/David-Natasha/EventOrder/AsetBawahM.avif"
        alt="flower decoration"
        width={650}
        height={650}
        className="absolute -bottom-[0vw] -right-[0vw] w-[73vw] h-auto pointer-events-none z-20 lg:hidden"
      />

      {/* ========================== */}
      {/* DECORATION DESKTOP BOTTOM */}
      {/* ========================== */}

      <Image
        src="/images/David-Natasha/EventOrder/AsetBawahD.avif"
        alt="flower decoration"
        width={650}
        height={650}
        className="absolute -bottom-[0vw] -right-[0vw] w-[33vw] h-auto pointer-events-none z-20 hidden lg:block"
      />

      <div className="relative z-[15] flex flex-col items-center text-center pt-[98px] lg:pt-[144px] pb-[29.45vw] lg:pb-[144px]">
        {/* ========================== */}
        {/* TITLE */}
        {/* ========================== */}

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="font-sackers-italic-script text-[13.33vw] lg:text-[5.29vw] text-[#021125] [--stroke-w:0.3px] lg:[--stroke-w:0.53px]"
          style={{
            WebkitTextStroke: "var(--stroke-w) #021125",
          }}
        >
          Event Detail
        </motion.h1>

        {/* ========================== */}
        {/* HOLY MATRIMONY */}
        {/* ========================== */}

        {shouldShowHoly && (
          <div className="flex flex-col items-center justify-center leading-none mt-[5.6vw] lg:mt-[1.35vw]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
            >
              <Image
                src={holyDummy.image}
                alt={holyDummy.alt}
                width={750}
                height={750}
                className="w-[88vw] lg:w-[32.2vw] h-auto pointer-events-none"
              />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              className="font-cormorant-garamond text-[5.13vw] lg:text-[1.98vw] font-bold text-[#021125] tracking-wide mt-[11.2vw] lg:mt-[2.75vw]"
            >
              {holyMatrimony?.name?.toUpperCase() ?? "HOLY MATRIMONY"}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              className="font-cormorant-garamond font-medium text-[4.62vw] lg:text-[1.98vw] text-[#021125] mt-[5.13vw] lg:mt-[2.05vw]"
            >
              {holyMatrimony ? formatTime(holyMatrimony.date) : "10.30 WIB"}
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              className="font-cormorant-garamond text-[3.85vw] lg:text-[1.98vw] font-bold text-[#021125] mt-[5.3vw] lg:mt-[1.89vw] leading-[5.13vw] lg:leading-[1.98vw]"
            >
              {renderTitleWithBreak(holyTitle, holyDummy.titleBreakAfterWords)}
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              className="font-cormorant-garamond text-[3.59vw] lg:text-[1.32vw] text-[#021125] mt-[1.4vw] font-medium leading-[4.13vw] lg:leading-[1.98vw] lg:mt-[0.73vw] max-w-[55vw] lg:max-w-[60vw]"
            >
              {holyAddress}
            </motion.p>

            <motion.a
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              href={resolveMapUrl(holyMatrimony, holyDummy.mapUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[5.5vw] lg:mt-[0.9vw] w-[41.03vw] lg:w-[10.58vw] h-[7.69vw] lg:h-[1.98vw] bg-[#021125] text-white text-[3.59vw] lg:text-[0.93vw] tracking-wide font-medium rounded-[1.54vw] lg:rounded-[0.40vw] font-cormorant-garamond flex items-center justify-center"
            >
              GOOGLE MAPS
            </motion.a>
          </div>
        )}

        {/* ========================== */}
        {/* WEDDING RECEPTION */}
        {/* ========================== */}

        {shouldShowReception && (
          <div
            className={`flex flex-col items-center justify-center leading-none ${
              shouldShowHoly
                ? "mt-[18.2vw] lg:mt-[7.15vw]"
                : "mt-[5.6vw] lg:mt-[1.35vw]"
            }`}
          >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
            >
              <Image
                src={receptionDummy.image}
                alt={receptionDummy.alt}
                width={550}
                height={550}
                className="w-[88vw] lg:w-[32.2vw] h-auto pointer-events-none"
              />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              className="font-cormorant-garamond text-[5.13vw] lg:text-[1.98vw] font-bold text-[#021125] mt-[11.2vw] lg:mt-[2.75vw]"
            >
              {reception?.name?.toUpperCase() ?? "WEDDING RECEPTION"}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              className="font-cormorant-garamond font-medium text-[4.62vw] lg:text-[1.98vw] text-[#021125] mt-[5.13vw] lg:mt-[2.05vw]"
            >
              {reception ? formatTime(reception.date) : "18.00 WIB"}
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              className="font-cormorant-garamond text-[3.85vw] lg:text-[1.98vw] font-bold text-[#021125] mt-[5.3vw] leading-[5.13vw] lg:leading-[1.98vw] lg:mt-[1.98vw]"
            >
              GRAND BALLROOM
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              className="font-cormorant-garamond text-[3.85vw] lg:text-[1.98vw] font-bold text-[#021125] mt-[1.5vw] leading-[5.13vw] lg:leading-[1.98vw] lg:mt-[1vw]"
            >
              {renderTitleWithBreak(
                receptionTitle,
                receptionDummy.titleBreakAfterWords,
              )}
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              className="font-cormorant-garamond font-medium text-[3.59vw] lg:text-[1.32vw] text-[#021125] mt-[1.4vw] leading-[4.13vw] lg:leading-[1.98vw] lg:mt-[0.73vw] max-w-[49vw] lg:max-w-[60vw]"
            >
              {receptionAddress}
            </motion.p>

            <motion.a
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              href={resolveMapUrl(reception, receptionDummy.mapUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[5.5vw] lg:mt-[0.9vw] w-[41.03vw] lg:w-[10.58vw] h-[7.69vw] lg:h-[1.98vw] bg-[#021125] text-white text-[3.59vw] lg:text-[0.93vw] font-medium tracking-wide rounded-[1.54vw] lg:rounded-[0.40vw] font-cormorant-garamond flex items-center justify-center"
            >
              GOOGLE MAPS
            </motion.a>
          </div>
        )}

        {/* ========================== */}
        {/* EXTRA SESSION */}
        {/* ========================== */}

        {extraSessions.map((session) => (
          <div
            key={session.id}
            className="flex flex-col items-center justify-center leading-none mt-[18.2vw] lg:mt-[7.15vw]"
          >
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              className="font-cormorant-garamond text-[5.13vw] lg:text-[1.98vw] font-bold text-[#021125] tracking-wide"
            >
              {session.name?.toUpperCase()}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              className="font-cormorant-garamond font-medium text-[4.62vw] lg:text-[1.98vw] text-[#021125] mt-[5.13vw] lg:mt-[2.05vw]"
            >
              {formatTime(session.date)}
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              className="font-cormorant-garamond text-[3.85vw] lg:text-[1.98vw] font-bold text-[#021125] mt-[5.3vw] lg:mt-[1.89vw] leading-[5.13vw] lg:leading-[1.98vw]"
            >
              {session.addressName?.trim().toUpperCase() || "-"}
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              className="font-cormorant-garamond text-[3.59vw] lg:text-[1.32vw] text-[#021125] mt-[1.4vw] font-medium leading-[4.13vw] lg:leading-[1.98vw] lg:mt-[0.73vw]"
            >
              {session.address
                ? renderAddressWithLineBreak(session.address.trim())
                : "-"}
            </motion.p>

            <motion.a
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              href={resolveMapUrl(session)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[5.5vw] lg:mt-[0.9vw] w-[41.03vw] lg:w-[10.58vw] h-[7.69vw] lg:h-[1.98vw] bg-[#021125] text-white text-[3.59vw] lg:text-[0.93vw] tracking-wide font-medium rounded-[1.54vw] lg:rounded-[0.40vw] font-cormorant-garamond flex items-center justify-center"
            >
              GOOGLE MAPS
            </motion.a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventOrder;
