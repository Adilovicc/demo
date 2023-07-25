/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
  ],
  theme: {
    extend: {
      aspectRatio:{
        'bannerImage' : '420 / 618',
        'video': '16 / 9',
        'square':'1 / 1',
        'image':'14/10'
      }

    },
  },
  plugins: [],
}
