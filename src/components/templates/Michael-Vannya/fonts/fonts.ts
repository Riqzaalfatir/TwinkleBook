import localFont from "next/font/local";

export const kinfolk = localFont({
  src: "./kinfolk.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-kinfolk",
});

export const timesNewRoman = localFont({
  src: [
    {
      path: "./TimesNewRomann.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Times New Roman Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Times New Roman Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Times New Roman Bold Italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-times-new-roman",
});