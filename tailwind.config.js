/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      width: {
        '1200': '1200px', // Add custom width of 1200px
      },
      screens: {
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1200px',
          '2xl': '1480px',
        },
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    letterSpacing: {
      custom: '.1rem',
    },
  },
  plugins: [],
}

