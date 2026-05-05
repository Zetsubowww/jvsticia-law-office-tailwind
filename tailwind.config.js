/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      fontSize: {
        'fluid-xs':   ['clamp(0.75rem, 1vw, 0.875rem)'],
        'fluid-sm':   ['clamp(0.875rem, 1.5vw, 1rem)'],
        'fluid-base': ['clamp(1rem, 2vw, 1.25rem)'],
        'fluid-lg':   ['clamp(1.125rem, 2.5vw, 1.5rem)'],
        'fluid-xl':   ['clamp(1.25rem, 3vw, 2rem)'],
        'fluid-2xl':  ['clamp(1.5rem, 3.5vw, 2.5rem)'],
        'fluid-3xl':  ['clamp(2rem, 4vw, 3rem)'],
        'fluid-4xl':  ['clamp(2.5rem, 5vw, 4rem)'],
        'fluid-5xl':  ['clamp(3rem, 6vw, 5rem)'],
      }
    },
  },
  plugins: [],
}

