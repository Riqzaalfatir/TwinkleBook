/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  extend: {
    fontFamily: {
      athelas: ["var(--font-athelas)"],
      poltawski: ["var(--font-poltawski)"],
      playfair: ["var(--font-playfair-display)"],
      lora: ["var(--font-lora)"],
            cylburn: ["var(--font-cylburn)"],   // BARU
      milyuna: ["var(--font-milyuna)"], // tambah ini


    },
  },
},
  plugins: [],
};