/** @type {import('tailwindcss').Config} */

const tailwindConfig = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            gridTemplateRows: {
                pageWrapper: '1fr auto;',
            },
        },
    },
    plugins: [],
}

module.exports = tailwindConfig
