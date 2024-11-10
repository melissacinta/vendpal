/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: 'Roboto, sans-serif',
      },
      colors: {
        schemes: {
          primary: '#00361D',
          outline: '#C0C9C0',
          error: '#BA1A1A',
          'on-background': '#191C1A',
          'primary-container': '#C5FCD6',
          'surface-container': '#EDEEEA',
          'surface-container-low': '#F3F4EF',
        },
        palettes: {
          error: {
            90: '#FFDAD6',
          },
          neutral: {
            15: '#252624',
            25: '#3A3C3A',
          },
        },
      },
    },
  },
  plugins: [],
};
