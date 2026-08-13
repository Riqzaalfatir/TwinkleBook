"use client";

import Image from "next/image";
import { useState, useEffect } from "react"; 
import {
  athelas,
  poltawskiNowy,
  lora,
  playfairDisplay,
  cylburn,
  milyuna,
} from "./fonts/fonts";
import Header from "./Header";
import Hero from "./Hero";
import Profile from "./Profile";
import Countdown from "./Countdown";
import EventOrder from "./EventOrder";
import Dresscode from "./Dresscode";
import Rsvp from "./Rsvp";
import Gallery from "./Gallery";
import Wishes from "./Wishes";
import Thankyou from "./Thankyou";
import Opening from "./Opening";
import LoadingScreen from "./LoadingScreen";
import { usePreloader } from "./hooks/usePreloader";
import { useCurrentGuest } from "../../../hooks/api/useCurrentGuest";
import PlaySongButton from "../../../ui/PlaySongButton";


type AtetHalimProps = {
  data?: any;
  isPreview?: boolean;
  dataValidation?: unknown;
};

const AtetHalim = ({ data, isPreview, dataValidation }: AtetHalimProps) => {
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

  const namaTamu = eventGuestByPin?.name ?? "Tamu Undangan";

  const groomName = data?.dataEvent?.groomName ?? "Groom";
  const groomFullName = data?.dataEvent?.groomFullName ?? "Groom Name";
  const brideName = data?.dataEvent?.brideName ?? "Bride";
  const brideFullName = data?.dataEvent?.brideFullName ?? "Bride Name";

  const backgroundSoundUrl = data?.dataContent?.backgroundSoundData?.url
  ? `https://media.twinklebook.com/${data.dataContent.backgroundSoundData.url}`
  : "/audio/default-song.mp3"; // fallback statis kalau API kosong

  const eventSessions = data?.dataSession ?? [];

  const { loaded, progress } = usePreloader();

  return (
    <div
      className={`${athelas.variable} ${poltawskiNowy.variable} ${playfairDisplay.variable} ${lora.variable} ${cylburn.variable} ${milyuna.variable} relative w-full`}
    >
      <div
        className="absolute inset-0 -z-10 bg-[#F6F6F4] bg-repeat [background-size:390px_auto] lg:[background-size:1914px_auto]
          bg-[url('/images/Atet-Halim/Hero/BackgoundKertas.webp')]
          lg:bg-[url('/images/Atet-Halim/Hero/BgKertasD.webp')]"
      />

      <Header />
      <Hero data={data} start={start} />
      <Profile data={data} />
      <Countdown data={data} />
      <EventOrder data={data} />
      <Dresscode data={data} />
      <Rsvp data={data} />
      <Gallery data={data} />
      <Wishes data={data} />
      <Thankyou data={data} />

      {!start && loaded && (
        <Opening
          setStart={setStart}
          namaTamu={namaTamu}
          groomName={groomName}
          groomFullName={groomFullName}
          brideName={brideName}
          brideFullName={brideFullName}
        />
      )}

                <PlaySongButton src={backgroundSoundUrl} start={start} />


      {showLoading && (
        <LoadingScreen
          progress={progress}
          onDone={() => setShowLoading(false)} 
        />
      )}
    </div>
  );
};

export default AtetHalim;

