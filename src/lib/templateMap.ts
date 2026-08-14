/**
 * Mapping templateId (UUID) → templateName (component name)
 * 
 * Dipakai di app/[id]/page.tsx buat determine template mana yang di-render
 * dari response GetCurrentEvent yang punya templateId (UUID)
 * 
 * Setiap template punya unique UUID dari backend.
 * Mapping ini perlu di-update kalau ada template baru.
 * 
 * PENTING: value di sini HARUS sama persis dengan key di TEMPLATE_REGISTRY
 * selalu gagal dan jatuh ke DEFAULT_TEMPLATE.
 */

export const TEMPLATE_MAP: Record<string, string> = {
  // Atet-Halim 
  "2b326668-46be-4222-84de-74fcdc43a665": "Atet-Halim",

  // Albert-Jessica template
  "d54787bd-7101-4767-b901-30360bf6e8f2": "Albert-Jessica",

  // "uuid-template-3": "TemplateNama3",
};


export function getTemplateNameFromId(templateId: string): string {
  return TEMPLATE_MAP[templateId] ?? "Atet-Halim";
}