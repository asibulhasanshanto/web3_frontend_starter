/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a1015",
        secondBackground: "#15222c",
        textPrimary: "#de16a4",
      },
    },
  },
  plugins: [],
};
