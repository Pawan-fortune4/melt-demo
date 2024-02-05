import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },

      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        lightGrey: '#f7f7f7',
        grey: '#656060',
      },
    },
  },
  plugins: [],
}
export default config
