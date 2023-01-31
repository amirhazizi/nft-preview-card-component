/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      // screens
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        lx: "1440x",
      },
      // colors
      colors: {
        // Primary
        cl_primarySoftblue: "hsl(215, 51%, 70%)",
        cl_primaryCyan: "hsl(178, 100%, 50%)",
        // Neutral
        cl_verydarkblue_1: "hsl(217, 54%, 11%)",
        cl_verydarkblue_2: "hsl(216, 50%, 16%)",
        cl_verydarkblue_3: "hsl(215, 32%, 27%)",
        cl_white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
}
