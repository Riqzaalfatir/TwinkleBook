"use client";

import { useEffect, useState } from "react";

const BREAKPOINT = 1024;

const IMAGES_MOBILE: string[] = [

    // OPENING
     "/images/Michael-Vannya/Opening/OpeningM.webp",

    // COUNTDOWN
    "/images/Michael-Vannya/Countdown/BG.webp",

    // GALLERY
    "/images/Michael-Vannya/Gallery/MichaelVannyaa.webp",

    // DRESSCODE
    "/images/Michael-Vannya/Dresscode/BungaKananAtas.webp",

    // RSVP
    "/images/Michael-Vannya/Rsvp/BungaKiriBawahh.webp",

    // GIFT
    "/images/Michael-Vannya/Gift/BungaKiriBawah.webp",

    // THANKYOU
    "/images/Michael-Vannya/Thankyou/Thankyou.webp",
    "/images/Michael-Vannya/Thankyou/ThankyouD.webp"
];

const IMAGES_DESKTOP: string[] = [

    // OPENING
        "/images/Michael-Vannya/Opening/OpeningD.webp",

        // COUNTDOWN 
        "/images/Michael-Vannya/Countdown/BGD.webp",

        // GALLERY
        "/images/Michael-Vannya/Gallery/MichaelVannya.webp",

        // DRESSCODE
        "/images/Michael-Vannya/Dresscode/BungaKiriAtas.webp",
        "/images/Michael-Vannya/Dresscode/BungaTengah.webp",

        // FOTO
        "/images/Michael-Vannya/Foto/MichaelVannya.webp",

        // GIFT
        "/images/Michael-Vannya/Gift/BungaKiriAtas.webp"

];

const IMAGES_COMMON: string[] = [

    // OPENING
    "/images/Michael-Vannya/Opening/BungaKiriAtas.webp",
    "/images/Michael-Vannya/Opening/BungaKananBawah.webp",

    // PROFILE
    "/images/Michael-Vannya/Profile/BungaKiriAtas.webp",
    "/images/Michael-Vannya/Profile/BungaKananBawah.webp",

    // HERO
    "/images/Michael-Vannya/Hero/LogoMV.webp",

    // EVENTORDER
    "/images/Michael-Vannya/EventOrder/BungaD.webp",
    "/images/Michael-Vannya/EventOrder/CandaniVilla.webp",


    // DRESSCODE
    "/images/Michael-Vannya/Dresscode/DCMen.webp",
    "/images/Michael-Vannya/Dresscode/DCWomen.webp",

    // HERO (duplikat pemanggilan)
    "/images/Michael-Vannya/Hero/LogoMV.webp",

    // THANKYOU
    "/images/Michael-Vannya/Thankyou/LogoProvite.webp"
    

];

interface UsePreloaderOptions {
  dynamicImages?: string[];
}

export function usePreloader({ dynamicImages = [] }: UsePreloaderOptions = {}) {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const isDesktop = window.innerWidth >= BREAKPOINT;
    const imagesToLoad = [
      ...(isDesktop ? IMAGES_DESKTOP : IMAGES_MOBILE),
      ...IMAGES_COMMON,
      ...dynamicImages,
    ];

    const total = imagesToLoad.length;

    if (total === 0) {
      setLoaded(true);
      setProgress(100);
      return;
    }

    let count = 0;
    let cancelled = false;

    imagesToLoad.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = img.onerror = () => {
        if (cancelled) return;
        count++;
        setProgress(Math.round((count / total) * 100));
        if (count === total) setLoaded(true);
      };
    });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dynamicImages.join(",")]);

  return { loaded, progress };
}