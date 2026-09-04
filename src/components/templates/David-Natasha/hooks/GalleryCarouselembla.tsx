"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export type Orientation = "portrait" | "landscape";

export interface GalleryImage {
    src: string;
    type: Orientation;
    /** default (landscape 3:2, portrait 2:3.5). */
    ratio?: number;
}

interface GalleryCarouselProps {
    images: GalleryImage[];
    autoPlayInterval?: number;
}

const FALLBACK_LANDSCAPE_RATIO = 3 / 2;
const FALLBACK_PORTRAIT_RATIO = 2 / 3.5;

export default function GalleryCarouselEmbla({ images, autoPlayInterval = 4000 }: GalleryCarouselProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerHeight, setContainerHeight] = useState(0);
    const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);
    const [zoomScale, setZoomScale] = useState(1);
    const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
    const isDragging = useRef(false);
    const dragStart = useRef({ x: 0, y: 0 });
    const panStart = useRef({ x: 0, y: 0 });
    const zoomImgRef = useRef<HTMLImageElement>(null);

    const clampPan = useCallback((x: number, y: number, scale: number) => {
        const img = zoomImgRef.current;
        if (!img) return { x, y };

        const maxX = Math.max(0, (img.clientWidth * scale - window.innerWidth) / 2);
        const maxY = Math.max(0, (img.clientHeight * scale - window.innerHeight) / 2);

        return {
            x: Math.min(maxX, Math.max(-maxX, x)),
            y: Math.min(maxY, Math.max(-maxY, y)),
        };
    }, []);

    const isZoomOpen = zoomedIndex !== null;

    const autoplay = useRef(
        Autoplay({ delay: autoPlayInterval, stopOnInteraction: false, stopOnMouseEnter: true })
    );

    useEffect(() => {
        if (!isZoomOpen) return;

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        autoplay.current.stop();

        return () => {
            document.body.style.overflow = originalOverflow;
            autoplay.current.play();
        };
    }, [isZoomOpen]);

    useEffect(() => {
        setZoomScale(1);
        setPanOffset({ x: 0, y: 0 });
    }, [zoomedIndex]);

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "center",
            containScroll: false,
            skipSnaps: false,
        },
        [autoplay.current]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const updateHeight = () => setContainerHeight(el.clientHeight);
        updateHeight();

        const resizeObserver = new ResizeObserver(updateHeight);
        resizeObserver.observe(el);
        return () => resizeObserver.disconnect();
    }, []);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi, onSelect]);

    useEffect(() => {
        emblaApi?.reInit();
    }, [containerHeight, emblaApi]);

    const scrollPrev = useCallback(() => {
        emblaApi?.scrollPrev();
        autoplay.current.reset();
    }, [emblaApi]);
    const scrollNext = useCallback(() => {
        emblaApi?.scrollNext();
        autoplay.current.reset();
    }, [emblaApi]);
    const scrollTo = useCallback((index: number) => {
        emblaApi?.scrollTo(index);
        autoplay.current.reset();
    }, [emblaApi]);

    const zoomPrev = useCallback(() => {
        setZoomedIndex((prev) => (prev === null ? null : prev === 0 ? images.length - 1 : prev - 1));
    }, [images.length]);
    const zoomNext = useCallback(() => {
        setZoomedIndex((prev) => (prev === null ? null : prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);
    const closeZoom = useCallback(() => setZoomedIndex(null), []);
    const zoomIn = useCallback(() => {
        setZoomScale((s) => {
            const next = Math.min(s + 0.5, 3);
            setPanOffset((p) => clampPan(p.x, p.y, next));
            return next;
        });
    }, [clampPan]);
    const zoomOut = useCallback(() => {
        setZoomScale((s) => {
            const next = Math.max(s - 0.5, 1);
            setPanOffset((p) => (next === 1 ? { x: 0, y: 0 } : clampPan(p.x, p.y, next)));
            return next;
        });
    }, [clampPan]);

    // Drag/pan pas foto lagi di-zoom (scale > 1).
    const handlePointerDown = useCallback((e: React.PointerEvent<HTMLImageElement>) => {
        if (zoomScale <= 1) return;
        isDragging.current = true;
        dragStart.current = { x: e.clientX, y: e.clientY };
        panStart.current = panOffset;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
    }, [zoomScale, panOffset]);

    const handlePointerMove = useCallback((e: React.PointerEvent<HTMLImageElement>) => {
        if (!isDragging.current) return;
        const dx = e.clientX - dragStart.current.x;
        const dy = e.clientY - dragStart.current.y;
        const next = clampPan(panStart.current.x + dx, panStart.current.y + dy, zoomScale);
        setPanOffset(next);
    }, [clampPan, zoomScale]);

    const handlePointerUp = useCallback(() => {
        isDragging.current = false;
    }, []);

    return (
        <div className="relative w-full" ref={containerRef}>
            <div className="overflow-hidden px-[8%] lg:px-[15%] bg-black" ref={emblaRef}>
                <div className="flex" style={{ backfaceVisibility: "hidden" }}>
                    {images.map((img, index) => {
                        const isLandscape = img.type === "landscape";
                        const ratio = img.ratio ?? (isLandscape ? FALLBACK_LANDSCAPE_RATIO : FALLBACK_PORTRAIT_RATIO);

                        const widthStyle: React.CSSProperties = containerHeight
                            ? { width: `${Math.ceil(containerHeight * ratio)}px` }
                            : {};

                        const widthClass = containerHeight
                            ? ""
                            : isLandscape
                                ? "w-[80%]"
                                : "w-[84%] lg:w-[70%]";

                        return (
                            <div
                                key={index}
                                className={`relative flex-shrink-0 ${widthClass}`}
                                style={{ height: "90vh", ...widthStyle }}
                            >
                                <div className="relative w-full h-full overflow-hidden">
                                    <img
                                        src={img.src}
                                        alt={`Gallery ${index + 1}`}
                                        className="w-full h-full object-cover block cursor-zoom-in"
                                        draggable={false}
                                        onClick={() => setZoomedIndex(index)}
                                    />

                                    <div
                                        className="absolute inset-0 bg-black transition-opacity duration-300 pointer-events-none"
                                        style={{
                                            opacity: index === selectedIndex ? 0 : 0.5,
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <button
                onClick={scrollPrev}
                className="hover absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-black/50 rounded-full p-2 lg:p-3 transition-colors"
                aria-label="Previous"
            >
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 lg:w-12 lg:h-12">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <button
                onClick={scrollNext}
                className="hover absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-black/50 rounded-full p-2 lg:p-3 transition-colors"
                aria-label="Next"
            >
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 lg:w-12 lg:h-12">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <div className="flex items-center justify-center gap-2 absolute bottom-4 left-0 right-0 z-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className="hover transition-all duration-300"
                        style={{
                            width: index === selectedIndex ? "24px" : "14px",
                            height: "2px",
                            backgroundColor: index === selectedIndex ? "#FFFFFF" : "rgba(255,255,255,0.4)",
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {isZoomOpen && typeof document !== "undefined" && createPortal(
                <div
                    className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center"
                    onClick={closeZoom}
                >
                    {/* Counter kiri atas */}
                    <div className="absolute top-4 left-4 lg:top-6 lg:left-6 z-10 text-white text-sm lg:text-base font-medium">
                        {zoomedIndex! + 1} / {images.length}
                    </div>

                    {/* Zoom in/out + close kanan atas */}
                    <div
                        className="absolute top-4 right-4 lg:top-6 lg:right-6 z-10 flex items-center gap-3 lg:gap-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={zoomIn} className="hover text-white p-1" aria-label="Zoom in">
                            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 lg:w-7 lg:h-7">
                                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                                <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                        <button onClick={zoomOut} className="hover text-white p-1" aria-label="Zoom out">
                            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 lg:w-7 lg:h-7">
                                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                                <path d="M21 21l-4.3-4.3M8 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                        <button onClick={closeZoom} className="hover text-white p-1" aria-label="Close">
                            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 lg:w-7 lg:h-7">
                                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>

                    {/* Prev / next di dalam popup */}
                    <button
                        onClick={(e) => { e.stopPropagation(); zoomPrev(); }}
                        className="hover absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-10 text-white p-2"
                        aria-label="Previous"
                    >
                        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 lg:w-9 lg:h-9">
                            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); zoomNext(); }}
                        className="hover absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 z-10 text-white p-2"
                        aria-label="Next"
                    >
                        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 lg:w-9 lg:h-9">
                            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <img
                        ref={zoomImgRef}
                        src={images[zoomedIndex!].src}
                        alt={`Gallery ${zoomedIndex! + 1}`}
                        className="max-w-full max-h-full object-contain select-none"
                        style={{
                            transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomScale})`,
                            transition: isDragging.current ? "none" : "transform 0.2s",
                            cursor: zoomScale > 1 ? (isDragging.current ? "grabbing" : "grab") : "default",
                            touchAction: zoomScale > 1 ? "none" : "auto",
                        }}
                        draggable={false}
                        onClick={(e) => e.stopPropagation()}
                        onPointerDown={handlePointerDown}
                        onPointerMove={handlePointerMove}
                        onPointerUp={handlePointerUp}
                        onPointerCancel={handlePointerUp}
                    />
                </div>,
                document.body
            )}
        </div>
    );
}