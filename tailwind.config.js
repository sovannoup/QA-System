/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      superwhite: '#FFFFFF',
      white: '#F8F8F8',
      black: '#202020',
      btn_color: '#0069FF',
      fc: '#405379',
      gray: '#F0F0F0',
      lightGray: '#D3D3D3',
      darkGray: '#5A5A5A',
    },
    fontSize: {
      sm: '14px',
      base: '16px',
      xl: '18px',
      '1xl': '26px',
      '2xl': '36px',
      '3xl': '44px',
    },
  },
  plugins: [],
};
