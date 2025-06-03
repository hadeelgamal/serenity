import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'serenity': {
          'green': {
            light: '#E8F3E8',
            DEFAULT: '#7A9D7A',
            dark: '#4A6B4A',
          },
          'neutral': {
            light: '#F5F3F0',
            DEFAULT: '#D4CEC3',
            dark: '#8A857C',
          },
          'blue': {
            light: '#E6EEF5',
            DEFAULT: '#4A6B8A',
            dark: '#2A4A6A',
          },
          'clay': '#D4A373',
          'off-white': '#FDFBF7',
        },
      },
      fontFamily: {
        'serif': ['Tiempos Headline', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'breath': 'breath 8s ease-in-out infinite',
      },
      keyframes: {
        breath: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}

export default config 