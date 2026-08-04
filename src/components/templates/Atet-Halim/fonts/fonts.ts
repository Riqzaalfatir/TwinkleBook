import localFont from "next/font/local";
import { Poltawski_Nowy, Playfair_Display } from "next/font/google";
import { Lora } from "next/font/google";


export const athelas = localFont({
  src: [
    { path: "./Athelas/Athelas-Regular.ttf", weight: "400", style: "normal" },
    { path: "./Athelas/Athelas-Italic.ttf", weight: "400", style: "italic" },
    { path: "./Athelas/Athelas-Bold.ttf", weight: "700", style: "normal" },
    { path: "./Athelas/Athelas-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-athelas",
});

export const poltawskiNowy = Poltawski_Nowy({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poltawski",
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair-display",
});


export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

export const cylburn = localFont({
  src: "./Cylburn/Cylburn.ttf",
  variable: "--font-cylburn",
});

export const milyuna = localFont({
  src: "./Milyuna.ttf",
  variable: "--font-milyuna",
});