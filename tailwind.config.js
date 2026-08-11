/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {

        // Atet Halim
        athelas: ["var(--font-athelas)"],
        poltawski: ["var(--font-poltawski)"],
        playfair: ["var(--font-playfair-display)"],
        lora: ["var(--font-lora)"],
        cylburn: ["var(--font-cylburn)"],
        milyuna: ["var(--font-milyuna)"],

        // Albert-Jessica (include: Lora)
                marcellus: ["var(--font-marcellus)"],
                  "cormorant-garamond": ["var(--font-cormorant-garamond)"],
                          slight: ["var(--font-slight)"], // ✅ tambahin ini



      },
    },
  },
  plugins: [],
};
