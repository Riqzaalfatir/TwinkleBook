"use client";

import React, { useEffect, useState } from "react";

import Hero from "./Hero";
import Profile from "./Profile";
import Countdown from "./Countdown";
import EventOrder from "./EventOrder";
import Gallery from "./Gallery";
import Rsvp from "./Rsvp";
import Gift from "./Gift";
import Wishes from "./Wishes";
import Thankyou from "./Thankyou";
import Opening from "./Opening";
import Header from "./Header";

import { useCurrentGuest } from "@/hooks/api/useCurrentGuest";
import PlaySongButton from "../../../ui/PlaySongButton";
import { DavidNatashaDataProps } from "./types";

import {
  cormorantGaramond,
  costaRica,
  slight,
  sackersItalicScript,
  garamond,
  timesNewRomanBold,
} from "./fonts/fonts";

interface DavidNatashaProps {
  data?: DavidNatashaDataProps;
}

const DavidNatasha = ({
  data,
}: DavidNatashaProps) => {
  const [start, setStart] =
    useState<boolean>(false);

  const {
    getEventGuestByPin,
    eventGuestByPin,
  } = useCurrentGuest();

  /*
   * Ambil data guest berdasarkan PIN
   */
  useEffect(() => {
    if (!data?.url) return;

    try {
      const pin =
        window.localStorage.getItem(
          `${data.url}-pin`,
        );

      if (pin) {
        getEventGuestByPin(
          data.url,
          pin,
        );
      }
    } catch (error) {
      console.warn(
        "localStorage tidak tersedia:",
        error,
      );
    }
  }, [
    data?.url,
    getEventGuestByPin,
  ]);

  /*
   * Guest information
   */
  const namaTamu =
    eventGuestByPin?.name ??
    "[Guest Name]";

  const groomName =
    data?.dataEvent?.groomName ??
    "David";

  const brideName =
    data?.dataEvent?.brideName ??
    "Natasya";

  /*
   * Background music
   */
  const backgroundSoundUrl =
    data?.dataContent
      ?.backgroundSoundData?.url
      ? `https://media.twinklebook.com/${data.dataContent.backgroundSoundData.url}`
      : "/audio/default-song.mp3";

  return (
    <div
      className={`
        relative
        bg-[url('/images/David-Natasha/Kertas.webp')]
        bg-top
        [background-size:100%_auto]
        ${cormorantGaramond.variable}
        ${timesNewRomanBold.variable}
        ${garamond.variable}
        ${costaRica.variable}
        ${slight.variable}
        ${sackersItalicScript.variable}
      `}
    >
      {/* Background Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-white/60
          pointer-events-none
        "
      />

      {/* ========================= */}
      {/* MAIN CONTENT */}
      {/* ========================= */}

      <div className="relative z-10">
        <Header />

        <Hero
          start={start}
          data={data}
        />

        <Profile
          data={data}
        />

        <Countdown
          data={data}
        />

        <EventOrder
          data={data}
        />

        <Gallery
          data={data}
        />

        <Rsvp
          data={data}
          guestData={eventGuestByPin}
        />

        <Gift
          data={data}
        />

        <Wishes
          data={data}
          guestData={eventGuestByPin}
        />

        <Thankyou
          data={data}
        />
      </div>

      {/* ========================= */}
      {/* OPENING */}
      {/* ========================= */}

      {!start && (
        <Opening
          setStart={setStart}
          namaTamu={namaTamu}
          groomName={groomName}
          brideName={brideName}
          popUpIconImageData={
            data?.dataContent
              ?.popUpIconImageData
          }
        />
      )}

      {/* ========================= */}
      {/* BACKGROUND MUSIC */}
      {/* ========================= */}

      <PlaySongButton
        src={backgroundSoundUrl}
        start={start}
      />
    </div>
  );
};

export default DavidNatasha;







// "use client";

// import React, { useEffect, useState } from "react";

// import Hero from "./Hero";
// import Profile from "./Profile";
// import Countdown from "./Countdown";
// import EventOrder from "./EventOrder";
// import Gallery from "./Gallery";
// import Rsvp from "./Rsvp";
// import Gift from "./Gift";
// import Wishes from "./Wishes";
// import Thankyou from "./Thankyou";
// import Opening from "./Opening";
// import LoadingScreen from "./LoadingScreen";
// import Header from "./Header";

