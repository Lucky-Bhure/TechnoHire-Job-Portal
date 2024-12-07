/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "node_modules/primereact/**/*.{js,jsx,ts,tsx}", // Include PrimeReact components
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', ''],
      poppins: ['Poppins', ''],
      lato: ['Lato', ''],
      urbanist: ['Urbanist', '']
    },
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: true, // Ensure Tailwind's preflight does not override styles
  },
};
