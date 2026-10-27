"use client";

import React, { useState, useEffect } from "react";
import { poppins, overpass } from "./fonts/fonts";
import Hero from "./Hero";
import Profile from "./Profile";
import Countdown from "./Countdown";
import Gallery from "./Gallery";
import EventOrder from "./EventOrder";
import Dresscode from "./Dresscode";
import Rsvp from "./Rsvp";
import Wishes from "./Wishes";
import Thankyou from "./Thankyou";
import LoadingScreen from "./LoadingScreen";
import { usePreloader } from "./hooks/usePreloader";
import { useCurrentGuest } from "@/hooks/api/useCurrentGuest";


type LincolnLaurensiaProps = {
  data?: any;
  isPreview?: boolean;
  dataValidation?: unknown;
};

const LincolnLaurensia = ({ data }: LincolnLaurensiaProps) => {
  const [showLoading, setShowLoading] = useState(true);
  const { progress } = usePreloader();

  const { getEventGuestByPin, eventGuestByPin } = useCurrentGuest();

  useEffect(() => {
  if (data?.url) {
    const pin = localStorage.getItem(`${data.url}-pin`);
    if (pin) getEventGuestByPin(data.url, pin);
  }
}, [data?.url, getEventGuestByPin]);

  return (
    <div className={`${poppins.variable} ${overpass.variable}`}>
      <Hero data={data} />
      <Profile />
      <Countdown data={data} />
      <Gallery data={data} />
<EventOrder data={data} />
<Dresscode guestData={eventGuestByPin} />      
<Rsvp data={data} guestData={eventGuestByPin} />      <Wishes data={data} />
      <Thankyou data={data} />

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
