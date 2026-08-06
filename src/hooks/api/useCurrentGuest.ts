"use client";

import { useState, useCallback, useRef } from "react";
import { getEventGuestByPin } from "./twinklebook";

type Status = "idle" | "loading" | "success" | "error";

export function useCurrentGuest<T = any>() {
  const [eventGuestByPin, setEventGuestByPin] = useState<T | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const controllerRef = useRef<AbortController | null>(null);

  const getEventGuestByPinFn = useCallback(
    async (url: string, pin: string) => {
      controllerRef.current?.abort();

      const controller = new AbortController();
      controllerRef.current = controller;

      setStatus("loading");
      setError(null);

      const res = await getEventGuestByPin<T>(url, pin);

      if (controller.signal.aborted) return;

      if (res.error || !res.data) {
        setStatus("error");
        setError(res.error ?? "Data tamu tidak ditemukan");
        return;
      }

      setEventGuestByPin(res.data);
      setStatus("success");
    },
    []
  );

  const reset = useCallback(() => {
    controllerRef.current?.abort();
    setEventGuestByPin(null);
    setStatus("idle");
    setError(null);
  }, []);

  return {
    getEventGuestByPin: getEventGuestByPinFn,
    eventGuestByPin,
    status,
    error,
    reset,
  };
}