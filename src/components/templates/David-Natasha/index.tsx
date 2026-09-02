"use client";

import React, { useState } from "react";

import Header from "./Header";
import Hero from "./Hero";
import Profile from "./Profile";
import Countdown from "./Countdown";
import EventOrder from "./EventOrder";
import Gallery from "./Gallery";
import Rsvp from "./Rsvp";
import Gift from "./Gift";
import Wishes from "./Wishes";
import Thankyou from "./Thankyou";
import Opening from "./Opening";
import LoadingScreen from "./LoadingScreen";

import { usePreloader } from "./hooks/usePreloader";
import { formatDateWithWeekday } from "../../../lib/formatDate";
import PlaySongButton from "../../../ui/PlaySongButton";

import { DavidNatashaDataProps } from "./types";
import type { useCurrentGuest } from "@/hooks/api/useCurrentGuest";

import {
  cormorantGaramond,
  costaRica,
  slight,
  sackersItalicScript,
  garamond,
  timesNewRomanBold,
} from "./fonts/fonts";

/*
 * Guest sudah diambil oleh app/[id]/page.tsx
 * dan dikirim melalui data.guest.
 */
type GuestData = ReturnType<typeof useCurrentGuest>["eventGuestByPin"];

interface DavidNatashaProps {
  data?: DavidNatashaDataProps & {
    guest?: GuestData;
  };
}

const DavidNatasha = ({ data }: DavidNatashaProps) => {
  const [start, setStart] = useState<boolean>(false);

  const [showLoading, setShowLoading] = useState<boolean>(true);

  /*
   * Guest tidak di-fetch ulang di template.
   */
  const guestData = data?.guest;

  const namaTamu = guestData?.name ?? "[Guest Name]";

  const groomName = data?.dataEvent?.groomName ?? "David";

  const brideName = data?.dataEvent?.brideName ?? "Natasya";

  const eventDate = data?.dataEvent?.date
    ? formatDateWithWeekday(data.dataEvent.date)
    : "SATURDAY, 10 OCTOBER 2026";

  /*
   * Background music.
   */
  const backgroundSoundUrl = data?.dataContent?.backgroundSoundData?.url
    ? `https://media.twinklebook.com/${data.dataContent.backgroundSoundData.url}`
    : "/audio/default-song.mp3";

  /*
   * Asset statis sudah ditentukan di usePreloader.
   * Gallery API tidak dimasukkan ke preloader.
   */
  const { loaded, progress } = usePreloader();

  return (
    <div
      className={`
        relative
        bg-[url('/images/David-Natasha/Kertas.avif')]
        bg-top
        [background-size:100%_auto]
        ${cormorantGaramond.variable}
        ${timesNewRomanBold.variable}
        ${garamond.variable}
        ${costaRica.variable}
        ${slight.variable}
        ${sackersItalicScript.variable}
      `}
    >
      {/* Background overlay */}
      <div
        className="
          absolute
          inset-0
          bg-white/60
          pointer-events-none
        "
      />

      {/* Main content */}
      <div className="relative z-10">
        <Header />

        <Hero start={start} data={data} />

        <Profile data={data} />

        <Countdown data={data} />

        <EventOrder data={data} />

        <Gallery data={data} />

        <Rsvp data={data} guestData={guestData} />

        <Gift data={data} />

        <Wishes data={data} guestData={guestData} />

        <Thankyou data={data} />
      </div>

      {/* Opening */}
      {!start && loaded && (
        <Opening
          setStart={setStart}
          namaTamu={namaTamu}
          groomName={groomName}
          brideName={brideName}
          popUpIconImageData={data?.dataContent?.popUpIconImageData}
        />
      )}

      {/* Background music */}
      <PlaySongButton src={backgroundSoundUrl} start={start} />

      {/* Loading screen */}
      {showLoading && (
        <LoadingScreen
          progress={progress}
          onDone={() => setShowLoading(false)}
          groomName={groomName}
          brideName={brideName}
          eventDate={eventDate}
        />
      )}
    </div>
  );
};

export default DavidNatasha;
