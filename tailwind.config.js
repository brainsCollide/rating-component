/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-zinc-to-white': 'radial-gradient(ellipse, #4a4a4a 0%, #18181b 100%)',
      },
    },
  },
  plugins: [],
}