// import { usePreloader } from "./hooks/usePreloader";
// import { useCurrentGuest } from "@/hooks/api/useCurrentGuest";
// import { formatDateWithWeekday } from "../../../lib/formatDate";
// import PlaySongButton from "../../../ui/PlaySongButton";
// import { DavidNatashaDataProps } from "./types";

// import {
//   cormorantGaramond,
//   costaRica,
//   slight,
//   sackersItalicScript,
//   garamond,
//   timesNewRomanBold,
// } from "./fonts/fonts";

// interface DavidNatashaProps {
//   data?: DavidNatashaDataProps;
// }

// const DavidNatasha = ({ data }: DavidNatashaProps) => {
//   const [start, setStart] = useState<boolean>(false);
//   const [showLoading, setShowLoading] = useState<boolean>(true);

//   const {
//     getEventGuestByPin,
//     eventGuestByPin,
//   } = useCurrentGuest();

//   /*
//    * Ambil data guest berdasarkan PIN
//    */
//   useEffect(() => {
//     if (!data?.url) return;

//     try {
//       const pin = window.localStorage.getItem(
//         `${data.url}-pin`,
//       );

//       if (pin) {
//         getEventGuestByPin(
//           data.url,
//           pin,
//         );
//       }
//     } catch (error) {
//       console.warn(
//         "localStorage tidak tersedia:",
//         error,
//       );
//     }
//   }, [
//     data?.url,
//     getEventGuestByPin,
//   ]);

//   /*
//    * Guest & event information
//    */
//   const namaTamu =
//     eventGuestByPin?.name ??
//     "[Guest Name]";

//   const groomName =
//     data?.dataEvent?.groomName ??
//     "David";

//   const brideName =
//     data?.dataEvent?.brideName ??
//     "Natasya";

//   const eventDate =
//     data?.dataEvent?.date
//       ? formatDateWithWeekday(
//           data.dataEvent.date,
//         )
//       : "SATURDAY, 10 OCTOBER 2026";

//   /*
//    * Background music
//    */
//   const backgroundSoundUrl =
//     data?.dataContent
//       ?.backgroundSoundData?.url
//       ? `https://media.twinklebook.com/${data.dataContent.backgroundSoundData.url}`
//       : "/audio/default-song.mp3";

//   /*
//    * Static image yang perlu preload.
//    *
//    * Gallery tidak dimasukkan ke preloader
//    * supaya tidak menahan Opening.
//    */
//   const dynamicImages = [
//     "/images/David-Natasha/Hero/DNBackground.webp",
//   ];

//   const {
//     loaded,
//     progress,
//   } = usePreloader({
//     dynamicImages,
//   });

//   return (
//     <div
//       className={`
//         relative
//         bg-[url('/images/David-Natasha/Kertas.webp')]
//         bg-top
//         [background-size:100%_auto]
//         ${cormorantGaramond.variable}
//         ${timesNewRomanBold.variable}
//         ${garamond.variable}
//         ${costaRica.variable}
//         ${slight.variable}
//         ${sackersItalicScript.variable}
//       `}
//     >
//       {/* Background overlay */}
//       <div
//         className="
//           absolute
//           inset-0
//           bg-white/60
//           pointer-events-none
//         "
//       />

//       {/* Main Content */}
//       <div className="relative z-10">
//         <Header />

//         <Hero
//           start={start}
//           data={data}
//         />

//         <Profile
//           data={data}
//         />

//         <Countdown
//           data={data}
//         />

//         <EventOrder
//           data={data}
//         />

//         <Gallery
//           data={data}
//         />

//         <Rsvp
//           data={data}
//           guestData={eventGuestByPin}
//         />

//         <Gift
//           data={data}
//         />

//         <Wishes
//           data={data}
//           guestData={eventGuestByPin}
//         />

//         <Thankyou
//           data={data}
//         />
//       </div>

//       {/* Opening Card */}
//       {!start && loaded && (
//         <Opening
//           setStart={setStart}
//           namaTamu={namaTamu}
//           groomName={groomName}
//           brideName={brideName}
//           popUpIconImageData={
//             data?.dataContent
//               ?.popUpIconImageData
//           }
//         />
//       )}

//       {/* Background Music */}
//       <PlaySongButton
//         src={backgroundSoundUrl}
//         start={start}
//       />

//       {/* Loading */}
//       {showLoading && (
//         <LoadingScreen
//           progress={progress}
//           onDone={() =>
//             setShowLoading(false)
//           }
//           groomName={groomName}
//           brideName={brideName}
//           eventDate={eventDate}
//         />
//       )}
//     </div>
//   );
// };

// export default DavidNatasha;