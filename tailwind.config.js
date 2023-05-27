/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        
        'MobileS': {'min': '320px'},
        // => @media (min-width: 3840px) { ... }

        'MobileM': {'min': '375px'},
        // => @media (min-width: 2560px and max-width: 3839px) { ... }
        
        'MobileL': {'min': '425px'},
        // => @media (min-width: 1920px and max-width: 2559px) { ... }

        'Tablet': {'min': '768px'},
        // => @media (min-width: 1280px and max-width: 1919px) { ... }

        'Laptop': {'min': '1024px'},
        // => @media (min-width: 720px and max-width: 1279px) { ... }

        'LaptopL': {'min': '1440px'},
        // => @media (min-width: 360px and max-width: 719px) { ... }

        '4K': {'min': '2560px',},
        // => @media (min-width: 1px and max-width: 359px) { ... }
      },
    },
  },
  plugins: [],
}
