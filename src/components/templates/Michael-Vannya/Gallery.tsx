"use client";

import React, {
  useState,
  useRef,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";
import { useIsMobile } from "../../../hooks/useIsMobile";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

type GalleryProps = {
  data?: any;
};

type Orientation = "landscape" | "portrait" | null;

const AUTOPLAY_DELAY = 4000;
const DOTS_COUNT = 3;

const DEFAULT_PHOTOS_MOBILE: string[] = [
  "/images/Michael-Vannya/Gallery/MichaelVannyaa.webp",
  "/images/Michael-Vannya/Gallery/MichaelVannyaa.webp",
  "/images/Michael-Vannya/Gallery/MichaelVannyaa.webp",
  "/images/Michael-Vannya/Gallery/MichaelVannyaa.webp",
  "/images/Michael-Vannya/Gallery/MichaelVannyaa.webp",
];

const DEFAULT_PHOTOS_DESKTOP: string[] = [
  "/images/Michael-Vannya/Gallery/MichaelVannya.webp",
  "/images/Michael-Vannya/Gallery/MichaelVannya.webp",
  "/images/Michael-Vannya/Gallery/MichaelVannya.webp",
  "/images/Michael-Vannya/Gallery/MichaelVannya.webp",
  "/images/Michael-Vannya/Gallery/MichaelVannya.webp",
];

const Gallery = ({ data }: GalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [orientations, setOrientations] = useState<Orientation[]>([]);
  const scrollPosRef = useRef<number>(0);
  const isMobile = useIsMobile();

  const rawGalleryData = data?.dataContent?.galleryImageData ?? [];

  const photos: string[] = useMemo(() => {
    if (!Array.isArray(rawGalleryData) || rawGalleryData.length === 0) {
      return isMobile ? DEFAULT_PHOTOS_MOBILE : DEFAULT_PHOTOS_DESKTOP;
    }
    return rawGalleryData.map((item: any) =>
      item?.url
        ? `https://media.twinklebook.com/${item.url}`
        : "/images/Michael-Vannya/Gallery/MichaelVannya.webp",
    );
  }, [rawGalleryData, isMobile]);

  // Deteksi orientasi tiap foto (cuma perlu jalan di desktop)
  useEffect(() => {
    if (isMobile) return;

    let cancelled = false;
    setOrientations(new Array(photos.length).fill(null));

    photos.forEach((src, index) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        if (cancelled) return;
        const orientation: Orientation =
          img.naturalWidth >= img.naturalHeight ? "landscape" : "portrait";
        setOrientations((prev) => {
          const next = [...prev];
          next[index] = orientation;
          return next;
        });
      };
    });

    return () => {
      cancelled = true;
    };
  }, [photos, isMobile]);

  const plugins = useMemo(
    () => [Autoplay({ delay: AUTOPLAY_DELAY, stopOnInteraction: false })],
    [],
  );

  const [emblaRefMobile, emblaApiMobile] = useEmblaCarousel(
    { loop: true },
    plugins,
  );

  const [emblaRefDesktop, emblaApiDesktop] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: "trimSnaps",
    },
    plugins,
  );

  const onSelectMobile = useCallback(() => {
    if (!emblaApiMobile) return;
    setSelectedIndex(emblaApiMobile.selectedScrollSnap());
  }, [emblaApiMobile]);

  useEffect(() => {
    if (!emblaApiMobile) return;
    onSelectMobile();
    emblaApiMobile.on("select", onSelectMobile);
    emblaApiMobile.on("reInit", onSelectMobile);

    return () => {
      emblaApiMobile.off("select", onSelectMobile);
      emblaApiMobile.off("reInit", onSelectMobile);
    };
  }, [emblaApiMobile, onSelectMobile]);

  // Reinit embla desktop tiap kali orientasi selesai kedeteksi (biar lebar slide ke-update)
  useEffect(() => {
    emblaApiDesktop?.reInit();
  }, [orientations, emblaApiDesktop]);

  const handleDotClick = useCallback(
    (index: number) => {
      emblaApiMobile?.scrollTo(index);
    },
    [emblaApiMobile],
  );

  const handlePhotoClick = useCallback((index: number) => {
    scrollPosRef.current = window.scrollY;
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const handleClose = () => {
    setLightboxOpen(false);
    setTimeout(() => {
      window.scrollTo({ top: scrollPosRef.current, behavior: "instant" });
    }, 10);
  };

  return (
    <>
      {isMobile ? (
        // ================= MOBILE  =================
        <section
          id="gallery"
          className="relative w-full aspect-[390/538] overflow-hidden z-30"
        >
          <div className="embla h-full" ref={emblaRefMobile}>
            <div className="embla__container flex h-full">
              {photos.map((src, index) => (
                <div
                  key={index}
                  className="embla__slide relative flex-[0_0_100%] h-full cursor-pointer"
                  onClick={() => handlePhotoClick(index)}
                >
                  <Image
                    src={src}
                    alt={`Michael & Vannya ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            className="absolute left-1/2 -translate-x-1/2 flex items-center z-40"
            style={{ bottom: "30px", gap: "17px" }}
          >
            {Array.from({ length: DOTS_COUNT }).map((_, index) => {
              const activeIndex = selectedIndex % DOTS_COUNT;
              return (
                <motion.button
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    delay: index * 0.25,
                  }}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => handleDotClick(index)}
                  className="rounded-full transition-colors duration-300"
                  style={{
                    width: "11px",
                    height: "11px",
                    backgroundColor:
                      activeIndex === index ? "#D9D9D9" : "#D9D9D980",
                  }}
                />
              );
            })}
          </div>
        </section>
      ) : (
        // ================= DESKTOP =================
        <section
          id="gallery"
          className="relative w-full h-[700px] lg:h-[800px] overflow-hidden z-30"
        >
          <div className="embla h-full" ref={emblaRefDesktop}>
            <div className="embla__container flex h-full">
              {photos.map((src, index) => {
                const orientation = orientations[index];
                // Sebelum orientasi kedeteksi, kasih lebar netral dulu biar nggak "loncat"
                const widthClass =
                  orientation === "landscape"
                    ? "w-[900px]"
                    : orientation === "portrait"
                      ? "w-[450px]"
                      : "w-[600px]";

                return (
                  <div
                    key={index}
                    className={`embla__slide relative flex-[0_0_auto] h-full cursor-pointer ${widthClass}`}
                    onClick={() => handlePhotoClick(index)}
                  >
                    <Image
                      src={src}
                      alt={`Michael & Vannya ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Lightbox
        open={lightboxOpen}
        close={handleClose}
        index={lightboxIndex}
        slides={photos.map((src) => ({ src }))}
        plugins={[Thumbnails, Zoom, Counter]}
        noScroll={{ disabled: true }}
      />
    </>
  );
};

export default Gallery;
