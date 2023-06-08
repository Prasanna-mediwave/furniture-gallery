/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBG: "#FFFFFF",
        primaryContent: "#313131",
        grey: "#E8E8E8",
        sandleYellow: "#D1A800",
        red: "#C12929",
        pages: "#EAEAEA",
        bColor: "#F2F2F2",
      },
      fontSize: {
        font_sm: "18px",
        font_ms: "22px",
        font_md: "26px",
        font_lg: "38px",
        font_xl: "50px",
      },
      fontFamily: {
        primaryFont: "'Raleway', sans-serif",
        secondaryFont: "'Poppins', sans-serif",
      },
      boxShadow: {
        default: "0px 8px 16px #0000000A",
        priceCard: "0px 16px 12px #00000014",
      },
    },
  },
  plugins: [],
};
