"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

/**
 * Route: /{eventUrl}/{pin}
 *
 * Fungsi: Nangkep PIN dari URL, simpen ke localStorage, redirect ke URL bersih
 *
 * Alur:
 * 1. User klik link: https://provite.id/ervanandadelyn/123456
 * 2. Page ini tangkap: id="ervanandadelyn", pin="123456"
 * 3. Simpen: localStorage["ervanandadelyn-pin"] = "123456"
 * 4. Redirect: window.location.replace("/ervanandadelyn")
 * 5. Browser naik ke app/[id]/page.tsx (URL bersih), yang baca PIN dari localStorage,
 *    lalu usePreloader() DI DALAM AtetHalim yang bertanggung jawab preload asset + nampilin LoadingScreen
 */
export default function PinRedirectPage() {
  const { id, pin } = useParams<{ id: string; pin: string }>();

  useEffect(() => {
    if (id && pin) {
      localStorage.setItem(`${id}-pin`, pin);
      window.location.replace(`/${id}`);
    }
  }, [id, pin]);

  return null;
}