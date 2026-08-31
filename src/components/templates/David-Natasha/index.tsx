"use client";

import React, { useState, useEffect } from "react";
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
        {/* <Profile data={data} /> */}
        <Profile />
        <Countdown data={data} />
        <EventOrder />
        <Gallery data={data} />
        {/* <Rsvp data={data} guestData={eventGuestByPin} /> */}
        <Rsvp />
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

      {showLoading && (
        <LoadingScreen
          progress={progress}
          onDone={() => setShowLoading(false)}
        />
      )}
    </div>
  );
};

export default DavidNatasha;
