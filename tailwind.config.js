/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "510px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    fontSize: {
      sm: "1.125rem",
      base: "1.25rem",
      lg: "1.5rem",
      xl: "1.75rem",
      "2xl": "2.5rem",
      "3xl": "4rem",
    },
    extend: {
      colors: {
        "primary-brown": {
          light: "#EDE9E8",
          "light-hover": "#E5DEDC",
          "light-active": "#C8BBB6",
          normal: "#4F2315",
          "normal-hover": "#472013",
          "normal-active": "#472013",
          dark: "#3B1A10",
          "dark-hover": "#2F150D",
          "dark-active": "#241009",
          darker: "#1C0C07",
        },
        "primary-gray": {
          light: "#F5F4F3",
          "light-hover": "#F0EFED",
          "light-active": "#DFDED9",
          normal: "#989484",
          "normal-hover": "#898577",
          "normal-active": "#7A766A",
          dark: "#726F63",
          "dark-hover": "#5B594F",
          "dark-active": "#5B594F",
          darker: "#35342E",
        },
        "secondary-brown": {
          light: "#F5F2EE",
          "light-hover": "#F0EBE5",
          "light-active": "#DFD5C9",
          normal: "#997950",
          "normal-hover": "#8A6D48",
          "normal-active": "#7A6140",
          dark: "#735B3C",
          "dark-hover": "#5C4930",
          "dark-active": "#453624",
          darker: "#362A1C",
        },
        "primary-orange": {
          light: "#FAF2EB",
          "light-hover": "#F8ECE1",
          "light-active": "#F0D7C2",
          normal: "#CE7D39",
          "normal-hover": "#B97133",
          "normal-active": "#A5642E",
          dark: "#9B5E2B",
          "dark-hover": "#7C4B22",
          "dark-active": "#5D381A",
          darker: "#482C14",
        },
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        sourceSerif: "'Source Serif 4', serif",
      },
      boxShadow: {
        "3xl": "0px 4px 10px 0px rgba(47, 21, 13, 0.10)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
