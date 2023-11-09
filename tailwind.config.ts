import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        FadeIn: {
          'from': {backgroundColor : '#4E9F3D'},
          'to': {backgroundColor : '#1E5128'}
        },
        FadeOut: {
          'from' : {backgroundColor : '#1E5128'},
          'to' : {backgroundColor : '#4E9F3D'},
        }
      },
      animation: {
        'Fadein' : 'FadeIn 0.5s ease forwards',
        'Fadeout' : 'FadeOut 0.5s ease backwards',
      }
    },
  },
  plugins: [],
}
export default config
