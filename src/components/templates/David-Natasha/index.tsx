"use client";

import React, { useState, useEffect, useRef } from "react";
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
import Header from "./Header";
import { usePreloader } from "./hooks/usePreloader";
import { useCurrentGuest } from "@/hooks/api/useCurrentGuest";
import { formatDateWithWeekday } from "../../../lib/formatDate";
import PlaySongButton, {
  PlaySongButtonHandle,
} from "../../../ui/PlaySongButton";
import {
  cormorantGaramond,
  costaRica,
  slight,
  sackersItalicScript,
  garamond,
  timesNewRomanBold,
} from "./fonts/fonts";

type DavidNatashaProps = {
  data?: any;
  isPreview?: boolean;
  dataValidation?: unknown;
};

const DavidNatasha = ({
  data,
  isPreview,
  dataValidation,
}: DavidNatashaProps) => {
  const [start, setStart] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const playSongRef = useRef<PlaySongButtonHandle>(null);

  const { getEventGuestByPin, eventGuestByPin } = useCurrentGuest();

  useEffect(() => {
    if (data?.url) {
      const pin = localStorage.getItem(`${data.url}-pin`);
      if (pin) {
        getEventGuestByPin(data.url, pin);
      }
    }
  }, [data?.url, getEventGuestByPin]);

  const namaTamu = eventGuestByPin?.name ?? "[Guest Name]";
  const groomName = data?.dataEvent?.groomName ?? "David";
  const brideName = data?.dataEvent?.brideName ?? "Natasya";
  const eventDate = data?.dataEvent?.date
    ? formatDateWithWeekday(data.dataEvent.date)
    : "SATURDAY, 10 OCTOBER 2026";

  // Kalau API gak nyediain lagu, jangan pakai fallback statis — biarin string kosong.
  // Tombolnya tetep muncul, cuma pas di-play gak ada suara (gak ada src buat di-load).
  const backgroundSoundUrl = data?.dataContent?.backgroundSoundData?.url
    ? `https://media.twinklebook.com/${data.dataContent.backgroundSoundData.url}`
    : "";

  const dynamicImages = ["/images/David-Natasha/Hero/DNBackground.webp"];

  const { loaded, progress } = usePreloader({ dynamicImages });

  return (
    <div
      className={`relative bg-[url('/images/David-Natasha/Kertas.webp')] bg-top [background-size:100%_auto] ${cormorantGaramond.variable} ${timesNewRomanBold.variable} ${garamond.variable} ${costaRica.variable} ${slight.variable} ${sackersItalicScript.variable}`}
    >
      <div className="absolute inset-0 bg-white/60 pointer-events-none" />

      <div className="relative z-10">
        <Header />
        <Hero start={start} data={data} />
        <Profile data={data} />
        {/* <Profile /> */}
        <Countdown data={data} />
        <EventOrder data={data} />
        <Gallery data={data} />
        <Rsvp data={data} guestData={eventGuestByPin} />
        {/* <Rsvp /> */}
        <Gift data={data} />
        <Wishes data={data} guestData={eventGuestByPin} />
        <Thankyou data={data} />
      </div>

      {!start && loaded && (
        <Opening
          setStart={setStart}
          namaTamu={namaTamu}
          groomName={groomName}
          brideName={brideName}
          popUpIconImageData={data?.dataContent?.popUpIconImageData}
        />
      )}

      <PlaySongButton
        ref={playSongRef}
        src={backgroundSoundUrl}
        start={start}
      />

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