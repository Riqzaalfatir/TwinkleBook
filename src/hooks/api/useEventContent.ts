// src/hooks/api/useEventContent.ts
"use client";

import { useState, useCallback, useRef } from "react";
import { getEventContent } from "./twinklebook";

type Status = "idle" | "loading" | "success" | "error";

export function useEventContent<T = any>() {
  const [eventContentByEventId, setEventContentByEventId] = useState<T | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const controllerRef = useRef<AbortController | null>(null);

  const getEventContentFn = useCallback(async (eventId: string) => {
    controllerRef.current?.abort();

    const controller = new AbortController();
    controllerRef.current = controller;

    setStatus("loading");
    setError(null);

    const res = await getEventContent<T>(eventId);

    if (controller.signal.aborted) return;

    if (res.error || !res.data) {
      setStatus("error");
      setError(res.error || "Konten event tidak ditemukan");
      return;
    }

    setEventContentByEventId(res.data);
    setStatus("success");
  }, []);

  const reset = useCallback(() => {
    controllerRef.current?.abort();
    setEventContentByEventId(null);
    setStatus("idle");
    setError(null);
  }, []);

  return {
    getEventContent: getEventContentFn,
    eventContentByEventId,
    status,
    error,
    reset,
  };
}