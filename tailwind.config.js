/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        spaceMono: ["Space Mono", "monospace"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
