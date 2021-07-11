module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#121212",
      gray: {
        DEFAULT: "#dedede",
        dark: "#aaaaaa",
      },
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
