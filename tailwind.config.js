/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html"],
    theme: {
        fontFamily: {
            'fontku': ['Myriad.'],
        },
        screens: {
            'sm': '640px',
      
            'md': '768px',
      
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
      
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
      
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
          },
        extend: {
            boxShadow: {
                'smright': '2px 4px 5px 0px rgba(0, 0, 0, 0.3)',
                'smcenter': '0px 5px 5px 2px rgba(0, 0, 0, 0.3)',
                'smleft': '-2px 4px 5px 0px rgba(0, 0, 0, 0.3)',
                'xl': '0px 1px 25px 8px rgba(0, 0, 0, -1)',

            },
     
            spacing: {
                '128': '32rem',
                'layar': '200vh',
                'hp': '500px',

            },
        },
    },
    plugins: [],
}