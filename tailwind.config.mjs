/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#050505',
        'cyber-card': '#0a0a0a',
        'cyber-card-hover': '#0f0f0f',
        'cyber-border': '#1a1a1a',
        'cyber-red': '#ff0000',
        'cyber-cyan': '#00ffff',
        'cyber-green': '#00ff00',
        'cyber-yellow': '#ffbd2e',
        'cyber-dim': '#666666',
        'cyber-muted': '#444444',
        'cyber-dark': '#333333',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'scan': 'scan 4s linear infinite',
        'blink': 'blink 1s infinite',
        'pulse-glow': 'pulse-glow 1.5s infinite',
        'radar-pulse': 'radar-pulse 1.5s infinite',
        'flicker': 'flicker 3s infinite',
        'glitch-1': 'glitch-anim 2s infinite linear alternate-reverse',
        'glitch-2': 'glitch-anim-2 2s infinite linear alternate-reverse',
        'fade-in-up': 'fadeInUp 0.5s ease forwards',
        'pulse-bg': 'pulse-bg 2s infinite',
      },
      keyframes: {
        scan: {
          '0%': { top: '-100px' },
          '100%': { top: '100%' },
        },
        blink: {
          '50%': { opacity: '0.5' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px #ff0000, 0 0 10px #ff0000' },
          '50%': { boxShadow: '0 0 20px #ff0000, 0 0 30px #ff0000' },
        },
        'radar-pulse': {
          '0%': { boxShadow: '0 0 0 0 rgba(255, 0, 0, 0.7)' },
          '70%': { boxShadow: '0 0 0 15px rgba(255, 0, 0, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(255, 0, 0, 0)' },
        },
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.8' },
        },
        'glitch-anim': {
          '0%': { clipPath: 'inset(30px 0 10px 0)' },
          '10%': { clipPath: 'inset(70px 0 50px 0)' },
          '20%': { clipPath: 'inset(20px 0 90px 0)' },
          '30%': { clipPath: 'inset(50px 0 20px 0)' },
          '40%': { clipPath: 'inset(80px 0 60px 0)' },
          '50%': { clipPath: 'inset(10px 0 100px 0)' },
          '60%': { clipPath: 'inset(40px 0 30px 0)' },
          '70%': { clipPath: 'inset(90px 0 70px 0)' },
          '80%': { clipPath: 'inset(60px 0 40px 0)' },
          '90%': { clipPath: 'inset(25px 0 80px 0)' },
          '100%': { clipPath: 'inset(45px 0 15px 0)' },
        },
        'glitch-anim-2': {
          '0%': { clipPath: 'inset(65px 0 25px 0)' },
          '10%': { clipPath: 'inset(15px 0 75px 0)' },
          '20%': { clipPath: 'inset(85px 0 35px 0)' },
          '30%': { clipPath: 'inset(35px 0 95px 0)' },
          '40%': { clipPath: 'inset(55px 0 5px 0)' },
          '50%': { clipPath: 'inset(5px 0 55px 0)' },
          '60%': { clipPath: 'inset(95px 0 45px 0)' },
          '70%': { clipPath: 'inset(45px 0 85px 0)' },
          '80%': { clipPath: 'inset(75px 0 15px 0)' },
          '90%': { clipPath: 'inset(25px 0 65px 0)' },
          '100%': { clipPath: 'inset(100px 0 100px 0)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-bg': {
          '0%, 100%': { background: 'linear-gradient(90deg, transparent, rgba(255, 0, 0, 0.1), transparent)' },
          '50%': { background: 'linear-gradient(90deg, transparent, rgba(255, 0, 0, 0.2), transparent)' },
        },
      },
      backgroundImage: {
        'cyber-dots': 'radial-gradient(#111 1px, transparent 1px)',
        'matrix-rain': 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 0, 0.03) 2px, rgba(0, 255, 0, 0.03) 4px)',
      },
      backgroundSize: {
        'dots': '20px 20px',
      },
    },
  },
  plugins: [],
}
