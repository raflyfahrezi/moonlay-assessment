/** @type {import('tailwindcss').Config} */

const tailwindConfig = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            gridTemplateRows: {
                pageWrapper: '1fr auto;',
            },
            gridTemplateColumns: {
                cardBox: 'repeat(auto-fill, minmax(250px, 1fr));',
            },
        },
    },
    plugins: [],
}

module.exports = tailwindConfig
