export type EventByUrlResponse = {
  id: string;
  url: string;
  invitationWAUrl: string;
  brideName: string;
  brideImage: string;
  groomName: string;
  groomImage: string;
  brideFullName: string;
  groomFullName: string;
  brideParent: string;
  groomParent: string;
  date: string; // ISO date string, e.g. "2026-09-05T10:00:03"
  closeRSVPDate: string; // ISO date string
  timeZoneId: string;
  name: string;
  hashTag: string;
  eventAccess: number; // 0 = public/tanpa PIN (confirmed dari data asli)

  // Field lain yang ada di response API tapi belum ada kebutuhan pakainya
  // di kode sekarang — index signature ini biar TypeScript gak protes
  // kalau suatu saat ada field lain yang mau diakses tanpa perlu declare
  // ulang semuanya satu-satu (response aslinya 150+ field).
  [key: string]: unknown;
};