import { DEFAULT_PHOTOS_MOBILE, DEFAULT_PHOTOS_DESKTOP } from "./galleryDefaults";

export function getGalleryPhotos(rawGalleryData: any[], isMobile: boolean): string[] {
  if (!Array.isArray(rawGalleryData) || rawGalleryData.length === 0) {
    return isMobile ? DEFAULT_PHOTOS_MOBILE : DEFAULT_PHOTOS_DESKTOP;
  }
  return rawGalleryData.map((item: any) =>
    item?.url
      ? `https://media.twinklebook.com/${item.url}`
      : "/images/David-Natasha/Gallery/ASET1.webp",
  );
}