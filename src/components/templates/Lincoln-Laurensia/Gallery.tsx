"use client";

import React, { useState, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import moment from "moment";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";
import { fadeIn, fadeUp, fadeLeft, fadeRight } from "../../../lib/animation";

type GalleryProps = {
  data?: any;
};

const AUTOPLAY_DELAY = 4000;
const DEFAULT_PHOTO = "/images/Lincoln-Laurensia/Gallery/AsetSatu.webp";

const Gallery = ({ data }: GalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const scrollPosRef = useRef(0);

  const galleryData = data?.dataContent?.galleryImageData;

  const photos: string[] = useMemo(() => {
    if (!Array.isArray(galleryData) || galleryData.length === 0) {
      return [DEFAULT_PHOTO];
    }
    return galleryData.map((item: any) =>
      item?.url ? `https://media.twinklebook.com/${item.url}` : DEFAULT_PHOTO,
    );
  }, [galleryData]);

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

  const eventDate = data?.dataEvent?.date;
  const dateLabel = eventDate
    ? moment(eventDate).format("dddd - DD/MM/YY").toLowerCase()
    : "saturday - 28/11/26";

  return (
    <>
      <section
        id="gallery"
        className="relative z-10 flex w-full flex-col items-center bg-white px-[4.1vw] py-[11.25vw] font-poppins text-[#737573] lg:px-[1.06vw] lg:py-[7.4vw]"
      >
        <div className="flex w-full max-w-[88.21vw] justify-between text-[2.82vw] lg:max-w-[41.2vw] lg:text-[1.46vw]">
          <motion.p
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            just
          </motion.p>
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            us two
          </motion.p>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative my-[9.5vw] h-[117.95vw] w-[88.21vw] lg:my-[3.8vw] lg:h-[47.42vw] lg:w-[35.25vw]"
        >
          <div className="h-full overflow-hidden" ref={emblaRef}>
            <div className="flex h-full">
              {photos.map((src, index) => (
                <div
                  key={index}
                  className="relative h-full flex-[0_0_100%] cursor-pointer"
                  onClick={() => handlePhotoClick(index)}
                >
                  <Image
                    src={src}
                    alt={`Lincoln & Laurensia ${index + 1}`}
                    fill
                    className="object-cover"
                    unoptimized
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="flex w-full max-w-[88.21vw] justify-between text-[2.82vw] lg:max-w-[41.2vw] lg:text-[1.46vw]">
          <motion.p
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            good times
          </motion.p>
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {dateLabel}
          </motion.p>
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
