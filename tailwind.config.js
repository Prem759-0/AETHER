/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif']
      },
      colors: {
        void: '#0a0a0a',
        aurora: {
          400: '#22f0ff',
          500: '#a855f7',
          600: '#ec4899'
        }
      }
    }
  }
}
