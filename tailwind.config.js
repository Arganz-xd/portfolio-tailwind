/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#D8D2C2",
        secondary: '#64748b',
        dark: "#1A1A1D",
      },
      screens: {
        '2xl': "1320px",
      },
    },
  },
  plugins: [],
};
