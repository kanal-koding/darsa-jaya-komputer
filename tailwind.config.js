/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'class', // 'media' atau 'class'
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      scrollBehavior: ['smooth'],
      colors: {
        'ig-pink': '#FD1D1D',
        'ig-orange': '#F56040',
        'ig-purple': '#833AB4',
      },
      
    },
    animation: {
        "fade-in-up": "fadeInUp 1s ease-out",
        "slide-in-left": "slideInLeft 1s ease-out",
        "slide-in-right": "slideInRight 1s ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: 0, transform: "translateX(-50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: 0, transform: "translateX(50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
  },
  plugins: [],
}

