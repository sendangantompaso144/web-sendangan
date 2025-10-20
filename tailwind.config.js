/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        surface: '#f8fafc',
        primary: {
          DEFAULT: '#14532d',
          foreground: '#fefce8',
        },
        accent: '#0ea5e9',
      },
    },
  },
  plugins: [],
};

export default config;
