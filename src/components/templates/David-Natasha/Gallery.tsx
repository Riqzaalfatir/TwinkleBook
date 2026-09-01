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

const DEFAULT_PHOTOS_MOBILE: string[] = [
  "/images/David-Natasha/Gallery/ASET1.webp",
  "/images/David-Natasha/Gallery/ASET1.webp",
  "/images/David-Natasha/Gallery/ASET1.webp",
  "/images/David-Natasha/Gallery/ASET1.webp",
  "/images/David-Natasha/Gallery/ASET1.webp",
];

const DEFAULT_PHOTOS_DESKTOP: string[] = [
  "/images/David-Natasha/Gallery/ASETD1.webp",
  "/images/David-Natasha/Gallery/ASETD1.webp",
  "/images/David-Natasha/Gallery/ASETD1.webp",
  "/images/David-Natasha/Gallery/ASETD1.webp",
  "/images/David-Natasha/Gallery/ASETD1.webp",
];

const Gallery = ({ data }: GalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
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
        : "/images/David-Natasha/Gallery/ASET1.webp",
    );
  }, [rawGalleryData, isMobile]);

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

  useEffect(() => {
    emblaApiDesktop?.reInit();
  }, [orientations, emblaApiDesktop]);

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
        <section
          id="gallery"
          className="relative w-full h-[600px] min-h-[600px] max-h-[600px] overflow-hidden z-20"
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
                    alt={`David & Natasya Gallery ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section
          id="gallery"
          className="relative w-full h-[960px] min-h-[960px] max-h-[960px] overflow-hidden z-20"
        >
          <div className="embla h-full" ref={emblaRefDesktop}>
            <div className="embla__container flex h-full">
              {photos.map((src, index) => {
                const orientation = orientations[index];
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
                      alt={`David & Natasya Gallery ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
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