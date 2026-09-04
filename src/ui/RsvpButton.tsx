"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const RSVPButton = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const showTimer = setTimeout(() => setShowPopup(true), 1500);
        const hideTimer = setTimeout(() => setShowPopup(false), 5000);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    const scrollToRSVP = () => {
        const el = document.getElementById("rsvp");
        if (el) {
            const offset = 80;
            const elementPosition = el.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
        setShowPopup(false);
    };

    return (
        <div className="fixed right-6 lg:right-10 bottom-[80px] lg:bottom-[96px] z-[80] flex items-center gap-3">
            <div
                className={`
                    bg-white
                    rounded-2xl
                    shadow-lg
                    px-4 py-3
                    w-[220px]
                    transition-all
                    duration-300
                    ${showPopup ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 translate-x-4 pointer-events-none"}
                `}
            >
                <p className="font-bold text-sm text-black leading-tight">
                    Click Here to RSVP.
                </p>
                <p className="italic text-xs text-black mt-1 leading-snug">
                    Tap this button to confirm your attendance.
                </p>
            </div>

            <button
                onClick={scrollToRSVP}
                className="
                hover
                    w-12
                    h-12
                    lg:w-[60px]
                    lg:h-[60px]
                    rounded-full
                    bg-white
                    border-2
                    border-[#2A6CF6]
                    flex
                    items-center
                    justify-center
                    shadow-lg
                    shrink-0
                "
                aria-label="Go to RSVP section"
            >
                <Image src="/images/ico/ic_rsvp_button.png" className="lg:w-[30px] lg:h-[30px]" priority alt="RSVP" width={20} height={20} />
            </button>
        </div>
    );
};

export default RSVPButton;