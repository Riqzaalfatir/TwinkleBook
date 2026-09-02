"use client";

import { useEffect, useState } from "react";

const BREAKPOINT = 1024;
const BATCH_SIZE = 4;
const IMAGE_TIMEOUT = 10000;

/*
 * ==========================================
 * MOBILE ASSETS
 * ==========================================
 */

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

/*
 * ==========================================
 * DESKTOP ASSETS
 * ==========================================
 */

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

/*
 * ==========================================
 * COMMON ASSETS
 * ==========================================
 *
 * Selalu preload baik mobile maupun desktop.
 */

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

/*
 * ==========================================
 * LOAD SINGLE IMAGE
 * ==========================================
 */

function loadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new window.Image();

    let finished = false;

    /*
     * Jangan biarkan satu gambar bermasalah
     * menggantung preloader selamanya.
     */
    const timeout = window.setTimeout(() => {
      console.warn("[Preloader] Timeout:", src);

      finish();
    }, IMAGE_TIMEOUT);

    function finish() {
      if (finished) return;

      finished = true;

      window.clearTimeout(timeout);

      /*
       * Lepaskan listener setelah selesai.
       */
      img.onload = null;
      img.onerror = null;

      resolve();
    }

    img.onload = finish;

    img.onerror = () => {
      console.warn("[Preloader] Failed:", src);

      finish();
    };

    /*
     * Ini yang benar-benar membuat browser
     * mengambil asset.
     */
    img.src = src;

    /*
     * Kalau sudah tersedia di browser cache,
     * tidak perlu menunggu event onload.
     */
    if (img.complete) {
      finish();
    }
  });
}

/*
 * ==========================================
 * BATCH LOADER
 * ==========================================
 *
 * Load hanya beberapa gambar sekaligus.
 *
 * BATCH_SIZE = 4:
 *
 * 4 image
 * ↓
 * selesai
 * ↓
 * 4 image berikutnya
 *
 * Lebih aman daripada request semuanya
 * secara bersamaan.
 */

async function loadInBatches(
  images: string[],
  onProgress: () => void,
  cancelledRef: {
    current: boolean;
  },
) {
  for (let i = 0; i < images.length; i += BATCH_SIZE) {
    if (cancelledRef.current) {
      return;
    }

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

/*
 * ==========================================
 * USE PRELOADER
 * ==========================================
 */

export function usePreloader({ dynamicImages = [] }: UsePreloaderOptions = {}) {
  const [progress, setProgress] = useState(0);

  const [loaded, setLoaded] = useState(false);

  /*
   * Sama konsepnya dengan Peter-Helena:
   *
   * dependency berdasarkan ISI array,
   * bukan reference array.
   *
   * Contoh:
   *
   * render #1:
   * ["/a.avif", "/b.avif"]
   *
   * render #2:
   * ["/a.avif", "/b.avif"]
   *
   * Meskipun array baru,
   * hasil join tetap sama.
   *
   * Jadi useEffect TIDAK restart.
   */
  const dynamicImagesKey = dynamicImages.join("|");

  useEffect(() => {
    /*
     * Tentukan mobile / desktop
     * sekali ketika preload dimulai.
     */
    const isDesktop = window.innerWidth >= BREAKPOINT;

    /*
     * Gabungkan:
     *
     * device-specific asset
     * +
     * common asset
     * +
     * dynamic asset
     */
    const allImages = [
      ...(isDesktop ? IMAGES_DESKTOP : IMAGES_MOBILE),

      ...IMAGES_COMMON,

      ...dynamicImages,
    ];

    /*
     * Bersihkan:
     *
     * - string kosong
     * - value invalid
     * - duplicate image
     */
    const imagesToLoad = Array.from(
      new Set(
        allImages.filter(
          (src): src is string =>
            typeof src === "string" && src.trim().length > 0,
        ),
      ),
    );

    const total = imagesToLoad.length;

    /*
     * Reset state hanya ketika preload
     * benar-benar dijalankan ulang.
     */
    setProgress(total === 0 ? 100 : 0);

    setLoaded(total === 0);

    /*
     * Tidak ada gambar.
     */
    if (total === 0) {
      return;
    }

    const cancelledRef = {
      current: false,
    };

    let count = 0;

    console.log("[Preloader] Device:", isDesktop ? "desktop" : "mobile");

    console.log("[Preloader] Total:", total);

    console.log("[Preloader] Images:", imagesToLoad);

    /*
     * Mulai preload dalam batch.
     */
    loadInBatches(
      imagesToLoad,

      () => {
        count += 1;

        const newProgress = Math.min(100, Math.round((count / total) * 100));

        /*
         * setProgress menyebabkan render.
         *
         * Tetapi sekarang effect ini
         * TIDAK restart hanya karena
         * progress berubah.
         */
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

      /*
       * Kalau terjadi error tak terduga,
       * jangan biarkan LoadingScreen
       * menggantung selamanya.
       */
      if (!cancelledRef.current) {
        setProgress(100);
        setLoaded(true);
      }
    });

    /*
     * Cleanup ketika component unmount
     * atau dynamicImages benar-benar berubah.
     */
    return () => {
      cancelledRef.current = true;
    };

    /*
     * PENTING:
     *
     * Kita sengaja menggunakan key
     * berdasarkan isi dynamicImages,
     * bukan reference array.
     *
     * Jadi setProgress() tidak membuat
     * preload restart.
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dynamicImagesKey]);

  return {
    loaded,
    progress,
  };
}
