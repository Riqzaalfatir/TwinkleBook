"use client";

import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 1024; // px — sesuaikan kalau breakpoint desain beda

export const useIsMobile = (breakpoint: number = MOBILE_BREAKPOINT): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);

    const handleChange = () => setIsMobile(mediaQuery.matches);

    handleChange(); // set nilai awal setelah mount (hindari mismatch SSR/CSR)
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [breakpoint]);

  return isMobile;
};