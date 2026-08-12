"use client";

import { useEffect, useMemo, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import LoadingScreen from "../../components/templates/Atet-Halim/LoadingScreen";
import { usePreloader } from "../../components/templates//Atet-Halim/hooks/usePreloader";
import ErrorScreen from "@/ui/ErrorScreen";
import { useEventUrl } from "@/hooks/api/useEventUrl";
import { useEventContent } from "@/hooks/api/useEventContent";
import { useEventSessionByPin } from "@/hooks/api/useEventSessionByPin";
import { useCurrentGuest } from "@/hooks/api/useCurrentGuest";
import { getTemplateNameFromId } from "@/lib/templateMap";
import { TEMPLATE_REGISTRY, DEFAULT_TEMPLATE } from "@/lib/templateRegistry";

export default function EventPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const hasCheckedAccessRef = useRef(false);

  const { progress } = usePreloader();

  const { getEventByUrl, eventByUrl, status, error } = useEventUrl();

  useEffect(() => {
    if (!id) return;
    getEventByUrl(id);
  }, [id, getEventByUrl]);

  useEffect(() => {
    if (!eventByUrl || hasCheckedAccessRef.current) return;
    hasCheckedAccessRef.current = true;

    const savedPin = localStorage.getItem(`${id}-pin`);
    if (eventByUrl.eventAccess === 0 && !savedPin) {
      window.location.replace(`/${id}/private`);
      return;
    }
  }, [eventByUrl, id]);

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

  const { getEventSessionByPin, eventSessionByPin, eventSessionByPinStatus } =
    useEventSessionByPin();

  useEffect(() => {
    if (!eventByUrl?.id) return;
    const pin = localStorage.getItem(`${id}-pin`);
    if (pin) {
      getEventSessionByPin(pin, eventByUrl.id);
    }
  }, [eventByUrl?.id, id, getEventSessionByPin]);

  const assembledData = useMemo(() => {
    if (!eventByUrl || !eventContentByEventId) return null;
    const pin = localStorage.getItem(`${id}-pin`);

    return {
      dataEvent: eventByUrl,
      dataContent: eventContentByEventId,
      dataSession: eventSessionByPin || [],
      guest: eventGuestByPin || null,
      pin: pin || null,
      url: id,
    };
  }, [eventByUrl, eventContentByEventId, eventSessionByPin, eventGuestByPin, id]);

  if (status === "loading" || contentStatus === "loading") {
    return <LoadingScreen progress={progress} />;
  }

  if (status === "error") {
    return <ErrorScreen message={error || "Event tidak ditemukan"} />;
  }

  if (contentStatus === "error") {
    return <ErrorScreen message={contentError || "Konten event tidak ditemukan"} />;
  }

  if (guestStatus === "error") {
    console.warn("Guest fetch gagal, lanjutin dengan guest kosong:", guestError);
  }

  if (eventSessionByPinStatus === "error") {
    console.warn("Session fetch gagal, lanjutin dengan session kosong");
  }

  if (!assembledData) {
    return <ErrorScreen message="Event data tidak tersedia" />;
  }

  const templateName = eventByUrl?.templateId
  ? getTemplateNameFromId(eventByUrl.templateId as string)
  : DEFAULT_TEMPLATE;
  const TemplateComponent =
    TEMPLATE_REGISTRY[templateName] ?? TEMPLATE_REGISTRY[DEFAULT_TEMPLATE];

  return (
    <TemplateComponent
      data={assembledData}
      isPreview={false}
      dataValidation={null}
    />
  );
}