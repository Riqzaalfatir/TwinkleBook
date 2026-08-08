"use client";

import { useCallback, useRef, useState } from "react";
import { getEventByUrl } from "./twinklebook";
import type { EventByUrlResponse } from "../../types/event";

type Status = "idle" | "loading" | "success" | "error";

export function useEventUrl() {
  const [eventByUrl, setEventByUrl] =
    useState<EventByUrlResponse | null>(null);

  const [status, setStatus] =
    useState<Status>("idle");

  const [error, setError] =
    useState<string | null>(null);

  const controllerRef =
    useRef<AbortController | null>(null);

  const getEventByUrlFn = useCallback(
    async (url: string) => {
      controllerRef.current?.abort();

      const controller = new AbortController();
      controllerRef.current = controller;

      setStatus("loading");
      setError(null);

      const res = await getEventByUrl<EventByUrlResponse>(
        url,
        controller.signal
      );

      if (controller.signal.aborted) return;

      if (res.error || !res.data) {
        setStatus("error");
        setError(res.error ?? "Event tidak ditemukan");
        return;
      }

      setEventByUrl(res.data);
      setStatus("success");
    },
    []
  );

  const reset = useCallback(() => {
    controllerRef.current?.abort();

    setEventByUrl(null);
    setStatus("idle");
    setError(null);
  }, []);

  return {
    getEventByUrl: getEventByUrlFn,
    eventByUrl,
    status,
    error,
    reset,
  };
}



