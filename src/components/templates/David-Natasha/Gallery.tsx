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

  const plugins = useMemo(
    () => [Autoplay({ delay: AUTOPLAY_DELAY, stopOnInteraction: false })],
    [],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, plugins);

  useEffect(() => {
    emblaApi?.reInit();
  }, [isMobile, emblaApi]);

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
        className={
          isMobile
            ? "relative w-full h-[600px] min-h-[600px] max-h-[600px] z-20"
            : "relative w-full h-[960px] min-h-[960px] max-h-[960px] z-20"
        }
      >
        <div className="overflow-hidden w-full h-full" ref={emblaRef}>
          <div className="flex h-full">
            {photos.map((src, index) => (
              <div
                key={index}
                className="relative flex-none w-full h-full cursor-pointer"
                onClick={() => handlePhotoClick(index)}
              >
                <Image
                  src={src}
                  alt={`David & Natasya Gallery ${index + 1}`}
                  fill
                  className="object-cover lg:object-bottom"
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
