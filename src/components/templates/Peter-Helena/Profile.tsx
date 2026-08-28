"use client";

import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animation";
import { useAutoPauseOnHiddenTab } from "../../../hooks/useAutoPauseOnHiddenTab"; // sesuaikan path

type ProfileProps = {
  data?: any;
  onVideoPlay?: () => void;
  onVideoPause?: () => void;
};

export type ProfileHandle = {
  pause: () => void;
};

const getMiddleLastName = (fullName?: string, firstName?: string) => {
  if (!fullName) return "";
  if (firstName && fullName.startsWith(firstName)) {
    return fullName.slice(firstName.length).trim();
  }
  const idx = fullName.indexOf(" ");
  return idx === -1 ? "" : fullName.slice(idx + 1).trim();
};

const splitParentName = (text?: string) => {
  if (!text) return null;
  const idx = text.indexOf(" and ");
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)} <span className="uppercase">and</span>
      <br />
      {text.slice(idx + 5)}
    </>
  );
};

const Profile = forwardRef<ProfileHandle, ProfileProps>(
  ({ data, onVideoPlay, onVideoPause }, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const isAutoTogglingRef = useAutoPauseOnHiddenTab(videoRef);

    useImperativeHandle(
      ref,
      () => ({
        pause: () => {
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
          }
        },
      }),
      [],
    );

    const groomName = data?.dataEvent?.groomName ?? "Peter";
    const groomFullName =
      data?.dataEvent?.groomFullName ?? "Peter Andreas Sutjiatma";
    const brideName = data?.dataEvent?.brideName ?? "Helena";
    const brideFullName = data?.dataEvent?.brideFullName ?? "Helena Surajiman";

    const groomParent =
      data?.dataEvent?.groomParent ??
      "Mr. Lie Andi Kunadi and Mrs. Juliasih Lukanta";
    const brideParent =
      data?.dataEvent?.brideParent ??
      "Mr. Setiyono Wibowo and Mrs. Wini Anggraini";

    const compilationVideo = data?.dataContent?.videoUploadData?.[0]?.url;
    const videoSrc = compilationVideo
      ? `https://media.twinklebook.com/${compilationVideo}`
      : "/video/Peter-Helena/PeterHelenaCMPP.mp4";

    const handlePlayClick = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };

    return (
      <section
        id="profile"
        className="w-full bg-[#430D0D] pt-[78px] pb-[76.5px] lg:pt-[76.96px] lg:pb-[73px]"
      >
        <div className="flex flex-col items-center text-center justify-center leading-none">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-[342px] h-[142px] lg:w-[346.09px] lg:h-[143.9px]"
          >
            <video
              ref={videoRef}
              src={videoSrc}
              poster="/images/Peter-Helena/video-thumbnail.webp"
              loop
              preload="metadata"
              playsInline
              controls={isPlaying}
              onPlay={() => {
                setIsPlaying(true);

                if (isAutoTogglingRef.current) {
                  isAutoTogglingRef.current = false;
                } else {
                  onVideoPlay?.();
                }
              }}
              onPause={() => {
                setIsPlaying(false);

                if (isAutoTogglingRef.current) {
                  isAutoTogglingRef.current = false;
                } else {
                  onVideoPause?.();
                }
              }}
              className="w-full h-full object-cover"
            />

            {!isPlaying && (
              <button
                type="button"
                onClick={handlePlayClick}
                className="absolute inset-0 flex items-center justify-center bg-black/20"
                aria-label="Play video"
              >
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="28"
                    cy="28"
                    r="28"
                    fill="black"
                    fillOpacity="0.5"
                  />
                  <path d="M22 17L38 28L22 39V17Z" fill="white" />
                </svg>
              </button>
            )}
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cinzel text-[14px] lg:text-[14.18px] text-white mt-[41px] lg:mt-[38.5px] leading-[20px]"
          >
            Together with their families <br /> invite you to celebrate <br />{" "}
            their marriage
          </motion.p>

          <div className="flex flex-col items-center justify-center leading-none mt-[49px] lg:mt-[47px]">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-cinzel font-semibold text-[32px] lg:text-[32.41px] text-white uppercase"
            >
              {groomName.toUpperCase()}
            </motion.h2>

            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-aston-script text-[20px] lg:text-[20.25px] text-white pt-[5px]"
            >
              {getMiddleLastName(groomFullName, groomName)}
            </motion.h3>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-cinzel font-medium text-[14px] lg:text-[14.18px] text-white leading-[20px] pt-[35px] lg:pt-[32px]"
            >
              {splitParentName(groomParent)}
            </motion.p>
          </div>

          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cinzel text-[24px] lg:text-[24.3px] text-white py-[28px] lg:py-[29px]"
          >
            &
          </motion.h3>

          <div className="flex flex-col items-center justify-center leading-none">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-cinzel font-semibold text-[32px] lg:text-[32.41px] text-white uppercase"
            >
              {brideName.toUpperCase()}
            </motion.h2>

            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-aston-script text-[20px] lg:text-[20.25px] text-white pt-[5px]"
            >
              {getMiddleLastName(brideFullName, brideName)}
            </motion.h3>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-cinzel font-medium text-[14px] lg:text-[14.18px] text-white leading-[20px] pt-[35px] lg:pt-[32px]"
            >
              {splitParentName(brideParent)}
            </motion.p>
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-cinzel text-[14px] lg:text-[14.18px] text-white leading-[20px] pt-[45px]"
          >
            Our joy will be complete with <br />
            your presence and blessings.
          </motion.p>
        </div>
      </section>
    );
  },
);

Profile.displayName = "Profile";

export default Profile;
