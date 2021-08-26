module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        background: "#E6E6E6",
        highlight: "#FF4D2F",
        moritzGrey: "#707070",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    {
      resolve: "gatsby-background-image",
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: "/:",
      },
    },
  ],
};
