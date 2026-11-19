/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: '#0B132B',
            50: '#F0F3FA',
            100: '#DDE3F4',
            200: '#BDCBEA',
            300: '#92AADB',
            400: '#5F82C6',
            500: '#3D61A8',
            600: '#2A4683',
            700: '#1D2D5E',
            800: '#141F43',
            900: '#0B132B',
            950: '#050917',
          },
          gold: {
            DEFAULT: '#B5892E',
            hover: '#9A7222',
            light: '#FBF7EE',
            border: '#E6D5B0',
            dark: '#84621A',
            50: '#FDFBF7',
            100: '#FBF7EE',
            200: '#F5EACF',
            300: '#EBDAA7',
            400: '#D8BE6E',
            500: '#B5892E',
            600: '#9A7222',
            700: '#7B591A',
            800: '#5E4316',
            900: '#432F10',
          },
          canvas: {
            bg: '#FFFFFF',
            muted: '#F8F9FB',
            card: '#FFFFFF',
            border: '#E5E7EB',
          }
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(11, 19, 43, 0.06)',
        'card-hover': '0 12px 30px -4px rgba(181, 137, 46, 0.15)',
        'gold-glow': '0 0 25px rgba(181, 137, 46, 0.25)',
      }
    },
  },
  plugins: [],
}
