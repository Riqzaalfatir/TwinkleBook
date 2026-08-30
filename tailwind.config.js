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
        "cormorant-garamond": ["var(--font-cormorant-garamond)"], // INCLUDE DENGAN TEMPLATE DAVID NATASHA
        slight: ["var(--font-slight)"], // INCLUDE DENGAN TEMPLATE DAVID NATASHA

        // Michael-Vannya
        kinfolk: ["var(--font-kinfolk)"],
        "times-new-roman": ["var(--font-times-new-roman)"],

        // Peter-Helena
        "aston-script": ["var(--font-aston-script)"],
        "times-new-roman-bold": ["var(--font-times-new-roman-bold)"],
        cinzel: ["var(--font-cinzel)"],
        "cinzel-decorative": ["var(--font-cinzel-decorative)"],
        ovo: ["var(--font-ovo)"],

        // David-Natasha
        "costa-rica": ["var(--font-costa-rica)"],
        "sackers-italic-script": ["var(--font-sackers-italic-script)"],
        garamond: ["var(--font-garamond)"],
      },
    },
  },
  plugins: [],
};