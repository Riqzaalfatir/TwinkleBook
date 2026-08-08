"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import NotifModal from "../../../popup/NotifModal";
import { useEventUrl } from "@/hooks/api/useEventUrl";

export default function PrivateEventPage() {
  const { id } = useParams<{ id: string }>();
  const { getEventByUrl, eventByUrl } = useEventUrl();
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    if (id) {
      getEventByUrl(id);
    }
  }, [id, getEventByUrl]);

  return (
    <div className="min-h-screen w-full bg-[#F6F6F4]">
      {showModal && (
        <NotifModal
          type="private_link"
          onClose={() => setShowModal(false)}
          waNumber={eventByUrl?.invitationWAUrl ?? "6281234567890"}
        />
      )}
    </div>
  );
}