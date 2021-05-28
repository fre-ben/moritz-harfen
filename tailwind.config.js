module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cairo", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        background: "#E6E6E6",
        highlight: "#FF4D2F",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
