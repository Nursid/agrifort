module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.js', './public/index.html'],
    darkMode: 'class', // Enable class-based dark mode
    theme: {
        fontFamily: {
            sans: ['Inter', 'Roboto', 'sans-serif'],
            serif: ['"Roboto Slab"', 'serif'],
            body: ['Inter', 'Roboto', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#22c55e',
                    600: '#16a34a',
                    700: '#15803d',
                    800: '#166534',
                    900: '#14532d',
                },
                purple: {
                    50: '#faf5ff',
                    100: '#f3e8ff',
                    200: '#e9d5ff',
                    300: '#d8b4fe',
                    400: '#c084fc',
                    500: '#a855f7',
                    600: '#9333ea',
                    700: '#7c3aed',
                    800: '#6b21a8',
                    900: '#581c87',
                },
                pink: {
                    50: '#fdf2f8',
                    100: '#fce7f3',
                    200: '#fbcfe8',
                    300: '#f9a8d4',
                    400: '#f472b6',
                    500: '#ec4899',
                    600: '#db2777',
                    700: '#be185d',
                    800: '#9d174d',
                    900: '#831843',
                }
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-slow': 'bounce 2s infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)' },
                    '100%': { boxShadow: '0 0 40px rgba(34, 197, 94, 0.8)' },
                }
            },
            backdropBlur: {
                xs: '2px',
            },
            boxShadow: {
                'glow': '0 0 20px rgba(34, 197, 94, 0.3)',
                'glow-lg': '0 0 40px rgba(34, 197, 94, 0.4)',
            }
        },
    },
    variants: {
        extend: {
            backdropBlur: ['hover'],
            animation: ['hover', 'focus'],
            scale: ['hover', 'active'],
            rotate: ['hover'],
        },
    },
    plugins: [],
};
