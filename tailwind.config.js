/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

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
      // Custom Shadow
      boxShadow: {
        '3xl': '0 4px 4px hsla(0, 100%, 0%, 0.1)',
        '4xl': '0 4px 7px hsla(0, 100%, 0%, 0.1)',
      },
      // Custom Index Value
      zIndex: {
        'tooltip': 10,
        'fixed': 100,
      },
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
      'container': 'var(--container-color)',
      'body': 'var(--body-color)',
      'first': 'var(--first-color)',
      'first-alt': 'var(--first-alt-color)',
      'title': 'var(--title-color)',
      'prime': 'var(--prime-color)',
      'prime-light': 'var(prime-light-color)',
      'white': 'var(--white-color)',
      'dark': 'var(--dark-color)',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '960px',
      }
    },
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
          '@media (min-width: 768px)': {
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
        // Custom Height
        '.h-header': {
          height: 'var(--header-height)',
          '@media (min-width: 768px)': {
            height: 'calc(var(--header-height) + 1.5rem)',
          }
        },
        // Custom Trasition
        '.trans-ease': {
          transition: '0.3s',
        }
      })
    }),
    plugin(function({ addVariant }) {
      addVariant("dynamic-style", ".dynamic-style&")
    })

  ],
}

