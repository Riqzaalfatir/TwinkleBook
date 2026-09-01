"use client";

import { useEffect, useState } from "react";
import { getGalleryPhotos } from "../../../../lib/getGalleryPhotos";

const BREAKPOINT = 1024;
const BATCH_SIZE = 4;

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
  rawGalleryData?: any[];
}

function loadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.src = src;
    img.onload = img.onerror = () => resolve();
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
      batch.map((src) =>
        loadImage(src).then(() => {
          if (!cancelledRef.current) onProgress();
        }),
      ),
    );
  }
}

export function usePreloader({
  dynamicImages = [],
  rawGalleryData = [],
}: UsePreloaderOptions = {}) {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const galleryKey = rawGalleryData.map((item: any) => item?.url).join(",");

  useEffect(() => {
    const isDesktop = window.innerWidth >= BREAKPOINT;
    const galleryImages = getGalleryPhotos(rawGalleryData, !isDesktop);

    const imagesToLoad = [
      ...(isDesktop ? IMAGES_DESKTOP : IMAGES_MOBILE),
      ...IMAGES_COMMON,
      ...dynamicImages,
      ...galleryImages,
    ];

    const total = imagesToLoad.length;

    if (total === 0) {
      setLoaded(true);
      setProgress(100);
      return;
    }

    const cancelledRef = { current: false };
    let count = 0;

    loadInBatches(
      imagesToLoad,
      () => {
        count++;
        setProgress(Math.round((count / total) * 100));
        if (count === total) setLoaded(true);
      },
      cancelledRef,
    );

    return () => {
      cancelledRef.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dynamicImages.join(","), galleryKey]);

  return { loaded, progress };
}