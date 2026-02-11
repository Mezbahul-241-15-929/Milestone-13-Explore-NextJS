/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  // 👇 daisyUI config
  daisyui: {
    themes: ["light", "dark"], // available themes
    darkTheme: "light",        // ❗ force default to LIGHT
  },
};
