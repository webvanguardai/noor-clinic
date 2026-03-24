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
        'rose-gold': '#B5927A',
        'rose-gold-light': '#D4B49E',
        'rose-gold-dark': '#8C6E58',
        charcoal: '#1A1A1A',
        'charcoal-soft': '#3A3A3A',
        'off-white': '#F9F7F5',
        border: '#E8E2DC',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
