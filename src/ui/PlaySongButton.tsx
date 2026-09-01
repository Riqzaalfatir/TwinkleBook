"use client";

import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useAutoPauseOnHiddenTab } from "../hooks/useAutoPauseOnHiddenTab"; // sesuaikan path

type PlaySongButtonProps = {
  src: string;
  start: boolean;
  onPlay?: () => void;
};

export type PlaySongButtonHandle = {
  pause: () => void;
  play: () => void;
};

const PlaySongButton = forwardRef<PlaySongButtonHandle, PlaySongButtonProps>(
  ({ src, start, onPlay }, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const hasSrc = Boolean(src);
    // GANTI: dulu useEffect manual, sekarang tinggal panggil hook
    useAutoPauseOnHiddenTab(audioRef, setIsPlaying);

    useImperativeHandle(
      ref,
      () => ({
        pause: () => {
          if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
          }
        },

        play: () => {
          if (audioRef.current && hasSrc) {
            audioRef.current
              .play()
              .then(() => {
                setIsPlaying(true);
              })
              .catch((err) => {
                console.log("Play diblokir:", err);
              });
          }
        },
      }),
      [hasSrc],
    );

    useEffect(() => {
      if (start && audioRef.current && hasSrc) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log("Autoplay diblokir:", err);
            setIsPlaying(false);
          });
      }
    }, [start, hasSrc]);

    const toggleSong = () => {
      if (!audioRef.current || !hasSrc) return;

      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        onPlay?.();

        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log("Play diblokir:", err);
            setIsPlaying(false);
          });
      }
    };

    return (
      <>
        {hasSrc && <audio ref={audioRef} src={src} loop />}

        <button
          onClick={toggleSong}
          className="fixed bottom-6 right-6 z-[60] w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md active:scale-95 transition-transform"
        >
          {isPlaying ? (
            <svg viewBox="0 0 448 512" width="16" height="16" fill="black">
              <path d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" />
            </svg>
          ) : (
            <svg viewBox="0 0 448 512" width="16" height="16" fill="black">
              <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
            </svg>
          )}
        </button>
      </>
    );
  },
);

PlaySongButton.displayName = "PlaySongButton";

export default PlaySongButton;
