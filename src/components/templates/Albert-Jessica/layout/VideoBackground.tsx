"use client";

import { useEffect, useRef } from "react";

type VideoBackgroundProps = {
  start: boolean;
};

const VideoBackground: React.FC<VideoBackgroundProps> = ({ start }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (start) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [start]);

  return (
    <div className="sticky top-0 w-full h-screen overflow-hidden z-0 -mb-[100vh]">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        muted
        loop
        playsInline
      >
        <source src="/video/Albert-Jessica/AlbertJessica.mp4" />
      </video>

      {/* LAYER WARNA OVERLAY (dari Figma: #201202 66%) */}
      <div className="absolute inset-0 bg-[#201202] opacity-[0.66]" />

      {/* LAYER GRADIENT (sudah ada sebelumnya) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
    </div>
  );
};

export default VideoBackground;