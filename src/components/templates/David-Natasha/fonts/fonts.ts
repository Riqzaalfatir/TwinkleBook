import { Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant-garamond",
});

export const costaRica = localFont({
  src: "./Costa Rica Personal Use Only.ttf",
  variable: "--font-costa-rica",
});

export const slight = localFont({
  src: "./Slight-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-slight",
});

export const sackersItalicScript = localFont({
  src: "./Sackers Italian Script Std Regular.otf",
  weight: "400",
  style: "normal",
  variable: "--font-sackers-italic-script",
});

export const garamond = localFont({
  src: "./Garamond Bold.ttf",
  weight: "700",
  style: "normal",
  variable: "--font-garamond",
});

export const timesNewRomanBold = localFont({
  src: "./Times New Roman Bold.ttf",
  weight: "700",
  style: "normal",
  variable: "--font-times-new-roman-bold",
});