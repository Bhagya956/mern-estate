/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Make sure this is set correctly
  theme: {
    extend: {},
  },
  safelist: ["text-red-500", "text-green-500", "text-blue-500"], // Force include colors

  plugins: [],
};
