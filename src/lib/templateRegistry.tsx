import AtetHalim from "@/components/templates/Atet-Halim";
import AlbertJessica from "@/components/templates/Albert-Jessica";

export const TEMPLATE_REGISTRY: Record<string, React.ComponentType<any>> = {
  "Atet-Halim": AtetHalim,
  "Albert-Jessica": AlbertJessica,
};

export const DEFAULT_TEMPLATE = "Atet-Halim";