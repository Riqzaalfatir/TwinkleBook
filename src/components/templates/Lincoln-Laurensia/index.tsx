import React from "react";
import { poppins, overpass } from "./fonts/fonts";
import Hero from "./Hero";
import Profile from "./Profile";
import Countdown from "./Countdown";
import Gallery from "./Gallery";
import EventOrder from "./EventOrder";
import Dresscode from "./Dresscode";
import Rsvp from "./Rsvp";
import Wishes from "./Wishes"
import Thankyou from "./Thankyou";

const LincolnLaurensia = () => {
  return (
    <div className={`${poppins.variable} ${overpass.variable}`}>
      <Hero />
      <Profile />
      <Countdown />
      <Gallery />
      <EventOrder />
      <Dresscode />
      <Rsvp />
      <Wishes />
      <Thankyou />
    </div>
  );
};

export default LincolnLaurensia;