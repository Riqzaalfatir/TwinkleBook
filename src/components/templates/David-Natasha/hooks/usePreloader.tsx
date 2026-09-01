"use client";

import { useEffect, useState } from "react";

const BREAKPOINT = 1024;
const BATCH_SIZE = 4;
const IMAGE_TIMEOUT = 10000;

const IMAGES_MOBILE: string[] = [
  "/images/David-Natasha/Opening/DNMobile.webp",
  "/images/David-Natasha/Profile/temp2.webp",
  "/images/David-Natasha/Hero/DNBackground.webp",
  "/images/David-Natasha/EventOrder/BungaAtasA.webp",
  "/images/David-Natasha/EventOrder/AsetBawahM.webp",
  "/images/David-Natasha/Rsvp/AsetAtasM.webp",
  "/images/David-Natasha/Rsvp/AsetTengahM.webp",
  "/images/David-Natasha/Wishes/Frameee.webp",
  "/images/David-Natasha/Thankyou/AsetAtasM.webp",
  "/images/David-Natasha/Thankyou/AsetBawahM.webp",
];

const IMAGES_DESKTOP: string[] = [
  "/images/David-Natasha/Opening/OpeningD.webp",
  "/images/David-Natasha/Profile/temp3.webp",
  "/images/David-Natasha/Wishes/FrameD.webp",
  "/images/David-Natasha/Hero/DNBackgroundD.webp",
  "/images/David-Natasha/EventOrder/BungaAtasD.webp",
  "/images/David-Natasha/EventOrder/AsetBawahD.webp",
  "/images/David-Natasha/Rsvp/AsetAtasG.webp",
  "/images/David-Natasha/Rsvp/AsetTengahG.webp",
  "/images/David-Natasha/Thankyou/AsetAtasD.webp",
  "/images/David-Natasha/Thankyou/AsetBawahD.webp",
];

const IMAGES_COMMON: string[] = [
  "/images/David-Natasha/Kertas.webp",
  "/images/David-Natasha/Opening/AsetAtasM.webp",
  "/images/David-Natasha/Opening/AsetBawahM.webp",
  "/images/David-Natasha/Hero/DNLOGOO.webp",
  "/images/David-Natasha/EventOrder/GIIDago.webp",
  "/images/David-Natasha/EventOrder/Intercontinental.webp",
];

interface UsePreloaderOptions {
  dynamicImages?: string[];
}

function loadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();

    let finished = false;

    const timeout = window.setTimeout(() => {
      console.warn("[Preloader] Timeout:", src);
      finish();
    }, IMAGE_TIMEOUT);

    function finish() {
      if (finished) return;

      finished = true;

      clearTimeout(timeout);

      img.onload = null;
      img.onerror = null;

      resolve();
    }

    img.onload = finish;

    img.onerror = () => {
      console.warn("[Preloader] Failed:", src);
      finish();
    };

    img.src = src;

    if (img.complete) {
      finish();
    }
  });
}

async function loadInBatches(
  images: string[],
  onProgress: () => void,
  cancelledRef: { current: boolean },
) {
  for (let i = 0; i < images.length; i += BATCH_SIZE) {
    if (cancelledRef.current) return;

    const batch = images.slice(i, i + BATCH_SIZE);

    await Promise.all(
      batch.map(async (src) => {
        await loadImage(src);

        if (!cancelledRef.current) {
          onProgress();
        }
      }),
    );
  }
}

export function usePreloader({
  dynamicImages = [],
}: UsePreloaderOptions = {}) {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const cancelledRef = {
      current: false,
    };

    const isDesktop = window.innerWidth >= BREAKPOINT;

    const allImages = [
      ...(isDesktop ? IMAGES_DESKTOP : IMAGES_MOBILE),
      ...IMAGES_COMMON,
      ...dynamicImages,
    ];

    const imagesToLoad = Array.from(
      new Set(
        allImages.filter(
          (src): src is string =>
            typeof src === "string" &&
            src.trim().length > 0,
        ),
      ),
    );

    const total = imagesToLoad.length;

    console.log("[Preloader] Total:", total);
    console.log("[Preloader] Images:", imagesToLoad);

    if (total === 0) {
      // Schedule state updates in a microtask to avoid cascading renders
      queueMicrotask(() => {
        if (!cancelledRef.current) {
          setProgress(100);
          setLoaded(true);
        }
      });
      return () => {
        cancelledRef.current = true;
      };
    }

    let count = 0;

    loadInBatches(
      imagesToLoad,
      () => {
        count += 1;

        const newProgress = Math.min(
          100,
          Math.round((count / total) * 100),
        );

        setProgress(newProgress);

        if (count >= total) {
          setProgress(100);
          setLoaded(true);

          console.log("[Preloader] Complete");
        }
      },
      cancelledRef,
    ).catch((error) => {
      console.error(
        "[Preloader] Unexpected error:",
        error,
      );

      if (!cancelledRef.current) {
        setProgress(100);
        setLoaded(true);
      }
    });

    return () => {
      cancelledRef.current = true;
    };
  }, [dynamicImages]);

  return {
    loaded,
    progress,
  };
}