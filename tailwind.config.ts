import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rebel-black': '#0D0D0D',
        'rebel-text': '#E0E0E0',
        'rebel-card': '#1A1A1A',
        'rebel-border': '#333333',
        'rebel-neon-green': '#39FF14',
        'rebel-electric-blue': '#00FFFF',
        'rebel-magenta': '#FF00FF',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        pixel: ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [],
}
export default config
