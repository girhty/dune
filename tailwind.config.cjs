/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Deep OLED surfaces */
        void: {
          DEFAULT: '#070707',
          900: '#050505',
          800: '#0c0b09',
          700: '#151310',
          600: '#1e1a15',
        },
        /* Warm bone / cream surfaces */
        bone: {
          DEFAULT: '#f1f1ef',
          100: '#faf9f6',
          200: '#eceae4',
          300: '#dcd9d0',
          400: '#c4bfb2',
        },
        /* Volumetric amber accents */
        ember: {
          200: '#ffe3b8',
          300: '#ffd28a',
          400: '#f7b267',
          500: '#e08b34',
          600: '#b96a1e',
          700: '#8a4d13',
        },
        clay: '#8a5a2b',
        iris: '#9fb8ff',
      },
      fontFamily: {
        display: [
          '"Space Grotesk"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        script: ['"Italianno"', '"Segoe Script"', 'cursive'],
        arabic: ['"Noto Kufi Arabic"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.34em',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      boxShadow: {
        ember: '0 24px 80px -30px rgba(247,178,103,0.55)',
        deep: '0 40px 120px -50px rgba(0,0,0,0.9)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseDot: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.45', transform: 'scale(0.82)' },
        },
        sheen: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        marquee: 'marquee 34s linear infinite',
        floaty: 'floaty 7s ease-in-out infinite',
        pulseDot: 'pulseDot 1.9s ease-in-out infinite',
        sheen: 'sheen 6s linear infinite',
      },
    },
  },
  plugins: [],
};