"use client";

import { useState } from "react";
import DesktopCover from "./layout/DekstopCover";
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
import VideoBackground from "./layout/VideoBackground";
import { kinfolk, timesNewRoman } from "./fonts/fonts";

const MichaelVannya = () => {
  const [start, setStart] = useState<boolean>(true); // sementara true, biar animasi Hero langsung kelihatan tanpa Opening popup dulu

  return (
    <div  id="mv-root" className={`desktop-layout ${kinfolk.variable} ${timesNewRoman.variable}`}>
      <aside className="cover-panel">
        <DesktopCover />
      </aside>

      <main className="sections-panel relative">
        <VideoBackground start={start} />
        <Header />
        <Hero start={start} />
        <Profile />
        <Countdown />
        <EventOrder />
        <Foto />
        <Dresscode />
        <Rsvp />
        <Gallery />
        <Gift />
        <Wishes />
        <Thankyou />
                        {/* section-section berikutnya nyusul di sini, satu-satu pas udah lo kasih source-nya */}
      </main>
    </div>
  );
};

export default MichaelVannya;