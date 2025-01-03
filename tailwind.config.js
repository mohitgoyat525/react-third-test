/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        "2xl": "1216px",
        lg: "992px",
        md: "768px",
        sm: "576px",
      },
    },
    extend: {
      colors: {
        neutural: "#737376",
        primary: "#F5F9FC",
        darkBlack: "#222222",
      },
    },
  },
  plugins: [],
};

