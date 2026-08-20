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
import Opening from "./Opening";
import LoadingScreen from "./LoadingScreen";
import { usePreloader } from "./hooks/usePreloader"; // sesuaikan path
import { kinfolk, timesNewRoman } from "./fonts/fonts";

type MichaelVannyaProps = {
  data?: any;
};

const MichaelVannya = ({ data }: MichaelVannyaProps) => {
  const [start, setStart] = useState<boolean>(false); // false = tampilin Opening dulu
  const [showLoading, setShowLoading] = useState<boolean>(true);

  const namaTamu = "Sela"; // sementara statis, ganti kalau udah ada hook guest kayak Albert-Jessica
  const groomName = data?.dataEvent?.groomName ?? "Michael";
  const brideName = data?.dataEvent?.brideName ?? "Vannya";

  const { loaded, progress } = usePreloader(); // tambahin dynamicImages kalau ada gallery dari API

  return (
    <div className={`${kinfolk.variable} ${timesNewRoman.variable}`}>
      <Header />
      <Hero start={start} />
      <Profile />
      <Countdown />
      <EventOrder />
      {/* <Foto /> */}
      <Gallery />
      <Dresscode />
      <Rsvp />
      <Gift />
      <Wishes />
      <Thankyou />

      {!start && loaded && (
        <Opening
          setStart={setStart}
          namaTamu={namaTamu}
          groomName={groomName}
          brideName={brideName}
        />
      )}

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