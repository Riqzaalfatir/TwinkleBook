"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";

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

type GalleryRowShape = "single" | "double";

// urutan slot & bentuk baris tetap persis desain asli — cuma "sumber" fotonya yang jadi dinamis
const ROW_SHAPES: GalleryRowShape[] = [
  "single",
  "double",
  "double",
  "single",
  "single",
  "single",
  "double",
];

const REQUIRED_PHOTO_COUNT = 10;

const DEFAULT_PHOTOS: string[] = [
  "/images/Peter-Helena/Gallery/1.webp",
  "/images/Peter-Helena/Gallery/2.webp",
  "/images/Peter-Helena/Gallery/3.webp",
  "/images/Peter-Helena/Gallery/4.webp",
  "/images/Peter-Helena/Gallery/5.webp",
  "/images/Peter-Helena/Gallery/6.webp",
  "/images/Peter-Helena/Gallery/7.webp",
  "/images/Peter-Helena/Gallery/8.webp",
  "/images/Peter-Helena/Gallery/9.webp",
  "/images/Peter-Helena/Gallery/10.webp",
];

type GalleryRow =
  | { type: "single"; images: [string] }
  | { type: "double"; images: [string, string] };

function buildRows(photos: string[]): GalleryRow[] {
  let cursor = 0;
  return ROW_SHAPES.map((shape) => {
    if (shape === "single") {
      const img = photos[cursor];
      cursor += 1;
      return { type: "single", images: [img] } as GalleryRow;
    }
    const imgs: [string, string] = [photos[cursor], photos[cursor + 1]];
    cursor += 2;
    return { type: "double", images: imgs } as GalleryRow;
  });
}

const Gallery = ({ data }: GalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const rawGalleryData = data?.dataContent?.galleryImageData;

  const apiPhotos: string[] | null = useMemo(() => {
    if (
      !Array.isArray(rawGalleryData) ||
      rawGalleryData.length !== REQUIRED_PHOTO_COUNT
    ) {
      return null;
    }
    const urls = rawGalleryData.map((item: any) =>
      item?.url ? `https://media.twinklebook.com/${item.url}` : null,
    );
    if (urls.some((url) => !url)) return null;
    return urls as string[];
  }, [rawGalleryData]);

  const photos = apiPhotos ?? DEFAULT_PHOTOS;

  const galleryRows = useMemo(() => buildRows(photos), [photos]);

  const flatImages = useMemo(
    () => galleryRows.flatMap((row) => row.images),
    [galleryRows],
  );

  const rowsWithIndices = useMemo(() => {
    let counter = 0;
    return galleryRows.map((row) => {
      const indices = row.images.map(() => counter++);
      return { ...row, indices };
    });
  }, [galleryRows]);

  const handlePhotoClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section
      id="gallery"
      className="w-full bg-[#430D0D] pt-[30.5px] lg:pt-[27.5px] pb-[30px] flex flex-col items-center"
    >
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="font-aston-script text-[28px] lg:text-[28.35px] text-white text-center"
      >
        Our Gallery
      </motion.h1>

      <div className="flex flex-col gap-y-[7px] mt-[39px] lg:mt-[36.5px]">
        {rowsWithIndices.map((row, rowIndex) =>
          row.type === "single" ? (
            <motion.div
              key={rowIndex}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-[340px] lg:w-[344.31px] h-[220px] lg:h-[222.79px] cursor-pointer"
              onClick={() => handlePhotoClick(row.indices[0])}
            >
              <Image
                src={row.images[0]}
                alt={`Gallery ${rowIndex}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ) : (
            <motion.div
              key={rowIndex}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="flex gap-x-[9px]"
            >
              {row.images.map((src, i) => (
                <div
                  key={i}
                  className="relative w-[165px] lg:w-[167.09px] h-[253px] lg:h-[256.2px] cursor-pointer"
                  onClick={() => handlePhotoClick(row.indices[i])}
                >
                  <Image
                    src={src}
                    alt={`Gallery ${rowIndex}-${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </motion.div>
          ),
        )}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={flatImages.map((src) => ({ src }))}
        plugins={[Thumbnails, Zoom, Counter]}
        noScroll={{ disabled: true }}
      />
    </section>
  );
};

export default Gallery;

