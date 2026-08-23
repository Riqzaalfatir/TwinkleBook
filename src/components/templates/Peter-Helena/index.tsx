"use client";

import { useState } from "react";
import DesktopCover from "./layout/DekstopCover";
import Hero from "./Hero";
import Profile from "./Profile";
import Countdown from "./Countdown";
import EventOrder from "./EventOrder";
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
import {
  astonScript,
  timesNewRoman,
  timesNewRomanBold,
  cinzel,
  cinzelDecorative,
  ovo,
} from "./fonts/fonts";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";

const PeterHelena = () => {
  const [start, setStart] = useState<boolean>(false); // false = tampilin Opening dulu
  const [showLoading, setShowLoading] = useState<boolean>(true);

  const { loaded, progress } = usePreloader();

  return (
    <div
      className={`desktop-layout ${astonScript.variable} ${timesNewRoman.variable} ${timesNewRomanBold.variable} ${ovo.variable} ${cinzel.variable} ${cinzelDecorative.variable}`}
    >
      <aside className="cover-panel">
        <DesktopCover />
      </aside>

      <main className="sections-panel relative">
        <Header />
        <Hero start={start} />
        <Profile />
        <section className="w-full flex justify-center px-[4px] -mt-[1px] bg-[#430D0D]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-[340px] lg:w-[344.31px] bg-white rounded-[20px] lg:rounded-[20.25px] pt-[5px] px-[5px] overflow-hidden"
          >
            <Countdown />
            <EventOrder />
          </motion.div>
        </section>
        <Dresscode />
        <Rsvp />
        <Gallery />
        <Gift />
        <Wishes />
        <Thankyou />

        {!start && loaded && <Opening setStart={setStart} />}
      </main>

      {showLoading && (
        <LoadingScreen
          progress={progress}
          onDone={() => setShowLoading(false)}
        />
      )}
    </div>
  );
};

export default PeterHelena;
