"use client";

import { useEffect, useState } from "react";

const BREAKPOINT = 1024;

const IMAGES_MOBILE: string[] = [
  "/images/David-Natasha/Opening/DNMobile.webp",
  "/images/David-Natasha/Profile/temp2.webp",
];

const IMAGES_DESKTOP: string[] = [
  "/images/David-Natasha/Opening/OpeningD.webp",
  "/images/David-Natasha/Profile/temp3.webp",
  "/images/David-Natasha/Wishes/Frameee.webp",
  "/images/David-Natasha/Wishes/FrameD.webp"
];

const IMAGES_COMMON: string[] = [
  "/images/David-Natasha/Opening/AsetAtasM.webp",
  "/images/David-Natasha/Opening/AsetBawahM.webp"
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
