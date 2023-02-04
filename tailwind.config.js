/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'blur-none': 'transparent',
        'blur-sm': 'rgba(255, 255, 255, 0.05)',
        'blur-md': 'rgba(255, 255, 255, 0.1)',
        'blur-lg': 'rgba(255, 255, 255, 0.15)',
        'blur-xl': 'rgba(255, 255, 255, 0.2)',
        'blur-2xl': 'rgba(255, 255, 255, 0.25)',
        'blur-3xl': 'rgba(255, 255, 255, 0.3)',
        'blur-4xl': 'rgba(255, 255, 255, 0.35)',
        'blur-5xl': 'rgba(255, 255, 255, 0.4)',
        'blur-6xl': 'rgba(255, 255, 255, 0.45)',
      },
    },
  },
  plugins: [],
}
