// AtetHalim.tsx
// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { athelas, poltawskiNowy, lora, playfairDisplay, cylburn, milyuna } from "./fonts/fonts";
// import  Header  from "./Header";
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
// import LoadingScreen from "./LoadingScreen";
// import { usePreloader } from "./hooks/usePreloader";

// type AtetHalimProps = {
//   data?: any;
//   isPreview?: boolean;
//   dataValidation?: unknown;
// };

// const AtetHalim = ({ data, isPreview, dataValidation }: AtetHalimProps) => {
//   const [start, setStart] = useState<boolean>(false);
// const namaTamu = data?.guest?.name ?? "Tamu Undangan";
//   const groomName = data?.groomName ?? "Groom";
//   const groomFullName = data?.groomFullName ?? "Groom Name";
//   const brideName = data?.brideName ?? "Bride";
//   const brideFullName = data?.brideFullName ?? "Bride Name";
//     const eventSessions = data?.sessions ?? [];  // ← Extract sessions


//   const { loaded, progress } = usePreloader();

//   return (
//     <div
//       className={`${athelas.variable} ${poltawskiNowy.variable} ${playfairDisplay.variable} ${lora.variable} ${cylburn.variable} ${milyuna.variable} relative w-full`}
//     >
//       {/* BACKGROUND KERTAS GLOBAL */}
//       {/* <div
//         className="absolute inset-0 -z-10 bg-[#F6F6F4]"
//         style={{
//           backgroundImage: "url(/images/Atet-Halim/Hero/BackgoundKertas.webp)",
//           backgroundRepeat: "repeat",
//           backgroundSize: "390px auto",
//         }}
//       /> */}
//       <div
//   className="absolute inset-0 -z-10 bg-[#F6F6F4] bg-repeat [background-size:390px_auto] lg:[background-size:1914px_auto]
//     bg-[url('/images/Atet-Halim/Hero/BackgoundKertas.webp')]
//     lg:bg-[url('/images/Atet-Halim/Hero/BgKertasD.webp')]"
// />

//       {/* SEMUA SECTION SELALU DI-RENDER — biar Opening bisa nge-blur konten asli di belakangnya */}
//       <Header />
//       <Hero data={data} start={start} />
//       <Profile data={data} />
//       <Countdown data={data} />
//       <EventOrder data={eventSessions} /> 
//       <Dresscode data={data} />
//       <Rsvp data={data} />
//       <Gallery />
//       <Wishes />
//       <Thankyou />

//       {/* OPENING — overlay di atas, ilang begitu user klik View Invitation */}
//       {!start && loaded && (
//   <Opening 
//     setStart={setStart} 
//     namaTamu={namaTamu}
//     groomName={groomName}
//     groomFullName={groomFullName}
//     brideName={brideName}
//     brideFullName={brideFullName}
//   />
// )}

//       {/* LOADING SCREEN — paling atas, ilang begitu asset selesai di-preload */}
//       {!loaded && <LoadingScreen progress={progress} />}
//     </div>
//   );
// };

// export default AtetHalim;




// // AtetHalim.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { athelas, poltawskiNowy, lora, playfairDisplay, cylburn, milyuna } from "./fonts/fonts";
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

type AtetHalimProps = {
  data?: any;
  isPreview?: boolean;
  dataValidation?: unknown;
};

const AtetHalim = ({ data, isPreview, dataValidation }: AtetHalimProps) => {
  const [start, setStart] = useState<boolean>(false);
  const namaTamu = data?.guestName ?? "Tamu Undangan";

  return (
    <div
      className={`${athelas.variable} ${poltawskiNowy.variable} ${playfairDisplay.variable} ${lora.variable} ${cylburn.variable} ${milyuna.variable} relative w-full`}
    >
      {/* BACKGROUND KERTAS GLOBAL */}
      <div
        className="absolute inset-0 -z-10 bg-[#F6F6F4]"
        style={{
          backgroundImage: "url(/images/Atet-Halim/Hero/BackgoundKertas.webp)",
          backgroundRepeat: "repeat",
          backgroundSize: "390px auto",
        }}
      />

      {/* SEMUA SECTION SELALU DI-RENDER — biar Opening bisa nge-blur konten asli di belakangnya */}
<Hero data={data} start={start} />
      <Profile data={data} />
      <Countdown data={data} />
      <EventOrder data={data} />
      <Dresscode data={data} />
      <Rsvp data={data} />
      <Gallery />
      <Wishes />
      <Thankyou />

      {/* OPENING — overlay di atas, ilang begitu user klik View Invitation */}
      {!start && <Opening setStart={setStart} namaTamu={namaTamu} />}
    </div>
  );
};

export default AtetHalim;