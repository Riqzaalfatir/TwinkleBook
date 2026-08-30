"use client";

import { useEffect, useState } from "react";

const BREAKPOINT = 1024;

const IMAGES_MOBILE: string[] = [];

const IMAGES_DESKTOP: string[] = [];

const IMAGES_COMMON: string[] = [];

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
