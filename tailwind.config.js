/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'poppins-regular': ['Poppins-Regular', 'sans-serif'],
        'poppins-bold': ['Poppins-Bold', 'sans-serif'],
        'poppins-medium': ['Poppins-Medium', 'sans-serif'],
        'poppins-light': ['Poppins-Light', 'sans-serif'],
        'poppins-thin': ['Poppins-Thin', 'sans-serif'],
        'poppins-italic': ['Poppins-Italic', 'sans-serif'],
      },
      colors: {
        // Light theme
        light: {
          background: '#ffffff',
          text: '#1f2937',
        },
        // Dark theme
        dark: {
          background: '#1f2937',
          text: '#f9fafb',
        },
      },
    },
  },
  plugins: [],
}
