/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        anton: ['Arimo', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: { // You can customize the "light" theme
          "primary": "#3b82f6",
          "secondary": "#6b7280",
          "accent": "#fbbf24",
          "neutral": "#f3f4f6",
          "base-100": "#ffffff", // Light background
          "base-200": "#f9fafb", // Lighter background
          "base-300": "#f3f4f6", // Lighter background
          "info": "#2563eb",
          "success": "#16a34a",
          "warning": "#eab308",
          "error": "#ef4444",
        }
      }
    ],
  },
}
