/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",

  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "main-primary": "#FBDA05",
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          900: "#111827",
        },
        brand: {
          50: "#FFFAE6",
          100: "#FFF3C2",
          200: "#FFE780",
          300: "#FEDF47",
          400: "#FDD51A",
          500: "#FBDA05", // base
          600: "#E5C604",
          700: "#C2A604",
          800: "#9A8303",
          900: "#7A6902",
        },

        // Optional semantic helpers
        success: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        danger: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
      },
      backgroundImage: {
        "main-gradient":
          "linear-gradient(180deg, #FFF -23.36%, #F9FAFB 146.85%)",
      },
      borderColor: {},
      boxShadow: {
        "shadow-sm": "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        "shadow-xl":
          "0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'body': { color: '#000' },
        'button': { color: '#000' },
        '*:focus': { outline: 'none' },
        '*:focus-visible': { outline: 'none' },
      });
    },
  ],
};
