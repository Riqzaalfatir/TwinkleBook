"use client";

import React, { useState } from "react";
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
import {
  cormorantGaramond,
  costaRica,
  slight,
  sackersItalicScript,
  garamond,
  timesNewRomanBold,
} from "./fonts/fonts";

const DavidNatasha = () => {
  const [start, setStart] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(true);

  const dynamicImages = ["/images/David-Natasha/Hero/DNBackground.webp"];

  const { loaded, progress } = usePreloader({ dynamicImages });

  return (
    <div
      className={`relative bg-[url('/images/David-Natasha/Kertas.svg')] bg-repeat-y bg-top [background-size:100%_auto] ${cormorantGaramond.variable} ${timesNewRomanBold.variable} ${garamond.variable} ${costaRica.variable} ${slight.variable} ${sackersItalicScript.variable}`}
    >
      <Header />
      <Hero start={start} />
      <Profile />
      <Countdown />
      <EventOrder />
      <Gallery />
      <Rsvp />
      <Gift />
      <Wishes />
      <Thankyou />

      {!start && loaded && <Opening setStart={setStart} />}

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