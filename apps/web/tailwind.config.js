module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
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
                    primary: '#A763DF',
                    secondary: '#A763DF',
                    danger: '#FF4B4B',
                    background: '#3E2189',
                    dark: '#171034',
                    grey: '#1710348F',
                    green: '#00DB65',
                    white: '#fff',
                },
                boxShadow: {
                    white: 'inset 0px -2px 0px rgba(23, 16, 52, 0.14) ',
                },
                fontFamily: {
                    aero: "'Aeroport', sans-serif",
                    mono: 'Roboto Mono, sans-serif',
                },
                keyframes: {
                    wave: {
                        '0%': { transform: 'rotate(0.0deg)' },
                        '10%': { transform: 'rotate(14deg)' },
                        '20%': { transform: 'rotate(-8deg)' },
                        '30%': { transform: 'rotate(14deg)' },
                        '40%': { transform: 'rotate(-4deg)' },
                        '50%': { transform: 'rotate(10.0deg)' },
                        '60%': { transform: 'rotate(0.0deg)' },
                        '100%': { transform: 'rotate(0.0deg)' },
                    },
                    spin: {
                        to: {
                            transform: 'rotate(360deg)',
                        },
                    },
                },
                animation: {
                    'spin-slow': 'spin 5s linear infinite',
                    'waving-hand': 'wave 2s linear infinite',
                },
                left: {
                    label: ' calc[50% - 200px]',
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
