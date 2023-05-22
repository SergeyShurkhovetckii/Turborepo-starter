/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontSize: {
            '3xs': ['12px', '14px'],
            '2xs': ['13px', '14px'],
            xs: ['14px', '16px'],
            sm: ['15px', '18px'],
            base: ['16px', '20px'],
            lg: ['17px', '20px'],
            xl: ['18px', '22px'],
            '2xl': ['20px', '24px'],
        },
        extend: {
            colors: {
                gray: '#E4E5EA',
                darkGray: '#656566',
                blue: '#4077F3',
            },
            gridTemplateColumns: {
                2: 'repeat(2, minmax(0, 160px))',
            },
            fontFamily: {
                Inter: "'Inter', 'sans-serif'",
                mono: "'Montserrat', sans-serif",
            },
        },
    },

    plugins: [require('@tailwindcss/typography')],
};
