/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--clr-primary)',
        secondary: 'var(--clr-secondary)',
        tertiary: 'var(--clr-tertiary)',
        'accent-1': 'var(--clr-accent-1)',
        'accent-2': 'var(--clr-accent-2)',
        'hover-1': 'var(--clr-hover-1)',
        'hover-2': 'var(--clr-hover-2)',
        'hover-3': 'var(--clr-hover-3)',
        light: 'var(--clr-light)'
      },
      textColor: {
        primary: 'var(--clr-primary)',
        secondary: 'var(--clr-secondary)',
        tertiary: 'var(--clr-tertiary)',
        'accent-1': 'var(--clr-accent-1)',
        'accent-2': 'var(--clr-accent-2)',
        'hover-1': 'var(--clr-hover-1)',
        'hover-2': 'var(--clr-hover-2)',
        'hover-3': 'var(--clr-hover-3)',
        light: 'var(--clr-light)'
      }
    },
  },
  plugins: [],
}
