import localFont from "next/font/local";
import { Lora, Marcellus, Cormorant_Garamond } from "next/font/google";


export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

export const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"], 
  variable: "--font-marcellus",
});

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
}); 

export const slight = localFont({
  src: "./Slight-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-slight",
});