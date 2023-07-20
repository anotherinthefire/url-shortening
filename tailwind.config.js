/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shorty: 'hsl(257, 27%, 26%)',
      },
    },
  },
  plugins: [],
};
