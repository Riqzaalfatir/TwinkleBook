"use client";

import React, { createContext, useContext, useState } from "react";
import NotifModal from "../templates/../../popup/NotifModal";



/**
 * ⚠️ INI FILE MOCK SEMENTARA — bukan implementasi asli dari Eka.
 * Begitu Eka kirim file asli `SmartRsvpForm.tsx`, TIMPA/GANTI seluruh isi file ini.
 * Rsvp.tsx TIDAK PERLU diubah sama sekali.
 *
 * ⚠️ CATATAN KHUSUS: dokumentasi resmi bilang SubmitButton "gak render apa-apa
 * sebelum status kehadiran dipilih". Di mock ini SENGAJA DIBUAT BEDA (tombol
 * selalu ada, mirip code lama) atas permintaan eksplisit buat kebutuhan testing.
 * Kalau nanti file asli dari Eka gak punya opsi buat override behavior ini,
 * berarti perilaku "tombol selalu ada" ini gak akan bisa dipertahankan di
 * versi final — perlu dikonfirmasi ke Eka.
 */

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
  const [modalType, setModalType] = useState<ModalType>(null);

  const waNumber = "6281998478131"; // mock statis, real-nya nanti dari invitationUrl asli

  // Sama persis alur handleConfirm di code lama:
  // belum pilih -> incomplete_rsvp, udah pilih -> confirm_rsvp
  const handleSubmitClick = () => {
    if (attendStatus === 0) {
      setModalType("incomplete_rsvp");
      return;
    }
    setModalType("confirm_rsvp");
  };

  const handleFinalConfirm = (): void => {
    setModalType(attendStatus === 1 ? "rsvp_confirmed_hadir" : "rsvp_confirmed_tidak_hadir");
  };

  const mockValue: SmartRsvpContextType = {
    guestData: {
      name: "Sela (Tester)",
      closeRSVPDate: "2026-09-12T00:00:00.000Z",
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
    <button type="button" onClick={() => setAttendStatus(1)} className={className}>
      ATTEND
    </button>
  );
};

SmartRsvpForm.NotAttendToggle = ({ className }: { className?: string }) => {
  const { setAttendStatus } = useSmartRsvp();
  return (
    <button type="button" onClick={() => setAttendStatus(2)} className={className}>
      UNABLE TO ATTEND
    </button>
  );
};

// Sekarang SELALU render (gak ada `if (attendStatus === 0) return null` lagi),
// dan labelnya ganti 3 kondisi kayak code lama: belum pilih / attend / unable
SmartRsvpForm.SubmitButton = ({ className }: { className?: string }) => {
  const { attendStatus, handleSubmitClick } = useSmartRsvp();
  return (
    <button type="button" onClick={handleSubmitClick} className={className}>
      {attendStatus === 1
        ? "CONFIRM ATTEND"
        : attendStatus === 2
          ? "CONFIRM NOT ATTEND"
          : "CONFIRM"}
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




// // INI FILE MOCK SEMENTARA — bukan implementasi asli.




// "use client";

// import React, { createContext, useContext, useState } from "react";

// type SmartRsvpContextType = {
//   guestData: { name?: string; closeRSVPDate?: string } | null;
//   attendStatus: number; // 0 = belum pilih, 1 = attend, 2 = unable
//   invitationUrl: string;
//   paramUrl: string;
//   setAttendStatus: (status: number) => void;
// };

// const SmartRsvpContext = createContext<SmartRsvpContextType | null>(null);

// export const useSmartRsvp = () => {
//   const ctx = useContext(SmartRsvpContext);
//   if (!ctx) {
//     throw new Error("useSmartRsvp harus dipanggil di dalam <SmartRsvpForm>");
//   }
//   return ctx;
// };

// type SmartRsvpFormProps = {
//   data?: any;
//   paramUrl?: string;
//   onSubmitRSVP?: () => void;
//   defaultAttendStatus?: number;
//   children: React.ReactNode;
// };

// export const SmartRsvpForm = ({
//   data,
//   paramUrl = "",
//   defaultAttendStatus = 1,
//   children,
// }: SmartRsvpFormProps) => {
//   const [attendStatus, setAttendStatus] = useState<number>(defaultAttendStatus);

//   // Data dummy sekadar biar ada isinya pas dites
//   const mockValue: SmartRsvpContextType = {
//     guestData: {
//       name: "Sela (Tester)",
//       closeRSVPDate: "2026-09-12T00:00:00.000Z",
//     },
//     attendStatus,
//     invitationUrl: "6281998478131",
//     paramUrl,
//     setAttendStatus,
//   };

//   return (
//     <SmartRsvpContext.Provider value={mockValue}>
//       {children}
//     </SmartRsvpContext.Provider>
//   );
// };

// SmartRsvpForm.AttendToggle = ({ className }: { className?: string }) => {
//   const { setAttendStatus } = useSmartRsvp();
//   return (
//     <button
//       type="button"
//       onClick={() => setAttendStatus(1)}
//       className={className}
//     >
//       ATTEND
//     </button>
//   );
// };

// SmartRsvpForm.NotAttendToggle = ({ className }: { className?: string }) => {
//   const { setAttendStatus } = useSmartRsvp();
//   return (
//     <button
//       type="button"
//       onClick={() => setAttendStatus(2)}
//       className={className}
//     >
//       UNABLE TO ATTEND
//     </button>
//   );
// };

// SmartRsvpForm.SubmitButton = ({ className }: { className?: string }) => {
//   const { attendStatus } = useSmartRsvp();
//   if (attendStatus === 0) return null;
//   return (
//     <button type="button" className={className}>
//       {attendStatus === 1 ? "CONFIRM ATTEND" : "CONFIRM NOT ATTEND"}
//     </button>
//   );
// };

// SmartRsvpForm.Accordion = ({
//   className,
// }: {
//   className?: string;
//   bgActiveColor?: string;
// }) => {
//   const { attendStatus } = useSmartRsvp();
//   if (attendStatus !== 1) return null;
//   return <div className={className}>(mock accordion — belum ada isi)</div>;
// };

// SmartRsvpForm.Modals = () => {
//   return null;
// };