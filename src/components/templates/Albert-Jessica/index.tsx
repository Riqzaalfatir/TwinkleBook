"use client";

import { useState } from "react";
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
import VideoBackground from "../Albert-Jessica/layout/VideoBackground";
import {
  lora,
  marcellus,
  cormorantGaramond,
  slight,
} from "../Albert-Jessica/fonts/fonts";
import Image from "next/image";

const AlbertJessica = () => {
  const [start, setStart] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(true);

  const { loaded, progress } = usePreloader();

  return (
    <div
      className={`desktop-layout ${lora.variable} ${marcellus.variable} ${cormorantGaramond.variable} ${slight.variable}`}
    >
      <aside className="cover-panel">
        <DesktopCover />
      </aside>

      <main className="sections-panel relative">
        <VideoBackground start={start} />
        <Header />
<Hero start={start} />
        <Profile />
        <Nama />
        <Countdown />
        <EventOrder />
        <Gallery />
        <div className="relative w-full">
  <Image
    src="/images/Albert-Jessica/Profile/BgKertas.webp"
    alt="Profile Background"
    fill
    className="object-cover z-10"
  />
  <Dresscode />
  <Rsvp />
</div>
        <WeddingGift />
        <Wishes />
        <Thankyou />
      </main>

      {!start && loaded && (
        <Opening
          setStart={setStart}
          namaTamu="Tamu Undangan"
          groomName="Albert"
          groomFullName="Albert Nathaniel"
          brideName="Jessica"
          brideFullName="Jessica Nathalie Wibowo"
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

export default AlbertJessica;