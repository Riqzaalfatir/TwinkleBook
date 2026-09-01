//  ⚠️ INI FILE MOCK SEMENTARA UNTUK UP VERCEL — bukan implementasi asli.

"use client";

import React, { createContext, useContext, useState } from "react";
import NotifModal from "../templates/../../popup/NotifModal";

type SmartRsvpContextType = {
  guestData: { name?: string; closeRSVPDate?: string } | null;
  attendStatus: number; // 0 = belum pilih, 1 = attend, 2 = unable
  invitationUrl: string;
  paramUrl: string;
  setAttendStatus: (status: number) => void;
  handleSubmitClick: () => void;
};

const SmartRsvpContext = createContext<SmartRsvpContextType | null>(null);

export const useSmartRsvp = () => {
  const ctx = useContext(SmartRsvpContext);
  if (!ctx) {
    throw new Error("useSmartRsvp harus dipanggil di dalam <SmartRsvpForm>");
  }
  return ctx;
};

type ModalType =
  | "incomplete_rsvp"
  | "confirm_rsvp"
  | "rsvp_confirmed_hadir"
  | "rsvp_confirmed_tidak_hadir"
  | null;

type SmartRsvpFormProps = {
  data?: any;
  guestData?: { name?: string; closeRSVPDate?: string } | null;
  paramUrl?: string;
  onSubmitRSVP?: () => void;
  defaultAttendStatus?: number;
  children: React.ReactNode;
};

export const SmartRsvpForm = ({
  data,
  guestData: guestDataProp,
  paramUrl = "",
  defaultAttendStatus = 1,
  children,
}: SmartRsvpFormProps) => {
  const [attendStatus, setAttendStatus] = useState<number>(defaultAttendStatus);
  const [modalType, setModalType] = useState<ModalType>(null);

  const waNumber = "6281998478131";

  const handleSubmitClick = () => {
    if (attendStatus === 0) {
      setModalType("incomplete_rsvp");
      return;
    }
    setModalType("confirm_rsvp");
  };

  const handleFinalConfirm = (): void => {
    setModalType(
      attendStatus === 1
        ? "rsvp_confirmed_hadir"
        : "rsvp_confirmed_tidak_hadir",
    );
  };

  const mockValue: SmartRsvpContextType = {
    guestData: {
      name: guestDataProp?.name ?? "[Guest Name]",
      closeRSVPDate: guestDataProp?.closeRSVPDate ?? "2026-09-12T00:00:00.000Z",
    },
    attendStatus,
    invitationUrl: waNumber,
    paramUrl,
    setAttendStatus,
    handleSubmitClick,
  };

  return (
    <SmartRsvpContext.Provider value={mockValue}>
      {children}

      {modalType && (
        <NotifModal
          type={modalType}
          onClose={() => setModalType(null)}
          onConfirm={handleFinalConfirm}
          waNumber={waNumber}
        />
      )}
    </SmartRsvpContext.Provider>
  );
};

SmartRsvpForm.AttendToggle = ({ className }: { className?: string }) => {
  const { setAttendStatus } = useSmartRsvp();
  return (
    <button
      type="button"
      onClick={() => setAttendStatus(1)}
      className={className}
    >
      ATTEND
    </button>
  );
};

SmartRsvpForm.NotAttendToggle = ({ className }: { className?: string }) => {
  const { setAttendStatus } = useSmartRsvp();
  return (
    <button
      type="button"
      onClick={() => setAttendStatus(2)}
      className={className}
    >
      UNABLE TO ATTEND
    </button>
  );
};

SmartRsvpForm.SubmitButton = ({ className }: { className?: string }) => {
  const { attendStatus, handleSubmitClick } = useSmartRsvp();
  return (
    <button type="button" onClick={handleSubmitClick} className={className}>
      {attendStatus === 1 ? (
        "CONFIRM ATTEND"
      ) : attendStatus === 2 ? (
        <>
          CONFIRM UNABLE
          <br />
          TO ATTEND
        </>
      ) : (
        "CONFIRM"
      )}
    </button>
  );
};

SmartRsvpForm.Accordion = ({
  className,
}: {
  className?: string;
  bgActiveColor?: string;
}) => {
  const { attendStatus } = useSmartRsvp();
  if (attendStatus !== 1) return null;
  return <div className={className}>(mock accordion — belum ada isi)</div>;
};

SmartRsvpForm.Modals = () => null;
