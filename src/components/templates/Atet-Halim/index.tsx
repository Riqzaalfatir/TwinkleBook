// AtetHalim.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react"; // ← Add useEffect
import { athelas, poltawskiNowy, lora, playfairDisplay, cylburn, milyuna } from "./fonts/fonts";
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
import { useCurrentGuest } from "../../../hooks/api/useCurrentGuest"; // ← Add hook

type AtetHalimProps = {
  data?: any;
  isPreview?: boolean;
  dataValidation?: unknown;
};

const AtetHalim = ({ data, isPreview, dataValidation }: AtetHalimProps) => {
  const [start, setStart] = useState<boolean>(false);
    const [showLoading, setShowLoading] = useState<boolean>(true); // ← baru

  
  // ✅ Hook untuk ambil nama tamu — sesuai dokumentasi atasan
  const { getEventGuestByPin, eventGuestByPin } = useCurrentGuest();

  // ✅ Fetch guest data berdasarkan PIN dari localStorage
  useEffect(() => {
    if (data?.url) {
      const pin = localStorage.getItem(`${data.url}-pin`);
      if (pin) {
        getEventGuestByPin(data.url, pin);
      }
    }
  }, [data?.url, getEventGuestByPin]);

  // ✅ Nama tamu dari hook result (sesuai dokumentasi)
  const namaTamu = eventGuestByPin?.name ?? "Tamu Undangan";
  
  // ✅ Struktur sesuai dokumentasi: dataEvent & dataContent
  const groomName = data?.dataEvent?.groomName ?? "Groom";
  const groomFullName = data?.dataEvent?.groomFullName ?? "Groom Name";
  const brideName = data?.dataEvent?.brideName ?? "Bride";
  const brideFullName = data?.dataEvent?.brideFullName ?? "Bride Name";
  
  // ✅ dataSession — untuk countdown, location, dsb
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

      
      {showLoading && (
        <LoadingScreen
          progress={progress}
          onDone={() => setShowLoading(false)} // ← trigger unmount SETELAH fade selesai
        />
      )}
    </div>
  );
};

export default AtetHalim;


// // SEBELUM DI DINAMISKAN
// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { athelas, poltawskiNowy, lora, playfairDisplay, cylburn, milyuna } from "./fonts/fonts";
// import Hero from "./Hero";
// import Profile from "./Profile";
// import Countdown from "./Countdown";
// import EventOrder from "./EventOrder";
// import Dresscode from "./Dresscode";
// import Rsvp from "./Rsvp";
// import Gallery from "./Gallery";
// import Wishes from "./Wishes";
// import Thankyou from "./Thankyou";
// import Opening from "./Opening";

// type AtetHalimProps = {
//   data?: any;
//   isPreview?: boolean;
//   dataValidation?: unknown;
// };

// const AtetHalim = ({ data, isPreview, dataValidation }: AtetHalimProps) => {
//   const [start, setStart] = useState<boolean>(false);
//   const namaTamu = data?.guestName ?? "Tamu Undangan";

//   return (
//     <div
//       className={`${athelas.variable} ${poltawskiNowy.variable} ${playfairDisplay.variable} ${lora.variable} ${cylburn.variable} ${milyuna.variable} relative w-full`}
//     >
//       {/* BACKGROUND KERTAS GLOBAL */}
//       <div
//         className="absolute inset-0 -z-10 bg-[#F6F6F4]"
//         style={{
//           backgroundImage: "url(/images/Atet-Halim/Hero/BackgoundKertas.webp)",
//           backgroundRepeat: "repeat",
//           backgroundSize: "390px auto",
//         }}
//       />

//       {/* SEMUA SECTION SELALU DI-RENDER — biar Opening bisa nge-blur konten asli di belakangnya */}
// <Hero data={data} start={start} />
//       <Profile data={data} />
//       <Countdown data={data} />
//       <EventOrder data={data} />
//       <Dresscode data={data} />
//       <Rsvp data={data} />
//       <Gallery />
//       <Wishes />
//       <Thankyou />

//       {/* OPENING — overlay di atas, ilang begitu user klik View Invitation */}
//       {!start && <Opening setStart={setStart} namaTamu={namaTamu} />}
//     </div>
//   );
// };

// export default AtetHalim;