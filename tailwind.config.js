/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00BCD4',
        secondary: '#4A6B8A',
        neutral: '#D4CEC3',
        clay: '#D4A373',
        'off-white': '#FDFBF7',
        'bg-violet': '#DDD9FB',
        'text-dark': '#1A1B3D',
      },
      fontFamily: {
        sans: ['Neue Grotesque', 'system-ui', 'sans-serif'],
        display: ['Neue Grotesque', 'system-ui', 'sans-serif'],
        body: ['Neue Grotesque', 'system-ui', 'sans-serif'],
      },
      animation: {
        'breath': 'breath 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        breath: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 