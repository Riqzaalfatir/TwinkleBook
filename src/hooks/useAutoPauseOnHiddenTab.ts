"use client";

import { useEffect, useRef } from "react";


export function useAutoPauseOnHiddenTab(
  mediaRef: React.RefObject<HTMLMediaElement | null>,
  onStateChange?: (isPlaying: boolean) => void,
) {
  const wasPlayingRef = useRef(false);
  const isAutoTogglingRef = useRef(false); 
  const onStateChangeRef = useRef(onStateChange);

  useEffect(() => {
    onStateChangeRef.current = onStateChange;
  }, [onStateChange]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      const media = mediaRef.current;
      if (!media) return;

      if (document.hidden) {
        wasPlayingRef.current = !media.paused;

        if (wasPlayingRef.current) {
          isAutoTogglingRef.current = true;
          media.pause();
          onStateChangeRef.current?.(false);
        }
      } else {
        if (wasPlayingRef.current) {
          isAutoTogglingRef.current = true; 
          media
            .play()
            .then(() => {
              onStateChangeRef.current?.(true);
            })
            .catch((err) => {
              console.log("Resume diblokir:", err);
              isAutoTogglingRef.current = false;
            });
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange,
      );
    };
  }, [mediaRef]);

  return isAutoTogglingRef; 
}