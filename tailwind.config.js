/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#D8D2C2",
        secondary: '#0f172a',
        dark: "#4A4947",
      },
      screens: {
        '2xl': "1320px",
      },
    },
  },
  plugins: [],
};
