import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        surface: '#0b111a',
        panel: '#111827',
        accent: '#7c3aed',
        accentSoft: '#38bdf8'
      },
      boxShadow: {
        glow: '0 20px 60px rgba(56, 189, 248, 0.12)'
      }
    }
  },
  plugins: []
};

export default config;
