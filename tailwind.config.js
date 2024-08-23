module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Updated to 'content' from 'purge' (Tailwind v3)
  theme: {
    extend: {
      boxShadow: {
        card: "0px 4px 25px #0000000d", // Custom box shadow for cards
      },
      container: {
        padding: "8px", // Default padding for the container class
      },
    },
  },
  darkMode: false, // Can be 'media' or 'class' based on your needs
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents, theme }) {
      const drawers = {
        ".drawer": {
          "borderTopLeftRadius": theme("borderRadius.lg"), // Rounded top-left corner
          "borderTopRightRadius": theme("borderRadius.lg"), // Rounded top-right corner

          "@screen md": {
            borderTopLeftRadius: theme("borderRadius.3xl"), // Larger radius for md and above
            borderTopRightRadius: theme("borderRadius.3xl"), // Larger radius for md and above
          },
        },
        ".drawer .ant-drawer-header": {
          borderBottom: "none", // Removing the bottom border
          paddingBottom: theme("spacing.0"), // Zero padding at the bottom
        },
        ".drawer .ant-drawer-body": {
          paddingTop: theme("spacing.2"), // Small padding at the top
          paddingBottom: theme("spacing.2"), // Small padding at the bottom
        },
      };

      addComponents(drawers);

      const collapse = {
        ".collapse-custom.ant-rate .ant-collapse-item .ant-collapse-header": {
          paddingLeft: theme("spacing.0"), // Zero padding on the left
        },
      };

      addComponents(collapse);

      const rating = {
        ".rating-custom .ant-rate-star": {
          marginInlineEnd: `${theme("spacing.0")} !important`, // Zero margin at the end of inline elements
        },
      };

      addComponents(rating);
    },
  ],
};
