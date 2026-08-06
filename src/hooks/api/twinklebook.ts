// // src/hooks/api/twinklebook.ts

// const BASE_URL = "https://api.twinklebook.com/api/Event";

// type ApiResponse<T> = {
//   data: T | null;
//   error: string | null;
//   errorEn?: string | null;
// };

// async function apiRequest<T>(
//   path: string,
//   options?: RequestInit & { signal?: AbortSignal }
// ): Promise<ApiResponse<T>> {
//   try {
//     const res = await fetch(`${BASE_URL}${path}`, {
//       ...options,
//       headers: {
//         "Content-Type": "application/json",
//         ...(options?.headers || {}),
//       },
//       signal: options?.signal,
//     });

//     const json = await res.json().catch(() => null);

//     if (!res.ok || json?.status === "Error" || json?.messageEN) {
//       return {
//         data: null,
//         error: json?.message || json?.messageID || `Request gagal (status ${res.status})`,
//         errorEn: json?.messageEN || null,
//       };
//     }

//     return { data: json?.data ?? json, error: null };
//   } catch (err) {
//     // fetch yang di-abort juga nge-throw DOMException("AbortError")
//     // jangan diperlakukan sebagai error asli, biar nggak nampilin pesan error palsu ke user
//     if (err instanceof DOMException && err.name === "AbortError") {
//       return { data: null, error: null };
//     }
//     return {
//       data: null,
//       error: err instanceof Error ? err.message : "Terjadi kesalahan jaringan",
//       errorEn: null,
//     };
//   }
// }

// // --- GetCurrentEvent ---
// export function getEventByUrl<T = any>(url: string, signal?: AbortSignal) {
//   return apiRequest<T>(`/GetCurrentEvent?url=${encodeURIComponent(url)}`, { signal });
// }

// // --- GetCurrentGuest ---
// export function getEventGuestByPin<T = any>(url: string, pin: string) {
//   return apiRequest<T>(
//     `/GetCurrentGuest?url=${encodeURIComponent(url)}&pin=${encodeURIComponent(pin)}`
//   );
// }

// // --- GetEventContent (dipakai langsung di page route, bukan lewat hook) ---
// export function getEventContent<T = any>(id: string) {
//   return apiRequest<T>(`/GetEventContent?id=${encodeURIComponent(id)}`);
// }

// // --- GetGuestEventSessionByPinNew ---
// export function getEventSessionByPin<T = any>(pin: string, eventId: string) {
//   return apiRequest<T>(
//     `/GetGuestEventSessionByPinNew?pin=${encodeURIComponent(pin)}&eventId=${encodeURIComponent(eventId)}`
//   );
// }

// // --- GetSmartRSVPData ---
// export function getSmartRsvpQuestionByPin<T = any>(url: string, pin: string) {
//   return apiRequest<T>(
//     `/GetSmartRSVPData?url=${encodeURIComponent(url)}&pin=${encodeURIComponent(pin)}`
//   );
// }

// // --- OpenInvitation ---
// export function submitOpenInvitation<T = any>(eventId: string, pin: string) {
//   return apiRequest<T>(`/OpenInvitation`, {
//     method: "POST",
//     body: JSON.stringify({ eventId, pin }),
//   });
// }

// // --- InputRSVP ---
// export function submitRSVP<T = any>(payload: {
//   eventId: string;
//   url: string;
//   pin: number;
//   name: string;
//   phone: string;
//   status: number;
//   maybeDate?: string;
//   maybeNote?: string;
//   questionList: Array<{
//     eventSessionId: string;
//     guestInvitation: number;
//     questions: Array<{
//       id: string;
//       answer: string;
//       optionAnswer: string;
//       parentId: string;
//       parentIndex: number;
//     }>;
//     guestAttendances: Array<{
//       id: string;
//       answer: string;
//       optionAnswer: string;
//       parentId: string;
//       parentIndex: number;
//     }>;
//   }>;
// }) {
//   return apiRequest<T>(`/InputRSVP`, {
//     method: "POST",
//     body: JSON.stringify(payload),
//   });
// }

// // --- GetAllPersonalGuestMessages ---
// export function getAllPMG<T = any>(eventId: string) {
//   return apiRequest<T>(`/GetAllPersonalGuestMessages?eventId=${encodeURIComponent(eventId)}`);
// }

// // --- SubmitPersonalGuestMessage ---
// export function createPMG<T = any>(payload: {
//   eventId: string;
//   mediaFileId: null;
//   name: string;
//   message: string;
//   status: 1;
//   type: 1;
// }) {
//   return apiRequest<T>(`/SubmitPersonalGuestMessage`, {
//     method: "POST",
//     body: JSON.stringify(payload),
//   });
// }