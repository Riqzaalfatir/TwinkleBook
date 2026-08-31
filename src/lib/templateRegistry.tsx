import AtetHalim from "@/components/templates/Atet-Halim";
import AlbertJessica from "@/components/templates/Albert-Jessica";
import MichaelVannya from "@/components/templates/Michael-Vannya";
import PeterHelena from "@/components/templates/Peter-Helena";
import DavidNatasha from "@/components/templates/David-Natasha";

export const TEMPLATE_REGISTRY: Record<string, React.ComponentType<any>> = {
  "Atet-Halim": AtetHalim,
  "Albert-Jessica": AlbertJessica,
  "Michael-Vannya" : MichaelVannya,
  "Peter-Helena" : PeterHelena,
  'David-Natasha' : DavidNatasha
};

export const DEFAULT_TEMPLATE = "Atet-Halim";