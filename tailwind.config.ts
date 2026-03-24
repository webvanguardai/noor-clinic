import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#C9A96E',
        'gold-light': '#E8D5B0',
        'gold-dark': '#8B6914',
        cream: '#F5F0E8',
        'dark-bg': '#0A0A0F',
        'dark-card': '#12121A',
        'dark-surface': '#1A1A24',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A96E 0%, #E8D5B0 50%, #C9A96E 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0F 0%, #1A1A24 100%)',
      },
    },
  },
  plugins: [],
}
export default config
