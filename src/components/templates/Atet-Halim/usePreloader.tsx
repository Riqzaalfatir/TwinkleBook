"use client";

import { useEffect, useState } from "react";

const BREAKPOINT = 1024;

const IMAGES_MOBILE: string[] = [
  "/images/Atet-Halim/hero/LayerKertas4.webp", // Hero
  "/images/Atet-Halim/EventOrder/LayerKertas.webp", // EventOrder
  "/images/Atet-Halim/Wishes/OrnamentGaris.webp", // Wishes (lg:hidden)
  "/images/Atet-Halim/Thankyou/LayerKertas.webp", // Thankyou
  "/images/Atet-Halim/Thankyou/BungaKiriM.webp", // Thankyou (lg:hidden)
  "/images/Atet-Halim/Thankyou/BungaKananM.webp", // Thankyou (lg:hidden)
  "/images/Atet-Halim/Gallery/Pengantin.webp", // Gallery
];

const IMAGES_DESKTOP: string[] = [

                "/images/Atet-Halim/Opening/BungaKiriAtasD.webp",
                              "/images/Atet-Halim/Opening/BungaKananBawahD.webp",


    "/images/Atet-Halim/Hero/BgKertasD.webp",
  "/images/Atet-Halim/Hero/ateskertas.webp", // Hero
  "/images/Atet-Halim/EventOrder/LayerKertasD.svg", // EventOrder
  "/images/Atet-Halim/Wishes/BungaKiriAtas.webp", // Wishes (hidden lg:block)
  "/images/Atet-Halim/Wishes/BungaKananAtas.webp", // Wishes (hidden lg:block)
  "/images/Atet-Halim/Wishes/BungaKiritengah.webp", // Wishes (hidden lg:block)
  "/images/Atet-Halim/Thankyou/BungaKiriBawah.webp", // Thankyou (hidden lg:block)
  "/images/Atet-Halim/Thankyou/BungaKananBawah.webp", // Thankyou (hidden lg:block)
  "/images/Atet-Halim/Gallery/PengantinD.webp", // Gallery
];

const IMAGES_COMMON: string[] = [
  // Opening.tsx
  "/images/Atet-Halim/Hero/BackgoundKertas.webp",
  "/images/Atet-Halim/Opening/BungaKiriAtas.webp",
  "/images/Atet-Halim/Opening/BungaKananBawah.webp",

  // Hero.tsx
  "/images/Atet-Halim/hero/BungaKiriAtasD.webp",
  "/images/Atet-Halim/hero/BungaKananAtasD.webp",
  "/images/Atet-Halim/hero/BungaKiriBawahD.webp",
  "/images/Atet-Halim/hero/BungaKananBawahD.webp",
  "/images/Atet-Halim/hero/LogoD4.webp",

  // Profile.tsx
  "/images/Atet-Halim/Profile/BungaKiriBD.webp",
  "/images/Atet-Halim/Profile/BungaKananBawahD.webp",
  "/images/Atet-Halim/Profile/PengantinCowo.webp",
  "/images/Atet-Halim/Profile/PengantinCewe.webp",

  // EventOrder.tsx
  "/images/Atet-Halim/EventOrder/RantingKiriAtasD.webp",
  "/images/Atet-Halim/EventOrder/RantingKananAtasD.webp",
  "/images/Atet-Halim/EventOrder/BungaKiriBawahD.webp",
  "/images/Atet-Halim/EventOrder/BungaKananBawahD.webp",
  "/images/Atet-Halim/EventOrder/OrnamentGaris.webp",
  "/images/Atet-Halim/EventOrder/Pullman..webp",

  // Dresscode.tsx
  "/images/Atet-Halim/Dresscode/BungaKirii.webp",
  "/images/Atet-Halim/Dresscode/OrnamentGaris.webp",
  "/images/Atet-Halim/Dresscode/Human.webp",

  // Wishes.tsx
  "/images/Atet-Halim/Wishes/Panah.svg",
  "/images/Atet-Halim/Wishes/Pesan.svg",

  // Thankyou.tsx
  "/images/Atet-Halim/Thankyou/BungaAtass.webp",
  "/images/Atet-Halim/Thankyou/LogoProvite.webp",

  // Rsvp.tsx
  "/images/Atet-Halim/Rsvp/BungaKananAtass.webp",
  "/images/Atet-Halim/Rsvp/BungaKiriBawahh.webp",
  "/images/Atet-Halim/Rsvp/BungaKananBawahh.webp",
  "/images/Atet-Halim/Rsvp/Wa.png",
];

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