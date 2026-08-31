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

  // Michael - Vannya Template,
  "33933805-1439-4aaa-ba35-ac5780f73d7a" : "Michael-Vannya",

  // Peter - Helena Template,
  "f29806b1-657d-4e82-b53c-5357d5207ec8": "Peter-Helena",

  //  David - Natasha Template,
  "677fbeac-78e2-4f21-9bf0-0ad86a6dea0a" : "David-Natasha"
};


export function getTemplateNameFromId(templateId: string): string {
  return TEMPLATE_MAP[templateId] ?? "Atet-Halim";
}