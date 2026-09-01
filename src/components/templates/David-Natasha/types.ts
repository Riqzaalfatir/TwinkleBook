export type ImageData = {
  id?: string;
  filename?: string;
  url: string;
  type?: number;
  parentId?: string;
};

export type EventData = {
  id?: string;
  url?: string;
  invitationWAUrl?: string;
  brideName?: string;
  brideImage?: string;
  groomName?: string;
  groomImage?: string;
  brideFullName?: string;
  groomFullName?: string;
  brideParent?: string;
  groomParent?: string;
  date?: string;
  closeRSVPDate?: string;
  timeZoneId?: string;
  name?: string;
  hashTag?: string;
  eventAccess?: number;
  [key: string]: unknown;
};

export type EventContent = {
  backgroundImageData?: ImageData | null;
  logoImageData?: ImageData | null;
  backgroundSoundData?: {
    url: string;
    [key: string]: unknown;
  };
  popUpIconImageData?: ImageData | null;
  [key: string]: unknown;
};

export type DavidNatashaDataProps = {
  url?: string;
  dataEvent?: EventData;
  dataContent?: EventContent;
  [key: string]: unknown;
};
