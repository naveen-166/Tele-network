/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/rippleui/**/*.{js,jsx,ts,tsx}",  // Add this line
  ],
  theme: {
    extend: {
      width: {
        '18': '4.5rem', // You can change this value to whatever you need
      },
      fontFamily: {
        arima: ['Arima', 'system-ui'],
        prociono: ['Prociono', 'serif'], // Add the Arima font family
      },
    },
  },
  plugins: [
    // require('rippleui'),  // Add the Ripple UI plugin
  ],
}
