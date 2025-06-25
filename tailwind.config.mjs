/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['InterVariable', 'Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        orange: {
          500: '#f97316',
        },
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
        soft: '0 4px 24px 0 rgba(0,0,0,0.08)',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'glass': 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.05) 100%)',
      },
    },
  },
  plugins: [],
}; 