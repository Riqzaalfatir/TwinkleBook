"use client";

import { useEffect, useMemo, useRef } from "react";
import { useParams } from "next/navigation";

import ErrorScreen from "@/ui/ErrorScreen";

import { useEventUrl } from "@/hooks/api/useEventUrl";
import { useEventContent } from "@/hooks/api/useEventContent";
import { useEventSessionByPin } from "@/hooks/api/useEventSessionByPin";
import { useCurrentGuest } from "@/hooks/api/useCurrentGuest";

import { getTemplateNameFromId } from "@/lib/templateMap";
import { TEMPLATE_REGISTRY, DEFAULT_TEMPLATE } from "@/lib/templateRegistry";

export default function EventPage() {
  const { id } = useParams<{ id: string }>();

  const hasCheckedAccessRef = useRef(false);

  /*
   * ==========================================
   * GET EVENT BY URL
   * ==========================================
   */

  const { getEventByUrl, eventByUrl, status, error } = useEventUrl();

  useEffect(() => {
    if (!id) return;

    getEventByUrl(id);
  }, [id, getEventByUrl]);

  /*
   * ==========================================
   * CHECK PRIVATE EVENT
   * ==========================================
   */

  useEffect(() => {
    if (!eventByUrl || hasCheckedAccessRef.current) {
      return;
    }

    hasCheckedAccessRef.current = true;

    const savedPin = localStorage.getItem(`${id}-pin`);

    if (eventByUrl.eventAccess === 0 && !savedPin) {
      window.location.replace(`/${id}/private`);

      return;
    }
  }, [eventByUrl, id]);

  /*
   * ==========================================
   * EVENT CONTENT
   * ==========================================
   */

  const {
    getEventContent,
    eventContentByEventId,
    status: contentStatus,
    error: contentError,
  } = useEventContent();

  useEffect(() => {
    if (!eventByUrl?.id) return;

    getEventContent(eventByUrl.id);
  }, [eventByUrl?.id, getEventContent]);

  /*
   * ==========================================
   * CURRENT GUEST
   * ==========================================
   */

  const {
    getEventGuestByPin,
    eventGuestByPin,
    status: guestStatus,
    error: guestError,
  } = useCurrentGuest();

  useEffect(() => {
    if (!id) return;

    const pin = localStorage.getItem(`${id}-pin`);

    if (pin) {
      getEventGuestByPin(id, pin);
    }
  }, [id, getEventGuestByPin]);

  /*
   * ==========================================
   * EVENT SESSION
   * ==========================================
   */

  const { getEventSessionByPin, eventSessionByPin, eventSessionByPinStatus } =
    useEventSessionByPin();

  useEffect(() => {
    if (!eventByUrl?.id) return;

    const pin = localStorage.getItem(`${id}-pin`);

    if (pin) {
      getEventSessionByPin(pin, eventByUrl.id);
    }
  }, [eventByUrl?.id, id, getEventSessionByPin]);

  /*
   * ==========================================
   * ASSEMBLE DATA
   * ==========================================
   */

  const assembledData = useMemo(() => {
    if (!eventByUrl || !eventContentByEventId) {
      return null;
    }

    const pin = localStorage.getItem(`${id}-pin`);

    return {
      dataEvent: eventByUrl,

      dataContent: eventContentByEventId,

      dataSession: eventSessionByPin || [],

      guest: eventGuestByPin || null,

      pin: pin || null,

      url: id,
    };
  }, [
    eventByUrl,
    eventContentByEventId,
    eventSessionByPin,
    eventGuestByPin,
    id,
  ]);

  /*
   * ==========================================
   * LOADING
   * ==========================================
   */

  if (status === "loading" || contentStatus === "loading") {
    return null;
  }

  /*
   * ==========================================
   * ERROR EVENT
   * ==========================================
   */

  if (status === "error") {
    return <ErrorScreen message={error || "Event tidak ditemukan"} />;
  }

  /*
   * ==========================================
   * ERROR CONTENT
   * ==========================================
   */

  if (contentStatus === "error") {
    return (
      <ErrorScreen message={contentError || "Konten event tidak ditemukan"} />
    );
  }

  /*
   * Event/content belum tersedia,
   * tetapi juga belum error.
   */
  if (!eventByUrl || !eventContentByEventId) {
    return null;
  }

  /*
   * Guest gagal tidak perlu
   * menghentikan invitation.
   */
  if (guestStatus === "error") {
    console.warn(
      "Guest fetch gagal, lanjutin dengan guest kosong:",
      guestError,
    );
  }

  /*
   * Session gagal tidak perlu
   * menghentikan invitation.
   */
  if (eventSessionByPinStatus === "error") {
    console.warn("Session fetch gagal, lanjutin dengan session kosong");
  }

  if (!assembledData) {
    return <ErrorScreen message="Event data tidak tersedia" />;
  }

  /*
   * ==========================================
   * SELECT TEMPLATE
   * ==========================================
   */

  const templateName = eventByUrl.templateId
    ? getTemplateNameFromId(eventByUrl.templateId as string)
    : DEFAULT_TEMPLATE;

  const TemplateComponent =
    TEMPLATE_REGISTRY[templateName] ?? TEMPLATE_REGISTRY[DEFAULT_TEMPLATE];

  /*
   * ==========================================
   * RENDER TEMPLATE
   * ==========================================
   */

  return (
    <TemplateComponent
      data={assembledData}
      isPreview={false}
      dataValidation={null}
    />
  );
}
