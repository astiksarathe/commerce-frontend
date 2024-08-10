module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        card: "0px 4px 25px #0000000d",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
