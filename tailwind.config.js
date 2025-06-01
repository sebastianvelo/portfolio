const defaultColors = require('tailwindcss/colors')

module.exports = {
    darkMode: 'class',
    content: [
        './src/**/*.{js,ts,jsx,tsx,json}',
        './public/index.html',
    ],
    theme: {
        extend: {
            colors: {
                primary: defaultColors.indigo,
                secondary: defaultColors.slate
            },
            fontFamily: {
                jetbrains: ['JetBrains Mono', 'monospace'],
            }
        },
    },
    plugins: [],
}