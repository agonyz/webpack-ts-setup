import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,html}'],
  plugins: [require('daisyui')],
};

export default config;
