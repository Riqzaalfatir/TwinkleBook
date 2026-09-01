"use client";

import { useEffect, useState } from "react";

const BREAKPOINT = 1024;
const BATCH_SIZE = 4;
const IMAGE_TIMEOUT = 10000;

const IMAGES_MOBILE: string[] = [
  "/images/David-Natasha/Opening/DNMobile.avif",
  "/images/David-Natasha/Profile/temp2.avif",
  "/images/David-Natasha/Hero/DNBackground.avif",
  "/images/David-Natasha/EventOrder/BungaAtasA.avif",
  "/images/David-Natasha/EventOrder/AsetBawahM.avif",
  "/images/David-Natasha/Rsvp/AsetAtasM.avif",
  "/images/David-Natasha/Rsvp/AsetTengahM.avif",
  "/images/David-Natasha/Wishes/Frameee.avif",
  "/images/David-Natasha/Thankyou/AsetAtasM.avif",
  "/images/David-Natasha/Thankyou/AsetBawahM.avif",
];

const IMAGES_DESKTOP: string[] = [
  "/images/David-Natasha/Opening/OpeningD.avif",
  "/images/David-Natasha/Profile/temp3.avif",
  "/images/David-Natasha/Wishes/FrameD.avif",
  "/images/David-Natasha/Hero/DNBackgroundD.avif",
  "/images/David-Natasha/EventOrder/BungaAtasD.avif",
  "/images/David-Natasha/EventOrder/AsetBawahD.avif",
  "/images/David-Natasha/Rsvp/AsetAtasG.avif",
  "/images/David-Natasha/Rsvp/AsetTengahG.avif",
  "/images/David-Natasha/Thankyou/AsetAtasD.avif",
  "/images/David-Natasha/Thankyou/AsetBawahD.avif",
];

const IMAGES_COMMON: string[] = [
  "/images/David-Natasha/Kertas.avif",
  "/images/David-Natasha/Opening/AsetAtasM.avif",
  "/images/David-Natasha/Opening/AsetBawahM.avif",
  "/images/David-Natasha/Hero/DNLOGOO.avif",
  "/images/David-Natasha/EventOrder/GIIDago.avif",
  "/images/David-Natasha/EventOrder/Intercontinental.avif",
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

export function usePreloader({ dynamicImages = [] }: UsePreloaderOptions = {}) {
  // Compute the list of images to load
  const imagesToLoad = (() => {
    const isDesktop =
      typeof window !== "undefined" && window.innerWidth >= BREAKPOINT;
    const allImages = [
      ...(isDesktop ? IMAGES_DESKTOP : IMAGES_MOBILE),
      ...IMAGES_COMMON,
      ...dynamicImages,
    ];
    return Array.from(
      new Set(
        allImages.filter(
          (src): src is string =>
            typeof src === "string" && src.trim().length > 0,
        ),
      ),
    );
  })();

  const total = imagesToLoad.length;

  // Set initial state based on whether we have images to load
  const [progress, setProgress] = useState(total === 0 ? 100 : 0);
  const [loaded, setLoaded] = useState(total === 0);

  useEffect(() => {
    // If no images to load, effect is not needed
    if (total === 0) {
      return;
    }

    const cancelledRef = {
      current: false,
    };

    console.log("[Preloader] Total:", total);
    console.log("[Preloader] Images:", imagesToLoad);

    let count = 0;

    loadInBatches(
      imagesToLoad,
      () => {
        count += 1;

        const newProgress = Math.min(100, Math.round((count / total) * 100));

        setProgress(newProgress);

        if (count >= total) {
          setProgress(100);
          setLoaded(true);

          console.log("[Preloader] Complete");
        }
      },
      cancelledRef,
    ).catch((error) => {
      console.error("[Preloader] Unexpected error:", error);

      if (!cancelledRef.current) {
        setProgress(100);
        setLoaded(true);
      }
    });

    return () => {
      cancelledRef.current = true;
    };
  }, [total, imagesToLoad]);

  return {
    loaded,
    progress,
  };
}
