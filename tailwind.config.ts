import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable dark mode with the 'class' strategy
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#1DA1F2',
          dark: '#0D6EFD',
        },
        background: {
          light: '#ffffff',
          dark: '#121212',
        },
        text: {
          light: '#000000',
          dark: '#ffffff',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
