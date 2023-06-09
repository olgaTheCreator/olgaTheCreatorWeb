/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vibur: ["Vibur"],
        roboto: ["Roboto Mono"],
      },
      colors: {
        yellow_bright: "#F9E63D",
        yellow_light: "#FAED77",
        red_bright: "#F90000",
        red_light: "#fa4c4c",
        blue_bright: "#3D9FF9",
        blue_light: "#77bbfa",
        green_bright: "#00d415",
        green_light: "#4ce05b",
      },
    },
  },
  plugins: [],
};
