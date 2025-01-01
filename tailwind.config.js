/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "background": "var(--background)",
      "primary": "var(--primary)",
      "secondary": "var(--secondary)",
      "accent" : "var(--accent)",
      "text": "var(--text)",
      "heading": "var(--heading-text)",
      "link-text": "var(--link-text)",
      "white" : "var(--white)",
    },
    extend: {},
  },
  plugins: [],
};
