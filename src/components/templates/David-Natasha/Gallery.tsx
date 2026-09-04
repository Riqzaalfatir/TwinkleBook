"use client";

import { forwardRef, useEffect, useMemo, useState } from "react";
import GalleryCarouselEmbla, { GalleryImage } from "./hooks/GalleryCarouselembla";
import { DavidNatashaDataProps } from "./types";

type GalleryProps = {
  data?: DavidNatashaDataProps;
};

const DEFAULT_PHOTOS: string[] = [
  "/images/David-Natasha/Gallery/ASET1.avif",
  "/images/David-Natasha/Gallery/ASET1.avif",
  "/images/David-Natasha/Gallery/ASET1.avif",
  "/images/David-Natasha/Gallery/ASET1.avif",
  "/images/David-Natasha/Gallery/ASET1.avif",
];

const Gallery = forwardRef<HTMLElement, GalleryProps>(({ data }, ref) => {
  const [images, setImages] = useState<GalleryImage[]>([]);

  const rawGalleryData = data?.dataContent?.galleryImageData ?? [];

  const photoUrls: string[] = useMemo(() => {
    if (!Array.isArray(rawGalleryData) || rawGalleryData.length === 0) {
      return DEFAULT_PHOTOS;
    }
    return rawGalleryData.map((item: any) =>
      item?.url
        ? `https://media.twinklebook.com/${item.url}`
        : "/images/David-Natasha/Gallery/ASET1.avif",
    );
  }, [rawGalleryData]);

  useEffect(() => {
    let cancelled = false;

    Promise.all(
      photoUrls.map(
        (src) =>
          new Promise<GalleryImage>((resolve) => {
            const img = new window.Image();
            img.src = src;
            img.onload = () => {
              resolve({
                src,
                type: img.naturalWidth >= img.naturalHeight ? "landscape" : "portrait",
              });
            };
            img.onerror = () => {
              resolve({ src, type: "landscape" });
            };
          }),
      ),
    ).then((result) => {
      if (!cancelled) setImages(result);
    });

    return () => {
      cancelled = true;
    };
  }, [photoUrls]);

  return (
    <section ref={ref} id="gallery" className="relative w-full z-20">
      {images.length > 0 && <GalleryCarouselEmbla images={images} />}
    </section>
  );
});

Gallery.displayName = "Gallery";

export default Gallery;