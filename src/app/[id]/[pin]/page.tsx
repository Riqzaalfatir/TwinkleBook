"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import LoadingScreen from "../../../components/templates/Atet-Halim/LoadingScreen";
import { usePreloader } from "../../../components/templates/Atet-Halim/usePreloader";

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
 * 5. Browser naik ke app/[id]/page.tsx (URL bersih), yang baca PIN dari localStorage
 */
export default function PinRedirectPage() {
  const { id, pin } = useParams<{ id: string; pin: string }>();
  const { progress } = usePreloader();

  useEffect(() => {
    if (id && pin) {
      localStorage.setItem(`${id}-pin`, pin);

      // Redirect ke URL bersih (tanpa PIN)
      // Pakai window.location.replace (bukan router.push) supaya:
      // 1. History browser nggak nyimpen URL ber-PIN
      // 2. Halaman di-reload penuh dari server
      window.location.replace(`/${id}`);
    }
  }, [id, pin]);

  return <LoadingScreen progress={progress} onDone={() => {}} />;
}
