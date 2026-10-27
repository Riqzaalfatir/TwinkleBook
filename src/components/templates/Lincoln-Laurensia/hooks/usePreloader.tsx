"use client";

import { useEffect, useState } from "react";

const BREAKPOINT = 1024;

const IMAGES_MOBILE: string[] = [
  // OPENING
  "/images/Lincoln-Laurensia/Opening/BgMobile.webp",
  "/images/Lincoln-Laurensia/Hero/HeroBG.webp",

  //COUNTDOWN
  "/images/Lincoln-Laurensia/Countdown/BgMobile.webp",

  //   EVENTORDER
  "/images/Lincoln-Laurensia/EventOrder/RumahMobile.webp",

  // THANKYOU
  "/images/Lincoln-Laurensia/Thankyou/AsetMobile.webp",
];

const IMAGES_DESKTOP: string[] = [
  // OPENING
  "/images/Lincoln-Laurensia/Opening/BgDekstop.webp",
  "/images/Lincoln-Laurensia/Hero/HeroBGD.webp",

  //   COUNTDOWN
  "/images/Lincoln-Laurensia/Countdown/BgDekstop.webp",

  // EVENTORDER
  "/images/Lincoln-Laurensia/EventOrder/RumahDekstop.webp",

  // THANKYOU
  "/images/Lincoln-Laurensia/Thankyou/AsetDekstop.webp",
];

const IMAGES_COMMON: string[] = [
  // PROFILE
  "/images/Lincoln-Laurensia/Profile/AsetKiri.webp",
  "/images/Lincoln-Laurensia/Profile/AsetKanan.webp",
  "/images/Lincoln-Laurensia/Profile/Lincoln.webp",
  "/images/Lincoln-Laurensia/Profile/Laurensia.webp",

  //   GALLERY
  "/images/Lincoln-Laurensia/Gallery/AsetSatu.webp",

  // DRESSCODE
  "/images/Lincoln-Laurensia/Dresscode/Orang.webp",
  "/images/Lincoln-Laurensia/Dresscode/NoWhite.webp",
  "/images/Lincoln-Laurensia/Dresscode/NoBatik.webp",
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
