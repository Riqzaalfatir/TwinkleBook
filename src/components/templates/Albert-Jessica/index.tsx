"use client";

import { useState, useEffect } from "react";
import DesktopCover from "../Albert-Jessica/layout/DekstopCover";
import Hero from "../Albert-Jessica/Hero";
import Profile from "../Albert-Jessica/Profile";
import Nama from "../Albert-Jessica/Nama";
import Countdown from "../Albert-Jessica/Countdown";
import EventOrder from "./EventOrder";
import Gallery from "./Gallery";
import Dresscode from "./Dresscode";
import Rsvp from "./Rsvp";
import WeddingGift from "./WeddingGift";
import Wishes from "./Wishes";
import Thankyou from "./Thankyou";
import Opening from "./Opening";
import Header from "./Header";
import LoadingScreen from "../Albert-Jessica/LoadingScreen";
import { usePreloader } from "../Albert-Jessica/hooks/usePreloader";
import { useCurrentGuest } from "@/hooks/api/useCurrentGuest";
import VideoBackground from "../Albert-Jessica/layout/VideoBackground";
import PlaySongButton from "../../../ui/PlaySongButton";
import {
  lora,
  marcellus,
  cormorantGaramond,
  slight,
} from "../Albert-Jessica/fonts/fonts";
import Image from "next/image";

type AlbertJessicaProps = {
  data?: any;
  isPreview?: boolean;
  dataValidation?: unknown;
};

const AlbertJessica = ({
  data,
  isPreview,
  dataValidation,
}: AlbertJessicaProps) => {
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

  const namaTamu = eventGuestByPin?.name ?? "Sela";
  const groomName = data?.dataEvent?.groomName ?? "Albert";
  const brideName = data?.dataEvent?.brideName ?? "Jessica";

  const backgroundSoundUrl = data?.dataContent?.backgroundSoundData?.url
    ? `https://media.twinklebook.com/${data.dataContent.backgroundSoundData.url}`
    : "/audio/default-song.mp3"; // fallback statis kalau API kosong

  const galleryImageData = data?.dataContent?.galleryImageData ?? [];
  const galleryUrls = galleryImageData
    .slice(0, 2)
    .map((item: any) => `https://media.twinklebook.com/${item.url}`);

  const { loaded, progress } = usePreloader({ dynamicImages: galleryUrls });

  return (
    <div
      className={`desktop-layout ${lora.variable} ${marcellus.variable} ${cormorantGaramond.variable} ${slight.variable}`}
    >
      <aside className="cover-panel">
        <DesktopCover data={data} />
      </aside>

      <main className="sections-panel relative">
        <VideoBackground start={start} />
        <Header />
        <Hero start={start} />
        <Profile data={data} />
        <Nama data={data} />
        <Countdown data={data} />
        <EventOrder data={data} />
        <Gallery data={data} />
        <div className="relative w-full">
          <Image
            src="/images/Albert-Jessica/Profile/BgKertas.webp"
            alt="Profile Background"
            fill
            className="object-cover z-10"
          />
          <Dresscode />
          <Rsvp data={data} />
        </div>
        <WeddingGift data={data} />
        <Wishes data={data} />
        <Thankyou data={data} />
      </main>

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

export default AlbertJessica;
