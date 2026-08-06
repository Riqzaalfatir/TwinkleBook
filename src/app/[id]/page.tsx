"use client";

import { useEffect, useMemo, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import LoadingScreen from "../../components/templates/Atet-Halim/LoadingScreen";
import ErrorScreen from "@/ui/ErrorScreen";
import { useEventUrl } from "@/hooks/api/useEventUrl";
import { useEventContent } from "@/hooks/api/useEventContent";
import { useEventSessionByPin } from "@/hooks/api/useEventSessionByPin";
import { useCurrentGuest } from "@/hooks/api/useCurrentGuest";
import { getTemplateNameFromId } from "@/lib/templateMap";
import AtetHalim from "@/components/templates/Atet-Halim";

export default function EventPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const hasCheckedAccessRef = useRef(false);

  // ═══════════════════════════════════════════════════════════════
  // STEP 1: Fetch Event By URL (GetCurrentEvent)
  // ═══════════════════════════════════════════════════════════════
  const { getEventByUrl, eventByUrl, status, error } = useEventUrl();

  useEffect(() => {
    if (!id) return;
    getEventByUrl(id);
  }, [id, getEventByUrl]);

  // ═══════════════════════════════════════════════════════════════
  // STEP 2: Check PIN Access (Private Event)
  // ═══════════════════════════════════════════════════════════════
  useEffect(() => {
    if (!eventByUrl || hasCheckedAccessRef.current) return;

    hasCheckedAccessRef.current = true;

    // Ambil PIN dari localStorage (disimpen dari [pin]/page.tsx)
    const savedPin = localStorage.getItem(`${id}-pin`);

    // Kalau event private (eventAccess === 0) dan belum ada PIN, redirect ke input PIN
    if (eventByUrl.eventAccess === 0 && !savedPin) {
      window.location.replace(`/${id}/private`);
      return;
    }
  }, [eventByUrl, id]);

  // ═══════════════════════════════════════════════════════════════
  // STEP 3: Fetch Event Content (GetEventContent)
  // ═══════════════════════════════════════════════════════════════
  const { getEventContent, eventContentByEventId, status: contentStatus, error: contentError } =
    useEventContent();

  useEffect(() => {
    if (!eventByUrl?.id) return;
    getEventContent(eventByUrl.id);
  }, [eventByUrl?.id, getEventContent]);

  // ═══════════════════════════════════════════════════════════════
  // STEP 4: Fetch Guest Data By PIN (GetCurrentGuest)
  // ═══════════════════════════════════════════════════════════════
  const {
    getEventGuestByPin,
    eventGuestByPin,
    status: guestStatus,
    error: guestError,
  } = useCurrentGuest();

  useEffect(() => {
    if (!id) return;

    const pin = localStorage.getItem(`${id}-pin`);

    // Hanya fetch guest kalau ada PIN
    if (pin) {
      // id di sini adalah URL slug (eventUrl), pin adalah string dari localStorage
      getEventGuestByPin(id, pin);
    }
  }, [id, getEventGuestByPin]);

  // ═══════════════════════════════════════════════════════════════
  // STEP 5: Fetch Session By PIN (GetGuestEventSessionByPinNew)
  // ═══════════════════════════════════════════════════════════════
  const {
    getEventSessionByPin,
    eventSessionByPin,
    eventSessionByPinStatus,
  } = useEventSessionByPin();

  useEffect(() => {
    if (!eventByUrl?.id) return;

    const pin = localStorage.getItem(`${id}-pin`);

    // Hanya fetch session kalau ada PIN
    if (pin) {
      getEventSessionByPin(pin, eventByUrl.id);
    }
  }, [eventByUrl?.id, id, getEventSessionByPin]);

  // ═══════════════════════════════════════════════════════════════
  // STEP 6: Assemble All Data (Flat Structure + Guest)
  // ═══════════════════════════════════════════════════════════════
  const assembledData = useMemo(() => {
    if (!eventByUrl || !eventContentByEventId) return null;

    const pin = localStorage.getItem(`${id}-pin`);

    return {
      // Spread semua field dari eventByUrl (flat)
      ...eventByUrl,

      // Spread semua field dari eventContent (flat)
      ...eventContentByEventId,

      // Session data
      sessions: eventSessionByPin || [],

      // Guest data (from GetCurrentGuest)
      // Kalau ada PIN dan guest data berhasil di-fetch, include guest data
      guest: eventGuestByPin || null,

      // PIN dan URL slug (untuk future use di section)
      pin: pin || null,
      url: id,
    };
  }, [eventByUrl, eventContentByEventId, eventSessionByPin, eventGuestByPin, id]);

  // ═══════════════════════════════════════════════════════════════
  // Loading State
  // ═══════════════════════════════════════════════════════════════
  if (status === "loading" || contentStatus === "loading") {
    return <LoadingScreen />;
  }

  // ═══════════════════════════════════════════════════════════════
  // Error State
  // ═══════════════════════════════════════════════════════════════
  if (status === "error") {
    return <ErrorScreen message={error || "Event tidak ditemukan"} />;
  }

  if (contentStatus === "error") {
    return <ErrorScreen message={contentError || "Konten event tidak ditemukan"} />;
  }

  if (guestStatus === "error") {
    // Guest error nggak fatal, lanjutin aja dengan guest kosong
    console.warn("Guest fetch gagal, lanjutin dengan guest kosong:", guestError);
  }

  if (eventSessionByPinStatus === "error") {
    // Session error nggak fatal, lanjutin aja dengan session kosong
    console.warn("Session fetch gagal, lanjutin dengan session kosong");
  }

  // ═══════════════════════════════════════════════════════════════
  // No Data
  // ═══════════════════════════════════════════════════════════════
  if (!assembledData) {
    return <ErrorScreen message="Event data tidak tersedia" />;
  }

  // ═══════════════════════════════════════════════════════════════
  // Render Template
  // ═══════════════════════════════════════════════════════════════
  return (
    <AtetHalim
      data={assembledData}
      isPreview={false}
      dataValidation={null}
    />
  );
}

