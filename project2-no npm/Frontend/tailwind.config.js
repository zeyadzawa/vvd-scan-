/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playball: ['playball', 'sans-serif'],
        worksans: ['work sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      textColor: {
        primary: ['#a21caf'],
      },
      boxShadow: {
        primary: '0 5px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
