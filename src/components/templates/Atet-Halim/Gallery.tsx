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

type Photo = {
  mobile: string;
  desktop: string;
};

const photos: Photo[] = [
  {
    mobile: "/images/Atet-Halim/Gallery/Pengantin.webp",
    desktop: "/images/Atet-Halim/Gallery/PengantinD.webp",
  },
];

const AUTOPLAY_DELAY = 4000;

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const scrollPosRef = useRef<number>(0);

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
            {photos.map((photo, index) => (
              <div
                key={index}
                className="relative flex-none w-screen h-full cursor-pointer"
                onClick={() => handlePhotoClick(index)}
              >
                <Image
                  src={photo.mobile}
                  alt={`Gallery photo ${index + 1}`}
                  fill
                  className="object-cover block lg:hidden"
                  priority={index === 0}
                />
                <Image
                  src={photo.desktop}
                  alt={`Gallery photo ${index + 1}`}
                  fill
                  className="object-cover hidden lg:block"
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
        slides={photos.map((photo) => ({ src: photo.desktop }))}
        plugins={[Thumbnails, Zoom, Counter]}
        noScroll={{ disabled: true }}
      />
    </>
  );
};

export default Gallery;