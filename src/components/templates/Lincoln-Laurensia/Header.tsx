"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  Variants,
} from "framer-motion";

const MENU = [
  { label: "Home", target: "hero" },
  { label: "Profile", target: "profile" },
  { label: "Date", target: "countdown" },
  { label: "Event Detail", target: "event-order" },
  { label: "RSVP", target: "rsvp" },
  { label: "Dress Code", target: "dress-code" },
  { label: "Gallery", target: "gallery" },
  { label: "Wishes", target: "wishes" },
];

const STAGGER = 0.06;
const ITEM_DUR = 0.4;
const ICON_DUR = 0.35;
const OVERLAY_DUR = 0.4;

const HIDE_AFTER = 20; // px: setelah scroll lewat ini, navbar desktop boleh hilang
const NAV_DUR = 0.45; // durasi slide navbar desktop (detik)

const itemVariants: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: -30,
    transition: {
      duration: ITEM_DUR,
      delay: (MENU.length - i) * STAGGER,
      ease: "easeIn",
    },
  }),
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: ITEM_DUR,
      delay: 0.15 + i * STAGGER,
      ease: "easeOut",
    },
  }),
};

const scrollToSection = (target: string) => {
  document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
};

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [iconOpen, setIconOpen] = useState(false);
  const [itemsShown, setItemsShown] = useState(false);
  const busy = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // ===== Navbar desktop: hide saat scroll turun, show saat scroll naik =====
  const [navVisible, setNavVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    const diff = latest - prev;

    if (latest <= HIDE_AFTER) {
      setNavVisible(true); // di paling atas selalu tampil
    } else if (diff > 0) {
      setNavVisible(false); // scroll turun -> sembunyi
    } else if (diff < 0) {
      setNavVisible(true); // scroll naik -> muncul
    }
  });

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  useEffect(() => clearTimers, []);

  const openMenu = () => {
    busy.current = true;
    setMounted(true);
    setIconOpen(true);
    setItemsShown(true);

    const total = (0.15 + MENU.length * STAGGER + ITEM_DUR) * 1000;
    timers.current.push(
      setTimeout(() => {
        busy.current = false;
      }, total),
    );
  };

  const closeMenu = () => {
    busy.current = true;

    setItemsShown(false);
    const itemsMs = (MENU.length * STAGGER + ITEM_DUR) * 1000;

    timers.current.push(setTimeout(() => setIconOpen(false), itemsMs));
    timers.current.push(
      setTimeout(() => setMounted(false), itemsMs + ICON_DUR * 1000),
    );
    timers.current.push(
      setTimeout(
        () => {
          busy.current = false;
        },
        itemsMs + (ICON_DUR + OVERLAY_DUR) * 1000,
      ),
    );
  };

  const handleToggle = () => {
    if (busy.current) return;
    if (mounted) closeMenu();
    else openMenu();
  };

  const handleSelect = (target: string) => {
    if (busy.current) return;
    closeMenu();
    scrollToSection(target);
  };

  const lineBase =
    "absolute left-0 block h-[2px] w-full rounded-full bg-[#2F2F2F]";

  return (
    <>
      {/* ================= DESKTOP: navigasi horizontal (hanya teks) ================= */}
      <motion.nav
        initial={false}
        animate={{ y: navVisible ? "0%" : "-100%" }}
        transition={{ duration: NAV_DUR, ease: "easeInOut" }}
        className="fixed left-0 top-0 z-[95] hidden w-full justify-center pb-[16px] pt-[24px] font-poppins lg:flex"
      >
        <ul className="flex items-center gap-[40px]">
          {MENU.map((item) => (
            <li key={item.target}>
              <button
                type="button"
                onClick={() => scrollToSection(item.target)}
                className="text-[16px] uppercase tracking-wide text-[#2F2F2F] transition-opacity duration-300 hover:opacity-60"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* ================= MOBILE: overlay menu ================= */}
      <AnimatePresence>
        {mounted && (
          <motion.nav
            key="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: OVERLAY_DUR, ease: "easeOut" }}
            className="fixed inset-0 z-[90] flex flex-col justify-center bg-white/80 pl-[51px] font-poppins text-[#2F2F2F] backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col gap-[16px]">
              {MENU.map((item, i) => (
                <motion.li
                  key={item.target}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate={itemsShown ? "show" : "hidden"}
                >
                  <button
                    type="button"
                    onClick={() => handleSelect(item.target)}
                    className="text-left text-[14px] uppercase tracking-wide"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>

            <motion.p
              custom={MENU.length}
              variants={itemVariants}
              initial="hidden"
              animate={itemsShown ? "show" : "hidden"}
              className="mt-[40px] text-[10px]"
            >
              Select a section above to continue
            </motion.p>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ================= MOBILE: tombol hamburger / X ================= */}
      <button
        type="button"
        aria-label={iconOpen ? "Close menu" : "Open menu"}
        aria-expanded={iconOpen}
        onClick={handleToggle}
        className="fixed right-[20px] top-[20px] z-[95] h-[28px] w-[28px] drop-shadow-[0_2px_3px_rgba(0,0,0,0.25)] lg:hidden"
      >
        <span className="relative block h-full w-full">
          <motion.span
            className={lineBase}
            initial={false}
            animate={
              iconOpen
                ? { top: "50%", y: "-50%", rotate: 45 }
                : { top: "15%", y: "0%", rotate: 0 }
            }
            transition={{ duration: ICON_DUR, ease: "easeInOut" }}
          />
          <motion.span
            className={lineBase}
            initial={false}
            animate={
              iconOpen
                ? { top: "50%", y: "-50%", opacity: 0, scaleX: 0 }
                : { top: "50%", y: "-50%", opacity: 1, scaleX: 1 }
            }
            transition={{ duration: ICON_DUR, ease: "easeInOut" }}
          />
          <motion.span
            className={lineBase}
            initial={false}
            animate={
              iconOpen
                ? { top: "50%", y: "-50%", rotate: -45 }
                : { top: "85%", y: "-100%", rotate: 0 }
            }
            transition={{ duration: ICON_DUR, ease: "easeInOut" }}
          />
        </span>
      </button>
    </>
  );
};

export default Header;