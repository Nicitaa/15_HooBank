/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'SD': {'min': '1px', 'max': '767px'},
        // => @media (min-width: 1px and max-width: 767px) { ... }
  
        'HD': {'min': '768px', 'max': '1280px'},
        // => @media (min-width: 768px and max-width: 1280px) { ... }
  
        'FHD': {'min': '1281px', 'max': '1920px'},
        // => @media (min-width: 1281px and max-width: 1920px) { ... }
  
        'QHD': {'min': '1921px', 'max': '2560px'},
        // => @media (min-width: 1921px and max-width: 2560px) { ... }
  
        '4K': {'min': '2561px'},
        // => @media (min-width: 2561px) { ... }
      },
    },
  },
  plugins: [],
}