// "use client";

// import { useEffect, useMemo, useRef } from "react";
// import { useParams, useRouter } from "next/navigation";
// import LoadingScreen from "../../components/templates/Atet-Halim/LoadingScreen";
// import ErrorScreen from "../../ui/ErrorScreen";
// import { useEventUrl } from "@/hooks/api/useEventUrl";
// import { useEventContent } from "@/hooks/api/useEventContent";
// import { useEventSessionByPin } from "../../hooks/api/useEventSessionByPin";
// import { getTemplateNameFromId } from "../../lib/templateMap";
// import AtetHalim from "@/components/templates/Atet-Halim";

// export default function EventPage() {
//   const router = useRouter();
//   const { id } = useParams<{ id: string }>();
//   const hasCheckedAccessRef = useRef(false);

//   // ═══════════════════════════════════════════════════════════════
//   // STEP 1: Fetch Event By URL (GetCurrentEvent)
//   // ═══════════════════════════════════════════════════════════════
//   const { getEventByUrl, eventByUrl, status, error } = useEventUrl();

//   useEffect(() => {
//     if (!id) return;
//     getEventByUrl(id);
//   }, [id, getEventByUrl]);

//   // ═══════════════════════════════════════════════════════════════
//   // STEP 2: Check PIN Access (Private Event)
//   // ═══════════════════════════════════════════════════════════════
//   useEffect(() => {
//     if (!eventByUrl || hasCheckedAccessRef.current) return;

//     hasCheckedAccessRef.current = true;

//     // Ambil PIN dari localStorage (disimpen dari [pin]/page.tsx)
//     const savedPin = localStorage.getItem(`${id}-pin`);

//     // Kalau event private (eventAccess === 0) dan belum ada PIN, redirect ke input PIN
//     if (eventByUrl.eventAccess === 0 && !savedPin) {
//       window.location.replace(`/${id}/private`);
//       return;
//     }
//   }, [eventByUrl, id]);

//   // ═══════════════════════════════════════════════════════════════
//   // STEP 3: Fetch Event Content (GetEventContent)
//   // ═══════════════════════════════════════════════════════════════
//   const { getEventContent, eventContentByEventId, status: contentStatus, error: contentError } =
//     useEventContent();

//   useEffect(() => {
//     if (!eventByUrl?.id) return;
//     getEventContent(eventByUrl.id);
//   }, [eventByUrl?.id, getEventContent]);

//   // ═══════════════════════════════════════════════════════════════
//   // STEP 4: Fetch Session By PIN (GetGuestEventSessionByPinNew)
//   // ═══════════════════════════════════════════════════════════════
//   const {
//     getEventSessionByPin,
//     eventSessionByPin,
//     eventSessionByPinStatus,
//   } = useEventSessionByPin();

//   useEffect(() => {
//     if (!eventByUrl?.id) return;

//     const pin = localStorage.getItem(`${id}-pin`);

//     // Hanya fetch session kalau ada PIN
//     if (pin) {
//       getEventSessionByPin(pin, eventByUrl.id);
//     }
//   }, [eventByUrl?.id, id, getEventSessionByPin]);

//   // ═══════════════════════════════════════════════════════════════
//   // STEP 5: Assemble All Data (Flat Structure)
//   // ═══════════════════════════════════════════════════════════════
//   const assembledData = useMemo(() => {
//     if (!eventByUrl || !eventContentByEventId) return null;

//     const pin = localStorage.getItem(`${id}-pin`);

//     return {
//       // Spread semua field dari eventByUrl (flat)
//       ...eventByUrl,

//       // Spread semua field dari eventContent (flat)
//       ...eventContentByEventId,

//       // Session data
//       sessions: eventSessionByPin || [],

//       // PIN dan URL slug (untuk future use di section)
//       pin: pin || null,
//       url: id,
//     };
//   }, [eventByUrl, eventContentByEventId, eventSessionByPin, id]);

//   // ═══════════════════════════════════════════════════════════════
//   // Loading State
//   // ═══════════════════════════════════════════════════════════════
//   if (status === "loading" || contentStatus === "loading" || eventSessionByPinStatus === "loading") {
//     return <LoadingScreen />;
//   }

//   // ═══════════════════════════════════════════════════════════════
//   // Error State
//   // ═══════════════════════════════════════════════════════════════
//   if (status === "error") {
//     return <ErrorScreen message={error || "Event tidak ditemukan"} />;
//   }

//   if (contentStatus === "error") {
//     return <ErrorScreen message={contentError || "Konten event tidak ditemukan"} />;
//   }

//   if (eventSessionByPinStatus === "error") {
//     // Session error nggak fatal, lanjutin aja dengan session kosong
//     console.warn("Session fetch gagal, lanjutin dengan session kosong");
//   }

//   // ═══════════════════════════════════════════════════════════════
//   // No Data
//   // ═══════════════════════════════════════════════════════════════
//   if (!assembledData) {
//     return <ErrorScreen message="Event data tidak tersedia" />;
//   }

//   // ═══════════════════════════════════════════════════════════════
//   // Render Template
//   // ═══════════════════════════════════════════════════════════════
//   return (
//     <AtetHalim
//       data={assembledData}
//       isPreview={false}
//       dataValidation={null}
//     />
//   );
// }