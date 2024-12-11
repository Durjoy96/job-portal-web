/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(59 130 246)",
        "primary-content": "#ffffff",
      },
    },
  },
  plugins: [require("daisyui")],
};
