"use client";

import React, { useState, useEffect } from "react";
import { poppins, overpass } from "./fonts/fonts";
import Header from "./Header";
import Hero from "./Hero";
import Profile from "./Profile";
import Countdown from "./Countdown";
import Gallery from "./Gallery";
import EventOrder from "./EventOrder";
import Dresscode from "./Dresscode";
import Rsvp from "./Rsvp";
import Wishes from "./Wishes";
import Thankyou from "./Thankyou";
import Opening from "./Opening";
import LoadingScreen from "./LoadingScreen";
import RsvpButton from "../../../ui/RsvpButton";
import PlaySongButton from "../../../ui/PlaySongButton";
import { usePreloader } from "./hooks/usePreloader";
import { useCurrentGuest } from "@/hooks/api/useCurrentGuest";

type LincolnLaurensiaProps = {
  data?: any;
  isPreview?: boolean;
  dataValidation?: unknown;
};

const LincolnLaurensia = ({ data }: LincolnLaurensiaProps) => {
  const [start, setStart] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const { loaded, progress } = usePreloader();

  const { getEventGuestByPin, eventGuestByPin } = useCurrentGuest();

  useEffect(() => {
    if (data?.url) {
      const pin = localStorage.getItem(`${data.url}-pin`);
      if (pin) getEventGuestByPin(data.url, pin);
    }
  }, [data?.url, getEventGuestByPin]);

  const namaTamu =
    eventGuestByPin &&
    typeof eventGuestByPin === "object" &&
    "name" in eventGuestByPin &&
    typeof eventGuestByPin.name === "string"
      ? eventGuestByPin.name
      : "[Guest Name]";

  const groomName = data?.dataEvent?.groomName ?? "Lincoln";
  const brideName = data?.dataEvent?.brideName ?? "Laurensia";

  const hashTagRaw = data?.dataEvent?.hashTag;
  const hashTag =
    typeof hashTagRaw === "string" && hashTagRaw.trim()
      ? hashTagRaw.trim()
      : "kencenbersama";

  const backgroundSoundUrl = data?.dataContent?.backgroundSoundData?.url
    ? `https://media.twinklebook.com/${data.dataContent.backgroundSoundData.url}`
    : "/audio/default-song.mp3";

  return (
    <div className={`${poppins.variable} ${overpass.variable}`}>
      <Header />
      <Hero start={start} data={data} />
      <Profile />
      <Countdown data={data} />
      <Gallery data={data} />
      <EventOrder data={data} />
      <Dresscode guestData={eventGuestByPin} />
      <Rsvp data={data} guestData={eventGuestByPin} />
      <Wishes data={data} guestData={eventGuestByPin} />
      <Thankyou data={data} />

      {!start && loaded && (
        <Opening
          setStart={setStart}
          namaTamu={namaTamu}
          groomName={groomName}
          brideName={brideName}
          popUpIconImageData={data?.dataContent?.popUpIconImageData}
          hashTag={hashTag}
        />
      )}

      <PlaySongButton src={backgroundSoundUrl} start={start} />

      <RsvpButton />

      {showLoading && (
        <LoadingScreen
          progress={progress}
          onDone={() => setShowLoading(false)}
        />
      )}
    </div>
  );
};

export default LincolnLaurensia;