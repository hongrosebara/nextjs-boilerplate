/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'brand-1': 'var(--color-brand-1)',
        'brand-1-1': 'var(--color-brand-1-1)',
        'brand-1-c': 'var(--color-brand-1-c)',
        'brand-2': 'var(--color-brand-2)',
        'brand-3': 'var(--color-brand-3)',
        light: 'var(--color-light)',
        dark: 'var(--color-dark)',
      },
      textColor: {
        'brand-1': 'var(--color-brand-1)',
        'brand-1-1': 'var(--color-brand-1-1)',
        'brand-1-c': 'var(--color-brand-1-c)',
        'brand-2': 'var(--color-brand-2)',
        'brand-3': 'var(--color-brand-3)',
        light: 'var(--color-light)',
        dark: 'var(--color-dark)',
      },
      fontSize: {
        50: 'var(--fs-50)',
        100: 'var(--fs-100)',
        200: 'var(--fs-200)',
        300: 'var(--fs-300)',
        400: 'var(--fs-400)',
        500: 'var(--fs-500)',
      },
      fontFamily: {
        'heading': ['Poppins'],
        'subheading': ['Raleway'],
        'serif': ['Roboto Slab'],
        'body': ['Roboto']
      },
    },
  },
  plugins: [],
}
