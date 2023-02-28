const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer'),
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide')
  ],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
}
