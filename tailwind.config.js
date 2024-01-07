/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage:{
        "login-background":'url("/background.avif")'
      },
      height:{
        'large-box':'400px'
      }
    },
  },
  plugins: [ 
    // require('flowbite/plugin')
  ],
}
