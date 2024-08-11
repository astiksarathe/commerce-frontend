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
  plugins: [
    function ({ addComponents, theme }) {
      const drawers = {
        ".drawer": {
          // Border radius for top-left and top-right corners
          "borderTopLeftRadius": theme("borderRadius.lg"), // lg corresponds to .rounded-tl-lg
          "borderTopRightRadius": theme("borderRadius.lg"), // lg corresponds to .rounded-tr-lg

          // Media query for md and above to apply larger border radius
          "@screen md": {
            borderTopLeftRadius: theme("borderRadius.3xl"), // 3xl corresponds to .md:rounded-tl-3xl
            borderTopRightRadius: theme("borderRadius.3xl"), // 3xl corresponds to .md:rounded-tr-3xl
          },
        },
        ".drawer .ant-drawer-header": {
          borderBottom: "none",
          paddingBottom: theme("spacing.0"), // using theme value for padding
        },
        ".drawer .ant-drawer-body": {
          paddingTop: theme("spacing.2"), // using theme value for 5px
          paddingBottom: theme("spacing.2"), // using theme value for 5px
        },
      };
      addComponents(drawers);
    },
  ],
};
