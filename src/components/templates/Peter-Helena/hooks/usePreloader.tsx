"use client";

import { useEffect, useState } from "react";

const BREAKPOINT = 1024;

const IMAGES_MOBILE: string[] = [
];

const IMAGES_DESKTOP: string[] = [
  
 
];

const IMAGES_COMMON: string[] = [

  // NOTIFMODAL
  "/images/Notif-Modal/TandaCeklisBg.svg",
  "/images/Notif-Modal/TandaSeru.svg",
  "/images/Notif-Modal/TandaTanya.svg",

  // HERO
  "/images/Peter-Helena/Hero/PeterHelenaBG.webp",

  // COUNTDOWN
  "/images/Peter-Helena/Countdown/PeterHelenaBG.webp",

  // EVENT ORDER
  "/images/Peter-Helena/EventOrder/Gereja.webp",
  "/images/Peter-Helena/EventOrder/Cheers.webp",

  // DRESSCODE
  "/images/Peter-Helena/Dresscode/MEN.png",
  "/images/Peter-Helena/Dresscode/WOMEN.webp",

  // GALLERY
   "/images/Peter-Helena/Gallery/1.webp",
   "/images/Peter-Helena/Gallery/2.webp",
   "/images/Peter-Helena/Gallery/3.webp",
   "/images/Peter-Helena/Gallery/4.webp",
   "/images/Peter-Helena/Gallery/5.webp",
   "/images/Peter-Helena/Gallery/6.webp",
   "/images/Peter-Helena/Gallery/7.webp",
   "/images/Peter-Helena/Gallery/8.webp",
   "/images/Peter-Helena/Gallery/9.webp",
   "/images/Peter-Helena/Gallery/10.webp",

  //  WEDDING GIFT
  "/images/Peter-Helena/Gift/PeterHelenaBG.webp",

  // THANKYOU
  "/images/Peter-Helena/Thankyou/PeterHelenaBG.webp",
  "/images/Peter-Helena/Thankyou/Provite.png"

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