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
        // New dark-luxury palette
        gold: '#C9A96E',
        'gold-light': '#E8C89A',
        'gold-dark': '#A0803E',
        bg: '#0C0A09',
        surface: '#141210',
        'off-white': '#111009',
        'text-primary': '#F5F0EB',
        'text-secondary': '#9A8A78',
        border: '#2A2420',
        // Legacy aliases (kept so old class refs still resolve)
        'rose-gold': '#C9A96E',
        'rose-gold-light': '#E8C89A',
        'rose-gold-dark': '#A0803E',
        charcoal: '#0C0A09',
        'charcoal-soft': '#2A2420',
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
