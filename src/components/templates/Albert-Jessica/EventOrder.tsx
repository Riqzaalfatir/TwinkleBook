import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import moment from "moment";
import { fadeUp } from "../../../lib/animation";

type SessionItem = {
  id: string;
  eventSessionId: string;
  eventId: string;
  name: string;
  date: string;
  address: string;
  addressName: string;
  latLong: string;
  quota?: number;
};

type EventOrderProps = {
  data?: any;
};

const buildMapsUrl = (session: SessionItem) => {
  // 1. Kalau latLong udah berupa link Maps (dari hardcode/CMS), pakai langsung
  if (session.latLong?.startsWith("http")) {
    return session.latLong;
  }

  // 2. Kalau ada address lengkap dari API, search by nama/alamat (lebih akurat, muncul listing resmi)
  if (session.address) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(session.address)}`;
  }

  // 3. Fallback terakhir: koordinat mentah
  if (session.latLong) {
    return `https://www.google.com/maps/search/?api=1&query=${session.latLong.replace(/\s/g, "")}`;
  }

  return "https://maps.app.goo.gl/vfD7wKoZg1gEY2M88";
};

const formatTime = (date: string) => moment(date).format("HH.mm") + " WIB";

const findSessionByName = (
  sessions: SessionItem[],
  keyword: string,
): SessionItem | undefined => {
  return sessions.find((s) =>
    s.name?.toLowerCase().includes(keyword.toLowerCase()),
  );
};

const SHORT_ADDRESS_MAP: Record<string, string> = {
  "HOLY MATRIMONY": "Jl. Pandu no. 4, Bandung",
  "TEA PAI": "Jl. dr. Djundjunan no. 96, Pasteur, Bandung",
  "WEDDING RECEPTION": "Jl. dr. Djundjunan no. 96, Pasteur, Bandung",
};

const MAX_ADDRESS_LENGTH = 60;

const renderAddress = (session: SessionItem) => {
  const apiAddress = session.address ?? "";

  if (apiAddress.length <= MAX_ADDRESS_LENGTH) {
    return apiAddress;
  }

  const shortAddr = SHORT_ADDRESS_MAP[session.name?.toUpperCase()];
  return shortAddr ?? apiAddress;
};

// Kata kunci ruangan — kalau addressName mengandung salah satu ini,
// break line akan dipaksa persis setelah kata kunci itu
const ROOM_KEYWORDS = ["Room", "Hall", "Ballroom", "Chapel"];

const renderVenueName = (addressName: string) => {
  if (!addressName) return null;

  for (const keyword of ROOM_KEYWORDS) {
    const regex = new RegExp(`(.*${keyword})\\s+(.*)`, "i");
    const match = addressName.match(regex);

    if (match) {
      const [, beforeBreak, afterBreak] = match;
      if (afterBreak.trim()) {
        return (
          <>
            {beforeBreak.trim()}
            <br />
            {afterBreak.trim()}
          </>
        );
      }
    }
  }

  // Nggak ketemu kata kunci → tampil apa adanya, CSS max-w yang urus wrap
  return <>{addressName}</>;
};

const DEFAULT_HOLY_MATRIMONY: SessionItem = {
  id: "",
  eventSessionId: "",
  eventId: "",
  name: "Holy Matrimony",
  date: "2026-09-12T11:00:00",
  addressName: "Gereja Bunda Tujuh Kedukaan",
  address: "Jl. Pandu no. 4, Bandung",
  latLong: "https://maps.app.goo.gl/vfD7wKoZg1gEY2M88",
};

const DEFAULT_TEA_PAI: SessionItem = {
  id: "",
  eventSessionId: "",
  eventId: "",
  name: "Tea Pai",
  date: "2026-09-12T16:30:00",
  addressName: "Meridien Room Holiday Inn Bandung Pasteur",
  address: "Jl. dr. Djundjunan no. 96, Pasteur, Bandung",
  latLong: "https://maps.app.goo.gl/qZjWW7xVTicgqgpc9",
};

const DEFAULT_RECEPTION: SessionItem = {
  id: "",
  eventSessionId: "",
  eventId: "",
  name: "Wedding Reception",
  date: "2026-09-12T18:00:00",
  addressName: "Empire Ballroom Holiday Inn Bandung Pasteur",
  address: "Jl. dr. Djundjunan no. 96, Pasteur, Bandung",
  latLong: "https://maps.app.goo.gl/qZjWW7xVTicgqgpc9",
};

