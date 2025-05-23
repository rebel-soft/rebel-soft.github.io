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
        'rebel-orange': '#FF8C00',
        'rebel-purple': '#8A2BE2',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        pixel: ['"Press Start 2P"', 'cursive'],
      },
      boxShadow: {
        'neon-glow-green': '0 0 15px 5px rgba(57, 255, 20, 0.3)',
        'neon-glow-blue': '0 0 15px 5px rgba(0, 255, 255, 0.3)',
      }
    },
  },
  plugins: [],
}
export default config
