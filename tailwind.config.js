module.exports = {
  content: ["./templates/**/*.{twig,html,js,ts}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0070f3",
          dark: "#0070f3",
          light: "#0070f3",
        },
        secondary: {
          DEFAULT: "#ffc107",
          dark: "#ffc107",
          light: "#ffc107",
        },
        success: {
          DEFAULT: "#28a745",
          dark: "#28a745",
          light: "#28a745",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
