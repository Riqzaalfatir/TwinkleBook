// "use client";

// import { useState, useCallback, useRef } from "react";
// import { getEventSessionByPin } from "./twinklebook";

// type Status = "idle" | "loading" | "success" | "error";

// export function useEventSessionByPin<T = any>() {
//   const [eventSessionByPin, setEventSessionByPin] = useState<T | null>(null);
//   const [eventSessionByPinStatus, setEventSessionByPinStatus] = useState<Status>("idle");
//   const [error, setError] = useState<string | null>(null);

//   const controllerRef = useRef<AbortController | null>(null);

//   const getEventSessionByPinFn = useCallback(
//     async (pin: string, eventId: string) => {
//       controllerRef.current?.abort();

//       const controller = new AbortController();
//       controllerRef.current = controller;

//       setEventSessionByPinStatus("loading");
//       setError(null);

//       const res = await getEventSessionByPin<T>(pin, eventId);

//       if (controller.signal.aborted) return;

//       if (res.error || !res.data) {
//         setEventSessionByPinStatus("error");
//         setError(res.error ?? "Data sesi tidak ditemukan");
//         return;
//       }

//       setEventSessionByPin(res.data);
//       setEventSessionByPinStatus("success");
//     },
//     []
//   );

//   const reset = useCallback(() => {
//     controllerRef.current?.abort();
//     setEventSessionByPin(null);
//     setEventSessionByPinStatus("idle");
//     setError(null);
//   }, []);

//   return {
//     getEventSessionByPin: getEventSessionByPinFn,
//     eventSessionByPin,
//     eventSessionByPinStatus,  // ⚠️ Note: field status-nya beda nama, sesuai tabel
//     error,
//     reset,
//   };
// }