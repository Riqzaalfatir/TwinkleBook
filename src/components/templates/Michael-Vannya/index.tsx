"use client";

import { useState, useEffect } from "react";
import Hero from "./Hero";
import Profile from "./Profile";
import Countdown from "./Countdown";
import EventOrder from "./EventOrder";
import Foto from "./Foto";
import Dresscode from "./Dresscode";
import Rsvp from "./Rsvp";
import Gallery from "./Gallery";
import Gift from "./Gift";
import Wishes from "./Wishes";
import Thankyou from "./Thankyou";
import Header from "./Header";
import Opening from "./Opening";
import LoadingScreen from "./LoadingScreen";
import { usePreloader } from "./hooks/usePreloader";
import { useCurrentGuest } from "@/hooks/api/useCurrentGuest";
import PlaySongButton from "../../../ui/PlaySongButton";
import { kinfolk, timesNewRoman } from "./fonts/fonts";

type MichaelVannyaProps = {
  data?: any;
  isPreview?: boolean;
  dataValidation?: unknown;
};

const MichaelVannya = ({
  data,
  isPreview,
  dataValidation,
}: MichaelVannyaProps) => {
  const [start, setStart] = useState<boolean>(false); // false = tampilin Opening dulu
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

  const namaTamu = eventGuestByPin?.name ?? "Tamu Undangan";
  const groomName = data?.dataEvent?.groomName ?? "Michael";
  const brideName = data?.dataEvent?.brideName ?? "Vannya";

  const backgroundSoundUrl = data?.dataContent?.backgroundSoundData?.url
    ? `https://media.twinklebook.com/${data.dataContent.backgroundSoundData.url}`
    : "/audio/default-song.mp3"; // fallback statis kalau API kosong

  const galleryImageData = data?.dataContent?.galleryImageData ?? [];
  const galleryUrls = galleryImageData
    .slice(0, 2)
    .map((item: any) => `https://media.twinklebook.com/${item.url}`);

  const { loaded, progress } = usePreloader({ dynamicImages: galleryUrls });

  return (
    <div className={`${kinfolk.variable} ${timesNewRoman.variable}`}>
      <Header />
      <Hero start={start} data={data} />
      <Profile data={data} />
      <Countdown data={data} />
      <EventOrder data={data} />
      {/* <Foto /> */}
      <Gallery data={data} />
      <Dresscode />
      <Rsvp data={data} guestData={eventGuestByPin} />
      <Gift data={data} />
      <Wishes data={data} guestData={eventGuestByPin} />
      <Thankyou data={data} />

      {!start && loaded && (
        <Opening
          setStart={setStart}
          namaTamu={namaTamu}
          groomName={groomName}
          brideName={brideName}
          popUpIconImageData={data?.dataContent?.popUpIconImageData}
        />
      )}

      <PlaySongButton src={backgroundSoundUrl} start={start} />

      {showLoading && (
        <LoadingScreen
          progress={progress}
          onDone={() => setShowLoading(false)}
          data={data}
        />
      )}
    </div>
  );
};

export default MichaelVannya;
