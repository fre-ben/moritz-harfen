module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        leader: "max-content auto",
      },
      spacing: {
        70: "17.17rem",
        100: "25.8rem",
        18: "4.2rem",
      },
      fontFamily: {
        sans: ["Poppins", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        background: "#E6E6E6",
        highlight: "#FF4D2F",
        highlight60: "#F58A78",
        moritzGrey: "#707070",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    {
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: "/:",
      },
    },
  ],
};
