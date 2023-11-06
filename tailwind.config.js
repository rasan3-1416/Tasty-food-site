/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

// Typography Breakpoint
const typoBg = '@media(min-width: 768px)'

module.exports = {
  content: [
    "./index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Customized Font
      fontFamily: {
        body: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
    fontWeight: {
      'normal': '400',
      'medium': '500',
      'semi-bold': '600',
    },
    screens: {
      // Customzied Breakpoints
      'xm': {'max': '320px'},
      'sm': '576px',
      'md': '768px',
      'lg': '960px',
      // ...defaultTheme.screens,
    },
    colors: {
      // Color Palette
      'transparent': 'transparent',
      'container': 'var(--container)',
      'body': 'var(--body)',
      'first': 'var(--first)',
      'first-alt': 'var(--first-alt)',
      'title': 'var(--title)',
      'prime': '(--prime)',
      'prime-light': '(prime-light)',
    },
    container: {
      center: true,
      padding: {
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
      },
      screens: {
        xm: '320px',
        sm: '576px',
        md: '768px',
        lg: '960px',
      }
    }
  },
  plugins: [
    // Custom Responsive Font Sizes
    plugin(function({addUtilities}){
      addUtilities({
        '.fs-3xl': {
          fontSize: '2.5rem',
          '@media (min-width: 768px)': {
            fontSize: '4rem',
          }
        },
        '.fs-2xl': {
          fontSize: '1.5rem',
          '@media (min-width: 768px)': {
            fontSize: '2.25rem',
          }
        },
        '.fs-xl': {
          fontSize: '1.25rem',
          '@media (min-width: 768px': {
            fontSize: '1.5rem',
          }
        },
        '.fs-md': {
          fontSize: '1rem',
          '@media (min-width: 768px)': {
            fontSize: '1.25rem',
          }
        },
        '.fs-normal': {
          fontSize: '0.938rem',
          '@media (min-width: 768px)': {
            fontSize: '1rem',
          }
        },
        '.fs-sm': {
          fontSize: '0.813rem',
          '@media (min-width: 768px)': {
            fontSize: '0.875rem',
          }
        },
        '.fs-xm': {
          fontSize: '0.75rem',
          '@media (min-width: 768px)': {
            fontSize: '0.813rem',
          }
        },
      })
    })
  ],
}

