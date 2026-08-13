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
 * (templateRegistry.ts), termasuk strip "-"-nya. Kalau beda, lookup bakal
 * selalu gagal dan jatuh ke DEFAULT_TEMPLATE.
 */

export const TEMPLATE_MAP: Record<string, string> = {
  // Atet-Halim template (contoh event Ervan & Adelyn)
  "2b326668-46be-4222-84de-74fcdc43a665": "Atet-Halim",

  // Albert-Jessica template (Graceful Union)
  "677fbeac-78e2-4f21-9bf0-0ad86a6dea0a": "Albert-Jessica",

  // "uuid-template-3": "TemplateNama3",
};

/**
 * Get template name dari templateId
 * Kalau templateId nggak ada di mapping, return default "Atet-Halim"
 */
export function getTemplateNameFromId(templateId: string): string {
  return TEMPLATE_MAP[templateId] ?? "Atet-Halim";
}