const EventOrder = ({ data }: EventOrderProps) => {
  const currentEventId = data?.dataEvent?.id;
  const rawSessions: SessionItem[] = data?.dataSession ?? [];

  const validSessions = rawSessions.filter((s) => s.eventId === currentEventId);

  const holyMatrimony =
    findSessionByName(validSessions, "holy matrimony") ??
    DEFAULT_HOLY_MATRIMONY;

  const teaPai = findSessionByName(validSessions, "tea pai") ?? DEFAULT_TEA_PAI;

  const reception =
    findSessionByName(validSessions, "reception") ?? DEFAULT_RECEPTION;

  return (
    <section id="eventorder" className="relative w-full z-10 px-[27px]">
      <div className="bg-[#F4F4F4] rounded-[30px]">
        <div className="flex flex-col items-center justify-center pt-[74px] pb-[83px] gap-[35px]">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="uppercase font-marcellus text-[28px] text-[#4E4E4E]"
          >
            EVENT DETAIL
          </motion.h3>

          {/* HOLY MATRIMONY */}
          <div className="flex flex-col items-center justify-center text-center">
            <Image
              src="/images/Albert-Jessica/EventOrder/Gereja.webp"
              alt="Ornament"
              width={250}
              height={250}
              className="-mt-[12px] w-[59px] h-auto pointer-events-none"
            />
            <p className="font-lora font-medium text-[14px] text-[#33302D] pt-[26px] uppercase">
              {holyMatrimony.name}
            </p>
            <p className="font-lora text-[16px] font-semibold text-[#33302D] uppercase pt-[17px]">
              {formatTime(holyMatrimony.date)}
            </p>
            <p className="font-lora font-medium text-[14px] text-[#33302D] pt-[17px] max-w-[250px] mx-auto">
              {renderVenueName(holyMatrimony.addressName)}
              <span className="block font-normal text-[12px]">
                {renderAddress(holyMatrimony)}
              </span>
            </p>
            <a
              href={buildMapsUrl(holyMatrimony)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-[160px] h-[33px] text-[14px] font-lora font-semibold text-white bg-[#4E4E4E] rounded-[6px] mt-[20px]"
            >
              GOOGLE MAPS
            </a>
          </div>

          {/* TEA PAI */}
          <div className="flex flex-col items-center justify-center text-center -mt-[12px]">
            <Image
              src="/images/Albert-Jessica/EventOrder/Teko.webp"
              alt="Ornament"
              width={250}
              height={250}
              className="mt-[30px] w-[95px] h-auto pointer-events-none"
            />
            <p className="font-lora font-medium text-[14px] text-[#33302D] pt-[26px] uppercase">
              {teaPai.name}
            </p>
            <p className="font-lora text-[16px] font-semibold text-[#33302D] uppercase pt-[17px]">
              {formatTime(teaPai.date)}
            </p>
            <p className="font-lora font-medium text-[14px] text-[#33302D] pt-[17px] max-w-[250px] mx-auto">
              {renderVenueName(teaPai.addressName)}
              <span className="block font-normal text-[12px]">
                {renderAddress(teaPai)}
              </span>
            </p>
            <a
              href={buildMapsUrl(teaPai)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-[160px] h-[33px] text-[14px] font-lora font-semibold text-white bg-[#4E4E4E] rounded-[6px] mt-[20px]"
            >
              GOOGLE MAPS
            </a>
          </div>

          {/* WEDDING RECEPTION */}
          <div className="flex flex-col items-center justify-center text-center -mt-[12px]">
            <Image
              src="/images/Albert-Jessica/EventOrder/Cheers.webp"
              alt="Ornament"
              width={250}
              height={250}
              className="mt-[30px] w-[64px] h-auto pointer-events-none"
            />
            <p className="font-lora font-medium text-[14px] text-[#33302D] pt-[26px] uppercase">
              {reception.name}
            </p>
            <p className="font-lora text-[16px] font-semibold text-[#33302D] uppercase pt-[17px]">
              {formatTime(reception.date)}
            </p>
            <p className="font-lora font-medium text-[14px] text-[#33302D] pt-[17px] max-w-[250px] mx-auto">
              {renderVenueName(reception.addressName)}
              <span className="block font-normal text-[12px]">
                {renderAddress(reception)}
              </span>
            </p>
            <a
              href={buildMapsUrl(reception)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-[160px] h-[33px] text-[14px] font-lora font-semibold text-white bg-[#4E4E4E] rounded-[6px] mt-[20px]"
            >
              GOOGLE MAPS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventOrder;