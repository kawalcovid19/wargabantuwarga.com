const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // WargaBantuWarga.com brand colour
        brand: {
          DEFAULT: "#1667c2",
          50: "#c5ddf8",
          100: "#aed0f6",
          200: "#80b5f1",
          300: "#539beb",
          400: "#2580e6",
          500: "#1667c2",
          600: "#114f94",
          700: "#0c3666",
          800: "#061e39",
          900: "#01060b",
        },
      },
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
