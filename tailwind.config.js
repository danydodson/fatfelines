/** @type {import('tailwindcss').Config} */

import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import tailwindScrollbar from 'tailwind-scrollbar'
import scrollbarHide from 'tailwind-scrollbar-hide'

export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    plugins: [
        tailwindcss('./tailwind.config.js'),
        autoprefixer,
        tailwindScrollbar,
        scrollbarHide,
    ],
    theme: {
        extend: {}
    },
}
