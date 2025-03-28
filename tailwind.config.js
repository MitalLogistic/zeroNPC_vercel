/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "magenta": "#FF00F2", // Corrected the quotes
        "primary-black": "#313131", // Corrected CSS variable usage
        "secondary-black": "#101010", // Corrected CSS variable usage
        "yellow": "#EEFF00", // Corrected CSS variable usage
        "cyan": "#00FBFB", // Corrected CSS variable usage
        "light-blue": "#E1EDF3",
        "primary-gray": "#78757E",
        "light-gray": "#EAE8F0"
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"], // Added font-family definition
      },
      screens: {
        'xs': '400px',
        'sm': '640px',
        'md': '768px',
        'lg': '1025px',
        '2lg': '1025px',
        'xl': '1280px',
        '2xl': '1536px',
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
