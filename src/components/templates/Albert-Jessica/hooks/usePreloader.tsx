"use client";

import { useEffect, useState } from "react";

const BREAKPOINT = 1024;

const IMAGES_MOBILE: string[] = [
  // OPENING
  "/images/Albert-Jessica/Opening/OpeningMobile.webp",
];

const IMAGES_DESKTOP: string[] = [
  // POPUP NOTIF
  "/images/Notif-Modal/TandaCeklisBg.svg",
  "/images/Notif-Modal/TandaSeru.svg",
  "/images/Notif-Modal/TandaTanya.svg",

  //  OPENING
  "/images/Albert-Jessica/Opening/OpeningDekstop.webp",

  // BG KERTAS
  "/images/Albert-Jessica/Profile/BgKertas.webp",

  // NAMA
  "/images/Albert-Jessica/Nama/BgNamaa.webp",

  // EVENT ORDER
  "/images/Albert-Jessica/EventOrder/Gereja.webp",
  "/images/Albert-Jessica/EventOrder/Teko.webp",
  "/images/Albert-Jessica/EventOrder/Cheers.webp",

  // GALLERY
  "/images/Albert-Jessica/Gallery/Aset1.webp",
  "/images/Albert-Jessica/Gallery/Aset1.webp",
  "/images/Albert-Jessica/Gallery/Aset1.webp",
  "/images/Albert-Jessica/Gallery/Aset1.webp",
  "/images/Albert-Jessica/Gallery/Aset1.webp",

  // DRESSCODE
  "/images/Albert-Jessica/Profile/BgKertas.webp",

  // GIFT
  "/images/Albert-Jessica/Gift/BgGift.webp",

  // THANKYOU
  "/images/Albert-Jessica/Thankyou/BgThankyou.webp"
];

const IMAGES_COMMON: string[] = [];

export function usePreloader() {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const isDesktop = window.innerWidth >= BREAKPOINT;
    const imagesToLoad = [
      ...(isDesktop ? IMAGES_DESKTOP : IMAGES_MOBILE),
      ...IMAGES_COMMON,
    ];

    const total = imagesToLoad.length;

    if (total === 0) {
      const timer = setTimeout(() => {
        setLoaded(true);
        setProgress(100);
      }, 0);
      return () => clearTimeout(timer);
    }

    let count = 0;

    imagesToLoad.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = img.onerror = () => {
        count++;
        setProgress(Math.round((count / total) * 100));
        if (count === total) setLoaded(true);
      };
    });
  }, []);

  return { loaded, progress };
}
