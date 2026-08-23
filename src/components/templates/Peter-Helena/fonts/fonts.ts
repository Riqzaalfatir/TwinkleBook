import localFont from "next/font/local";
import { Cinzel, Cinzel_Decorative, Ovo } from "next/font/google";

export const astonScript = localFont({
  src: "./Aston Script.ttf",
  weight: "700",
  style: "normal",
  variable: "--font-aston-script",
});

export const timesNewRoman = localFont({
  src: "./TimesNewRomann.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-times-new-roman",
});

export const timesNewRomanBold = localFont({
  src: "./Times New Roman Bold.ttf",
  weight: "700",
  style: "normal",
  variable: "--font-times-new-roman-bold",
});

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
});

export const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel-decorative",
});

export const ovo = Ovo({
  subsets: ["latin"],
  weight: "400", // Ovo cuma punya 1 weight (Regular)
  variable: "--font-ovo",
});