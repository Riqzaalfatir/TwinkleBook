"use client";

import React, { useState, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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

const AUTOPLAY_DELAY = 4000;

const DEFAULT_PHOTOS: string[] = [
  "/images/Atet-Halim/Gallery/Pengantin1.webp",
  "/images/Atet-Halim/Gallery/Pengantin2.webp",
  "/images/Atet-Halim/Gallery/Pengantin3.webp",
  "/images/Atet-Halim/Gallery/Pengantin4.webp",
  "/images/Atet-Halim/Gallery/Pengantin5.webp",
];

const Gallery = ({ data }: GalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const scrollPosRef = useRef<number>(0);

  // ✅ Dari dataContent.galleryImageData, sesuai dokumentasi
  const rawGalleryData = data?.dataContent?.galleryImageData ?? [];

  const photos: string[] = useMemo(() => {
    if (!Array.isArray(rawGalleryData) || rawGalleryData.length === 0) {
      return DEFAULT_PHOTOS;
    }

    return rawGalleryData.map((item: any) =>
      item?.url
        ? `https://media.twinklebook.com/${item.url}`
        : "/images/Atet-Halim/Gallery/Pengantin.webp",
    );
  }, [rawGalleryData]);

  const plugins = useMemo(
    () => [Autoplay({ delay: AUTOPLAY_DELAY, stopOnInteraction: false })],
    [],
  );

  const [emblaRef] = useEmblaCarousel({ loop: true }, plugins);

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
      <section
        id="gallery"
        className="relative w-full  h-[598px] min-h-[598px] max-h-[598px] lg:h-[949px] lg:min-h-[949px] lg:max-h-[949px] overflow-hidden z-30"
      >
        <div className="overflow-hidden w-full h-full" ref={emblaRef}>
          <div className="flex h-full">
            {photos.map((src, index) => (
              <div
                key={index}
                className="relative flex-none w-screen lg:w-1/4 h-full cursor-pointer"
                onClick={() => handlePhotoClick(index)}
              >
                <Image
                  src={src}
                  alt={`Gallery photo ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

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
