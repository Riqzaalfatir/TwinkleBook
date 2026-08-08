"use client";

import React, { createContext, useContext, useState } from "react";

/**
 * ⚠️ INI FILE MOCK SEMENTARA — bukan implementasi asli dari Eka.
 * Tujuannya cuma biar Rsvp.tsx bisa dites tampilannya (styling, animasi, layout)
 * tanpa nyambung ke API beneran.
 *
 * Begitu Eka kirim file asli `SmartRsvpForm.tsx`, TIMPA/GANTI seluruh isi file ini
 * dengan punya dia. Rsvp.tsx TIDAK PERLU diubah sama sekali karena import path-nya
 * udah sama persis.
 */

type SmartRsvpContextType = {
  guestData: { name?: string; closeRSVPDate?: string } | null;
  attendStatus: number; // 0 = belum pilih, 1 = attend, 2 = unable
  invitationUrl: string;
  paramUrl: string;
  setAttendStatus: (status: number) => void;
};

const SmartRsvpContext = createContext<SmartRsvpContextType | null>(null);

export const useSmartRsvp = () => {
  const ctx = useContext(SmartRsvpContext);
  if (!ctx) {
    throw new Error("useSmartRsvp harus dipanggil di dalam <SmartRsvpForm>");
  }
  return ctx;
};

type SmartRsvpFormProps = {
  data?: any;
  paramUrl?: string;
  onSubmitRSVP?: () => void;
  defaultAttendStatus?: number;
  children: React.ReactNode;
};

export const SmartRsvpForm = ({
  data,
  paramUrl = "",
  defaultAttendStatus = 1,
  children,
}: SmartRsvpFormProps) => {
  const [attendStatus, setAttendStatus] = useState<number>(defaultAttendStatus);

  // Data dummy sekadar biar ada isinya pas dites — bebas lo ganti angkanya
  const mockValue: SmartRsvpContextType = {
    guestData: {
      name: "Sela (Tester)",
      closeRSVPDate: "2026-09-12T00:00:00.000Z",
    },
    attendStatus,
    invitationUrl: "6281998478131",
    paramUrl,
    setAttendStatus,
  };

  return (
    <SmartRsvpContext.Provider value={mockValue}>
      {children}
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
  const { attendStatus } = useSmartRsvp();
  if (attendStatus === 0) return null; // sesuai dokumentasi: gak render sebelum status dipilih
  return (
    <button type="button" className={className}>
      {attendStatus === 1 ? "CONFIRM ATTEND" : "CONFIRM NOT ATTEND"}
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

SmartRsvpForm.Modals = () => {
  // Mock kosong — belum ada popup beneran, cuma biar gak error dipanggil
  return null;
};