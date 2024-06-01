/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1360px",
      xxl: "1410px",
    },
    extend: {
      colors: {
        "brand-neutral-50": "rgb(var(--brand-neutral-50))",
        "brand-neutral-100": "rgb(var(--brand-neutral-100))",
        "brand-neutral-300": "rgb(var(--brand-neutral-300))",
        "brand-neutral-600": "rgb(var(--brand-neutral-600))",
        "brand-neutral-700": "rgb(var(--brand-neutral-700))",

        "brand-primary-300": "rgb(var(--brand-primary-300))",
        "brand-primary-500": "rgb(var(--brand-primary-500))",
        "brand-primary-700": "rgb(var(--brand-primary-700))",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
