"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

/**
 * Route: /{eventUrl}/{pin}
 *
 * Fungsi:
 * - Mengambil PIN dari URL
 * - Menyimpan PIN ke localStorage
 * - Redirect ke URL event yang bersih
 *
 * Contoh:
 *
 * /DavidNatasya/168068
 *
 * ↓
 *
 * localStorage["DavidNatasya-pin"] = "168068"
 *
 * ↓
 *
 * /DavidNatasya
 *
 * Setelah redirect, app/[id]/page.tsx
 * akan mengambil data event dan menentukan
 * template berdasarkan templateId.
 */
export default function PinRedirectPage() {
  const { id, pin } = useParams<{
    id: string;
    pin: string;
  }>();

  useEffect(() => {
    if (!id || !pin) return;

    localStorage.setItem(
      `${id}-pin`,
      pin,
    );

    window.location.replace(
      `/${id}`,
    );
  }, [id, pin]);

  return null;
}