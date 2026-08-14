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

const AUTOPLAY_DELAY = 4000;

const FALLBACK_PHOTOS: string[] = [
  "/images/Albert-Jessica/Gallery/Aset1.webp",
  "/images/Albert-Jessica/Gallery/Aset1.webp",
  "/images/Albert-Jessica/Gallery/Aset1.webp",
  "/images/Albert-Jessica/Gallery/Aset1.webp",
  "/images/Albert-Jessica/Gallery/Aset1.webp",
];

type GalleryProps = {
  data?: any;
};

const Gallery = ({ data }: GalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const scrollPosRef = useRef<number>(0);

  const galleryImageData = data?.dataContent?.galleryImageData ?? [];

  const PHOTOS: string[] =
    galleryImageData.length > 0
      ? galleryImageData.map(
          (item: any) => `https://media.twinklebook.com/${item.url}`,
        )
      : FALLBACK_PHOTOS;

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
        className="relative w-full z-10 pt-[80px] pb-[79px] flex justify-center"
      >
        <div className="relative w-[340px] h-[460px] overflow-hidden">
          <div className="overflow-hidden w-full h-full" ref={emblaRef}>
            <div className="flex h-full">
              {PHOTOS.map((src, index) => (
                <div
                  key={index}
                  className="relative flex-none w-full h-full cursor-pointer"
                  onClick={() => handlePhotoClick(index)}
                >
                  <Image
                    src={src}
                    alt={`Albert & Jessica Gallery ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Lightbox
        open={lightboxOpen}
        close={handleClose}
        index={lightboxIndex}
        slides={PHOTOS.map((src) => ({ src }))}
        plugins={[Thumbnails, Zoom, Counter]}
        noScroll={{ disabled: true }}
      />
    </>
  );
};

export default Gallery;