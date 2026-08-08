/**
 * Mapping templateId (UUID) → templateName (component name)
 * 
 * Dipakai di app/[id]/page.tsx buat determine template mana yang di-render
 * dari response GetCurrentEvent yang punya templateId (UUID)
 * 
 * Setiap template punya unique UUID dari backend.
 * Mapping ini perlu di-update kalau ada template baru.
 */

export const TEMPLATE_MAP: Record<string, string> = {
  // Atet-Halim template (contoh event Ervan & Adelyn)
  "2b326668-46be-4222-84de-74fcdc43a665": "AtetHalim",

  // "uuid-template-2": "TemplateNama2",
  // "uuid-template-3": "TemplateNama3",
};

/**
 * Get template name dari templateId
 * Kalau templateId nggak ada di mapping, return default "AtetHalim"
 */
export function getTemplateNameFromId(templateId: string): string {
  return TEMPLATE_MAP[templateId] ?? "AtetHalim";
}