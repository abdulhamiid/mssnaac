/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { green: '#FAFDFA', black: '#202120' },
        'dark-green': '#007300',
      },
    },
  },
  plugins: [],
};
