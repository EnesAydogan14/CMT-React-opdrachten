/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", 
  theme: {
    extend: {
      colors: {
        brand: "#6366f1",      
        brandDark: "#4f46e5",  
      },
    },
  },
  plugins: [],
};