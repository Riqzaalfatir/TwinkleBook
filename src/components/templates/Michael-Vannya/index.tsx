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
import { kinfolk, timesNewRoman } from "./fonts/fonts";

type MichaelVannyaProps = {
  data?: any;
};

const MichaelVannya = ({ data }: MichaelVannyaProps) => {
  const [start, setStart] = useState<boolean>(false); // false = tampilin Opening dulu

  const namaTamu = "Sela"; // sementara statis, ganti kalau udah ada hook guest kayak Albert-Jessica
  const groomName = data?.dataEvent?.groomName ?? "Michael";
  const brideName = data?.dataEvent?.brideName ?? "Vannya";

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

      {!start && (
        <Opening
          setStart={setStart}
          namaTamu={namaTamu}
          groomName={groomName}
          brideName={brideName}
        />
      )}
    </div>
  );
};

export default MichaelVannya;